#!/usr/bin/env bash
set -euo pipefail

if [ -f .env ]; then
  set -a
  . ./.env
  set +a
fi

DOMAIN="${DOMAIN:-}"
ACME_EMAIL="${ACME_EMAIL:-}"

echo "==> VSX/AI deploy (Docker)"

if [ -z "$DOMAIN" ]; then
  echo "ERRO: defina DOMAIN no arquivo .env (ex.: cp .env.example .env)" >&2
  exit 1
fi

for port in 80 443; do
  if ss -tln 2>/dev/null | grep -q ":$port "; then
    echo "ATENCAO: porta $port ja esta em uso (Apache/cPanel?). Confira:" >&2
    ss -tlnp 2>/dev/null | grep ":$port " >&2 || true
    read -r -p "Continuar mesmo assim? [s/N] " resp
    [[ "$resp" =~ ^[sS]$ ]] || exit 1
  fi
done

SERVER_IP=$(hostname -I 2>/dev/null | awk '{print $1}')
DNS_IP=$(dig +short "$DOMAIN" 2>/dev/null | tail -n1)
if [ -n "$DNS_IP" ] && [ -n "$SERVER_IP" ] && [ "$DNS_IP" != "$SERVER_IP" ]; then
  echo "ATENCAO: $DOMAIN resolve para $DNS_IP, mas este servidor e $SERVER_IP. O certificado HTTPS falhara." >&2
  read -r -p "Continuar? [s/N] " resp
  [[ "$resp" =~ ^[sS]$ ]] || exit 1
fi

echo "==> docker compose up -d --build"
docker compose up -d --build

sleep 5
docker compose ps

if curl -fsSI "https://$DOMAIN" -o /dev/null 2>/dev/null; then
  echo "==> OK: https://$DOMAIN"
else
  echo "==> AVISO: HTTPS ainda nao respondeu. O certificado Let's Encrypt pode levar ~1min na primeira vez."
  curl -fsSI "http://$DOMAIN" -o /dev/null 2>/dev/null && echo "==> OK HTTP: http://$DOMAIN"
fi

echo "==> Concluido."

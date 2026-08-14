#!/usr/bin/env bash
set -euo pipefail

echo "==> VSX/AI deploy (Docker)"

for port in 80; do
  if ss -tln 2>/dev/null | grep -q ":$port "; then
    echo "ATENCAO: porta $port ja esta em uso (Apache/cPanel?). Confira:" >&2
    ss -tlnp 2>/dev/null | grep ":$port " >&2 || true
    read -r -p "Continuar mesmo assim? [s/N] " resp
    [[ "$resp" =~ ^[sS]$ ]] || exit 1
  fi
done

echo "==> docker compose up -d --build"
docker compose up -d --build

sleep 5
docker compose ps

if curl -fsSI "http://localhost" -o /dev/null 2>/dev/null; then
  echo "==> OK: http://localhost"
else
  echo "==> AVISO: o servidor nao respondeu. Confira os logs com: docker compose logs"
fi

echo "==> Concluido."

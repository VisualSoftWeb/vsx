import Database from 'better-sqlite3'
import { join, dirname } from 'path'
import { mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbPath = join(__dirname, process.env.DB_PATH || './contatos.db')

mkdirSync(dirname(dbPath), { recursive: true })

const db = new Database(dbPath)

db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT,
    servico TEXT NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

export default db

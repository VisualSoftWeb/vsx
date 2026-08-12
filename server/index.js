import express from 'express'
import cors from 'cors'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'
import db from './db.js'

const app = express()
const PORT = process.env.PORT || 3001
const __dirname = dirname(fileURLToPath(import.meta.url))
const distPath = join(__dirname, '../dist')

app.use(cors())
app.use(express.json())

app.post('/api/contato', (req, res) => {
  try {
    const { nome, email, whatsapp, servico } = req.body

    if (!nome || !email || !servico) {
      return res.status(400).json({ error: 'Campos obrigatórios: nome, email, servico' })
    }

    const stmt = db.prepare(
      'INSERT INTO contatos (nome, email, whatsapp, servico) VALUES (?, ?, ?, ?)'
    )
    const result = stmt.run(nome, email, whatsapp || null, servico)

    res.status(201).json({ id: result.lastInsertRowid, message: 'Contato salvo com sucesso!' })
  } catch (err) {
    console.error('Erro ao salvar contato:', err)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

app.get('/api/contatos', (_req, res) => {
  try {
    const contatos = db.prepare('SELECT * FROM contatos ORDER BY criado_em DESC').all()
    res.json(contatos)
  } catch (err) {
    console.error('Erro ao listar contatos:', err)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

app.use(express.static(distPath))

app.use((req, res) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(join(distPath, 'index.html'))
  }
  res.status(404).json({ error: 'Não encontrado' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

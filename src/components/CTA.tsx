import { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

const API_URL = '/api/contato'

export default function CTA() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', servico: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Erro ao enviar contato')

      setSent(true)
    } catch {
      setError('Erro ao enviar. Tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/20 via-ai-dark to-ai-blue/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ai-purple/10 via-transparent to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <span className="text-ai-cyan text-sm font-semibold tracking-widest uppercase">Transforme seu Negócio</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
          Solicite uma Demonstração
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">
          Deixe seu contato e descubra como a inteligência artificial pode impulsionar seus resultados.
        </p>

        <div className="bg-ai-card/80 border border-ai-border/60 rounded-2xl p-8 backdrop-blur-sm max-w-md mx-auto">
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-white font-semibold">Recebemos seu contato!</p>
              <p className="text-gray-400 text-sm">Responderemos em até 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                required
                value={form.nome}
                onChange={handleChange}
                className="w-full bg-ai-dark border border-ai-border rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-ai-purple transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu melhor email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-ai-dark border border-ai-border rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-ai-purple transition-colors"
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="Seu WhatsApp"
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full bg-ai-dark border border-ai-border rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-ai-purple transition-colors"
              />
              <select
                name="servico"
                required
                value={form.servico}
                onChange={handleChange}
                className="w-full bg-ai-dark border border-ai-border rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-ai-purple transition-colors"
              >
                <option value="" disabled>Qual serviço te interessa?</option>
                <option value="automacao">Automação com IA</option>
                <option value="chatbot">Chatbots & Assistentes</option>
                <option value="dados">Análise de Dados</option>
                <option value="consultoria">Consultoria em IA</option>
                <option value="sistemas">Sistemas e Sites</option>
                <option value="outro">Outro</option>
              </select>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-ai-purple hover:bg-ai-accent disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl text-lg transition-all inline-flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Quero saber mais
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-xs text-gray-500">* Respondemos em até 24 horas. Sem compromisso.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

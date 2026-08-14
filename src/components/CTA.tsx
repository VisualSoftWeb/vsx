import { MessageCircle } from 'lucide-react'

const servicos = [
  { label: 'Automação com IA', msg: 'Olá! Tenho interesse no serviço de Automação com IA.' },
  { label: 'Chatbots & Assistentes', msg: 'Olá! Tenho interesse no serviço de Chatbots & Assistentes.' },
  { label: 'Análise de Dados', msg: 'Olá! Tenho interesse no serviço de Análise de Dados.' },
  { label: 'Consultoria em IA', msg: 'Olá! Tenho interesse no serviço de Consultoria em IA.' },
  { label: 'Sistemas e Sites', msg: 'Olá! Tenho interesse no serviço de Sistemas e Sites.' },
  { label: 'Outro', msg: 'Olá! Tenho interesse em um serviço.' },
]

const WHATSAPP = '5521973238344'

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/20 via-ai-dark to-ai-blue/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ai-purple/10 via-transparent to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <span className="text-ai-cyan text-sm font-semibold tracking-widest uppercase">Transforme seu Negócio</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
          Fale Conosco
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">
          Escolha o serviço que te interessa e fale direto conosco pelo WhatsApp.
        </p>

        <div className="bg-ai-card/80 border border-ai-border/60 rounded-2xl p-8 backdrop-blur-sm max-w-md mx-auto">
          <p className="text-white font-semibold mb-6">Qual serviço te interessa?</p>
          <div className="space-y-3">
            {servicos.map((s) => (
              <a
                key={s.label}
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(s.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-ai-dark hover:bg-ai-purple/30 border border-ai-border hover:border-ai-cyan/50 text-white font-medium px-5 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

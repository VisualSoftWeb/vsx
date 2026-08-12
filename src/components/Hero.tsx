import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark via-[#0f0f2e] to-ai-dark z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ai-purple/20 via-transparent to-transparent z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-blue/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ai-purple/30 bg-ai-purple/10 text-ai-purple text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          O Futuro dos Negócios com IA
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-ai-blue via-ai-purple to-ai-cyan bg-clip-text text-transparent animate-gradient">
            A IA não vai te substituir.
          </span>
          <br />
          <span className="text-white">
            Mas quem domina a IA, vai.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-3">
          Agentes, Automações e IA Generativa na prática.
        </p>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-light italic">
          O mercado já mudou. Sua empresa vai liderar ou ficar para trás?
        </p>



        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="group bg-ai-purple hover:bg-ai-accent text-white font-semibold px-8 py-3.5 rounded-full text-lg transition-all animate-pulse-glow inline-flex items-center gap-2"
          >
            Garantir 15 dias grátis
          </a>

        </div>


      </div>
    </section>
  )
}

import { Linkedin, Twitter, Globe, Quote } from 'lucide-react'

export default function Speaker() {
  return (
    <section id="sobre" className="relative py-24 bg-[#0c0c24]">
      <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/5 via-transparent to-ai-blue/5" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ai-cyan text-sm font-semibold tracking-widest uppercase">Sobre Nós</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Quem está por trás da VSX/AI
          </h2>
        </div>

        <div className="bg-ai-card/80 border border-ai-border/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-ai-purple to-ai-cyan p-1">
                  <div className="w-full h-full rounded-full bg-ai-dark flex items-center justify-center overflow-hidden">
                    <img src="/speaker.png" alt="Marconi Mac" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-ai-purple rounded-full p-2">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-purple/10 border border-ai-purple/20 text-ai-purple text-xs font-medium mb-4">
                <span className="w-2 h-2 bg-ai-purple rounded-full animate-pulse" />
                Fundador & Consultor
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">Marconi Mac</h3>
              <p className="text-ai-cyan font-medium mt-1">Especialista em IA | Inovação & Tecnologia</p>

              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-ai-card border border-ai-border text-xs text-gray-400">IA Aplicada</span>
                <span className="px-3 py-1 rounded-full bg-ai-card border border-ai-border text-xs text-gray-400">Tech Lead</span>
                <span className="px-3 py-1 rounded-full bg-ai-card border border-ai-border text-xs text-gray-400">8+ anos</span>
              </div>

              <p className="text-gray-400 mt-5 leading-relaxed max-w-xl">
                Com mais de 8 anos de experiência em tecnologia e Inteligência Artificial, Marconi Mac
                liderou projetos de IA aplicada em grandes empresas, unindo inovação e estratégia para
                transformar negócios através da tecnologia. Fundador da VSX/AI, hoje ajuda empresas a
                implementarem soluções de IA que geram resultados reais.
              </p>

              <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
                <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-ai-purple transition-colors"><Globe className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

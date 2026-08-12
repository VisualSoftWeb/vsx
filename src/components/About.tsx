import { Cpu, MessageSquareText, BarChart3, Globe, Image } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Automação com IA',
    desc: 'Automatize processos repetitivos com Inteligência Artificial, reduzindo custos e erros operacionais.',
  },
  {
    icon: MessageSquareText,
    title: 'Agentes & Assistentes',
    desc: 'Agentes de IA autônomos e assistentes virtuais inteligentes para atendimento, agendamento, suporte e vendas. Tenha um funcionário agentico 24h por dia e 7 dias por semana.',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados com IA',
    desc: 'Transforme dados brutos em insights acionáveis com machine learning e visualização inteligente.',
  },
  {
    icon: Globe,
    title: 'Sistemas e Sites',
    desc: 'Criação de sites, sistemas web e plataformas personalizadas com inteligência artificial integrada.',
  },
  {
    icon: Image,
    title: 'Criação de Imagens e Vídeos',
    desc: 'Produção de conteúdos visuais com IA generativa, desde imagens realistas até vídeos profissionais.',
  },
]

export default function About() {
  return (
    <section id="servicos" className="relative py-24 bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ai-purple text-sm font-semibold tracking-widest uppercase">Nossos Serviços</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Soluções em IA para seu negócio
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Da estratégia à implementação, levamos inteligência artificial para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-ai-card border border-ai-border rounded-2xl p-6 hover:border-ai-purple/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-ai-purple/10 flex items-center justify-center mb-5 group-hover:bg-ai-purple/20 transition-colors">
                <item.icon className="w-6 h-6 text-ai-purple" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

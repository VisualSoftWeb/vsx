import { ShoppingCart, Stethoscope, Building2, Scale, UtensilsCrossed, Factory, GraduationCap, Banknote } from 'lucide-react'

const topics = [
  { icon: ShoppingCart, title: 'E-commerce & Varejo', desc: 'Ex: Chatbot de vendas com recomendações personalizadas e recuperação de carrinhos abandonados.' },
  { icon: Stethoscope, title: 'Clínicas & Saúde', desc: 'Ex: Agendamento inteligente, prontuário digital e triagem com IA para consultórios.' },
  { icon: Building2, title: 'Imobiliárias', desc: 'Ex: Atendimento 24h para qualificação de leads e tour virtual com IA generativa.' },
  { icon: Scale, title: 'Advocacia', desc: 'Ex: Automação de documentos, petições e análise de jurisprudência com IA.' },
  { icon: UtensilsCrossed, title: 'Restaurantes & Delivery', desc: 'Ex: Cardápio inteligente, gestão de pedidos e previsão de demanda com IA.' },
  { icon: Factory, title: 'Indústrias', desc: 'Ex: Manutenção preditiva, controle de qualidade e otimização de produção com IA.' },
  { icon: GraduationCap, title: 'Educação', desc: 'Ex: Tutoria personalizada com IA, correção automática e plano de estudos adaptativo.' },
  { icon: Banknote, title: 'Finanças', desc: 'Ex: Análise de crédito inteligente, detecção de fraudes e consultoria financeira com IA.' },
]

export default function Topics() {
  return (
    <section id="solucoes" className="relative py-24 bg-ai-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ai-purple text-sm font-semibold tracking-widest uppercase">Soluções</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Para todo tipo de empresas e negócios
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Soluções completas em IA para cada necessidade do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="group bg-ai-card border border-ai-border rounded-xl p-6 hover:border-ai-cyan/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <topic.icon className="w-8 h-8 text-ai-cyan mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">{topic.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

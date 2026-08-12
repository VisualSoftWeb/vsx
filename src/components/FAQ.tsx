import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona o período de teste grátis de 15 dias?',
    a: 'Você experimenta a solução por 15 dias sem custo algum. Implementamos um piloto com dados reais do seu negócio para você ver os resultados antes de contratar.',
  },
  {
    q: 'Quanto tempo leva para implementar uma solução de IA?',
    a: 'Depende da complexidade do projeto. Soluções simples podem ficar prontas em 1-2 semanas. Projetos mais complexos levam de 1 a 3 meses. Durante a consultoria inicial, definimos um cronograma realista para você.',
  },
  {
    q: 'Preciso ter uma equipe técnica para contratar?',
    a: 'Não! Cuidamos de tudo, da concepção à entrega. Você só precisa nos contar o problema que quer resolver. Nossa equipe técnica implementa e gerencia toda a solução.',
  },
  {
    q: 'Vocês oferecem suporte após a entrega?',
    a: 'Sim! Oferecemos planos de manutenção e suporte contínuo, incluindo monitoramento, atualizações e melhorias. Seu projeto continua evoluindo conosco.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Aceitamos pagamento via boleto, cartão de crédito, PIX e transferência bancária. Para projetos maiores, parcelamos em até 12x.',
  },
  {
    q: 'Vocês atendem empresas de qualquer porte?',
    a: 'Sim! Atendemos desde startups até grandes corporações. Cada solução é desenhada sob medida para o tamanho e necessidade do seu negócio.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 bg-[#0c0c24]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ai-purple text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-ai-card border border-ai-border rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:bg-ai-border/20 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

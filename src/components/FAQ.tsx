import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona o teste grátis e os créditos?',
    a: 'Ao criar sua conta, você recebe 550 créditos iniciais de cortesia. Com eles, você pode explorar a plataforma, adicionar agentes da nossa loja e testar conversas e fluxos com dados reais do seu negócio antes de escolher um plano pago.',
  },
  {
    q: 'O que é a Loja de Agentes?',
    a: 'É o marketplace interno da plataforma onde você encontra inteligências artificiais especializadas e prontas para uso (como Vendas, Atendimento, Agendamento, Triagem de RH e Suporte Técnico). Basta clicar em "+ Adicionar" para que o agente passe a fazer parte do ecossistema da sua empresa instantaneamente.',
  },
  {
    q: 'Preciso saber programar para configurar os agentes?',
    a: 'Não! A plataforma foi desenhada no modelo No-Code (sem código). Os agentes pré-prontos já vêm com a inteligência estruturada para a função deles. Se você quiser ajustar o comportamento, basta alterar as instruções em texto comum, de forma muito simples e intuitiva.',
  },
  {
    q: 'Posso criar um agente totalmente personalizado do meu jeito?',
    a: 'Sim! Para isso, basta utilizar o Agente Custom na nossa loja. Ele funciona como uma folha em branco onde você define o nome, as instruções detalhadas, a base de conhecimento específica da sua empresa, o modelo de IA e os canais de atendimento que ele vai operar.',
  },
  {
    q: 'Como faço para conectar os agentes ao WhatsApp ou outros canais?',
    a: 'Diretamente no painel do sistema, você encontra as opções de integração para conectar os agentes de forma rápida e automatizada aos principais canais de atendimento que seus clientes usam no dia a dia.',
  },
  {
    q: 'Como funcionam os planos e pagamentos?',
    a: 'Trabalhamos com recargas de créditos e assinaturas flexíveis para acompanhar o volume de interações do seu negócio. Aceitamos PIX, cartão de crédito e boleto bancário, garantindo ativação imediata para você não perder tempo.',
  },
  {
    q: 'Vocês dão suporte ao cliente?',
    a: 'Sim! Damos todo o suporte necessário ao cliente, com uma equipe disponível para ajudar desde a configuração inicial dos seus agentes até dúvidas do dia a dia. Você nunca estará sozinho: estamos prontos para garantir que sua experiência na plataforma seja sempre tranquila.',
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
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
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

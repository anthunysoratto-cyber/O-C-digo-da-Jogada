/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  ChevronDown, 
  Clock, 
  Trophy, 
  Zap, 
  Target, 
  Layout, 
  BarChart3, 
  Users,
  Lock,
  CreditCard,
  Smartphone,
  Gift,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-soccer-blue-border rounded-lg mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center bg-soccer-blue-card hover:bg-opacity-80 transition-all text-left"
      >
        <span className="font-bold text-sm md:text-base">{question}</span>
        <ChevronDown className={`text-soccer-green transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-soccer-blue"
          >
            <p className="p-4 text-gray-400 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1199); // 19:59

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-soccer-orange/10 border border-soccer-orange/40 rounded-lg p-4 text-center max-w-xs mx-auto mb-8">
      <div className="text-[10px] text-soccer-orange uppercase tracking-[3px] font-bold mb-1">⚠️ ESTA OFERTA EXPIRA EM</div>
      <div className="font-display text-5xl text-soccer-orange tracking-widest leading-none">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-soccer-green selection:text-black">
      {/* Ribbon */}
      <div className="bg-soccer-orange text-white font-display uppercase tracking-widest text-sm py-2 text-center">
        🔥 OFERTA ESPECIAL — DISPONÍVEL SÓ AGORA NESSA TELA
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 overflow-hidden text-center bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,230,118,0.1)_0%,transparent_70%)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-soccer-green text-black px-4 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-4"
          >
            ⚽ CÓDIGO DA JOGADA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-7xl uppercase leading-[1.05] mb-6"
          >
            Aprenda a <span className="text-soccer-green italic">Ler o Jogo</span> como um Analista Profissional
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Domine os padrões táticos, identifique zonas de pressão e antecipe jogadas antes mesmo delas acontecerem.
          </motion.p>

          <Timer />

          {/* Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-3xl mx-auto aspect-video bg-soccer-blue-card border-2 border-dashed border-soccer-blue-border rounded-xl flex flex-col items-center justify-center group cursor-pointer overflow-hidden mb-12"
          >
            <div className="w-20 h-20 rounded-full bg-soccer-green/10 border-2 border-soccer-green flex items-center justify-center text-soccer-green group-hover:scale-110 transition-transform">
              <Play fill="currentColor" size={32} />
            </div>
            <p className="mt-4 font-bold text-white">ASSISTA AO VÍDEO AGORA</p>
            <p className="text-xs text-gray-500 mt-1">Descubra o método por trás das grandes análises</p>
          </motion.div>
        </div>
      </section>

      {/* Main Offer Card */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-soccer-blue-card border-2 border-soccer-green rounded-2xl p-8 text-center relative overflow-hidden shadow-2xl shadow-soccer-green/10">
            <div className="absolute top-0 left-0 right-0 bg-soccer-orange text-white font-display py-2 text-sm tracking-widest uppercase">
              🔥 OFERTA DE LANÇAMENTO — SÓ HOJE
            </div>
            
            <div className="mt-8">
              <p className="text-gray-500 line-through text-xl">De R$ 97,00</p>
              <div className="flex items-center justify-center gap-1">
                <span className="font-display text-7xl md:text-8xl text-soccer-green leading-none">R$ 24</span>
                <span className="font-display text-3xl text-soccer-green self-start mt-2">,90</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Pagamento único · Acesso imediato e vitalício</p>
            </div>

            <button className="w-full mt-8 bg-gradient-to-br from-soccer-green to-soccer-green-dark text-black font-display text-2xl tracking-widest py-5 rounded-lg btn-pulse hover:scale-[1.02] transition-transform uppercase">
              Quero o Código da Jogada agora
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-[11px] text-gray-500">
              <span className="flex items-center gap-1"><Lock size={12} /> Pagamento seguro</span>
              <span className="flex items-center gap-1"><CreditCard size={12} /> Pix · Cartão · Boleto</span>
              <span className="flex items-center gap-1"><Smartphone size={12} /> Acesso no celular</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-soccer-blue-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block border border-soccer-green text-soccer-green px-4 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-4">
              CONTEÚDO COMPLETO
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">O que você vai <span className="text-soccer-green italic">aprender</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layout className="text-soccer-green" />, title: "Leitura de Formações", desc: "Entenda como cada sistema tático funciona na prática e como prever os pontos de desequilíbrio." },
              { icon: <Target className="text-soccer-green" />, title: "Zonas de Pressão", desc: "Como identificar os espaços que cada time deixa abertos e prever as jogadas mais prováveis." },
              { icon: <Zap className="text-soccer-green" />, title: "Padrões de Transição", desc: "O segredo está nas transições. Aprenda a reconhecer o comportamento de cada time." },
              { icon: <BarChart3 className="text-soccer-green" />, title: "Análise de Dados", desc: "Quais estatísticas realmente importam? Aprenda a interpretar dados que a maioria ignora." },
              { icon: <Users className="text-soccer-green" />, title: "Contexto das Ligas", desc: "Cada liga tem uma identidade própria. Aprenda a adaptar sua leitura para cada país." },
              { icon: <Trophy className="text-soccer-green" />, title: "Pré-Jogo Profissional", desc: "O checklist completo de pré-jogo que profissionais usam para não errar." }
            ].map((item, i) => (
              <div key={i} className="bg-soccer-blue-card border border-soccer-blue-border p-6 rounded-xl hover:border-soccer-green transition-all group">
                <div className="w-12 h-12 rounded-lg bg-soccer-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-display text-xl uppercase mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-soccer-gold text-black px-4 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-4">
              BÔNUS EXCLUSIVOS
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Presentes <span className="text-soccer-gold italic">para você</span></h2>
          </div>

          <div className="space-y-4">
            {[
              { id: "B1", title: "Planilha de Análise Tática", desc: "A mesma planilha que profissionais usam para registrar padrões de movimentação.", val: "R$ 97,00" },
              { id: "B2", title: "Guia Visual: As 7 Ligas", desc: "Um guia ilustrado mostrando os padrões táticos mais recorrentes nas melhores ligas.", val: "R$ 47,00" }
            ].map((bonus, i) => (
              <div key={i} className="flex gap-6 bg-soccer-blue-card border border-soccer-blue-border p-6 rounded-xl items-start hover:border-soccer-gold/40 transition-all">
                <div className={`w-12 h-12 rounded flex items-center justify-center font-display text-2xl flex-shrink-0 bg-soccer-green text-black`}>
                  {bonus.id}
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase mb-1">{bonus.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{bonus.desc}</p>
                  <p className="text-soccer-green text-[10px] font-bold mt-2 uppercase tracking-widest">VALOR: {bonus.val} — GRÁTIS HOJE</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-soccer-blue-card/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl uppercase text-center mb-12">A diferença na <span className="text-soccer-green italic">prática</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8">
              <h4 className="text-red-500 font-display tracking-widest uppercase text-xs mb-6">Sem o Código</h4>
              <ul className="space-y-4">
                {["Analisa só pelo placar", "Não entende as formações", "Ignora as transições", "Usa dados errados", "Resultados inconsistentes"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-500">
                    <XCircle size={16} className="text-red-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-soccer-green/5 border border-soccer-green/20 rounded-xl p-8">
              <h4 className="text-soccer-green font-display tracking-widest uppercase text-xs mb-6">Com o Código</h4>
              <ul className="space-y-4">
                {["Lê o jogo como analista", "Prevê zonas de risco", "Explora as transições", "Usa dados reais", "Análises com base sólida"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-soccer-green flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-soccer-gold text-black px-4 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-4">
              RESULTADOS REAIS
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Quem já <span className="text-soccer-green italic">está no topo</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Marcos Oliveira", loc: "São Paulo, SP", text: "Eu assistia futebol há anos e achava que entendia. Depois do Código da Jogada percebi que estava vendo só a superfície.", res: "Análises consistentes desde a 1ª semana" },
              { name: "Rafael Mendonça", loc: "Belo Horizonte, MG", text: "O módulo de transições foi o que mais me impactou. Nunca tinha pensado em observar o comportamento do time no momento de perda.", res: "Novo olhar sobre o jogo em 3 dias" },
              { name: "Lucas Ferreira", loc: "Curitiba, PR", text: "A planilha de análise tática que vem de bônus é absurda. Preencho os dados e consigo prever comportamentos com precisão.", res: "Precisão de análise acima de 70%" }
            ].map((dep, i) => (
              <div key={i} className="bg-soccer-blue-card border border-soccer-blue-border p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-soccer-green to-soccer-blue-border flex items-center justify-center font-bold text-black">
                    {dep.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{dep.name}</div>
                    <div className="text-[10px] text-gray-500 uppercase">{dep.loc}</div>
                  </div>
                </div>
                <div className="flex text-soccer-gold mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-gray-400 text-sm italic mb-4">"{dep.text}"</p>
                <div className="bg-soccer-green/10 border-l-2 border-soccer-green p-2 text-[10px] font-bold text-soccer-green uppercase">
                  {dep.res}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-soccer-gold/5 border border-soccer-gold/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full border-4 border-soccer-gold flex items-center justify-center font-display text-5xl text-soccer-gold flex-shrink-0">
            7
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-soccer-gold font-bold text-xl mb-2">Garantia Total de 7 Dias — Risco Zero</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Compre com total segurança. Se em 7 dias você não ficar satisfeito com o conteúdo por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl uppercase">Dúvidas <span className="text-soccer-green italic">Frequentes</span></h2>
          </div>
          <FAQItem 
            question="Funciona para quem nunca estudou tática?" 
            answer="Sim! O conteúdo foi desenvolvido pensando exatamente em quem está começando. Os módulos são progressivos — você começa pelo básico e vai construindo uma base sólida." 
          />
          <FAQItem 
            question="Preciso de muito tempo por dia?" 
            answer="Não. Com o checklist de análise rápida você consegue analisar um jogo em menos de 15 minutos quando dominar o método. Os módulos são curtos e objetivos." 
          />
          <FAQItem 
            question="O acesso é vitalício?" 
            answer="Sim. Após a confirmação do pagamento você tem acesso para sempre ao conteúdo na área de membros. Pode assistir e revisar quando quiser." 
          />
          <FAQItem 
            question="Como recebo o acesso?" 
            answer="Imediatamente após a confirmação do pagamento você recebe um e-mail com os dados de acesso à área de membros. O processo é automático." 
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,230,118,0.1),transparent)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-soccer-orange font-bold text-sm mb-4 uppercase tracking-widest">⏳ ÚLTIMA CHANCE PARA GARANTIR O DESCONTO</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-10">Não deixe seu <span className="text-soccer-green italic">sucesso</span> para depois</h2>
          
          <div className="max-w-xl mx-auto">
            <button className="w-full bg-gradient-to-br from-soccer-green to-soccer-green-dark text-black font-display text-3xl tracking-widest py-6 rounded-lg btn-pulse hover:scale-[1.02] transition-transform uppercase">
              Quero o Código da Jogada agora
            </button>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-gray-500">
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-soccer-green" /> 7 dias de garantia</span>
              <span className="flex items-center gap-1"><Lock size={14} className="text-soccer-green" /> Compra 100% segura</span>
              <span className="flex items-center gap-1"><Zap size={14} className="text-soccer-green" /> Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Downsell Section */}
      <section className="py-20 border-t border-soccer-blue-border bg-black/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-soccer-orange/20 text-soccer-orange border border-soccer-orange/40 px-4 py-1 rounded text-[10px] font-black tracking-widest uppercase mb-6">
            ESPERA! NÃO VÁ EMBORA AINDA...
          </div>
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-6">Ainda está na dúvida? <br /> <span className="text-soccer-orange">Temos uma proposta final.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Se o problema é o valor, queremos te dar uma chance de começar pelo <span className="text-white font-bold">Módulo Essencial</span> por um preço simbólico.
          </p>

          <div className="max-w-md mx-auto bg-soccer-blue-card border border-soccer-orange/30 rounded-2xl p-8 shadow-xl shadow-soccer-orange/5">
            <h4 className="font-display text-xl uppercase mb-4 text-soccer-orange">Versão Essencial</h4>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 size={16} className="text-soccer-orange" /> Módulo Starter: Base Tática</li>
              <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 size={16} className="text-soccer-orange" /> Checklist de Pré-Jogo Rápido</li>
              <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 size={16} className="text-soccer-orange" /> Guia das 3 Ligas Iniciantes</li>
            </ul>
            
            <div className="mb-8">
              <p className="text-gray-500 line-through text-sm">De R$ 47,00</p>
              <div className="flex items-center justify-center gap-1">
                <span className="font-display text-5xl text-soccer-orange leading-none">R$ 14</span>
                <span className="font-display text-2xl text-soccer-orange self-start mt-1">,90</span>
              </div>
            </div>

            <button className="w-full bg-soccer-orange text-white font-display text-xl tracking-widest py-4 rounded-lg hover:bg-opacity-90 transition-all uppercase">
              Quero o Essencial por R$ 14,90
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-soccer-blue-border text-center text-[10px] text-gray-600 uppercase tracking-widest">
        <div className="max-w-4xl mx-auto px-6">
          <p>© 2025 Código da Jogada · Todos os direitos reservados</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-soccer-green transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-soccer-green transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-soccer-green transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

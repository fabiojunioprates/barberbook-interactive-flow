
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black relative">
        <div className="container mx-auto py-24 px-4 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-barber-amber mb-6">
              O Estilo Que Define Quem Você É
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Agende seu serviço de barbearia online em segundos e desfrute de uma experiência premium com os melhores profissionais da cidade.
            </p>
            <button 
              onClick={() => navigate('/booking')}
              className="px-8 py-4 rounded-md primary-button text-lg"
            >
              Agendar Agora
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>
      </header>
      
      <section className="py-16 bg-barber-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-barber-amber mb-12 text-center">
            Por que escolher a BarberBook?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-barber-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-barber-amber/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-barber-amber">Agendamento Rápido</h3>
              <p className="text-gray-400">
                Agende seu corte em menos de 1 minuto, diretamente do seu celular ou computador.
              </p>
            </div>
            
            <div className="bg-barber-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-barber-amber/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-barber-amber">Profissionais Premium</h3>
              <p className="text-gray-400">
                Nossa equipe é formada pelos melhores barbeiros, com anos de experiência e talento comprovado.
              </p>
            </div>
            
            <div className="bg-barber-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-barber-amber/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-barber-amber">Programa de Fidelidade</h3>
              <p className="text-gray-400">
                Ganhe pontos a cada visita e troque por serviços gratuitos ou descontos exclusivos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-barber-darkblue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-barber-amber mb-2">
            Pronto para renovar seu visual?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Use o código <span className="text-barber-amber font-bold">BEMVINDO20</span> e ganhe 20% de desconto no seu primeiro agendamento
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="px-8 py-4 rounded-md primary-button text-lg"
          >
            Agendar Agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;

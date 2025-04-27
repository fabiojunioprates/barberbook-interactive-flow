
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-xl mx-auto bg-barber-card rounded-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-barber-amber mb-4">
          Agendamento Confirmado!
        </h1>
        
        <p className="text-gray-300 mb-6">
          Seu agendamento foi confirmado com sucesso. Em breve você receberá uma confirmação via SMS ou WhatsApp com todos os detalhes.
        </p>
        
        <div className="bg-barber-darkblue rounded-lg p-4 mb-6">
          <p className="text-gray-400 text-sm">
            Lembre-se: você pode cancelar ou reagendar seu horário com até 2 horas de antecedência sem custos adicionais.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/agendamentos" className="px-6 py-3 rounded-md primary-button">
            Ver Meus Agendamentos
          </Link>
          
          <Link to="/" className="px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition">
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

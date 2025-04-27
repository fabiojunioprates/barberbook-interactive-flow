
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../../context/AppointmentContext";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { toast } from "sonner";

const Confirmation = () => {
  const navigate = useNavigate();
  const { state, setClientInfo, previousStep, resetBooking } = useAppointment();
  const [name, setName] = useState(state.clientName || "");
  const [phone, setPhone] = useState(state.clientPhone || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirmation = async () => {
    if (!name || !phone) {
      toast.error("Por favor, preencha seu nome e telefone");
      return;
    }
    
    // Save client info to state
    setClientInfo(name, phone);
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Agendamento confirmado com sucesso!");
      resetBooking();
      navigate("/agendamento-confirmado");
    } catch (error) {
      toast.error("Erro ao confirmar agendamento. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Confirmar agendamento</h2>
      
      <div className="bg-barber-card p-4 rounded-lg mb-6">
        <h3 className="font-medium text-barber-amber mb-4">Resumo do Agendamento</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Serviço:</span>
            <span>{state.selectedService?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Barbeiro:</span>
            <span>{state.selectedBarber?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Data:</span>
            <span>
              {state.selectedDate && format(state.selectedDate, "dd/MM/yyyy (EEEE)", { locale: pt })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Horário:</span>
            <span>{state.selectedTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Duração:</span>
            <span>{state.selectedService?.duration} minutos</span>
          </div>
          {state.discountApplied && (
            <>
              <div className="flex justify-between">
                <span className="text-gray-400">Preço original:</span>
                <span className="line-through">R$ {state.selectedService?.price.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Desconto:</span>
                <span className="text-green-500">
                  -R$ {state.discountAmount.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </>
          )}
          <div className="flex justify-between font-medium pt-2 border-t border-gray-700">
            <span>Total:</span>
            <span className="text-barber-amber">R$ {state.totalPrice.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-barber-card p-4 rounded-lg mb-6">
        <h3 className="font-medium text-barber-amber mb-4">Seus dados</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-barber-card p-4 rounded-lg mb-6">
        <h3 className="font-medium text-barber-amber mb-2">Política de cancelamento</h3>
        <p className="text-sm text-gray-400">
          É possível cancelar ou reagendar seu horário com até 2 horas de antecedência sem custos adicionais.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <button 
          className="px-6 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
          onClick={previousStep}
        >
          &larr; Voltar
        </button>
        <button 
          className={`
            px-6 py-2 rounded-md primary-button flex items-center
            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
          `}
          onClick={handleConfirmation}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-barber-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processando...
            </>
          ) : (
            "Confirmar Agendamento"
          )}
        </button>
      </div>
    </div>
  );
};

export default Confirmation;

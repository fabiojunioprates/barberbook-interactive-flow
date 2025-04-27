
import { useState } from "react";
import { useAppointment } from "../context/AppointmentContext";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

const BookingSummary = () => {
  const { state, applyCoupon } = useAppointment();
  const [couponCode, setCouponCode] = useState(state.couponCode || "BEMVINDO20");
  
  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
  };
  
  return (
    <div className="bg-barber-card rounded-lg p-6">
      <h2 className="text-xl font-bold text-barber-amber mb-6">Resumo</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Serviço:</span>
          <span>
            {state.selectedService?.name || "—"}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Barbeiro:</span>
          <span>
            {state.selectedBarber?.name || "—"}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Data:</span>
          <span>
            {state.selectedDate 
              ? format(state.selectedDate, "dd/MM/yyyy", { locale: pt })
              : "—"
            }
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Horário:</span>
          <span>
            {state.selectedTime || "—"}
          </span>
        </div>
        
        <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
          <span className="font-bold">Total:</span>
          <span className="font-bold text-xl text-barber-amber">
            R$ {state.totalPrice.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-700">
        <h3 className="flex items-center font-bold text-barber-amber mb-4">
          <span className="mr-2">🎁</span> Oferta Especial
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Ganhe 20% de desconto no seu primeiro agendamento usando o código:
        </p>
        <div className="bg-gray-800 rounded p-3 mb-4 text-center">
          <code className="font-bold text-barber-amber">BEMVINDO20</code>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Digite o código"
            className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-barber-amber"
          />
          <button
            className="primary-button px-4 py-2 rounded"
            onClick={handleApplyCoupon}
          >
            Aplicar Cupom
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;

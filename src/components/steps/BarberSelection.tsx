
import { useState, useEffect } from "react";
import { useAppointment } from "../../context/AppointmentContext";
import { barbers } from "../../data/mockData";

const BarberSelection = () => {
  const { state, selectBarber, nextStep, previousStep } = useAppointment();
  const [selectedBarberId, setSelectedBarberId] = useState<string | null>(
    state.selectedBarber?.id || null
  );
  const [availableBarbers, setAvailableBarbers] = useState(barbers);

  useEffect(() => {
    // Filter barbers who can perform the selected service
    if (state.selectedService) {
      const filtered = barbers.filter(barber => 
        barber.services.includes(state.selectedService?.id || '')
      );
      setAvailableBarbers(filtered);
    }
  }, [state.selectedService]);

  const handleSelectBarber = (barberId: string) => {
    const barber = barbers.find(b => b.id === barberId);
    if (barber) {
      setSelectedBarberId(barberId);
      selectBarber(barber);
    }
  };

  const handleNext = () => {
    if (selectedBarberId) {
      nextStep();
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Escolha o barbeiro</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableBarbers.map(barber => (
          <div
            key={barber.id}
            className={`
              service-card bg-barber-card p-4 rounded-lg
              ${selectedBarberId === barber.id ? 'selected' : ''}
            `}
            onClick={() => handleSelectBarber(barber.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                <img 
                  src={barber.avatar} 
                  alt={barber.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-barber-amber">{barber.name}</h3>
                <p className="text-sm text-gray-400">{barber.speciality}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 mr-1">⭐</span>
                  <span className="text-sm text-gray-400">{barber.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
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
            px-6 py-2 rounded-md primary-button
            ${!selectedBarberId ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          onClick={handleNext}
          disabled={!selectedBarberId}
        >
          Próximo &rarr;
        </button>
      </div>
    </div>
  );
};

export default BarberSelection;

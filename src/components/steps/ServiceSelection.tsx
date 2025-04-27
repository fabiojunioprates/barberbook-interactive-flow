
import { useState } from "react";
import { useAppointment } from "../../context/AppointmentContext";
import { services } from "../../data/mockData";

const ServiceSelection = () => {
  const { state, selectService, nextStep } = useAppointment();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    state.selectedService?.id || null
  );

  const handleSelectService = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setSelectedServiceId(serviceId);
      selectService(service);
    }
  };

  const handleNext = () => {
    if (selectedServiceId) {
      nextStep();
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Escolha o serviço</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(service => (
          <div
            key={service.id}
            className={`
              service-card bg-barber-card p-4 rounded-lg
              ${selectedServiceId === service.id ? 'selected' : ''}
            `}
            onClick={() => handleSelectService(service.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium text-barber-amber">{service.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400">{service.duration} min</span>
                </div>
              </div>
              <div className="text-2xl">{service.icon}</div>
            </div>
            <div className="mt-3 text-right">
              <span className="font-medium text-barber-amber">
                R$ {service.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          className={`
            px-6 py-2 rounded-md primary-button
            ${!selectedServiceId ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          onClick={handleNext}
          disabled={!selectedServiceId}
        >
          Próximo &rarr;
        </button>
      </div>
    </div>
  );
};

export default ServiceSelection;

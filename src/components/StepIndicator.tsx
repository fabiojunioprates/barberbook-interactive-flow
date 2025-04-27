
import { useAppointment } from "../context/AppointmentContext";

const StepIndicator = () => {
  const { state } = useAppointment();
  const { currentStep } = state;

  const steps = [
    { number: 1, label: "Serviço" },
    { number: 2, label: "Barbeiro" },
    { number: 3, label: "Data/Hora" },
    { number: 4, label: "Confirmar" },
  ];

  return (
    <div className="step-progress mb-8">
      {steps.map(step => (
        <div 
          key={step.number} 
          className={`step-progress-item ${
            currentStep === step.number 
              ? "active" 
              : currentStep > step.number 
              ? "complete" 
              : ""
          }`}
        >
          <div className="step-indicator">{step.number}</div>
          <div className="text-sm mt-1">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;

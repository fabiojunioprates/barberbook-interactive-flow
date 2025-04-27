
import { useAppointment } from "../context/AppointmentContext";
import StepIndicator from "../components/StepIndicator";
import ServiceSelection from "../components/steps/ServiceSelection";
import BarberSelection from "../components/steps/BarberSelection";
import DateTimeSelection from "../components/steps/DateTimeSelection";
import Confirmation from "../components/steps/Confirmation";
import BookingSummary from "../components/BookingSummary";

const BookingPage = () => {
  const { state } = useAppointment();
  const { currentStep } = state;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ServiceSelection />;
      case 2:
        return <BarberSelection />;
      case 3:
        return <DateTimeSelection />;
      case 4:
        return <Confirmation />;
      default:
        return <ServiceSelection />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-barber-card rounded-lg p-6">
            <h1 className="text-2xl font-bold text-barber-amber mb-6">
              Agende seu corte
            </h1>
            
            <StepIndicator />
            {renderStepContent()}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <BookingSummary />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;


import { useState } from "react";
import { useAppointment } from "../../context/AppointmentContext";
import { generateTimeSlots } from "../../data/mockData";
import { format, addDays, isSameDay } from "date-fns";
import { pt } from "date-fns/locale";

const DateTimeSelection = () => {
  const { state, selectDate, selectTime, nextStep, previousStep } = useAppointment();
  const [selectedDate, setSelectedDate] = useState<Date>(state.selectedDate || new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(state.selectedTime);
  
  const [availableDates, setAvailableDates] = useState<Date[]>(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      dates.push(addDays(today, i));
    }
    return dates;
  });
  
  const [timeSlots, setTimeSlots] = useState(() => generateTimeSlots(selectedDate));
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    selectDate(date);
    setTimeSlots(generateTimeSlots(date));
    setSelectedTimeSlot(null); // Reset time selection when date changes
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTimeSlot(time);
    selectTime(time);
  };
  
  const handleNext = () => {
    if (selectedDate && selectedTimeSlot) {
      nextStep();
    }
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Escolha a data e horário</h2>
      
      <div>
        <h3 className="text-lg mb-3">Selecione uma data:</h3>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2 mb-6">
          {availableDates.map((date, index) => (
            <div
              key={index}
              className={`
                p-2 rounded-lg text-center cursor-pointer transition
                ${isSameDay(date, selectedDate) 
                  ? 'bg-barber-amber text-barber-dark' 
                  : 'bg-barber-card hover:bg-gray-700'}
              `}
              onClick={() => handleDateSelect(date)}
            >
              <div className="text-sm">{format(date, 'EEE', { locale: pt })}</div>
              <div className="text-lg font-semibold">{format(date, 'dd')}</div>
              <div className="text-xs">{format(date, 'MMM', { locale: pt })}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg mb-3">Selecione um horário:</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              className={`
                p-2 rounded-lg text-center transition
                ${selectedTimeSlot === slot.time 
                  ? 'bg-barber-amber text-barber-dark' 
                  : slot.available 
                  ? 'bg-barber-card hover:bg-gray-700' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
              `}
              onClick={() => slot.available && handleTimeSelect(slot.time)}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          ))}
        </div>
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
            ${!selectedTimeSlot ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          onClick={handleNext}
          disabled={!selectedTimeSlot}
        >
          Próximo &rarr;
        </button>
      </div>
    </div>
  );
};

export default DateTimeSelection;


import { Service, Barber, TimeSlot } from "../types";

export const services: Service[] = [
  {
    id: "service1",
    name: "Corte Clássico",
    duration: 30,
    price: 35,
    icon: "✨"
  },
  {
    id: "service2",
    name: "Corte + Barba",
    duration: 60,
    price: 60,
    icon: "✂️"
  },
  {
    id: "service3",
    name: "Barba",
    duration: 25,
    price: 30,
    icon: "🧔"
  },
  {
    id: "service4",
    name: "Corte Premium",
    duration: 45,
    price: 50,
    icon: "✨"
  }
];

export const barbers: Barber[] = [
  {
    id: "barber1",
    name: "Gabriel",
    avatar: "/placeholder.svg",
    services: ["service1", "service2", "service3", "service4"],
    rating: 4.9,
    availableDays: ["1", "2", "3", "4", "5"],
    speciality: "Cortes modernos"
  },
  {
    id: "barber2",
    name: "Rafael",
    avatar: "/placeholder.svg",
    services: ["service1", "service2", "service3"],
    rating: 4.7,
    availableDays: ["1", "3", "5", "6"],
    speciality: "Barba"
  },
  {
    id: "barber3",
    name: "Carlos",
    avatar: "/placeholder.svg",
    services: ["service1", "service4"],
    rating: 4.8,
    availableDays: ["2", "4", "5", "6", "0"],
    speciality: "Cortes clássicos"
  }
];

export const generateTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const today = new Date();
  const isToday = date.getDate() === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear();
  
  const startHour = isToday ? Math.max(9, today.getHours() + 1) : 9;
  const endHour = 19;
  
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Skip times in the past if it's today
      if (isToday && hour === today.getHours() && minute <= today.getMinutes()) {
        continue;
      }
      
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const available = Math.random() > 0.3; // Randomly determine availability for demo
      
      slots.push({
        id: `slot-${hour}-${minute}`,
        time: timeString,
        available
      });
    }
  }
  
  return slots;
};

export const validCoupons = [
  {
    code: "BEMVINDO20",
    discount: 0.2,
    description: "20% de desconto no seu primeiro agendamento"
  }
];

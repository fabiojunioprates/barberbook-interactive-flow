
export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  icon: string;
}

export interface Barber {
  id: string;
  name: string;
  avatar: string;
  services: string[];
  rating: number;
  availableDays: string[];
  speciality?: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Appointment {
  serviceId: string;
  barberId: string;
  date: string | null;
  time: string | null;
  totalPrice: number;
  discountApplied: number;
  couponCode?: string;
  clientName?: string;
  clientPhone?: string;
}

export interface AppState {
  currentStep: number;
  selectedService: Service | null;
  selectedBarber: Barber | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  couponCode: string;
  discountApplied: boolean;
  discountAmount: number;
  totalPrice: number;
  clientName: string;
  clientPhone: string;
}

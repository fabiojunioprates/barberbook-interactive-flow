
import { createContext, useContext, useReducer, ReactNode } from "react";
import { Service, Barber, AppState } from "../types";
import { toast } from "sonner";
import { validCoupons } from "../data/mockData";

interface AppointmentContextType {
  state: AppState;
  selectService: (service: Service) => void;
  selectBarber: (barber: Barber) => void;
  selectDate: (date: Date) => void;
  selectTime: (time: string) => void;
  applyCoupon: (code: string) => void;
  setClientInfo: (name: string, phone: string) => void;
  nextStep: () => void;
  previousStep: () => void;
  resetBooking: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

type Action =
  | { type: 'SELECT_SERVICE'; service: Service }
  | { type: 'SELECT_BARBER'; barber: Barber }
  | { type: 'SELECT_DATE'; date: Date }
  | { type: 'SELECT_TIME'; time: string }
  | { type: 'APPLY_COUPON'; code: string }
  | { type: 'SET_CLIENT_INFO'; name: string; phone: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'RESET_BOOKING' };

const initialState: AppState = {
  currentStep: 1,
  selectedService: null,
  selectedBarber: null,
  selectedDate: null,
  selectedTime: null,
  couponCode: "",
  discountApplied: false,
  discountAmount: 0,
  totalPrice: 0,
  clientName: "",
  clientPhone: ""
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SELECT_SERVICE':
      return {
        ...state,
        selectedService: action.service,
        totalPrice: action.service.price
      };
    case 'SELECT_BARBER':
      return {
        ...state,
        selectedBarber: action.barber
      };
    case 'SELECT_DATE':
      return {
        ...state,
        selectedDate: action.date
      };
    case 'SELECT_TIME':
      return {
        ...state,
        selectedTime: action.time
      };
    case 'APPLY_COUPON': {
      const coupon = validCoupons.find(c => c.code === action.code);
      if (!coupon) {
        return state;
      }
      
      const discount = state.selectedService 
        ? state.selectedService.price * coupon.discount
        : 0;
      
      return {
        ...state,
        couponCode: action.code,
        discountApplied: true,
        discountAmount: discount,
        totalPrice: state.selectedService 
          ? state.selectedService.price - discount
          : 0
      };
    }
    case 'SET_CLIENT_INFO':
      return {
        ...state,
        clientName: action.name,
        clientPhone: action.phone
      };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 4)
      };
    case 'PREVIOUS_STEP':
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1)
      };
    case 'RESET_BOOKING':
      return initialState;
    default:
      return state;
  }
}

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectService = (service: Service) => {
    dispatch({ type: 'SELECT_SERVICE', service });
  };

  const selectBarber = (barber: Barber) => {
    dispatch({ type: 'SELECT_BARBER', barber });
  };

  const selectDate = (date: Date) => {
    dispatch({ type: 'SELECT_DATE', date });
  };

  const selectTime = (time: string) => {
    dispatch({ type: 'SELECT_TIME', time });
  };

  const applyCoupon = (code: string) => {
    const coupon = validCoupons.find(c => c.code === code);
    if (coupon) {
      dispatch({ type: 'APPLY_COUPON', code });
      toast.success("Cupom aplicado com sucesso!");
    } else {
      toast.error("Cupom inválido ou expirado");
    }
  };

  const setClientInfo = (name: string, phone: string) => {
    dispatch({ type: 'SET_CLIENT_INFO', name, phone });
  };

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  const resetBooking = () => {
    dispatch({ type: 'RESET_BOOKING' });
  };

  return (
    <AppointmentContext.Provider value={{
      state,
      selectService,
      selectBarber,
      selectDate,
      selectTime,
      applyCoupon,
      setClientInfo,
      nextStep,
      previousStep,
      resetBooking
    }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
}

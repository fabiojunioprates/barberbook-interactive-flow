
import { useNavigate } from "react-router-dom";

// Mock appointment data
const appointments = [
  {
    id: "apt1",
    service: "Corte Clássico",
    barber: "Gabriel",
    date: "2023-10-25",
    time: "14:30",
    status: "scheduled", // "completed", "canceled"
    price: 35
  },
  {
    id: "apt2",
    service: "Barba",
    barber: "Rafael",
    date: "2023-10-10",
    time: "10:00",
    status: "completed",
    price: 30
  },
  {
    id: "apt3",
    service: "Corte + Barba",
    barber: "Carlos",
    date: "2023-09-15",
    time: "16:00",
    status: "canceled",
    price: 60
  }
];

const AppointmentsPage = () => {
  const navigate = useNavigate();
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-500/20 text-blue-400 border-blue-500";
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500";
      case "canceled":
        return "bg-red-500/20 text-red-400 border-red-500";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500";
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "scheduled":
        return "Agendado";
      case "completed":
        return "Concluído";
      case "canceled":
        return "Cancelado";
      default:
        return status;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-barber-amber">
          Meus Agendamentos
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="primary-button px-4 py-2 rounded-md"
        >
          Novo Agendamento
        </button>
      </div>
      
      <div className="bg-barber-card rounded-lg p-6">
        {appointments.length > 0 ? (
          <div className="space-y-4">
            {appointments.map(appointment => (
              <div 
                key={appointment.id} 
                className="bg-barber-darkblue rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="font-medium text-barber-amber">
                    {appointment.service}
                  </h3>
                  <p className="text-sm text-gray-400">
                    com {appointment.barber} • {formatDate(appointment.date)} às {appointment.time}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className={`
                    px-3 py-1 rounded-full border text-xs
                    ${getStatusClass(appointment.status)}
                  `}>
                    {getStatusText(appointment.status)}
                  </div>
                  
                  <div className="text-barber-amber font-medium">
                    R$ {appointment.price.toFixed(2).replace('.', ',')}
                  </div>
                  
                  {appointment.status === "scheduled" && (
                    <div className="flex gap-2">
                      <button className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm transition">
                        Reagendar
                      </button>
                      <button className="px-3 py-1 rounded bg-red-700 hover:bg-red-600 text-sm transition">
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">Você ainda não tem agendamentos.</p>
            <button 
              onClick={() => navigate('/')}
              className="mt-4 primary-button px-4 py-2 rounded-md"
            >
              Agendar Agora
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;

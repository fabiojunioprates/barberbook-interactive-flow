
import { Link } from "react-router-dom";
import { barbers } from "../data/mockData";
import { services } from "../data/mockData";

const BarbersPage = () => {
  // Helper function to get service names by ids
  const getServiceNames = (serviceIds: string[]) => {
    return serviceIds.map(id => {
      const service = services.find(s => s.id === id);
      return service ? service.name : '';
    }).filter(Boolean).join(", ");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-barber-amber mb-8">
        Nossos Barbeiros
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {barbers.map(barber => (
          <div key={barber.id} className="bg-barber-card rounded-lg overflow-hidden shadow-lg">
            <div className="h-60 bg-barber-darkblue flex items-center justify-center">
              <img 
                src={barber.avatar}
                alt={barber.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-barber-amber"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-barber-amber mb-1">
                {barber.name}
              </h2>
              <p className="text-gray-400 mb-3">{barber.speciality}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(barber.rating) ? "text-yellow-400" : "text-gray-600"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{barber.rating.toFixed(1)}</span>
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-medium block mb-1">Serviços:</span>
                <span className="text-sm text-gray-400">{getServiceNames(barber.services)}</span>
              </div>
              
              <div className="flex space-x-2">
                <Link 
                  to="/" 
                  className="block flex-1 py-2 text-center rounded-md primary-button"
                >
                  Agendar
                </Link>
                <button className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                  Perfil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-barber-darkblue rounded-lg p-8 text-center">
        <h2 className="text-xl font-bold text-barber-amber mb-4">
          Quer fazer parte da nossa equipe?
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Estamos sempre em busca de talentos. Se você é barbeiro e quer fazer parte da nossa equipe, entre em contato.
        </p>
        <Link 
          to="/contato" 
          className="inline-block px-6 py-3 rounded-md primary-button"
        >
          Entre em Contato
        </Link>
      </div>
    </div>
  );
};

export default BarbersPage;

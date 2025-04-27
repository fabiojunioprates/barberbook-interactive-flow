
import { Link } from "react-router-dom";
import { services } from "../data/mockData";

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-barber-amber mb-8">
        Nossos Serviços
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-barber-card rounded-lg overflow-hidden shadow-lg">
            <div className="h-40 bg-barber-darkblue flex items-center justify-center">
              <span className="text-5xl">{service.icon}</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-barber-amber mb-2">
                {service.name}
              </h2>
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">{service.duration} minutos</span>
                <span className="font-bold">
                  R$ {service.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <Link 
                to="/" 
                className="block w-full py-2 text-center rounded-md primary-button mt-4"
              >
                Agendar
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Informações Adicionais</h2>
        <div className="bg-barber-card rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-barber-amber mb-2">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos e Feriados</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-barber-amber mb-2">Políticas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="block text-sm font-medium">Cancelamentos</span>
                  <span className="text-sm text-gray-400">
                    Até 2 horas antes sem custo
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium">Atrasos</span>
                  <span className="text-sm text-gray-400">
                    Tolerância de 10 minutos
                  </span>
                </li>
                <li>
                  <span className="block text-sm font-medium">Formas de Pagamento</span>
                  <span className="text-sm text-gray-400">
                    Dinheiro, PIX, Cartão de Crédito e Débito
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;


import { useState } from "react";
import { toast } from "sonner";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 98765-4321",
    password: "********"
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profile });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSave = () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Todos os campos são obrigatórios");
      return;
    }
    
    // Save changes
    setProfile({ ...formData });
    setIsEditing(false);
    toast.success("Perfil atualizado com sucesso!");
  };
  
  const handleCancel = () => {
    setFormData({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-barber-amber mb-8">
        Meu Perfil
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-barber-card rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Informações Pessoais</h2>
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"
                >
                  Editar Perfil
                </button>
              ) : (
                <div className="flex gap-2">
                  <button 
                    onClick={handleCancel}
                    className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleSave}
                    className="px-4 py-2 rounded-md primary-button text-sm"
                  >
                    Salvar
                  </button>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                  Nome completo
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                  />
                ) : (
                  <p>{profile.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                  />
                ) : (
                  <p>{profile.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
                  Telefone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                  />
                ) : (
                  <p>{profile.phone}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm text-gray-400 mb-1">
                  Senha
                </label>
                {isEditing ? (
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                  />
                ) : (
                  <p>{profile.password}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-barber-card rounded-lg p-6 mt-6">
            <h2 className="text-xl font-medium mb-6">Preferências</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notificações por SMS</h3>
                  <p className="text-sm text-gray-400">Receba lembretes sobre seus agendamentos</p>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-700">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    id="notification-sms"
                    defaultChecked
                  />
                  <span className="w-6 h-6 absolute left-0 bg-white rounded-full transition-all duration-300 peer-checked:left-6 peer-checked:bg-barber-amber"></span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notificações por Email</h3>
                  <p className="text-sm text-gray-400">Receba promoções e novidades</p>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-700">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    id="notification-email"
                  />
                  <span className="w-6 h-6 absolute left-0 bg-white rounded-full transition-all duration-300 peer-checked:left-6 peer-checked:bg-barber-amber"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-barber-card rounded-lg p-6">
            <h2 className="text-xl font-medium mb-6">Resumo</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Total de visitas:</span>
                <span>7</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Último serviço:</span>
                <span>Corte Clássico</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Barbeiro favorito:</span>
                <span>Gabriel (5 visitas)</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Cliente desde:</span>
                <span>Agosto 2023</span>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <span className="text-sm text-gray-400">Status do cliente</span>
                <div className="flex justify-between items-center mt-1">
                  <span>Cliente Fiel</span>
                  <span className="px-2 py-1 bg-barber-amber/20 text-barber-amber text-xs rounded-full">
                    5% de desconto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

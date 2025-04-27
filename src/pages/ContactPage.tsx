
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-barber-amber mb-8">
        Entre em Contato
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="bg-barber-card rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                  Nome completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="agendamento">Dúvidas sobre Agendamento</option>
                  <option value="servicos">Informações sobre Serviços</option>
                  <option value="cancelamento">Cancelamento</option>
                  <option value="trabalhe-conosco">Trabalhe Conosco</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-barber-amber min-h-[120px]"
                  placeholder="Digite sua mensagem"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className={`
                    w-full py-3 rounded-md primary-button flex items-center justify-center
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                  `}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-barber-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        
        <div>
          <div className="bg-barber-card rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium text-barber-amber mb-4">
              Informações de Contato
            </h2>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-barber-amber/20 flex items-center justify-center mr-4">
                  <span>📱</span>
                </div>
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-gray-400">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-barber-amber/20 flex items-center justify-center mr-4">
                  <span>✉️</span>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">contato@barberbook.com.br</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-barber-amber/20 flex items-center justify-center mr-4">
                  <span>📍</span>
                </div>
                <div>
                  <h3 className="font-medium">Endereço</h3>
                  <p className="text-gray-400">
                    Rua das Barbas, 123<br />
                    São Paulo, SP<br />
                    CEP 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-barber-amber/20 flex items-center justify-center mr-4">
                  <span>⏰</span>
                </div>
                <div>
                  <h3 className="font-medium">Horário de Funcionamento</h3>
                  <p className="text-gray-400">
                    Segunda a Sexta: 9:00 - 20:00<br />
                    Sábados: 9:00 - 18:00<br />
                    Domingos e Feriados: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-barber-card rounded-lg overflow-hidden">
            <div className="h-64">
              {/* This would be a map, but for now it's a placeholder */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">Mapa da Localização</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

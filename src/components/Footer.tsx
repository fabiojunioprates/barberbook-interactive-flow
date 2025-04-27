
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-barber-darkblue py-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-barber-amber flex items-center justify-center text-barber-dark">
              <span className="text-xl">✂️</span>
            </div>
            <span className="text-xl font-bold text-white">BarberBook</span>
          </div>
          <p className="text-gray-400 max-w-xs">
            O jeito mais fácil de agendar seu corte de cabelo com os melhores barbeiros da cidade.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-barber-amber mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-barber-amber transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-gray-400 hover:text-barber-amber transition-colors">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/barbeiros" className="text-gray-400 hover:text-barber-amber transition-colors">
                Barbeiros
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-gray-400 hover:text-barber-amber transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-barber-amber mb-4">Contato</h3>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <span>📞</span> (11) 99999-9999
            </p>
            <p className="flex items-center gap-2">
              <span>✉️</span> contato@barberbook.com.br
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-barber-amber mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-barber-amber">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-barber-amber">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-barber-amber">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 px-6">
        <p>© 2023 BarberBook. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

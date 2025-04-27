
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-barber-darkblue py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-barber-amber flex items-center justify-center text-barber-dark">
            <span className="text-xl">✂️</span>
          </div>
          <span className="text-xl font-bold text-white">BarberBook</span>
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="text-white hover:text-barber-amber transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/agendamentos" className="text-white hover:text-barber-amber transition-colors">
                Agendamentos
              </Link>
            </li>
            <li>
              <Link to="/perfil" className="text-white hover:text-barber-amber transition-colors">
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

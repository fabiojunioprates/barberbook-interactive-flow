
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-barber-dark">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-barber-amber mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi removida.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-md primary-button"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default NotFound;

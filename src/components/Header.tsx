import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background-header shadow-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-[60px] md:h-[70px] flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </div>
          <h1
            className="text-sm md:text-lg lg:text-xl font-semibold tracking-wide text-foreground cursor-pointer hover:text-primary"
            onClick={() => navigate("/")}
          >
            <span className="hidden sm:inline">Chat Sofía 24/7 + </span>
            <span>Mentoría del Amor Eterno™</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          {user ? (
            <>
              <span className="hidden md:block text-primary-light text-sm">
                Hola, hermosa 💕
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="text-xs md:text-sm text-foreground-secondary hover:text-primary"
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/auth")}
              className="text-xs md:text-sm"
            >
              Iniciar sesión
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

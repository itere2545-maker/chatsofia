import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, MessageCircle, Mail, Phone } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const whatsappLink = `https://wa.me/5511961093355?text=${encodeURIComponent("Cualquier duda o reclamación, contáctanos. Soporte 24 horas.")}`;
  const mailLink = `mailto:correofdr@outlook.com?subject=${encodeURIComponent("Soporte 24 horas - Chat Sofía")}&body=${encodeURIComponent("Cualquier duda o reclamación, contáctanos. Soporte 24 horas.")}`;

  return (
    <header className="sticky top-0 z-50 bg-background-header shadow-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-2 grid grid-cols-2 items-center gap-2 md:h-[70px] md:flex md:justify-between">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3 md:w-5 md:h-5 text-primary fill-primary" />
            <MessageCircle className="w-3 h-3 md:w-5 md:h-5 text-primary" />
          </div>
          <h1
            className="flex-1 min-w-0 text-sm md:text-lg lg:text-xl font-semibold tracking-wide text-foreground cursor-pointer hover:text-primary whitespace-normal break-words"
            onClick={() => navigate("/")}
          >
            <span className="hidden sm:inline">Chat Sofía 24/7 + </span>
            <span className="inline">Mentoría del </span>
            <span className="block sm:inline">Amor Eterno™</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4 justify-self-end md:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs md:text-sm px-2.5 py-1 rounded-full whitespace-nowrap">
                Soporte 24h
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[220px]">
              <DropdownMenuItem>
                <a href={mailLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>E-mail: correofdr@outlook.com</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>WhatsApp: 11 96109-3355</span>
                </a>
              </DropdownMenuItem>
              <div className="px-3 py-2 text-xs text-muted-foreground">Cualquier duda o reclamación, contáctanos. Soporte 24 horas.</div>
            </DropdownMenuContent>
          </DropdownMenu>
          {user ? (
            <>
              <span className="hidden md:block text-primary-light text-sm whitespace-nowrap">
                Hola, hermosa 💕
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="text-xs md:text-sm text-foreground-secondary hover:text-primary whitespace-nowrap"
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

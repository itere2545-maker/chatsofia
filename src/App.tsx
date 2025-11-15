import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ModuloReencuentro from "./pages/ModuloReencuentro";
import ModuloMagnetismo from "./pages/ModuloMagnetismo";
import ModuloComunicacion from "./pages/ModuloComunicacion";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Cargando...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
      <Route path="/" element={user ? <Index /> : <Navigate to="/auth" />} />
      <Route path="/modulos/reencuentro-sin-ansiedad" element={user ? <ModuloReencuentro /> : <Navigate to="/auth" />} />
      <Route path="/modulos/magnetismo-femenino" element={user ? <ModuloMagnetismo /> : <Navigate to="/auth" />} />
      <Route path="/modulos/comunicacion-emocional" element={user ? <ModuloComunicacion /> : <Navigate to="/auth" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

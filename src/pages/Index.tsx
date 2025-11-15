import Header from "@/components/Header";
import HeroChat from "@/components/HeroChat";
import MentoriaModulos from "@/components/MentoriaModulos";
import FrecuenciaAudio from "@/components/FrecuenciaAudio";
import Rituales from "@/components/Rituales";
import Biblioteca from "@/components/Biblioteca";
import Soporte from "@/components/Soporte";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroChat />
        <MentoriaModulos />
        <FrecuenciaAudio />
        <Rituales />
        <Biblioteca />
        <Soporte />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

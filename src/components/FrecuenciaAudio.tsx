import { Headphones, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const FrecuenciaAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrent(audio.currentTime || 0);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrent(0);
    };
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r < 10 ? "0" : ""}${r}`;
  };

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <section className="py-16 md:py-20 bg-background-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            🎧 Frecuencia "Amor Permanente"
          </h2>
          <p className="text-xl text-primary-light font-medium">
            7 minutos que cambiarán tu energía
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-foreground-secondary leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              Esta frecuencia combina 528Hz (reparación del ADN emocional) y 639Hz (conexión y armonía relacional).
            </p>

            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <p className="font-medium text-primary-light mb-3">Úsala especialmente:</p>
              <ul className="space-y-2 text-sm">
                <li>• Antes de dormir (para liberar ansiedad acumulada)</li>
                <li>• Antes de responderle un mensaje importante</li>
                <li>• Cuando sientes miedo, celos o inseguridad</li>
                <li>• Cuando necesitas volver a tu centro emocional</li>
              </ul>
            </div>

            <p className="italic text-center font-medium">
              Tu energía cambia primero. Y cuando tu energía cambia, todo lo demás también cambia.
            </p>
          </div>

          {/* Player de audio */}
          <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-full">
                <Headphones className="w-16 h-16 text-primary" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Frecuencia Amor Permanente
                </h3>
                <p className="text-sm text-foreground-secondary">
                  528Hz + 639Hz | Duración: 7:00
                </p>
              </div>

              {/* Barra de progreso real */}
              <div className="w-full space-y-2">
                <div
                  className="h-2 bg-muted rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const pct = Math.min(Math.max(x / rect.width, 0), 1);
                    const audio = audioRef.current;
                    if (audio && duration > 0) {
                      audio.currentTime = pct * duration;
                    }
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-foreground-secondary">
                  <span>{format(current)}</span>
                  <span>{duration ? format(duration) : "–:–"}</span>
                </div>
              </div>

              {/* Controles */}
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 w-5 h-5" />
                    Pausar
                  </>
                ) : (
                  <>
                    <Play className="mr-2 w-5 h-5" />
                    Reproducir frecuencia
                  </>
                )}
              </Button>
              <audio ref={audioRef} src="/frecuencia-amor-eterno.MP3" preload="metadata" className="hidden" />
            </div>
          </div>

          <p className="text-center text-sm text-primary-light italic max-w-2xl mx-auto">
            "Escucha esta frecuencia antes de cualquier interacción importante con él. La calma no es opcional, es tu superpoder."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrecuenciaAudio;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const ModuloReencuentro = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>("leccion1");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pb-20">
        <section className="relative py-10 md:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background pointer-events-none" />
          <div className="container mx-auto px-4 max-w-full md:max-w-6xl relative">
            <Breadcrumb className="mb-6 animate-in fade-in-0 slide-in-from-top-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Mentoría</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Módulo 1</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-10 items-start">
              <div className="space-y-6 break-words min-w-0">
                <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-lg animate-in fade-in-0 zoom-in-95">
                  <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">
                    🌙 MÓDULO 1: Reencuentro sin ansiedad
                  </h1>
                  <p className="text-foreground-secondary text-sm md:text-base">
                    Los primeros contactos después del silencio son críticos. Aquí aprenderás exactamente qué decir, cuándo responder, y cómo regular tu ansiedad para no volver a alejarlo con mensajes desesperados o fríos.
                  </p>
                </div>

                <Card className="animate-in fade-in-0 slide-in-from-bottom-2">
                  <CardHeader>
                    <CardTitle>📍 Objetivo del módulo</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Cómo manejar el primer contacto después de un silencio sin parecer necesitada</li>
                      <li>Qué tipo de mensajes atraen vs. qué mensajes alejan</li>
                      <li>Cómo regular tu ansiedad antes, durante y después de escribirle</li>
                      <li>El timing perfecto para responder sin jugar juegos</li>
                      <li>Cómo crear conversaciones que reconectan emocionalmente</li>
                    </ul>
                  </CardContent>
                </Card>

                <Tabs value={tab} onValueChange={setTab} className="w-full animate-in fade-in-0 slide-in-from-bottom-2">
                  <div className="mb-4 md:mb-6 md:hidden">
                    <Select value={tab} onValueChange={setTab}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona lección" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leccion1">Lección 1</SelectItem>
                        <SelectItem value="leccion2">Lección 2</SelectItem>
                        <SelectItem value="leccion3">Lección 3</SelectItem>
                        <SelectItem value="leccion4">Lección 4</SelectItem>
                        <SelectItem value="leccion5">Lección 5</SelectItem>
                        <SelectItem value="leccion6">Lección 6</SelectItem>
                        <SelectItem value="resumen">Resumen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <TabsList className="hidden md:flex h-auto items-center justify-start flex-wrap gap-2 mb-8 p-0 bg-transparent w-full">
                    <TabsTrigger 
                      className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0"
                      value="leccion1"
                    >
                      <span>🎯</span>
                      <span className="min-w-0">Lección 1</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0"
                      value="leccion2"
                    >
                      <span>🕐</span>
                      <span className="min-w-0">Lección 2</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0"
                      value="leccion3"
                    >
                      <span>💬</span>
                      <span className="min-w-0">Lección 3</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0"
                      value="leccion4"
                    >
                      <span>🧠</span>
                      <span className="min-w-0">Lección 4</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0"
                      value="leccion5"
                    >
                      <span>💝</span>
                      <span className="min-w-0">Lección 5</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0"
                      value="leccion6"
                    >
                      <span>📱</span>
                      <span className="min-w-0">Lección 6</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0"
                      value="resumen"
                    >
                      <span>🌸</span>
                      <span className="min-w-0">Resumen</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="leccion1" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>El arte del primer contacto después del silencio</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-4 break-words">
                        <p>
                          Cuando él rompe el silencio (o cuando tú decides hacerlo), los primeros intercambios definen la temperatura emocional de toda la reconexión.
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Si respondes desde la ansiedad, él lo percibe como presión.</li>
                          <li>Si respondes desde la frialdad defensiva, él lo percibe como rechazo.</li>
                          <li>Si respondes desde tu energía femenina calmada, él lo percibe como alivio.</li>
                        </ul>
                        <p className="font-medium text-foreground">La verdad incómoda: La mayoría de mujeres arruinan la reconexión en los primeros 3 mensajes.</p>
                      </CardContent>
                    </Card>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="errores">
                        <AccordionTrigger className="break-words text-left">❌ Los 3 errores fatales del primer contacto</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 text-sm md:text-base text-foreground-secondary">
                            <div>
                              <p className="font-semibold">Error 1: Responder inmediatamente con alivio exagerado</p>
                              <p className="italic">"¡Qué alegría saber de ti! Pensé que ya no querías hablarme. ¿Cómo has estado? ¡Te extrañé mucho!"</p>
                              <p>Por qué aleja: Le estás mostrando que tu bienestar dependía de su mensaje. Energía de necesidad = repelente.</p>
                            </div>
                            <Separator />
                            <div>
                              <p className="font-semibold">Error 2: Responder con reclamo pasivo-agresivo</p>
                              <p className="italic">"Vaya, qué sorpresa que te acuerdes de mí." — "Pensé que habías desaparecido del planeta."</p>
                              <p>Por qué aleja: Aunque tu dolor es válido, el sarcasmo defensivo crea distancia emocional. Él sentirá que castigas en lugar de conectar.</p>
                            </div>
                            <Separator />
                            <div>
                              <p className="font-semibold">Error 3: Ignorarlo por "orgullo"</p>
                              <p>No responder durante días solo para "darle una lección".</p>
                              <p>Por qué aleja: Los juegos mentales crean más desconexión. Si él dio el paso de escribir, ignorarlo por venganza es energía masculina competitiva, no femenina magnética.</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Card className="border-primary/30">
                      <CardHeader>
                        <CardTitle>✅ La fórmula del primer contacto perfecto</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3">
                        <h3 className="font-semibold">PASO 1: Pausa estratégica (30 min – 2 horas)</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>No respondas inmediatamente. No por juego, sino para calmar tu sistema nervioso.</li>
                          <li>Salir del modo reactivo.</li>
                          <li>Elegir conscientemente desde dónde responderás.</li>
                        </ul>
                        <h3 className="font-semibold">PASO 2: Haz el ritual de emergencia (2 minutos)</h3>
                        <p>Antes de responder, regula tu cuerpo. Respira. Pregúntate: "¿Desde dónde quiero responder: desde mi poder o desde mi necesidad?"</p>
                        <h3 className="font-semibold">PASO 3: Responde con calidez simple</h3>
                        <p>Usa esta fórmula: <strong>Tono cálido + Brevedad + Sin preguntas ansiosas</strong></p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-primary/5 rounded-lg p-4 min-w-0">
                            <p className="font-medium">Si él dice: "Hola, ¿cómo estás?"</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>✅ "Hola 😊 ¿qué tal tú?"</li>
                              <li>✅ "Hola, bien por aquí. ¿Cómo has estado?"</li>
                              <li>✅ "Hola, justo estaba [actividad]. ¿Todo bien?"</li>
                            </ul>
                            <p className="mt-2 text-xs text-muted-foreground">Nota clave: Simple. Cálida. Sin drama. Sin "por qué no escribiste antes".</p>
                          </div>
                          <div className="bg-secondary/5 rounded-lg p-4 min-w-0">
                            <p className="font-medium">Si él se disculpa: "Perdón por no escribir, he estado ocupado"</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>✅ "Tranquilo, lo entiendo. ¿Cómo te ha ido?"</li>
                              <li>✅ "No te preocupes, todos tenemos días así 😊"</li>
                              <li>✅ "Está bien, espero que todo esté mejor ahora"</li>
                            </ul>
                            <p className="mt-2 text-xs text-muted-foreground">Nota clave: No lo hagas sentir culpable. Tampoco actúes como si no te afectó. Balance.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>🎭 Calidez (atrae)</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>"Me alegra saber de ti 😊"</li>
                            <li>"Qué bueno que estés bien"</li>
                            <li>"Suena interesante, cuéntame más"</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>🚫 Necesidad (aleja)</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>"¡Por fin me escribes! ¿Dónde estabas?"</li>
                            <li>"Pensé que ya no querías saber nada de mí"</li>
                            <li>"¿Por qué tardaste tanto?"</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="leccion2" className="space-y-6">
                    <Card className="border-primary/30">
                      <CardHeader>
                        <CardTitle>El timing perfecto — Cuándo responder sin jugar juegos</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-4 break-words">
                        <p>La pregunta que todas hacen: "¿Cuánto tiempo debo esperar antes de responder?"</p>
                        <p>La respuesta real: No hay una fórmula mágica de minutos. Pero sí hay una fórmula emocional: <strong>responde cuando estés en calma, no cuando estés en ansiedad</strong>.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Guía práctica de timing</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>✅ Estás tranquila, haciendo algo: Termina lo que estás haciendo (10–30 min) y responde.</li>
                          <li>✅ Estás ansiosa/enojada/triste: Espera al menos 1–2 horas. Haz el ritual. Luego responde.</li>
                          <li>✅ Es muy tarde en la noche (11pm–2am): Responde brevemente o espera hasta la mañana (8–10am).</li>
                          <li>✅ Estás trabajando/ocupada realmente: Responde cuando realmente estés libre (2–4 horas está bien).</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="reglas-timing">
                        <AccordionTrigger className="break-words text-left">Reglas de timing que SÍ importan</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary break-words">
                            <ul className="list-disc pl-5 space-y-1">
                              <li>❌ No respondas en menos de 5 minutos.</li>
                              <li>✅ Responde dentro del mismo día, salvo excepciones reales.</li>
                              <li>❌ No esperes días "para que sufra".</li>
                              <li>✅ Varía tus tiempos de respuesta: a veces 30 min, a veces 2 horas, a veces 4 horas.</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-primary/5">
                        <CardHeader>
                          <CardTitle>Situación 1</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                          <p>Él te escribe después de 1 semana de silencio</p>
                          <p className="mt-2">⏰ Espera: 2–3 horas mínimo</p>
                          <p>💬 Tono: Cálida pero no efusiva</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-secondary/5">
                        <CardHeader>
                          <CardTitle>Situación 2</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                          <p>Él te escribe después de una discusión</p>
                          <p className="mt-2">⏰ Espera: 1–2 horas</p>
                          <p>💬 Tono: Madura, abierta al diálogo</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-primary/5">
                        <CardHeader>
                          <CardTitle>Situación 3</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                          <p>Él te escribe algo casual después de días</p>
                          <p className="mt-2">⏰ Espera: 30 min – 1 hora</p>
                          <p>💬 Tono: Ligera, amigable</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-secondary/5">
                        <CardHeader>
                          <CardTitle>Situación 4</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                          <p>Él te escribe algo urgente/importante</p>
                          <p className="mt-2">⏰ Espera: 10–20 minutos</p>
                          <p>💬 Tono: Presente, clara</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="leccion3" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Domina los primeros mensajes para que él sienta conexión</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>Anatomía de un mensaje magnético</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>✅ Breve: 2–4 líneas máximo en las primeras respuestas</li>
                          <li>✅ Cálido sin efusividad</li>
                          <li>✅ Pregunta abierta (no ansiosa)</li>
                          <li>✅ Energía ligera</li>
                          <li>✅ No busca "definir nada" todavía</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="ctx1">
                        <AccordionTrigger className="break-words text-left">Contexto 1 — Él te escribe casual después del silencio</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <p>Él: "Hola, ¿cómo estás?"</p>
                            <ul className="list-disc pl-5">
                              <li>❌ "Bien, aunque no sabía nada de ti. ¿Todo bien?"</li>
                              <li>✅ "Hola 😊 bien por aquí, ¿qué tal tú?"</li>
                              <li>✅ "Hola, justo pensaba en [algo que estés haciendo]. ¿Cómo has estado?"</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="ctx2">
                        <AccordionTrigger className="break-words text-left">Contexto 2 — Él comparte algo de su día</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <p>Él: "Hoy tuve un día pesado en el trabajo"</p>
                            <ul className="list-disc pl-5">
                              <li>❌ "Pobrecito, ¿quieres que vaya a verte?"</li>
                              <li>✅ "Uff, suena intenso. ¿Ya pudiste descansar un poco?"</li>
                              <li>✅ "Esos días son difíciles. ¿Algo que te ayude a desconectar?"</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="ctx3">
                        <AccordionTrigger className="break-words text-left">Contexto 3 — Él te invita a hacer algo</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <p>Él: "¿Quieres que nos veamos este finde?"</p>
                            <ul className="list-disc pl-5">
                              <li>❌ "¡Sí! ¡Por supuesto! ¿A qué hora? ¿Dónde? ¡Dime y ahí estaré!"</li>
                              <li>✅ "Suena bien 😊 ¿Qué tenías en mente?"</li>
                              <li>✅ "Me gustaría. El sábado estoy libre, ¿te sirve?"</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="ctx4">
                        <AccordionTrigger className="break-words text-left">Contexto 4 — Él se disculpa por algo</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2">
                            <p>Él: "Perdón si he estado distante, he tenido mucho en la cabeza"</p>
                            <ul className="list-disc pl-5">
                              <li>❌ "Está bien, pero me hubiera gustado que me dijeras. Me preocupé."</li>
                              <li>✅ "Lo entiendo. ¿Quieres hablar de eso o prefieres distraerte un rato?"</li>
                              <li>✅ "Tranquilo. Aquí estoy cuando necesites desahogarte 💫"</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Card className="bg-primary/5">
                      <CardHeader>
                        <CardTitle>Elementos que siempre atraen</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>💫 Empatía sin solucionar: "Eso suena complicado" mejor que "Deberías hacer esto..."</li>
                          <li>💫 Curiosidad genuina: "Cuéntame más" mejor que "Ok"</li>
                          <li>💫 Ligereza: "😊" "Jaja" hace la conversación más fluida</li>
                          <li>💫 Dar espacio: "Cuando quieras conversamos mejor" mejor que "Necesitamos hablar ahora"</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion4" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Cómo regular tu ansiedad para no volver a alejarlo</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>Por qué tu ansiedad es el verdadero problema</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>No es que él se haya alejado. No es que él sea "complicado".</li>
                          <li>El problema es que la ansiedad te hace actuar de formas que lo alejan más.</li>
                        </ul>
                        <p>Cuando estás ansiosa:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Sobreanalizas cada palabra</li>
                          <li>Necesitas respuestas inmediatas</li>
                          <li>Interpretas todo como rechazo</li>
                          <li>Escribes desde el pánico, no desde la conexión</li>
                        </ul>
                        <p>La buena noticia: Puedes aprender a regular tu ansiedad ANTES de que arruine tus mensajes.</p>
                      </CardContent>
                    </Card>

                    <Card className="border-secondary/30">
                      <CardHeader>
                        <CardTitle>Técnica de regulación antes de responder</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <h3 className="font-semibold">PASO 1: Detecta la ansiedad (10 segundos)</h3>
                        <p>Cuando veas su mensaje y sientas:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Corazón acelerado</li>
                          <li>Urgencia de responder YA</li>
                          <li>Miedo a decir algo mal</li>
                          <li>Necesidad de "asegurar que todo está bien"</li>
                        </ul>
                        <p>Di internamente: "Esto es ansiedad. No es amor. No es intuición. Es mi sistema nervioso en alerta."</p>
                        <h3 className="font-semibold">PASO 2: Respiración de 90 segundos</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Inhala 4 segundos</li>
                          <li>Sostén 4 segundos</li>
                          <li>Exhala 6 segundos</li>
                          <li>Repite 6 veces</li>
                        </ul>
                        <h3 className="font-semibold">PASO 3: Pregunta de claridad</h3>
                        <p>Antes de enviar el mensaje, pregúntate:</p>
                        <p className="italic">"Si mi mejor amiga me mostrara este mensaje que voy a enviar, ¿le diría que lo envíe o que espere?"</p>
                        <p>Si la respuesta es "espere", no lo envíes todavía.</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-destructive/5 border-destructive/30">
                      <CardHeader>
                        <CardTitle>Señales de respuesta desde ansiedad</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>🚨 Estás escribiendo y borrando el mensaje 5 veces</li>
                          <li>🚨 Tu mensaje tiene más de 6 líneas en los primeros contactos</li>
                          <li>🚨 Estás pidiendo explicaciones o definiciones</li>
                          <li>🚨 Estás justificándote por algo que no hiciste</li>
                          <li>🚨 Terminas con preguntas ansiosas: "¿Estás molesto?" "¿Todo bien entre nosotros?"</li>
                        </ul>
                        <p className="mt-3">Si detectas alguna: respira, sal de la app, haz el ritual de emergencia y vuelve en 1 hora.</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion5" className="space-y-6">
                    <Card className="border-primary/30">
                      <CardHeader>
                        <CardTitle>Conversaciones que reconectan (sin forzar cercanía)</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>El error común: intentar "recuperar la intimidad" inmediatamente.</p>
                        <p>Después del silencio, muchas mujeres quieren volver a la cercanía que tenían antes... en el primer mensaje. Eso crea presión. Y la presión aleja.</p>
                        <p>La reconexión real es gradual:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Mensajes ligeros (primer contacto)</li>
                          <li>Conversaciones casuales (intercambios sobre el día)</li>
                          <li>Temas más profundos (emociones, planes, conexión)</li>
                          <li>Intimidad restaurada (cuando ambos están cómodos otra vez)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="fase1">
                        <AccordionTrigger className="break-words text-left">Fase 1 — Ligereza (primeros 2–3 intercambios)</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                            <p>Habla de:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Algo que estés haciendo</li>
                              <li>Algo que viste y te hizo pensar en él (sin exagerar)</li>
                              <li>Algo gracioso o interesante del día</li>
                              <li>Algo que a él le guste</li>
                            </ul>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Ejemplos</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Tú: "Hoy pasé por [lugar] y me acordé de cuando fuimos juntos 😊"</li>
                                    <li>Tú: "Vi que salió [serie/juego que le gusta]. ¿Ya lo viste?"</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="fase2">
                        <AccordionTrigger className="break-words text-left">Fase 2 — Conexión casual (después de varios mensajes fluidos)</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-3">
                            <p>Cuando la conversación ya fluye naturalmente:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Pregunta cómo le va en algo que te contó antes</li>
                              <li>Comparte algo más personal (pero no dramático)</li>
                              <li>Muestra interés genuino en su vida</li>
                            </ul>
                            <Card className="bg-secondary/5">
                              <CardContent className="p-4">
                                <p className="font-medium">Ejemplos</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                  <li>Tú: "¿Cómo te fue con [proyecto/situación que mencionó]?"</li>
                                  <li>Tú: "He estado pensando en [algo que te dijo]. ¿Ya decidiste qué harás?"</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="fase3">
                        <AccordionTrigger className="break-words text-left">Fase 3 — Profundidad (cuando él abre la puerta)</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                            <p>Si él comparte algo emocional o vulnerable:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Escucha sin juzgar</li>
                              <li>Valida sin sobreactuar</li>
                              <li>Acompaña sin intentar "arreglar"</li>
                            </ul>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Ejemplo</p>
                                  <p>Él: "La verdad es que he estado con mucha presión últimamente"</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>✅ "Eso debe ser difícil. ¿Hay algo que te ayude a alivianarte un poco?"</li>
                                    <li>❌ "¿Por qué no me contaste antes? Yo podría haberte ayudado"</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Card className="bg-primary/5 border-primary/30">
                      <CardHeader>
                        <CardTitle>Temas que reconectan sin presionar</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium mb-2">✅ Sí suman</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Recuerdos positivos compartidos</li>
                              <li>Intereses en común (música, películas, hobbies)</li>
                              <li>Planes futuros ligeros ("Sería genial volver a [lugar]")</li>
                              <li>Humor compartido</li>
                              <li>Cosas que admiras de él (sin exagerar)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium mb-2">❌ Evitar</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>"¿Por qué te alejaste?"</li>
                              <li>"¿Qué somos?"</li>
                              <li>"Necesitamos hablar de lo nuestro"</li>
                              <li>Drama/problemas personales pesados</li>
                              <li>Reclamos disfrazados de conversación</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion6" className="space-y-6">
                    <Card className="border-primary/30">
                      <CardHeader>
                        <CardTitle>Errores fatales que debes evitar en los primeros contactos</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <p>Evita convertir la reconexión en presión. Usa estas guías para no sabotear los primeros intercambios.</p>
                      </CardContent>
                    </Card>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="err1">
                        <AccordionTrigger className="break-words text-left">Error #1 — El interrogatorio ansioso</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm md:text-base text-foreground-secondary break-words">
                            <ul className="list-disc pl-5">
                              <li>❌ "¿Dónde estuviste?"</li>
                              <li>❌ "¿Por qué no me escribiste?"</li>
                              <li>❌ "¿Estás molesto conmigo?"</li>
                              <li>❌ "¿Sigues queriendo estar conmigo?"</li>
                            </ul>
                            <p>Por qué aleja: Convierte la reconexión en un juicio. Él se siente presionado a dar explicaciones.</p>
                            <p className="font-medium">✅ En su lugar: Deja que él comparta por sí mismo. Si hay algo importante, lo dirá cuando se sienta seguro.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="err2">
                        <AccordionTrigger className="break-words text-left">Error #2 — La volcada emocional</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm md:text-base text-foreground-secondary break-words">
                            <p>❌ "Me hiciste sentir tan mal cuando no respondías..."</p>
                            <p>Por qué aleja: Demasiada carga emocional demasiado pronto. Él siente que reconectarse contigo = asumir un peso emocional.</p>
                            <p className="font-medium">✅ En su lugar: Procesa tus emociones en tu diario, con tu terapeuta, con amigas. No conviertas los primeros mensajes en terapia.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="err3">
                        <AccordionTrigger className="break-words text-left">Error #3 — Falsa normalidad</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm md:text-base text-foreground-secondary break-words">
                            <p>❌ "¡Hola amor! ¿Vamos al cine este finde como siempre?"</p>
                            <p>Por qué aleja: Niega la realidad. Él sabe que hubo distancia. Actuar como si no existiera es incómodo.</p>
                            <p className="font-medium">✅ En su lugar: Reconoce sutilmente sin dramatizar: "Me alegra que estemos hablando otra vez 😊"</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="err4">
                        <AccordionTrigger className="break-words text-left">Error #4 — Disponibilidad total inmediata</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm md:text-base text-foreground-secondary break-words">
                            <p>Él: "¿Nos vemos hoy?"</p>
                            <p>❌ "¡Sí! Cancelo todo, dime dónde y ahí estaré"</p>
                            <p>Por qué aleja: Demuestras que tu vida giró esperándolo. Sin misterio = sin tensión = sin atracción.</p>
                            <p className="font-medium">✅ En su lugar: "Hoy no puedo, tengo [plan real]. ¿Mañana te sirve?"</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="err5">
                        <AccordionTrigger className="break-words text-left">Error #5 — Hablar de "la relación" demasiado pronto</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm md:text-base text-foreground-secondary break-words">
                            <ul className="list-disc pl-5">
                              <li>❌ "Necesitamos hablar de lo que pasó entre nosotros"</li>
                              <li>❌ "¿Qué somos ahora?"</li>
                              <li>❌ "No quiero que esto vuelva a pasar"</li>
                            </ul>
                            <p>Por qué aleja: Los primeros mensajes son para reconectar emocionalmente, no para negociar términos.</p>
                            <p className="font-medium">✅ En su lugar: Deja que la reconexión fluya naturalmente primero. Las conversaciones importantes vienen después, cara a cara.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Card className="border-secondary/30">
                      <CardHeader>
                        <CardTitle>EJERCICIO PRÁCTICO — Tu plan de reencuentro</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6 text-sm md:text-base text-foreground-secondary break-words">
                        <div className="space-y-2">
                          <p className="font-medium">Paso 1: Escribe tus respuestas</p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Tu primer impulso (honesto)</p>
                              <Textarea placeholder="Escribe lo que harías sin este módulo" className="min-h-[120px]" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Tu respuesta regulada</p>
                              <Textarea placeholder="Escribe la versión regulada, desde tu energía femenina" className="min-h-[120px]" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="font-medium">Paso 2: Identifica tu patrón</p>
                          <div className="grid md:grid-cols-2 gap-2">
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Responder con alivio exagerado</span></label>
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Responder con reclamos pasivo-agresivos</span></label>
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Ignorarlo por días por "orgullo"</span></label>
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Hacer interrogatorios</span></label>
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Volcar emociones</span></label>
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Actuar como si nada pasó</span></label>
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Disponibilidad total</span></label>
                            <label className="flex items-center gap-2"><input type="checkbox" /> <span>Querer "definir" inmediatamente</span></label>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="font-medium">Paso 3: Tu compromiso</p>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Esperar al menos (minutos)</p>
                              <Input type="number" min={0} placeholder="Ej: 30" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Responder con (tono)</p>
                              <Input placeholder="cálida / ligera / breve" />
                            </div>
                            <div className="md:col-span-1"></div>
                            <div className="md:col-span-3">
                              <p className="text-xs text-muted-foreground mb-1">NO hacer/decir</p>
                              <Textarea placeholder="Lista breve de cosas que vas a evitar" className="min-h-[80px]" />
                            </div>
                          </div>
                          <div className="pt-2">
                            <Button variant="outline">Guardar compromiso</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="resumen" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Resumen del Módulo 1</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <p className="font-medium">Lo que aprendiste:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>✅ Por qué los primeros contactos definen toda la reconexión</li>
                          <li>✅ Los 3 errores fatales y cómo evitarlos</li>
                          <li>✅ La fórmula del primer contacto perfecto</li>
                          <li>✅ El timing ideal para responder (sin juegos)</li>
                          <li>✅ Cómo escribir mensajes magnéticos</li>
                          <li>✅ Técnicas de regulación de ansiedad</li>
                          <li>✅ Cómo crear conversaciones que reconectan naturalmente</li>
                          <li>✅ Los errores que debes evitar a toda costa</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/30">
                      <CardHeader>
                        <CardTitle>Tu mantra</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>💫 "Respondo desde mi calma, no desde mi ansiedad."</li>
                          <li>💫 "Puedo ser cálida sin ser necesitada."</li>
                          <li>💫 "La reconexión es gradual, no forzada."</li>
                          <li>💫 "Mi energía regulada es mi mayor atractivo."</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-2">
                        
                        <p>Los primeros mensajes después del silencio no tienen que ser perfectos. Solo tienen que ser conscientes.</p>
                        <p>Cada vez que eliges regular tu ansiedad antes de responder... cada vez que eliges calidez sobre necesidad... cada vez que eliges presencia sobre presión... estás reconstruyendo la conexión desde un lugar más sano, más magnético, más real.</p>
                        <p>Y eso es lo que hace que él regrese. No tus palabras perfectas. Tu energía transformada.</p>
                        <p className="font-medium">Estás lista para el reencuentro. 🌙✨</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6 min-w-0">
                <Card className="animate-in fade-in-0 slide-in-from-bottom-2">
                  <CardHeader>
                    <CardTitle>Progreso del módulo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={20} />
                    <p className="text-xs text-muted-foreground mt-2">20% completado</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 animate-in fade-in-0 slide-in-from-bottom-2">
                  <CardHeader>
                    <CardTitle>Consejo rápido</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base text-foreground-secondary">
                    <p>Responde desde tu poder, no desde tu miedo. La pausa estratégica no es un juego: es regulación emocional.</p>
                  </CardContent>
                </Card>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => navigate("/")}>Volver al inicio</Button>
                  <Button onClick={() => navigate("/")}>Seguir con la mentoría</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ModuloReencuentro;
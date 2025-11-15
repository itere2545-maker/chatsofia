import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const ModuloComunicacion = () => {
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
                  <BreadcrumbLink href="#">Módulo 3</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-10 items-start">
              <div className="space-y-6 break-words min-w-0">
                <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-lg animate-in fade-in-0 zoom-in-95">
                  <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">💬 MÓDULO 3: Comunicación emocional inteligente</h1>
                  <p className="text-foreground-secondary text-sm md:text-base">
                    Aprende el tono, timing y profundidad emocional perfectos. Cómo expresar lo que sientes sin parecer necesitada. Cómo resolver conflictos sin drama. Cómo hablarle de forma que se sienta atraído, no atacado.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>📍 Objetivo del módulo</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Comunicar tus emociones sin drama ni presión</li>
                      <li>Usar el tono que atrae y evita el que aleja</li>
                      <li>Resolver conflictos sin convertirte en "la mujer difícil"</li>
                      <li>Decir cuando estás molesta sin atacar ni reprimir</li>
                      <li>Expresar necesidades sin parecer demandante</li>
                      <li>Elegir el timing perfecto para conversaciones importantes</li>
                      <li>Hablar de forma que él quiera acercarse</li>
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
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion1">
                      <span>🎯</span>
                      <span className="min-w-0">Lección 1</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion2">
                      <span>⏰</span>
                      <span className="min-w-0">Lección 2</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion3">
                      <span>💔</span>
                      <span className="min-w-0">Lección 3</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion4">
                      <span>🔥</span>
                      <span className="min-w-0">Lección 4</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion5">
                      <span>🗣️</span>
                      <span className="min-w-0">Lección 5</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion6">
                      <span>📝</span>
                      <span className="min-w-0">Lección 6</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="resumen">
                      <span>🌸</span>
                      <span className="min-w-0">Resumen</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="leccion1" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>El poder del tono</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>Cómo lo dices importa más que qué dices. Si el tono está mal, él percibe reclamo, necesidad, drama o ataque.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-destructive/5 border-destructive/30">
                            <CardHeader>
                              <CardTitle className="text-destructive">❌ Tonos que alejan</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Madre regañona: "Siempre haces lo mismo"</li>
                                <li>Víctima dramática: "Nadie me entiende"</li>
                                <li>Controladora pasivo-agresiva: "Está bien, haz lo que quieras"</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-primary/5 border-primary/30">
                            <CardHeader>
                              <CardTitle className="text-primary">✅ Tonos que atraen</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Vulnerable pero centrada: "Me siento [emoción] cuando..."</li>
                                <li>Clara pero cálida: "Esto es importante para mí, ¿podemos hablarlo?"</li>
                                <li>Empática pero firme: "Entiendo que estés ocupado, y también necesito tiempo contigo"</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion2" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>El timing perfecto</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>No es lo que dices, es cuándo lo dices. El mismo mensaje en otro momento puede conectar.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-primary/5">
                            <CardHeader>
                              <CardTitle>🟢 Momento ideal</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Ambos calmados</li>
                                <li>Sin distracciones</li>
                                <li>Con tiempo suficiente</li>
                                <li>Cara a cara</li>
                                <li>Tras conexión positiva</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-destructive/5 border-destructive/30">
                            <CardHeader>
                              <CardTitle>🔴 Momento terrible</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Justo al llegar del trabajo</li>
                                <li>Mientras ve algo que le interesa</li>
                                <li>En medio de discusión acalorada</li>
                                <li>Por mensaje en temas profundos</li>
                                <li>Cuando tú estás en pánico</li>
                                <li>En público o si pidió espacio</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                        <Card>
                          <CardHeader>
                            <CardTitle>Timing específico</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Hablar de "qué somos": tras semanas de contacto fluido, en cita cara a cara</li>
                              <li>Molestia por algo: después de calmarte, sin acusar</li>
                              <li>Decir que lo extrañas: en conversación fluida, con ligereza</li>
                              <li>Pedir algo: cuando está de buen ánimo</li>
                              <li>Resolver conflicto: al día siguiente, con calma</li>
                            </ul>
                            <p className="mt-2 font-medium">Regla de oro: si sientes urgencia, espera.</p>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion3" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Expresar lo que sientes sin parecer necesitada</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-primary/5">
                            <CardHeader>
                              <CardTitle>Vulnerabilidad auténtica</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Comparte emoción con responsabilidad</li>
                                <li>Específica, no dramática</li>
                                <li>Sin exigir solución inmediata</li>
                                <li>Mantiene dignidad</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-destructive/5 border-destructive/30">
                            <CardHeader>
                              <CardTitle>Volcado necesitado</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Descarga sin filtro</li>
                                <li>Exageración dramática</li>
                                <li>Exigencia de validación</li>
                                <li>Pérdida de dignidad</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                        <Card>
                          <CardHeader>
                            <CardTitle>Fórmula de expresión</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Identifica emoción real</li>
                              <li>Usa estructura "Yo"</li>
                              <li>Sé específica</li>
                              <li>Propón sin exigir</li>
                              <li>Cierra con apertura</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Ejemplos transformados</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>"He notado que hablamos menos... ¿Cómo te sientes con nosotros?"</li>
                              <li>"Te extraño, y sé que estaré bien. Prefiero que esto funcione."</li>
                              <li>"Cuando pasa esto, me siento poco importante..."</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion4" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Resolver conflictos sin drama</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-destructive/5">
                            <CardHeader>
                              <CardTitle>Estilos que no funcionan</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Explosiva</li>
                                <li>Represora</li>
                                <li>Pasivo-agresiva</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-primary/5">
                            <CardHeader>
                              <CardTitle>Comunicadora consciente</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Habla calmada</li>
                                <li>Enfoca en el problema específico</li>
                                <li>Busca solución, no culpable</li>
                                <li>Mantiene dignidad</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                        <Card>
                          <CardHeader>
                            <CardTitle>Método sin drama</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Pausa antes de hablar</li>
                              <li>Identifica problema real</li>
                              <li>Estructura XYZ</li>
                              <li>Permite que él responda</li>
                              <li>Busquen solución juntos</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Frases poderosas</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>"¿Es buen momento?"</li>
                              <li>"No quiero pelear, quiero entendernos"</li>
                              <li>"Ayúdame a entender tu perspectiva"</li>
                              <li>"¿Cómo podemos hacerlo diferente?"</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card className="bg-destructive/5 border-destructive/30">
                          <CardHeader>
                            <CardTitle>Nunca decir</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>"Siempre" / "Nunca"</li>
                              <li>Insultos o comparaciones</li>
                              <li>Amenazas vacías</li>
                              <li>Cierres defensivos</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion5" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Hablarle de forma que quiera acercarse</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <Card className="bg-primary/5">
                          <CardHeader>
                            <CardTitle>Tipos de comunicación que atraen</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Apreciación específica</li>
                              <li>Curiosidad genuina</li>
                              <li>Vulnerabilidad sin drama</li>
                              <li>Invitación sin presión</li>
                              <li>Límites claros sin ultimátums</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Anatomía de una conversación magnética</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Inicio: cálida, sin agenda</li>
                              <li>Desarrollo: fluido y balanceado</li>
                              <li>Cierre: suave, abierto, positivo</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion6" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Qué decir (y qué NO) en momentos críticos</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="mom1">
                            <AccordionTrigger className="break-words text-left">Cuando él dice "necesito espacio"</AccordionTrigger>
                            <AccordionContent>
                              <p>✅ "Entiendo. Tómate el tiempo que necesites"</p>
                              <p>Luego, da espacio real.</p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="mom2">
                            <AccordionTrigger className="break-words text-left">Cuando sientes que se está alejando</AccordionTrigger>
                            <AccordionContent>
                              <p>Observa sin reaccionar. Si necesitas hablar: "He notado que hablamos menos. ¿Todo bien?"</p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="mom3">
                            <AccordionTrigger className="break-words text-left">Después de una discusión fuerte</AccordionTrigger>
                            <AccordionContent>
                              <p>✅ "Lamento cómo se puso todo ayer. ¿Podemos hablar?"</p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="mom4">
                            <AccordionTrigger className="break-words text-left">Definir la relación</AccordionTrigger>
                            <AccordionContent>
                              <p>✅ "Me gusta lo que tenemos. ¿Cómo lo ves tú?"</p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="mom5">
                            <AccordionTrigger className="break-words text-left">Cuando él cometió un error</AccordionTrigger>
                            <AccordionContent>
                              <p>✅ "Lo que pasó me dolió. Necesito que entiendas por qué."</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <Card className="border-secondary/30">
                          <CardHeader>
                            <CardTitle>EJERCICIO — Plan de comunicación consciente</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Esperar 1 hora antes de responder molesta</li>
                              <li>Usar "Yo me sentí" en lugar de "Tú hiciste"</li>
                              <li>Hacer una pregunta antes de asumir</li>
                              <li>Apreciación específica semanal</li>
                              <li>Evitar "siempre" y "nunca"</li>
                              <li>Pedir permiso: "¿Es buen momento?"</li>
                              <li>Cerrar con apertura, no ultimátums</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="resumen" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Resumen del Módulo 3</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>El tono importa más que el contenido</li>
                          <li>3 tonos que alejan vs 3 que atraen</li>
                          <li>Timing perfecto según el contexto</li>
                          <li>Cómo expresar sin parecer necesitada</li>
                          <li>Método de resolución de conflictos sin drama</li>
                          <li>Comunicación que lo hace acercarse</li>
                          <li>Qué decir y no decir en momentos críticos</li>
                        </ul>
                        <div className="mt-3">
                          <p className="font-medium">Tu nueva forma de comunicar</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Comunicar desde la calma</li>
                            <li>Expresar sin drama ni represión</li>
                            <li>Buscar conexión, no culpables</li>
                            <li>Invitar, no presionar</li>
                          </ul>
                        </div>
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
                    <Progress value={10} />
                    <p className="text-xs text-muted-foreground mt-2">10% completado</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 animate-in fade-in-0 slide-in-from-bottom-2">
                  <CardHeader>
                    <CardTitle>Consejo rápido</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base text-foreground-secondary">
                    <p>El mensaje correcto con la energía correcta crea conexión. Prioriza tono y timing.</p>
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

export default ModuloComunicacion;
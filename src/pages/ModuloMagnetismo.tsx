import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const ModuloMagnetismo = () => {
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
                  <BreadcrumbLink href="#">Módulo 2</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-10 items-start">
              <div className="space-y-6 break-words min-w-0">
                <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-lg animate-in fade-in-0 zoom-in-95">
                  <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">
                    ✨ MÓDULO 2: Magnetismo femenino
                  </h1>
                  <p className="text-foreground-secondary text-sm md:text-base">
                    Reconecta con tu energía femenina natural: presencia, calma, seguridad interna y autoimagen. Cuando cambias tu energía, cambias todo lo que él percibe de ti.
                  </p>
                </div>

                <Card className="animate-in fade-in-0 slide-in-from-bottom-2">
                  <CardHeader>
                    <CardTitle>📍 Objetivo del módulo</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Reconectado con tu energía femenina auténtica (sin forzar ni actuar)</li>
                      <li>Comprendido qué es realmente magnetismo (y qué NO es)</li>
                      <li>Activado tu presencia natural sin manipulación</li>
                      <li>Transformado tu autoimagen desde adentro</li>
                      <li>Aprendido a irradiar seguridad sin palabras</li>
                      <li>Desarrollado el tipo de energía que hace que él busque tu cercanía</li>
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
                      <span>🌸</span>
                      <span className="min-w-0">Lección 1</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion2">
                      <span>🧲</span>
                      <span className="min-w-0">Lección 2</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion3">
                      <span>💫</span>
                      <span className="min-w-0">Lección 3</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion4">
                      <span>🪞</span>
                      <span className="min-w-0">Lección 4</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion5">
                      <span>🌊</span>
                      <span className="min-w-0">Lección 5</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="leccion6">
                      <span>🎭</span>
                      <span className="min-w-0">Lección 6</span>
                    </TabsTrigger>
                    <TabsTrigger className="justify-start gap-2 rounded-full px-3 py-2 text-sm md:text-base border border-border hover:bg-card data-[state=active]:bg-primary/10 data-[state=active]:text-primary shadow-sm shrink-0" value="resumen">
                      <span>✨</span>
                      <span className="min-w-0">Resumen</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="leccion1" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Qué es realmente la energía femenina (y qué no es)</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>Hay mucha desinformación sobre "energía femenina" en redes sociales. Aclaremos:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-destructive/5 border-destructive/30">
                            <CardHeader>
                              <CardTitle className="text-destructive">❌ No es</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Ser sumisa o complaciente</li>
                                <li>Reprimir tus opiniones</li>
                                <li>Actuar "delicada" o "frágil" artificialmente</li>
                                <li>Depender económica o emocionalmente de un hombre</li>
                                <li>Ser pasiva o no tener límites</li>
                                <li>Vestirte de rosa y usar maquillaje</li>
                                <li>"Dejar que él haga todo" mientras tú no haces nada</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-primary/5 border-primary/30">
                            <CardHeader>
                              <CardTitle className="text-primary">✅ Sí es</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Presencia</strong>: estar aquí y ahora.</li>
                                <li><strong>Receptividad</strong>: recibir sin justificar.</li>
                                <li><strong>Confianza</strong>: soltar el control.</li>
                                <li><strong>Calma interna</strong>: estabilidad emocional propia.</li>
                                <li><strong>Vulnerabilidad auténtica</strong>: emociones reales sin manipulación.</li>
                                <li><strong>Fluir</strong>: adaptarte sin perder tu esencia.</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                        <Card className="bg-secondary/5 border-secondary/30">
                          <CardHeader>
                            <CardTitle>Por qué atrae</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>La energía femenina complementa la masculina. Cuando estás en presencia, receptividad y calma, él puede relajarse en su masculinidad. Dos polos iguales se repelen; polos complementarios se atraen.</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>El problema moderno</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Muchas mujeres viven en energía masculina por contexto social: independencia, resolver, planificar, controlar. Está bien en el trabajo, pero en el amor esa energía te vuelve invisible para él.</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Cómo saber si estás en energía masculina con él</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Inicias la mayoría de conversaciones</li>
                              <li>Haces planes constantemente</li>
                              <li>Resuelves los problemas de la relación</li>
                              <li>Persigues la conexión</li>
                              <li>Estás siempre "haciendo" para mantener su interés</li>
                              <li>Sientes que si no haces algo, todo se cae</li>
                              <li>Necesitas controlar cada aspecto</li>
                            </ul>
                            <p className="mt-2">Si marcas 3 o más, operas en energía masculina y la polaridad se pierde.</p>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion3" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Cómo activar tu energía magnética sin juegos ni manipulación</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-4 break-words">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-destructive/5 border-destructive/30">
                            <CardHeader>
                              <CardTitle className="text-destructive">Manipulación</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Hacerte la difícil cuando no lo eres</li>
                                <li>Ignorarlo para "darle una lección"</li>
                                <li>Coquetear con otros para dar celos</li>
                                <li>Actuar misteriosa de forma calculada</li>
                                <li>Usar técnicas para "controlarlo"</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-primary/5 border-primary/30">
                            <CardHeader>
                              <CardTitle className="text-primary">Magnetismo</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Ser genuinamente ocupada con tu vida</li>
                                <li>Darle espacio porque confías</li>
                                <li>Ser auténtica, no perfecta</li>
                                <li>Ser impredecible porque eres multidimensional</li>
                                <li>Irradiar plenitud sin esfuerzo</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                        <p className="font-medium">Diferencia clave</p>
                        <p>La manipulación viene del miedo. El magnetismo viene de la plenitud.</p>
                      </CardContent>
                    </Card>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="prac1">
                        <AccordionTrigger className="break-words text-left">1. Practica receptividad consciente</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <p>La próxima vez que él haga algo por ti:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>❌ "No era necesario" / "Yo puedo sola"</li>
                              <li>✅ "Gracias, qué lindo detalle" y sonríe</li>
                            </ul>
                            <p>Deja que él vea que su esfuerzo te hizo feliz.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="prac2">
                        <AccordionTrigger className="break-words text-left">2. Reduce la iniciación</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Reduce del 80% al 30% de iniciación</li>
                              <li>Por cada 3 veces que él te escribe, tú inicias 1</li>
                              <li>Deja que él proponga planes</li>
                              <li>Resiste la urgencia de mantener la conversación</li>
                            </ul>
                            <p>Confía: si él está interesado, llenará el espacio.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="prac3">
                        <AccordionTrigger className="break-words text-left">3. Cultiva misterio natural</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <p>No cuentes todo inmediatamente.</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>❌ Relatos minuciosos de tu día</li>
                              <li>✅ "Tuve un día interesante. ¿Y tú qué hiciste?"</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="prac4">
                        <AccordionTrigger className="break-words text-left">4. Vive tu vida plenamente</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Retoma hobbies</li>
                              <li>Sal con amigas</li>
                              <li>Trabaja en tus metas</li>
                              <li>Crea una vida que ames</li>
                            </ul>
                            <p>La plenitud elimina la desesperación. Él lo percibe.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="prac5">
                        <AccordionTrigger className="break-words text-left">5. Usa el poder del silencio</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary space-y-2 break-words">
                            <p>En conversación:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Pausa de 2 segundos antes de responder</li>
                              <li>Permite momentos de silencio cómodo</li>
                            </ul>
                            <p>En mensajes:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>No siempre necesitas seguir la conversación</li>
                              <li>Está bien terminar el intercambio</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="prac6">
                        <AccordionTrigger className="break-words text-left">6. Irradia calidez sin necesidad</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary break-words">
                            <p>Calidez: sonrisa, contacto visual, amabilidad. Sin necesidad: sin buscar validación.</p>
                            <p>Cálida + Segura = Magnética.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="prac7">
                        <AccordionTrigger className="break-words text-left">7. Permítete ser imperfecta auténticamente</AccordionTrigger>
                        <AccordionContent>
                          <div className="text-sm md:text-base text-foreground-secondary break-words">
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Ríete de ti misma</li>
                              <li>Comparte opiniones reales</li>
                              <li>Admite cuando no sabes</li>
                              <li>Sé espontánea</li>
                            </ul>
                            <p>La autenticidad es magnética.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="leccion4" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Transformación de autoimagen</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>Cómo te ves determina cómo te ve él. Tu diálogo interno guía tu energía.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-primary/5">
                            <CardHeader>
                              <CardTitle>Verdades magnéticas</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>"Soy valiosa tal como soy"</li>
                                <li>"Merezco ser amada plenamente"</li>
                                <li>"Si él no me elige, encontraré a alguien que sí"</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-secondary/5">
                            <CardHeader>
                              <CardTitle>Creencias que alejan</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>"No soy suficientemente bonita"</li>
                                <li>"Probablemente me dejará"</li>
                                <li>"No merezco un amor así"</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                        <Card>
                          <CardHeader>
                            <CardTitle>Ejercicio de 21 días</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-3 gap-4">
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Día 1–7</p>
                                  <p>Identifica tu narrativa negativa y escríbela.</p>
                                </CardContent>
                              </Card>
                              <Card className="bg-secondary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Día 8–14</p>
                                  <p>Reconstruye cada creencia con una verdad alternativa.</p>
                                </CardContent>
                              </Card>
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Día 15–21</p>
                                  <p>Repite tus verdades frente al espejo cada mañana.</p>
                                </CardContent>
                              </Card>
                            </div>
                            <p className="mt-3">Ritual del espejo: "Buenos días, [tu nombre]..."</p>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion5" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>De perseguidora a magnética</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>La persecución mata la polaridad. Cambia el patrón con estos pasos.</p>
                        <Card className="bg-secondary/5">
                          <CardHeader>
                            <CardTitle>Checklist de persecución</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Inicias siempre el contacto</li>
                              <li>Propones la mayoría de planes</li>
                              <li>Preguntas "¿qué somos?" constantemente</li>
                              <li>Intentas "arreglar" la relación</li>
                              <li>Analizas cada mensaje</li>
                              <li>Necesitas confirmación constante</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="step1">
                            <AccordionTrigger className="break-words text-left">Paso 1 — Reconoce tu patrón</AccordionTrigger>
                            <AccordionContent>
                              <p>Observa con compasión: el miedo no define tu valor.</p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="step2">
                            <AccordionTrigger className="break-words text-left">Paso 2 — Suelta la cuerda</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Deja de iniciar siempre</li>
                                <li>Deja de analizar cada cosa</li>
                                <li>Deja de controlar el resultado</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="step3">
                            <AccordionTrigger className="break-words text-left">Paso 3 — Redirige tu energía</AccordionTrigger>
                            <AccordionContent>
                              <p>Vuelve a ti: proyectos, alegría, nutrición emocional.</p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="step4">
                            <AccordionTrigger className="break-words text-left">Paso 4 — Permite el espacio</AccordionTrigger>
                            <AccordionContent>
                              <p>El silencio es información. Confía en el proceso.</p>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="step5">
                            <AccordionTrigger className="break-words text-left">Paso 5 — Observa su respuesta</AccordionTrigger>
                            <AccordionContent>
                              <p>No reacciones. Mantente en tu energía magnética.</p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <Card className="bg-primary/5">
                          <CardHeader>
                            <CardTitle>La nueva forma</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Vives tu vida plenamente</li>
                              <li>No persigues conexión</li>
                              <li>No controlas; permites</li>
                              <li>No mendigas; irradias valor</li>
                              <li>No necesitas validación constante</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="leccion6" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Presencia vs. Ansiedad</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary space-y-3 break-words">
                        <p>Mantén tu energía aun cuando él se distancia.</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Nombra lo que sientes</li>
                          <li>Ancla en el presente</li>
                          <li>Pregunta de verdad</li>
                          <li>Redirige tu enfoque</li>
                          <li>Afirmación de presencia</li>
                        </ol>
                        <Card className="bg-secondary/5">
                          <CardHeader>
                            <CardTitle>Mantra</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>"Su distancia no define mi valor"</li>
                              <li>"Puedo extrañarlo sin perseguirlo"</li>
                              <li>"Mi calma es mi mayor poder"</li>
                              <li>"Confío en el proceso"</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>

                    <Card className="border-secondary/30">
                      <CardHeader>
                        <CardTitle>EJERCICIO PRÁCTICO — Tu plan de transformación</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6 text-sm md:text-base text-foreground-secondary break-words">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-primary/5">
                            <CardContent className="p-4">
                              <p className="font-medium">Auditoría de energía</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>% energía masculina vs femenina</li>
                                <li>Quién inicia conversaciones</li>
                                <li>Quién propone planes</li>
                                <li>Primer impulso cuando él se aleja</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-secondary/5">
                            <CardContent className="p-4">
                              <p className="font-medium">Compromiso 21 días</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Ritual de la mañana diario</li>
                                <li>Reducir iniciación al % definido</li>
                                <li>Redirigir energía a actividad personal</li>
                                <li>Practicar receptividad</li>
                                <li>No analizar más de 5 minutos</li>
                                <li>Llamar a una amiga cuando haya urgencia</li>
                                <li>Afirmación de autoimagen cada mañana</li>
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
                        <CardTitle>Los 4 pilares del magnetismo auténtico</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary">
                        <p>El magnetismo real no se hace. Se es. Se construye sobre 4 pilares.</p>
                      </CardContent>
                    </Card>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="pilar1">
                        <AccordionTrigger className="break-words text-left">Pilar 1 — Presencia</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm md:text-base text-foreground-secondary break-words">
                            <p><strong>Qué es</strong>: estar completamente en el momento presente.</p>
                            <p><strong>Por qué atrae</strong>: él siente que realmente lo ves; en un mundo distraído, eso es magnético.</p>
                            <p className="font-medium">Cómo cultivarla</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">En conversación</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Contacto visual suave</li>
                                    <li>Escucha sin planear tu respuesta</li>
                                    <li>Nota tono, postura y energía</li>
                                    <li>Respira conscientemente</li>
                                  </ul>
                                </CardContent>
                              </Card>
                              <Card className="bg-secondary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">En tu día</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Comer sin celular</li>
                                    <li>Caminar notando el entorno</li>
                                    <li>Una cosa a la vez</li>
                                    <li>Meditar 5 minutos</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="pilar2">
                        <AccordionTrigger className="break-words text-left">Pilar 2 — Calma interna</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm md:text-base text-foreground-secondary break-words">
                            <p><strong>Qué es</strong>: estabilidad que no depende de sus acciones.</p>
                            <p><strong>Por qué atrae</strong>: refugio emocional; él se acerca a la calma, no al caos.</p>
                            <p className="font-medium">Cómo cultivarla</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Regulación diaria</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Usa los rituales de mañana, noche y emergencia</li>
                                    <li>Identifica disparadores</li>
                                    <li>Respira antes de reaccionar</li>
                                    <li>Pausa consciente</li>
                                  </ul>
                                </CardContent>
                              </Card>
                              <Card className="bg-secondary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Trabajo interno</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Reconoce: tus emociones son tuyas</li>
                                    <li>Pregúntate si es sobre él o una herida</li>
                                    <li>Contener tu emoción sin que él la arregle</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="pilar3">
                        <AccordionTrigger className="break-words text-left">Pilar 3 — Seguridad interna</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm md:text-base text-foreground-secondary break-words">
                            <p><strong>Qué es</strong>: saber que eres valiosa con o sin él.</p>
                            <p><strong>Por qué atrae</strong>: plenitud irresistible; no mendigas atención.</p>
                            <p className="font-medium">Cómo cultivarla</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Autoimagen</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Lista de 20 cualidades no físicas</li>
                                    <li>Léela 21 días</li>
                                    <li>Nota evidencia diaria de tu valor</li>
                                  </ul>
                                </CardContent>
                              </Card>
                              <Card className="bg-secondary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Suficiencia</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Di: "Yo soy suficiente tal como soy"</li>
                                    <li>Celebra tus logros</li>
                                    <li>Deja de compararte</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="pilar4">
                        <AccordionTrigger className="break-words text-left">Pilar 4 — Autoimagen radiante</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm md:text-base text-foreground-secondary break-words">
                            <p><strong>Qué es</strong>: cómo te ves, te hablas y te tratas.</p>
                            <p><strong>Por qué atrae</strong>: él te tratará como tú te tratas.</p>
                            <p className="font-medium">Cómo cultivarla</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Card className="bg-primary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Diálogo interno</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>"Cometí un error, y aprendo"</li>
                                    <li>"Estoy en proceso de crecimiento"</li>
                                    <li>"Merezco amor auténtico"</li>
                                  </ul>
                                </CardContent>
                              </Card>
                              <Card className="bg-secondary/5">
                                <CardContent className="p-4">
                                  <p className="font-medium">Autocuidado visible</p>
                                  <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Vístete bien aunque estés sola</li>
                                    <li>Arréglate para ti</li>
                                    <li>Cuida tu cuerpo con amor</li>
                                    <li>Haz de tu espacio un santuario</li>
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="resumen" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Resumen del Módulo 2</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm md:text-base text-foreground-secondary break-words">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Qué es realmente energía femenina (y qué no es)</li>
                          <li>Por qué los hombres son atraídos por esta energía</li>
                          <li>Detectar energía masculina en ti</li>
                          <li>Los 4 pilares: Presencia, Calma, Seguridad, Autoimagen</li>
                          <li>Cómo activar magnetismo sin manipulación</li>
                          <li>7 prácticas para ser magnética naturalmente</li>
                          <li>Transformar tu autoimagen desde adentro</li>
                          <li>El giro de perseguidora a magnética</li>
                          <li>Presencia en distancia</li>
                        </ul>
                        <div className="mt-3">
                          <p className="font-medium">Tu nueva verdad</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>"No necesito perseguirlo. Mi energía lo atrae"</li>
                            <li>"Mi valor no depende de su atención"</li>
                            <li>"Cuando estoy en mi poder, él siente mi magnetismo"</li>
                            <li>"Soy completa con o sin él"</li>
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
                    <p>Tu presencia y calma valen más que cualquier palabra. El magnetismo se siente, no se fuerza.</p>
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

export default ModuloMagnetismo;
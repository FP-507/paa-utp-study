import { Exercise, ExamConfig } from "./types";
import { mathTopics } from "./math-data";

// --- READING PASSAGES (PAA-style: one long text, multiple questions) ---
export const passages: Record<string, string> = {
  "passage-canal": `El Canal de Panamá, inaugurado en 1914, es una de las obras de ingeniería más importantes de la historia moderna. Con una extensión de 80 kilómetros, conecta el océano Atlántico con el Pacífico, eliminando la necesidad de rodear el continente sudamericano por el Cabo de Hornos, una travesía que añadía más de 12,000 kilómetros a cualquier ruta marítima.

La construcción del canal fue un desafío monumental. El primer intento, liderado por el francés Ferdinand de Lesseps en 1881, fracasó debido a enfermedades tropicales —especialmente la malaria y la fiebre amarilla— que causaron la muerte de más de 20,000 trabajadores. Fue hasta que Estados Unidos retomó el proyecto en 1904, bajo la dirección del ingeniero John Frank Stevens y luego del coronel George Washington Goethals, que la obra se completó exitosamente. Un factor decisivo fue la campaña sanitaria del doctor William Gorgas, quien logró controlar las enfermedades mediante la eliminación de los criaderos de mosquitos.

En 2016, se inauguró la ampliación del canal con un tercer juego de esclusas, lo que permitió el tránsito de buques neopanamax, con capacidad de hasta 14,000 contenedores. Esta ampliación consolidó a Panamá como un hub logístico global. Actualmente, el canal genera más de 3,000 millones de dólares anuales en ingresos para el país y por él transita aproximadamente el 6% del comercio marítimo mundial.`,

  "passage-manglares": `Los manglares son ecosistemas costeros formados por árboles y arbustos adaptados a condiciones de alta salinidad y suelos inundados por las mareas. Se encuentran en las zonas tropicales y subtropicales del planeta, cubriendo aproximadamente 150,000 kilómetros cuadrados de línea costera en más de 120 países.

La importancia de los manglares es multidimensional. En primer lugar, funcionan como barreras naturales contra tormentas, huracanes y tsunamis, reduciendo la energía del oleaje hasta en un 66%. En segundo lugar, son viveros naturales: más del 75% de las especies pesqueras comerciales pasan alguna etapa de su ciclo de vida en los manglares. En tercer lugar, son extraordinarios sumideros de carbono: almacenan hasta cuatro veces más carbono por hectárea que los bosques terrestres tropicales, lo que los convierte en aliados cruciales contra el cambio climático.

Sin embargo, los manglares están desapareciendo a un ritmo alarmante. En las últimas cuatro décadas, se ha perdido entre el 30% y el 50% de la cobertura mundial de manglares, principalmente por la expansión de la acuicultura del camarón, el desarrollo urbano costero y la contaminación. Paradójicamente, la destrucción de manglares aumenta la vulnerabilidad de las comunidades costeras a los mismos desastres naturales de los que estos ecosistemas las protegían.`,

  "passage-ia": `La inteligencia artificial (IA) ha dejado de ser un concepto de ciencia ficción para convertirse en una realidad que transforma silenciosamente nuestra vida cotidiana. Desde los algoritmos que recomiendan canciones en plataformas de streaming hasta los sistemas que diagnostican enfermedades con mayor precisión que algunos especialistas, la IA está redefiniendo los límites de lo posible.

No obstante, este avance tecnológico genera un intenso debate ético. Los críticos advierten sobre el sesgo algorítmico: si los datos con los que se entrena una IA reflejan prejuicios históricos, el sistema los reproducirá y amplificará. Por ejemplo, sistemas de selección de personal han mostrado preferencia por candidatos masculinos, simplemente porque fueron entrenados con datos de décadas en las que la mayoría de contratados eran hombres. Otro riesgo es el desplazamiento laboral: un informe del Foro Económico Mundial estima que para 2030, la automatización habrá eliminado 85 millones de empleos, aunque también creará 97 millones de nuevos puestos, muchos de ellos en campos que aún no existen.

Los defensores de la IA argumentan que, bien regulada, puede ser la herramienta más poderosa contra los grandes desafíos de la humanidad: desde acelerar el descubrimiento de medicamentos hasta optimizar el uso de energía y combatir el cambio climático. El verdadero desafío no es la tecnología en sí, sino la capacidad de las sociedades para gobernarla con sabiduría, asegurando que sus beneficios se distribuyan equitativamente.`,
};
import { verbalTopics } from "./verbal-data";

export const examConfig: ExamConfig = {
  totalQuestions: 100,
  timeMinutes: 150,
  sections: [
    { name: "Aritmética", count: 12 },
    { name: "Álgebra", count: 14 },
    { name: "Geometría", count: 12 },
    { name: "Estadística", count: 12 },
    { name: "Completar Oraciones", count: 12 },
    { name: "Comprensión Lectora", count: 14 },
    { name: "Analogías", count: 12 },
    { name: "Redacción", count: 12 },
  ],
};

// --- DEDICATED SIMULATOR QUESTIONS (bonus pool, PAA-style) ---
const dedicatedQuestions: Exercise[] = [
  // ARITMÉTICA
  { id: "sim-a1", question: "Un comerciante compra un artículo en B/.80 y lo vende con un 25% de ganancia. Si luego aplica un 10% de descuento sobre el precio de venta, ¿cuál es el precio final?", options: ["B/.90", "B/.100", "B/.88", "B/.92"], correctAnswer: 0, explanation: "Precio de venta = 80 × 1.25 = B/.100. Con descuento: 100 × 0.90 = B/.90", topic: "Aritmética" },
  { id: "sim-a2", question: "Si 3/4 de los estudiantes aprobaron el examen y el 60% de los que aprobaron obtuvo más de 80 puntos, ¿qué fracción del total obtuvo más de 80?", options: ["9/20", "3/5", "1/4", "2/5"], correctAnswer: 0, explanation: "3/4 × 60/100 = 3/4 × 3/5 = 9/20", topic: "Aritmética" },
  { id: "sim-a3", question: "Un tanque tiene 240 litros. Se usa 1/3 el lunes, 1/4 del resto el martes. ¿Cuántos litros quedan?", options: ["120", "100", "80", "140"], correctAnswer: 0, explanation: "Lunes: 240 × 1/3 = 80 usados, quedan 160. Martes: 160 × 1/4 = 40 usados, quedan 120", topic: "Aritmética" },
  { id: "sim-a4", question: "Si el precio de un producto aumenta un 20% y luego baja un 20%, ¿cuál es el efecto neto?", options: ["Disminuyó 4%", "Quedó igual", "Aumentó 4%", "Disminuyó 2%"], correctAnswer: 0, explanation: "100 × 1.20 = 120. Luego 120 × 0.80 = 96. Efecto: bajó 4%", topic: "Aritmética" },
  { id: "sim-a5", question: "Tres obreros terminan un trabajo en 12 días. ¿En cuántos días lo terminan 4 obreros trabajando al mismo ritmo?", options: ["9", "8", "10", "16"], correctAnswer: 0, explanation: "Proporción inversa: 3 × 12 = 4 × x → x = 36/4 = 9 días", topic: "Aritmética" },

  // ÁLGEBRA
  { id: "sim-b1", question: "La edad de Pedro es el triple de la de Ana. Dentro de 12 años, la edad de Pedro será el doble de la de Ana. ¿Cuántos años tiene Ana?", options: ["12", "8", "6", "24"], correctAnswer: 0, explanation: "Sea a = edad de Ana, Pedro = 3a. Dentro de 12 años: 3a + 12 = 2(a + 12) → 3a + 12 = 2a + 24 → a = 12. Verificación: Ana = 12, Pedro = 36. En 12 años: Ana = 24, Pedro = 48. 48/24 = 2 ✓", topic: "Álgebra" },
  { id: "sim-b2", question: "Si f(x) = 3x − 2 y g(x) = x² + 1, ¿cuánto es g(f(2))?", options: ["17", "13", "10", "25"], correctAnswer: 0, explanation: "f(2) = 3(2) − 2 = 4. g(4) = 4² + 1 = 17", topic: "Álgebra" },
  { id: "sim-b3", question: "Un rectángulo tiene perímetro 34 cm. Si el largo es 3 cm más que el ancho, ¿cuál es el área?", options: ["70 cm²", "60 cm²", "80 cm²", "52 cm²"], correctAnswer: 0, explanation: "2(a + a+3) = 34 → 4a + 6 = 34 → a = 7. Largo = 10. Área = 7 × 10 = 70 cm²", topic: "Álgebra" },
  { id: "sim-b4", question: "¿Para qué valores de x se cumple que x² − 5x + 6 ≤ 0?", options: ["2 ≤ x ≤ 3", "x ≤ 2 o x ≥ 3", "x < 2", "x > 3"], correctAnswer: 0, explanation: "x² − 5x + 6 = (x−2)(x−3). Es ≤ 0 cuando 2 ≤ x ≤ 3 (entre las raíces para parábola que abre arriba)", topic: "Álgebra" },
  { id: "sim-b5", question: "En la sucesión 2, 6, 18, 54, ..., ¿cuál es la suma de los primeros 5 términos?", options: ["242", "162", "200", "320"], correctAnswer: 0, explanation: "Geométrica r=3. S₅ = 2(3⁵−1)/(3−1) = 2(243−1)/2 = 242", topic: "Álgebra" },

  // GEOMETRÍA
  { id: "sim-c1", question: "Un terreno rectangular mide 30 m × 40 m. Si se construye un camino de 2 m de ancho alrededor del terreno, ¿cuál es el área del camino?", options: ["296 m²", "288 m²", "320 m²", "256 m²"], correctAnswer: 0, explanation: "Exterior con camino: (30 + 2×2) × (40 + 2×2) = 34 × 44 = 1496 m². Terreno solo: 30 × 40 = 1200 m². Área del camino = 1496 − 1200 = 296 m²", topic: "Geometría", figure: "rect-path" },
  { id: "sim-c2", question: "Dos ángulos de un triángulo miden 35° y 75°. ¿Qué tipo de triángulo es según sus ángulos?", options: ["Acutángulo", "Rectángulo", "Obtusángulo", "Equilátero"], correctAnswer: 0, explanation: "El tercer ángulo = 180° − 35° − 75° = 70°. Los tres ángulos (35°, 70°, 75°) son menores de 90° → acutángulo", topic: "Geometría" },
  { id: "sim-c3", question: "Una pizza circular tiene diámetro de 40 cm. Si se corta en 8 porciones iguales, ¿cuál es el área de cada porción?", options: ["50π cm²", "200π cm²", "25π cm²", "100π cm²"], correctAnswer: 0, explanation: "Radio = 20. Área total = π(20)² = 400π. Cada porción = 400π/8 = 50π cm²", topic: "Geometría", figure: "circle-8-slices" },
  { id: "sim-c4", question: "La distancia entre los puntos A(1, 3) y B(4, 7) es:", options: ["5", "7", "25", "√7"], correctAnswer: 0, explanation: "d = √[(4−1)² + (7−3)²] = √[9 + 16] = √25 = 5", topic: "Geometría", figure: "coord-points-AB" },
  { id: "sim-c5", question: "Un cono tiene radio 6 cm y altura 8 cm. ¿Cuál es su volumen?", options: ["96π cm³", "288π cm³", "48π cm³", "192π cm³"], correctAnswer: 0, explanation: "V = πr²h/3 = π(36)(8)/3 = 288π/3 = 96π cm³", topic: "Geometría", figure: "cone" },

  // ESTADÍSTICA
  { id: "sim-d1", question: "Los salarios mensuales de 5 empleados son: B/.800, B/.900, B/.950, B/.1000, B/.5000. ¿Cuál medida de tendencia central representa mejor los datos?", options: ["La mediana (B/.950)", "La media (B/.1730)", "La moda", "El rango"], correctAnswer: 0, explanation: "El valor B/.5000 es un dato atípico que infla la media. La mediana (B/.950) representa mejor al grupo típico.", topic: "Estadística" },
  { id: "sim-d2", question: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea mayor que 10?", options: ["1/12", "1/6", "1/9", "1/4"], correctAnswer: 0, explanation: "Sumas > 10: (5,6),(6,5),(6,6) = 3 combinaciones. P = 3/36 = 1/12", topic: "Estadística" },
  { id: "sim-d3", question: "En un grupo de 30 estudiantes, 18 practican fútbol, 12 practican básquet y 5 practican ambos. ¿Cuántos no practican ninguno de los dos?", options: ["5", "0", "3", "10"], correctAnswer: 0, explanation: "Al menos uno: 18 + 12 − 5 = 25. Ninguno: 30 − 25 = 5", topic: "Estadística", figure: "venn-sports" },
  { id: "sim-d4", question: "Si la media de 8 números es 15 y se elimina un número que vale 7, ¿cuál es la nueva media?", options: ["≈16.14", "14", "15", "17"], correctAnswer: 0, explanation: "Suma original = 8 × 15 = 120. Nueva suma = 120 − 7 = 113. Nueva media = 113/7 ≈ 16.14", topic: "Estadística" },
  { id: "sim-d5", question: "¿De cuántas formas se puede formar un comité de 3 personas a partir de un grupo de 7?", options: ["35", "210", "21", "120"], correctAnswer: 0, explanation: "C(7,3) = 7!/(3!·4!) = (7×6×5)/(3×2×1) = 35", topic: "Estadística" },

  // COMPLETAR ORACIONES
  { id: "sim-e1", question: "La ______ del presidente fue recibida con ______ por los ciudadanos que esperaban cambios más profundos.", options: ["propuesta / escepticismo", "renuncia / alegría", "elección / indiferencia", "promesa / entusiasmo"], correctAnswer: 0, explanation: "'Esperaban cambios más profundos' sugiere insatisfacción. Una propuesta recibida con escepticismo encaja con expectativas no cumplidas.", topic: "Completar Oraciones" },
  { id: "sim-e2", question: "Aunque el tratamiento era ______, los efectos secundarios resultaron ser ______.", options: ["efectivo / considerables", "inútil / mínimos", "costoso / inexistentes", "novedoso / beneficiosos"], correctAnswer: 0, explanation: "'Aunque' indica contraste: el tratamiento funciona (efectivo) PERO tiene efectos negativos (considerables).", topic: "Completar Oraciones" },
  { id: "sim-e3", question: "El arqueólogo describió el hallazgo como ______, ya que proporcionaba evidencia ______ de una civilización desconocida.", options: ["trascendental / irrefutable", "insignificante / abundante", "reciente / escasa", "polémico / contradictoria"], correctAnswer: 0, explanation: "Un hallazgo que prueba la existencia de algo desconocido es trascendental, y la evidencia que lo demuestra es irrefutable.", topic: "Completar Oraciones" },
  { id: "sim-e4", question: "La creciente ______ de recursos naturales ha obligado a los gobiernos a implementar políticas de ______.", options: ["escasez / conservación", "abundancia / exportación", "demanda / producción", "calidad / inspección"], correctAnswer: 0, explanation: "La escasez de recursos es lo que obliga a conservarlos. Las otras opciones no presentan una relación causa-efecto lógica.", topic: "Completar Oraciones" },
  { id: "sim-e5", question: "A diferencia de su hermano, que era ______ y reservado, ella se mostraba ______ en las reuniones sociales.", options: ["introvertido / extrovertida", "alegre / tímida", "sociable / callada", "amable / grosera"], correctAnswer: 0, explanation: "'A diferencia de' marca contraste. Si el hermano es reservado (introvertido), ella es lo opuesto: extrovertida.", topic: "Completar Oraciones" },

  // COMPRENSIÓN LECTORA — Basadas en pasajes (estilo PAA real)
  // Pasaje: El Canal de Panamá
  { id: "sim-f1", question: "Según el texto, ¿cuál fue el factor decisivo que permitió completar el Canal de Panamá en el segundo intento?", options: ["El control de las enfermedades tropicales", "La inversión económica de Estados Unidos", "La experiencia previa de los franceses", "La tecnología del siglo XX"], correctAnswer: 0, explanation: "El texto señala que 'un factor decisivo fue la campaña sanitaria del doctor William Gorgas, quien logró controlar las enfermedades mediante la eliminación de los criaderos de mosquitos'.", topic: "Comprensión Lectora", passageId: "passage-canal" },
  { id: "sim-f2", question: "¿Cuál es la idea principal del tercer párrafo del texto sobre el Canal?", options: ["La ampliación del canal consolidó la importancia global de Panamá", "El canal fue inaugurado en 1914", "Los buques neopanamax son muy grandes", "Estados Unidos construyó el canal"], correctAnswer: 0, explanation: "El tercer párrafo se enfoca en la ampliación de 2016 y cómo consolidó a Panamá como hub logístico global.", topic: "Comprensión Lectora", passageId: "passage-canal" },
  { id: "sim-f3", question: "Del texto se puede inferir que, sin la campaña sanitaria del Dr. Gorgas, el proyecto estadounidense:", options: ["Probablemente habría fracasado como el francés", "Habría costado menos dinero", "Se habría completado más rápido", "Habría sido más sencillo"], correctAnswer: 0, explanation: "Si el primer intento fracasó por enfermedades y Gorgas fue 'factor decisivo', sin él el resultado habría sido similar al francés.", topic: "Comprensión Lectora", passageId: "passage-canal" },
  { id: "sim-f4", question: "En el contexto del texto, la expresión 'hub logístico global' se refiere a:", options: ["Un centro de conexión para el comercio marítimo mundial", "Un aeropuerto internacional", "Una zona franca de impuestos", "Un centro de distribución local"], correctAnswer: 0, explanation: "En contexto de comercio marítimo y tránsito de buques, 'hub logístico' significa punto central de conexión para el transporte de mercancías.", topic: "Comprensión Lectora", passageId: "passage-canal" },
  // Pasaje: Los manglares
  { id: "sim-f5", question: "Según el texto, los manglares son importantes por varias razones. ¿Cuál de las siguientes NO se menciona?", options: ["Producen oxígeno para las ciudades cercanas", "Son barreras contra tormentas y tsunamis", "Son viveros naturales para especies pesqueras", "Almacenan grandes cantidades de carbono"], correctAnswer: 0, explanation: "El texto menciona protección contra tormentas, vivero de especies y sumidero de carbono. NO menciona producción de oxígeno para ciudades.", topic: "Comprensión Lectora", passageId: "passage-manglares" },

  // ANALOGÍAS
  { id: "sim-g1", question: "CIRUJANO : BISTURÍ como ESCULTOR : ?", options: ["Cincel", "Estatua", "Mármol", "Museo"], correctAnswer: 0, explanation: "Relación: profesional → herramienta principal. El cirujano usa bisturí; el escultor usa cincel.", topic: "Analogías" },
  { id: "sim-g2", question: "PRÓLOGO : EPÍLOGO como AMANECER : ?", options: ["Atardecer", "Mediodía", "Sol", "Noche"], correctAnswer: 0, explanation: "Relación: inicio → final. El prólogo es el inicio del libro y el epílogo el final. El amanecer inicia el día y el atardecer lo termina.", topic: "Analogías" },
  { id: "sim-g3", question: "CONSTITUCIÓN : PAÍS como REGLAMENTO : ?", options: ["Institución", "Director", "Castigo", "Ley"], correctAnswer: 0, explanation: "Relación: norma fundamental → lo que rige. La constitución rige un país; el reglamento rige una institución.", topic: "Analogías" },
  { id: "sim-g4", question: "CAUDALOSO : RÍO como FRONDOSO : ?", options: ["Árbol", "Hoja", "Verde", "Bosque"], correctAnswer: 0, explanation: "Relación: cualidad → objeto que la posee. Un río caudaloso (mucha agua); un árbol frondoso (muchas hojas).", topic: "Analogías" },
  { id: "sim-g5", question: "ANESTESIA : DOLOR como AISLANTE : ?", options: ["Calor", "Cable", "Electricidad", "Frío"], correctAnswer: 0, explanation: "Relación: lo que impide/bloquea → lo que bloquea. La anestesia bloquea el dolor; el aislante bloquea el calor (o frío/electricidad, pero la relación más directa es bloquear la transferencia de calor).", topic: "Analogías" },

  // REDACCIÓN
  { id: "sim-h1", question: "¿Cuál de las siguientes oraciones está correctamente puntuada?", options: ["Los estudiantes, que aprobaron el examen, recibirán un diploma.", "Los estudiantes que aprobaron, el examen recibirán un diploma.", "Los estudiantes que, aprobaron el examen recibirán un diploma.", "Los, estudiantes que aprobaron el examen recibirán un diploma."], correctAnswer: 0, explanation: "La cláusula explicativa 'que aprobaron el examen' va correctamente entre comas cuando es no restrictiva.", topic: "Redacción" },
  { id: "sim-h2", question: "Identifique la oración sin vicios del lenguaje:", options: ["Necesito que me repita la instrucción.", "Necesito que me vuelva a repetir la instrucción.", "Necesito que me repita de nuevo la instrucción.", "Necesito que me reitere de nuevo otra vez la instrucción."], correctAnswer: 0, explanation: "Las opciones B, C y D tienen redundancia: 'vuelva a repetir', 'repita de nuevo' y 'reitere de nuevo otra vez' repiten la idea de hacer algo otra vez.", topic: "Redacción" },
  { id: "sim-h3", question: "Elija el conector adecuado: 'El proyecto fue innovador; ______, no recibió financiamiento.'", options: ["sin embargo", "por lo tanto", "además", "es decir"], correctAnswer: 0, explanation: "Hay contraste entre ser innovador y no recibir financiamiento. 'Sin embargo' es el conector adversativo correcto.", topic: "Redacción" },
  { id: "sim-h4", question: "¿Cuál oración tiene la acentuación correcta?", options: ["El médico dijo que el examen salió bien.", "El medico dijo que el exámen salio bien.", "El médico dijo que el exámen salió bien.", "El medico dijo que el examen salió bien."], correctAnswer: 0, explanation: "'Médico' (esdrújula, siempre lleva tilde). 'Examen' (grave terminada en n, NO lleva tilde). 'Salió' (aguda terminada en vocal, lleva tilde). 'Dijo' (grave terminada en vocal, no lleva tilde).", topic: "Redacción" },
  { id: "sim-h5", question: "Ordene las oraciones para formar un párrafo coherente:\n1. Por esta razón, es fundamental proteger los arrecifes.\n2. Los arrecifes de coral albergan el 25% de la vida marina.\n3. Sin embargo, el cambio climático los está destruyendo.\n4. Además, son barreras naturales contra tormentas.", options: ["2, 4, 3, 1", "1, 2, 3, 4", "3, 2, 4, 1", "2, 3, 1, 4"], correctAnswer: 0, explanation: "2=tema principal. 4=información adicional ('además'). 3=contraste ('sin embargo'). 1=conclusión ('por esta razón').", topic: "Redacción" },

  // --- POOL AMPLIADO: 40 preguntas adicionales ---

  // ARITMÉTICA (sim-a6 a sim-a10)
  { id: "sim-a6", question: "María gasta 2/5 de su salario en alquiler y 1/3 del resto en comida. Si le quedan B/.400, ¿cuál es su salario?", options: ["B/.1000", "B/.800", "B/.1200", "B/.600"], correctAnswer: 0, explanation: "Gasta 2/5 → queda 3/5. De eso gasta 1/3 en comida → queda 2/3 de 3/5 = 6/15 = 2/5 del salario. 2/5 × S = 400 → S = 1000", topic: "Aritmética" },
  { id: "sim-a7", question: "Un tren sale a las 7:45 a.m. y llega a su destino a las 2:20 p.m. Si hizo una parada de 35 minutos, ¿cuánto tiempo estuvo en movimiento?", options: ["6 horas", "6 horas 35 min", "5 horas 25 min", "7 horas"], correctAnswer: 0, explanation: "De 7:45 a 2:20 = 6 horas 35 minutos totales. Menos 35 min de parada = 6 horas en movimiento", topic: "Aritmética" },
  { id: "sim-a8", question: "En una clase de 40 estudiantes, el 70% aprobó matemáticas, el 60% aprobó español y el 45% aprobó ambas. ¿Cuántos no aprobaron ninguna?", options: ["6", "8", "10", "4"], correctAnswer: 0, explanation: "Al menos una: 70% + 60% − 45% = 85%. Ninguna: 100% − 85% = 15%. El 15% de 40 = 6 estudiantes", topic: "Aritmética" },
  { id: "sim-a9", question: "Un auto consume 8 litros cada 100 km. Si el tanque tiene 50 litros y el viaje es de 650 km, ¿cuántos litros le faltan para completar el viaje?", options: ["2 litros", "4 litros", "8 litros", "No le faltan"], correctAnswer: 0, explanation: "Consumo total: 650 × 8/100 = 52 litros. Tiene 50 litros. Le faltan: 52 − 50 = 2 litros", topic: "Aritmética" },
  { id: "sim-a10", question: "Si un reloj se adelanta 3 minutos cada hora, ¿cuántos minutos de adelanto tendrá después de un día completo?", options: ["72 minutos", "36 minutos", "48 minutos", "24 minutos"], correctAnswer: 0, explanation: "Un día = 24 horas. Adelanto = 3 min/hora × 24 horas = 72 minutos", topic: "Aritmética" },

  // ÁLGEBRA (sim-b6 a sim-b10)
  { id: "sim-b6", question: "Un número es 4 veces otro. Si la suma de ambos es 60, ¿cuál es el número menor?", options: ["12", "15", "48", "20"], correctAnswer: 0, explanation: "Sea x el menor. 4x + x = 60 → 5x = 60 → x = 12", topic: "Álgebra" },
  { id: "sim-b7", question: "Si el doble de un número disminuido en 7 es igual a 15, ¿cuál es el número?", options: ["11", "4", "8", "22"], correctAnswer: 0, explanation: "2x − 7 = 15 → 2x = 22 → x = 11", topic: "Álgebra" },
  { id: "sim-b8", question: "La suma de tres números consecutivos pares es 78. ¿Cuál es el mayor?", options: ["28", "24", "26", "30"], correctAnswer: 0, explanation: "Sean x, x+2, x+4. Suma: 3x + 6 = 78 → 3x = 72 → x = 24. Mayor = 24 + 4 = 28", topic: "Álgebra" },
  { id: "sim-b9", question: "Un padre tiene el triple de edad que su hijo. Hace 10 años, el padre tenía 5 veces la edad del hijo. ¿Cuántos años tiene el hijo ahora?", options: ["20", "15", "25", "30"], correctAnswer: 0, explanation: "Padre = 3h. Hace 10 años: 3h − 10 = 5(h − 10) → 3h − 10 = 5h − 50 → 40 = 2h → h = 20", topic: "Álgebra" },
  { id: "sim-b10", question: "Si f(x) = x² − 4x + 3, ¿para qué valores de x la función es igual a cero?", options: ["x = 1 y x = 3", "x = −1 y x = −3", "x = 2 y x = 6", "x = 4 y x = 3"], correctAnswer: 0, explanation: "x² − 4x + 3 = (x − 1)(x − 3) = 0 → x = 1 o x = 3", topic: "Álgebra" },

  // GEOMETRÍA (sim-c6 a sim-c10)
  { id: "sim-c6", question: "El perímetro de un triángulo equilátero es 36 cm. ¿Cuál es su área?", options: ["36√3 cm²", "48 cm²", "36 cm²", "72√3 cm²"], correctAnswer: 0, explanation: "Lado = 36/3 = 12 cm. Área de equilátero = (√3/4)·l² = (√3/4)·144 = 36√3 cm²", topic: "Geometría", figure: "equilateral-triangle" },
  { id: "sim-c7", question: "Un cilindro tiene radio 5 cm y altura 10 cm. ¿Cuál es su volumen?", options: ["250π cm³", "500π cm³", "100π cm³", "50π cm³"], correctAnswer: 0, explanation: "V = πr²h = π(25)(10) = 250π cm³", topic: "Geometría", figure: "cylinder" },
  { id: "sim-c8", question: "¿Cuál es la pendiente de la recta que pasa por los puntos (2, 5) y (6, 13)?", options: ["2", "4", "1/2", "8"], correctAnswer: 0, explanation: "m = (13 − 5)/(6 − 2) = 8/4 = 2", topic: "Geometría", figure: "slope-2pts" },
  { id: "sim-c9", question: "Un triángulo rectángulo tiene catetos de 5 cm y 12 cm. ¿Cuánto mide la hipotenusa?", options: ["13 cm", "17 cm", "7 cm", "15 cm"], correctAnswer: 0, explanation: "h = √(5² + 12²) = √(25 + 144) = √169 = 13 cm", topic: "Geometría", figure: "right-triangle-5-12" },
  { id: "sim-c10", question: "El ángulo central de un sector circular es 60° y el radio es 6 cm. ¿Cuál es el área del sector?", options: ["6π cm²", "12π cm²", "36π cm²", "3π cm²"], correctAnswer: 0, explanation: "Área sector = (θ/360)·πr² = (60/360)·π(36) = (1/6)·36π = 6π cm²", topic: "Geometría", figure: "sector-60" },

  // ESTADÍSTICA (sim-d6 a sim-d10)
  { id: "sim-d6", question: "Las notas de un estudiante son: 70, 85, 90, 75, 80. Si necesita un promedio de 80 para aprobar, ¿cuánto debe sacar en el sexto examen?", options: ["80", "85", "90", "75"], correctAnswer: 0, explanation: "Suma actual = 400. Necesita: 80 × 6 = 480. Falta: 480 − 400 = 80", topic: "Estadística" },
  { id: "sim-d7", question: "Se lanza un dado 2 veces. ¿Cuál es la probabilidad de que la suma sea 7?", options: ["1/6", "1/12", "7/36", "1/4"], correctAnswer: 0, explanation: "Combinaciones que suman 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6", topic: "Estadística" },
  { id: "sim-d8", question: "En un grupo, la media es 75 y la desviación estándar es 5. Según la regla empírica, ¿qué porcentaje de datos está entre 65 y 85?", options: ["95%", "68%", "99.7%", "50%"], correctAnswer: 0, explanation: "65 = 75 − 2(5) y 85 = 75 + 2(5). Es ±2 desviaciones → 95% de los datos", topic: "Estadística", figure: "normal-distribution" },
  { id: "sim-d9", question: "¿De cuántas maneras pueden sentarse 5 personas alrededor de una mesa circular?", options: ["24", "120", "60", "12"], correctAnswer: 0, explanation: "Permutaciones circulares: (n−1)! = 4! = 24", topic: "Estadística" },
  { id: "sim-d10", question: "Una bolsa tiene 4 bolas rojas y 6 azules. Se sacan 2 sin reemplazo. ¿Probabilidad de que ambas sean rojas?", options: ["2/15", "4/25", "1/5", "4/10"], correctAnswer: 0, explanation: "P = (4/10)(3/9) = 12/90 = 2/15", topic: "Estadística" },

  // COMPLETAR ORACIONES (sim-e6 a sim-e10)
  { id: "sim-e6", question: "La investigación fue ______ por la comunidad científica debido a la ______ de sus resultados.", options: ["aclamada / solidez", "rechazada / claridad", "ignorada / importancia", "cuestionada / precisión"], correctAnswer: 0, explanation: "'Aclamar' requiere una razón positiva, y 'solidez de resultados' es un motivo lógico de reconocimiento científico.", topic: "Completar Oraciones" },
  { id: "sim-e7", question: "El candidato intentó mostrarse ______; sin embargo, sus contradicciones revelaron su verdadera ______.", options: ["sincero / hipocresía", "corrupto / honestidad", "tímido / valentía", "alegre / tristeza"], correctAnswer: 0, explanation: "'Sin embargo' marca contraste: intentó parecer sincero pero reveló hipocresía (lo opuesto).", topic: "Completar Oraciones" },
  { id: "sim-e8", question: "La tecnología ha ______ la comunicación, pero también ha ______ el aislamiento social entre los jóvenes.", options: ["facilitado / incrementado", "complicado / reducido", "eliminado / disminuido", "mejorado / eliminado"], correctAnswer: 0, explanation: "'Pero también' introduce una consecuencia negativa paralela. Facilitar comunicación + incrementar aislamiento muestra la dualidad de la tecnología.", topic: "Completar Oraciones" },
  { id: "sim-e9", question: "Debido a la ______ de recursos, el gobierno implementó medidas de ______ que afectaron a toda la población.", options: ["escasez / austeridad", "abundancia / generosidad", "carencia / expansión", "falta / liberación"], correctAnswer: 0, explanation: "La escasez causa austeridad (restricción de gastos). Es la relación causa-efecto más lógica.", topic: "Completar Oraciones" },
  { id: "sim-e10", question: "El escritor era conocido por su estilo ______: usaba palabras sencillas para expresar ideas ______.", options: ["conciso / profundas", "rebuscado / simples", "florido / básicas", "extenso / superficiales"], correctAnswer: 0, explanation: "Palabras sencillas = estilo conciso. Ideas profundas contrasta con la sencillez del estilo, creando la elegancia literaria.", topic: "Completar Oraciones" },

  // Pasaje: Los manglares (continuación)
  { id: "sim-f6", question: "El autor del texto sobre manglares describe la situación como 'paradójica' porque:", options: ["Destruir los manglares aumenta el riesgo del que protegían", "Los manglares crecen en agua salada", "La acuicultura es una industria importante", "Los manglares almacenan carbono"], correctAnswer: 0, explanation: "La paradoja es que al destruir la protección (manglares), las comunidades quedan expuestas a los desastres de los que los manglares las protegían.", topic: "Comprensión Lectora", passageId: "passage-manglares" },
  { id: "sim-f7", question: "Según los datos del texto, ¿cuántos kilómetros cuadrados de manglares podrían haberse perdido como máximo?", options: ["75,000 km²", "150,000 km²", "50,000 km²", "120,000 km²"], correctAnswer: 0, explanation: "Si había 150,000 km² y se perdió hasta el 50%, el máximo perdido = 150,000 × 0.50 = 75,000 km².", topic: "Comprensión Lectora", passageId: "passage-manglares" },
  // Pasaje: La inteligencia artificial
  { id: "sim-f8", question: "La postura general del autor del texto sobre IA es:", options: ["Cautelosamente optimista: reconoce riesgos pero cree en su potencial", "Completamente en contra de la IA", "Indiferente ante los avances tecnológicos", "Entusiasta sin reservas"], correctAnswer: 0, explanation: "El último párrafo reconoce el potencial ('herramienta más poderosa') pero condiciona al buen gobierno. Es optimismo cauteloso.", topic: "Comprensión Lectora", passageId: "passage-ia" },
  { id: "sim-f9", question: "Según el texto, el sesgo algorítmico ocurre cuando:", options: ["Los datos de entrenamiento reflejan prejuicios históricos", "Los programadores incluyen opiniones personales", "La IA toma decisiones al azar", "Los usuarios manipulan los resultados"], correctAnswer: 0, explanation: "El texto explica: 'si los datos con los que se entrena una IA reflejan prejuicios históricos, el sistema los reproducirá y amplificará'.", topic: "Comprensión Lectora", passageId: "passage-ia" },
  { id: "sim-f10", question: "Del informe del Foro Económico Mundial citado en el texto se puede inferir que:", options: ["Habrá una ganancia neta de empleos pese a la automatización", "La automatización destruirá más empleos de los que creará", "Los empleos actuales no cambiarán", "Solo se crearán empleos tecnológicos"], correctAnswer: 0, explanation: "Eliminará 85M pero creará 97M: ganancia neta de 12 millones. Además, los nuevos estarán en 'campos que aún no existen'.", topic: "Comprensión Lectora", passageId: "passage-ia" },

  // ANALOGÍAS (sim-g6 a sim-g10)
  { id: "sim-g6", question: "SEMILLA : ÁRBOL como HUEVO : ?", options: ["Ave", "Nido", "Cáscara", "Gallina"], correctAnswer: 0, explanation: "Relación: origen/estado inicial → resultado del desarrollo. La semilla se desarrolla en árbol; el huevo se desarrolla en ave.", topic: "Analogías" },
  { id: "sim-g7", question: "HAMBRE : COMER como SED : ?", options: ["Beber", "Agua", "Sed", "Vaso"], correctAnswer: 0, explanation: "Relación: necesidad → acción que la satisface. El hambre se satisface al comer; la sed se satisface al beber.", topic: "Analogías" },
  { id: "sim-g8", question: "TERMÓMETRO : TEMPERATURA como BALANZA : ?", options: ["Peso", "Metal", "Mercado", "Equilibrio"], correctAnswer: 0, explanation: "Relación: instrumento → magnitud que mide. El termómetro mide temperatura; la balanza mide peso.", topic: "Analogías" },
  { id: "sim-g9", question: "ARCHIPIÉLAGO : ISLAS como BIBLIOTECA : ?", options: ["Libros", "Edificio", "Silencio", "Estantes"], correctAnswer: 0, explanation: "Relación: conjunto → elementos que lo componen. Un archipiélago es un conjunto de islas; una biblioteca es un conjunto de libros.", topic: "Analogías" },
  { id: "sim-g10", question: "OXÍGENO : RESPIRACIÓN como GASOLINA : ?", options: ["Combustión", "Auto", "Petróleo", "Tanque"], correctAnswer: 0, explanation: "Relación: sustancia necesaria → proceso que la requiere. El oxígeno es necesario para la respiración; la gasolina para la combustión.", topic: "Analogías" },

  // REDACCIÓN (sim-h6 a sim-h10)
  { id: "sim-h6", question: "Seleccione la oración que tiene concordancia correcta:", options: ["La mayoría de los estudiantes aprobó el examen", "La mayoría de los estudiantes aprobaron el examen", "La mayoría de los estudiantes aprobamos el examen", "La mayoría de estudiantes aprobarán el examen"], correctAnswer: 0, explanation: "Con 'la mayoría de + sustantivo plural', el verbo puede ir en singular (concordancia con 'mayoría') o plural. Ambas son válidas, pero la singular es más formal y precisa.", topic: "Redacción" },
  { id: "sim-h7", question: "¿Qué conector completa correctamente? 'Estudió toda la noche; ______, obtuvo la mejor calificación.'", options: ["por consiguiente", "sin embargo", "aunque", "a pesar de que"], correctAnswer: 0, explanation: "Hay una relación causa-consecuencia: estudiar mucho → buena calificación. 'Por consiguiente' expresa consecuencia lógica.", topic: "Redacción" },
  { id: "sim-h8", question: "Identifique la oración con error de acentuación:", options: ["El exámen fue difícil", "El examen fue difícil", "La canción es hermosa", "El café está caliente"], correctAnswer: 0, explanation: "'Examen' es palabra grave terminada en -n, por lo que NO lleva tilde. 'Exámen' es incorrecto.", topic: "Redacción" },
  { id: "sim-h9", question: "¿Cuál oración es redundante?", options: ["Sube arriba las cajas", "Lleva las cajas al segundo piso", "Sube las cajas por la escalera", "Coloca las cajas arriba"], correctAnswer: 0, explanation: "'Sube arriba' es redundante porque 'subir' ya implica dirección hacia arriba. Lo correcto: 'Sube las cajas' o 'Lleva las cajas arriba'.", topic: "Redacción" },
  { id: "sim-h10", question: "Ordene para formar un texto coherente:\n1. Finalmente, se presentan las conclusiones.\n2. Toda investigación comienza con una pregunta.\n3. Luego se recopilan y analizan datos.\n4. A partir de ella se formula una hipótesis.", options: ["2, 4, 3, 1", "1, 2, 3, 4", "2, 3, 4, 1", "4, 2, 3, 1"], correctAnswer: 0, explanation: "Orden lógico del método científico: pregunta (2) → hipótesis (4) → datos (3) → conclusiones (1).", topic: "Redacción" },
];

// --- UTILITY FUNCTIONS ---

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleOptions(exercise: Exercise): Exercise {
  const indices = exercise.options.map((_, i) => i);
  const shuffled = shuffleArray(indices);
  return {
    ...exercise,
    options: shuffled.map((i) => exercise.options[i]),
    correctAnswer: shuffled.indexOf(exercise.correctAnswer),
  };
}

// --- SECTION MAPPINGS ---

const mathSectionMap: Record<string, string> = {
  aritmetica: "Aritmética",
  algebra: "Álgebra",
  geometria: "Geometría",
  estadistica: "Estadística",
};

const verbalSectionMap: Record<string, string> = {
  "completar-oraciones": "Completar Oraciones",
  "comprension-lectora": "Comprensión Lectora",
  analogias: "Analogías",
  redaccion: "Redacción",
};

// --- BUILD EXAM ---

export function buildExam(): Exercise[] {
  // 1. Collect all exercises into section pools
  const pool: Record<string, Exercise[]> = {};
  examConfig.sections.forEach((s) => {
    pool[s.name] = [];
  });

  // Add exercises from math data
  mathTopics.forEach((topic) => {
    const section = mathSectionMap[topic.id];
    if (section && pool[section]) {
      topic.subtopics.forEach((sub) => {
        sub.exercises.forEach((ex) => {
          pool[section].push({ ...ex, topic: section });
        });
      });
    }
  });

  // Add exercises from verbal data
  verbalTopics.forEach((topic) => {
    const section = verbalSectionMap[topic.id];
    if (section && pool[section]) {
      topic.subtopics.forEach((sub) => {
        sub.exercises.forEach((ex) => {
          pool[section].push({ ...ex, topic: section });
        });
      });
    }
  });

  // Add dedicated simulator questions
  dedicatedQuestions.forEach((q) => {
    if (q.topic && pool[q.topic]) {
      pool[q.topic].push(q);
    }
  });

  // 2. For each section, pick random questions and shuffle their options
  const exam: Exercise[] = [];
  examConfig.sections.forEach((section) => {
    const available = shuffleArray(pool[section.name] || []);
    const selected = available.slice(0, section.count);
    selected.forEach((q) => {
      exam.push(shuffleOptions(q));
    });
  });

  // 3. Shuffle ALL questions (PAA real doesn't group by section)
  //    BUT keep passage-based questions together (consecutive)
  const passageGroups = new Map<string, Exercise[]>();
  const standalone: Exercise[] = [];

  exam.forEach((q) => {
    if (q.passageId) {
      if (!passageGroups.has(q.passageId)) passageGroups.set(q.passageId, []);
      passageGroups.get(q.passageId)!.push(q);
    } else {
      standalone.push(q);
    }
  });

  // Create "blocks": each standalone question is a block, each passage group is a block
  const blocks: Exercise[][] = standalone.map((q) => [q]);
  passageGroups.forEach((group) => {
    blocks.push(shuffleArray(group)); // shuffle within passage too
  });

  // Shuffle the blocks, then flatten
  const shuffledBlocks = shuffleArray(blocks);
  const finalExam: Exercise[] = [];
  shuffledBlocks.forEach((block) => {
    block.forEach((q) => finalExam.push(q));
  });

  return finalExam;
}

// Legacy export for compatibility (not used by new simulator)
export const simulatorQuestions = dedicatedQuestions;

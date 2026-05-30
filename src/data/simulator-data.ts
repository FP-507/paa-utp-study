import { Exercise, ExamConfig } from "./types";
import { mathTopics } from "./math-data";
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
  { id: "sim-c1", question: "Un terreno rectangular mide 30 m × 40 m. Si se construye un camino de 2 m de ancho alrededor del terreno, ¿cuál es el área del camino?", options: ["296 m²", "288 m²", "320 m²", "256 m²"], correctAnswer: 0, explanation: "Exterior con camino: (30 + 2×2) × (40 + 2×2) = 34 × 44 = 1496 m². Terreno solo: 30 × 40 = 1200 m². Área del camino = 1496 − 1200 = 296 m²", topic: "Geometría" },
  { id: "sim-c2", question: "Dos ángulos de un triángulo miden 35° y 75°. ¿Qué tipo de triángulo es según sus ángulos?", options: ["Acutángulo", "Rectángulo", "Obtusángulo", "Equilátero"], correctAnswer: 0, explanation: "El tercer ángulo = 180° − 35° − 75° = 70°. Los tres ángulos (35°, 70°, 75°) son menores de 90° → acutángulo", topic: "Geometría" },
  { id: "sim-c3", question: "Una pizza circular tiene diámetro de 40 cm. Si se corta en 8 porciones iguales, ¿cuál es el área de cada porción?", options: ["50π cm²", "200π cm²", "25π cm²", "100π cm²"], correctAnswer: 0, explanation: "Radio = 20. Área total = π(20)² = 400π. Cada porción = 400π/8 = 50π cm²", topic: "Geometría" },
  { id: "sim-c4", question: "La distancia entre los puntos A(1, 3) y B(4, 7) es:", options: ["5", "7", "25", "√7"], correctAnswer: 0, explanation: "d = √[(4−1)² + (7−3)²] = √[9 + 16] = √25 = 5", topic: "Geometría" },
  { id: "sim-c5", question: "Un cono tiene radio 6 cm y altura 8 cm. ¿Cuál es su volumen?", options: ["96π cm³", "288π cm³", "48π cm³", "192π cm³"], correctAnswer: 0, explanation: "V = πr²h/3 = π(36)(8)/3 = 288π/3 = 96π cm³", topic: "Geometría" },

  // ESTADÍSTICA
  { id: "sim-d1", question: "Los salarios mensuales de 5 empleados son: B/.800, B/.900, B/.950, B/.1000, B/.5000. ¿Cuál medida de tendencia central representa mejor los datos?", options: ["La mediana (B/.950)", "La media (B/.1730)", "La moda", "El rango"], correctAnswer: 0, explanation: "El valor B/.5000 es un dato atípico que infla la media. La mediana (B/.950) representa mejor al grupo típico.", topic: "Estadística" },
  { id: "sim-d2", question: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea mayor que 10?", options: ["1/12", "1/6", "1/9", "1/4"], correctAnswer: 0, explanation: "Sumas > 10: (5,6),(6,5),(6,6) = 3 combinaciones. P = 3/36 = 1/12", topic: "Estadística" },
  { id: "sim-d3", question: "En un grupo de 30 estudiantes, 18 practican fútbol, 12 practican básquet y 5 practican ambos. ¿Cuántos no practican ninguno de los dos?", options: ["5", "0", "3", "10"], correctAnswer: 0, explanation: "Al menos uno: 18 + 12 − 5 = 25. Ninguno: 30 − 25 = 5", topic: "Estadística" },
  { id: "sim-d4", question: "Si la media de 8 números es 15 y se elimina un número que vale 7, ¿cuál es la nueva media?", options: ["≈16.14", "14", "15", "17"], correctAnswer: 0, explanation: "Suma original = 8 × 15 = 120. Nueva suma = 120 − 7 = 113. Nueva media = 113/7 ≈ 16.14", topic: "Estadística" },
  { id: "sim-d5", question: "¿De cuántas formas se puede formar un comité de 3 personas a partir de un grupo de 7?", options: ["35", "210", "21", "120"], correctAnswer: 0, explanation: "C(7,3) = 7!/(3!·4!) = (7×6×5)/(3×2×1) = 35", topic: "Estadística" },

  // COMPLETAR ORACIONES
  { id: "sim-e1", question: "La ______ del presidente fue recibida con ______ por los ciudadanos que esperaban cambios más profundos.", options: ["propuesta / escepticismo", "renuncia / alegría", "elección / indiferencia", "promesa / entusiasmo"], correctAnswer: 0, explanation: "'Esperaban cambios más profundos' sugiere insatisfacción. Una propuesta recibida con escepticismo encaja con expectativas no cumplidas.", topic: "Completar Oraciones" },
  { id: "sim-e2", question: "Aunque el tratamiento era ______, los efectos secundarios resultaron ser ______.", options: ["efectivo / considerables", "inútil / mínimos", "costoso / inexistentes", "novedoso / beneficiosos"], correctAnswer: 0, explanation: "'Aunque' indica contraste: el tratamiento funciona (efectivo) PERO tiene efectos negativos (considerables).", topic: "Completar Oraciones" },
  { id: "sim-e3", question: "El arqueólogo describió el hallazgo como ______, ya que proporcionaba evidencia ______ de una civilización desconocida.", options: ["trascendental / irrefutable", "insignificante / abundante", "reciente / escasa", "polémico / contradictoria"], correctAnswer: 0, explanation: "Un hallazgo que prueba la existencia de algo desconocido es trascendental, y la evidencia que lo demuestra es irrefutable.", topic: "Completar Oraciones" },
  { id: "sim-e4", question: "La creciente ______ de recursos naturales ha obligado a los gobiernos a implementar políticas de ______.", options: ["escasez / conservación", "abundancia / exportación", "demanda / producción", "calidad / inspección"], correctAnswer: 0, explanation: "La escasez de recursos es lo que obliga a conservarlos. Las otras opciones no presentan una relación causa-efecto lógica.", topic: "Completar Oraciones" },
  { id: "sim-e5", question: "A diferencia de su hermano, que era ______ y reservado, ella se mostraba ______ en las reuniones sociales.", options: ["introvertido / extrovertida", "alegre / tímida", "sociable / callada", "amable / grosera"], correctAnswer: 0, explanation: "'A diferencia de' marca contraste. Si el hermano es reservado (introvertido), ella es lo opuesto: extrovertida.", topic: "Completar Oraciones" },

  // COMPRENSIÓN LECTORA
  { id: "sim-f1", question: "Un texto describe cómo las abejas polinizan las flores, producen miel y mantienen el equilibrio de los ecosistemas. La idea principal es:", options: ["Las abejas cumplen funciones vitales para la naturaleza", "La miel es un producto valioso", "Las flores necesitan agua para crecer", "Los ecosistemas son complejos"], correctAnswer: 0, explanation: "El texto abarca tres funciones de las abejas (polinización, miel, equilibrio). La idea principal las engloba todas.", topic: "Comprensión Lectora" },
  { id: "sim-f2", question: "Un autor escribe: 'Mientras invertimos millones en explorar Marte, millones de personas en la Tierra no tienen acceso a agua potable.' El propósito del autor es:", options: ["Criticar las prioridades de inversión", "Informar sobre la exploración espacial", "Describir la crisis del agua", "Entretener con datos curiosos"], correctAnswer: 0, explanation: "El contraste entre gasto espacial y necesidades básicas insatisfechas es una crítica a las prioridades.", topic: "Comprensión Lectora" },
  { id: "sim-f3", question: "Si un texto afirma que 'los países con mayor inversión en educación tienen menores tasas de criminalidad', se puede inferir que:", options: ["La educación puede ser un factor preventivo contra el crimen", "La educación elimina totalmente el crimen", "Los países pobres siempre tienen más crimen", "Invertir en educación no tiene otros beneficios"], correctAnswer: 0, explanation: "La correlación sugiere que la educación PUEDE ser un factor (no garantía absoluta). Las otras opciones son generalizaciones excesivas.", topic: "Comprensión Lectora" },
  { id: "sim-f4", question: "'En los últimos 50 años, la temperatura global ha aumentado 1.1°C. Este incremento, aparentemente pequeño, ha provocado el deshielo de glaciares, el aumento del nivel del mar y fenómenos climáticos extremos.' El tono del texto es:", options: ["Objetivo con tono de alerta", "Optimista y esperanzador", "Indiferente y neutral", "Sarcástico"], correctAnswer: 0, explanation: "Presenta datos objetivos (1.1°C, 50 años) pero las consecuencias enumeradas generan alarma. Es objetivo pero alertante.", topic: "Comprensión Lectora" },
  { id: "sim-f5", question: "¿Cuál de las siguientes afirmaciones sobre un texto expositivo es correcta?", options: ["Presenta información de manera objetiva y organizada", "Siempre incluye la opinión personal del autor", "Su objetivo principal es entretener al lector", "Utiliza principalmente lenguaje figurado"], correctAnswer: 0, explanation: "Los textos expositivos informan de manera objetiva y organizada. La opinión es de textos argumentativos, entretener de narrativos.", topic: "Comprensión Lectora" },

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
    // Shuffle options so the correct answer isn't always A
    selected.forEach((q) => {
      exam.push(shuffleOptions(q));
    });
  });

  return exam;
}

// Legacy export for compatibility (not used by new simulator)
export const simulatorQuestions = dedicatedQuestions;

import { Exercise, ExamConfig } from "./types";

export const examConfig: ExamConfig = {
  totalQuestions: 40,
  timeMinutes: 60,
  sections: [
    { name: "Aritmética", count: 5 },
    { name: "Álgebra", count: 5 },
    { name: "Geometría", count: 5 },
    { name: "Estadística", count: 5 },
    { name: "Completar Oraciones", count: 5 },
    { name: "Comprensión Lectora", count: 5 },
    { name: "Analogías", count: 5 },
    { name: "Redacción", count: 5 },
  ],
};

export const simulatorQuestions: Exercise[] = [
  // ARITMÉTICA
  { id: "sim-a1", question: "Si el precio de un artículo es B/.120 y se le aplica un descuento del 15%, ¿cuál es el precio con descuento?", options: ["B/.102", "B/.105", "B/.108", "B/.98"], correctAnswer: 0, explanation: "120 × 0.15 = 18. Precio = 120 − 18 = B/.102", topic: "Aritmética" },
  { id: "sim-a2", question: "¿Cuánto es (−5)² − (−3)³?", options: ["52", "2", "−2", "16"], correctAnswer: 0, explanation: "(−5)² = 25. (−3)³ = −27. 25 − (−27) = 25 + 27 = 52", topic: "Aritmética" },
  { id: "sim-a3", question: "Si 2/5 de los estudiantes son mujeres y hay 150 estudiantes, ¿cuántas mujeres hay?", options: ["60", "90", "75", "50"], correctAnswer: 0, explanation: "150 × 2/5 = 300/5 = 60", topic: "Aritmética" },
  { id: "sim-a4", question: "Un auto recorre 240 km en 3 horas. ¿Cuántos km recorre en 5 horas a la misma velocidad?", options: ["400", "360", "480", "300"], correctAnswer: 0, explanation: "Velocidad = 240/3 = 80 km/h. En 5 horas: 80 × 5 = 400 km", topic: "Aritmética" },
  { id: "sim-a5", question: "¿Cuál es el resultado de √144 + √49?", options: ["19", "17", "193", "91"], correctAnswer: 0, explanation: "√144 = 12 y √49 = 7. 12 + 7 = 19", topic: "Aritmética" },

  // ÁLGEBRA
  { id: "sim-b1", question: "Si 3x − 7 = 2x + 5, ¿cuánto vale x?", options: ["12", "7", "−2", "2"], correctAnswer: 0, explanation: "3x − 2x = 5 + 7 → x = 12", topic: "Álgebra" },
  { id: "sim-b2", question: "Factoriza: x² − 4x − 21", options: ["(x−7)(x+3)", "(x+7)(x−3)", "(x−21)(x+1)", "(x+7)(x+3)"], correctAnswer: 0, explanation: "Busca dos números que multipliquen −21 y sumen −4: −7 y +3", topic: "Álgebra" },
  { id: "sim-b3", question: "¿Cuál es el valor de x en el sistema: x + y = 10, 2x − y = 8?", options: ["6", "4", "8", "5"], correctAnswer: 0, explanation: "Sumando ambas: 3x = 18 → x = 6", topic: "Álgebra" },
  { id: "sim-b4", question: "Si f(x) = 2x² − 3x + 1, ¿cuánto es f(2)?", options: ["3", "5", "7", "−1"], correctAnswer: 0, explanation: "f(2) = 2(4) − 3(2) + 1 = 8 − 6 + 1 = 3", topic: "Álgebra" },
  { id: "sim-b5", question: "¿Cuántas soluciones reales tiene x² + 4x + 4 = 0?", options: ["Una (raíz doble)", "Dos diferentes", "Ninguna", "Infinitas"], correctAnswer: 0, explanation: "Discriminante = 16 − 16 = 0 → una raíz doble. (x+2)² = 0 → x = −2", topic: "Álgebra" },

  // GEOMETRÍA
  { id: "sim-c1", question: "Un triángulo rectángulo tiene catetos de 6 y 8. ¿Cuánto mide la hipotenusa?", options: ["10", "14", "48", "100"], correctAnswer: 0, explanation: "c² = 6² + 8² = 36 + 64 = 100 → c = 10", topic: "Geometría" },
  { id: "sim-c2", question: "¿Cuál es el área de un círculo con diámetro 14?", options: ["49π", "196π", "14π", "28π"], correctAnswer: 0, explanation: "Radio = 7. Área = π(7²) = 49π", topic: "Geometría" },
  { id: "sim-c3", question: "Si los ángulos de un triángulo son 2x, 3x y 4x, ¿cuánto vale x?", options: ["20°", "30°", "15°", "40°"], correctAnswer: 0, explanation: "2x + 3x + 4x = 180° → 9x = 180° → x = 20°", topic: "Geometría" },
  { id: "sim-c4", question: "¿Cuál es el volumen de un cilindro con radio 3 y altura 5?", options: ["45π", "30π", "15π", "90π"], correctAnswer: 0, explanation: "V = πr²h = π(9)(5) = 45π", topic: "Geometría" },
  { id: "sim-c5", question: "El perímetro de un cuadrado es 48 cm. ¿Cuál es su área?", options: ["144 cm²", "192 cm²", "96 cm²", "12 cm²"], correctAnswer: 0, explanation: "Lado = 48/4 = 12. Área = 12² = 144 cm²", topic: "Geometría" },

  // ESTADÍSTICA
  { id: "sim-d1", question: "La mediana del conjunto {3, 7, 1, 9, 5} es:", options: ["5", "3", "7", "25"], correctAnswer: 0, explanation: "Ordenados: 1, 3, 5, 7, 9. El valor central es 5.", topic: "Estadística" },
  { id: "sim-d2", question: "Al lanzar dos dados, ¿cuál es la probabilidad de que la suma sea 7?", options: ["1/6", "1/12", "7/36", "1/36"], correctAnswer: 0, explanation: "Combinaciones que dan 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 de 36 → 6/36 = 1/6", topic: "Estadística" },
  { id: "sim-d3", question: "Si el promedio de 4 números es 15 y se agrega el número 25, ¿cuál es el nuevo promedio?", options: ["17", "20", "16", "18"], correctAnswer: 0, explanation: "Suma original = 60. Nueva suma = 85. Nuevo promedio = 85/5 = 17", topic: "Estadística" },
  { id: "sim-d4", question: "En un gráfico circular, un sector de 144° representa:", options: ["40%", "36%", "44%", "14.4%"], correctAnswer: 0, explanation: "144/360 × 100 = 40%", topic: "Estadística" },
  { id: "sim-d5", question: "¿De cuántas formas pueden sentarse 3 personas en 3 sillas?", options: ["6", "9", "3", "27"], correctAnswer: 0, explanation: "3! = 3 × 2 × 1 = 6 permutaciones", topic: "Estadística" },

  // COMPLETAR ORACIONES
  { id: "sim-e1", question: "La investigación fue tan ______ que cambió por completo nuestra comprensión del fenómeno.", options: ["reveladora", "superficial", "irrelevante", "tediosa"], correctAnswer: 0, explanation: "'Cambió por completo nuestra comprensión' indica un impacto profundo = reveladora.", topic: "Completar Oraciones" },
  { id: "sim-e2", question: "El político evitó dar respuestas ______, prefiriendo hablar con ______ para no comprometerse.", options: ["directas / ambigüedad", "vagas / claridad", "honestas / sinceridad", "evasivas / precisión"], correctAnswer: 0, explanation: "Evitar + no comprometerse = evade lo directo usando ambigüedad.", topic: "Completar Oraciones" },
  { id: "sim-e3", question: "A pesar de la ______ del camino, los excursionistas decidieron continuar con ______.", options: ["dificultad / determinación", "facilidad / temor", "belleza / prisa", "distancia / pereza"], correctAnswer: 0, explanation: "'A pesar de' indica obstáculo. Continuar a pesar de dificultad requiere determinación.", topic: "Completar Oraciones" },
  { id: "sim-e4", question: "La ______ del desierto obliga a las plantas a desarrollar mecanismos de ______ de agua.", options: ["aridez / conservación", "humedad / pérdida", "belleza / atracción", "extensión / producción"], correctAnswer: 0, explanation: "Desierto = aridez. Las plantas necesitan conservar agua en ambientes secos.", topic: "Completar Oraciones" },
  { id: "sim-e5", question: "El avance tecnológico ha ______ la comunicación, pero también ha ______ el contacto humano directo.", options: ["facilitado / reducido", "complicado / aumentado", "eliminado / mejorado", "facilitado / mejorado"], correctAnswer: 0, explanation: "'Pero' indica contraste: la tecnología facilita comunicación PERO reduce contacto directo.", topic: "Completar Oraciones" },

  // COMPRENSIÓN LECTORA
  { id: "sim-f1", question: "Un texto explica los efectos del cambio climático en la agricultura panameña, con datos y soluciones propuestas. El propósito principal del autor es:", options: ["Informar y proponer soluciones", "Entretener al lector", "Criticar a los agricultores", "Vender productos agrícolas"], correctAnswer: 0, explanation: "Datos + soluciones propuestas = informar y proponer, no solo criticar o entretener.", topic: "Comprensión Lectora" },
  { id: "sim-f2", question: "Un párrafo dice: 'Las energías renovables representan solo el 5% de la matriz energética del país, a pesar de su enorme potencial solar y eólico.' Se puede inferir que:", options: ["El país no aprovecha su potencial de energías limpias", "Las energías renovables son ineficientes", "El país no tiene recursos naturales", "La energía solar no funciona en ese país"], correctAnswer: 0, explanation: "Solo 5% a pesar de 'enorme potencial' = no se está aprovechando.", topic: "Comprensión Lectora" },
  { id: "sim-f3", question: "¿Cuál sería la idea principal de un texto que describe la historia del Canal de Panamá, su impacto económico y su importancia geopolítica?", options: ["El Canal de Panamá es una obra de importancia histórica, económica y estratégica", "El Canal de Panamá fue difícil de construir", "Panamá tiene muchos barcos", "La historia de Panamá es interesante"], correctAnswer: 0, explanation: "La idea principal abarca los tres aspectos mencionados: historia, economía y geopolítica.", topic: "Comprensión Lectora" },
  { id: "sim-f4", question: "Un autor escribe: 'Las redes sociales nos conectan con miles de personas, pero nos desconectan de quienes tenemos al lado.' El tono es:", options: ["Reflexivo y crítico", "Optimista y entusiasta", "Indiferente y neutral", "Agresivo y hostil"], correctAnswer: 0, explanation: "El contraste conectar/desconectar muestra reflexión crítica sobre las redes sociales.", topic: "Comprensión Lectora" },
  { id: "sim-f5", question: "¿Qué tipo de texto presenta datos estadísticos, citas de expertos y un vocabulario técnico sobre un tema específico?", options: ["Expositivo", "Narrativo", "Poético", "Dramático"], correctAnswer: 0, explanation: "Datos, citas de expertos y vocabulario técnico son características del texto expositivo.", topic: "Comprensión Lectora" },

  // ANALOGÍAS
  { id: "sim-g1", question: "MÉDICO : ESTETOSCOPIO como ASTRÓNOMO : ?", options: ["Telescopio", "Estrella", "Universo", "Observatorio"], correctAnswer: 0, explanation: "Relación: profesional → herramienta. El médico usa estetoscopio, el astrónomo usa telescopio.", topic: "Analogías" },
  { id: "sim-g2", question: "OVEJA : REBAÑO como SOLDADO : ?", options: ["Ejército", "Guerra", "Arma", "Cuartel"], correctAnswer: 0, explanation: "Relación: individuo → grupo. Conjunto de ovejas = rebaño. Conjunto de soldados = ejército.", topic: "Analogías" },
  { id: "sim-g3", question: "SEMILLA : ÁRBOL como HUEVO : ?", options: ["Ave", "Nido", "Pluma", "Cascarón"], correctAnswer: 0, explanation: "Relación: origen → resultado/ser desarrollado. De la semilla sale el árbol, del huevo sale el ave.", topic: "Analogías" },
  { id: "sim-g4", question: "TRISTE : DESOLADO como CONTENTO : ?", options: ["Eufórico", "Alegre", "Tranquilo", "Normal"], correctAnswer: 0, explanation: "Relación: grado de intensidad. Desolado es triste en grado extremo. Eufórico es contento en grado extremo.", topic: "Analogías" },
  { id: "sim-g5", question: "AGUA : HIELO como LAVA : ?", options: ["Roca", "Volcán", "Fuego", "Magma"], correctAnswer: 0, explanation: "Relación: líquido → su forma sólida. El agua se solidifica en hielo. La lava se solidifica en roca.", topic: "Analogías" },

  // REDACCIÓN
  { id: "sim-h1", question: "Identifica la oración correctamente escrita:", options: ["Los niños, que estaban cansados, se fueron temprano", "Los niños que estaban cansados se fueron, temprano", "Los niños que, estaban cansados, se fueron temprano", "Los niños que estaban, cansados se fueron temprano"], correctAnswer: 0, explanation: "La frase explicativa 'que estaban cansados' va entre comas.", topic: "Redacción" },
  { id: "sim-h2", question: "¿Cuál es el conector adecuado? 'La empresa tuvo pérdidas ______ invirtió en nuevos equipos.'", options: ["no obstante", "porque", "además", "por ejemplo"], correctAnswer: 0, explanation: "Hay contraste entre tener pérdidas y aún así invertir → 'no obstante'.", topic: "Redacción" },
  { id: "sim-h3", question: "¿Cuál palabra está mal acentuada?", options: ["Exámen", "Después", "Difícil", "Rápido"], correctAnswer: 0, explanation: "'Examen' es grave terminada en N → NO lleva tilde. Lo correcto es 'examen'.", topic: "Redacción" },
  { id: "sim-h4", question: "¿Cuál oración tiene un error de concordancia?", options: ["Hubieron muchos problemas en la reunión", "Hubo muchos problemas en la reunión", "Los problemas fueron resueltos rápidamente", "La reunión terminó sin incidentes"], correctAnswer: 0, explanation: "'Haber' como impersonal siempre va en singular: 'Hubo' (no 'hubieron').", topic: "Redacción" },
  { id: "sim-h5", question: "Reordena para coherencia: (1) En resumen, la lectura enriquece la mente. (2) Primero, amplía el vocabulario. (3) La lectura tiene múltiples beneficios. (4) También desarrolla el pensamiento crítico.", options: ["3, 2, 4, 1", "1, 2, 3, 4", "2, 4, 3, 1", "3, 4, 2, 1"], correctAnswer: 0, explanation: "3 = idea principal. 2 = primer beneficio. 4 = segundo beneficio. 1 = conclusión.", topic: "Redacción" },
];

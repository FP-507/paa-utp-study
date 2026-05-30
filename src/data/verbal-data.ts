import { Topic } from "./types";

export const verbalTopics: Topic[] = [
  {
    id: "completar-oraciones",
    title: "Completar Oraciones",
    description: "Identifica la palabra o palabras que completan correctamente el sentido de una oración.",
    icon: "…",
    color: "#f59e0b",
    subtopics: [
      {
        id: "claves-contextuales",
        title: "Claves Contextuales",
        content: `En este tipo de ejercicio se presenta una oración con una o dos palabras omitidas. Debes elegir la opción que complete el sentido lógico y gramatical.

<strong>Estrategia paso a paso:</strong>
<ol>
<li><strong>Lee toda la oración</strong> antes de ver las opciones</li>
<li><strong>Identifica claves contextuales:</strong> palabras que te dan pistas sobre la respuesta</li>
<li><strong>Predice</strong> qué tipo de palabra necesitas (positiva/negativa, causa/efecto)</li>
<li><strong>Busca conectores:</strong> "pero", "sin embargo", "por lo tanto", "porque", "aunque"</li>
<li><strong>Elimina opciones</strong> que no encajan gramatical o semánticamente</li>
</ol>

<strong>Tipos de relaciones en la oración:</strong>
<ul>
<li><strong>Continuidad:</strong> la palabra sigue la misma idea (y, también, además, igualmente)</li>
<li><strong>Contraste:</strong> la palabra contradice o cambia la idea (pero, sin embargo, aunque, no obstante)</li>
<li><strong>Causa-efecto:</strong> la palabra explica un resultado (porque, por lo tanto, así que, entonces)</li>
<li><strong>Definición:</strong> la oración define o explica la palabra faltante</li>
</ul>`,
        examples: [
          {
            problem: "A pesar de su ______ apariencia, el animal era en realidad bastante ______.",
            solution: "La clave es 'a pesar de' que indica contraste. Si la apariencia es de una forma, la realidad es opuesta. Respuesta: 'feroz / dócil' o 'inofensiva / peligroso'."
          },
          {
            problem: "El discurso del presidente fue tan ______ que muchos asistentes se quedaron dormidos.",
            solution: "La clave es que los asistentes se durmieron = fue aburrido. Respuesta: 'tedioso', 'monótono' o 'soporífero'."
          }
        ],
        tips: [
          "Los conectores son tu mejor pista. 'Pero', 'sin embargo', 'aunque' indican que la respuesta va en dirección opuesta.",
          "Si hay dos espacios en blanco, verifica que AMBAS palabras encajen, no solo una.",
          "Predice la respuesta ANTES de ver las opciones — evitas distraerte."
        ],
        exercises: [
          { id: "co-1", question: "El científico era conocido por su ______ en el laboratorio; nunca dejaba nada al azar.", options: ["meticulosidad", "negligencia", "improvisación", "apatía"], correctAnswer: 0, explanation: "'Nunca dejaba nada al azar' indica cuidado extremo = meticulosidad." },
          { id: "co-2", question: "Aunque la evidencia era ______, el jurado decidió declarar al acusado ______.", options: ["abrumadora / inocente", "escasa / culpable", "clara / culpable", "inexistente / inocente"], correctAnswer: 0, explanation: "'Aunque' indica contraste: mucha evidencia PERO declarado inocente." },
          { id: "co-3", question: "La ______ del desierto contrasta con la ______ de la selva tropical.", options: ["aridez / exuberancia", "belleza / fealdad", "extensión / pequeñez", "sequedad / sequedad"], correctAnswer: 0, explanation: "'Contrasta' indica oposición entre ambos ambientes: seco vs. abundante vida." },
          { id: "co-4", question: "Su comportamiento ______ durante la reunión sorprendió a todos, ya que siempre había sido una persona muy reservada.", options: ["extrovertido", "tímido", "callado", "prudente"], correctAnswer: 0, explanation: "'Ya que siempre había sido reservada' + 'sorprendió' = cambio. Respuesta opuesta a reservada = extrovertido." },
          { id: "co-5", question: "La nueva ley fue ______ por los ciudadanos porque consideraban que ______ sus derechos fundamentales.", options: ["rechazada / vulneraba", "aceptada / protegía", "ignorada / respetaba", "celebrada / limitaba"], correctAnswer: 0, explanation: "Si rechazan la ley, es porque tiene un efecto negativo → vulneraba sus derechos." }
        ]
      },
      {
        id: "vocabulario-contexto",
        title: "Vocabulario en Contexto",
        content: `Muchas palabras tienen múltiples significados. En la PAA, debes identificar el significado correcto según el contexto.

<strong>Estrategia:</strong>
<ol>
<li>Lee la oración completa</li>
<li>Sustituye la palabra por cada opción</li>
<li>Elige la que mantenga el sentido original</li>
</ol>

<strong>Prefijos y sufijos útiles:</strong>
<ul>
<li><strong>in-, im-, des-, a-:</strong> negación (inútil, imposible, deshacer, amoral)</li>
<li><strong>re-:</strong> repetición (rehacer, releer)</li>
<li><strong>pre-:</strong> antes (predecir, prever)</li>
<li><strong>-ción, -sión:</strong> acción (educación, comprensión)</li>
<li><strong>-mente:</strong> modo (rápidamente, claramente)</li>
<li><strong>-oso/a:</strong> cualidad (hermoso, peligroso)</li>
</ul>

<strong>Palabras que la PAA suele evaluar:</strong>
Sinónimos y antónimos, palabras con varios significados, vocabulario académico.`,
        examples: [
          {
            problem: "En 'el banco del parque estaba ocupado', ¿qué significa 'banco'?",
            solution: "En este contexto, 'banco' se refiere a un asiento, no a una institución financiera."
          },
          {
            problem: "¿Qué palabra puede reemplazar a 'prolijo' en 'Su trabajo era prolijo y detallado'?",
            solution: "'Prolijo' aquí significa meticuloso, cuidadoso, esmerado."
          }
        ],
        tips: [
          "Cuando no conozcas una palabra, analiza su raíz, prefijo y sufijo.",
          "Sustituye mentalmente cada opción en la oración para ver cuál suena natural.",
          "Lee mucho — es la mejor forma de ampliar tu vocabulario para la PAA."
        ],
        exercises: [
          { id: "vc-1", question: "En 'La planta generaba energía eléctrica para toda la ciudad', ¿qué significa 'planta'?", options: ["Instalación industrial", "Vegetal", "Parte del pie", "Piso de un edificio"], correctAnswer: 0, explanation: "Por el contexto de generar energía eléctrica, se refiere a una planta eléctrica/industrial." },
          { id: "vc-2", question: "¿Cuál es el antónimo de 'efímero'?", options: ["Permanente", "Breve", "Frágil", "Antiguo"], correctAnswer: 0, explanation: "Efímero = de corta duración. Su antónimo es permanente (que dura)." },
          { id: "vc-3", question: "'El orador cautivó a la audiencia con su elocuencia.' Elocuencia significa:", options: ["Habilidad para hablar con persuasión", "Volumen de voz alto", "Uso de gestos exagerados", "Hablar rápidamente"], correctAnswer: 0, explanation: "Elocuencia es la capacidad de hablar de forma expresiva, persuasiva y fluida." },
          { id: "vc-4", question: "¿Cuál de estas palabras tiene el prefijo que indica negación?", options: ["Desacuerdo", "Reducir", "Predecir", "Sobresalir"], correctAnswer: 0, explanation: "'Des-' es un prefijo de negación: des-acuerdo = falta de acuerdo." },
          { id: "vc-5", question: "'La situación era tan ______ que nadie podía creer lo que sucedía.' Elige la mejor opción:", options: ["insólita", "común", "habitual", "predecible"], correctAnswer: 0, explanation: "'Nadie podía creer' indica algo extraordinario/raro = insólita." }
        ]
      }
    ]
  },
  {
    id: "comprension-lectora",
    title: "Comprensión Lectora",
    description: "Lectura crítica de textos: idea principal, inferencias, vocabulario en contexto y análisis.",
    icon: "📖",
    color: "#3b82f6",
    subtopics: [
      {
        id: "idea-principal",
        title: "Idea Principal e Ideas Secundarias",
        content: `La <strong>idea principal</strong> es el mensaje central del texto — lo que el autor quiere comunicar.

<strong>Cómo identificarla:</strong>
<ol>
<li>Lee todo el texto rápidamente (lectura global)</li>
<li>Pregúntate: ¿De qué trata el texto? ¿Qué quiere decir el autor?</li>
<li>Busca la oración que resume todo el párrafo/texto</li>
<li>Generalmente está al inicio o al final del texto</li>
</ol>

<strong>Ideas secundarias:</strong> apoyan, explican o ejemplifican la idea principal. Incluyen datos, ejemplos, argumentos.

<strong>Diferencia clave:</strong>
<ul>
<li>Si eliminas la idea principal, el texto pierde sentido</li>
<li>Si eliminas una idea secundaria, el texto sigue teniendo sentido general</li>
</ul>

<strong>El título del texto</strong> a menudo refleja la idea principal. Cuando te pregunten "¿Cuál es el mejor título?", busca el que capture la idea principal.`,
        examples: [
          {
            problem: "¿Cómo distinguir idea principal de secundaria?",
            solution: "La idea principal responde '¿de qué habla el texto en general?'. Las secundarias responden '¿qué detalles se dan?'. Si puedes quitar una oración y el párrafo sigue teniendo sentido, es secundaria."
          }
        ],
        tips: [
          "Lee las preguntas ANTES del texto para saber qué buscar.",
          "La idea principal se puede expresar en una sola oración.",
          "No confundas el tema (de qué habla) con la idea principal (qué dice sobre el tema)."
        ],
        exercises: [
          { id: "cl-1", question: "Un texto habla sobre los beneficios del ejercicio: reduce estrés, mejora salud cardíaca, fortalece huesos y aumenta la energía. ¿Cuál es la idea principal?", options: ["El ejercicio tiene múltiples beneficios para la salud", "El ejercicio reduce el estrés", "Los huesos se fortalecen con ejercicio", "La gente debería hacer más ejercicio"], correctAnswer: 0, explanation: "La idea principal abarca todos los beneficios mencionados, no solo uno." },
          { id: "cl-2", question: "¿Cuál sería el mejor título para un texto que explica cómo las abejas polinizan las flores, producen miel y mantienen el equilibrio ecológico?", options: ["La importancia de las abejas en el ecosistema", "Cómo las abejas hacen miel", "Las flores y su polinización", "Los insectos y la naturaleza"], correctAnswer: 0, explanation: "El título debe abarcar todos los aspectos mencionados: polinización, miel y equilibrio." },
          { id: "cl-3", question: "En un párrafo, la primera oración dice 'El agua es esencial para la vida' y las siguientes dan datos sobre su importancia. La idea principal está:", options: ["Al inicio del párrafo", "Al final del párrafo", "En el medio", "No está explícita"], correctAnswer: 0, explanation: "La primera oración presenta la idea principal y las demás la apoyan con datos." },
          { id: "cl-4", question: "¿Cuál de estas es una idea SECUNDARIA en un texto sobre contaminación del agua?", options: ["El río X tiene niveles de mercurio 3 veces superiores al límite", "La contaminación del agua amenaza la salud pública", "Es necesario tomar medidas urgentes contra la contaminación hídrica", "El acceso al agua limpia es un derecho fundamental"], correctAnswer: 0, explanation: "Es un dato específico (ejemplo concreto) que apoya la idea principal sobre contaminación." }
        ]
      },
      {
        id: "inferencias",
        title: "Inferencias y Lectura Crítica",
        content: `Una <strong>inferencia</strong> es una conclusión que sacas a partir de la información del texto, aunque no se diga explícitamente.

<strong>Tipos de preguntas de inferencia:</strong>
<ul>
<li>"Se puede inferir que..."</li>
<li>"El autor sugiere que..."</li>
<li>"¿Qué se puede concluir...?"</li>
<li>"El texto implica que..."</li>
</ul>

<strong>Estrategia para inferir:</strong>
<ol>
<li>Identifica lo que el texto dice directamente</li>
<li>Busca qué se puede deducir lógicamente de esos datos</li>
<li>La inferencia debe tener base en el texto (no inventes)</li>
<li>Elimina opciones que contradigan el texto</li>
<li>Elimina opciones que vayan más allá de lo que el texto permite concluir</li>
</ol>

<strong>Propósito del autor:</strong>
<ul>
<li><strong>Informar:</strong> presenta datos objetivos sin opinión</li>
<li><strong>Persuadir:</strong> busca convencerte de algo</li>
<li><strong>Entretener:</strong> busca generar placer o diversión</li>
<li><strong>Explicar:</strong> desglosa un proceso o concepto</li>
</ul>

<strong>Tono del texto:</strong> objetivo, crítico, irónico, optimista, nostálgico, formal, informal...`,
        examples: [
          {
            problem: "Un texto dice: 'Desde que instalaron cámaras de seguridad, los robos en el vecindario disminuyeron un 60%.' ¿Qué se puede inferir?",
            solution: "Se puede inferir que las cámaras de seguridad son una medida efectiva para disuadir robos. NO se puede inferir que eliminaron los robos completamente."
          }
        ],
        tips: [
          "Una buena inferencia SIEMPRE tiene apoyo en el texto.",
          "Si una opción dice 'siempre', 'nunca' o 'todos', probablemente es incorrecta (demasiado absoluta).",
          "Diferencia entre lo que el texto DICE y lo que tú OPINAS."
        ],
        exercises: [
          { id: "inf-1", question: "Un texto menciona que 'las ventas de libros electrónicos han crecido 200% en cinco años, mientras que las librerías físicas han cerrado un 30%.' Se puede inferir que:", options: ["La tecnología digital está cambiando los hábitos de lectura", "Nadie lee libros impresos ya", "Las librerías físicas desaparecerán completamente", "Los libros electrónicos son mejores que los impresos"], correctAnswer: 0, explanation: "Los datos apoyan un cambio de hábitos. Las otras opciones son demasiado absolutas o van más allá del texto." },
          { id: "inf-2", question: "Si un texto argumenta a favor de la energía solar usando datos, estadísticas y cita a expertos, el propósito del autor es:", options: ["Persuadir al lector", "Entretener al lector", "Solo informar", "Expresar sentimientos"], correctAnswer: 0, explanation: "Argumentar a favor = persuadir. Usa datos como herramienta de convencimiento." },
          { id: "inf-3", question: "Un artículo dice: 'El candidato prometió reducir impuestos, crear empleos y eliminar la corrupción — las mismas promesas de los últimos 20 años.' El tono del autor es:", options: ["Escéptico/irónico", "Optimista", "Neutral", "Entusiasta"], correctAnswer: 0, explanation: "Al mencionar que son las mismas promesas de 20 años, sugiere incredulidad/escepticismo." },
          { id: "inf-4", question: "Un texto describe cómo una empresa que recicla plástico ha triplicado sus ganancias. Se puede inferir que:", options: ["El reciclaje puede ser rentable como negocio", "Todas las empresas deberían reciclar", "El plástico es el mejor material para reciclar", "La empresa es la más exitosa del mundo"], correctAnswer: 0, explanation: "El dato de triplicar ganancias apoya que el reciclaje puede ser rentable. Las demás son exageraciones." }
        ]
      }
    ]
  },
  {
    id: "analogias",
    title: "Analogías",
    description: "Identifica relaciones entre pares de palabras y encuentra el par con relación equivalente.",
    icon: "⟷",
    color: "#10b981",
    subtopics: [
      {
        id: "tipos-analogias",
        title: "Tipos de Relaciones Analógicas",
        content: `Una analogía establece una relación entre dos palabras y te pide encontrar otro par con la misma relación.

<strong>Formato:</strong> A es a B como C es a D.

<strong>Tipos de relaciones más comunes:</strong>

<ul>
<li><strong>Sinónimos:</strong> feliz : contento (significan lo mismo)</li>
<li><strong>Antónimos:</strong> frío : caliente (significados opuestos)</li>
<li><strong>Parte - Todo:</strong> rueda : automóvil (la rueda es parte del auto)</li>
<li><strong>Todo - Parte:</strong> árbol : rama</li>
<li><strong>Causa - Efecto:</strong> fuego : humo (el fuego causa humo)</li>
<li><strong>Objeto - Función:</strong> martillo : clavar (el martillo sirve para clavar)</li>
<li><strong>Trabajador - Herramienta:</strong> pintor : pincel</li>
<li><strong>Trabajador - Lugar:</strong> maestro : escuela</li>
<li><strong>General - Específico:</strong> fruta : manzana</li>
<li><strong>Materia prima - Producto:</strong> madera : mesa</li>
<li><strong>Grado o Intensidad:</strong> tibio : caliente : hirviendo</li>
<li><strong>Elemento - Conjunto:</strong> abeja : enjambre</li>
</ul>

<strong>Estrategia:</strong>
<ol>
<li>Identifica la relación exacta entre las dos primeras palabras</li>
<li>Formula la relación como una oración: "A es/tiene/hace ___ con B"</li>
<li>Busca el par que tenga EXACTAMENTE la misma relación</li>
<li>Verifica que el orden de la relación sea el mismo</li>
</ol>`,
        examples: [
          {
            problem: "MÉDICO : HOSPITAL como MAESTRO : ?",
            solution: "Relación: trabajador → lugar de trabajo. Médico trabaja en hospital. Maestro trabaja en → escuela."
          },
          {
            problem: "LANA : OVEJA como SEDA : ?",
            solution: "Relación: producto → origen animal. La lana viene de la oveja. La seda viene del → gusano de seda."
          }
        ],
        tips: [
          "Crea una oración que conecte las palabras: 'El médico trabaja en el hospital'. Luego aplica la misma oración al otro par.",
          "Cuidado con el orden: perro:animal NO es lo mismo que animal:perro.",
          "Si varias opciones parecen funcionar, busca la relación más específica y precisa."
        ],
        exercises: [
          { id: "an-1", question: "LIBRO : BIBLIOTECA como CUADRO : ?", options: ["Museo", "Pintor", "Arte", "Color"], correctAnswer: 0, explanation: "Relación: objeto → lugar donde se guarda/exhibe. Los libros están en la biblioteca, los cuadros en el museo." },
          { id: "an-2", question: "HAMBRE : COMER como SED : ?", options: ["Beber", "Agua", "Sed", "Comida"], correctAnswer: 0, explanation: "Relación: necesidad → acción para satisfacerla. El hambre se satisface al comer, la sed al beber." },
          { id: "an-3", question: "DEDO : MANO como PÉTALO : ?", options: ["Flor", "Jardín", "Planta", "Tallo"], correctAnswer: 0, explanation: "Relación: parte → todo. El dedo es parte de la mano, el pétalo es parte de la flor." },
          { id: "an-4", question: "CUCHILLO : CORTAR como LÁPIZ : ?", options: ["Escribir", "Papel", "Madera", "Dibujo"], correctAnswer: 0, explanation: "Relación: herramienta → función. El cuchillo sirve para cortar, el lápiz para escribir." },
          { id: "an-5", question: "CACHORRO : PERRO como RENACUAJO : ?", options: ["Rana", "Agua", "Pez", "Sapo"], correctAnswer: 0, explanation: "Relación: cría → adulto. El cachorro es la cría del perro, el renacuajo es la cría de la rana." },
          { id: "an-6", question: "CALOR : DILATAR como FRÍO : ?", options: ["Contraer", "Congelar", "Enfriar", "Helar"], correctAnswer: 0, explanation: "Relación: causa → efecto físico. El calor dilata los materiales, el frío los contrae." },
          { id: "an-7", question: "ABEJA : ENJAMBRE como LOBO : ?", options: ["Manada", "Bosque", "Cueva", "Presa"], correctAnswer: 0, explanation: "Relación: individuo → grupo/conjunto. El grupo de abejas es enjambre, el de lobos es manada." }
        ]
      }
    ]
  },
  {
    id: "redaccion",
    title: "Redacción Indirecta",
    description: "Gramática, ortografía, concordancia, estructura de oraciones y corrección de errores.",
    icon: "✎",
    color: "#8b5cf6",
    subtopics: [
      {
        id: "concordancia",
        title: "Concordancia y Estructura Gramatical",
        content: `<strong>Concordancia</strong> es que las partes de la oración coincidan en género, número y persona.

<strong>Concordancia sujeto-verbo:</strong>
<ul>
<li>"Los estudiantes <strong>estudian</strong>" (plural + plural) ✓</li>
<li>"Los estudiantes <strong>estudia</strong>" ✗</li>
</ul>

<strong>Concordancia sustantivo-adjetivo:</strong>
<ul>
<li>"Las casas <strong>blancas</strong>" (femenino plural) ✓</li>
<li>"Las casas <strong>blanco</strong>" ✗</li>
</ul>

<strong>Errores comunes:</strong>
<ul>
<li><strong>Dequeísmo:</strong> "Pienso <em>de que</em> es correcto" ✗ → "Pienso <em>que</em> es correcto" ✓</li>
<li><strong>Queísmo:</strong> "Estoy seguro <em>que</em> vendrá" ✗ → "Estoy seguro <em>de que</em> vendrá" ✓</li>
<li><strong>Laísmo/Leísmo:</strong> Uso incorrecto de la/le como pronombres</li>
</ul>

<strong>Estructura de la oración:</strong>
La oración simple tiene: Sujeto + Verbo + Complemento.
<ul>
<li>Sujeto: quien realiza la acción</li>
<li>Verbo: la acción</li>
<li>Complemento: información adicional (directo, indirecto, circunstancial)</li>
</ul>`,
        examples: [
          {
            problem: "Identifica el error: 'El grupo de estudiantes llegaron tarde.'",
            solution: "El sujeto es 'el grupo' (singular), no 'estudiantes'. Correcto: 'El grupo de estudiantes llegó tarde.'"
          },
          {
            problem: "¿Es correcto 'Pienso de que deberías ir'?",
            solution: "No. Es dequeísmo. Correcto: 'Pienso que deberías ir.' Truco: si no dirías 'pienso de eso', no uses 'de que'."
          }
        ],
        tips: [
          "Para verificar dequeísmo: reemplaza la frase con 'eso'. Si dirías 'pienso eso' (no 'pienso de eso'), no lleva 'de'.",
          "Identifica el sujeto REAL de la oración — a veces está lejos del verbo.",
          "Los sujetos colectivos (grupo, equipo, gente) son SINGULARES."
        ],
        exercises: [
          { id: "red-1", question: "¿Cuál oración tiene correcta concordancia?", options: ["La mayoría de los alumnos aprobó el examen", "La mayoría de los alumnos aprobaron el examen", "Las mayorías de los alumnos aprobó el examen", "La mayoría de los alumnos aprobamos el examen"], correctAnswer: 0, explanation: "'La mayoría' es el sujeto (singular) → verbo en singular: 'aprobó'." },
          { id: "red-2", question: "¿Cuál oración es correcta?", options: ["Me alegro de que hayas venido", "Me alegro que hayas venido", "Me alegro de que haigas venido", "Me alegro que hallas venido"], correctAnswer: 0, explanation: "'Alegrarse DE algo' → 'Me alegro de que...' es correcto. 'Hayas' es la conjugación correcta." },
          { id: "red-3", question: "Identifica la oración sin errores:", options: ["Juan y María fueron al cine ayer", "Juan y María fue al cine ayer", "Juan y María fuimos al cine ayer", "Juan y María ido al cine ayer"], correctAnswer: 0, explanation: "Sujeto compuesto (Juan y María = ellos) → verbo plural 'fueron'." },
          { id: "red-4", question: "¿Cuál oración tiene error de dequeísmo?", options: ["Creo de que es importante", "Estoy seguro de que vendrá", "Insistió en que lo ayudáramos", "Me enteré de que ganamos"], correctAnswer: 0, explanation: "'Creer algo' → 'Creo que...' NO 'Creo de que...' Eso es dequeísmo." },
          { id: "red-5", question: "¿Cuál es el sujeto de: 'En la mesa del comedor estaban las llaves de mi hermano'?", options: ["Las llaves", "La mesa", "Mi hermano", "El comedor"], correctAnswer: 0, explanation: "¿Qué estaban? Las llaves estaban. 'Las llaves' es el sujeto." }
        ]
      },
      {
        id: "puntuacion-ortografia",
        title: "Puntuación y Ortografía",
        content: `<strong>Signos de puntuación esenciales:</strong>

<strong>Coma (,):</strong>
<ul>
<li>Separar elementos de una lista: "compré pan, leche, huevos y arroz"</li>
<li>Antes de conectores: "sin embargo, además, por lo tanto"</li>
<li>Para intercalar información: "Panamá, la capital, es una ciudad moderna"</li>
<li>Después de una frase introductoria: "Después de la reunión, fuimos a almorzar"</li>
</ul>

<strong>Punto y coma (;):</strong>
<ul>
<li>Separa oraciones relacionadas: "Estudió mucho; aprobó el examen"</li>
<li>Antes de "sin embargo", "no obstante", "por lo tanto" cuando unen dos oraciones independientes</li>
</ul>

<strong>Dos puntos (:):</strong>
<ul>
<li>Antes de una lista: "Los colores son: rojo, azul y verde"</li>
<li>Antes de una explicación o conclusión</li>
</ul>

<strong>Reglas de acentuación:</strong>
<ul>
<li><strong>Agudas:</strong> acento en la última sílaba. Llevan tilde si terminan en N, S o vocal</li>
<li><strong>Graves:</strong> acento en la penúltima. Llevan tilde si NO terminan en N, S o vocal</li>
<li><strong>Esdrújulas:</strong> acento en la antepenúltima. SIEMPRE llevan tilde</li>
<li><strong>Sobreesdrújulas:</strong> SIEMPRE llevan tilde</li>
</ul>`,
        examples: [
          {
            problem: "¿Dónde va la coma? 'Aunque llovía salimos a caminar.'",
            solution: "Después de la frase introductoria: 'Aunque llovía, salimos a caminar.'"
          },
          {
            problem: "Clasifica y acentúa: 'examen', 'cafe', 'matematicas', 'rapido'",
            solution: "Examen: grave terminada en N → no lleva tilde. Café: aguda terminada en vocal → lleva tilde. Matemáticas: esdrújula → siempre lleva tilde. Rápido: esdrújula → siempre lleva tilde."
          }
        ],
        tips: [
          "Las esdrújulas SIEMPRE llevan tilde. Sin excepciones.",
          "Memoriza: N, S, vocal → agudas con tilde. Lo contrario para graves.",
          "La coma NUNCA va entre sujeto y verbo: 'Los niños, corrían' es INCORRECTO."
        ],
        exercises: [
          { id: "pun-1", question: "¿Cuál palabra está correctamente acentuada?", options: ["Exámenes", "Examenes", "Exàmenes", "Éxamenes"], correctAnswer: 0, explanation: "Ex-á-me-nes: esdrújula → siempre lleva tilde en la antepenúltima." },
          { id: "pun-2", question: "¿Dónde debe ir la coma? 'Pedro que es mi vecino trabaja en el banco.'", options: ["Pedro, que es mi vecino, trabaja en el banco", "Pedro que es mi vecino, trabaja en el banco", "Pedro, que es mi vecino trabaja en el banco", "Pedro que, es mi vecino, trabaja en el banco"], correctAnswer: 0, explanation: "'Que es mi vecino' es una frase explicativa intercalada → va entre comas." },
          { id: "pun-3", question: "¿Cuál es la opción correctamente escrita?", options: ["Él dijo que sí vendría", "El dijo que si vendría", "Él dijo que sí vendria", "El dijó que si vendría"], correctAnswer: 0, explanation: "'Él' (pronombre) lleva tilde. 'Sí' (afirmación) lleva tilde. 'Vendría' es grave terminada en vocal, no lleva... pero sí lleva por el hiato. Corrección: vendría sí lleva tilde." },
          { id: "pun-4", question: "¿Cuál oración usa correctamente el punto y coma?", options: ["Llegó tarde; sin embargo, completó el trabajo", "Llegó tarde sin embargo; completó el trabajo", "Llegó; tarde sin embargo completó el trabajo", "Llegó tarde; sin embargo completó, el trabajo"], correctAnswer: 0, explanation: "El punto y coma va antes de 'sin embargo' cuando une dos oraciones independientes, seguido de coma." },
          { id: "pun-5", question: "¿Cuál palabra es esdrújula?", options: ["Teléfono", "Canción", "Papel", "Sutil"], correctAnswer: 0, explanation: "Te-lé-fo-no: el acento cae en la antepenúltima sílaba → esdrújula." }
        ]
      },
      {
        id: "coherencia-cohesion",
        title: "Coherencia y Cohesión Textual",
        content: `<strong>Coherencia:</strong> que las ideas del texto tengan sentido y orden lógico.
<strong>Cohesión:</strong> que las oraciones estén bien conectadas entre sí.

<strong>Conectores textuales:</strong>

<strong>Adición:</strong> además, también, asimismo, igualmente, incluso
<strong>Contraste:</strong> pero, sin embargo, no obstante, aunque, por el contrario, en cambio
<strong>Causa:</strong> porque, ya que, puesto que, debido a que
<strong>Consecuencia:</strong> por lo tanto, por consiguiente, en consecuencia, así que, entonces
<strong>Orden:</strong> primero, luego, después, finalmente, por último
<strong>Ejemplo:</strong> por ejemplo, es decir, como, tal como
<strong>Conclusión:</strong> en conclusión, en resumen, en síntesis, para concluir

<strong>Orden lógico de un párrafo:</strong>
<ol>
<li>Oración principal (idea central)</li>
<li>Desarrollo (explicación, datos, ejemplos)</li>
<li>Cierre (conclusión o transición)</li>
</ol>

<strong>Referentes:</strong> pronombres y palabras que sustituyen a otras para evitar repetición.
"María estudia mucho. <strong>Ella</strong> quiere entrar a la UTP." (Ella = María)`,
        examples: [
          {
            problem: "Elige el conector: 'Estudié mucho ______ no aprobé el examen.'",
            solution: "Hay contraste entre estudiar mucho y no aprobar → 'pero', 'sin embargo', 'no obstante'."
          },
          {
            problem: "Ordena: (A) Por lo tanto, debemos actuar ahora. (B) La contaminación aumenta cada año. (C) Los ríos están cada vez más sucios.",
            solution: "Orden lógico: B (problema general), C (dato específico), A (conclusión). → B, C, A."
          }
        ],
        tips: [
          "Los conectores de contraste (pero, sin embargo) son los más frecuentes en la PAA.",
          "Si te piden ordenar un texto, busca la oración más general primero y la conclusión al final.",
          "Identifica las palabras que se refieren a algo mencionado antes (pronombres, sinónimos)."
        ],
        exercises: [
          { id: "coh-1", question: "'El proyecto fue exitoso ______ la falta de recursos.' Elige el conector:", options: ["a pesar de", "debido a", "gracias a", "por lo tanto"], correctAnswer: 0, explanation: "Hay contraste: éxito vs. falta de recursos → 'a pesar de' indica superar un obstáculo." },
          { id: "coh-2", question: "¿Qué conector completa mejor? 'No tenemos presupuesto; ______, debemos buscar alternativas.'", options: ["por lo tanto", "sin embargo", "porque", "además"], correctAnswer: 0, explanation: "Falta de presupuesto CAUSA la necesidad de buscar alternativas → 'por lo tanto' (consecuencia)." },
          { id: "coh-3", question: "¿Cuál es el orden correcto? (1) En conclusión, la educación transforma vidas. (2) Las estadísticas muestran que graduados ganan más. (3) La educación es la herramienta más poderosa para el desarrollo.", options: ["3, 2, 1", "1, 2, 3", "2, 3, 1", "3, 1, 2"], correctAnswer: 0, explanation: "3 = idea principal. 2 = dato de apoyo. 1 = conclusión. Orden: 3, 2, 1." },
          { id: "coh-4", question: "'Los estudiantes presentaron el proyecto. ______ fue aprobado por el comité.' ¿Qué va en el espacio?", options: ["Este", "Aquel", "Él", "Aquello"], correctAnswer: 0, explanation: "'Este' se refiere al proyecto mencionado en la oración anterior (referente cercano)." }
        ]
      }
    ]
  }
];

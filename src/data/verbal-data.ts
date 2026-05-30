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
          { id: "co-5", question: "La nueva ley fue ______ por los ciudadanos porque consideraban que ______ sus derechos fundamentales.", options: ["rechazada / vulneraba", "aceptada / protegía", "ignorada / respetaba", "celebrada / limitaba"], correctAnswer: 0, explanation: "Si rechazan la ley, es porque tiene un efecto negativo → vulneraba sus derechos." },
          { id: "co-6", question: "El río, que antes era ______, ahora está ______ debido a los desechos industriales.", options: ["cristalino / contaminado", "sucio / limpio", "caudaloso / seco", "profundo / superficial"], correctAnswer: 0, explanation: "'Antes era' vs. 'ahora está' indica un cambio negativo causado por desechos industriales: de limpio a contaminado." },
          { id: "co-7", question: "La ______ del explorador le permitió sobrevivir en condiciones que habrían derrotado a cualquier persona común.", options: ["tenacidad", "cobardía", "pereza", "ingenuidad"], correctAnswer: 0, explanation: "Sobrevivir en condiciones extremas requiere fortaleza y persistencia = tenacidad." },
          { id: "co-8", question: "El público aplaudió con ______ al finalizar la obra, pues la actuación había sido ______.", options: ["entusiasmo / magistral", "indiferencia / brillante", "furia / mediocre", "tristeza / excelente"], correctAnswer: 0, explanation: "Aplaudir indica aprobación, por lo que la actuación fue positiva (magistral) y la reacción fue positiva (entusiasmo). Ambas palabras deben ser coherentes." },
          { id: "co-9", question: "No es ______ que los jóvenes prefieran la tecnología; por el contrario, es completamente ______ en la era digital.", options: ["sorprendente / natural", "extraño / raro", "normal / inusual", "lógico / absurdo"], correctAnswer: 0, explanation: "'Por el contrario' conecta con 'No es sorprendente', indicando que la otra palabra debe ser positiva o esperable = natural." },
          { id: "co-10", question: "La medicina moderna ha logrado ______ enfermedades que antes eran ______ para la mayoría de los pacientes.", options: ["curar / mortales", "propagar / inofensivas", "ignorar / graves", "empeorar / leves"], correctAnswer: 0, explanation: "El logro de la medicina es positivo: curar enfermedades que antes causaban la muerte = mortales." },
          { id: "co-11", question: "El director era tan ______ con los plazos que ningún empleado se atrevía a entregar un informe tarde.", options: ["estricto", "flexible", "indulgente", "despreocupado"], correctAnswer: 0, explanation: "'Ningún empleado se atrevía a entregar tarde' indica que el director era muy exigente = estricto." },
          { id: "co-12", question: "Debido a la ______ de agua potable, las autoridades implementaron medidas de ______ en toda la región.", options: ["escasez / racionamiento", "abundancia / distribución", "calidad / purificación", "falta / desperdicio"], correctAnswer: 0, explanation: "'Debido a' indica causa-efecto. Si hay poca agua (escasez), la medida lógica es controlar su uso (racionamiento)." }
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
          { id: "vc-5", question: "'La situación era tan ______ que nadie podía creer lo que sucedía.' Elige la mejor opción:", options: ["insólita", "común", "habitual", "predecible"], correctAnswer: 0, explanation: "'Nadie podía creer' indica algo extraordinario/raro = insólita." },
          { id: "vc-6", question: "¿Cuál es el sinónimo de 'austero'?", options: ["Sobrio", "Lujoso", "Alegre", "Generoso"], correctAnswer: 0, explanation: "Austero significa sin lujos, moderado, sencillo = sobrio." },
          { id: "vc-7", question: "En 'El cabo dirigió a sus soldados durante la misión', ¿qué significa 'cabo'?", options: ["Rango militar", "Extremo de una cuerda", "Accidente geográfico", "Final de algo"], correctAnswer: 0, explanation: "En contexto militar, 'cabo' es un rango jerárquico del ejército." },
          { id: "vc-8", question: "'Su actitud era ______ ante los problemas; nunca se alteraba.' La palabra que mejor completa es:", options: ["imperturbable", "ansiosa", "volátil", "agresiva"], correctAnswer: 0, explanation: "'Nunca se alteraba' indica calma total = imperturbable (que no se perturba)." },
          { id: "vc-9", question: "¿Cuál de estas palabras tiene el prefijo que indica 'antes'?", options: ["Prever", "Deshacer", "Reescribir", "Imposible"], correctAnswer: 0, explanation: "'Pre-' significa antes: pre-ver = ver antes de que suceda, anticipar." },
          { id: "vc-10", question: "¿Cuál es el antónimo de 'prolífico'?", options: ["Improductivo", "Abundante", "Creativo", "Famoso"], correctAnswer: 0, explanation: "Prolífico = que produce mucho. Su antónimo es improductivo (que produce poco o nada)." },
          { id: "vc-11", question: "'El juez actuó con ecuanimidad durante el juicio.' Ecuanimidad significa:", options: ["Imparcialidad y serenidad", "Severidad extrema", "Rapidez en las decisiones", "Indecisión constante"], correctAnswer: 0, explanation: "Ecuanimidad es la cualidad de mantener calma, equilibrio e imparcialidad ante las situaciones." },
          { id: "vc-12", question: "En 'La obra del arquitecto fue una muestra de su ingenio', la palabra 'obra' significa:", options: ["Creación o trabajo realizado", "Construcción en proceso", "Libro publicado", "Acción benéfica"], correctAnswer: 0, explanation: "En este contexto, 'obra' se refiere al resultado del trabajo creativo del arquitecto, su creación." }
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
          { id: "cl-4", question: "¿Cuál de estas es una idea SECUNDARIA en un texto sobre contaminación del agua?", options: ["El río X tiene niveles de mercurio 3 veces superiores al límite", "La contaminación del agua amenaza la salud pública", "Es necesario tomar medidas urgentes contra la contaminación hídrica", "El acceso al agua limpia es un derecho fundamental"], correctAnswer: 0, explanation: "Es un dato específico (ejemplo concreto) que apoya la idea principal sobre contaminación." },
          { id: "cl-5", question: "Un texto describe los avances en inteligencia artificial: asistentes virtuales, diagnósticos médicos automatizados y vehículos autónomos. ¿Cuál es la idea principal?", options: ["La inteligencia artificial está transformando diversos sectores de la sociedad", "Los asistentes virtuales son cada vez más populares", "Los vehículos autónomos reemplazarán a los conductores", "La tecnología es peligrosa para la humanidad"], correctAnswer: 0, explanation: "La idea principal abarca todos los ejemplos mencionados: la IA impacta múltiples áreas." },
          { id: "cl-6", question: "¿Cuál sería el mejor título para un texto que habla sobre cómo el turismo genera empleo, promueve la cultura local y a veces daña el medio ambiente?", options: ["El turismo: beneficios y desafíos", "Los empleos que genera el turismo", "El daño ambiental del turismo", "La cultura y los viajeros"], correctAnswer: 0, explanation: "El título debe reflejar tanto los aspectos positivos (empleo, cultura) como los negativos (daño ambiental)." },
          { id: "cl-7", question: "Un párrafo dice: 'Las redes sociales permiten conectar personas, compartir información y crear comunidades. Sin embargo, también pueden generar adicción y difundir noticias falsas.' La idea principal es:", options: ["Las redes sociales tienen ventajas y desventajas", "Las redes sociales son peligrosas", "Las redes sociales conectan personas", "Las noticias falsas son un problema grave"], correctAnswer: 0, explanation: "El texto presenta ambos lados (ventajas y desventajas), por lo que la idea principal abarca ambos aspectos." },
          { id: "cl-8", question: "En un texto sobre el cambio climático, ¿cuál de las siguientes sería una idea secundaria?", options: ["La temperatura global aumentó 1.1 grados desde la era preindustrial", "El cambio climático es la mayor amenaza ambiental actual", "Debemos tomar acción contra el calentamiento global", "El clima del planeta está cambiando de forma acelerada"], correctAnswer: 0, explanation: "El dato específico de 1.1 grados es un detalle que apoya la idea general sobre el cambio climático." },
          { id: "cl-9", question: "Un texto explica que la lectura mejora el vocabulario, desarrolla el pensamiento crítico, reduce el estrés y fomenta la creatividad. Si tuvieras que resumirlo en una oración:", options: ["La lectura ofrece beneficios cognitivos, emocionales y creativos", "Leer reduce el estrés de las personas", "El vocabulario se amplía leyendo libros", "La creatividad depende de la lectura"], correctAnswer: 0, explanation: "La oración resumen debe integrar todos los beneficios mencionados, no solo uno." },
          { id: "cl-10", question: "¿Cuál de estas opciones distingue correctamente el TEMA de la IDEA PRINCIPAL?", options: ["El tema es 'la contaminación'; la idea principal es 'la contaminación afecta la salud'", "El tema y la idea principal son exactamente lo mismo", "La idea principal es más general que el tema", "El tema siempre aparece al final del texto"], correctAnswer: 0, explanation: "El tema es el asunto general (contaminación). La idea principal es lo que el autor dice sobre ese tema (que afecta la salud)." },
          { id: "cl-11", question: "Un texto habla sobre Panamá: su canal, su biodiversidad, su posición geográfica estratégica y su sector bancario. ¿Cuál es la idea principal más probable?", options: ["Panamá es un país con una importancia estratégica y diversa riqueza", "El Canal de Panamá es la obra de ingeniería más importante del país", "Panamá tiene muchos bancos internacionales", "La biodiversidad panameña es impresionante"], correctAnswer: 0, explanation: "La idea principal debe abarcar todos los aspectos mencionados: canal, biodiversidad, geografía y banca." }
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
          { id: "inf-4", question: "Un texto describe cómo una empresa que recicla plástico ha triplicado sus ganancias. Se puede inferir que:", options: ["El reciclaje puede ser rentable como negocio", "Todas las empresas deberían reciclar", "El plástico es el mejor material para reciclar", "La empresa es la más exitosa del mundo"], correctAnswer: 0, explanation: "El dato de triplicar ganancias apoya que el reciclaje puede ser rentable. Las demás son exageraciones." },
          { id: "inf-5", question: "Un texto dice: 'En los países donde se invierte más del 6% del PIB en educación, los índices de criminalidad son significativamente menores.' Se puede inferir que:", options: ["Existe una relación entre inversión educativa y reducción de la criminalidad", "La educación elimina completamente la criminalidad", "Todos los países deberían invertir exactamente el 6% en educación", "Los países ricos no tienen crimen"], correctAnswer: 0, explanation: "El texto establece una correlación entre inversión educativa y menor criminalidad, pero no dice que la elimine por completo." },
          { id: "inf-6", question: "Un autor escribe: 'La ciudad solía tener calles arboladas y plazas llenas de niños jugando. Hoy, el concreto ha reemplazado los árboles y las pantallas han reemplazado los juegos.' El tono del autor es:", options: ["Nostálgico y crítico", "Optimista y esperanzador", "Neutral y objetivo", "Indiferente"], correctAnswer: 0, explanation: "El contraste entre el pasado positivo y el presente negativo revela nostalgia por lo perdido y crítica al cambio." },
          { id: "inf-7", question: "Un texto presenta datos sobre la deforestación en la Amazonía, los incendios forestales y la pérdida de especies. El propósito principal del autor es:", options: ["Alertar sobre una crisis ambiental", "Describir la geografía de la Amazonía", "Entretener con datos curiosos sobre la selva", "Explicar cómo funcionan los incendios forestales"], correctAnswer: 0, explanation: "La acumulación de datos negativos (deforestación, incendios, extinción) busca generar conciencia y alarma = alertar." },
          { id: "inf-8", question: "Un texto dice: 'Los estudiantes que duermen al menos 8 horas obtienen calificaciones un 20% superiores a quienes duermen menos de 6 horas.' Se puede concluir que:", options: ["El descanso adecuado influye positivamente en el rendimiento académico", "Dormir 8 horas garantiza aprobar todos los exámenes", "Los estudiantes que duermen poco siempre reprueban", "Solo los estudiantes necesitan dormir bien"], correctAnswer: 0, explanation: "Los datos muestran una correlación positiva entre sueño y rendimiento. Las demás opciones son absolutas o exageradas." },
          { id: "inf-9", question: "Un texto señala que 'en las últimas dos décadas, la esperanza de vida global ha aumentado 6 años gracias a los avances en medicina y saneamiento.' ¿Qué se puede inferir?", options: ["La medicina y el saneamiento son factores clave para la longevidad humana", "Todos los países han aumentado su esperanza de vida por igual", "La esperanza de vida seguirá aumentando indefinidamente", "La medicina es el único factor que influye en la esperanza de vida"], correctAnswer: 0, explanation: "El texto atribuye directamente el aumento a la medicina y el saneamiento. Las otras opciones van más allá de lo que el texto permite concluir." },
          { id: "inf-10", question: "Un artículo menciona que una comunidad indígena logró detener un proyecto minero a través de protestas pacíficas y acciones legales. El autor presenta los hechos sin adjetivos valorativos. El propósito del autor es:", options: ["Informar sobre los hechos ocurridos", "Convencer al lector de apoyar a la comunidad", "Criticar a la empresa minera", "Entretener con una historia de conflicto"], correctAnswer: 0, explanation: "La ausencia de adjetivos valorativos y la presentación objetiva de hechos indican un propósito informativo." },
          { id: "inf-11", question: "Un texto dice: 'Mientras en algunos países se desperdicia un tercio de los alimentos producidos, en otros millones de personas padecen hambre.' Se puede inferir que:", options: ["Existe un problema de distribución de alimentos a nivel global", "Los países ricos producen demasiada comida", "Las personas en países pobres no saben cultivar", "El desperdicio de alimentos no tiene solución"], correctAnswer: 0, explanation: "El contraste entre desperdicio y hambre sugiere que el problema no es de producción sino de distribución." }
        ]
      },
      {
        id: "proposito-tono",
        title: "Propósito del Autor y Tono",
        content: `Comprender un texto va más allá de entender las palabras: hay que identificar <strong>por qué</strong> el autor lo escribió y <strong>cómo</strong> lo dice.

<strong>Propósitos del autor:</strong>
<ul>
<li><strong>Informar:</strong> presenta datos y hechos de forma objetiva, sin opinión. Ejemplo: noticias, reportes.</li>
<li><strong>Persuadir:</strong> busca convencer al lector de algo. Usa argumentos, evidencia y apelaciones emocionales.</li>
<li><strong>Entretener:</strong> busca el disfrute del lector. Cuentos, novelas, humor.</li>
<li><strong>Explicar:</strong> hace comprensible un proceso o concepto. Manuales, textos didácticos.</li>
<li><strong>Criticar:</strong> señala defectos o problemas. Editoriales, ensayos de opinión.</li>
</ul>

<strong>Tono del texto:</strong>
El tono es la <em>actitud</em> del autor hacia el tema. Se identifica por las palabras que elige.
<ul>
<li><strong>Objetivo/Neutral:</strong> sin emociones ni opiniones ("Los datos muestran que...")</li>
<li><strong>Irónico/Sarcástico:</strong> dice lo contrario de lo que quiere expresar</li>
<li><strong>Nostálgico:</strong> añoranza del pasado ("En aquellos tiempos...")</li>
<li><strong>Crítico:</strong> señala defectos con desaprobación</li>
<li><strong>Optimista/Esperanzador:</strong> visión positiva del futuro</li>
<li><strong>Pesimista:</strong> visión negativa, desesperanza</li>
<li><strong>Formal:</strong> lenguaje técnico, serio, sin coloquialismos</li>
</ul>

<strong>¿Cómo identificar el tono?</strong>
<ol>
<li>Fíjate en los <strong>adjetivos</strong> que usa el autor (¿son positivos, negativos, neutros?)</li>
<li>Observa si hay <strong>opiniones</strong> o solo hechos</li>
<li>Busca <strong>palabras cargadas emocionalmente</strong></li>
</ol>`,
        examples: [
          {
            problem: "'La contaminación del río ha destruido un ecosistema que tardó siglos en formarse. Las autoridades, como siempre, miran para otro lado.' ¿Cuál es el tono?",
            solution: "Crítico e indignado. 'Ha destruido' (negativo) + 'como siempre, miran para otro lado' (crítica directa a las autoridades)."
          },
          {
            problem: "'La tasa de desempleo disminuyó un 2.3% en el último trimestre según datos del INEC.' ¿Cuál es el propósito?",
            solution: "Informar. Presenta datos numéricos de una fuente oficial sin agregar opinión."
          }
        ],
        tips: [
          "El propósito responde a ¿PARA QUÉ escribe el autor? El tono responde a ¿CÓMO se siente respecto al tema?",
          "Si el texto tiene muchos datos y cifras sin opinión → informar. Si tiene argumentos y trata de convencer → persuadir.",
          "Cuidado con la ironía: el autor dice lo contrario de lo que piensa. Fíjate en el contexto para detectarla."
        ],
        exercises: [
          { id: "pt-1", question: "'Los jóvenes de hoy no leen, no se esfuerzan y esperan que todo les llegue sin trabajar.' El tono del autor es:", options: ["Crítico y despectivo", "Objetivo y neutral", "Nostálgico y triste", "Optimista"], correctAnswer: 0, explanation: "Las generalizaciones negativas ('no leen, no se esfuerzan') muestran una actitud de reproche y desprecio." },
          { id: "pt-2", question: "Un texto presenta estadísticas de accidentes viales con fuentes oficiales y sin adjetivos valorativos. El propósito es:", options: ["Informar", "Persuadir", "Criticar", "Entretener"], correctAnswer: 0, explanation: "Datos objetivos + fuentes oficiales + sin opinión = propósito informativo." },
          { id: "pt-3", question: "'¡Qué maravilloso servicio! Solo tardaron tres horas en atenderme y ni siquiera resolvieron mi problema.' El tono es:", options: ["Irónico y sarcástico", "Alegre y agradecido", "Neutral", "Triste"], correctAnswer: 0, explanation: "Dice 'maravilloso' pero describe una mala experiencia. Está diciendo lo contrario de lo que siente = ironía/sarcasmo." },
          { id: "pt-4", question: "Un editorial argumenta que se debe invertir más en educación pública y presenta evidencia de otros países. El propósito es:", options: ["Persuadir", "Informar", "Entretener", "Describir"], correctAnswer: 0, explanation: "Un editorial que presenta argumentos y evidencia para defender una postura busca persuadir al lector." },
          { id: "pt-5", question: "'Las calles empedradas, los vendedores de raspados y el sonido de las campanas de la iglesia son recuerdos que guardo con cariño de mi infancia en el pueblo.' El tono es:", options: ["Nostálgico", "Crítico", "Indiferente", "Formal"], correctAnswer: 0, explanation: "El recuerdo positivo del pasado ('guardo con cariño', detalles de la infancia) indica nostalgia." },
          { id: "pt-6", question: "'Según la OMS, lavarse las manos con jabón durante 20 segundos reduce el riesgo de infecciones respiratorias en un 23%.' El tono es:", options: ["Objetivo y neutral", "Alarmista", "Esperanzador", "Pesimista"], correctAnswer: 0, explanation: "Cita una fuente autorizada (OMS) y presenta un dato sin adjetivos emocionales = objetivo y neutral." },
          { id: "pt-7", question: "Un anuncio dice: 'Con nuestro producto, tu vida cambiará para siempre. Miles ya lo han probado. ¿Y tú, qué esperas?' El propósito es:", options: ["Persuadir para comprar", "Informar sobre el producto", "Entretener al lector", "Explicar cómo funciona"], correctAnswer: 0, explanation: "Usa apelación emocional, testimonios implícitos y pregunta directa al lector = persuadir." },
          { id: "pt-8", question: "'A pesar de los obstáculos, la comunidad logró reconstruir la escuela con sus propias manos. Hoy, 200 niños tienen un lugar digno para estudiar.' El tono es:", options: ["Esperanzador y admirativo", "Pesimista", "Irónico", "Indiferente"], correctAnswer: 0, explanation: "'A pesar de los obstáculos... logró' y 'lugar digno' transmiten admiración y esperanza." },
          { id: "pt-9", question: "'La nueva reforma tributaria beneficiará enormemente a los ciudadanos, según afirma el gobierno.' La palabra 'enormemente' sugiere que el autor:", options: ["Podría estar siendo irónico o escéptico", "Está completamente de acuerdo", "Es neutral y objetivo", "Desconoce el tema"], correctAnswer: 0, explanation: "El uso de 'enormemente' junto con 'según afirma el gobierno' (atribuyendo la afirmación) puede sugerir escepticismo o ironía." },
          { id: "pt-10", question: "Un manual explica paso a paso cómo instalar un programa. El propósito es:", options: ["Explicar un proceso", "Persuadir para usar el programa", "Criticar otros programas", "Entretener al usuario"], correctAnswer: 0, explanation: "Un manual con pasos secuenciales tiene como propósito explicar un proceso para que el lector lo reproduzca." },
          { id: "pt-11", question: "'El cambio climático ya no es una predicción: es nuestra realidad. Los glaciares desaparecen, los mares suben y las tormentas se intensifican. Debemos actuar ahora.' El propósito es:", options: ["Persuadir para tomar acción", "Informar sobre el clima", "Entretener con datos curiosos", "Describir la naturaleza"], correctAnswer: 0, explanation: "Presenta evidencia alarmante y cierra con un llamado directo a la acción ('Debemos actuar ahora') = persuadir." },
          { id: "pt-12", question: "'Érase una vez, en un reino muy lejano, un dragón que coleccionaba mariposas en lugar de tesoros.' El propósito y tono son:", options: ["Entretener / Fantasioso y lúdico", "Informar / Neutral", "Persuadir / Serio", "Criticar / Irónico"], correctAnswer: 0, explanation: "'Érase una vez' es fórmula de cuento. Un dragón con hobby inusual = entretener con tono fantasioso y lúdico." }
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
          { id: "an-7", question: "ABEJA : ENJAMBRE como LOBO : ?", options: ["Manada", "Bosque", "Cueva", "Presa"], correctAnswer: 0, explanation: "Relación: individuo → grupo/conjunto. El grupo de abejas es enjambre, el de lobos es manada." },
          { id: "an-8", question: "LECHE : QUESO como UVA : ?", options: ["Vino", "Fruta", "Jugo", "Vid"], correctAnswer: 0, explanation: "Relación: materia prima → producto elaborado. La leche se transforma en queso, la uva en vino." },
          { id: "an-9", question: "TELESCOPIO : ASTRÓNOMO como BISTURÍ : ?", options: ["Cirujano", "Hospital", "Enfermero", "Paciente"], correctAnswer: 0, explanation: "Relación: herramienta → profesional que la usa. El astrónomo usa el telescopio, el cirujano usa el bisturí." },
          { id: "an-10", question: "SONRISA : ALEGRÍA como LLANTO : ?", options: ["Tristeza", "Dolor", "Ojos", "Bebé"], correctAnswer: 0, explanation: "Relación: manifestación/expresión → emoción. La sonrisa expresa alegría, el llanto expresa tristeza." },
          { id: "an-11", question: "TIBIO : CALIENTE como BRISA : ?", options: ["Vendaval", "Aire", "Fresco", "Clima"], correctAnswer: 0, explanation: "Relación: grado de intensidad (menor → mayor). Tibio es menos intenso que caliente; brisa es menos intensa que vendaval." },
          { id: "an-12", question: "FRUTA : MANZANA como INSTRUMENTO MUSICAL : ?", options: ["Guitarra", "Melodía", "Canción", "Orquesta"], correctAnswer: 0, explanation: "Relación: categoría general → ejemplo específico. La manzana es un tipo de fruta; la guitarra es un tipo de instrumento musical." }
        ]
      },
      {
        id: "estrategias-analogias",
        title: "Estrategias para Resolver Analogías",
        content: `Resolver analogías requiere un método sistemático. Aquí tienes los pasos y estrategias clave.

<strong>Método paso a paso:</strong>
<ol>
<li><strong>Identifica la relación</strong> entre las dos palabras del par base. Formúlala como una oración: "A es ___ de B".</li>
<li><strong>Aplica esa misma relación</strong> a cada opción de respuesta.</li>
<li><strong>Elimina las opciones</strong> que no mantienen la relación exacta.</li>
<li>Si quedan varias, <strong>precisa la relación</strong> (hazla más específica).</li>
</ol>

<strong>Errores comunes:</strong>
<ul>
<li><strong>Relación invertida:</strong> confundir "A causa B" con "B causa A"</li>
<li><strong>Asociación libre:</strong> elegir una opción porque "se relaciona" vagamente, sin mantener la misma relación lógica</li>
<li><strong>Relación incompleta:</strong> identificar una relación demasiado general (ej: "se relacionan") en vez de la específica (ej: "uno es parte del otro")</li>
</ul>

<strong>Técnica de la oración puente:</strong>
Crea una oración que conecte las dos palabras del par base. La respuesta correcta debe encajar en la misma oración.
<ul>
<li>MARTILLO : CLAVO → "El martillo sirve para introducir el clavo"</li>
<li>DESTORNILLADOR : ? → "El destornillador sirve para introducir el tornillo" ✓</li>
</ul>`,
        examples: [
          {
            problem: "PINTOR : CUADRO como ESCRITOR : ?  Opciones: a) Libro  b) Tinta  c) Biblioteca  d) Leer",
            solution: "Oración puente: 'El pintor CREA el cuadro'. ¿Quién crea qué? 'El escritor CREA el libro'. Respuesta: Libro. Tinta es herramienta, biblioteca es lugar, leer es acción."
          },
          {
            problem: "HAMBRE : COMER como SED : ?  Opciones: a) Agua  b) Beber  c) Sed  d) Líquido",
            solution: "El hambre se satisface al COMER. La sed se satisface al BEBER. La relación es necesidad → acción que la satisface. Agua sería el objeto, no la acción."
          }
        ],
        tips: [
          "Siempre formula la relación como oración antes de ver las opciones.",
          "Si dos opciones parecen correctas, haz la relación más específica.",
          "La dirección importa: 'parte de' no es lo mismo que 'contiene a'."
        ],
        exercises: [
          { id: "ea-1", question: "SEMILLA : ÁRBOL como HUEVO : ?", options: ["Ave", "Nido", "Cáscara", "Comida"], correctAnswer: 0, explanation: "Relación: origen → resultado del desarrollo. La semilla se desarrolla en árbol; el huevo se desarrolla en ave." },
          { id: "ea-2", question: "TELESCOPIO : ESTRELLAS como MICROSCOPIO : ?", options: ["Células", "Laboratorio", "Ciencia", "Lentes"], correctAnswer: 0, explanation: "Relación: instrumento → lo que permite observar. El telescopio observa estrellas; el microscopio observa células." },
          { id: "ea-3", question: "PACIENTE : HOSPITAL como ESTUDIANTE : ?", options: ["Escuela", "Libro", "Profesor", "Examen"], correctAnswer: 0, explanation: "Relación: persona → lugar donde recibe un servicio. El paciente va al hospital; el estudiante va a la escuela." },
          { id: "ea-4", question: "ABOGADO : LEYES como MÉDICO : ?", options: ["Enfermedades", "Hospital", "Paciente", "Bata"], correctAnswer: 0, explanation: "Relación: profesional → materia de su especialidad. El abogado se especializa en leyes; el médico en enfermedades." },
          { id: "ea-5", question: "LLAVE : CERRADURA como CONTRASEÑA : ?", options: ["Cuenta", "Computadora", "Teclado", "Internet"], correctAnswer: 0, explanation: "Relación: medio de acceso → lo que abre/desbloquea. La llave abre la cerradura; la contraseña abre la cuenta." },
          { id: "ea-6", question: "PROLOGO : LIBRO como APERTURA : ?", options: ["Concierto", "Música", "Orquesta", "Nota"], correctAnswer: 0, explanation: "Relación: parte inicial → obra completa. El prólogo es la parte inicial del libro; la apertura es la parte inicial del concierto." },
          { id: "ea-7", question: "TERMÓMETRO : TEMPERATURA como BALANZA : ?", options: ["Peso", "Metal", "Farmacia", "Equilibrio"], correctAnswer: 0, explanation: "Relación: instrumento → lo que mide. El termómetro mide la temperatura; la balanza mide el peso." },
          { id: "ea-8", question: "ANCIANO : JOVEN como ANTIGUO : ?", options: ["Moderno", "Viejo", "Clásico", "Histórico"], correctAnswer: 0, explanation: "Relación: antónimos. Anciano es lo opuesto de joven; antiguo es lo opuesto de moderno." },
          { id: "ea-9", question: "REBAÑO : OVEJAS como CARDUMEN : ?", options: ["Peces", "Mar", "Pescador", "Red"], correctAnswer: 0, explanation: "Relación: nombre colectivo → individuos que lo componen. Un rebaño es un grupo de ovejas; un cardumen es un grupo de peces." },
          { id: "ea-10", question: "SUSURRO : GRITO como LLOVIZNA : ?", options: ["Tormenta", "Agua", "Paraguas", "Nube"], correctAnswer: 0, explanation: "Relación: intensidad menor → intensidad mayor. Susurro es un sonido suave, grito es fuerte; llovizna es lluvia suave, tormenta es intensa." },
          { id: "ea-11", question: "MAPA : TERRITORIO como PLANO : ?", options: ["Edificio", "Arquitecto", "Papel", "Línea"], correctAnswer: 0, explanation: "Relación: representación → lo que representa. El mapa representa el territorio; el plano representa el edificio." },
          { id: "ea-12", question: "HAMBRIENTO : COMIDA como SEDIENTO : ?", options: ["Bebida", "Sed", "Desierto", "Calor"], correctAnswer: 0, explanation: "Relación: el que tiene necesidad → lo que necesita. El hambriento necesita comida; el sediento necesita bebida." }
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
          { id: "red-5", question: "¿Cuál es el sujeto de: 'En la mesa del comedor estaban las llaves de mi hermano'?", options: ["Las llaves", "La mesa", "Mi hermano", "El comedor"], correctAnswer: 0, explanation: "¿Qué estaban? Las llaves estaban. 'Las llaves' es el sujeto." },
          { id: "red-6", question: "¿Cuál oración tiene correcta concordancia de género y número?", options: ["Las primeras ministras europeas se reunieron ayer", "Las primeros ministras europeos se reunieron ayer", "Las primeras ministras europeos se reunieron ayer", "Los primeras ministras europeas se reunieron ayer"], correctAnswer: 0, explanation: "Todos los elementos deben concordar en femenino plural: las primeras ministras europeas." },
          { id: "red-7", question: "Identifica la oración correcta:", options: ["Le dije a Pedro que viniera", "La dije a Pedro que viniera", "Lo dije a Pedro que viniera", "Les dije a Pedro que viniera"], correctAnswer: 0, explanation: "'Decir a alguien' requiere complemento indirecto = 'le' (a Pedro). 'Le dije a Pedro' es correcto." },
          { id: "red-8", question: "¿Cuál oración presenta un error gramatical?", options: ["Habían muchas personas en la fiesta", "Había muchas personas en la fiesta", "Hubo muchas personas en la fiesta", "Hay muchas personas en la fiesta"], correctAnswer: 0, explanation: "'Haber' como verbo impersonal siempre va en singular: 'Había muchas personas', NO 'habían'." },
          { id: "red-9", question: "¿Cuál es la oración correcta?", options: ["Ni tú ni yo sabemos la respuesta", "Ni tú ni yo sabe la respuesta", "Ni tú ni yo sabes la respuesta", "Ni tú ni yo saben la respuesta"], correctAnswer: 0, explanation: "'Ni tú ni yo' = nosotros → verbo en primera persona plural: 'sabemos'." },
          { id: "red-10", question: "¿Cuál oración tiene error de queísmo?", options: ["Estoy convencido que ganará", "Creo que es posible", "Sé que vendrás mañana", "Dijo que lo haría"], correctAnswer: 0, explanation: "'Estar convencido DE algo' → 'Estoy convencido de que ganará'. Omitir 'de' es queísmo." },
          { id: "red-11", question: "Identifica la oración con estructura correcta:", options: ["A los estudiantes les preocupa el examen final", "A los estudiantes le preocupa el examen final", "A los estudiantes les preocupan el examen final", "A los estudiantes le preocupan el examen final"], correctAnswer: 0, explanation: "'Los estudiantes' = plural → 'les'. 'El examen' = singular → 'preocupa'. 'A los estudiantes les preocupa el examen'." }
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
          { id: "pun-5", question: "¿Cuál palabra es esdrújula?", options: ["Teléfono", "Canción", "Papel", "Sutil"], correctAnswer: 0, explanation: "Te-lé-fo-no: el acento cae en la antepenúltima sílaba → esdrújula." },
          { id: "pun-6", question: "¿Cuál palabra está correctamente escrita?", options: ["Decisión", "Desición", "Decición", "Desisión"], correctAnswer: 0, explanation: "La forma correcta es 'decisión', con 'c' en la segunda sílaba y 's' en la tercera." },
          { id: "pun-7", question: "¿Cuál oración tiene la puntuación correcta?", options: ["María, mi mejor amiga, viajó a Colombia", "María mi mejor amiga, viajó a Colombia", "María, mi mejor amiga viajó a Colombia", "María mi mejor amiga viajó, a Colombia"], correctAnswer: 0, explanation: "'Mi mejor amiga' es un inciso explicativo que va entre comas, separándolo del resto de la oración." },
          { id: "pun-8", question: "¿Cuál de estas palabras es aguda y lleva tilde?", options: ["Canción", "Árbol", "Mesa", "Lápiz"], correctAnswer: 0, explanation: "Can-ción: acento en la última sílaba (aguda) y termina en 'n' → lleva tilde. Las demás son graves." },
          { id: "pun-9", question: "¿Cuál oración usa correctamente los dos puntos?", options: ["Necesito tres cosas: paciencia, dedicación y esfuerzo", "Necesito: tres cosas paciencia, dedicación y esfuerzo", "Necesito tres cosas paciencia: dedicación y esfuerzo", "Necesito tres cosas, paciencia: dedicación y esfuerzo"], correctAnswer: 0, explanation: "Los dos puntos se usan antes de una enumeración anunciada: 'tres cosas: paciencia, dedicación y esfuerzo'." },
          { id: "pun-10", question: "¿Cuál palabra es grave y NO lleva tilde?", options: ["Casa", "Fácil", "Ángel", "Cárcel"], correctAnswer: 0, explanation: "Ca-sa: acento en la penúltima sílaba (grave) y termina en vocal → NO lleva tilde. Las demás son graves que terminan en consonante distinta de N o S." },
          { id: "pun-11", question: "¿Cuál oración tiene un error de puntuación?", options: ["Los alumnos, estudiaron para el examen", "Los alumnos estudiaron para el examen", "Después de estudiar, los alumnos rindieron el examen", "Los alumnos, que estudiaron mucho, aprobaron el examen"], correctAnswer: 0, explanation: "La coma NUNCA va entre sujeto y verbo: 'Los alumnos estudiaron' es correcto, sin coma." },
          { id: "pun-12", question: "¿Cuál serie de palabras está correctamente acentuada?", options: ["Lógica, difícil, cómodo", "Logica, dificil, comodo", "Lógica, dificil, cómodo", "Logica, difícil, comodo"], correctAnswer: 0, explanation: "Las tres son esdrújulas o graves que necesitan tilde: ló-gi-ca, di-fí-cil, có-mo-do." }
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
          { id: "coh-4", question: "'Los estudiantes presentaron el proyecto. ______ fue aprobado por el comité.' ¿Qué va en el espacio?", options: ["Este", "Aquel", "Él", "Aquello"], correctAnswer: 0, explanation: "'Este' se refiere al proyecto mencionado en la oración anterior (referente cercano)." },
          { id: "coh-5", question: "'Llovió toda la noche; ______, las calles amanecieron inundadas.' Elige el conector:", options: ["por consiguiente", "sin embargo", "además", "aunque"], correctAnswer: 0, explanation: "La lluvia CAUSA la inundación → conector de consecuencia: 'por consiguiente'." },
          { id: "coh-6", question: "'El equipo jugó muy bien ______ no logró ganar el campeonato.' Elige el conector:", options: ["pero", "porque", "por lo tanto", "además"], correctAnswer: 0, explanation: "Hay contraste entre jugar bien y no ganar → 'pero' indica una idea opuesta a lo esperado." },
          { id: "coh-7", question: "¿Cuál es el orden correcto? (1) Finalmente, el proyecto fue un éxito total. (2) Primero, el equipo identificó el problema principal. (3) Luego, diseñaron una estrategia de solución.", options: ["2, 3, 1", "1, 2, 3", "3, 1, 2", "2, 1, 3"], correctAnswer: 0, explanation: "Los conectores de orden guían la secuencia: primero (2), luego (3), finalmente (1)." },
          { id: "coh-8", question: "'La empresa invirtió en tecnología. ______ mejoró su productividad en un 40%.' Elige el conector:", options: ["Como resultado", "No obstante", "A pesar de ello", "En cambio"], correctAnswer: 0, explanation: "Invertir en tecnología CAUSA mejora en productividad → conector de consecuencia: 'como resultado'." },
          { id: "coh-9", question: "¿Cuál de estas oraciones rompe la coherencia del párrafo? 'El Canal de Panamá es una obra de ingeniería impresionante. (A) Conecta el océano Atlántico con el Pacífico. (B) Miles de barcos lo transitan cada año. (C) La gastronomía panameña incluye el sancocho. (D) Su construcción tomó más de diez años.'", options: ["C — La gastronomía panameña incluye el sancocho", "A — Conecta el océano Atlántico con el Pacífico", "B — Miles de barcos lo transitan cada año", "D — Su construcción tomó más de diez años"], correctAnswer: 0, explanation: "El párrafo habla del Canal de Panamá. La oración sobre gastronomía no tiene relación con el tema → rompe la coherencia." },
          { id: "coh-10", question: "'No solo aprobó el examen, ______ obtuvo la mejor calificación de la clase.' Elige el conector:", options: ["sino que también", "pero", "aunque", "sin embargo"], correctAnswer: 0, explanation: "'No solo... sino que también' es una estructura de adición que intensifica la idea: aprobó Y ADEMÁS fue el mejor." },
          { id: "coh-11", question: "'La deforestación destruye hábitats naturales. ______, provoca la erosión del suelo y altera el ciclo del agua.' Elige el conector:", options: ["Además", "Sin embargo", "Por el contrario", "Aunque"], correctAnswer: 0, explanation: "Se añade más información negativa sobre la deforestación → conector de adición: 'además'." }
        ]
      },
      {
        id: "ordenamiento-oraciones",
        title: "Ordenamiento de Oraciones",
        content: `En la PAA, te presentan un conjunto de oraciones desordenadas y debes organizarlas para formar un texto coherente.

<strong>Estrategia para ordenar:</strong>
<ol>
<li><strong>Identifica la oración introductoria:</strong> presenta el tema general, define un concepto o da contexto. Suele NO tener conectores como "además", "sin embargo", "por lo tanto".</li>
<li><strong>Busca la secuencia lógica:</strong> causa → efecto, general → particular, cronológico, problema → solución.</li>
<li><strong>Fíjate en los conectores:</strong> "sin embargo" indica contraste (va después de algo positivo/negativo opuesto). "Por lo tanto" indica conclusión (va al final o casi al final).</li>
<li><strong>Identifica referencias:</strong> pronombres (él, esta, dicho, aquella) señalan que una oración va DESPUÉS de la que presenta el referente.</li>
<li><strong>La oración final:</strong> suele ser una conclusión, consecuencia o resumen.</li>
</ol>

<strong>Pistas clave:</strong>
<ul>
<li><strong>"Este/Esta/Dicho/Tal"</strong> → hace referencia a algo ya mencionado (va después)</li>
<li><strong>"Por ejemplo"</strong> → va después de una afirmación general</li>
<li><strong>"En conclusión / Por lo tanto"</strong> → va al final</li>
<li><strong>"Primero / En primer lugar"</strong> → va al inicio de una secuencia</li>
<li><strong>"Finalmente / Por último"</strong> → cierra la secuencia</li>
</ul>`,
        examples: [
          {
            problem: "Ordena: I. Por lo tanto, es esencial cuidar nuestras fuentes de agua. II. El agua es el recurso más importante para la vida. III. Sin embargo, la contaminación amenaza este recurso.",
            solution: "Orden: II → III → I. Primero se presenta el tema (II), luego el contraste/problema (III con 'sin embargo'), y finalmente la conclusión (I con 'por lo tanto')."
          }
        ],
        tips: [
          "Lee todas las oraciones primero antes de intentar ordenar.",
          "La oración sin conectores suele ser la primera.",
          "Si una oración dice 'este problema' o 'dicha situación', busca cuál oración menciona ese problema primero."
        ],
        exercises: [
          { id: "ord-1", question: "I. Por eso, debemos reciclar. II. La basura contamina los océanos. III. Cada año, millones de toneladas de plástico llegan al mar. El orden correcto es:", options: ["II, III, I", "III, II, I", "I, II, III", "III, I, II"], correctAnswer: 0, explanation: "II introduce el tema general. III da un dato específico. I concluye con 'por eso' (consecuencia)." },
          { id: "ord-2", question: "I. Sin embargo, también presenta riesgos para la privacidad. II. La tecnología ha mejorado la comunicación global. III. Por lo tanto, es necesario legislar su uso responsable. El orden es:", options: ["II, I, III", "I, II, III", "III, I, II", "II, III, I"], correctAnswer: 0, explanation: "II presenta el tema (positivo). I contrasta con 'sin embargo'. III concluye con 'por lo tanto'." },
          { id: "ord-3", question: "I. Esta vitamina fortalece el sistema inmunológico. II. Las naranjas son ricas en vitamina C. III. Por ello, consumir cítricos ayuda a prevenir resfriados. El orden es:", options: ["II, I, III", "I, II, III", "III, II, I", "I, III, II"], correctAnswer: 0, explanation: "II introduce el tema. I explica con 'esta vitamina' (referencia a vitamina C). III concluye con 'por ello'." },
          { id: "ord-4", question: "I. Finalmente, se sirve acompañado de arroz. II. Primero, se marinan las carnes con especias. III. Luego, se cocinan a fuego lento durante dos horas. El orden es:", options: ["II, III, I", "I, II, III", "III, I, II", "II, I, III"], correctAnswer: 0, explanation: "Secuencia cronológica marcada por: Primero (II) → Luego (III) → Finalmente (I)." },
          { id: "ord-5", question: "I. En consecuencia, muchas especies están en peligro de extinción. II. La deforestación destruye el hábitat natural de miles de animales. III. Además, altera los ciclos del agua y del suelo. El orden es:", options: ["II, III, I", "I, II, III", "III, II, I", "II, I, III"], correctAnswer: 0, explanation: "II presenta el problema. III añade información con 'además'. I concluye con 'en consecuencia'." },
          { id: "ord-6", question: "I. Tal descubrimiento revolucionó la medicina moderna. II. En 1928, Alexander Fleming descubrió la penicilina por accidente. III. Gracias a ella, enfermedades antes mortales pudieron ser tratadas. El orden es:", options: ["II, I, III", "I, II, III", "II, III, I", "III, II, I"], correctAnswer: 0, explanation: "II introduce el hecho histórico. I dice 'tal descubrimiento' (referencia a II). III amplía la consecuencia." },
          { id: "ord-7", question: "I. No obstante, su uso excesivo puede generar dependencia. II. Las redes sociales permiten conectar con personas de todo el mundo. III. Por esta razón, los expertos recomiendan limitar el tiempo en pantalla. El orden es:", options: ["II, I, III", "I, II, III", "III, I, II", "II, III, I"], correctAnswer: 0, explanation: "II presenta el aspecto positivo. I contrasta con 'no obstante'. III concluye con 'por esta razón'." },
          { id: "ord-8", question: "I. Por ejemplo, el salmón recorre miles de kilómetros para desovar. II. Muchos animales realizan migraciones sorprendentes. III. Estas travesías son esenciales para la supervivencia de sus especies. El orden es:", options: ["II, I, III", "I, II, III", "III, I, II", "II, III, I"], correctAnswer: 0, explanation: "II presenta la idea general. I da un ejemplo con 'por ejemplo'. III concluye sobre 'estas travesías'." },
          { id: "ord-9", question: "I. Posteriormente, se analiza la información recopilada. II. El método científico comienza con la observación de un fenómeno. III. A partir de los resultados, se formulan conclusiones. El orden es:", options: ["II, I, III", "I, II, III", "III, II, I", "I, III, II"], correctAnswer: 0, explanation: "Secuencia del método: comienza (II) → posteriormente (I) → a partir de los resultados (III)." },
          { id: "ord-10", question: "I. Dicha contaminación afecta la salud de millones de personas. II. Las fábricas emiten grandes cantidades de gases tóxicos a la atmósfera. III. Es urgente implementar regulaciones más estrictas. El orden es:", options: ["II, I, III", "I, II, III", "III, II, I", "II, III, I"], correctAnswer: 0, explanation: "II presenta el problema. I dice 'dicha contaminación' (referencia). III propone solución urgente." },
          { id: "ord-11", question: "I. En resumen, aprender un idioma requiere constancia y práctica. II. Además, es útil practicar con hablantes nativos. III. Para aprender un idioma, es fundamental estudiar vocabulario y gramática. El orden es:", options: ["III, II, I", "I, II, III", "II, III, I", "III, I, II"], correctAnswer: 0, explanation: "III introduce el tema. II añade con 'además'. I cierra con 'en resumen'." },
          { id: "ord-12", question: "I. Así, logró convertirse en uno de los científicos más importantes de la historia. II. A pesar de sus dificultades iniciales, Einstein no se rindió. III. Sus teorías transformaron nuestra comprensión del universo. El orden es:", options: ["II, III, I", "I, II, III", "III, II, I", "II, I, III"], correctAnswer: 0, explanation: "II presenta la adversidad superada. III describe el logro concreto. I concluye con 'así' (resultado final)." }
        ]
      },
      {
        id: "vicios-lenguaje",
        title: "Vicios del Lenguaje",
        content: `Los <strong>vicios del lenguaje</strong> son errores comunes al hablar o escribir que afectan la claridad y corrección del mensaje. En la PAA, debes identificarlos y corregirlos.

<strong>Principales vicios:</strong>

<strong>1. Redundancia (Pleonasmo):</strong> repetir una idea innecesariamente.
<ul>
<li>❌ "Subir arriba" → ✅ "Subir" (subir ya implica arriba)</li>
<li>❌ "Vuelvo a repetir" → ✅ "Repito" (repetir ya implica volver a decir)</li>
<li>❌ "Lapso de tiempo" → ✅ "Lapso" (lapso ya significa período de tiempo)</li>
</ul>

<strong>2. Barbarismo:</strong> uso incorrecto de palabras o formas gramaticales.
<ul>
<li>❌ "Hubieron muchos problemas" → ✅ "Hubo muchos problemas" (haber impersonal es singular)</li>
<li>❌ "Dijistes" → ✅ "Dijiste" (no se agrega -s a la segunda persona del pretérito)</li>
<li>❌ "Más mejor" → ✅ "Mejor" (mejor ya es comparativo)</li>
</ul>

<strong>3. Solecismo:</strong> error de sintaxis o concordancia.
<ul>
<li>❌ "Habemos muchos estudiantes" → ✅ "Somos muchos estudiantes"</li>
<li>❌ "Le dije a ellos" → ✅ "Les dije a ellos" (concordancia de número)</li>
<li>❌ "La gente piensan" → ✅ "La gente piensa" (sujeto colectivo singular)</li>
</ul>

<strong>4. Dequeísmo y Queísmo:</strong>
<ul>
<li>❌ "Pienso de que es correcto" → ✅ "Pienso que es correcto" (dequeísmo: sobra "de")</li>
<li>❌ "Estoy seguro que vendrá" → ✅ "Estoy seguro de que vendrá" (queísmo: falta "de")</li>
<li><strong>Truco:</strong> sustituye por "eso". "Pienso eso" ✓ (no "pienso de eso") → no lleva "de".</li>
</ul>

<strong>5. Anfibología:</strong> ambigüedad; la oración se puede interpretar de más de una forma.
<ul>
<li>❌ "Vi a tu hermano con el telescopio" (¿quién tiene el telescopio?)</li>
<li>✅ "Con el telescopio, vi a tu hermano" o "Vi a tu hermano, quien tenía el telescopio"</li>
</ul>`,
        examples: [
          {
            problem: "Identifica el vicio: 'Hubieron muchas personas en la fiesta.'",
            solution: "Barbarismo. El verbo 'haber' en sentido impersonal siempre va en singular: 'Hubo muchas personas en la fiesta.'"
          },
          {
            problem: "Identifica el vicio: 'Salir afuera a tomar el sol.'",
            solution: "Redundancia/Pleonasmo. 'Salir' ya implica ir hacia afuera. Lo correcto es: 'Salir a tomar el sol.'"
          }
        ],
        tips: [
          "Para detectar redundancia, pregúntate: ¿esta palabra añade información nueva o repite algo ya dicho?",
          "Para dequeísmo/queísmo: sustituye la frase por 'eso'. Si 'de eso' suena mal, no lleva 'de'.",
          "En la PAA, busca la oración que esté CORRECTAMENTE escrita — descarta las que tengan vicios."
        ],
        exercises: [
          { id: "vl-1", question: "¿Cuál oración tiene redundancia?", options: ["Salir afuera de la casa", "Salir de la casa rápidamente", "Salir de la casa por la puerta", "Salir temprano de la casa"], correctAnswer: 0, explanation: "'Salir afuera' es redundante porque 'salir' ya implica ir hacia afuera." },
          { id: "vl-2", question: "¿Cuál es la forma correcta?", options: ["Hubo muchos asistentes", "Hubieron muchos asistentes", "Habían muchos asistentes", "Han habido muchos asistentes"], correctAnswer: 0, explanation: "El verbo 'haber' impersonal siempre va en singular, sin importar el complemento: 'Hubo muchos asistentes'." },
          { id: "vl-3", question: "¿Cuál oración tiene dequeísmo?", options: ["Creo de que va a llover", "Estoy seguro de que vendrá", "Me alegro de que estés bien", "Confío en que todo saldrá bien"], correctAnswer: 0, explanation: "'Creo de que' es dequeísmo. Lo correcto es 'Creo que' (prueba: 'Creo eso', no 'Creo de eso')." },
          { id: "vl-4", question: "¿Cuál oración es correcta?", options: ["La gente piensa diferente", "La gente piensan diferente", "Las gentes piensan diferente", "La gente piensen diferente"], correctAnswer: 0, explanation: "'La gente' es un sustantivo colectivo singular, por lo que el verbo va en singular: 'piensa'." },
          { id: "vl-5", question: "Identifica el vicio en 'Vuelvo a repetir que la tarea es para mañana':", options: ["Redundancia", "Barbarismo", "Solecismo", "Anfibología"], correctAnswer: 0, explanation: "'Vuelvo a repetir' es redundante: 'repetir' ya significa 'volver a decir'. Basta con 'Repito que...'." },
          { id: "vl-6", question: "¿Cuál oración tiene queísmo?", options: ["Me enteré que ganamos", "Me enteré de que ganamos", "Creo que ganamos", "Sé que ganamos"], correctAnswer: 0, explanation: "'Enterarse' requiere 'de': 'Me enteré DE que ganamos'. Sin el 'de' es queísmo (prueba: 'Me enteré de eso')." },
          { id: "vl-7", question: "¿Cuál forma verbal es incorrecta?", options: ["Dijistes la verdad", "Dijiste la verdad", "Dijo la verdad", "Dijimos la verdad"], correctAnswer: 0, explanation: "'Dijistes' es un barbarismo. La forma correcta del pretérito en segunda persona es 'dijiste' (sin -s final)." },
          { id: "vl-8", question: "¿Cuál oración es anfibológica (ambigua)?", options: ["Pedro le dijo a Juan que su auto estaba dañado", "El auto de Pedro está dañado", "Juan reparó su propio auto", "Pedro llevó su auto al mecánico"], correctAnswer: 0, explanation: "'Su auto' puede referirse al auto de Pedro o al de Juan. Es ambiguo = anfibología." },
          { id: "vl-9", question: "¿Cuál expresión es correcta?", options: ["Mejor dicho", "Más mejor dicho", "Más peor", "Menos inferior"], correctAnswer: 0, explanation: "'Mejor' y 'peor' ya son comparativos. 'Más mejor' y 'más peor' son barbarismos (doble comparativo)." },
          { id: "vl-10", question: "Identifica el vicio: 'Le pedí a los niños que se calmaran.'", options: ["Solecismo (falta concordancia)", "Redundancia", "Barbarismo", "No tiene vicio"], correctAnswer: 0, explanation: "'Le' es singular pero 'a los niños' es plural. Debe ser 'Les pedí a los niños'. Es un solecismo de concordancia." },
          { id: "vl-11", question: "¿Cuál oración tiene redundancia?", options: ["Lo vi con mis propios ojos", "Lo vi desde la ventana", "Lo vi claramente", "Lo vi ayer"], correctAnswer: 0, explanation: "'Con mis propios ojos' es redundante: ver ya se hace con los ojos, y por supuesto que son los propios." },
          { id: "vl-12", question: "¿Cuál es la forma correcta?", options: ["Es necesario de que estudies", "Es necesario que estudies", "Es necesario que estudias", "Es necesario de que estudias"], correctAnswer: 1, explanation: "'Es necesario QUE estudies' es correcto. 'Es necesario DE que' es dequeísmo (prueba: 'Es necesario eso', no 'de eso'). Además el verbo debe ir en subjuntivo: 'estudies'." }
        ]
      }
    ]
  }
];

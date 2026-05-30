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
        content: `En este tipo de ejercicio se presenta una oración con una o dos palabras omitidas. Tu tarea es elegir la opcion que complete el sentido logico y gramatical de la oracion. Estos ejercicios evaluan tu capacidad de comprender relaciones entre ideas y de usar el vocabulario en contexto, dos habilidades fundamentales que la PAA mide de forma recurrente.

<strong>Estrategia paso a paso:</strong>
<ol>
<li><strong>Lee toda la oración completa</strong> antes de ver las opciones. Entiende la estructura general: cual es el sujeto, cual es la accion, y que tipo de informacion falta.</li>
<li><strong>Identifica las claves contextuales:</strong> son palabras o frases dentro de la oracion que te dan pistas directas sobre la respuesta. Pueden ser sinonimos, antonimos, definiciones implicitas o relaciones logicas.</li>
<li><strong>Predice mentalmente la respuesta</strong> antes de ver las opciones. Preguntate: la palabra que falta, debe ser positiva o negativa? Debe indicar causa o consecuencia? Es un sinonimo o un antonimo de algo que ya aparece?</li>
<li><strong>Busca conectores y palabras clave:</strong> los conectores son la herramienta mas poderosa para resolver estos ejercicios. Cada conector te dice exactamente que tipo de relacion hay entre las partes de la oracion.</li>
<li><strong>Elimina opciones</strong> que no encajan gramatical o semanticamente. Si una opcion suena bien pero rompe la concordancia de genero o numero, es incorrecta.</li>
<li><strong>Verifica tu respuesta</strong> releyendo la oracion completa con la opcion elegida. Debe sonar natural y logica.</li>
</ol>

<strong>Los 4 tipos de claves contextuales en detalle:</strong>

<strong>1. Claves de continuidad (la idea se mantiene):</strong>
<ul>
<li>Conectores: <em>y, tambien, ademas, igualmente, asimismo, incluso, del mismo modo</em></li>
<li>La palabra que falta sigue la misma direccion que el resto de la oracion</li>
<li>Ejemplo: "El atleta era disciplinado y ______." - La respuesta debe ser algo positivo que complemente "disciplinado", como "perseverante" o "dedicado"</li>
<li>Ejemplo: "La ciudad es moderna y ______; sus edificios reflejan las ultimas tendencias." - Busca un adjetivo positivo coherente: "vanguardista"</li>
</ul>

<strong>2. Claves de contraste (la idea cambia de direccion):</strong>
<ul>
<li>Conectores: <em>pero, sin embargo, aunque, no obstante, a pesar de, en cambio, por el contrario, mientras que</em></li>
<li>La palabra que falta tiene sentido OPUESTO a lo que dice la otra parte de la oracion</li>
<li>Este es el tipo mas frecuente en la PAA porque requiere razonamiento de dos pasos</li>
<li>Ejemplo: "Aunque el camino era ______, los excursionistas decidieron continuar." - "Aunque" indica que lo que sigue contrasta. Si continuaron (positivo), el camino era algo negativo: "peligroso", "dificil", "escarpado"</li>
<li>Ejemplo: "A pesar de su ______ apariencia, el animal era en realidad bastante ______." - "A pesar de" establece un contraste entre apariencia y realidad. Si la apariencia es "feroz", la realidad es "docil". Si la apariencia es "inofensiva", la realidad es "peligroso"</li>
<li><strong>Patron clave:</strong> "aunque A, B" significa que A y B van en direcciones opuestas. "A pesar de A, B" funciona igual</li>
</ul>

<strong>3. Claves de causa-efecto (una parte explica la otra):</strong>
<ul>
<li>Conectores de causa: <em>porque, ya que, puesto que, debido a que, dado que</em></li>
<li>Conectores de efecto: <em>por lo tanto, por consiguiente, asi que, entonces, en consecuencia, de modo que</em></li>
<li>Una parte de la oracion explica POR QUE ocurre la otra</li>
<li>Ejemplo: "El discurso fue tan ______ que muchos asistentes se quedaron dormidos." - La consecuencia (dormirse) se explica por la causa (el discurso fue "tedioso" o "soporifero")</li>
<li>Ejemplo: "Debido a su ______, la empresa tuvo que cerrar." - La causa debe ser algo negativo que justifique el cierre: "quiebra", "insolvencia", "mala administracion"</li>
<li><strong>Patron clave:</strong> "tan ______ que [resultado]" - El adjetivo que falta debe causar logicamente ese resultado</li>
</ul>

<strong>4. Claves de definicion (la oracion explica la palabra):</strong>
<ul>
<li>La propia oracion contiene una definicion o descripcion de la palabra que falta</li>
<li>Palabras clave: <em>es decir, o sea, esto es, lo que significa, se refiere a</em></li>
<li>Ejemplo: "El doctor recomendo ______, es decir, no comer antes de la cirugia." - La definicion "no comer" apunta a: "ayuno"</li>
<li>Ejemplo: "Su ______ era evidente: nunca dejaba nada al azar y revisaba cada detalle tres veces." - La descripcion define a alguien meticuloso: "meticulosidad"</li>
</ul>

<strong>Cuando hay DOS espacios en blanco:</strong>
<ul>
<li>Ambas palabras deben ser coherentes entre si Y con el resto de la oracion</li>
<li>Primero determina la relacion entre los dos espacios: son sinonimos? antonimos? causa-efecto?</li>
<li>Verifica que AMBAS palabras funcionen, no solo una</li>
<li>Ejemplo: "El publico aplaudio con ______ al finalizar la obra, pues la actuacion habia sido ______." - Si aplaudieron con "entusiasmo" (positivo), la actuacion fue "magistral" (positivo). Ambas van en la misma direccion</li>
<li>Truco: si una de las dos opciones no encaja, descarta toda la pareja, aunque la otra palabra funcione</li>
</ul>

<strong>Tecnica de eliminacion sistematica:</strong>
<ol>
<li>Descarta opciones que tengan errores gramaticales (genero, numero, conjugacion)</li>
<li>Descarta opciones que contradigan la logica de la oracion</li>
<li>Descarta opciones con palabras demasiado extremas si el contexto es moderado</li>
<li>Si quedan dos opciones, relee con cada una y elige la que suene mas natural y precisa</li>
</ol>`,
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
        content: `Muchas palabras en espanol tienen multiples significados dependiendo del contexto en que se usen. En la PAA, este tipo de ejercicios evalua tu capacidad de identificar el significado correcto de una palabra segun la oracion o el texto que la rodea. No basta con conocer una definicion; debes reconocer cual de las posibles acepciones aplica en cada situacion.

<strong>Estrategia paso a paso:</strong>
<ol>
<li><strong>Lee la oracion completa</strong> para captar el sentido general. No te detengas en la palabra en cuestion; entiende primero de que habla toda la oracion.</li>
<li><strong>Identifica el campo semantico:</strong> el tema de la oracion te dice en que area de significado se usa la palabra. Por ejemplo, "banco" en una oracion sobre finanzas significa algo muy diferente que en una oracion sobre un parque.</li>
<li><strong>Sustituye la palabra</strong> por cada opcion disponible y lee la oracion completa con cada una. La correcta debe mantener el sentido original sin alterar la logica.</li>
<li><strong>Descarta por incoherencia:</strong> si una opcion cambia el significado de la oracion o crea una contradiccion, eliminala.</li>
<li><strong>Verifica la categoria gramatical:</strong> si la palabra original es un verbo, la respuesta debe funcionar como verbo. Si es adjetivo, igual.</li>
</ol>

<strong>Palabras polisemicas comunes en la PAA:</strong>
<ul>
<li><strong>Banco:</strong> asiento / institucion financiera / grupo de peces / banco de datos</li>
<li><strong>Planta:</strong> vegetal / piso de edificio / fabrica o instalacion / parte del pie</li>
<li><strong>Cabo:</strong> rango militar / extremo de cuerda / accidente geografico / final ("al cabo de")</li>
<li><strong>Capital:</strong> ciudad principal / dinero o recursos / letra mayuscula / importancia ("de capital importancia")</li>
<li><strong>Obra:</strong> creacion artistica / construccion en proceso / accion o acto ("buena obra") / libro</li>
<li><strong>Gato:</strong> animal / herramienta para levantar autos / juego (gato o tres en raya)</li>
<li><strong>Hoja:</strong> de un arbol / de papel / de una puerta / de un cuchillo (filo)</li>
<li><strong>Carta:</strong> mensaje escrito / documento formal / naipe / menu de restaurante</li>
</ul>

<strong>Prefijos: herramientas para descifrar palabras desconocidas</strong>
Cuando encuentres una palabra que no conoces, descomponla en sus partes. Los prefijos te dan pistas valiosas sobre el significado:

<ul>
<li><strong>Prefijos de negacion:</strong>
  <ul>
  <li><em>in-, im-, i-:</em> inutil (no util), imposible (no posible), irresponsable (no responsable), ilegal (no legal)</li>
  <li><em>des-:</em> deshacer (anular lo hecho), desacuerdo (falta de acuerdo), desconfianza, desventaja</li>
  <li><em>a-, an-:</em> amoral (sin moral), anonimo (sin nombre), analfabeto (sin alfabeto/lectura)</li>
  </ul>
</li>
<li><strong>Prefijos de repeticion o movimiento:</strong>
  <ul>
  <li><em>re-:</em> rehacer (hacer otra vez), releer, reconstruir, reforestar</li>
  <li><em>retro-:</em> retroceder (ir hacia atras), retrospectiva</li>
  </ul>
</li>
<li><strong>Prefijos de tiempo:</strong>
  <ul>
  <li><em>pre-:</em> predecir (decir antes), prever, prehistoria, prenatal</li>
  <li><em>pos-, post-:</em> posguerra (despues de la guerra), posponer, postoperatorio</li>
  <li><em>ante-:</em> anteayer, antecedente, anteproyecto</li>
  </ul>
</li>
<li><strong>Prefijos de cantidad o grado:</strong>
  <ul>
  <li><em>super-, sobre-:</em> superpoblacion, sobrenatural, sobresalir</li>
  <li><em>sub-, infra-:</em> subterraneo (debajo de tierra), infraestructura, subdesarrollo</li>
  <li><em>multi-, poli-:</em> multicultural, poliglota (muchas lenguas)</li>
  <li><em>mono-, uni-:</em> monologo (un solo hablante), uniforme, unicelular</li>
  <li><em>bi-, di-:</em> bilingue (dos lenguas), dicotomia (division en dos)</li>
  </ul>
</li>
<li><strong>Prefijos de relacion:</strong>
  <ul>
  <li><em>inter-:</em> internacional (entre naciones), interactuar</li>
  <li><em>contra-, anti-:</em> contradecir, antibiotico (contra las bacterias)</li>
  <li><em>co-, con-:</em> cooperar (trabajar juntos), convivir</li>
  </ul>
</li>
</ul>

<strong>Sufijos: pistas sobre la funcion de la palabra</strong>
<ul>
<li><strong>-cion, -sion:</strong> indican accion o resultado: educacion, comprension, decision, produccion</li>
<li><strong>-mente:</strong> convierte adjetivo en adverbio (indica modo): rapidamente, claramente, facilmente</li>
<li><strong>-oso/a:</strong> indica cualidad abundante: hermoso, peligroso, generoso, caudaloso</li>
<li><strong>-ble:</strong> indica posibilidad: posible, probable, increible, admirable</li>
<li><strong>-ista:</strong> indica profesion, creencia o actitud: periodista, optimista, pianista</li>
<li><strong>-idad, -dad:</strong> convierten adjetivo en sustantivo abstracto: felicidad (de feliz), bondad (de bueno), capacidad</li>
<li><strong>-izar, -ificar:</strong> convierten sustantivo/adjetivo en verbo: modernizar, simplificar, clasificar</li>
</ul>

<strong>Raices latinas y griegas frecuentes:</strong>
<ul>
<li><em>bio-:</em> vida (biologia, biografia, biodiversidad)</li>
<li><em>geo-:</em> tierra (geografia, geologia)</li>
<li><em>-logia:</em> estudio de (psicologia, sociologia, tecnologia)</li>
<li><em>-grafia:</em> escritura o descripcion (ortografia, fotografia, biografia)</li>
<li><em>-fobia:</em> miedo (claustrofobia, aracnofobia)</li>
<li><em>-filia:</em> amor o afinidad (bibliofilia, cinefilia)</li>
<li><em>crono-:</em> tiempo (cronologia, cronico, cronometro)</li>
</ul>

<strong>Sinonimos y antonimos: otra forma de evaluar vocabulario</strong>
<ul>
<li>La PAA puede pedirte directamente el sinonimo o antonimo de una palabra</li>
<li>Para sinonimos: busca la palabra que podria reemplazar a la otra SIN cambiar el significado de la oracion</li>
<li>Para antonimos: busca la palabra de significado OPUESTO</li>
<li>Cuidado con los "falsos sinonimos": palabras que suenan parecido pero significan cosas diferentes (ej: "actitud" no es sinonimo de "aptitud")</li>
</ul>

<strong>Vocabulario academico frecuente en la PAA:</strong>
<ul>
<li><em>Efimero:</em> de corta duracion, pasajero (antonimo: permanente, duradero)</li>
<li><em>Prolijo:</em> meticuloso, detallado, cuidadoso</li>
<li><em>Elocuencia:</em> habilidad para hablar de forma persuasiva y expresiva</li>
<li><em>Ecuanimidad:</em> serenidad, imparcialidad, equilibrio emocional</li>
<li><em>Austero:</em> sobrio, sencillo, sin lujos</li>
<li><em>Prolifico:</em> que produce mucho, abundante en creaciones (antonimo: improductivo)</li>
<li><em>Insolito:</em> extraordinario, poco comun, sorprendente</li>
<li><em>Imperturbable:</em> que no se altera, sereno ante cualquier situacion</li>
<li><em>Tenacidad:</em> persistencia, firmeza, constancia</li>
<li><em>Meticulosidad:</em> cuidado extremo en los detalles</li>
</ul>`,
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
        content: `La <strong>idea principal</strong> es el mensaje central que el autor quiere comunicar en un texto o parrafo. Es la columna vertebral del texto: todo lo demas (datos, ejemplos, argumentos) existe para apoyarla, explicarla o demostrarla. Identificar la idea principal es la habilidad mas evaluada en la seccion de comprension lectora de la PAA.

<strong>Diferencia fundamental entre TEMA e IDEA PRINCIPAL:</strong>
<ul>
<li><strong>El tema</strong> responde a: "De que habla el texto?" - Es un concepto general, expresado en una o dos palabras. Ejemplo: "la contaminacion", "la educacion", "el Canal de Panama".</li>
<li><strong>La idea principal</strong> responde a: "Que dice el autor SOBRE ese tema?" - Es una afirmacion completa que se puede expresar en una oracion. Ejemplo: "La contaminacion del agua amenaza la salud publica en America Latina".</li>
<li><strong>Error tipico en la PAA:</strong> confundir el tema con la idea principal. Si la pregunta dice "Cual es la idea principal?", una respuesta como "la contaminacion" es INCORRECTA porque es solo el tema. La respuesta debe ser una oracion completa que diga algo sobre el tema.</li>
</ul>

<strong>Estrategia paso a paso para identificar la idea principal:</strong>
<ol>
<li><strong>Lee las preguntas ANTES del texto.</strong> Esto te permite saber que buscar mientras lees: idea principal? un detalle? una inferencia? Asi tu lectura se vuelve mas eficiente y dirigida.</li>
<li><strong>Haz una lectura rapida (skimming)</strong> para captar el sentido general. No te detengas en cada palabra; busca entender de que habla el texto en su conjunto.</li>
<li><strong>Preguntate:</strong> Si tuviera que resumir todo este texto en UNA sola oracion, cual seria? Esa oracion es la idea principal.</li>
<li><strong>Busca la oracion tematica del parrafo.</strong> La mayoria de los parrafos tienen una oracion que resume la idea central. Las demas oraciones la apoyan.</li>
<li><strong>Verifica tu eleccion:</strong> Todas las demas oraciones del texto, se relacionan con la idea que identificaste? Si alguna no tiene relacion, quiza elegiste una idea secundaria en vez de la principal.</li>
</ol>

<strong>Donde suele estar la idea principal?</strong>
<ul>
<li><strong>Al INICIO del parrafo (metodo deductivo):</strong> Es la ubicacion mas comun. El autor presenta la idea y luego la desarrolla con detalles. Ejemplo: "La contaminacion del agua es un problema grave. [Datos, ejemplos, estadisticas que apoyan esta idea]."</li>
<li><strong>Al FINAL del parrafo (metodo inductivo):</strong> El autor presenta datos y ejemplos primero, y al final llega a la conclusion. Ejemplo: "[Datos, ejemplos]... Por todo esto, la contaminacion del agua es un problema grave."</li>
<li><strong>Al INICIO Y FINAL (metodo enmarcado):</strong> El autor presenta la idea, la desarrolla y la reafirma al final con otras palabras.</li>
<li><strong>Idea principal IMPLICITA:</strong> A veces la idea principal no esta escrita textualmente en ninguna oracion. Debes deducirla del conjunto de ideas secundarias. Es el caso mas dificil.</li>
</ul>

<strong>Ideas secundarias: como distinguirlas</strong>
Las ideas secundarias apoyan, explican, ejemplifican o demuestran la idea principal. Se clasifican en:
<ul>
<li><strong>Datos y estadisticas:</strong> "El 70% del agua del planeta esta contaminada" - son detalles especificos.</li>
<li><strong>Ejemplos:</strong> "Por ejemplo, el rio X tiene niveles toxicos tres veces superiores al limite" - ilustran la idea.</li>
<li><strong>Argumentos:</strong> razones que justifican o respaldan la idea principal.</li>
<li><strong>Descripciones:</strong> detalles que amplian o enriquecen la idea pero no la definen.</li>
</ul>

<strong>La prueba de eliminacion:</strong>
<ul>
<li>Si eliminas la idea principal, el texto pierde sentido porque le falta el eje central.</li>
<li>Si eliminas una idea secundaria, el texto sigue teniendo sentido general, aunque pierde un detalle.</li>
<li>Ejemplo: En un texto sobre beneficios del ejercicio que menciona reducir estres, mejorar salud cardiaca y fortalecer huesos, si eliminas "fortalecer huesos", el texto sigue hablando de los beneficios del ejercicio. Pero si eliminas "el ejercicio tiene multiples beneficios", el texto pierde su sentido central.</li>
</ul>

<strong>Preguntas sobre el mejor titulo:</strong>
<ul>
<li>El titulo correcto refleja la idea principal, no solo el tema.</li>
<li>Un buen titulo no es ni demasiado general (solo el tema) ni demasiado especifico (un detalle).</li>
<li>Ejemplo: Si un texto habla sobre como el turismo genera empleo, promueve cultura y a veces dana el medio ambiente, "El turismo" es demasiado general. "El dano ambiental del turismo" es demasiado especifico. "El turismo: beneficios y desafios" abarca la idea principal completa.</li>
<li><strong>Truco:</strong> descarta titulos que solo mencionen UNO de los aspectos del texto cuando este habla de varios.</li>
</ul>

<strong>Errores comunes en la PAA y como evitarlos:</strong>
<ul>
<li><strong>Elegir un detalle en vez de la idea principal:</strong> Si la respuesta se refiere a un dato especifico mencionado en el texto, probablemente es una idea secundaria.</li>
<li><strong>Elegir una idea demasiado amplia:</strong> Si la respuesta podria aplicarse a muchos textos diferentes y no es especifica del texto que leiste, es demasiado general.</li>
<li><strong>Confundir la opinion del lector con la del autor:</strong> La idea principal es lo que el AUTOR dice, no lo que tu piensas sobre el tema.</li>
<li><strong>No leer todas las opciones:</strong> A veces la primera opcion parece correcta, pero una posterior es mas completa y precisa.</li>
</ul>`,
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
        content: `Una <strong>inferencia</strong> es una conclusion logica que se extrae a partir de la informacion del texto, aunque no este expresada de forma explicita. Inferir es "leer entre lineas": el texto te da pistas y tu debes conectarlas para llegar a una conclusion que el autor sugiere pero no dice directamente. Esta es una de las habilidades de pensamiento critico mas importantes que evalua la PAA.

<strong>Diferencia clave: informacion explicita vs. inferencia</strong>
<ul>
<li><strong>Informacion explicita:</strong> esta escrita directamente en el texto. Ejemplo: "Las ventas crecieron un 200%" - es un dato literal.</li>
<li><strong>Inferencia:</strong> se deduce logicamente de lo que esta escrito. Ejemplo: si el texto dice que las ventas de libros electronicos crecieron 200% mientras las librerias fisicas cerraron un 30%, puedes INFERIR que la tecnologia digital esta cambiando los habitos de lectura. Esto no esta dicho textualmente, pero es una conclusion logica.</li>
<li><strong>Opinion personal:</strong> lo que TU piensas sobre el tema, sin base en el texto. Esto NO es una inferencia valida. Ejemplo: "Los libros electronicos son mejores" es una opinion, no una inferencia.</li>
</ul>

<strong>Tipos de preguntas de inferencia en la PAA:</strong>
<ul>
<li>"Se puede inferir que..." / "Se puede deducir que..."</li>
<li>"El autor sugiere que..." / "El autor implica que..."</li>
<li>"Que se puede concluir del texto?"</li>
<li>"El texto da a entender que..."</li>
<li>"A partir del texto, es valido afirmar que..."</li>
<li>"Cual de las siguientes afirmaciones es compatible con el texto?"</li>
</ul>

<strong>Estrategia sistematica para inferir:</strong>
<ol>
<li><strong>Identifica los hechos explicitos del texto.</strong> Que dice textualmente? Subraya los datos concretos, las afirmaciones directas y las relaciones que el autor establece.</li>
<li><strong>Busca conexiones logicas.</strong> Que se puede deducir de esos datos combinados? Si A causa B, y el texto menciona A, puedes inferir que B ocurrira o esta ocurriendo.</li>
<li><strong>Verifica que tu inferencia tenga BASE EN EL TEXTO.</strong> Preguntate: puedo senalar exactamente que parte del texto apoya esta conclusion? Si no puedes, es una suposicion, no una inferencia.</li>
<li><strong>Aplica la "prueba de lo razonable":</strong> Una buena inferencia es la conclusion mas logica y directa. Si necesitas dar muchos saltos logicos o asumir cosas que el texto no menciona, probablemente no es la respuesta correcta.</li>
<li><strong>Elimina opciones extremas.</strong> Las inferencias validas suelen ser moderadas. Desconfia de opciones con palabras absolutas como "siempre", "nunca", "todos", "ningun", "completamente", "eliminar por completo". El mundo real rara vez es absoluto.</li>
<li><strong>Elimina opciones que contradigan el texto.</strong> Si el texto dice algo positivo sobre un tema, una inferencia negativa probablemente es incorrecta (a menos que haya ironia).</li>
<li><strong>Elimina opciones que vayan MAS ALLA del texto.</strong> Una inferencia debe ser un paso logico, no un salto enorme. Si la opcion dice algo que el texto no permite concluir, es incorrecta.</li>
</ol>

<strong>Tipos de inferencia que evalua la PAA:</strong>

<strong>1. Inferencia de causa-efecto:</strong>
<ul>
<li>El texto presenta una situacion y tu debes inferir la causa o el efecto.</li>
<li>Ejemplo: "Desde que instalaron camaras de seguridad, los robos disminuyeron un 60%." Inferencia valida: Las camaras son efectivas para disuadir robos. Inferencia invalida: Los robos se eliminaron completamente (el texto dice 60%, no 100%).</li>
</ul>

<strong>2. Inferencia de actitud o posicion del autor:</strong>
<ul>
<li>Debes deducir que piensa o siente el autor sobre el tema a partir de las palabras que elige.</li>
<li>Ejemplo: "El candidato prometio reducir impuestos, crear empleos y eliminar la corrupcion - las mismas promesas de los ultimos 20 anos." Inferencia: El autor es esceptico. Las palabras "las mismas promesas de los ultimos 20 anos" sugieren incredulidad.</li>
</ul>

<strong>3. Inferencia de comparacion o relacion:</strong>
<ul>
<li>El texto compara dos cosas y tu debes inferir que implica esa comparacion.</li>
<li>Ejemplo: "Mientras en algunos paises se desperdicia un tercio de los alimentos, en otros millones padecen hambre." Inferencia: Existe un problema de distribucion de alimentos, no de produccion.</li>
</ul>

<strong>4. Inferencia predictiva:</strong>
<ul>
<li>A partir de los datos del texto, debes predecir que podria ocurrir despues.</li>
<li>Ejemplo: Si un texto menciona que una empresa de reciclaje triplico ganancias, puedes inferir que el reciclaje puede ser rentable como negocio (no que TODAS las empresas deberan reciclar).</li>
</ul>

<strong>Trampas comunes en preguntas de inferencia:</strong>
<ul>
<li><strong>La generalizacion excesiva:</strong> El texto habla de UN caso y la opcion dice "TODOS los casos". Ejemplo: "Una empresa de reciclaje gano mucho" no permite concluir que "todas las empresas deberian reciclar".</li>
<li><strong>La conclusion que suena bien pero no tiene apoyo:</strong> Algunas opciones son afirmaciones verdaderas en la vida real pero que el texto no permite concluir.</li>
<li><strong>Confundir correlacion con causalidad:</strong> Si dos cosas ocurren juntas, no significa que una cause la otra. El texto puede mostrar correlacion; ten cuidado con opciones que afirmen causalidad directa sin evidencia.</li>
<li><strong>La opcion parcialmente correcta:</strong> Una opcion puede empezar bien pero terminar con una exageracion. Lee TODA la opcion antes de elegirla.</li>
</ul>

<strong>Lectura critica: evaluar argumentos del texto</strong>
<ul>
<li><strong>Distingue hechos de opiniones:</strong> "La temperatura aumento 1.1 grados" es un hecho. "Debemos actuar ahora" es una opinion.</li>
<li><strong>Identifica la evidencia:</strong> El autor presenta datos, estudios, testimonios o ejemplos para apoyar su argumento?</li>
<li><strong>Detecta sesgos:</strong> El texto solo presenta un lado del argumento? Omite informacion relevante?</li>
<li><strong>Evalua la logica:</strong> Las conclusiones del autor se derivan realmente de los datos que presenta?</li>
</ul>`,
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
        content: `Comprender un texto de forma profunda va mas alla de entender el significado literal de las palabras. Implica identificar <strong>por que</strong> el autor lo escribio (proposito) y <strong>como</strong> se posiciona ante el tema (tono). Estas dos dimensiones son evaluadas constantemente en la PAA porque revelan si el estudiante realmente comprende el texto o solo reconoce informacion superficial.

<strong>PROPOSITO DEL AUTOR: Por que escribe?</strong>

El proposito es la intencion o el objetivo que tiene el autor al crear el texto. Todo texto se escribe con una razon, y reconocerla te ayuda a entender que tipo de informacion buscar.

<strong>1. Informar:</strong>
<ul>
<li>Presenta datos, hechos y cifras de forma objetiva, sin expresar opinion personal.</li>
<li>Usa fuentes verificables: "Segun la OMS...", "Los datos del INEC muestran..."</li>
<li>Lenguaje neutral, sin adjetivos valorativos (no dice "excelente" ni "terrible").</li>
<li>Tipos de texto: noticias, reportes cientificos, articulos enciclopedicos, informes oficiales.</li>
<li>Ejemplo: "La tasa de desempleo disminuyo un 2.3% en el ultimo trimestre segun datos del INEC." - Solo datos, sin opinion.</li>
</ul>

<strong>2. Persuadir:</strong>
<ul>
<li>Busca convencer al lector de adoptar una posicion, opinion o accion.</li>
<li>Usa argumentos logicos, evidencia seleccionada, y a veces apelaciones emocionales.</li>
<li>Suele tener un "llamado a la accion": "Debemos actuar ahora", "Es necesario que...", "Y tu, que esperas?"</li>
<li>Tipos de texto: editoriales, ensayos de opinion, publicidad, discursos politicos, campanas sociales.</li>
<li>Ejemplo: "El cambio climatico ya no es una prediccion: es nuestra realidad. Debemos actuar ahora." - Presenta evidencia y llama a la accion.</li>
<li><strong>Como distinguir informar de persuadir:</strong> Si el texto solo presenta datos = informar. Si presenta datos PARA defender una posicion o convencer = persuadir.</li>
</ul>

<strong>3. Entretener:</strong>
<ul>
<li>Busca generar placer, emocion, diversion o interes en el lector.</li>
<li>Usa lenguaje literario: metaforas, descripciones vividas, dialogo, humor, narrativa.</li>
<li>Tipos de texto: cuentos, novelas, cronicas narrativas, humor, fabulas.</li>
<li>Ejemplo: "Erase una vez, en un reino muy lejano, un dragon que coleccionaba mariposas." - Narrativa fantasiosa con finalidad ludica.</li>
</ul>

<strong>4. Explicar:</strong>
<ul>
<li>Hace comprensible un proceso, concepto o fenomeno paso a paso.</li>
<li>Usa lenguaje claro, secuencial: "primero", "luego", "finalmente".</li>
<li>Tipos de texto: manuales, tutoriales, textos didacticos, guias de instruccion.</li>
<li>Ejemplo: Un manual que explica paso a paso como instalar un programa.</li>
</ul>

<strong>5. Criticar:</strong>
<ul>
<li>Senala defectos, problemas o aspectos negativos de algo.</li>
<li>Usa adjetivos valorativos negativos, contrasta lo ideal con lo real.</li>
<li>Tipos de texto: criticas literarias, resenas, editoriales de denuncia.</li>
<li>Ejemplo: "Las autoridades, como siempre, miran para otro lado." - Critica directa.</li>
</ul>

<strong>TONO DEL TEXTO: Como se siente el autor?</strong>

El tono es la <em>actitud emocional</em> del autor hacia el tema. Se revela a traves de las palabras que elige, los adjetivos que usa y la forma en que presenta la informacion. Identificar el tono es como "escuchar" la voz del autor detras de las palabras.

<strong>Tonos mas frecuentes en la PAA:</strong>

<ul>
<li><strong>Objetivo / Neutral:</strong> Sin emociones ni opiniones personales. Datos puros. Palabras clave: "segun estudios", "los datos indican", "se registraron". No hay adjetivos valorativos.</li>

<li><strong>Ironico / Sarcastico:</strong> El autor dice lo CONTRARIO de lo que realmente piensa. Es el tono mas dificil de detectar. Ejemplo: "Que maravilloso servicio! Solo tardaron tres horas en atenderme y ni siquiera resolvieron mi problema." - Dice "maravilloso" pero la experiencia fue pesima. La ironia usa el contraste entre lo que se dice y lo que se describe.</li>

<li><strong>Nostalgico:</strong> Anoranza por el pasado, recuerdos con carino. Palabras clave: "en aquellos tiempos", "guardo con carino", "solia ser", "recuerdo cuando". Ejemplo: "Las calles empedradas, los vendedores de raspados y el sonido de las campanas... recuerdos que guardo con carino de mi infancia."</li>

<li><strong>Critico:</strong> Desaprobacion, senalamiento de defectos o problemas. El autor no solo informa, sino que juzga negativamente. Palabras clave: "lamentablemente", "es inaceptable", "como siempre" (con ironia), "destruir", "amenazar".</li>

<li><strong>Optimista / Esperanzador:</strong> Vision positiva del futuro, confianza en que las cosas mejoraran. Palabras clave: "lograr", "superar", "construir", "futuro prometedor", "a pesar de los obstaculos".</li>

<li><strong>Pesimista:</strong> Vision negativa, desesperanza, fatalismo. Palabras clave: "no hay solucion", "es inevitable", "estamos condenados", "cada vez peor".</li>

<li><strong>Formal / Academico:</strong> Lenguaje tecnico, serio, preciso. Sin coloquialismos, sin emociones. Tipico de textos cientificos, juridicos o institucionales.</li>

<li><strong>Informal / Coloquial:</strong> Lenguaje cotidiano, cercano, a veces con humor. Tipico de blogs, conversaciones, textos juveniles.</li>

<li><strong>Alarmista:</strong> Busca generar preocupacion o urgencia. Palabras clave: "crisis", "emergencia", "amenaza", "urgente", "catastrofico".</li>

<li><strong>Admirativo:</strong> Expresa admiracion o respeto hacia algo o alguien. Palabras clave: "extraordinario", "impresionante", "logro historico", "admirable".</li>
</ul>

<strong>Estrategia para identificar el tono:</strong>
<ol>
<li><strong>Subraya los adjetivos:</strong> Son positivos (excelente, admirable)? Negativos (terrible, lamentable)? Neutros (registrado, observado)? Los adjetivos revelan la actitud del autor.</li>
<li><strong>Busca opiniones vs. hechos:</strong> Si solo hay hechos, el tono es objetivo. Si hay juicios de valor ("es lamentable que..."), el tono es subjetivo.</li>
<li><strong>Detecta palabras con carga emocional:</strong> "Destruir" tiene mas carga que "modificar". "Lograr" tiene mas carga positiva que "hacer". Estas elecciones revelan la posicion del autor.</li>
<li><strong>Presta atencion a la estructura:</strong> Exclamaciones indican emocion. Preguntas retoricas pueden indicar ironia o critica. El uso de comillas puede indicar distanciamiento o sarcasmo.</li>
<li><strong>Compara lo que se dice con lo que se describe:</strong> Si alguien dice "excelente" pero describe algo malo, es ironia.</li>
</ol>

<strong>La trampa de la ironia en la PAA:</strong>
<ul>
<li>La ironia es el tono mas dificil de detectar porque dice lo contrario de lo que significa.</li>
<li>Pistas de ironia: elogios exagerados sobre algo claramente negativo, uso de "por supuesto" o "naturalmente" antes de algo absurdo, contraste entre lo que se dice y la realidad descrita.</li>
<li>Ejemplo: "Naturalmente, el gobierno respondio con su habitual eficiencia: tres meses despues, todavia no habia respuesta." - "Habitual eficiencia" es ironico porque describe ineficiencia.</li>
</ul>

<strong>Relacion entre proposito y tono:</strong>
<ul>
<li>Un texto informativo suele tener tono objetivo.</li>
<li>Un texto persuasivo puede tener tono apasionado, critico o esperanzador.</li>
<li>Un texto de entretenimiento puede tener tono humoristico, fantasioso o dramatico.</li>
<li>Sin embargo, no siempre coinciden: un texto informativo puede tener un tono ligeramente critico, o un texto persuasivo puede usar un tono aparentemente objetivo para dar mas credibilidad a su argumento.</li>
</ul>`,
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
        content: `Una <strong>analogia</strong> es una relacion de semejanza entre dos pares de palabras. Se presenta un par de palabras con una relacion definida, y tu tarea es encontrar otro par que mantenga EXACTAMENTE la misma relacion. Las analogias evaluan tu capacidad de razonamiento logico y tu comprension de como se relacionan los conceptos entre si.

<strong>Formato en la PAA:</strong> A : B :: C : D (se lee "A es a B como C es a D"). Te dan A:B y debes encontrar el par C:D correcto entre las opciones.

<strong>Los 15 tipos de relaciones analogicas mas comunes en la PAA:</strong>

<strong>1. Sinonimia (palabras con significado similar):</strong>
<ul>
<li>feliz : contento / rapido : veloz / valiente : audaz</li>
<li>La relacion es que ambas palabras significan lo mismo o algo muy parecido.</li>
</ul>

<strong>2. Antonimia (significados opuestos):</strong>
<ul>
<li>frio : caliente / alto : bajo / antiguo : moderno / anciano : joven</li>
<li>Cuidado: la antonimia debe ser del mismo tipo. "Bueno:malo" es antonimia absoluta. "Tibio:caliente" NO es antonimia, es grado de intensidad.</li>
</ul>

<strong>3. Parte - Todo (un elemento que pertenece a un conjunto mayor):</strong>
<ul>
<li>rueda : automovil / dedo : mano / petalo : flor / capitulo : libro</li>
<li>La primera palabra es una PARTE de la segunda.</li>
<li>No confundir con Todo-Parte, donde el orden se invierte.</li>
</ul>

<strong>4. Todo - Parte (el conjunto mayor seguido de su componente):</strong>
<ul>
<li>arbol : rama / casa : habitacion / orquesta : violin</li>
<li>La primera palabra CONTIENE a la segunda.</li>
</ul>

<strong>5. Causa - Efecto:</strong>
<ul>
<li>fuego : humo / lluvia : inundacion / virus : enfermedad / calor : dilatacion</li>
<li>La primera palabra PRODUCE o PROVOCA la segunda.</li>
<li>Cuidado con el orden: "fuego:humo" (causa-efecto) NO es lo mismo que "humo:fuego" (efecto-causa).</li>
</ul>

<strong>6. Objeto - Funcion (para que sirve algo):</strong>
<ul>
<li>martillo : clavar / cuchillo : cortar / lapiz : escribir / telescopio : observar</li>
<li>El primer elemento es una herramienta y el segundo es la accion que realiza.</li>
</ul>

<strong>7. Trabajador - Herramienta (quien usa que):</strong>
<ul>
<li>pintor : pincel / cirujano : bisturi / astronomo : telescopio / fotografo : camara</li>
<li>El primer elemento es un profesional y el segundo es su instrumento de trabajo.</li>
</ul>

<strong>8. Trabajador - Lugar de trabajo:</strong>
<ul>
<li>maestro : escuela / medico : hospital / juez : tribunal / sacerdote : iglesia</li>
<li>El profesional trabaja en ese lugar especifico.</li>
</ul>

<strong>9. Persona - Lugar donde recibe un servicio:</strong>
<ul>
<li>paciente : hospital / estudiante : escuela / reo : prision / huesped : hotel</li>
<li>Similar al anterior pero desde la perspectiva de quien RECIBE el servicio.</li>
</ul>

<strong>10. General - Especifico (categoria - ejemplo):</strong>
<ul>
<li>fruta : manzana / instrumento musical : guitarra / deporte : futbol / mamifero : perro</li>
<li>La primera palabra es la CATEGORIA y la segunda es un EJEMPLO de esa categoria.</li>
</ul>

<strong>11. Materia prima - Producto elaborado:</strong>
<ul>
<li>madera : mesa / leche : queso / uva : vino / trigo : pan / arena : vidrio</li>
<li>El primer elemento se TRANSFORMA para crear el segundo.</li>
</ul>

<strong>12. Grado o Intensidad (de menor a mayor o viceversa):</strong>
<ul>
<li>tibio : caliente / brisa : vendaval / susurro : grito / llovizna : tormenta / molestia : furia</li>
<li>Ambas palabras describen lo mismo pero en diferente intensidad.</li>
<li>El orden importa: el primero es menor intensidad, el segundo es mayor (o viceversa, pero el par respuesta debe mantener el mismo orden).</li>
</ul>

<strong>13. Elemento - Conjunto (individuo - nombre colectivo):</strong>
<ul>
<li>abeja : enjambre / lobo : manada / pez : cardumen / oveja : rebano / soldado : ejercito / estrella : constelacion</li>
<li>El primer elemento es un individuo y el segundo es el nombre del grupo que forman.</li>
</ul>

<strong>14. Cria - Adulto (etapa de desarrollo):</strong>
<ul>
<li>cachorro : perro / renacuajo : rana / potrillo : caballo / larva : mariposa / semilla : arbol</li>
<li>El primer elemento es la fase inicial y el segundo es la fase adulta o final.</li>
</ul>

<strong>15. Representacion - Realidad:</strong>
<ul>
<li>mapa : territorio / plano : edificio / retrato : persona / maqueta : construccion</li>
<li>El primer elemento REPRESENTA al segundo.</li>
</ul>

<strong>Otras relaciones menos frecuentes pero posibles:</strong>
<ul>
<li><strong>Simbolo - Lo que simboliza:</strong> paloma : paz / balanza : justicia / corazon : amor</li>
<li><strong>Instrumento - Lo que mide:</strong> termometro : temperatura / balanza : peso / reloj : tiempo</li>
<li><strong>Expresion - Emocion:</strong> sonrisa : alegria / llanto : tristeza / temblor : miedo</li>
<li><strong>Objeto - Ciencia que lo estudia:</strong> estrella : astronomia / fosil : paleontologia / mente : psicologia</li>
<li><strong>Profesional - Materia de estudio:</strong> abogado : leyes / medico : enfermedades / biologo : seres vivos</li>
</ul>

<strong>Estrategia fundamental:</strong>
<ol>
<li><strong>Identifica la relacion EXACTA</strong> entre las dos primeras palabras. No te conformes con "se relacionan"; define la relacion con precision: "A es PARTE de B", "A CAUSA B", "A es lo OPUESTO de B".</li>
<li><strong>Formula la relacion como una oracion</strong> clara: "El martillo sirve para clavar." "El medico trabaja en el hospital." "La abeja pertenece al enjambre."</li>
<li><strong>Aplica esa MISMA oracion</strong> a cada opcion de respuesta. La correcta encajara perfectamente.</li>
<li><strong>Verifica el ORDEN</strong> de la relacion. Si el par original es parte:todo, la respuesta tambien debe ser parte:todo, NO todo:parte.</li>
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
        content: `Resolver analogias requiere un metodo sistematico y riguroso. No basta con encontrar una relacion vaga entre las palabras; debes identificar la relacion EXACTA y verificar que se mantenga en la respuesta. Aqui tienes las estrategias y tecnicas mas efectivas, asi como los errores que debes evitar.

<strong>Metodo paso a paso detallado:</strong>
<ol>
<li><strong>Lee el par base con atencion.</strong> Antes de ver las opciones, dedica unos segundos a entender las dos palabras. Conoces su significado? Si una palabra es ambigua (tiene varios significados), considera todas las posibilidades.</li>
<li><strong>Identifica la relacion y formulala como oracion.</strong> Crea una "oracion puente" que conecte las dos palabras de forma precisa. No digas solo "se relacionan"; di COMO se relacionan: "A es parte de B", "A sirve para B", "A es la cria de B", "A mide B".</li>
<li><strong>Aplica la misma oracion a cada opcion.</strong> Sustituye las palabras del par base por las de cada opcion. La respuesta correcta debe encajar perfectamente en la misma estructura.</li>
<li><strong>Elimina opciones que no encajen.</strong> Si la oracion no funciona con una opcion, descartala inmediatamente.</li>
<li><strong>Si quedan varias opciones, PRECISA la relacion.</strong> Haz la oracion puente mas especifica. Por ejemplo, si "se relacionan con el trabajo" es demasiado vago, cambialo por "X es la herramienta principal de Y".</li>
<li><strong>Verifica el orden.</strong> Asegurate de que la direccion de la relacion sea la misma. Si en el par base A es la causa y B el efecto, en la respuesta tambien debe ser causa:efecto, no efecto:causa.</li>
</ol>

<strong>LA TECNICA DE LA ORACION PUENTE (la mas importante):</strong>

Esta es la tecnica mas poderosa para resolver analogias. Consiste en crear una oracion corta y clara que exprese la relacion entre las dos palabras del par base, y luego verificar que la misma oracion funcione con la respuesta.

<strong>Ejemplos detallados de la oracion puente:</strong>
<ul>
<li>MARTILLO : CLAVO -> "El MARTILLO sirve para introducir el CLAVO"
  Entonces: DESTORNILLADOR : ? -> "El DESTORNILLADOR sirve para introducir el ?" -> TORNILLO</li>
<li>PINTOR : CUADRO -> "El PINTOR crea el CUADRO"
  Entonces: ESCRITOR : ? -> "El ESCRITOR crea el ?" -> LIBRO (no "tinta", que es herramienta; no "biblioteca", que es lugar)</li>
<li>HAMBRE : COMER -> "El HAMBRE se satisface al COMER"
  Entonces: SED : ? -> "La SED se satisface al ?" -> BEBER (no "agua", que es el objeto, no la accion)</li>
<li>CACHORRO : PERRO -> "El CACHORRO es la cria del PERRO"
  Entonces: RENACUAJO : ? -> "El RENACUAJO es la cria de la ?" -> RANA</li>
<li>TERMOMETRO : TEMPERATURA -> "El TERMOMETRO mide la TEMPERATURA"
  Entonces: BALANZA : ? -> "La BALANZA mide el ?" -> PESO</li>
</ul>

<strong>ERRORES COMUNES Y COMO EVITARLOS:</strong>

<strong>1. Relacion invertida:</strong>
<ul>
<li>Confundir el orden de la relacion es uno de los errores mas frecuentes.</li>
<li>PERRO : CACHORRO (adulto:cria) NO es lo mismo que CACHORRO : PERRO (cria:adulto).</li>
<li>MANO : DEDO (todo:parte) NO es lo mismo que DEDO : MANO (parte:todo).</li>
<li><strong>Como evitarlo:</strong> Antes de elegir, verifica que el primer elemento de tu respuesta tenga el mismo ROL que el primer elemento del par base.</li>
</ul>

<strong>2. Asociacion libre (la trampa mas comun):</strong>
<ul>
<li>Elegir una opcion simplemente porque las palabras "se relacionan" de alguna manera, sin que la relacion sea la MISMA que la del par base.</li>
<li>Ejemplo: TELESCOPIO : ESTRELLAS -> MICROSCOPIO : ?
  Error: elegir "laboratorio" porque el microscopio "se usa en un laboratorio". Pero la relacion correcta es instrumento:lo que permite observar -> CELULAS.</li>
<li><strong>Como evitarlo:</strong> Usa la oracion puente. "El telescopio permite observar las estrellas." "El microscopio permite observar las celulas." No encajaria "El microscopio permite observar el laboratorio."</li>
</ul>

<strong>3. Relacion demasiado general:</strong>
<ul>
<li>Identificar una relacion tan amplia que varias opciones parecen correctas.</li>
<li>Ejemplo: MEDICO : HOSPITAL. Si solo dices "se relacionan con la salud", varias opciones podrian funcionar.</li>
<li><strong>Como evitarlo:</strong> Precisa la relacion: "El medico TRABAJA en el hospital". Esto descarta opciones como "paciente" (que no trabaja ahi) o "medicina" (que no es un lugar).</li>
</ul>

<strong>4. Confundir la relacion con una caracteristica:</strong>
<ul>
<li>Ejemplo: LECHE : QUESO. La relacion NO es que "ambos son lacteos" (eso seria una caracteristica en comun). La relacion es materia prima -> producto elaborado.</li>
<li>Entonces: UVA : ? -> VINO (materia prima -> producto), NO "fruta" (categoria).</li>
</ul>

<strong>5. No verificar con TODAS las opciones:</strong>
<ul>
<li>A veces la primera opcion que parece correcta no es la mejor. Verifica todas antes de elegir.</li>
<li>La respuesta correcta es la que tiene la relacion MAS PRECISA y EXACTA, no solo una relacion vaga.</li>
</ul>

<strong>ESTRATEGIA PARA PREGUNTAS DIFICILES:</strong>

Cuando dos opciones parecen funcionar:
<ol>
<li>Haz la oracion puente mas ESPECIFICA. Anade detalles que limiten la relacion.</li>
<li>Considera la NATURALEZA de las palabras: son del mismo campo semantico? Tienen la misma categoria gramatical (sustantivo-sustantivo, adjetivo-adjetivo)?</li>
<li>Verifica si una opcion mantiene un GRADO DE ESPECIFICIDAD similar. Si el par base usa palabras concretas, la respuesta tambien deberia usarlas.</li>
<li>En caso de duda, elige la opcion cuya relacion sea MAS PARALELA al par base en todos los aspectos.</li>
</ol>

<strong>EJERCICIO MENTAL: practica con este patron</strong>
Ante cualquier par de palabras, entrena preguntandote:
<ul>
<li>Son sinonimos o antonimos?</li>
<li>Uno es parte del otro?</li>
<li>Uno causa al otro?</li>
<li>Uno es herramienta del otro?</li>
<li>Uno es el lugar del otro?</li>
<li>Uno es una categoria y el otro un ejemplo?</li>
<li>Representan diferentes grados de intensidad?</li>
<li>Uno se transforma en el otro?</li>
</ul>
Con esta lista mental de preguntas, podras clasificar rapidamente cualquier relacion analogica.`,
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
        content: `La <strong>concordancia</strong> es la correspondencia obligatoria que debe existir entre las partes de la oracion en genero, numero y persona. Es uno de los pilares de la gramatica espanola y la PAA la evalua extensamente porque los errores de concordancia son muy comunes en el habla cotidiana. Dominar la concordancia te permite no solo responder correctamente en el examen, sino escribir y hablar con precision.

<strong>I. CONCORDANCIA SUJETO - VERBO (numero y persona)</strong>

La regla basica es simple: el verbo debe coincidir en numero (singular/plural) y persona (primera/segunda/tercera) con el sujeto de la oracion.

<strong>Regla basica:</strong>
<ul>
<li>"Los estudiantes <strong>estudian</strong>" (sujeto plural -> verbo plural) CORRECTO</li>
<li>"Los estudiantes <strong>estudia</strong>" (sujeto plural -> verbo singular) INCORRECTO</li>
<li>"El estudiante <strong>estudia</strong>" (sujeto singular -> verbo singular) CORRECTO</li>
</ul>

<strong>Casos problematicos que la PAA evalua:</strong>

<strong>a) Sustantivos colectivos (grupo, equipo, mayoria, gente, pueblo, multitud):</strong>
<ul>
<li>Los sustantivos colectivos son SINGULARES aunque se refieran a muchas personas.</li>
<li>"La <strong>gente</strong> piensa" CORRECTO (no "la gente piensan")</li>
<li>"El <strong>equipo</strong> gano el partido" CORRECTO (no "el equipo ganaron")</li>
<li>"La <strong>mayoria</strong> de los alumnos aprobo" CORRECTO (el sujeto es "la mayoria", singular)</li>
<li>"Un <strong>grupo</strong> de estudiantes llego tarde" CORRECTO (el sujeto es "un grupo", singular)</li>
<li><strong>Trampa frecuente:</strong> "La mayoria de los alumnos aprobaron" suena natural en el habla, pero gramaticalmente el verbo debe concordar con "la mayoria" (singular), no con "los alumnos".</li>
</ul>

<strong>b) Sujeto compuesto (dos o mas sujetos unidos por "y"):</strong>
<ul>
<li>"Juan <strong>y</strong> Maria <strong>fueron</strong> al cine" CORRECTO (sujeto compuesto = plural)</li>
<li>"Juan y Maria <strong>fue</strong> al cine" INCORRECTO</li>
<li>"Ni tu ni yo <strong>sabemos</strong> la respuesta" CORRECTO (ni...ni con yo incluido = nosotros = primera persona plural)</li>
<li>"Tu y el <strong>vendran</strong> manana" CORRECTO (tu + el = ustedes/ellos = tercera persona plural)</li>
</ul>

<strong>c) Sujeto pospuesto (el sujeto va despues del verbo):</strong>
<ul>
<li>"En la mesa <strong>estaban</strong> las llaves" CORRECTO (el sujeto es "las llaves", no "la mesa")</li>
<li>"Llegaron los invitados" CORRECTO (el sujeto es "los invitados")</li>
<li><strong>Truco:</strong> Para encontrar el sujeto real, pregunta QUIEN realiza la accion del verbo. "Que estaban? Las llaves." "Quienes llegaron? Los invitados."</li>
</ul>

<strong>d) El verbo HABER impersonal:</strong>
<ul>
<li>Cuando "haber" se usa en sentido impersonal (= existir), SIEMPRE va en singular, sin importar lo que le siga.</li>
<li>"<strong>Habia</strong> muchas personas en la fiesta" CORRECTO</li>
<li>"<strong>Habian</strong> muchas personas en la fiesta" INCORRECTO (este es uno de los errores mas comunes)</li>
<li>"<strong>Hubo</strong> problemas" CORRECTO / "<strong>Hubieron</strong> problemas" INCORRECTO</li>
<li>"<strong>Hay</strong> tres opciones" CORRECTO / "<strong>Han habido</strong> quejas" INCORRECTO -> "Ha habido quejas"</li>
<li><strong>Atencion:</strong> "Habemos muchos estudiantes" es INCORRECTO. Lo correcto es "Somos muchos estudiantes" o "Hay muchos estudiantes".</li>
</ul>

<strong>II. CONCORDANCIA SUSTANTIVO - ADJETIVO (genero y numero)</strong>

El adjetivo debe concordar en genero (masculino/femenino) y numero (singular/plural) con el sustantivo al que modifica.

<ul>
<li>"Las casas <strong>blancas</strong>" CORRECTO (femenino plural + femenino plural)</li>
<li>"Las casas <strong>blanco</strong>" INCORRECTO</li>
<li>"Las <strong>primeras</strong> ministras <strong>europeas</strong>" CORRECTO (todo en femenino plural)</li>
<li>"Los ninos <strong>inteligentes</strong>" CORRECTO (masculino plural + plural)</li>
</ul>

<strong>Casos especiales:</strong>
<ul>
<li>Si el adjetivo modifica a dos sustantivos de diferente genero, va en MASCULINO PLURAL: "La mesa y el sillon eran <strong>nuevos</strong>".</li>
<li>Adjetivos invariables en genero: "inteligente", "grande", "fuerte", "util" se usan igual para masculino y femenino.</li>
</ul>

<strong>III. CONCORDANCIA DE PRONOMBRES</strong>

<strong>a) Pronombres de complemento indirecto (le/les):</strong>
<ul>
<li>"<strong>Le</strong> dije a Pedro que viniera" CORRECTO ("le" = singular, "a Pedro" = singular)</li>
<li>"<strong>Les</strong> dije a los ninos que se calmaran" CORRECTO ("les" = plural, "a los ninos" = plural)</li>
<li>"<strong>Le</strong> dije a los ninos..." INCORRECTO (solecismo: "le" es singular pero "los ninos" es plural)</li>
</ul>

<strong>b) Leismo, laismo, loismo:</strong>
<ul>
<li><strong>Leismo:</strong> usar "le" en lugar de "lo/la" como complemento directo. "Le vi en la calle" en vez de "Lo vi en la calle".</li>
<li><strong>Laismo:</strong> usar "la" en lugar de "le" como complemento indirecto. "La dije la verdad" en vez de "Le dije la verdad".</li>
<li><strong>Loismo:</strong> usar "lo" en lugar de "le" como complemento indirecto. "Lo dije que viniera" en vez de "Le dije que viniera".</li>
<li><strong>Truco para distinguirlos:</strong> Si puedes reemplazar por "a el/ella" = complemento indirecto = LE/LES. Si puedes reemplazar por "eso" o "a esa persona directamente" = complemento directo = LO/LA/LOS/LAS.</li>
</ul>

<strong>IV. DEQUEISMO Y QUEISMO</strong>

Estos son dos de los errores mas evaluados en la PAA. Entenderlos bien te garantiza puntos.

<strong>Dequeismo (usar "de que" cuando solo debe ir "que"):</strong>
<ul>
<li>"Pienso <strong>de que</strong> es correcto" INCORRECTO -> "Pienso <strong>que</strong> es correcto"</li>
<li>"Creo <strong>de que</strong> va a llover" INCORRECTO -> "Creo <strong>que</strong> va a llover"</li>
<li>"Dice <strong>de que</strong> vendran" INCORRECTO -> "Dice <strong>que</strong> vendran"</li>
<li>Verbos que NUNCA llevan "de": pensar, creer, decir, opinar, considerar, afirmar, asegurar, negar</li>
</ul>

<strong>Queismo (omitir "de" cuando debe ir "de que"):</strong>
<ul>
<li>"Estoy seguro <strong>que</strong> vendra" INCORRECTO -> "Estoy seguro <strong>de que</strong> vendra"</li>
<li>"Me alegro <strong>que</strong> estes bien" INCORRECTO -> "Me alegro <strong>de que</strong> estes bien"</li>
<li>"Me entere <strong>que</strong> ganamos" INCORRECTO -> "Me entere <strong>de que</strong> ganamos"</li>
<li>Expresiones que SI llevan "de que": estar seguro de que, alegrarse de que, enterarse de que, convencerse de que, acordarse de que, darse cuenta de que, insistir en que, confiar en que</li>
</ul>

<strong>EL TRUCO DEL "ESO" (metodo infalible):</strong>
<ol>
<li>Reemplaza toda la clausula subordinada (desde "que" hasta el final) por la palabra "eso".</li>
<li>Si suena bien SIN "de", no lleva "de": "Pienso eso" (correcto) -> "Pienso que..."</li>
<li>Si suena bien CON "de", lleva "de": "Estoy seguro de eso" (correcto) -> "Estoy seguro de que..."</li>
<li>Ejemplos:
  <ul>
  <li>"Creo eso" (correcto, no "creo de eso") -> "Creo que..." (sin "de")</li>
  <li>"Me entere de eso" (correcto, no "me entere eso") -> "Me entere de que..." (con "de")</li>
  <li>"Dice eso" (correcto) -> "Dice que..."</li>
  <li>"Se alegro de eso" (correcto) -> "Se alegro de que..."</li>
  </ul>
</li>
</ol>

<strong>V. ESTRUCTURA DE LA ORACION</strong>

La oracion simple se compone de:
<ul>
<li><strong>Sujeto:</strong> quien realiza la accion o de quien se habla. Responde a "quien?" o "que cosa?"</li>
<li><strong>Verbo (predicado):</strong> la accion o estado. Es el nucleo de la oracion.</li>
<li><strong>Complemento directo (CD):</strong> recibe directamente la accion. Responde a "que?" o "a quien?" Se sustituye por lo/la/los/las. "Compre <strong>un libro</strong>" -> "Lo compre".</li>
<li><strong>Complemento indirecto (CI):</strong> recibe el beneficio o perjuicio de la accion. Responde a "a quien?" o "para quien?" Se sustituye por le/les. "Di el libro <strong>a Maria</strong>" -> "Le di el libro".</li>
<li><strong>Complemento circunstancial (CC):</strong> indica las circunstancias (lugar, tiempo, modo, causa). "Estudio <strong>en la biblioteca</strong>" (CC de lugar). "Llego <strong>ayer</strong>" (CC de tiempo).</li>
</ul>

<strong>Errores de estructura que evalua la PAA:</strong>
<ul>
<li>Sujeto y verbo separados por coma incorrectamente: "Los alumnos, estudiaron" es INCORRECTO (la coma no va entre sujeto y verbo directo).</li>
<li>Complemento directo con "a" innecesario: "Tiene a muchos libros" INCORRECTO -> "Tiene muchos libros" (la "a" solo se usa con CD de persona).</li>
<li>Frases ambiguas donde no queda claro cual es el sujeto ni cual es el complemento.</li>
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
        content: `La puntuacion y la ortografia son fundamentales para la comunicacion escrita. En la PAA, se evalua tu conocimiento de las reglas de acentuacion, el uso correcto de signos de puntuacion y la escritura adecuada de palabras. Estos temas parecen simples pero tienen muchas reglas y excepciones que debes dominar.

<strong>I. LA COMA (,) - Reglas detalladas</strong>

La coma es el signo de puntuacion mas complejo porque tiene muchos usos diferentes. Conocerlos te permite tanto puntuar bien como identificar errores en la PAA.

<strong>a) Coma enumerativa:</strong>
<ul>
<li>Separa elementos de una lista. Antes del ultimo elemento se pone "y" (o "e", "o", "u") en vez de coma.</li>
<li>"Compre pan, leche, huevos y arroz." CORRECTO</li>
<li>"Compre pan, leche, huevos, y arroz." INCORRECTO en espanol (a diferencia del ingles, no se usa coma antes de "y" en una lista simple)</li>
</ul>

<strong>b) Coma vocativa (para llamar a alguien):</strong>
<ul>
<li>Cuando te diriges a alguien por su nombre o titulo, se separa con coma.</li>
<li>"Maria, ven aqui." / "Ven aqui, Maria." / "Dime, Maria, que piensas."</li>
<li>Sin coma cambia el significado: "Vamos a comer, ninos" (les habla a los ninos) vs. "Vamos a comer ninos" (significado literal muy diferente).</li>
</ul>

<strong>c) Coma de inciso explicativo:</strong>
<ul>
<li>Encierra informacion adicional que se puede eliminar sin alterar el sentido basico de la oracion.</li>
<li>"Panama, la capital, es una ciudad moderna." - "La capital" es un inciso explicativo.</li>
<li>"Maria, mi mejor amiga, viajo a Colombia." - "Mi mejor amiga" es el inciso.</li>
<li>"Pedro, que es mi vecino, trabaja en el banco." - La clausula explicativa va entre comas.</li>
<li><strong>Truco:</strong> Si puedes quitar la frase entre comas y la oracion sigue teniendo sentido, las comas estan bien usadas.</li>
</ul>

<strong>d) Coma despues de frase introductoria:</strong>
<ul>
<li>Cuando la oracion comienza con una frase subordinada, adverbio o complemento circunstancial, se pone coma antes de la clausula principal.</li>
<li>"Despues de la reunion, fuimos a almorzar."</li>
<li>"Aunque llovia, salimos a caminar."</li>
<li>"Desafortunadamente, el proyecto fracaso."</li>
<li>"En la ciudad de Panama, hay muchos rascacielos."</li>
</ul>

<strong>e) Coma antes de conectores:</strong>
<ul>
<li>Los conectores como "sin embargo", "ademas", "por lo tanto", "es decir", "no obstante", "en cambio" van precedidos de coma (o punto y coma) y seguidos de coma.</li>
<li>"Estudio mucho; sin embargo, no aprobo."</li>
<li>"Es inteligente, ademas, es muy trabajador."</li>
</ul>

<strong>f) LA REGLA DE ORO - La coma NUNCA va entre sujeto y verbo:</strong>
<ul>
<li>"Los alumnos estudiaron para el examen." CORRECTO</li>
<li>"Los alumnos, estudiaron para el examen." INCORRECTO</li>
<li>"La mayoria de los jovenes de esta generacion piensa diferente." CORRECTO (no hay coma antes de "piensa" aunque el sujeto sea largo)</li>
<li>Esta regla es una de las mas evaluadas en la PAA.</li>
</ul>

<strong>II. PUNTO Y COMA (;)</strong>
<ul>
<li><strong>Separa oraciones independientes pero relacionadas:</strong> "Estudio mucho; aprobo el examen." (Ambas son oraciones completas que podrian llevar punto, pero estan muy relacionadas.)</li>
<li><strong>Va antes de conectores adversativos o consecutivos cuando unen oraciones independientes:</strong> "Llego tarde; sin embargo, completo el trabajo." / "Llovio toda la noche; por consiguiente, las calles amanecieron inundadas."</li>
<li><strong>Separa elementos de una lista que ya contienen comas:</strong> "Vinieron Juan, de Panama; Maria, de Colombia; y Pedro, de Costa Rica."</li>
<li><strong>Diferencia entre punto y coma vs. coma:</strong> La coma separa elementos dentro de una oracion. El punto y coma separa oraciones completas que estan muy relacionadas.</li>
</ul>

<strong>III. DOS PUNTOS (:)</strong>
<ul>
<li><strong>Antes de una enumeracion anunciada:</strong> "Necesito tres cosas: paciencia, dedicacion y esfuerzo."</li>
<li><strong>Antes de una explicacion o consecuencia:</strong> "No pudo asistir: estaba enfermo."</li>
<li><strong>Despues de un saludo en cartas:</strong> "Estimado profesor:"</li>
<li><strong>Para introducir una cita textual:</strong> "El autor afirmo: [cita]"</li>
<li><strong>Error comun:</strong> No se ponen dos puntos entre un verbo y su complemento directo. "Los colores son: rojo, azul y verde" es debatido; muchos gramaticos prefieren "Los colores son rojo, azul y verde" (sin dos puntos).</li>
</ul>

<strong>IV. REGLAS DE ACENTUACION</strong>

Las reglas de acentuacion en espanol son sistematicas y predecibles. Si las dominas, nunca dudaras donde va la tilde.

<strong>Clasificacion de palabras segun la silaba tonica:</strong>

<strong>a) Palabras AGUDAS (acento en la ULTIMA silaba):</strong>
<ul>
<li>Llevan tilde si terminan en <strong>N, S o vocal</strong>.</li>
<li>CON tilde: cancion (can-CION, termina en N), cafe (ca-FE, termina en vocal), compas (com-PAS, termina en S), ademas, despues, razon</li>
<li>SIN tilde: papel (pa-PEL, termina en L), reloj (re-LOJ, termina en J), ciudad, pared, actriz</li>
<li>Regla mnemotecnica: agudas con N, S o vocal -> SI tilde</li>
</ul>

<strong>b) Palabras GRAVES o LLANAS (acento en la PENULTIMA silaba):</strong>
<ul>
<li>Llevan tilde si <strong>NO terminan en N, S o vocal</strong> (regla opuesta a las agudas).</li>
<li>CON tilde: arbol (AR-bol, termina en L), dificil (di-FI-cil, termina en L), carcel, azucar, lapiz, facil, angel</li>
<li>SIN tilde: casa (CA-sa, termina en vocal), examen (e-XA-men, termina en N), libro, mesa, joven, martes</li>
<li>La mayoria de las palabras en espanol son graves terminadas en vocal, N o S, por eso no llevan tilde (libro, mesa, dicen, lunes).</li>
</ul>

<strong>c) Palabras ESDRUJULAS (acento en la ANTEPENULTIMA silaba):</strong>
<ul>
<li><strong>SIEMPRE</strong> llevan tilde. Sin excepciones.</li>
<li>Ejemplos: telefono (te-LE-fo-no), matematicas, musica, examenes, logica, comodo, pajaro, medico, gramatica, silaba, esdrujula</li>
<li>Esta es la regla mas facil: si es esdrujula, lleva tilde SIEMPRE.</li>
</ul>

<strong>d) Palabras SOBREESDRUJULAS (acento antes de la antepenultima):</strong>
<ul>
<li><strong>SIEMPRE</strong> llevan tilde.</li>
<li>Generalmente son verbos con pronombres enclticos: diciendoselo, entregamelo, preparandomelo</li>
</ul>

<strong>V. CASOS ESPECIALES DE ACENTUACION</strong>

<strong>a) Tilde diacritica (para distinguir palabras que se escriben igual):</strong>
<ul>
<li><strong>el</strong> (articulo: "el libro") vs. <strong>el</strong> (pronombre: "el dijo que si")</li>
<li><strong>tu</strong> (posesivo: "tu casa") vs. <strong>tu</strong> (pronombre: "tu eres inteligente")</li>
<li><strong>mi</strong> (posesivo: "mi perro") vs. <strong>mi</strong> (pronombre: "para mi")</li>
<li><strong>si</strong> (condicional: "si llueve") vs. <strong>si</strong> (afirmacion: "dijo que si")</li>
<li><strong>se</strong> (pronombre: "se fue") vs. <strong>se</strong> (verbo saber/ser: "yo se la respuesta")</li>
<li><strong>te</strong> (pronombre: "te quiero") vs. <strong>te</strong> (sustantivo: "una taza de te")</li>
<li><strong>mas</strong> (conjuncion = pero: "lo intento, mas no pudo") vs. <strong>mas</strong> (adverbio de cantidad: "quiero mas")</li>
<li><strong>de</strong> (preposicion) vs. <strong>de</strong> (verbo dar: "quiero que me de")</li>
</ul>

<strong>b) Hiato (dos vocales que se pronuncian en silabas separadas):</strong>
<ul>
<li>Cuando una vocal cerrada (i, u) tonica esta junto a una vocal abierta (a, e, o), se forma hiato y la vocal cerrada SIEMPRE lleva tilde, sin importar las reglas generales.</li>
<li>Ejemplos: dia (di-a), rio (ri-o), raiz (ra-iz), pais (pa-is), maiz, oir, baul, reir</li>
<li>Esto rompe las reglas normales: "dia" termina en vocal y es aguda, pero lleva tilde por hiato.</li>
</ul>

<strong>c) Diptongo (dos vocales en la MISMA silaba):</strong>
<ul>
<li>Se forma con vocal abierta + vocal cerrada atona, o dos vocales cerradas: "ciudad" (ciu-dad), "bueno" (bue-no), "viaje" (via-je)</li>
<li>Los diptongos siguen las reglas generales de acentuacion. Si necesitan tilde, se pone sobre la vocal abierta: "cancion" (can-cion), "despues" (des-pues).</li>
</ul>

<strong>VI. REGLAS ORTOGRAFICAS FRECUENTES EN LA PAA</strong>

<strong>a) Uso de B y V:</strong>
<ul>
<li>Se escribe B despues de M: "cambio", "tambien", "hambre"</li>
<li>Se escribe V despues de N: "enviar", "invierno", "convencer"</li>
<li>Se escribe B en las terminaciones -aba, -abas (preterito imperfecto): "cantaba", "jugabas"</li>
<li>Se escribe B antes de consonante: "obtener", "objeto", "abstracto"</li>
</ul>

<strong>b) Uso de S, C y Z:</strong>
<ul>
<li>Los diminutivos en -cito, -cita: "cochecito", "florecita"</li>
<li>Las terminaciones -cion corresponden a palabras con T en su familia: "cancion" (de "canto"), "produccion" (de "producto")</li>
<li>Las terminaciones -sion corresponden a palabras con S en su familia: "comprension" (de "compresa"), "decision" (de "deciso" - latin)</li>
<li>Se escribe Z antes de A, O, U: "zapato", "zona", "azucar"</li>
<li>Se escribe C antes de E, I: "cielo", "cena"</li>
</ul>

<strong>c) Uso de G y J:</strong>
<ul>
<li>Se escribe G en las terminaciones -ger, -gir: "proteger", "dirigir" (excepciones: tejer, crujir)</li>
<li>Se escribe J en las terminaciones -jero, -jera, -jeria: "cajero", "relojeria", "extranjero"</li>
<li>Se escribe G en las terminaciones -logia, -logico: "tecnologia", "biologico"</li>
</ul>

<strong>d) Uso de la H:</strong>
<ul>
<li>Se escribe H en las formas del verbo "haber": "he", "ha", "han", "hay", "habia"</li>
<li>Se escribe H en las formas del verbo "hacer": "hago", "hice", "hecho"</li>
<li>Diferencia clave: "hecho" (del verbo hacer) vs. "echo" (del verbo echar)</li>
<li>Se escribe H antes de los diptongos "ue", "ie": "huevo", "hielo", "hueso", "hierba"</li>
</ul>

<strong>e) Palabras que generan confusion frecuente:</strong>
<ul>
<li>"haber" (verbo) vs. "a ver" (preposicion + verbo ver)</li>
<li>"hay" (verbo haber) vs. "ahi" (lugar) vs. "ay" (exclamacion)</li>
<li>"haya" (verbo haber) vs. "halla" (verbo hallar = encontrar) vs. "alla" (lugar)</li>
<li>"a" (preposicion) vs. "ha" (verbo haber): "ha llegado" vs. "a casa"</li>
<li>"vaya" (verbo ir) vs. "valla" (cerca/barrera) vs. "baya" (fruto)</li>
<li>"sino" (conjuncion adversativa: "no es rojo sino azul") vs. "si no" (condicional + negacion: "si no vienes, ire solo")</li>
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
        content: `La <strong>coherencia</strong> y la <strong>cohesion</strong> son dos propiedades fundamentales de todo texto bien escrito. Aunque se mencionan juntas, son conceptos diferentes que debes entender por separado. La PAA evalua ambos aspectos a traves de ejercicios de seleccion de conectores, ordenamiento de oraciones e identificacion de elementos que rompen la unidad del texto.

<strong>COHERENCIA: el sentido logico del texto</strong>

La coherencia se refiere a que las ideas del texto tengan sentido, orden logico y unidad tematica. Un texto coherente:
<ul>
<li>Tiene un tema central claro y todas las oraciones se relacionan con el.</li>
<li>Las ideas siguen un orden logico (cronologico, de lo general a lo particular, causa-efecto, problema-solucion).</li>
<li>No hay contradicciones internas.</li>
<li>No hay oraciones fuera de tema que rompan la unidad.</li>
</ul>

<strong>Ejemplo de texto INCOHERENTE:</strong>
"El Canal de Panama es una obra de ingenieria impresionante. Conecta el Atlantico con el Pacifico. La gastronomia panamena incluye el sancocho. Su construccion tomo mas de diez anos."
La oracion sobre gastronomia ROMPE la coherencia porque no tiene relacion con el tema del Canal.

<strong>Como detectar incoherencia en la PAA:</strong>
<ul>
<li>Busca la oracion que NO se relaciona con el tema principal del parrafo.</li>
<li>Preguntate: esta oracion apoya, ejemplifica o desarrolla la idea principal? Si la respuesta es no, esa es la oracion incoherente.</li>
<li>A veces la oracion incoherente puede tener una relacion MUY lejana con el tema (ambas hablan de Panama, por ejemplo), pero no con la idea especifica del parrafo.</li>
</ul>

<strong>COHESION: las conexiones entre oraciones</strong>

La cohesion se refiere a los mecanismos linguisticos que conectan las oraciones entre si para que el texto fluya de manera natural. Sin cohesion, el texto seria una lista de oraciones aisladas.

<strong>Mecanismos de cohesion:</strong>

<strong>1. Conectores textuales (nexos)</strong>

Los conectores son palabras o frases que establecen una relacion logica entre oraciones. Son la herramienta de cohesion mas evaluada en la PAA.

<strong>a) Conectores de ADICION (anaden informacion):</strong>
<ul>
<li>ademas, tambien, asimismo, igualmente, incluso, del mismo modo, no solo... sino que tambien, a su vez, por otro lado</li>
<li>Uso: "La deforestacion destruye habitats. <strong>Ademas</strong>, provoca erosion del suelo."</li>
<li>"No solo aprobo el examen, <strong>sino que tambien</strong> obtuvo la mejor calificacion."</li>
</ul>

<strong>b) Conectores de CONTRASTE (oponen o matizan ideas):</strong>
<ul>
<li>pero, sin embargo, no obstante, aunque, a pesar de, por el contrario, en cambio, mientras que, a diferencia de, con todo</li>
<li>Uso: "El equipo jugo muy bien, <strong>pero</strong> no logro ganar."</li>
<li>"El proyecto fue exitoso <strong>a pesar de</strong> la falta de recursos."</li>
<li><strong>Muy importante en la PAA:</strong> Los conectores de contraste son los mas frecuentes porque requieren entender que dos ideas van en direcciones opuestas.</li>
</ul>

<strong>c) Conectores de CAUSA (explican por que):</strong>
<ul>
<li>porque, ya que, puesto que, debido a que, dado que, pues, a causa de</li>
<li>Uso: "No pudo asistir <strong>porque</strong> estaba enfermo."</li>
<li>"<strong>Debido a</strong> la lluvia, el evento fue cancelado."</li>
</ul>

<strong>d) Conectores de CONSECUENCIA (expresan el resultado):</strong>
<ul>
<li>por lo tanto, por consiguiente, en consecuencia, asi que, entonces, de modo que, de ahi que, como resultado, por eso, por esta razon</li>
<li>Uso: "No tenemos presupuesto; <strong>por lo tanto</strong>, debemos buscar alternativas."</li>
<li>"Llovio toda la noche; <strong>por consiguiente</strong>, las calles amanecieron inundadas."</li>
<li><strong>Clave:</strong> Si una oracion presenta un PROBLEMA y la siguiente una CONSECUENCIA o SOLUCION, necesitas un conector de consecuencia.</li>
</ul>

<strong>e) Conectores de ORDEN o SECUENCIA:</strong>
<ul>
<li>primero, en primer lugar, luego, despues, posteriormente, a continuacion, mas tarde, finalmente, por ultimo, para concluir</li>
<li>Uso: "<strong>Primero</strong>, se marinan las carnes. <strong>Luego</strong>, se cocinan a fuego lento. <strong>Finalmente</strong>, se sirven con arroz."</li>
<li>Son muy utiles para identificar el orden correcto cuando te piden ordenar oraciones.</li>
</ul>

<strong>f) Conectores de EJEMPLIFICACION:</strong>
<ul>
<li>por ejemplo, es decir, o sea, en otras palabras, como, tal como, a saber</li>
<li>Uso: "Muchos animales migran. <strong>Por ejemplo</strong>, el salmon recorre miles de kilometros."</li>
<li><strong>Clave:</strong> "Por ejemplo" SIEMPRE va despues de una afirmacion general, nunca al inicio de un texto.</li>
</ul>

<strong>g) Conectores de CONCLUSION:</strong>
<ul>
<li>en conclusion, en resumen, en sintesis, para concluir, en definitiva, en suma</li>
<li>Estos conectores SIEMPRE van al final del texto o parrafo porque cierran la argumentacion.</li>
</ul>

<strong>2. Referentes (sustitucion para evitar repeticion)</strong>

Los referentes son palabras que sustituyen a otras ya mencionadas para evitar la repeticion. Son clave para la cohesion y la PAA los evalua especialmente en ejercicios de completar con pronombres demostrativos.

<ul>
<li><strong>Pronombres personales:</strong> "Maria estudia mucho. <strong>Ella</strong> quiere entrar a la UTP." (Ella = Maria)</li>
<li><strong>Pronombres demostrativos:</strong> "Los estudiantes presentaron el proyecto. <strong>Este</strong> fue aprobado." (Este = el proyecto)</li>
<li><strong>Sinonimos:</strong> "El perro corria. El <strong>animal</strong> parecia asustado." (Animal = perro)</li>
<li><strong>Expresiones resuntivas:</strong> "Hubo inundaciones, incendios y terremotos. <strong>Estos desastres</strong> afectaron a miles." (Estos desastres = inundaciones, incendios y terremotos)</li>
</ul>

<strong>Reglas para usar referentes correctamente:</strong>
<ul>
<li>"Este/esta/esto" se refiere a lo MAS CERCANO o lo mencionado mas recientemente.</li>
<li>"Aquel/aquella/aquello" se refiere a lo MAS LEJANO o mencionado antes.</li>
<li>"Dicho/dicha" y "tal" se refieren a algo mencionado previamente: "Dicha decision fue controversial" = la decision que acabo de mencionar.</li>
<li><strong>Trampa en la PAA:</strong> Si una oracion dice "este problema" o "dicha situacion", esa oracion necesariamente va DESPUES de otra que presente el problema o la situacion.</li>
</ul>

<strong>ORDEN LOGICO DE UN PARRAFO</strong>

La estructura clasica de un parrafo es:
<ol>
<li><strong>Oracion principal (tematica):</strong> presenta la idea central. Generalmente no tiene conectores como "sin embargo", "por lo tanto" o "ademas" porque es la primera idea.</li>
<li><strong>Desarrollo:</strong> oraciones que explican, ejemplifican, contrastan o apoyan la idea principal. Usan conectores de adicion, ejemplo, contraste, etc.</li>
<li><strong>Cierre:</strong> conclusion, consecuencia o resumen. Usa conectores como "por lo tanto", "en conclusion", "finalmente", "asi".</li>
</ol>

<strong>Como elegir el conector correcto en la PAA:</strong>
<ol>
<li>Lee las dos oraciones que el conector debe unir.</li>
<li>Determina la relacion logica: las ideas van en la misma direccion (adicion)? Se oponen (contraste)? Una causa la otra (causa-efecto)?</li>
<li>Elige el conector que exprese esa relacion.</li>
<li>Relee con el conector puesto. Suena natural y logico?</li>
</ol>

<strong>Errores frecuentes en cohesion:</strong>
<ul>
<li>Usar "sin embargo" cuando no hay contraste: "Estudio mucho; sin embargo, aprobo." INCORRECTO (estudiar y aprobar no se oponen; deberia ser "por lo tanto").</li>
<li>Usar "ademas" cuando hay contraste: "Jugo bien, ademas, perdio." INCORRECTO (deberia ser "pero" o "sin embargo").</li>
<li>Usar "porque" cuando hay consecuencia: "Llovio porque las calles se inundaron." INCORRECTO (la causa es la lluvia, no la inundacion; deberia ser "asi que" o "por lo tanto").</li>
</ul>`,
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
        content: `En la PAA, un tipo de ejercicio muy frecuente te presenta un conjunto de oraciones desordenadas y debes organizarlas para formar un texto coherente y logico. Estos ejercicios evaluan tu comprension de la estructura textual, tu capacidad para identificar relaciones logicas entre ideas y tu manejo de conectores y referentes.

<strong>ESTRATEGIA PASO A PASO PARA ORDENAR ORACIONES:</strong>

<strong>Paso 1: Lee TODAS las oraciones antes de ordenar.</strong>
<ul>
<li>No empieces a ordenar despues de leer solo una o dos. Lee todas las oraciones para tener una vision completa del texto.</li>
<li>Identifica el tema general: de que habla el conjunto de oraciones?</li>
</ul>

<strong>Paso 2: Identifica la oracion INTRODUCTORIA (primera).</strong>
La oracion que va primero tiene estas caracteristicas:
<ul>
<li>Presenta el tema de forma general, da contexto o define un concepto.</li>
<li>NO tiene conectores que dependan de informacion previa (no empieza con "sin embargo", "por lo tanto", "ademas", "por ejemplo", "dicho", "este/esta").</li>
<li>Suele ser la oracion mas general e independiente: tiene sentido completo sin necesidad de leer las demas.</li>
<li>A menudo introduce un sujeto o concepto que las demas oraciones desarrollan.</li>
<li>Ejemplo: "El agua es el recurso mas importante para la vida" - presenta el tema de forma amplia.</li>
</ul>

<strong>Paso 3: Identifica la oracion FINAL (conclusion).</strong>
La oracion que va al final tiene estas caracteristicas:
<ul>
<li>Contiene conectores de conclusion: "por lo tanto", "en consecuencia", "en conclusion", "en resumen", "por eso", "asi", "de este modo".</li>
<li>Resume, concluye o propone una accion basada en lo dicho anteriormente.</li>
<li>Tiene un tono de cierre: no deja ideas abiertas ni introduce temas nuevos.</li>
<li>Ejemplo: "Por lo tanto, es esencial cuidar nuestras fuentes de agua."</li>
</ul>

<strong>Paso 4: Ordena las oraciones intermedias usando pistas.</strong>

<strong>Pistas de conectores textuales:</strong>
<ul>
<li><strong>"Ademas" / "Tambien" / "Asimismo":</strong> anade informacion -> va DESPUES de una idea que amplia o complementa.</li>
<li><strong>"Sin embargo" / "No obstante" / "Pero":</strong> introduce contraste -> va DESPUES de una idea opuesta. Si la oracion anterior es positiva, lo que sigue con "sin embargo" sera negativo, y viceversa.</li>
<li><strong>"Por ejemplo":</strong> da un ejemplo especifico -> va DESPUES de una afirmacion general.</li>
<li><strong>"Primero" / "En primer lugar":</strong> indica el inicio de una secuencia.</li>
<li><strong>"Luego" / "Despues" / "Posteriormente" / "A continuacion":</strong> indica el paso siguiente en una secuencia.</li>
<li><strong>"Finalmente" / "Por ultimo":</strong> cierra una secuencia.</li>
<li><strong>"Por lo tanto" / "Por consiguiente" / "En consecuencia" / "Por eso":</strong> indica una conclusion derivada de lo anterior.</li>
</ul>

<strong>Pistas de REFERENTES (pronombres y demostrativos):</strong>
<ul>
<li><strong>"Este/Esta/Esto":</strong> se refiere a algo mencionado justo antes. La oracion con "este" VA DESPUES de la que menciona el referente.</li>
<li><strong>"Dicho/Dicha":</strong> indica algo mencionado previamente. "Dicho descubrimiento" = el descubrimiento mencionado antes.</li>
<li><strong>"Tal":</strong> se refiere a algo ya dicho. "Tal situacion" = la situacion descrita antes.</li>
<li><strong>"Ella/El/Ellos":</strong> pronombres que sustituyen a sujetos ya mencionados.</li>
<li><strong>"Estas travesias" / "Dicha contaminacion":</strong> expresiones que hacen referencia a algo que DEBE haber sido mencionado antes. Si ves "dicha contaminacion", busca cual oracion habla de contaminacion y ponla ANTES.</li>
</ul>

<strong>Paso 5: Verifica el orden.</strong>
<ul>
<li>Lee todo el texto en el orden que elegiste, de corrido.</li>
<li>Suena natural? Fluye logicamente?</li>
<li>Hay alguna oracion que mencione algo que aun no se ha presentado?</li>
<li>Los conectores encajan con las ideas que los rodean?</li>
</ul>

<strong>PATRONES DE ORGANIZACION COMUNES:</strong>

<strong>1. General -> Particular -> Conclusion:</strong>
<ul>
<li>La oracion mas general va primero.</li>
<li>Le siguen datos, ejemplos o detalles especificos.</li>
<li>La conclusion cierra.</li>
<li>Ejemplo: "La educacion es clave para el desarrollo. (general) -> Las estadisticas muestran que los graduados ganan mas. (dato) -> En conclusion, la educacion transforma vidas. (conclusion)"</li>
</ul>

<strong>2. Cronologico (secuencia temporal):</strong>
<ul>
<li>Las oraciones siguen un orden en el tiempo.</li>
<li>Busca marcadores temporales: primero, luego, despues, finalmente, en 1928, posteriormente.</li>
<li>Ejemplo: "En 1928, Fleming descubrio la penicilina. -> Tal descubrimiento revoluciono la medicina. -> Gracias a ella, enfermedades antes mortales pudieron ser tratadas."</li>
</ul>

<strong>3. Causa -> Efecto -> Conclusion:</strong>
<ul>
<li>Primero se presenta un hecho o problema (causa).</li>
<li>Luego su consecuencia o efecto.</li>
<li>Finalmente una conclusion o propuesta.</li>
<li>Ejemplo: "Las fabricas emiten gases toxicos. -> Dicha contaminacion afecta la salud. -> Es urgente implementar regulaciones."</li>
</ul>

<strong>4. Tesis -> Contraste -> Conclusion:</strong>
<ul>
<li>Se presenta una idea positiva.</li>
<li>"Sin embargo" introduce una idea negativa o matizacion.</li>
<li>La conclusion integra ambas ideas.</li>
<li>Ejemplo: "La tecnologia ha mejorado la comunicacion. -> Sin embargo, tambien presenta riesgos. -> Por lo tanto, es necesario legislar su uso."</li>
</ul>

<strong>5. Problema -> Evidencia -> Solucion:</strong>
<ul>
<li>Se presenta un problema.</li>
<li>Se dan datos o ejemplos que lo demuestran.</li>
<li>Se propone una solucion o accion.</li>
</ul>

<strong>ERRORES COMUNES AL ORDENAR:</strong>
<ul>
<li><strong>Poner una oracion con "dicho/esta/tal" ANTES del referente:</strong> Si una oracion dice "dicha contaminacion", no puede ir primera porque aun no se ha hablado de contaminacion.</li>
<li><strong>Poner la conclusion al principio:</strong> Una oracion con "por lo tanto" o "en conclusion" casi nunca va primera.</li>
<li><strong>Confundir "primero" y "finalmente" del texto con las del ejercicio:</strong> Los conectores de orden dentro de las oraciones te dicen el orden DEL TEXTO, no del ejercicio.</li>
<li><strong>Ignorar la logica de la relacion causa-efecto:</strong> La causa SIEMPRE va antes del efecto. No puedes decir "por eso debemos reciclar" antes de explicar por que.</li>
</ul>

<strong>TRUCO RAPIDO:</strong>
Si no sabes por donde empezar, identifica primero la oracion que NUNCA podria ir primera (tiene "dicho", "sin embargo", "por lo tanto", "ademas") y descarta esa opcion. Luego busca la que NUNCA podria ir al final (introduce un tema nuevo sin cerrarlo). Asi reduces las posibilidades rapidamente.`,
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
        content: `Los <strong>vicios del lenguaje</strong> son errores, defectos o usos inadecuados del idioma que afectan la claridad, correccion o elegancia del mensaje. Son muy comunes en el habla cotidiana, y por eso la PAA los evalua: debes ser capaz de identificarlos, clasificarlos y corregirlos. Dominar este tema te permite no solo responder bien en el examen, sino tambien mejorar tu expresion escrita y oral.

<strong>1. REDUNDANCIA (Pleonasmo)</strong>

La redundancia consiste en repetir una idea que ya esta implicita en otra palabra de la oracion. Es decir, se dice dos veces lo mismo con palabras diferentes. Aunque algunos pleonasmos son aceptados como enfasis literario ("lo vi con mis propios ojos"), en la PAA se consideran errores.

<strong>Ejemplos de redundancias comunes (memorizalos):</strong>
<ul>
<li>"Subir <strong>arriba</strong>" -> "Subir" (subir ya implica ir hacia arriba)</li>
<li>"Bajar <strong>abajo</strong>" -> "Bajar" (bajar ya implica ir hacia abajo)</li>
<li>"Salir <strong>afuera</strong>" -> "Salir" (salir ya implica ir hacia afuera)</li>
<li>"Entrar <strong>adentro</strong>" -> "Entrar" (entrar ya implica ir hacia adentro)</li>
<li>"Vuelvo a <strong>repetir</strong>" -> "Repito" (repetir ya significa volver a decir)</li>
<li>"<strong>Lapso</strong> de tiempo" -> "Lapso" (lapso ya significa periodo de tiempo)</li>
<li>"Lo vi con mis <strong>propios</strong> ojos" -> "Lo vi" (ver ya implica usar los ojos, y son los propios)</li>
<li>"<strong>Hemorragia</strong> de sangre" -> "Hemorragia" (hemorragia ya significa salida de sangre)</li>
<li>"<strong>Protagonista</strong> principal" -> "Protagonista" (el protagonista ya es el principal)</li>
<li>"<strong>Consenso</strong> general" -> "Consenso" (consenso ya implica acuerdo general)</li>
<li>"<strong>Erario</strong> publico" -> "Erario" (erario ya se refiere a fondos publicos)</li>
<li>"<strong>Biografia</strong> de su vida" -> "Biografia" (bio = vida, grafia = escritura)</li>
<li>"<strong>Resultado</strong> final" -> "Resultado" (un resultado ya es algo final)</li>
<li>"<strong>Prever</strong> con anticipacion" -> "Prever" (pre = antes, ver = anticipar)</li>
<li>"<strong>Periodo</strong> de tiempo" -> "Periodo" (periodo ya implica un lapso temporal)</li>
<li>"<strong>Aterido</strong> de frio" -> "Aterido" (aterido ya significa muerto de frio)</li>
<li>"<strong>Cardumen</strong> de peces" -> "Cardumen" (un cardumen ya es un grupo de peces)</li>
</ul>

<strong>Como detectar redundancias:</strong> Preguntate: la segunda palabra anade informacion NUEVA que no esta ya en la primera? Si la respuesta es no, es redundancia.

<strong>2. BARBARISMO</strong>

El barbarismo es el uso incorrecto de palabras o formas gramaticales. Incluye errores de pronunciacion, escritura o conjugacion de verbos. Son muy frecuentes en el habla cotidiana y la PAA los evalua constantemente.

<strong>a) Barbarismos de conjugacion verbal (los mas evaluados):</strong>
<ul>
<li>"Dijistes" -> "Dijiste" (no se agrega -s al preterito de segunda persona)</li>
<li>"Vinistes" -> "Viniste"</li>
<li>"Hicistes" -> "Hiciste"</li>
<li>"Comistes" -> "Comiste"</li>
<li><strong>Regla:</strong> En la segunda persona del preterito indefinido (tu), NUNCA se agrega -s al final. Es "tu dijiste", no "tu dijistes".</li>
<li>"Haiga" -> "Haya" (del verbo haber)</li>
<li>"Semos" -> "Somos" (del verbo ser)</li>
<li>"Cabo" -> "Quepo" (del verbo caber, primera persona presente)</li>
<li>"Conducio" -> "Condujo" (del verbo conducir, preterito)</li>
</ul>

<strong>b) Barbarismos de forma comparativa:</strong>
<ul>
<li>"Mas mejor" -> "Mejor" (mejor ya es el comparativo de bueno)</li>
<li>"Mas peor" -> "Peor" (peor ya es el comparativo de malo)</li>
<li>"Mas mayor" -> "Mayor" (mayor ya es comparativo de grande)</li>
<li>"Mas menor" -> "Menor" (menor ya es comparativo de pequeno)</li>
<li>"Mas superior" -> "Superior" (superior ya indica un grado mas alto)</li>
<li>"Menos inferior" -> "Inferior"</li>
<li><strong>Regla:</strong> Mejor, peor, mayor, menor, superior e inferior ya son formas comparativas. No necesitan "mas" ni "menos".</li>
</ul>

<strong>c) Barbarismos con el verbo HABER impersonal:</strong>
<ul>
<li>"Hubieron muchos problemas" -> "Hubo muchos problemas"</li>
<li>"Habian muchas personas" -> "Habia muchas personas"</li>
<li>"Han habido quejas" -> "Ha habido quejas"</li>
<li>"Habemos muchos" -> "Somos muchos" o "Hay muchos de nosotros"</li>
<li><strong>Regla:</strong> El verbo "haber" cuando significa "existir" SIEMPRE va en singular, sin importar cuantas cosas o personas le sigan.</li>
</ul>

<strong>d) Barbarismos de escritura:</strong>
<ul>
<li>"Desicion" -> "Decision"</li>
<li>"Exceso" (correcto) vs. "exeso" (incorrecto)</li>
<li>"Iba" (correcto, del verbo ir) vs. "hiba" (incorrecto)</li>
<li>"A traves" (correcto) vs. "atraves" (incorrecto, son dos palabras)</li>
</ul>

<strong>3. SOLECISMO</strong>

El solecismo es un error de sintaxis, es decir, de la estructura o construccion de la oracion. Incluye errores de concordancia, uso incorrecto de preposiciones y mal uso de pronombres.

<strong>a) Solecismos de concordancia:</strong>
<ul>
<li>"La gente <strong>piensan</strong>" -> "La gente <strong>piensa</strong>" (sujeto colectivo singular = verbo singular)</li>
<li>"<strong>Le</strong> dije a ellos" -> "<strong>Les</strong> dije a ellos" (concordancia de numero: "ellos" = plural = "les")</li>
<li>"<strong>Le</strong> pedi a los ninos" -> "<strong>Les</strong> pedi a los ninos"</li>
<li>"Hubieron fiestas" -> "Hubo fiestas" (haber impersonal = siempre singular)</li>
</ul>

<strong>b) Solecismos con pronombres (leismo, laismo, loismo):</strong>
<ul>
<li><strong>Laismo:</strong> "La dije la verdad" -> "Le dije la verdad" (CI = le/les, no la/las)</li>
<li><strong>Loismo:</strong> "Lo dije que viniera" -> "Le dije que viniera"</li>
<li><strong>Leismo:</strong> "Le vi en la calle" -> "Lo vi en la calle" (CD masculino = lo)</li>
<li><strong>Truco:</strong> Para complemento INDIRECTO (a quien se da/dice/pide algo) = LE/LES. Para complemento DIRECTO (a quien/que se ve/busca/encuentra) = LO/LA/LOS/LAS.</li>
</ul>

<strong>c) Solecismos de preposicion:</strong>
<ul>
<li>"En base a" -> "Con base en" o "Sobre la base de"</li>
<li>"De acuerdo a" -> "De acuerdo con"</li>
<li>"Diferente a" -> "Diferente de" (aunque "diferente a" se acepta en el uso moderno)</li>
<li>"En relacion a" -> "En relacion con" o "Con relacion a"</li>
</ul>

<strong>4. DEQUEISMO Y QUEISMO (en profundidad)</strong>

Estos dos vicios son tan frecuentes en la PAA que merecen una seccion detallada. Son como las dos caras de una misma moneda: en uno sobra "de" y en el otro falta.

<strong>DEQUEISMO (agregar "de" donde no debe ir):</strong>
<ul>
<li>"Pienso <strong>de que</strong> es correcto" -> "Pienso <strong>que</strong> es correcto"</li>
<li>"Creo <strong>de que</strong> va a llover" -> "Creo <strong>que</strong> va a llover"</li>
<li>"Dice <strong>de que</strong> vendran" -> "Dice <strong>que</strong> vendran"</li>
<li>"Opino <strong>de que</strong> es justo" -> "Opino <strong>que</strong> es justo"</li>
<li>"Es necesario <strong>de que</strong> estudies" -> "Es necesario <strong>que</strong> estudies"</li>
<li>"Resulta <strong>de que</strong> no habia nadie" -> "Resulta <strong>que</strong> no habia nadie"</li>
</ul>

<strong>Verbos y expresiones que NUNCA llevan "de" antes de "que":</strong>
pensar, creer, decir, opinar, afirmar, asegurar, negar, considerar, resultar, es necesario, es posible, es probable, es importante, es evidente

<strong>QUEISMO (omitir "de" donde debe ir):</strong>
<ul>
<li>"Estoy seguro <strong>que</strong> vendra" -> "Estoy seguro <strong>de que</strong> vendra"</li>
<li>"Me alegro <strong>que</strong> estes bien" -> "Me alegro <strong>de que</strong> estes bien"</li>
<li>"Me entere <strong>que</strong> ganamos" -> "Me entere <strong>de que</strong> ganamos"</li>
<li>"Estoy convencido <strong>que</strong> ganara" -> "Estoy convencido <strong>de que</strong> ganara"</li>
<li>"No me acuerdo <strong>que</strong> lo dijera" -> "No me acuerdo <strong>de que</strong> lo dijera"</li>
<li>"Se dio cuenta <strong>que</strong> era tarde" -> "Se dio cuenta <strong>de que</strong> era tarde"</li>
</ul>

<strong>Verbos y expresiones que SI llevan "de que":</strong>
estar seguro de que, alegrarse de que, enterarse de que, convencerse de que, acordarse de que, darse cuenta de que, tener miedo de que, arrepentirse de que, avergonzarse de que, olvidarse de que, preocuparse de que

<strong>EL TRUCO DEL "ESO" (metodo definitivo para distinguir):</strong>
<ol>
<li>Toma la oracion y reemplaza todo lo que va desde "que" hasta el final por la palabra "eso".</li>
<li>Si la oracion suena bien SIN "de", no lleva "de que": "Pienso eso" (suena bien) -> "Pienso que..."</li>
<li>Si la oracion suena bien CON "de", lleva "de que": "Me entere de eso" (suena bien) -> "Me entere de que..."</li>
<li>Mas ejemplos:
  <ul>
  <li>"Creo eso" (correcto) vs. "Creo de eso" (suena mal) -> "Creo que..."</li>
  <li>"Me alegro de eso" (correcto) vs. "Me alegro eso" (suena mal) -> "Me alegro de que..."</li>
  <li>"Resulta eso" (correcto) vs. "Resulta de eso" (suena mal) -> "Resulta que..."</li>
  <li>"Estoy convencido de eso" (correcto) -> "Estoy convencido de que..."</li>
  <li>"Es necesario eso" (correcto) vs. "Es necesario de eso" (suena mal) -> "Es necesario que..."</li>
  </ul>
</li>
</ol>

<strong>5. ANFIBOLOGIA (ambiguedad)</strong>

La anfibologia ocurre cuando una oracion se puede interpretar de mas de una forma, creando confusion. El problema no es gramatical (la oracion puede estar bien construida) sino de claridad.

<strong>Ejemplos y correcciones:</strong>
<ul>
<li>"Vi a tu hermano con el telescopio" - Ambiguo: yo use el telescopio para verlo? O tu hermano tenia el telescopio?
  <ul>
  <li>Correccion 1: "Con el telescopio, vi a tu hermano" (yo use el telescopio)</li>
  <li>Correccion 2: "Vi a tu hermano, quien tenia el telescopio" (el lo tenia)</li>
  </ul>
</li>
<li>"Pedro le dijo a Juan que su auto estaba danado" - Ambiguo: el auto de quien? De Pedro o de Juan?
  <ul>
  <li>Correccion: "Pedro le dijo a Juan que el auto de Juan estaba danado"</li>
  </ul>
</li>
<li>"Se venden vestidos de damas usados" - Ambiguo: las damas son usadas? O los vestidos?
  <ul>
  <li>Correccion: "Se venden vestidos usados de dama"</li>
  </ul>
</li>
<li>"El profesor dijo al alumno que habia reprobado" - Ambiguo: quien reprobo? El profesor o el alumno?
  <ul>
  <li>Correccion: "El profesor le dijo al alumno: 'Has reprobado'" o "El profesor que habia reprobado le dijo al alumno..."</li>
  </ul>
</li>
<li>"Maria hablo con Ana en su oficina" - Ambiguo: la oficina de quien?
  <ul>
  <li>Correccion: "Maria hablo con Ana en la oficina de Ana"</li>
  </ul>
</li>
</ul>

<strong>Como detectar anfibologia:</strong> Preguntate: esta oracion puede entenderse de dos maneras diferentes? Si la respuesta es si, es anfibologica. El problema suele estar en pronombres posesivos ambiguos ("su") o en complementos que pueden modificar a diferentes partes de la oracion.

<strong>6. OTROS VICIOS DEL LENGUAJE</strong>

<strong>a) Cacofonia:</strong> repeticion desagradable de sonidos.
<ul>
<li>"Tres tristes tigres tragaban trigo" (uso intencional en trabalenguas)</li>
<li>"Para para la parada" (uso no intencional = vicio)</li>
</ul>

<strong>b) Muletillas o pobreza de vocabulario:</strong> uso excesivo de palabras como "este", "o sea", "bueno", "tipo", "como que".
<ul>
<li>No se evaluan directamente en la PAA pero afectan la calidad de la expresion.</li>
</ul>

<strong>c) Arcaismos:</strong> uso de palabras o formas que ya no se usan en el espanol actual.
<ul>
<li>"Agora" -> "Ahora"</li>
<li>"Ansina" -> "Asi"</li>
</ul>

<strong>RESUMEN: COMO ABORDAR PREGUNTAS DE VICIOS EN LA PAA</strong>
<ol>
<li>Lee cada opcion buscando especificamente: redundancias, barbarismos de conjugacion, errores de concordancia, dequeismo/queismo y ambiguedades.</li>
<li>Si la pregunta dice "Cual oracion es CORRECTA", busca la unica que no tenga ningun vicio.</li>
<li>Si la pregunta dice "Identifica el vicio", clasifica el error segun las categorias que aprendiste.</li>
<li>Usa el truco del "eso" para dequeismo/queismo.</li>
<li>Busca comparativos dobles (mas mejor) y verbos "haber" mal conjugados (hubieron, habemos).</li>
</ol>`,
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

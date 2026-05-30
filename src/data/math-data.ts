import { Topic } from "./types";

export const mathTopics: Topic[] = [
  {
    id: "aritmetica",
    title: "Aritmética",
    description: "Operaciones con números, fracciones, porcentajes, razones y proporciones, potencias y raíces.",
    icon: "＃",
    color: "#f59e0b",
    subtopics: [
      {
        id: "operaciones-basicas",
        title: "Operaciones con Números Enteros",
        content: `Los números enteros incluyen los positivos, negativos y el cero. Es fundamental dominar las operaciones básicas y el <strong>orden de operaciones (PEMDAS)</strong>:

<strong>Orden de operaciones:</strong>
<ol>
<li><strong>P</strong>aréntesis — resuelve primero lo que está dentro</li>
<li><strong>E</strong>xponentes — potencias y raíces</li>
<li><strong>M</strong>ultiplicación y <strong>D</strong>ivisión — de izquierda a derecha</li>
<li><strong>A</strong>dición y <strong>S</strong>ustracción — de izquierda a derecha</li>
</ol>

<strong>Reglas de signos:</strong>
<ul>
<li>Positivo × Positivo = Positivo</li>
<li>Negativo × Negativo = Positivo</li>
<li>Positivo × Negativo = Negativo</li>
<li>Misma regla aplica para la división</li>
</ul>

<strong>Valor absoluto:</strong> Es la distancia de un número al cero. Siempre es positivo. |−5| = 5, |3| = 3.`,
        examples: [
          {
            problem: "Calcula: 3 + 4 × 2 − (6 ÷ 3)",
            solution: "Primero paréntesis: 6 ÷ 3 = 2. Luego multiplicación: 4 × 2 = 8. Finalmente: 3 + 8 − 2 = 9"
          },
          {
            problem: "Calcula: (−3) × (−4) + (−2) × 5",
            solution: "(−3)(−4) = 12 y (−2)(5) = −10. Entonces: 12 + (−10) = 2"
          }
        ],
        tips: [
          "En la PAA, siempre aplica PEMDAS paso a paso. Muchos errores vienen de ignorar el orden.",
          "Cuidado con los signos negativos dentro de paréntesis.",
          "Recuerda: restar un número negativo es lo mismo que sumar su positivo: 5 − (−3) = 5 + 3 = 8"
        ],
        exercises: [
          { id: "arit-1", question: "¿Cuál es el resultado de 15 − 3 × 4 + 2?", options: ["5", "50", "−1", "20"], correctAnswer: 0, explanation: "Multiplicación primero: 3 × 4 = 12. Luego: 15 − 12 + 2 = 5" },
          { id: "arit-2", question: "¿Cuánto es (−8) ÷ (−2) × (−3)?", options: ["12", "−12", "−6", "6"], correctAnswer: 1, explanation: "(−8) ÷ (−2) = 4. Luego 4 × (−3) = −12" },
          { id: "arit-3", question: "Calcula: |−7| + |3 − 10|", options: ["14", "10", "0", "4"], correctAnswer: 0, explanation: "|−7| = 7. |3 − 10| = |−7| = 7. Total: 7 + 7 = 14" },
          { id: "arit-4", question: "¿Cuál es el resultado de 2 + 3² × (4 − 1)?", options: ["29", "45", "75", "33"], correctAnswer: 0, explanation: "Paréntesis: 4 − 1 = 3. Exponente: 3² = 9. Multiplicación: 9 × 3 = 27. Suma: 2 + 27 = 29" },
          { id: "arit-5", question: "Si a = −2 y b = 5, ¿cuánto es a² − 2ab?", options: ["24", "14", "−16", "0"], correctAnswer: 0, explanation: "a² = (−2)² = 4. 2ab = 2(−2)(5) = −20. Entonces: 4 − (−20) = 4 + 20 = 24" }
        ]
      },
      {
        id: "fracciones",
        title: "Fracciones",
        content: `Una fracción representa una parte de un todo: <code>a/b</code> donde <strong>a</strong> es el numerador y <strong>b</strong> es el denominador.

<strong>Operaciones con fracciones:</strong>

<strong>Suma y resta:</strong> Necesitan el mismo denominador (MCM).
<ul>
<li>2/3 + 1/4 → MCM de 3 y 4 = 12 → 8/12 + 3/12 = 11/12</li>
</ul>

<strong>Multiplicación:</strong> Numerador × numerador, denominador × denominador.
<ul>
<li>2/3 × 4/5 = 8/15</li>
</ul>

<strong>División:</strong> Multiplica por el recíproco (voltea la segunda fracción).
<ul>
<li>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6</li>
</ul>

<strong>Simplificar:</strong> Divide numerador y denominador por su MCD.
<ul>
<li>12/18 → MCD = 6 → 2/3</li>
</ul>

<strong>Fracciones mixtas:</strong> 2⅓ = 7/3 (multiplica entero × denominador + numerador).`,
        examples: [
          {
            problem: "Simplifica: 3/4 + 2/6",
            solution: "MCM de 4 y 6 = 12. → 9/12 + 4/12 = 13/12 = 1 1/12"
          },
          {
            problem: "Calcula: (2/5) ÷ (3/10)",
            solution: "Multiplica por el recíproco: 2/5 × 10/3 = 20/15 = 4/3"
          }
        ],
        tips: [
          "Para sumar fracciones con distinto denominador, siempre busca el MCM.",
          "Dividir fracciones = multiplicar por el recíproco. ¡Nunca falla!",
          "Simplifica siempre al final para verificar tus opciones."
        ],
        exercises: [
          { id: "frac-1", question: "¿Cuánto es 3/8 + 1/4?", options: ["5/8", "4/12", "1/2", "7/8"], correctAnswer: 0, explanation: "1/4 = 2/8. Entonces 3/8 + 2/8 = 5/8" },
          { id: "frac-2", question: "¿Cuánto es 5/6 − 1/3?", options: ["4/3", "1/2", "2/3", "1/6"], correctAnswer: 1, explanation: "1/3 = 2/6. Entonces 5/6 − 2/6 = 3/6 = 1/2" },
          { id: "frac-3", question: "¿Cuánto es 2/3 × 9/4?", options: ["3/2", "18/12", "6/7", "11/12"], correctAnswer: 0, explanation: "2/3 × 9/4 = 18/12 = 3/2" },
          { id: "frac-4", question: "Si como 2/5 de una pizza y luego 1/3 del resto, ¿qué fracción total comí?", options: ["3/5", "11/15", "2/5", "7/15"], correctAnswer: 0, explanation: "Comí 2/5. El resto es 3/5. De ese resto, 1/3 = 1/5. Total: 2/5 + 1/5 = 3/5" },
          { id: "frac-5", question: "¿Cuál fracción es mayor: 3/7 o 5/12?", options: ["3/7", "5/12", "Son iguales", "No se puede determinar"], correctAnswer: 0, explanation: "3/7 = 36/84 y 5/12 = 35/84. Como 36 > 35, entonces 3/7 > 5/12" }
        ]
      },
      {
        id: "porcentajes",
        title: "Porcentajes, Razones y Proporciones",
        content: `<strong>Porcentajes:</strong>
Un porcentaje es una fracción con denominador 100. Para calcular el X% de un número, multiplica por X/100.

<strong>Conversiones:</strong>
<ul>
<li>Fracción a porcentaje: divide y multiplica × 100. Ejemplo: 3/4 = 0.75 = 75%</li>
<li>Porcentaje a decimal: divide entre 100. Ejemplo: 45% = 0.45</li>
<li>Decimal a porcentaje: multiplica × 100. Ejemplo: 0.125 = 12.5%</li>
</ul>

<strong>Aumentos y descuentos:</strong>
<ul>
<li>Aumento del 20%: Precio × 1.20</li>
<li>Descuento del 15%: Precio × 0.85</li>
</ul>

<strong>Razones y Proporciones:</strong>
Una razón compara dos cantidades: a:b o a/b.
Una proporción es la igualdad de dos razones: a/b = c/d.

<strong>Regla de tres:</strong> Si a→b, entonces c→x. Resuelves: x = (b × c) / a.`,
        examples: [
          {
            problem: "Un artículo cuesta B/.80 y tiene 25% de descuento. ¿Cuál es el precio final?",
            solution: "Descuento = 80 × 0.25 = B/.20. Precio final = 80 − 20 = B/.60. O directamente: 80 × 0.75 = B/.60"
          },
          {
            problem: "Si 3 obreros terminan un trabajo en 12 días, ¿en cuántos días lo terminan 4 obreros?",
            solution: "Proporción inversa: 3 × 12 = 4 × x → x = 36/4 = 9 días"
          }
        ],
        tips: [
          "Para porcentajes, convierte siempre a decimal antes de operar.",
          "En problemas de proporción, identifica si es directa (más→más) o inversa (más→menos).",
          "Truco rápido: el 10% de cualquier número es moverle el punto un lugar."
        ],
        exercises: [
          { id: "porc-1", question: "¿Cuánto es el 35% de 200?", options: ["70", "35", "60", "75"], correctAnswer: 0, explanation: "200 × 0.35 = 70" },
          { id: "porc-2", question: "Si un producto sube de B/.50 a B/.65, ¿cuál fue el porcentaje de aumento?", options: ["30%", "25%", "15%", "20%"], correctAnswer: 0, explanation: "Aumento = 15. Porcentaje = (15/50) × 100 = 30%" },
          { id: "porc-3", question: "En una clase hay 12 niñas y 18 niños. ¿Qué porcentaje son niñas?", options: ["40%", "60%", "33%", "50%"], correctAnswer: 0, explanation: "Total = 30. Niñas = 12/30 = 0.4 = 40%" },
          { id: "porc-4", question: "Si 5 máquinas producen 200 piezas en 4 horas, ¿cuántas piezas producen 8 máquinas en 4 horas?", options: ["320", "250", "400", "160"], correctAnswer: 0, explanation: "Proporción directa: 5/200 = 8/x → x = (200 × 8)/5 = 320" },
          { id: "porc-5", question: "Un precio aumenta 20% y luego se le aplica un 20% de descuento. ¿El precio final es...?", options: ["96% del original", "Igual al original", "80% del original", "104% del original"], correctAnswer: 0, explanation: "100 × 1.20 = 120. Luego 120 × 0.80 = 96. Es 96% del original." }
        ]
      },
      {
        id: "potencias-raices",
        title: "Potencias y Raíces",
        content: `<strong>Potencias:</strong>
Una potencia indica multiplicación repetida: a<sup>n</sup> = a × a × ... × a (n veces).

<strong>Leyes de exponentes:</strong>
<ul>
<li>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></li>
<li>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></li>
<li>(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></li>
<li>a<sup>0</sup> = 1 (cualquier número elevado a 0 es 1)</li>
<li>a<sup>−n</sup> = 1/a<sup>n</sup></li>
<li>(a × b)<sup>n</sup> = a<sup>n</sup> × b<sup>n</sup></li>
</ul>

<strong>Raíces:</strong>
La raíz cuadrada √a es el número que multiplicado por sí mismo da a.
<ul>
<li>√25 = 5 porque 5 × 5 = 25</li>
<li>√a = a<sup>1/2</sup></li>
<li>∛a = a<sup>1/3</sup> (raíz cúbica)</li>
</ul>

<strong>Simplificación de radicales:</strong>
√50 = √(25 × 2) = 5√2`,
        examples: [
          {
            problem: "Simplifica: 2³ × 2⁴",
            solution: "Misma base, se suman exponentes: 2³⁺⁴ = 2⁷ = 128"
          },
          {
            problem: "Simplifica: √72",
            solution: "√72 = √(36 × 2) = 6√2"
          }
        ],
        tips: [
          "Memoriza las potencias de 2: 2,4,8,16,32,64,128,256.",
          "Los cuadrados perfectos comunes: 1,4,9,16,25,36,49,64,81,100,121,144.",
          "Un exponente negativo NO hace el número negativo, lo convierte en fracción."
        ],
        exercises: [
          { id: "pot-1", question: "¿Cuánto es 3⁴ ÷ 3²?", options: ["9", "3", "27", "81"], correctAnswer: 0, explanation: "3⁴⁻² = 3² = 9" },
          { id: "pot-2", question: "Simplifica: (2³)²", options: ["64", "32", "12", "36"], correctAnswer: 0, explanation: "(2³)² = 2⁶ = 64" },
          { id: "pot-3", question: "¿Cuánto es 5⁰ + 2⁻¹?", options: ["1.5", "1", "0.5", "2"], correctAnswer: 0, explanation: "5⁰ = 1 y 2⁻¹ = 1/2 = 0.5. Total: 1.5" },
          { id: "pot-4", question: "Simplifica √48", options: ["4√3", "6√2", "2√12", "8√3"], correctAnswer: 0, explanation: "√48 = √(16 × 3) = 4√3" },
          { id: "pot-5", question: "Si 2ˣ = 32, ¿cuánto vale x?", options: ["5", "4", "6", "3"], correctAnswer: 0, explanation: "2⁵ = 32, entonces x = 5" }
        ]
      }
    ]
  },
  {
    id: "algebra",
    title: "Álgebra",
    description: "Expresiones algebraicas, ecuaciones, sistemas de ecuaciones, desigualdades y funciones.",
    icon: "𝑥",
    color: "#3b82f6",
    subtopics: [
      {
        id: "expresiones-algebraicas",
        title: "Expresiones Algebraicas y Factorización",
        content: `Una <strong>expresión algebraica</strong> combina números, variables y operaciones. Ejemplo: 3x² + 2x − 5.

<strong>Términos semejantes:</strong> tienen la misma variable con el mismo exponente.
<ul>
<li>3x² y 5x² son semejantes → se suman: 8x²</li>
<li>3x² y 3x NO son semejantes</li>
</ul>

<strong>Productos notables:</strong>
<ul>
<li>(a + b)² = a² + 2ab + b²</li>
<li>(a − b)² = a² − 2ab + b²</li>
<li>(a + b)(a − b) = a² − b² (diferencia de cuadrados)</li>
</ul>

<strong>Factorización:</strong>
<ul>
<li><strong>Factor común:</strong> 6x² + 9x = 3x(2x + 3)</li>
<li><strong>Trinomio:</strong> x² + 5x + 6 = (x + 2)(x + 3)</li>
<li><strong>Diferencia de cuadrados:</strong> x² − 16 = (x + 4)(x − 4)</li>
</ul>`,
        examples: [
          {
            problem: "Factoriza: x² − 9",
            solution: "Es diferencia de cuadrados: x² − 3² = (x + 3)(x − 3)"
          },
          {
            problem: "Expande: (2x + 3)²",
            solution: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9"
          }
        ],
        tips: [
          "Para factorizar trinomios x² + bx + c, busca dos números que multiplicados den c y sumados den b.",
          "Siempre intenta sacar factor común primero antes de otras técnicas.",
          "Verifica tu factorización expandiendo — debe dar la expresión original."
        ],
        exercises: [
          { id: "alg-1", question: "Simplifica: 5x + 3y − 2x + 7y", options: ["3x + 10y", "7x + 10y", "3x − 4y", "13xy"], correctAnswer: 0, explanation: "Agrupa semejantes: (5x − 2x) + (3y + 7y) = 3x + 10y" },
          { id: "alg-2", question: "Factoriza: x² + 7x + 12", options: ["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)", "(x+4)(x+4)"], correctAnswer: 0, explanation: "Busca dos números que sumen 7 y multipliquen 12: 3 y 4. → (x+3)(x+4)" },
          { id: "alg-3", question: "¿Cuánto es (x+5)(x−5)?", options: ["x²−25", "x²+25", "x²−10x+25", "x²+10x−25"], correctAnswer: 0, explanation: "Diferencia de cuadrados: (a+b)(a−b) = a²−b² → x²−25" },
          { id: "alg-4", question: "Factoriza: 4x² − 12x", options: ["4x(x−3)", "2x(2x−6)", "4(x²−3x)", "x(4x−12)"], correctAnswer: 0, explanation: "Factor común: MCD es 4x → 4x(x−3)" },
          { id: "alg-5", question: "Expande: (3a − 2)²", options: ["9a²−12a+4", "9a²−4", "9a²+12a+4", "3a²−12a+4"], correctAnswer: 0, explanation: "(3a)² − 2(3a)(2) + 2² = 9a² − 12a + 4" }
        ]
      },
      {
        id: "ecuaciones-primer-grado",
        title: "Ecuaciones de Primer Grado",
        content: `Una ecuación de primer grado tiene la forma <code>ax + b = c</code>. El objetivo es despejar la variable.

<strong>Pasos para resolver:</strong>
<ol>
<li>Elimina paréntesis (distribuye)</li>
<li>Agrupa términos con variable a un lado y constantes al otro</li>
<li>Simplifica términos semejantes</li>
<li>Divide por el coeficiente de la variable</li>
</ol>

<strong>Principio fundamental:</strong> Lo que haces de un lado de la ecuación, debes hacerlo del otro.

<strong>Ecuaciones con fracciones:</strong> Multiplica toda la ecuación por el MCM de los denominadores para eliminar fracciones.`,
        examples: [
          {
            problem: "Resuelve: 3(x − 2) + 4 = 2x + 5",
            solution: "Distribuye: 3x − 6 + 4 = 2x + 5 → 3x − 2 = 2x + 5 → x = 7"
          },
          {
            problem: "Resuelve: x/3 + x/4 = 7",
            solution: "MCM = 12. Multiplica todo por 12: 4x + 3x = 84 → 7x = 84 → x = 12"
          }
        ],
        tips: [
          "Verifica tu respuesta sustituyendo en la ecuación original.",
          "Cuando hay fracciones, elimínalas primero multiplicando por el MCM.",
          "Recuerda: al mover un término al otro lado, cambia de signo."
        ],
        exercises: [
          { id: "ec1-1", question: "Resuelve: 2x + 7 = 15", options: ["4", "8", "11", "3"], correctAnswer: 0, explanation: "2x = 15 − 7 = 8 → x = 4" },
          { id: "ec1-2", question: "Resuelve: 5(x + 3) = 3x + 25", options: ["5", "10", "4", "8"], correctAnswer: 0, explanation: "5x + 15 = 3x + 25 → 2x = 10 → x = 5" },
          { id: "ec1-3", question: "Si 3x − 4 = 2(x + 1), ¿cuánto vale x?", options: ["6", "2", "−2", "3"], correctAnswer: 0, explanation: "3x − 4 = 2x + 2 → x = 6" },
          { id: "ec1-4", question: "Resuelve: x/2 − 3 = x/6 + 1", options: ["12", "6", "8", "3"], correctAnswer: 0, explanation: "MCM=6: 3x − 18 = x + 6 → 2x = 24 → x = 12" },
          { id: "ec1-5", question: "La edad de Ana es el triple de la de su hijo. Si la suma de sus edades es 48, ¿cuántos años tiene el hijo?", options: ["12", "16", "36", "24"], correctAnswer: 0, explanation: "Sea x la edad del hijo. 3x + x = 48 → 4x = 48 → x = 12" }
        ]
      },
      {
        id: "ecuaciones-segundo-grado",
        title: "Ecuaciones de Segundo Grado",
        content: `Una ecuación cuadrática tiene la forma <code>ax² + bx + c = 0</code>.

<strong>Métodos de solución:</strong>

<strong>1. Factorización:</strong>
Si puedes factorizar, igualas cada factor a cero.
x² − 5x + 6 = 0 → (x−2)(x−3) = 0 → x = 2 o x = 3

<strong>2. Fórmula general (cuadrática):</strong>
x = (−b ± √(b²−4ac)) / 2a

<strong>El discriminante</strong> (b²−4ac) indica:
<ul>
<li>Si es positivo → 2 soluciones reales</li>
<li>Si es cero → 1 solución real (raíz doble)</li>
<li>Si es negativo → no hay soluciones reales</li>
</ul>

<strong>Relación entre raíces y coeficientes:</strong>
<ul>
<li>Suma de raíces = −b/a</li>
<li>Producto de raíces = c/a</li>
</ul>`,
        examples: [
          {
            problem: "Resuelve: x² − 7x + 10 = 0",
            solution: "Factorizando: (x−2)(x−5) = 0 → x = 2 o x = 5"
          },
          {
            problem: "Resuelve: 2x² + 3x − 2 = 0 usando la fórmula",
            solution: "a=2, b=3, c=−2. Discriminante = 9+16 = 25. x = (−3±5)/4 → x = 1/2 o x = −2"
          }
        ],
        tips: [
          "Intenta factorizar primero — es más rápido que la fórmula.",
          "Memoriza la fórmula cuadrática: x = (−b ± √(b²−4ac)) / 2a",
          "Verifica: la suma de tus soluciones debe ser −b/a y el producto c/a."
        ],
        exercises: [
          { id: "ec2-1", question: "Resuelve: x² − 9 = 0", options: ["x = 3 o x = −3", "x = 9", "x = 3", "x = −9 o x = 9"], correctAnswer: 0, explanation: "x² = 9 → x = ±3" },
          { id: "ec2-2", question: "¿Cuáles son las soluciones de x² − x − 6 = 0?", options: ["3 y −2", "2 y −3", "6 y −1", "−6 y 1"], correctAnswer: 0, explanation: "(x−3)(x+2) = 0 → x = 3 o x = −2" },
          { id: "ec2-3", question: "¿Cuál es el discriminante de 2x² + 4x + 2 = 0?", options: ["0", "8", "−8", "16"], correctAnswer: 0, explanation: "b²−4ac = 16−16 = 0 (raíz doble)" },
          { id: "ec2-4", question: "Si las raíces de una ecuación son 4 y −1, ¿cuál es la ecuación?", options: ["x²−3x−4=0", "x²+3x−4=0", "x²−3x+4=0", "x²+5x+4=0"], correctAnswer: 0, explanation: "Suma = 3 = −b, Producto = −4 = c → x² − 3x − 4 = 0" },
          { id: "ec2-5", question: "¿Cuántas soluciones reales tiene 3x² + 2x + 5 = 0?", options: ["Ninguna", "Una", "Dos", "Infinitas"], correctAnswer: 0, explanation: "Discriminante = 4 − 60 = −56 < 0, no hay soluciones reales" }
        ]
      },
      {
        id: "sistemas-ecuaciones",
        title: "Sistemas de Ecuaciones",
        content: `Un sistema de ecuaciones tiene dos o más ecuaciones con las mismas variables.

<strong>Método de sustitución:</strong>
<ol>
<li>Despeja una variable de una ecuación</li>
<li>Sustituye en la otra ecuación</li>
<li>Resuelve y sustituye de vuelta</li>
</ol>

<strong>Método de eliminación:</strong>
<ol>
<li>Multiplica una o ambas ecuaciones para que un coeficiente sea igual</li>
<li>Suma o resta las ecuaciones para eliminar una variable</li>
<li>Resuelve y sustituye</li>
</ol>

<strong>Interpretación gráfica:</strong>
<ul>
<li>Solución única = las rectas se cruzan en un punto</li>
<li>Sin solución = rectas paralelas</li>
<li>Infinitas soluciones = misma recta</li>
</ul>`,
        examples: [
          {
            problem: "Resuelve: x + y = 10 y 2x − y = 5",
            solution: "Sumando ambas: 3x = 15 → x = 5. Sustituyendo: 5 + y = 10 → y = 5"
          },
          {
            problem: "Resuelve: y = 2x + 1 y 3x + y = 11",
            solution: "Sustituye y: 3x + (2x+1) = 11 → 5x = 10 → x = 2, y = 5"
          }
        ],
        tips: [
          "Si una variable ya está despejada, usa sustitución.",
          "Si los coeficientes son simples, usa eliminación.",
          "Siempre verifica sustituyendo en AMBAS ecuaciones."
        ],
        exercises: [
          { id: "sis-1", question: "Resuelve: x + y = 8, x − y = 2. ¿Cuánto vale x?", options: ["5", "3", "6", "4"], correctAnswer: 0, explanation: "Sumando: 2x = 10 → x = 5" },
          { id: "sis-2", question: "Si 2x + 3y = 12 y x = 3, ¿cuánto vale y?", options: ["2", "3", "4", "1"], correctAnswer: 0, explanation: "2(3) + 3y = 12 → 6 + 3y = 12 → 3y = 6 → y = 2" },
          { id: "sis-3", question: "Un boleto de adulto cuesta B/.5 y uno de niño B/.3. Si se vendieron 20 boletos y se recaudaron B/.76, ¿cuántos boletos de adulto se vendieron?", options: ["8", "12", "10", "15"], correctAnswer: 0, explanation: "a + n = 20 y 5a + 3n = 76. De la primera: n = 20−a. Sustituyendo: 5a + 3(20−a) = 76 → 2a = 16 → a = 8" },
          { id: "sis-4", question: "¿Cuántas soluciones tiene el sistema: 2x + y = 5 y 4x + 2y = 10?", options: ["Infinitas", "Ninguna", "Una", "Dos"], correctAnswer: 0, explanation: "La segunda ecuación es el doble de la primera — son la misma recta → infinitas soluciones" },
          { id: "sis-5", question: "Si x − 2y = 1 y 3x + y = 17, ¿cuánto es x + y?", options: ["9", "7", "8", "10"], correctAnswer: 0, explanation: "De la 1ra: x = 1+2y. Sustituyendo: 3(1+2y)+y = 17 → 7y = 14 → y = 2, x = 5. x+y = 7... Corrección: 3+6y+y = 17 → 7y = 14 → y=2, x=5. x+y=7" }
        ]
      },
      {
        id: "desigualdades",
        title: "Desigualdades",
        content: `Las desigualdades usan los símbolos <code>&lt;</code>, <code>&gt;</code>, <code>≤</code>, <code>≥</code>.

<strong>Reglas:</strong>
<ul>
<li>Puedes sumar o restar lo mismo de ambos lados sin cambiar el sentido</li>
<li>Puedes multiplicar o dividir por un positivo sin cambiar el sentido</li>
<li><strong>Al multiplicar o dividir por un negativo, INVIERTES el sentido</strong></li>
</ul>

<strong>Ejemplo:</strong>
−2x > 6 → al dividir por −2, inviertes: x < −3

<strong>Intervalos:</strong>
<ul>
<li>x > 3 → (3, ∞) — paréntesis = no incluye el 3</li>
<li>x ≥ 3 → [3, ∞) — corchete = incluye el 3</li>
<li>2 < x ≤ 5 → (2, 5]</li>
</ul>`,
        examples: [
          {
            problem: "Resuelve: 3x − 7 > 2",
            solution: "3x > 9 → x > 3. En intervalo: (3, ∞)"
          },
          {
            problem: "Resuelve: −4x + 1 ≤ 9",
            solution: "−4x ≤ 8 → x ≥ −2 (invertimos por dividir entre negativo). Intervalo: [−2, ∞)"
          }
        ],
        tips: [
          "La regla más importante: al multiplicar/dividir por negativo, CAMBIA el sentido.",
          "Practica con la recta numérica para visualizar la solución.",
          "Recuerda: < y > usan paréntesis ( ), mientras que ≤ y ≥ usan corchetes [ ]."
        ],
        exercises: [
          { id: "des-1", question: "Resuelve: 2x + 3 > 11", options: ["x > 4", "x > 7", "x < 4", "x > 14"], correctAnswer: 0, explanation: "2x > 8 → x > 4" },
          { id: "des-2", question: "Resuelve: −3x ≤ 12", options: ["x ≥ −4", "x ≤ −4", "x ≥ 4", "x ≤ 4"], correctAnswer: 0, explanation: "Dividimos por −3 e invertimos: x ≥ −4" },
          { id: "des-3", question: "¿Qué intervalo representa x ≤ 5 y x > −1?", options: ["(−1, 5]", "[−1, 5]", "(−1, 5)", "[−1, 5)"], correctAnswer: 0, explanation: "x > −1 (no incluye) y x ≤ 5 (incluye) → (−1, 5]" },
          { id: "des-4", question: "Si 4 − x > 1, entonces:", options: ["x < 3", "x > 3", "x < −3", "x > −3"], correctAnswer: 0, explanation: "−x > −3 → x < 3" },
          { id: "des-5", question: "¿Para qué valores de x se cumple que x² < 9?", options: ["−3 < x < 3", "x < 3", "x > −3", "x < −3 o x > 3"], correctAnswer: 0, explanation: "x² < 9 → |x| < 3 → −3 < x < 3" }
        ]
      }
    ]
  },
  {
    id: "geometria",
    title: "Geometría",
    description: "Ángulos, triángulos, cuadriláteros, círculos, perímetros, áreas y volúmenes.",
    icon: "△",
    color: "#10b981",
    subtopics: [
      {
        id: "angulos-rectas",
        title: "Ángulos y Rectas",
        content: `<strong>Tipos de ángulos:</strong>
<ul>
<li><strong>Agudo:</strong> menor de 90°</li>
<li><strong>Recto:</strong> exactamente 90°</li>
<li><strong>Obtuso:</strong> entre 90° y 180°</li>
<li><strong>Llano:</strong> exactamente 180°</li>
</ul>

<strong>Relaciones entre ángulos:</strong>
<ul>
<li><strong>Complementarios:</strong> suman 90°</li>
<li><strong>Suplementarios:</strong> suman 180°</li>
<li><strong>Opuestos por el vértice:</strong> son iguales</li>
</ul>

<strong>Rectas paralelas cortadas por una transversal:</strong>
<ul>
<li><strong>Ángulos correspondientes:</strong> son iguales</li>
<li><strong>Ángulos alternos internos:</strong> son iguales</li>
<li><strong>Ángulos co-interiores (consecutivos internos):</strong> suman 180°</li>
</ul>`,
        examples: [
          {
            problem: "Si un ángulo mide 35°, ¿cuánto mide su complemento?",
            solution: "Complemento = 90° − 35° = 55°"
          },
          {
            problem: "Dos rectas paralelas son cortadas por una transversal. Si un ángulo alterno interno mide 65°, ¿cuánto mide el otro alterno interno?",
            solution: "Los ángulos alternos internos son iguales → 65°"
          }
        ],
        tips: [
          "Complementarios = 90°, Suplementarios = 180°. Asócialos con la C (Complementario, Cuarto de giro) y la S (Suplementario, Semicírculo).",
          "Cuando veas rectas paralelas con transversal, busca ángulos iguales y suplementarios."
        ],
        exercises: [
          { id: "geo-1", question: "Si dos ángulos son suplementarios y uno mide 115°, ¿cuánto mide el otro?", options: ["65°", "75°", "25°", "55°"], correctAnswer: 0, explanation: "180° − 115° = 65°" },
          { id: "geo-2", question: "Dos ángulos opuestos por el vértice: uno mide 3x y el otro 48°. ¿Cuánto vale x?", options: ["16", "48", "24", "12"], correctAnswer: 0, explanation: "Opuestos por el vértice son iguales: 3x = 48 → x = 16" },
          { id: "geo-3", question: "En rectas paralelas cortadas por transversal, un ángulo correspondiente mide 70°. ¿Cuánto mide su co-interior?", options: ["110°", "70°", "90°", "180°"], correctAnswer: 0, explanation: "Co-interiores son suplementarios del correspondiente: 180° − 70° = 110°" },
          { id: "geo-4", question: "¿Cuánto mide el ángulo complementario de 72°?", options: ["18°", "108°", "28°", "8°"], correctAnswer: 0, explanation: "90° − 72° = 18°" }
        ]
      },
      {
        id: "triangulos",
        title: "Triángulos",
        content: `<strong>La suma de los ángulos internos de un triángulo es 180°.</strong>

<strong>Clasificación por lados:</strong>
<ul>
<li><strong>Equilátero:</strong> 3 lados iguales (60° cada ángulo)</li>
<li><strong>Isósceles:</strong> 2 lados iguales</li>
<li><strong>Escaleno:</strong> todos los lados diferentes</li>
</ul>

<strong>Clasificación por ángulos:</strong>
<ul>
<li><strong>Acutángulo:</strong> todos los ángulos menores de 90°</li>
<li><strong>Rectángulo:</strong> tiene un ángulo de 90°</li>
<li><strong>Obtusángulo:</strong> tiene un ángulo mayor de 90°</li>
</ul>

<strong>Teorema de Pitágoras</strong> (solo para triángulos rectángulos):
<code>a² + b² = c²</code> donde c es la hipotenusa (lado más largo, opuesto al ángulo recto).

<strong>Área del triángulo:</strong> A = (base × altura) / 2

<strong>Triángulos semejantes:</strong> Tienen los mismos ángulos y sus lados son proporcionales.`,
        examples: [
          {
            problem: "Un triángulo rectángulo tiene catetos de 3 y 4. ¿Cuánto mide la hipotenusa?",
            solution: "c² = 3² + 4² = 9 + 16 = 25 → c = 5"
          },
          {
            problem: "Calcula el área de un triángulo con base 10 cm y altura 6 cm",
            solution: "A = (10 × 6) / 2 = 30 cm²"
          }
        ],
        tips: [
          "Memoriza las ternas pitagóricas comunes: (3,4,5), (5,12,13), (8,15,17).",
          "Si falta un ángulo de un triángulo, resta los otros dos de 180°.",
          "En la PAA, Pitágoras aparece frecuentemente. Practica identificar cuál es la hipotenusa."
        ],
        exercises: [
          { id: "tri-1", question: "Si dos ángulos de un triángulo miden 45° y 65°, ¿cuánto mide el tercero?", options: ["70°", "80°", "90°", "60°"], correctAnswer: 0, explanation: "180° − 45° − 65° = 70°" },
          { id: "tri-2", question: "La hipotenusa de un triángulo rectángulo mide 13 y un cateto mide 5. ¿Cuánto mide el otro cateto?", options: ["12", "8", "10", "14"], correctAnswer: 0, explanation: "b² = 13² − 5² = 169 − 25 = 144 → b = 12" },
          { id: "tri-3", question: "¿Cuál es el área de un triángulo con base 8 m y altura 5 m?", options: ["20 m²", "40 m²", "13 m²", "25 m²"], correctAnswer: 0, explanation: "A = (8 × 5)/2 = 20 m²" },
          { id: "tri-4", question: "Un triángulo tiene lados 3, 4 y 5. ¿Qué tipo de triángulo es?", options: ["Rectángulo", "Equilátero", "Obtusángulo", "Acutángulo"], correctAnswer: 0, explanation: "3² + 4² = 9 + 16 = 25 = 5². Cumple Pitágoras → es rectángulo" },
          { id: "tri-5", question: "Dos triángulos semejantes: el menor tiene lados 3, 4, 5 y el mayor tiene un lado de 10 correspondiente al de 5. ¿Cuánto mide el lado correspondiente al de 3?", options: ["6", "8", "9", "5"], correctAnswer: 0, explanation: "Factor de escala: 10/5 = 2. Lado correspondiente = 3 × 2 = 6" }
        ]
      },
      {
        id: "circunferencia",
        title: "Circunferencia y Círculo",
        content: `<strong>Elementos:</strong>
<ul>
<li><strong>Radio (r):</strong> distancia del centro al borde</li>
<li><strong>Diámetro (d):</strong> d = 2r</li>
<li><strong>Circunferencia:</strong> perímetro del círculo = 2πr = πd</li>
<li><strong>Área del círculo:</strong> A = πr²</li>
</ul>

<strong>Valor de π ≈ 3.14159</strong> (en la PAA generalmente usan π ≈ 3.14)

<strong>Arco y sector circular:</strong>
<ul>
<li>Longitud del arco = (θ/360°) × 2πr</li>
<li>Área del sector = (θ/360°) × πr²</li>
</ul>

<strong>Ángulo central:</strong> su medida es igual a la del arco que subtiende.
<strong>Ángulo inscrito:</strong> su medida es la mitad del arco que subtiende.`,
        examples: [
          {
            problem: "¿Cuál es el área de un círculo con radio 7 cm?",
            solution: "A = π(7)² = 49π ≈ 153.94 cm²"
          },
          {
            problem: "¿Cuál es la circunferencia de un círculo con diámetro 10 m?",
            solution: "C = πd = 10π ≈ 31.42 m"
          }
        ],
        tips: [
          "Recuerda: Circunferencia (perímetro) = 2πr, Área = πr². No los confundas.",
          "Si te dan el diámetro, divídelo entre 2 para obtener el radio antes de calcular.",
          "En la PAA, las respuestas a menudo quedan en términos de π."
        ],
        exercises: [
          { id: "cir-1", question: "¿Cuál es la circunferencia de un círculo con radio 5?", options: ["10π", "25π", "5π", "20π"], correctAnswer: 0, explanation: "C = 2πr = 2π(5) = 10π" },
          { id: "cir-2", question: "El área de un círculo es 36π. ¿Cuánto mide el radio?", options: ["6", "36", "18", "12"], correctAnswer: 0, explanation: "πr² = 36π → r² = 36 → r = 6" },
          { id: "cir-3", question: "¿Cuál es el área de un semicírculo con diámetro 8?", options: ["8π", "16π", "4π", "32π"], correctAnswer: 0, explanation: "Radio = 4. Área semicírculo = πr²/2 = 16π/2 = 8π" },
          { id: "cir-4", question: "Un sector circular tiene ángulo 90° y radio 6. ¿Cuál es su área?", options: ["9π", "36π", "18π", "6π"], correctAnswer: 0, explanation: "Área = (90/360) × π(6)² = (1/4)(36π) = 9π" }
        ]
      },
      {
        id: "area-volumen",
        title: "Perímetro, Área y Volumen",
        content: `<strong>Fórmulas de figuras planas:</strong>

<strong>Rectángulo:</strong> P = 2(l+a), A = l × a
<strong>Cuadrado:</strong> P = 4l, A = l²
<strong>Paralelogramo:</strong> A = base × altura
<strong>Trapecio:</strong> A = (B + b) × h / 2 (B=base mayor, b=base menor)
<strong>Rombo:</strong> A = (D × d) / 2 (D y d son las diagonales)

<strong>Fórmulas de volumen (sólidos):</strong>

<strong>Prisma rectangular (caja):</strong> V = largo × ancho × alto
<strong>Cubo:</strong> V = l³
<strong>Cilindro:</strong> V = πr²h
<strong>Cono:</strong> V = πr²h / 3
<strong>Esfera:</strong> V = (4/3)πr³
<strong>Pirámide:</strong> V = (Área base × h) / 3`,
        examples: [
          {
            problem: "Un cilindro tiene radio 3 cm y altura 10 cm. ¿Cuál es su volumen?",
            solution: "V = π(3)²(10) = 90π ≈ 282.74 cm³"
          },
          {
            problem: "Calcula el área de un trapecio con bases 12 y 8 cm, y altura 5 cm",
            solution: "A = (12 + 8) × 5 / 2 = 100/2 = 50 cm²"
          }
        ],
        tips: [
          "El volumen del cono es 1/3 del cilindro con misma base y altura.",
          "El volumen de la pirámide es 1/3 del prisma con misma base y altura.",
          "Memoriza las fórmulas del cilindro y la esfera — salen frecuentemente."
        ],
        exercises: [
          { id: "vol-1", question: "¿Cuál es el volumen de un cubo de arista 4 cm?", options: ["64 cm³", "16 cm³", "48 cm³", "24 cm³"], correctAnswer: 0, explanation: "V = 4³ = 64 cm³" },
          { id: "vol-2", question: "El área de un trapecio con bases 10 y 6, y altura 4 es:", options: ["32", "40", "24", "16"], correctAnswer: 0, explanation: "A = (10+6)(4)/2 = 64/2 = 32" },
          { id: "vol-3", question: "Un cilindro tiene radio 2 y altura 7. Su volumen es:", options: ["28π", "14π", "56π", "7π"], correctAnswer: 0, explanation: "V = π(2²)(7) = 28π" },
          { id: "vol-4", question: "¿Cuál es el volumen de una esfera con radio 3?", options: ["36π", "27π", "12π", "108π"], correctAnswer: 0, explanation: "V = (4/3)π(3)³ = (4/3)(27π) = 36π" },
          { id: "vol-5", question: "Un rectángulo tiene perímetro 30 y largo 10. ¿Cuál es su área?", options: ["50", "30", "100", "75"], correctAnswer: 0, explanation: "P = 2(10+a) = 30 → a = 5. Área = 10 × 5 = 50" }
        ]
      }
    ]
  },
  {
    id: "estadistica",
    title: "Estadística y Probabilidad",
    description: "Medidas de tendencia central, interpretación de gráficos, probabilidad básica y conteo.",
    icon: "📊",
    color: "#8b5cf6",
    subtopics: [
      {
        id: "tendencia-central",
        title: "Medidas de Tendencia Central",
        content: `<strong>Media aritmética (promedio):</strong>
Suma de todos los datos ÷ cantidad de datos.

<strong>Mediana:</strong>
El valor central al ordenar los datos. Si hay cantidad par, es el promedio de los dos centrales.

<strong>Moda:</strong>
El dato que más se repite. Puede haber más de una moda (bimodal) o ninguna.

<strong>Rango:</strong>
Diferencia entre el valor máximo y el mínimo.

<strong>Media ponderada:</strong>
Cuando cada dato tiene un peso diferente: Σ(dato × peso) / Σ(pesos)`,
        examples: [
          {
            problem: "Datos: 4, 7, 2, 9, 3, 7, 5. Calcula media, mediana y moda.",
            solution: "Media = (4+7+2+9+3+7+5)/7 = 37/7 ≈ 5.29. Ordenados: 2,3,4,5,7,7,9. Mediana = 5 (el del centro). Moda = 7 (se repite más)"
          },
          {
            problem: "Un estudiante tiene notas 80, 90, 70 con pesos 30%, 50%, 20%. ¿Cuál es su promedio ponderado?",
            solution: "80(0.30) + 90(0.50) + 70(0.20) = 24 + 45 + 14 = 83"
          }
        ],
        tips: [
          "Para la mediana, SIEMPRE ordena los datos primero.",
          "Si la cantidad de datos es par, la mediana es el promedio de los dos del medio.",
          "La media se afecta por valores extremos; la mediana no tanto."
        ],
        exercises: [
          { id: "est-1", question: "¿Cuál es la media de: 12, 15, 18, 21, 24?", options: ["18", "15", "20", "21"], correctAnswer: 0, explanation: "(12+15+18+21+24)/5 = 90/5 = 18" },
          { id: "est-2", question: "¿Cuál es la mediana de: 3, 8, 1, 5, 9, 4?", options: ["4.5", "5", "4", "6"], correctAnswer: 0, explanation: "Ordenados: 1,3,4,5,8,9. Centrales: 4 y 5. Mediana = (4+5)/2 = 4.5" },
          { id: "est-3", question: "Datos: 2, 5, 3, 5, 7, 5, 8. ¿Cuál es la moda?", options: ["5", "3", "7", "2"], correctAnswer: 0, explanation: "El 5 aparece 3 veces, más que cualquier otro → moda = 5" },
          { id: "est-4", question: "Si el promedio de 5 números es 20, ¿cuál es su suma?", options: ["100", "80", "25", "4"], correctAnswer: 0, explanation: "Suma = promedio × cantidad = 20 × 5 = 100" },
          { id: "est-5", question: "Al agregar el número 30 a los datos {10, 20, 20}, ¿qué sucede con la media?", options: ["Aumenta", "Disminuye", "No cambia", "Se duplica"], correctAnswer: 0, explanation: "Media original = 50/3 ≈ 16.7. Nueva media = 80/4 = 20. Aumentó." }
        ]
      },
      {
        id: "graficos",
        title: "Interpretación de Gráficos",
        content: `En la PAA aparecen gráficos que debes interpretar correctamente.

<strong>Tipos de gráficos:</strong>
<ul>
<li><strong>Barras:</strong> comparan cantidades entre categorías. Lee la altura de cada barra.</li>
<li><strong>Circular (pastel):</strong> muestra proporciones del total. Cada sector es un porcentaje.</li>
<li><strong>Líneas:</strong> muestran tendencias a lo largo del tiempo.</li>
<li><strong>Histograma:</strong> como barras, pero para datos continuos agrupados en intervalos.</li>
</ul>

<strong>Estrategias:</strong>
<ul>
<li>Lee el título y las etiquetas de los ejes</li>
<li>Identifica las unidades</li>
<li>Observa tendencias generales antes de detalles</li>
<li>Cuidado con escalas que no empiezan en cero — pueden exagerar diferencias</li>
</ul>`,
        examples: [
          {
            problem: "En un gráfico circular, el sector de 'Deportes' ocupa 90°. ¿Qué porcentaje representa?",
            solution: "90/360 × 100 = 25%"
          },
          {
            problem: "En un gráfico de barras, la barra de enero es 40 y la de febrero es 60. ¿Cuál fue el porcentaje de aumento?",
            solution: "Aumento = 20. Porcentaje = (20/40) × 100 = 50%"
          }
        ],
        tips: [
          "En gráficos circulares: el círculo completo = 360° = 100%.",
          "Siempre lee las etiquetas antes de responder.",
          "Si preguntan por tendencias en gráficos de líneas, fíjate en la pendiente."
        ],
        exercises: [
          { id: "graf-1", question: "Un sector circular de 72° representa qué porcentaje del total?", options: ["20%", "25%", "15%", "72%"], correctAnswer: 0, explanation: "(72/360) × 100 = 20%" },
          { id: "graf-2", question: "En un gráfico de barras, las ventas de lunes a viernes son: 10, 15, 20, 15, 30. ¿Qué día tuvo más ventas?", options: ["Viernes", "Miércoles", "Martes", "Jueves"], correctAnswer: 0, explanation: "Viernes = 30, el mayor valor" },
          { id: "graf-3", question: "Si un gráfico circular muestra: 40% azul, 35% rojo, ¿cuánto es el sector verde (único restante)?", options: ["25%", "15%", "30%", "75%"], correctAnswer: 0, explanation: "100% − 40% − 35% = 25%" },
          { id: "graf-4", question: "En un histograma, el intervalo 20-30 tiene frecuencia 8 y el intervalo 30-40 tiene frecuencia 5. ¿Cuántos datos hay en total entre 20 y 40?", options: ["13", "8", "5", "3"], correctAnswer: 0, explanation: "8 + 5 = 13 datos entre 20 y 40" }
        ]
      },
      {
        id: "probabilidad",
        title: "Probabilidad Básica",
        content: `<strong>Probabilidad</strong> = número de casos favorables / número de casos posibles.

Siempre está entre 0 (imposible) y 1 (seguro). Se puede expresar como fracción, decimal o porcentaje.

<strong>Eventos:</strong>
<ul>
<li><strong>Espacio muestral:</strong> todos los resultados posibles</li>
<li><strong>Evento:</strong> un resultado o conjunto de resultados</li>
<li><strong>Eventos mutuamente excluyentes:</strong> no pueden ocurrir al mismo tiempo</li>
</ul>

<strong>Reglas:</strong>
<ul>
<li>P(A o B) = P(A) + P(B) si son mutuamente excluyentes</li>
<li>P(A y B) = P(A) × P(B) si son independientes</li>
<li>P(complemento de A) = 1 − P(A)</li>
</ul>

<strong>Principio de conteo (multiplicativo):</strong>
Si un evento puede ocurrir de m formas y otro de n formas, juntos: m × n formas.`,
        examples: [
          {
            problem: "Al lanzar un dado, ¿cuál es la probabilidad de obtener un número par?",
            solution: "Números pares: {2, 4, 6} = 3 casos. Total: 6. P = 3/6 = 1/2"
          },
          {
            problem: "¿De cuántas formas puedes vestirte si tienes 4 camisas y 3 pantalones?",
            solution: "Principio multiplicativo: 4 × 3 = 12 formas"
          }
        ],
        tips: [
          "Siempre identifica primero el espacio muestral (total de casos posibles).",
          "P = 0 significa imposible, P = 1 significa seguro.",
          "Para 'y' (ambos eventos) multiplica. Para 'o' (cualquiera) suma."
        ],
        exercises: [
          { id: "prob-1", question: "Al lanzar una moneda dos veces, ¿cuál es la probabilidad de obtener dos caras?", options: ["1/4", "1/2", "1/3", "3/4"], correctAnswer: 0, explanation: "P(cara) = 1/2. P(cara y cara) = 1/2 × 1/2 = 1/4" },
          { id: "prob-2", question: "En una bolsa hay 3 bolas rojas y 7 azules. ¿Probabilidad de sacar una roja?", options: ["3/10", "3/7", "7/10", "1/3"], correctAnswer: 0, explanation: "P = 3/(3+7) = 3/10" },
          { id: "prob-3", question: "¿De cuántas formas se pueden sentar 4 personas en una fila?", options: ["24", "16", "12", "8"], correctAnswer: 0, explanation: "Permutación: 4! = 4×3×2×1 = 24" },
          { id: "prob-4", question: "La probabilidad de que llueva es 0.3. ¿Cuál es la probabilidad de que NO llueva?", options: ["0.7", "0.3", "1.3", "0"], correctAnswer: 0, explanation: "P(no llueva) = 1 − 0.3 = 0.7" },
          { id: "prob-5", question: "Al lanzar un dado, ¿probabilidad de obtener un 3 o un 5?", options: ["1/3", "1/6", "2/3", "1/2"], correctAnswer: 0, explanation: "Son mutuamente excluyentes: P = 1/6 + 1/6 = 2/6 = 1/3" }
        ]
      }
    ]
  }
];

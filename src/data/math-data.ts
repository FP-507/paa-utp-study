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
        content: `Los números enteros incluyen los positivos, negativos y el cero (..., −3, −2, −1, 0, 1, 2, 3, ...). Forman el conjunto ℤ y son la base de todo el razonamiento matemático en la PAA. Es fundamental dominar las operaciones básicas y, sobre todo, el <strong>orden de operaciones (PEMDAS)</strong>, ya que la mayoría de errores en la prueba vienen de aplicar las operaciones en el orden incorrecto.

<strong style="color:#f59e0b">¿Por qué importa el orden de operaciones?</strong>
Imagina que te piden calcular <code>3 + 4 × 2</code>. Si sumas primero obtienes 14, pero si multiplicas primero obtienes 11. La respuesta correcta es <strong>11</strong>, porque la multiplicación tiene mayor prioridad. El acrónimo PEMDAS te da el orden correcto:

<strong>Orden de operaciones (PEMDAS):</strong>
<ol>
<li><strong>P</strong>aréntesis — resuelve primero lo que está dentro de ( ), [ ] y { }. Si hay paréntesis anidados, empieza por los más internos.</li>
<li><strong>E</strong>xponentes — potencias y raíces (2³, √9)</li>
<li><strong>M</strong>ultiplicación y <strong>D</strong>ivisión — se resuelven de <em>izquierda a derecha</em> (tienen la misma prioridad entre sí)</li>
<li><strong>A</strong>dición y <strong>S</strong>ustracción — se resuelven de <em>izquierda a derecha</em> (tienen la misma prioridad entre sí)</li>
</ol>

<strong style="color:#f59e0b">Ejemplo detallado paso a paso:</strong>
Calcula: <code>5 + 2 × (3² − 1) ÷ 4</code>
<ol>
<li><strong>Paréntesis:</strong> Dentro del paréntesis hay un exponente → 3² = 9. Luego 9 − 1 = 8. Queda: 5 + 2 × 8 ÷ 4</li>
<li><strong>Multiplicación y división (izquierda a derecha):</strong> 2 × 8 = 16, luego 16 ÷ 4 = 4. Queda: 5 + 4</li>
<li><strong>Suma:</strong> 5 + 4 = <strong>9</strong></li>
</ol>

<strong style="color:#f59e0b">Reglas de signos — ¿Por qué negativo × negativo = positivo?</strong>
Piensa en los signos como direcciones. Negativo significa "dirección opuesta". Si inviertes una dirección opuesta, regresas a la dirección original (positivo).

<ul>
<li><strong>(+) × (+) = (+)</strong> → Mismo sentido, resultado positivo</li>
<li><strong>(−) × (−) = (+)</strong> → Doble inversión = dirección original</li>
<li><strong>(+) × (−) = (−)</strong> → Una inversión = dirección opuesta</li>
<li><strong>(−) × (+) = (−)</strong> → Una inversión = dirección opuesta</li>
<li>Las mismas reglas aplican para la <strong>división</strong></li>
</ul>

<strong>Truco para contar signos:</strong> Cuando multiplicas varios números, cuenta la cantidad de signos negativos. Si es <em>par</em>, el resultado es positivo. Si es <em>impar</em>, es negativo. Ejemplo: (−2)(−3)(−4) tiene 3 negativos (impar) → resultado negativo = −24.

<strong style="color:#f59e0b">Valor absoluto — más que una definición</strong>
El valor absoluto |a| representa la <em>distancia</em> de un número al cero en la recta numérica. La distancia siempre es positiva. Esto significa:
<ul>
<li>|−5| = 5 (está a 5 unidades del cero)</li>
<li>|3| = 3 (está a 3 unidades del cero)</li>
<li>|0| = 0</li>
</ul>

<strong>Cuidado con expresiones dentro del valor absoluto:</strong> primero resuelve la expresión interior, luego aplica el valor absoluto. Por ejemplo: |3 − 10| = |−7| = 7, <strong>NO</strong> es |3| − |10| = 3 − 10 = −7.

<strong style="color:#f59e0b">Propiedad clave para la PAA:</strong>
<code>−x²</code> NO es lo mismo que <code>(−x)²</code>.
<ul>
<li><code>−x²</code> significa <code>−(x²)</code>: primero elevas al cuadrado, luego aplicas el negativo. Si x = 3: −(3²) = −9</li>
<li><code>(−x)²</code> significa elevar todo al cuadrado. Si x = 3: (−3)² = 9</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Sumar antes de multiplicar: 3 + 4 × 2 = 14 (incorrecto). ✅ 3 + 8 = 11</li>
<li>❌ Olvidar que restar un negativo es sumar: 5 − (−3) ≠ 2. ✅ 5 − (−3) = 5 + 3 = 8</li>
<li>❌ Confundir −3² con (−3)²: −3² = −9, pero (−3)² = 9</li>
<li>❌ Resolver multiplicación y división de derecha a izquierda en vez de izquierda a derecha</li>
</ul>`,
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
          { id: "arit-2", question: "¿Cuánto es (−8) ÷ (−2) × (−3)?", options: ["−12", "12", "−6", "6"], correctAnswer: 0, explanation: "(−8) ÷ (−2) = 4. Luego 4 × (−3) = −12" },
          { id: "arit-3", question: "Calcula: |−7| + |3 − 10|", options: ["14", "10", "0", "4"], correctAnswer: 0, explanation: "|−7| = 7. |3 − 10| = |−7| = 7. Total: 7 + 7 = 14" },
          { id: "arit-4", question: "¿Cuál es el resultado de 2 + 3² × (4 − 1)?", options: ["29", "45", "75", "33"], correctAnswer: 0, explanation: "Paréntesis: 4 − 1 = 3. Exponente: 3² = 9. Multiplicación: 9 × 3 = 27. Suma: 2 + 27 = 29" },
          { id: "arit-5", question: "Si a = −2 y b = 5, ¿cuánto es a² − 2ab?", options: ["24", "14", "−16", "0"], correctAnswer: 0, explanation: "a² = (−2)² = 4. 2ab = 2(−2)(5) = −20. Entonces: 4 − (−20) = 4 + 20 = 24" },
          { id: "arit-6", question: "¿Cuál es el resultado de (−5)² − (−3)³?", options: ["52", "−2", "16", "34"], correctAnswer: 0, explanation: "(−5)² = 25. (−3)³ = −27. Entonces: 25 − (−27) = 25 + 27 = 52" },
          { id: "arit-7", question: "Calcula: 48 ÷ (4 × 3) + 2²", options: ["8", "20", "6", "10"], correctAnswer: 0, explanation: "Paréntesis: 4 × 3 = 12. División: 48 ÷ 12 = 4. Exponente: 2² = 4. Suma: 4 + 4 = 8" },
          { id: "arit-8", question: "¿Cuánto es |−12 + 5| − |4 − 9|?", options: ["2", "12", "−2", "7"], correctAnswer: 0, explanation: "|−12 + 5| = |−7| = 7. |4 − 9| = |−5| = 5. Resultado: 7 − 5 = 2" },
          { id: "arit-9", question: "Calcula: (−1)¹⁰⁰ + (−1)⁹⁹", options: ["0", "2", "−2", "1"], correctAnswer: 0, explanation: "(−1)¹⁰⁰ = 1 (exponente par). (−1)⁹⁹ = −1 (exponente impar). Total: 1 + (−1) = 0" },
          { id: "arit-10", question: "Si x = −3, ¿cuánto es −x² + 2x?", options: ["−15", "3", "−3", "15"], correctAnswer: 0, explanation: "−x² = −(−3)² = −9. 2x = 2(−3) = −6. Total: −9 + (−6) = −15" },
          { id: "arit-11", question: "¿Cuál es el resultado de 100 − 3 × [2 + (8 − 5)²]?", options: ["67", "33", "91", "73"], correctAnswer: 0, explanation: "Primero: 8 − 5 = 3. Luego: 3² = 9. Después: 2 + 9 = 11. Multiplicación: 3 × 11 = 33. Final: 100 − 33 = 67" },
          { id: "arit-12", question: "¿Cuánto es (−2) × (−3) × (−4)?", options: ["−24", "24", "−12", "12"], correctAnswer: 0, explanation: "(−2)(−3) = 6. Luego 6 × (−4) = −24. Tres negativos dan resultado negativo." }
        ]
      },
      {
        id: "fracciones",
        title: "Fracciones",
        content: `Una fracción representa una <em>parte de un todo</em>: <code>a/b</code> donde <strong>a</strong> es el numerador (cuántas partes tomas) y <strong>b</strong> es el denominador (en cuántas partes iguales se divide el todo). Piénsalo como una pizza: si la cortas en 8 pedazos y comes 3, comiste <strong>3/8</strong> de la pizza.

<strong style="color:#f59e0b">Concepto fundamental: ¿Qué NO puede ser el denominador?</strong>
El denominador <strong>nunca puede ser cero</strong>. No tiene sentido dividir algo en cero partes. Si en la PAA ves una fracción con denominador que podría ser cero, esa es una restricción importante.

<strong style="color:#f59e0b">Fracciones equivalentes</strong>
Dos fracciones son equivalentes si representan la misma cantidad. Para obtener fracciones equivalentes, multiplica o divide numerador y denominador por el mismo número:
<ul>
<li>1/2 = 2/4 = 3/6 = 4/8 = 50/100 (todas representan la mitad)</li>
<li>Para verificar: multiplica en cruz. a/b = c/d si a×d = b×c</li>
</ul>

<strong style="color:#f59e0b">Suma y resta de fracciones — paso a paso</strong>
Para sumar o restar fracciones, necesitan el <strong>mismo denominador</strong>. Si no lo tienen, busca el MCM (Mínimo Común Múltiplo):

<strong>Procedimiento detallado:</strong>
<ol>
<li>Encuentra el MCM de los denominadores</li>
<li>Convierte cada fracción al denominador común</li>
<li>Suma o resta los numeradores (el denominador queda igual)</li>
<li>Simplifica si es posible</li>
</ol>

<strong>Ejemplo:</strong> 2/3 + 1/4
<ol>
<li>MCM de 3 y 4: Múltiplos de 3 → 3, 6, 9, <strong>12</strong>... Múltiplos de 4 → 4, 8, <strong>12</strong>... MCM = 12</li>
<li>2/3 = (2×4)/(3×4) = 8/12. Y 1/4 = (1×3)/(4×3) = 3/12</li>
<li>8/12 + 3/12 = 11/12</li>
<li>11 y 12 no tienen factores comunes → ya está simplificada</li>
</ol>

<strong style="color:#f59e0b">Multiplicación de fracciones</strong>
Es la operación más sencilla: numerador × numerador, denominador × denominador. <strong>No necesitas denominador común.</strong>
<ul>
<li>2/3 × 4/5 = (2×4)/(3×5) = 8/15</li>
</ul>
<strong>Truco de simplificación cruzada:</strong> Antes de multiplicar, puedes simplificar diagonalmente. Ejemplo: 4/9 × 3/8. Simplifica 4 con 8 (÷4) y 3 con 9 (÷3): queda 1/3 × 1/2 = 1/6. Es más rápido que multiplicar 12/72 y luego simplificar.

<strong style="color:#f59e0b">División de fracciones — "voltea y multiplica"</strong>
Para dividir fracciones, multiplica por el <strong>recíproco</strong> (inviertes la segunda fracción):
<ul>
<li>2/3 ÷ 4/5 = 2/3 × <strong>5/4</strong> = 10/12 = 5/6</li>
</ul>
<strong>¿Por qué funciona?</strong> Dividir entre una fracción es preguntar "¿cuántas veces cabe esta fracción en la otra?". Al invertir y multiplicar, matemáticamente haces lo mismo. Es como preguntar "¿cuántas mitades caben en 3?" → 3 ÷ 1/2 = 3 × 2 = 6. Efectivamente, 6 mitades hacen 3.

<strong style="color:#f59e0b">Simplificar fracciones</strong>
Divide numerador y denominador por su MCD (Máximo Común Divisor):
<ul>
<li>12/18 → MCD de 12 y 18 = 6 → (12÷6)/(18÷6) = 2/3</li>
<li>Truco: si ambos son pares, divide entre 2. Repite hasta que no se pueda.</li>
</ul>

<strong style="color:#f59e0b">Fracciones mixtas e impropias</strong>
<ul>
<li><strong>Fracción impropia:</strong> el numerador es mayor que el denominador (7/3)</li>
<li><strong>Número mixto:</strong> un entero más una fracción (2⅓)</li>
<li><strong>De mixto a impropio:</strong> multiplica entero × denominador + numerador. 2⅓ = (2×3 + 1)/3 = 7/3</li>
<li><strong>De impropio a mixto:</strong> divide. 17/5 = 3 con residuo 2, entonces 3 2/5</li>
</ul>

<strong style="color:#f59e0b">Comparación de fracciones</strong>
Para saber cuál fracción es mayor, hay dos métodos:
<ol>
<li><strong>Denominador común:</strong> convierte ambas al mismo denominador y compara numeradores</li>
<li><strong>Multiplicación cruzada:</strong> para comparar a/b y c/d, compara a×d con b×c. Si a×d > b×c, entonces a/b > c/d</li>
</ol>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Sumar numeradores Y denominadores: 1/3 + 1/4 ≠ 2/7. ✅ Busca MCM</li>
<li>❌ Olvidar simplificar la respuesta final</li>
<li>❌ No convertir mixtos a impropios antes de operar</li>
<li>❌ Confundir "de" con suma: "1/3 de 12" significa 1/3 × 12 = 4, no 1/3 + 12</li>
</ul>`,
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
          { id: "frac-2", question: "¿Cuánto es 5/6 − 1/3?", options: ["1/2", "4/3", "2/3", "1/6"], correctAnswer: 0, explanation: "1/3 = 2/6. Entonces 5/6 − 2/6 = 3/6 = 1/2" },
          { id: "frac-3", question: "¿Cuánto es 2/3 × 9/4?", options: ["3/2", "18/12", "6/7", "11/12"], correctAnswer: 0, explanation: "2/3 × 9/4 = 18/12 = 3/2" },
          { id: "frac-4", question: "Si como 2/5 de una pizza y luego 1/3 del resto, ¿qué fracción total comí?", options: ["3/5", "11/15", "2/5", "7/15"], correctAnswer: 0, explanation: "Comí 2/5. El resto es 3/5. De ese resto, 1/3 = 1/5. Total: 2/5 + 1/5 = 3/5" },
          { id: "frac-5", question: "¿Cuál fracción es mayor: 3/7 o 5/12?", options: ["3/7", "5/12", "Son iguales", "No se puede determinar"], correctAnswer: 0, explanation: "3/7 = 36/84 y 5/12 = 35/84. Como 36 > 35, entonces 3/7 > 5/12" },
          { id: "frac-6", question: "Simplifica: 48/64", options: ["3/4", "6/8", "12/16", "2/3"], correctAnswer: 0, explanation: "MCD de 48 y 64 = 16. 48÷16 = 3, 64÷16 = 4. Resultado: 3/4" },
          { id: "frac-7", question: "¿Cuánto es 1/2 + 1/3 + 1/6?", options: ["1", "5/6", "3/6", "2/3"], correctAnswer: 0, explanation: "MCM = 6. 3/6 + 2/6 + 1/6 = 6/6 = 1" },
          { id: "frac-8", question: "Convierte 3 2/5 a fracción impropia:", options: ["17/5", "15/5", "11/5", "32/5"], correctAnswer: 0, explanation: "3 × 5 + 2 = 17. Resultado: 17/5" },
          { id: "frac-9", question: "¿Cuánto es (3/4) ÷ (1/2)?", options: ["3/2", "3/8", "2/3", "1/2"], correctAnswer: 0, explanation: "Multiplicar por el recíproco: 3/4 × 2/1 = 6/4 = 3/2" },
          { id: "frac-10", question: "¿Cuánto es 7/8 − 3/4?", options: ["1/8", "4/4", "3/8", "1/4"], correctAnswer: 0, explanation: "3/4 = 6/8. Entonces 7/8 − 6/8 = 1/8" },
          { id: "frac-11", question: "Un tanque tiene 3/4 de agua. Se usan 2/5 de lo que hay. ¿Qué fracción del tanque queda?", options: ["9/20", "7/20", "3/10", "1/2"], correctAnswer: 0, explanation: "Se usan 2/5 de 3/4 = 6/20 = 3/10. Queda: 3/4 − 3/10 = 15/20 − 6/20 = 9/20" },
          { id: "frac-12", question: "Ordena de menor a mayor: 2/3, 3/5, 7/10", options: ["3/5, 2/3, 7/10", "2/3, 3/5, 7/10", "7/10, 2/3, 3/5", "3/5, 7/10, 2/3"], correctAnswer: 0, explanation: "MCM=30: 2/3=20/30, 3/5=18/30, 7/10=21/30. Orden: 18<20<21 → 3/5, 2/3, 7/10" }
        ]
      },
      {
        id: "porcentajes",
        title: "Porcentajes, Razones y Proporciones",
        content: `<strong style="color:#f59e0b">Porcentajes — el lenguaje de las proporciones</strong>
Un porcentaje es literalmente "por cada cien". Es una forma de expresar una fracción con denominador 100. Cuando decimos "25%", estamos diciendo "25 de cada 100" o 25/100 = 1/4. Los porcentajes están en todas partes: descuentos en tiendas, impuestos, notas de la universidad, estadísticas.

<strong>Tres formas de expresar lo mismo:</strong>
<ul>
<li><strong>Fracción:</strong> 3/4</li>
<li><strong>Decimal:</strong> 0.75</li>
<li><strong>Porcentaje:</strong> 75%</li>
</ul>

<strong style="color:#f59e0b">Conversiones — domínalas para la PAA:</strong>
<ul>
<li><strong>Fracción → Porcentaje:</strong> divide el numerador entre el denominador, luego multiplica × 100. Ejemplo: 3/4 = 0.75 × 100 = 75%</li>
<li><strong>Porcentaje → Decimal:</strong> divide entre 100 (mueve el punto dos lugares a la izquierda). Ejemplo: 45% = 0.45</li>
<li><strong>Decimal → Porcentaje:</strong> multiplica × 100 (mueve el punto dos lugares a la derecha). Ejemplo: 0.125 = 12.5%</li>
<li><strong>Porcentaje → Fracción:</strong> pon el porcentaje sobre 100 y simplifica. Ejemplo: 60% = 60/100 = 3/5</li>
</ul>

<strong>Equivalencias que debes memorizar:</strong>
<code>1/2 = 50% | 1/4 = 25% | 3/4 = 75% | 1/5 = 20% | 1/3 ≈ 33.3% | 2/3 ≈ 66.7% | 1/8 = 12.5%</code>

<strong style="color:#f59e0b">Calcular el X% de un número</strong>
Multiplica el número por X/100 (o por el decimal equivalente).
<ul>
<li>¿Cuánto es el 15% de 200? → 200 × 0.15 = 30</li>
<li><strong>Truco del 10%:</strong> El 10% de cualquier número es mover el punto decimal un lugar a la izquierda. 10% de 350 = 35. Luego puedes calcular otros: 5% = la mitad del 10%, 20% = el doble del 10%, etc.</li>
</ul>

<strong style="color:#f59e0b">Aumentos y descuentos — el atajo del factor</strong>
En lugar de calcular el porcentaje y luego sumar/restar, usa un <strong>factor multiplicador</strong>:
<ul>
<li><strong>Aumento del 20%:</strong> Precio × (1 + 0.20) = Precio × 1.20</li>
<li><strong>Descuento del 15%:</strong> Precio × (1 − 0.15) = Precio × 0.85</li>
<li><strong>Aumento del 8% (impuesto):</strong> Precio × 1.08</li>
</ul>

<strong style="color:#f59e0b">⚠ Trampa clásica de la PAA: aumentos y descuentos sucesivos</strong>
Un aumento del 20% seguido de un descuento del 20% <strong>NO te devuelve al precio original</strong>.
<ul>
<li>Precio original: B/.100</li>
<li>Aumento 20%: 100 × 1.20 = B/.120</li>
<li>Descuento 20%: 120 × 0.80 = B/.96</li>
<li>¡El precio final es B/.96, NO B/.100! Perdiste un 4%.</li>
</ul>
La razón: el descuento se aplica sobre el precio <em>ya aumentado</em>, que es mayor.

<strong style="color:#f59e0b">¿Cuál fue el porcentaje de cambio?</strong>
<code>Porcentaje de cambio = (Valor nuevo − Valor original) / Valor original × 100</code>
<ul>
<li>Si el resultado es positivo → fue un aumento</li>
<li>Si el resultado es negativo → fue un descuento</li>
<li>Ejemplo: De B/.50 a B/.65 → (65−50)/50 × 100 = 30% de aumento</li>
</ul>

<strong style="color:#f59e0b">Razones y Proporciones</strong>
Una <strong>razón</strong> compara dos cantidades: a:b o a/b. Ejemplo: si hay 12 niñas y 18 niños, la razón es 12:18 = 2:3 (simplificando entre 6).

Una <strong>proporción</strong> es la igualdad de dos razones: a/b = c/d. La propiedad fundamental dice que <strong>a × d = b × c</strong> (productos cruzados).

<strong style="color:#f59e0b">Regla de tres — la herramienta más usada</strong>
La regla de tres resuelve problemas donde dos cantidades están relacionadas proporcionalmente.

<strong>Proporción directa</strong> (cuando una sube, la otra también sube):
Si 5 kg cuestan B/.15, ¿cuánto cuestan 8 kg?
<code>5 kg → B/.15</code>
<code>8 kg → x</code>
<code>x = (15 × 8) / 5 = B/.24</code>

<strong>Proporción inversa</strong> (cuando una sube, la otra baja):
Si 3 obreros hacen un trabajo en 12 días, ¿en cuántos días lo hacen 4 obreros?
<code>3 obreros → 12 días</code>
<code>4 obreros → x días</code>
<code>x = (3 × 12) / 4 = 9 días</code> (más obreros = menos días)

<strong>¿Cómo sé si es directa o inversa?</strong> Pregúntate: "Si aumento la primera cantidad, ¿la segunda aumenta o disminuye?" Si aumenta → directa. Si disminuye → inversa.

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Calcular el porcentaje de cambio usando el valor nuevo en vez del original</li>
<li>❌ Pensar que un aumento y descuento iguales se cancelan</li>
<li>❌ Confundir proporción directa e inversa en problemas de obreros/tiempo</li>
<li>❌ No simplificar razones a su mínima expresión</li>
</ul>`,
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
          { id: "porc-5", question: "Un precio aumenta 20% y luego se le aplica un 20% de descuento. ¿El precio final es...?", options: ["96% del original", "Igual al original", "80% del original", "104% del original"], correctAnswer: 0, explanation: "100 × 1.20 = 120. Luego 120 × 0.80 = 96. Es 96% del original." },
          { id: "porc-6", question: "¿Qué porcentaje es 45 de 180?", options: ["25%", "20%", "30%", "15%"], correctAnswer: 0, explanation: "(45/180) × 100 = 25%" },
          { id: "porc-7", question: "Un artículo costaba B/.120 y ahora cuesta B/.90. ¿Cuál fue el porcentaje de descuento?", options: ["25%", "30%", "20%", "33%"], correctAnswer: 0, explanation: "Descuento = 30. (30/120) × 100 = 25%" },
          { id: "porc-8", question: "Si un carro recorre 150 km con 10 galones, ¿cuántos km recorre con 16 galones?", options: ["240", "200", "180", "260"], correctAnswer: 0, explanation: "Proporción directa: 150/10 = x/16 → x = 150 × 16/10 = 240 km" },
          { id: "porc-9", question: "La razón de niños a niñas en un salón es 3:5. Si hay 40 estudiantes, ¿cuántas niñas hay?", options: ["25", "15", "20", "24"], correctAnswer: 0, explanation: "Total de partes = 3+5 = 8. Cada parte = 40/8 = 5. Niñas = 5 × 5 = 25" },
          { id: "porc-10", question: "Un celular cuesta B/.400 más 7% de impuesto. ¿Cuál es el precio total?", options: ["B/.428", "B/.407", "B/.432", "B/.440"], correctAnswer: 0, explanation: "Impuesto = 400 × 0.07 = 28. Total = 400 + 28 = B/.428" },
          { id: "porc-11", question: "Si 12 obreros hacen una obra en 15 días, ¿cuántos obreros se necesitan para hacerla en 10 días?", options: ["18", "8", "20", "24"], correctAnswer: 0, explanation: "Proporción inversa: 12 × 15 = x × 10 → x = 180/10 = 18 obreros" },
          { id: "porc-12", question: "Un estudiante contestó correctamente 36 de 48 preguntas. ¿Qué porcentaje acertó?", options: ["75%", "80%", "70%", "85%"], correctAnswer: 0, explanation: "(36/48) × 100 = 75%" }
        ]
      },
      {
        id: "potencias-raices",
        title: "Potencias y Raíces",
        content: `<strong style="color:#f59e0b">Potencias — multiplicación abreviada</strong>
Una potencia indica multiplicación repetida: a<sup>n</sup> = a × a × ... × a (n veces). El número <strong>a</strong> es la <em>base</em> y <strong>n</strong> es el <em>exponente</em>. Ejemplo: 2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32.

<strong>¿Por qué son importantes?</strong> Las potencias aparecen constantemente en la PAA: en fórmulas de área y volumen, en notación científica, en ecuaciones cuadráticas, y en problemas de crecimiento.

<strong style="color:#f59e0b">Leyes de exponentes — entiende el PORQUÉ</strong>
No memorices estas leyes sin entenderlas. Cada una tiene una lógica simple:

<ul>
<li><strong>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></strong> — ¿Por qué? Porque 2³ × 2⁴ = (2×2×2) × (2×2×2×2) = 2⁷. Estás juntando las multiplicaciones.</li>
<li><strong>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></strong> — ¿Por qué? Porque 2⁵ ÷ 2³ = (2×2×2×2×2) ÷ (2×2×2). Cancelas 3 doses y quedan 2 → 2².</li>
<li><strong>(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></strong> — ¿Por qué? Porque (2³)² = 2³ × 2³ = 2⁶. Estás multiplicando el grupo n veces.</li>
<li><strong>a<sup>0</sup> = 1</strong> — ¿Por qué? Por el patrón: 2³=8, 2²=4, 2¹=2, 2⁰=? Cada vez divides entre 2: 8÷2=4, 4÷2=2, 2÷2=<strong>1</strong>. (Nota: 0⁰ no está definido)</li>
<li><strong>a<sup>−n</sup> = 1/a<sup>n</sup></strong> — ¿Por qué? Siguiendo el patrón: 2¹=2, 2⁰=1, 2⁻¹=? Continúa dividiendo entre 2: 1÷2=1/2. Un exponente negativo NO hace el número negativo, lo convierte en <em>fracción</em>.</li>
<li><strong>(a × b)<sup>n</sup> = a<sup>n</sup> × b<sup>n</sup></strong> — El exponente se "distribuye" en la multiplicación. Ejemplo: (3×2)² = 6² = 36 = 3² × 2² = 9 × 4 = 36 ✓</li>
<li><strong>(a/b)<sup>n</sup> = a<sup>n</sup>/b<sup>n</sup></strong> — También se distribuye en la división.</li>
</ul>

<strong style="color:#f59e0b">Potencias que debes memorizar para la PAA:</strong>
<code>2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024</code>
<code>3²=9, 3³=27, 3⁴=81 | 4²=16, 4³=64 | 5²=25, 5³=125 | 6²=36 | 7²=49 | 8²=64 | 9²=81</code>

<strong style="color:#f59e0b">Raíces — la operación inversa</strong>
La raíz cuadrada √a pregunta: "¿Qué número multiplicado por sí mismo da a?" Es lo opuesto a elevar al cuadrado.
<ul>
<li>√25 = 5 porque 5 × 5 = 25</li>
<li>√a = a<sup>1/2</sup> — una raíz es un exponente fraccionario</li>
<li>∛a = a<sup>1/3</sup> (raíz cúbica) — pregunta: "¿Qué número elevado al cubo da a?"</li>
<li>∛27 = 3 porque 3 × 3 × 3 = 27</li>
<li>∛(−8) = −2 porque (−2)³ = −8 (las raíces cúbicas SÍ pueden ser negativas)</li>
</ul>

<strong>Cuadrados perfectos que debes conocer:</strong>
<code>1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225</code>
(Son los cuadrados de 1 a 15)

<strong style="color:#f59e0b">Simplificación de radicales — paso a paso</strong>
Para simplificar √n, busca el mayor cuadrado perfecto que divida a n:
<ol>
<li>√50 → ¿Qué cuadrado perfecto divide a 50? 25 sí: 50 = 25 × 2</li>
<li>√50 = √(25 × 2) = √25 × √2 = 5√2</li>
</ol>

<strong>Otro ejemplo:</strong> √72
<ol>
<li>72 = 36 × 2 (36 es cuadrado perfecto)</li>
<li>√72 = √(36 × 2) = 6√2</li>
</ol>

<strong style="color:#f59e0b">Operaciones con radicales</strong>
<ul>
<li><strong>Suma/resta:</strong> solo si tienen el mismo radical. 3√5 + 7√5 = 10√5. Pero 3√5 + 7√3 NO se pueden sumar.</li>
<li><strong>Multiplicación:</strong> √a × √b = √(a×b). Ejemplo: √3 × √12 = √36 = 6</li>
<li><strong>División:</strong> √a / √b = √(a/b). Ejemplo: √50 / √2 = √25 = 5</li>
</ul>

<strong style="color:#f59e0b">Notación científica (aparece en la PAA)</strong>
Escribe números muy grandes o pequeños como: a × 10<sup>n</sup> donde 1 ≤ a < 10.
<ul>
<li>3,500,000 = 3.5 × 10⁶ (mueves el punto 6 lugares a la izquierda)</li>
<li>0.00042 = 4.2 × 10⁻⁴ (mueves el punto 4 lugares a la derecha)</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Pensar que a⁻² es negativo. a⁻² = 1/a², que es positivo si a ≠ 0</li>
<li>❌ Sumar exponentes al multiplicar bases diferentes: 2³ × 3² ≠ 6⁵. La ley solo aplica con la <em>misma base</em></li>
<li>❌ Confundir (−3)² = 9 con −3² = −9</li>
<li>❌ Creer que √(a² + b²) = a + b. Esto es FALSO. √(9+16) = √25 = 5, no 3+4=7</li>
<li>❌ Sumar radicales diferentes: 2√3 + 5√2 no se simplifica más</li>
</ul>`,
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
          { id: "pot-5", question: "Si 2ˣ = 32, ¿cuánto vale x?", options: ["5", "4", "6", "3"], correctAnswer: 0, explanation: "2⁵ = 32, entonces x = 5" },
          { id: "pot-6", question: "Simplifica: (5²)(5³) ÷ 5⁴", options: ["5", "25", "1", "125"], correctAnswer: 0, explanation: "5²⁺³ ÷ 5⁴ = 5⁵ ÷ 5⁴ = 5¹ = 5" },
          { id: "pot-7", question: "¿Cuánto es 4⁻²?", options: ["1/16", "−16", "−8", "1/8"], correctAnswer: 0, explanation: "4⁻² = 1/4² = 1/16" },
          { id: "pot-8", question: "Simplifica: √(75) − √(27)", options: ["2√3", "√48", "4√3", "3√2"], correctAnswer: 0, explanation: "√75 = 5√3. √27 = 3√3. Resta: 5√3 − 3√3 = 2√3" },
          { id: "pot-9", question: "¿Cuánto es ∛(−64)?", options: ["−4", "4", "−8", "8"], correctAnswer: 0, explanation: "(−4)³ = −64, entonces ∛(−64) = −4" },
          { id: "pot-10", question: "Simplifica: (3 × 2)⁴ ÷ 3⁴", options: ["16", "6", "8", "81"], correctAnswer: 0, explanation: "(3×2)⁴ = 3⁴ × 2⁴. Al dividir por 3⁴ queda 2⁴ = 16" },
          { id: "pot-11", question: "¿Cuánto es √(16 × 25)?", options: ["20", "41", "200", "10"], correctAnswer: 0, explanation: "√(16 × 25) = √16 × √25 = 4 × 5 = 20" },
          { id: "pot-12", question: "Si 3ˣ = 81, ¿cuánto vale x?", options: ["4", "3", "5", "27"], correctAnswer: 0, explanation: "3⁴ = 81, entonces x = 4" }
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
        content: `Una <strong>expresión algebraica</strong> combina números, variables (letras que representan valores desconocidos) y operaciones. Ejemplo: 3x² + 2x − 5. Este es un <strong>polinomio</strong> de segundo grado con tres <em>términos</em>.

<strong style="color:#f59e0b">Vocabulario esencial</strong>
<ul>
<li><strong>Término:</strong> cada parte separada por + o −. En <code>3x² + 2x − 5</code> hay tres términos: 3x², 2x, y −5</li>
<li><strong>Coeficiente:</strong> el número que multiplica a la variable. En 3x², el coeficiente es 3</li>
<li><strong>Término independiente:</strong> el término sin variable (la constante). Aquí es −5</li>
<li><strong>Grado:</strong> el mayor exponente de la variable. Aquí es 2 (por x²)</li>
</ul>

<strong style="color:#f59e0b">Términos semejantes — cuándo y cómo combinar</strong>
Dos términos son semejantes si tienen <em>exactamente la misma parte literal</em> (mismas variables con los mismos exponentes). Solo los términos semejantes se pueden sumar o restar:
<ul>
<li>3x² y 5x² son semejantes → 3x² + 5x² = 8x²</li>
<li>3x² y 3x <strong>NO</strong> son semejantes (diferente exponente)</li>
<li>4xy y −2xy son semejantes → 4xy − 2xy = 2xy</li>
<li>4xy y 4x²y <strong>NO</strong> son semejantes</li>
</ul>

<strong>Ejemplo de simplificación:</strong> 5x² + 3x − 2x² + 7 − x + 1
<ol>
<li>Agrupa semejantes: (5x² − 2x²) + (3x − x) + (7 + 1)</li>
<li>Simplifica: 3x² + 2x + 8</li>
</ol>

<strong style="color:#f59e0b">Productos notables — los 3 más importantes</strong>
Estas fórmulas aparecen constantemente en la PAA. No las memorices mecánicamente — entiéndelas:

<strong>1. Cuadrado de un binomio (suma):</strong>
<code>(a + b)² = a² + 2ab + b²</code>
¿Por qué? Porque (a+b)² = (a+b)(a+b). Al multiplicar: a·a + a·b + b·a + b·b = a² + 2ab + b².
Ejemplo: (x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9. <strong>NO es x² + 9</strong> — el término del medio (2ab) es el que más se olvida.

<strong>2. Cuadrado de un binomio (resta):</strong>
<code>(a − b)² = a² − 2ab + b²</code>
Es igual pero con el término del medio negativo. Note que b² siempre es <strong>positivo</strong> (se eleva al cuadrado).
Ejemplo: (2x − 5)² = 4x² − 20x + 25

<strong>3. Diferencia de cuadrados (suma por diferencia):</strong>
<code>(a + b)(a − b) = a² − b²</code>
Los términos del medio se cancelan: a·(−b) + b·a = −ab + ab = 0.
Ejemplo: (x + 7)(x − 7) = x² − 49

<strong style="color:#f59e0b">Factorización — descomponer en factores</strong>
Factorizar es lo opuesto a expandir. Conviertes una expresión en un producto de factores más simples. Es esencial para resolver ecuaciones cuadráticas.

<strong>Método 1: Factor común</strong>
Busca el máximo factor que comparten todos los términos y sácalo:
<ul>
<li>6x² + 9x → MCD de 6 y 9 es 3, ambos tienen x → <strong>3x(2x + 3)</strong></li>
<li>4x³ − 8x² + 12x → Factor común 4x → <strong>4x(x² − 2x + 3)</strong></li>
</ul>
<strong>Siempre intenta factor común PRIMERO, antes de cualquier otro método.</strong>

<strong>Método 2: Trinomio de la forma x² + bx + c</strong>
Busca dos números que: multiplicados den <strong>c</strong> y sumados den <strong>b</strong>.
<ul>
<li>x² + 5x + 6: ¿Qué dos números multiplican 6 y suman 5? → <strong>2 y 3</strong> → (x + 2)(x + 3)</li>
<li>x² − x − 12: ¿Qué números multiplican −12 y suman −1? → <strong>−4 y 3</strong> → (x − 4)(x + 3)</li>
</ul>

<strong>Método 3: Diferencia de cuadrados</strong>
Si ves la forma a² − b², factoriza como (a + b)(a − b):
<ul>
<li>x² − 16 = x² − 4² = (x + 4)(x − 4)</li>
<li>9x² − 25 = (3x)² − 5² = (3x + 5)(3x − 5)</li>
</ul>

<strong>Método 4: Trinomio cuadrado perfecto</strong>
Si reconoces la forma a² ± 2ab + b², factoriza como (a ± b)²:
<ul>
<li>x² + 10x + 25 = (x + 5)² — porque 10x = 2(x)(5) y 25 = 5²</li>
</ul>

<strong style="color:#f59e0b">Verificación: siempre expande tu factorización</strong>
Después de factorizar, multiplica los factores para comprobar que obtienes la expresión original. Si no coincide, revisa tus números.

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Olvidar el término 2ab en (a+b)²: (x+3)² ≠ x²+9. Es x²+6x+9</li>
<li>❌ Confundir signos al factorizar trinomios con c negativo</li>
<li>❌ No sacar factor común antes de intentar otros métodos</li>
<li>❌ Pensar que x²+9 se puede factorizar como (x+3)(x+3). No, eso da x²+6x+9. La suma de cuadrados NO se factoriza con reales.</li>
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
          { id: "alg-5", question: "Expande: (3a − 2)²", options: ["9a²−12a+4", "9a²−4", "9a²+12a+4", "3a²−12a+4"], correctAnswer: 0, explanation: "(3a)² − 2(3a)(2) + 2² = 9a² − 12a + 4" },
          { id: "alg-6", question: "Factoriza: x² − 5x − 14", options: ["(x−7)(x+2)", "(x+7)(x−2)", "(x−14)(x+1)", "(x+14)(x−1)"], correctAnswer: 0, explanation: "Busca dos números que multipliquen −14 y sumen −5: −7 y 2. → (x−7)(x+2)" },
          { id: "alg-7", question: "Simplifica: 2(3x − 1) − 3(x + 4)", options: ["3x − 14", "3x + 2", "9x − 14", "3x − 10"], correctAnswer: 0, explanation: "6x − 2 − 3x − 12 = 3x − 14" },
          { id: "alg-8", question: "Factoriza: 25y² − 16", options: ["(5y+4)(5y−4)", "(5y−4)²", "(25y+16)(y−1)", "(5y+16)(5y−16)"], correctAnswer: 0, explanation: "Diferencia de cuadrados: (5y)² − 4² = (5y+4)(5y−4)" },
          { id: "alg-9", question: "¿Cuánto es (a+b)(a+b)?", options: ["a²+2ab+b²", "a²+b²", "a²−b²", "2a+2b"], correctAnswer: 0, explanation: "Es el cuadrado de un binomio: (a+b)² = a² + 2ab + b²" },
          { id: "alg-10", question: "Factoriza: 3x² + 6x − 9", options: ["3(x+3)(x−1)", "3(x²+2x−3)", "(3x+9)(x−1)", "(x+3)(3x−3)"], correctAnswer: 0, explanation: "Factor común 3: 3(x²+2x−3). Luego factoriza: 3(x+3)(x−1)" },
          { id: "alg-11", question: "Expande: (x+2)(x²−2x+4)", options: ["x³+8", "x³−8", "x³+2x²+4x+8", "x³−2x+8"], correctAnswer: 0, explanation: "Es la suma de cubos: a³+b³ = (a+b)(a²−ab+b²). Aquí a=x, b=2 → x³+8" },
          { id: "alg-12", question: "Si x+y = 10 y xy = 21, ¿cuánto es x²+y²?", options: ["58", "79", "100", "42"], correctAnswer: 0, explanation: "(x+y)² = x²+2xy+y². Entonces x²+y² = (x+y)²−2xy = 100−42 = 58" }
        ]
      },
      {
        id: "ecuaciones-primer-grado",
        title: "Ecuaciones de Primer Grado",
        content: `Una ecuación de primer grado (o <strong>ecuación lineal</strong>) tiene la forma <code>ax + b = c</code>, donde la variable x aparece con exponente 1 (no hay x², x³, etc.). El objetivo es <strong>despejar la variable</strong> — aislarla de un lado del igual.

<strong style="color:#f59e0b">¿Qué significa "resolver" una ecuación?</strong>
Significa encontrar el valor de x que hace que ambos lados sean iguales. Es como una balanza: todo lo que hagas de un lado, debes hacerlo del otro para mantener el equilibrio.

<strong style="color:#f59e0b">Procedimiento paso a paso:</strong>
<ol>
<li><strong>Elimina paréntesis</strong> — distribuye los coeficientes</li>
<li><strong>Elimina fracciones</strong> — multiplica todo por el MCM de los denominadores</li>
<li><strong>Agrupa</strong> — variables a un lado, constantes al otro (al mover un término, cambia de signo)</li>
<li><strong>Simplifica</strong> — combina términos semejantes</li>
<li><strong>Divide</strong> — por el coeficiente de la variable</li>
<li><strong>Verifica</strong> — sustituye tu respuesta en la ecuación original</li>
</ol>

<strong style="color:#f59e0b">Ejemplo detallado:</strong> Resuelve 3(x − 2) + 4 = 2x + 5
<ol>
<li><strong>Distribuir:</strong> 3x − 6 + 4 = 2x + 5</li>
<li><strong>Simplificar cada lado:</strong> 3x − 2 = 2x + 5</li>
<li><strong>Variables a la izquierda:</strong> 3x − 2x = 5 + 2</li>
<li><strong>Simplificar:</strong> x = 7</li>
<li><strong>Verificar:</strong> 3(7−2) + 4 = 3(5) + 4 = 19. Y 2(7) + 5 = 19 ✓</li>
</ol>

<strong style="color:#f59e0b">Ecuaciones con fracciones — elimínalas primero</strong>
Multiplica <strong>toda</strong> la ecuación (todos los términos, ambos lados) por el MCM de los denominadores.

<strong>Ejemplo:</strong> x/3 + x/4 = 7
<ol>
<li>MCM de 3 y 4 = 12</li>
<li>Multiplica todo por 12: 12·(x/3) + 12·(x/4) = 12·7</li>
<li>Simplifica: 4x + 3x = 84</li>
<li>Combina: 7x = 84 → x = 12</li>
</ol>

<strong style="color:#f59e0b">Problemas con palabras — la clave es traducir</strong>
La PAA frecuentemente presenta ecuaciones disfrazadas de problemas con palabras. El truco es <strong>traducir el español a álgebra</strong>:
<ul>
<li>"un número" → x</li>
<li>"el doble de" → 2x</li>
<li>"tres más que" → x + 3</li>
<li>"la mitad de" → x/2</li>
<li>"consecutivos" → x, x+1, x+2</li>
<li>"pares consecutivos" → x, x+2, x+4</li>
<li>"la edad de Ana es el triple de la de su hijo" → a = 3h</li>
</ul>

<strong style="color:#f59e0b">Casos especiales que aparecen en la PAA:</strong>
<ul>
<li><strong>Identidad (infinitas soluciones):</strong> Si al simplificar llegas a algo como 0 = 0 o 5 = 5, la ecuación es verdadera para CUALQUIER valor de x. Ejemplo: 2(x+1) = 2x + 2 → siempre verdadera.</li>
<li><strong>Contradicción (sin solución):</strong> Si llegas a algo como 0 = 5, la ecuación no tiene solución. Ejemplo: x + 1 = x + 3 → 1 = 3, imposible.</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ No cambiar el signo al mover un término al otro lado</li>
<li>❌ Multiplicar solo un lado por el MCM en vez de toda la ecuación</li>
<li>❌ Distribuir mal: 3(x − 2) = 3x − 6, NO 3x − 2</li>
<li>❌ Dividir incorrectamente: si 5x = 15, x = 3 (no x = 75)</li>
<li>❌ No verificar la respuesta sustituyendo en la ecuación original</li>
</ul>`,
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
          { id: "ec1-5", question: "La edad de Ana es el triple de la de su hijo. Si la suma de sus edades es 48, ¿cuántos años tiene el hijo?", options: ["12", "16", "36", "24"], correctAnswer: 0, explanation: "Sea x la edad del hijo. 3x + x = 48 → 4x = 48 → x = 12" },
          { id: "ec1-6", question: "Resuelve: 4(2x − 1) − 3(x + 2) = 5", options: ["3", "1", "5", "−1"], correctAnswer: 0, explanation: "8x − 4 − 3x − 6 = 5 → 5x − 10 = 5 → 5x = 15 → x = 3" },
          { id: "ec1-7", question: "Si el perímetro de un rectángulo es 36 y el largo es el doble del ancho, ¿cuánto mide el ancho?", options: ["6", "12", "9", "18"], correctAnswer: 0, explanation: "Sea a = ancho. P = 2(2a + a) = 6a = 36 → a = 6" },
          { id: "ec1-8", question: "Resuelve: (x+1)/3 = (x−1)/2", options: ["5", "3", "−5", "1"], correctAnswer: 0, explanation: "MCM=6: 2(x+1) = 3(x−1) → 2x+2 = 3x−3 → 5 = x" },
          { id: "ec1-9", question: "Un número aumentado en su mitad es 18. ¿Cuál es el número?", options: ["12", "9", "6", "36"], correctAnswer: 0, explanation: "x + x/2 = 18 → 3x/2 = 18 → x = 12" },
          { id: "ec1-10", question: "Resuelve: 7 − (2x + 3) = 2(2 − x)", options: ["Todo número real", "0", "2", "No tiene solución"], correctAnswer: 0, explanation: "7 − 2x − 3 = 4 − 2x → 4 − 2x = 4 − 2x. Es una identidad (siempre verdadera) → la solución es todo número real." },
          { id: "ec1-11", question: "Tres números consecutivos suman 72. ¿Cuál es el menor?", options: ["23", "24", "25", "22"], correctAnswer: 0, explanation: "x + (x+1) + (x+2) = 72 → 3x + 3 = 72 → 3x = 69 → x = 23" },
          { id: "ec1-12", question: "Resuelve: 0.5x + 1.5 = 3.5", options: ["4", "2", "5", "7"], correctAnswer: 0, explanation: "0.5x = 3.5 − 1.5 = 2 → x = 2/0.5 = 4" }
        ]
      },
      {
        id: "ecuaciones-segundo-grado",
        title: "Ecuaciones de Segundo Grado",
        content: `Una ecuación cuadrática tiene la forma <code>ax² + bx + c = 0</code>, donde <strong>a ≠ 0</strong>. Se llama "cuadrática" o "de segundo grado" porque el mayor exponente de la variable es 2. Este tipo de ecuación puede tener <strong>dos soluciones, una solución, o ninguna solución real</strong>.

<strong style="color:#f59e0b">¿Por qué puede tener dos soluciones?</strong>
Piénsalo gráficamente: la ecuación ax² + bx + c = 0 pregunta "¿en qué puntos la parábola y = ax² + bx + c cruza el eje x?". Una parábola puede cruzar el eje x en 2 puntos, tocarlo en 1 punto, o no tocarlo nunca.

<strong style="color:#f59e0b">Método 1: Factorización (el más rápido)</strong>
Si puedes descomponer el trinomio en dos factores, usas la <strong>propiedad del producto cero</strong>: si A × B = 0, entonces A = 0 o B = 0.

<strong>Ejemplo paso a paso:</strong> x² − 5x + 6 = 0
<ol>
<li>Busca dos números que multipliquen <strong>6</strong> y sumen <strong>−5</strong>: son −2 y −3</li>
<li>Factoriza: (x − 2)(x − 3) = 0</li>
<li>Iguala cada factor a cero: x − 2 = 0 → x = 2, o x − 3 = 0 → x = 3</li>
<li>Soluciones: x = 2 y x = 3</li>
<li>Verifica: 2² − 5(2) + 6 = 4 − 10 + 6 = 0 ✓ | 3² − 5(3) + 6 = 9 − 15 + 6 = 0 ✓</li>
</ol>

<strong style="color:#f59e0b">Método 2: Fórmula cuadrática (funciona SIEMPRE)</strong>
Cuando no puedes factorizar fácilmente, usa la fórmula general:
<div style="text-align:center;margin:0.8rem 0;font-size:1.1em"><code>x = (−b ± √(b² − 4ac)) / (2a)</code></div>

<strong>Ejemplo paso a paso:</strong> 2x² + 3x − 2 = 0
<ol>
<li>Identifica: a = 2, b = 3, c = −2</li>
<li>Calcula el discriminante: Δ = b² − 4ac = 9 − 4(2)(−2) = 9 + 16 = 25</li>
<li>Aplica la fórmula: x = (−3 ± √25) / (2·2) = (−3 ± 5) / 4</li>
<li>Dos soluciones: x = (−3 + 5)/4 = 2/4 = <strong>1/2</strong> y x = (−3 − 5)/4 = −8/4 = <strong>−2</strong></li>
</ol>

<strong style="color:#f59e0b">El discriminante (Δ = b² − 4ac) — tu detector de soluciones</strong>
Antes de resolver toda la ecuación, calcula el discriminante para saber qué esperar:
<ul>
<li><strong>Δ > 0</strong> → 2 soluciones reales diferentes (la parábola cruza el eje x en 2 puntos)</li>
<li><strong>Δ = 0</strong> → 1 solución real repetida o "raíz doble" (la parábola toca el eje x en 1 punto)</li>
<li><strong>Δ < 0</strong> → No hay soluciones reales (la parábola no toca el eje x)</li>
</ul>
Si la PAA pregunta "¿cuántas soluciones tiene?", basta con calcular el discriminante sin resolver toda la fórmula.

<strong style="color:#f59e0b">Relación entre raíces y coeficientes (Vieta)</strong>
Si las raíces de ax² + bx + c = 0 son r₁ y r₂, entonces:
<ul>
<li><strong>Suma de raíces:</strong> r₁ + r₂ = −b/a</li>
<li><strong>Producto de raíces:</strong> r₁ × r₂ = c/a</li>
</ul>
Esto es útil cuando te preguntan por la suma o producto sin pedirte que resuelvas. También puedes reconstruir la ecuación: x² − (suma)x + (producto) = 0.

<strong>Ejemplo:</strong> Si las raíces son 4 y −1, la ecuación es x² − (4+(−1))x + (4)(−1) = 0 → x² − 3x − 4 = 0.

<strong style="color:#f59e0b">Método 3: Completar el cuadrado</strong>
Transforma ax² + bx + c = 0 en la forma (x + p)² = q:
<ol>
<li>Pasa c al otro lado: x² + bx = −c</li>
<li>Suma (b/2)² a ambos lados: x² + bx + (b/2)² = −c + (b/2)²</li>
<li>Factoriza el lado izquierdo como cuadrado perfecto</li>
</ol>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Olvidar que a, b, c incluyen sus signos: en x² − 7x + 10 = 0, b = <strong>−7</strong> (no 7)</li>
<li>❌ No poner la ecuación en forma ax² + bx + c = 0 antes de aplicar la fórmula</li>
<li>❌ Olvidar el ± en la fórmula y dar solo una solución</li>
<li>❌ Error con el 2a: x = (−b ± √Δ) / <strong>2a</strong>, no / 2 × a</li>
<li>❌ No verificar que ambas soluciones satisfacen la ecuación original</li>
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
          { id: "ec2-5", question: "¿Cuántas soluciones reales tiene 3x² + 2x + 5 = 0?", options: ["Ninguna", "Una", "Dos", "Infinitas"], correctAnswer: 0, explanation: "Discriminante = 4 − 60 = −56 < 0, no hay soluciones reales" },
          { id: "ec2-6", question: "Resuelve: x² − 8x + 16 = 0", options: ["x = 4 (raíz doble)", "x = 4 o x = −4", "x = 8", "x = 2 o x = 8"], correctAnswer: 0, explanation: "(x−4)² = 0 → x = 4. Discriminante = 64−64 = 0 → raíz doble" },
          { id: "ec2-7", question: "¿Cuál es la suma de las raíces de 2x² − 10x + 8 = 0?", options: ["5", "4", "−5", "10"], correctAnswer: 0, explanation: "Suma de raíces = −b/a = −(−10)/2 = 5" },
          { id: "ec2-8", question: "Resuelve: x² + 6x + 5 = 0", options: ["x = −1 o x = −5", "x = 1 o x = 5", "x = −1 o x = 5", "x = 1 o x = −5"], correctAnswer: 0, explanation: "(x+1)(x+5) = 0 → x = −1 o x = −5" },
          { id: "ec2-9", question: "El producto de las raíces de x² + 3x − 18 = 0 es:", options: ["−18", "18", "3", "−3"], correctAnswer: 0, explanation: "Producto de raíces = c/a = −18/1 = −18" },
          { id: "ec2-10", question: "Si x² = 2x + 15, ¿cuáles son los valores de x?", options: ["5 y −3", "3 y −5", "15 y 1", "−15 y −1"], correctAnswer: 0, explanation: "x² − 2x − 15 = 0. (x−5)(x+3) = 0 → x = 5 o x = −3" },
          { id: "ec2-11", question: "Un rectángulo tiene largo (x+3) y ancho (x−1). Si su área es 21, ¿cuánto vale x?", options: ["4", "3", "5", "6"], correctAnswer: 0, explanation: "(x+3)(x−1) = 21 → x²+2x−3 = 21 → x²+2x−24 = 0 → (x+6)(x−4) = 0. Como x>1, x=4" },
          { id: "ec2-12", question: "¿Para qué valor de k la ecuación x² + kx + 9 = 0 tiene raíz doble?", options: ["6 o −6", "3", "9", "18"], correctAnswer: 0, explanation: "Raíz doble cuando discriminante = 0: k²−36 = 0 → k = ±6" }
        ]
      },
      {
        id: "sistemas-ecuaciones",
        title: "Sistemas de Ecuaciones",
        content: `Un <strong>sistema de ecuaciones</strong> es un conjunto de dos o más ecuaciones que deben cumplirse <em>simultáneamente</em>. Las variables tienen que satisfacer <strong>todas</strong> las ecuaciones al mismo tiempo. En la PAA, generalmente se trabaja con sistemas de 2 ecuaciones con 2 variables (x e y).

<strong style="color:#f59e0b">¿Qué significa resolver un sistema?</strong>
Encontrar los valores de x e y que hacen verdaderas <strong>ambas</strong> ecuaciones al mismo tiempo. Gráficamente, cada ecuación lineal es una recta, y la solución es el punto donde las rectas se cruzan.

<strong style="color:#f59e0b">Método 1: Sustitución — mejor cuando una variable ya está despejada</strong>
<ol>
<li>Despeja una variable de una ecuación (elige la más fácil)</li>
<li>Sustituye esa expresión en la otra ecuación</li>
<li>Resuelve la ecuación resultante (ahora tiene una sola variable)</li>
<li>Sustituye el valor encontrado en la expresión del paso 1 para hallar la otra variable</li>
</ol>

<strong>Ejemplo detallado:</strong> y = 2x + 1 y 3x + y = 11
<ol>
<li>La primera ecuación ya tiene y despejada: y = 2x + 1</li>
<li>Sustituye en la segunda: 3x + (2x + 1) = 11</li>
<li>Resuelve: 5x + 1 = 11 → 5x = 10 → x = 2</li>
<li>Sustituye x = 2 en y = 2(2) + 1 = 5</li>
<li>Solución: (2, 5). Verifica en ambas: y = 2(2)+1 = 5 ✓ y 3(2)+5 = 11 ✓</li>
</ol>

<strong style="color:#f59e0b">Método 2: Eliminación — mejor cuando los coeficientes son simples</strong>
<ol>
<li>Multiplica una o ambas ecuaciones por un número para que los coeficientes de una variable sean iguales (o opuestos)</li>
<li>Suma o resta las ecuaciones para eliminar esa variable</li>
<li>Resuelve la ecuación resultante</li>
<li>Sustituye en cualquiera de las ecuaciones originales</li>
</ol>

<strong>Ejemplo detallado:</strong> x + y = 10 y 2x − y = 5
<ol>
<li>Observa que y tiene coeficientes +1 y −1 (opuestos). Perfecto para sumar.</li>
<li>Suma las ecuaciones: (x + y) + (2x − y) = 10 + 5 → 3x = 15</li>
<li>Resuelve: x = 5</li>
<li>Sustituye: 5 + y = 10 → y = 5</li>
<li>Solución: (5, 5)</li>
</ol>

<strong style="color:#f59e0b">¿Cuándo usar cada método?</strong>
<ul>
<li><strong>Sustitución:</strong> cuando una variable ya está despejada (y = ...) o su coeficiente es 1</li>
<li><strong>Eliminación:</strong> cuando los coeficientes son fáciles de igualar multiplicando</li>
<li>En la PAA, elige el que te parezca más rápido mirando los coeficientes</li>
</ul>

<strong style="color:#f59e0b">Interpretación gráfica — 3 posibilidades</strong>
<ul>
<li><strong>Solución única</strong> = las rectas se cruzan en exactamente un punto (pendientes diferentes)</li>
<li><strong>Sin solución</strong> = rectas paralelas que nunca se tocan (misma pendiente, diferente intercepto). Al resolver, llegas a una contradicción como 0 = 5</li>
<li><strong>Infinitas soluciones</strong> = ambas ecuaciones representan la misma recta. Al resolver, llegas a una identidad como 0 = 0</li>
</ul>

<strong>¿Cómo detectar sin resolver?</strong> Si a₁/a₂ = b₁/b₂ ≠ c₁/c₂ → paralelas (sin solución). Si a₁/a₂ = b₁/b₂ = c₁/c₂ → misma recta (infinitas).

<strong style="color:#f59e0b">Problemas con palabras — muy comunes en la PAA</strong>
La clave es traducir la historia a ecuaciones:
<ul>
<li>"La suma de dos números es 25 y su diferencia es 7" → x + y = 25 y x − y = 7</li>
<li>"Un boleto de adulto cuesta B/.5 y uno de niño B/.3. Se vendieron 20 boletos por B/.76" → a + n = 20 y 5a + 3n = 76</li>
<li>"Pedro tiene el doble de dinero que Juan. Juntos tienen B/.45" → p = 2j y p + j = 45</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Sustituir en la misma ecuación de donde despejaste (obtienes una identidad trivial)</li>
<li>❌ Olvidar verificar la solución en <strong>ambas</strong> ecuaciones</li>
<li>❌ Al multiplicar una ecuación, olvidar multiplicar TODOS los términos (incluyendo el lado derecho)</li>
<li>❌ Confundir "sin solución" con "la solución es cero". Son cosas muy diferentes.</li>
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
          { id: "sis-5", question: "Si x − 2y = 1 y 3x + y = 17, ¿cuánto es x + y?", options: ["7", "9", "8", "10"], correctAnswer: 0, explanation: "De la 1ra: x = 1+2y. Sustituyendo: 3(1+2y)+y = 17 → 3+6y+y = 17 → 7y = 14 → y = 2, x = 5. x+y = 7" },
          { id: "sis-6", question: "Resuelve: 3x − 2y = 7 y x + 2y = 5. ¿Cuánto vale y?", options: ["1", "2", "3", "0"], correctAnswer: 0, explanation: "Sumando: 4x = 12 → x = 3. En la segunda: 3 + 2y = 5 → 2y = 2 → y = 1" },
          { id: "sis-7", question: "¿Cuántas soluciones tiene: x + y = 3 y 2x + 2y = 8?", options: ["Ninguna", "Infinitas", "Una", "Dos"], correctAnswer: 0, explanation: "La segunda simplificada es x+y = 4, pero la primera dice x+y = 3. Son paralelas → sin solución" },
          { id: "sis-8", question: "Pedro tiene el doble de dinero que Juan. Entre los dos tienen B/.45. ¿Cuánto tiene Juan?", options: ["B/.15", "B/.30", "B/.20", "B/.10"], correctAnswer: 0, explanation: "Sea j = Juan. p = 2j. j + 2j = 45 → 3j = 45 → j = 15" },
          { id: "sis-9", question: "Si 4x + y = 14 y 2x − y = 4, ¿cuánto vale x?", options: ["3", "2", "4", "5"], correctAnswer: 0, explanation: "Sumando: 6x = 18 → x = 3" },
          { id: "sis-10", question: "La suma de dos números es 25 y su diferencia es 7. ¿Cuál es el número mayor?", options: ["16", "9", "18", "12"], correctAnswer: 0, explanation: "x + y = 25 y x − y = 7. Sumando: 2x = 32 → x = 16 (mayor)" },
          { id: "sis-11", question: "Resuelve: y = x + 3 y 2x + y = 12. ¿Cuánto vale x?", options: ["3", "6", "4", "5"], correctAnswer: 0, explanation: "Sustituyendo: 2x + (x+3) = 12 → 3x = 9 → x = 3" },
          { id: "sis-12", question: "Un kilo de manzanas y 2 de naranjas cuestan B/.7. Dos kilos de manzanas y 1 de naranjas cuestan B/.8. ¿Cuánto cuesta un kilo de manzanas?", options: ["B/.3", "B/.2", "B/.4", "B/.5"], correctAnswer: 0, explanation: "m + 2n = 7 y 2m + n = 8. De la 1ra: m = 7−2n. Sustituyendo: 2(7−2n)+n = 8 → 14−4n+n = 8 → −3n = −6 → n = 2, m = 3" }
        ]
      },
      {
        id: "desigualdades",
        title: "Desigualdades",
        content: `Las desigualdades (o <strong>inecuaciones</strong>) son como ecuaciones, pero en vez de "=" usan los símbolos <code>&lt;</code> (menor que), <code>&gt;</code> (mayor que), <code>≤</code> (menor o igual), <code>≥</code> (mayor o igual). A diferencia de una ecuación que tiene una respuesta puntual, una desigualdad tiene un <strong>conjunto de soluciones</strong> — un rango de valores.

<strong style="color:#f59e0b">Las 3 reglas fundamentales</strong>
Se resuelven igual que ecuaciones, con una diferencia crucial:
<ul>
<li><strong>Regla 1:</strong> Puedes sumar o restar lo mismo de ambos lados <em>sin cambiar</em> el sentido de la desigualdad</li>
<li><strong>Regla 2:</strong> Puedes multiplicar o dividir por un <em>positivo</em> sin cambiar el sentido</li>
<li><strong>⚠ Regla 3 (LA MÁS IMPORTANTE):</strong> Al multiplicar o dividir por un <strong>negativo</strong>, debes <strong>INVERTIR</strong> el sentido de la desigualdad</li>
</ul>

<strong style="color:#f59e0b">¿Por qué se invierte el signo al multiplicar por un negativo?</strong>
Piénsalo con números: sabemos que 2 < 5. Si multiplicamos ambos por −1: −2 y −5. Ahora −2 > −5 (−2 está más a la derecha en la recta numérica). El orden se invirtió. Esto SIEMPRE pasa al multiplicar por un negativo.

<strong style="color:#f59e0b">Ejemplo paso a paso:</strong> Resuelve −2x > 6
<ol>
<li>Dividimos ambos lados por −2</li>
<li><strong>Como dividimos por un negativo, invertimos el signo:</strong> x < −3</li>
<li>Solución: todos los números menores que −3</li>
</ol>

<strong style="color:#f59e0b">Otro ejemplo:</strong> Resuelve 5 − 3x ≤ 14
<ol>
<li>Resta 5 de ambos lados: −3x ≤ 9</li>
<li>Divide por −3 e <strong>invierte</strong>: x ≥ −3</li>
<li>Solución: todos los números desde −3 en adelante (incluyendo −3)</li>
</ol>

<strong style="color:#f59e0b">Notación de intervalos — el idioma de las desigualdades</strong>
Los intervalos son una forma compacta de escribir conjuntos de números:
<ul>
<li><strong>x > 3</strong> → (3, ∞) — paréntesis redondo = NO incluye el 3 (abierto)</li>
<li><strong>x ≥ 3</strong> → [3, ∞) — corchete = SÍ incluye el 3 (cerrado)</li>
<li><strong>2 < x ≤ 5</strong> → (2, 5] — abierto en 2, cerrado en 5</li>
<li><strong>−1 ≤ x ≤ 4</strong> → [−1, 4] — cerrado en ambos extremos</li>
<li><strong>Nota:</strong> el infinito (∞) SIEMPRE lleva paréntesis, nunca corchete (no puedes "incluir" el infinito)</li>
</ul>

<strong>Regla mnemotécnica:</strong> Paréntesis ( ) para < y > (estrictos, abiertos). Corchetes [ ] para ≤ y ≥ (incluyen el valor, cerrados).

<strong style="color:#f59e0b">Desigualdades compuestas (dobles)</strong>
A veces un valor está entre dos límites: −5 < 2x + 1 < 9
<ol>
<li>Resuelve para x restando 1 de las <strong>tres partes</strong>: −6 < 2x < 8</li>
<li>Divide las tres partes por 2: −3 < x < 4</li>
<li>Solución en intervalo: (−3, 4)</li>
</ol>

<strong style="color:#f59e0b">Desigualdades con valor absoluto</strong>
<ul>
<li><strong>|x| < a</strong> significa −a < x < a (el valor está <em>dentro</em> del rango)</li>
<li><strong>|x| > a</strong> significa x < −a o x > a (el valor está <em>fuera</em> del rango)</li>
<li>Ejemplo: |x| ≤ 4 → −4 ≤ x ≤ 4 → [−4, 4]</li>
<li>Ejemplo: |x − 2| > 3 → x − 2 < −3 o x − 2 > 3 → x < −1 o x > 5</li>
</ul>

<strong style="color:#f59e0b">Desigualdades cuadráticas (nivel avanzado PAA)</strong>
Para resolver x² < 9: piensa en |x| < 3, lo que da −3 < x < 3.
Para resolver x² > 9: piensa en |x| > 3, lo que da x < −3 o x > 3.

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ El error #1: olvidar invertir el sentido al dividir por un negativo</li>
<li>❌ Confundir paréntesis y corchetes en la notación de intervalos</li>
<li>❌ Escribir [−3, ∞] en vez de [−3, ∞) — el infinito siempre va con paréntesis</li>
<li>❌ En desigualdades dobles, operar solo dos partes en vez de las tres</li>
<li>❌ En |x| > a, escribir −a < x < a en vez de x < −a o x > a</li>
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
          { id: "des-5", question: "¿Para qué valores de x se cumple que x² < 9?", options: ["−3 < x < 3", "x < 3", "x > −3", "x < −3 o x > 3"], correctAnswer: 0, explanation: "x² < 9 → |x| < 3 → −3 < x < 3" },
          { id: "des-6", question: "Resuelve: 5 − 2x ≥ 1", options: ["x ≤ 2", "x ≥ 2", "x ≤ −2", "x ≥ −2"], correctAnswer: 0, explanation: "−2x ≥ −4 → x ≤ 2 (invertimos al dividir por −2)" },
          { id: "des-7", question: "¿Cuál es la solución de 3(x − 1) < 2(x + 4)?", options: ["x < 11", "x > 11", "x < 5", "x > 5"], correctAnswer: 0, explanation: "3x − 3 < 2x + 8 → x < 11" },
          { id: "des-8", question: "Expresa en notación de intervalo: x ≥ −2 y x < 7", options: ["[−2, 7)", "(−2, 7]", "[−2, 7]", "(−2, 7)"], correctAnswer: 0, explanation: "x ≥ −2 incluye el −2 (corchete) y x < 7 no incluye el 7 (paréntesis) → [−2, 7)" },
          { id: "des-9", question: "Si −5 < 2x + 1 < 9, ¿cuánto vale x?", options: ["−3 < x < 4", "−2 < x < 5", "−6 < x < 8", "−5 < x < 9"], correctAnswer: 0, explanation: "Restamos 1: −6 < 2x < 8. Dividimos por 2: −3 < x < 4" },
          { id: "des-10", question: "¿Cuántos enteros satisfacen −2 ≤ x < 5?", options: ["7", "6", "5", "8"], correctAnswer: 0, explanation: "Los enteros son: −2, −1, 0, 1, 2, 3, 4 = 7 enteros" },
          { id: "des-11", question: "Resuelve: x/3 + 2 > 5", options: ["x > 9", "x > 3", "x > 21", "x > 7"], correctAnswer: 0, explanation: "x/3 > 3 → x > 9" },
          { id: "des-12", question: "Si |x| ≤ 4, ¿cuál es el intervalo solución?", options: ["[−4, 4]", "(−4, 4)", "[0, 4]", "(−4, 4]"], correctAnswer: 0, explanation: "|x| ≤ 4 significa −4 ≤ x ≤ 4, que es [−4, 4]" }
        ]
      },
      {
        id: "funciones",
        title: "Funciones",
        content: `Una <strong>función</strong> es una relación que asigna a cada valor de entrada (x) <strong>exactamente un</strong> valor de salida. Se escribe <code>f(x)</code>, que se lee "f de x". Piensa en una función como una <em>máquina</em>: metes un número (x), la máquina lo procesa, y sale un resultado f(x).

<strong style="color:#f59e0b">¿Qué NO es una función?</strong>
Si un mismo valor de x produce <em>dos resultados diferentes</em>, NO es función. Gráficamente, si una línea vertical toca la gráfica en más de un punto, no es función (<strong>prueba de la línea vertical</strong>).

<strong style="color:#f59e0b">Conceptos clave que debes dominar:</strong>
<ul>
<li><strong>Dominio:</strong> todos los valores de x que puedes usar como entrada. Pregunta: "¿qué valores de x están permitidos?"</li>
<li><strong>Rango:</strong> todos los valores de f(x) que la función puede producir como salida</li>
<li><strong>Evaluar f(a):</strong> sustituir x por el valor a. Si f(x) = 2x + 3, entonces f(4) = 2(4) + 3 = 11</li>
</ul>

<strong style="color:#f59e0b">Restricciones comunes del dominio:</strong>
<ul>
<li><strong>Fracciones:</strong> el denominador no puede ser cero. En f(x) = 1/(x−3), el dominio es x ≠ 3</li>
<li><strong>Raíces cuadradas:</strong> lo que está dentro debe ser ≥ 0. En f(x) = √(x−5), el dominio es x ≥ 5</li>
<li><strong>Polinomios:</strong> todos los reales (sin restricciones). f(x) = x² + 3x tiene dominio = todos los reales</li>
</ul>

<strong style="color:#f59e0b">Función lineal: f(x) = mx + b — la más importante</strong>
Su gráfica es una <strong>línea recta</strong>. Los dos parámetros clave son:
<ul>
<li><strong>m = pendiente</strong> — mide la inclinación. Indica cuánto cambia y por cada unidad que avanza x.
  <ul>
  <li>Si m > 0 → la recta <strong>sube</strong> (de izquierda a derecha)</li>
  <li>Si m < 0 → la recta <strong>baja</strong></li>
  <li>Si m = 0 → la recta es <strong>horizontal</strong> (función constante)</li>
  <li>Cuanto mayor sea |m|, más empinada es la recta</li>
  </ul>
</li>
<li><strong>b = intercepto en y</strong> — es el punto donde la recta cruza el eje y (cuando x = 0). f(0) = b.</li>
</ul>

<strong>Calcular la pendiente entre dos puntos:</strong> <code>m = (y₂ − y₁) / (x₂ − x₁)</code>
Ejemplo: Puntos (1, 3) y (4, 9) → m = (9−3)/(4−1) = 6/3 = 2. La recta sube 2 unidades por cada 1 que avanza en x.

<strong>Encontrar el intercepto en x (raíz):</strong> Iguala f(x) = 0 y despeja x. En f(x) = 2x − 6: 0 = 2x − 6 → x = 3. La recta cruza el eje x en (3, 0).

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="280" height="220" viewBox="0 0 280 220">
  <line x1="40" y1="10" x2="40" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="10" y1="170" x2="270" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="270" y="185" fill="#94a3b8" font-family="sans-serif" font-size="12">x</text>
  <text x="28" y="15" fill="#94a3b8" font-family="sans-serif" font-size="12">y</text>
  <line x1="40" y1="140" x2="240" y2="40" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="40" cy="140" r="4" fill="#f59e0b"/>
  <text x="10" y="138" fill="#f59e0b" font-family="sans-serif" font-size="11">b</text>
  <text x="120" y="75" fill="#e2e8f0" font-family="sans-serif" font-size="12">f(x) = mx + b</text>
  <line x1="100" y1="110" x2="160" y2="110" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="160" y1="110" x2="160" y2="80" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="125" y="125" fill="#10b981" font-family="sans-serif" font-size="10">Δx</text>
  <text x="165" y="100" fill="#10b981" font-family="sans-serif" font-size="10">Δy</text>
</svg>
</div>

<strong style="color:#f59e0b">Rectas paralelas y perpendiculares:</strong>
<ul>
<li><strong>Paralelas:</strong> tienen la MISMA pendiente (m₁ = m₂) pero diferente intercepto. Nunca se cruzan.</li>
<li><strong>Perpendiculares:</strong> sus pendientes son recíprocas negativas (m₁ × m₂ = −1). Forman ángulo de 90°. Si una tiene pendiente 2, la perpendicular tiene pendiente −1/2.</li>
</ul>

<strong style="color:#f59e0b">Composición de funciones</strong>
f(g(x)) significa evaluar g primero, y luego usar el resultado como entrada de f.
Ejemplo: Si f(x) = 3x − 1 y g(x) = x + 5, entonces f(g(2)) = f(2+5) = f(7) = 3(7)−1 = 20.

<strong style="color:#f59e0b">Función cuadrática: f(x) = ax² + bx + c</strong>
Su gráfica es una <strong>parábola</strong> — una curva en forma de U (o U invertida). Es una de las funciones más importantes en la PAA.
<ul>
<li>Si <strong>a > 0</strong>, abre hacia <strong>arriba</strong> (forma de U, tiene un punto <em>mínimo</em>)</li>
<li>Si <strong>a < 0</strong>, abre hacia <strong>abajo</strong> (forma de ∩, tiene un punto <em>máximo</em>)</li>
<li>Cuanto mayor sea |a|, más "estrecha" es la parábola</li>
<li><strong>Vértice:</strong> el punto más alto o más bajo. x = −b/(2a), luego sustituye para hallar y</li>
<li><strong>Eje de simetría:</strong> la línea vertical x = −b/(2a) que divide la parábola en dos mitades iguales</li>
<li><strong>Raíces (ceros):</strong> donde la parábola cruza el eje x. Se hallan resolviendo ax² + bx + c = 0</li>
</ul>

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="280" height="200" viewBox="0 0 280 200">
  <line x1="140" y1="10" x2="140" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="10" y1="170" x2="270" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M 40 30 Q 140 190 240 30" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="140" cy="170" r="4" fill="#10b981"/>
  <text x="148" y="185" fill="#10b981" font-family="sans-serif" font-size="11">Vértice</text>
  <line x1="140" y1="15" x2="140" y2="165" stroke="#10b981" stroke-width="1" stroke-dasharray="4"/>
  <text x="90" y="15" fill="#10b981" font-family="sans-serif" font-size="10">Eje de simetría</text>
  <text x="200" y="60" fill="#e2e8f0" font-family="sans-serif" font-size="12">a > 0</text>
</svg>
</div>

<strong style="color:#f59e0b">Ejemplo: hallar el vértice</strong>
f(x) = x² − 6x + 8
<ol>
<li>x del vértice: x = −(−6)/(2·1) = 3</li>
<li>y del vértice: f(3) = 9 − 18 + 8 = −1</li>
<li>Vértice: (3, −1). Como a = 1 > 0, este es el punto mínimo.</li>
</ol>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Confundir f(x) = 0 (buscar raíces) con f(0) (evaluar en x=0, da el intercepto en y)</li>
<li>❌ Olvidar que la pendiente puede ser negativa o fraccionaria</li>
<li>❌ Evaluar f(−2) como f(−2) = 2(−2) + 3 = −4 + 3 = −1 y confundirse con los signos</li>
<li>❌ En composición de funciones, evaluar en el orden incorrecto: f(g(x)) ≠ g(f(x))</li>
<li>❌ Pensar que el vértice siempre está en el origen</li>
</ul>`,
        examples: [
          {
            problem: "Si f(x) = 3x − 5, ¿cuánto es f(4)?",
            solution: "f(4) = 3(4) − 5 = 12 − 5 = 7"
          },
          {
            problem: "¿Cuál es la pendiente de la recta que pasa por (1, 3) y (4, 9)?",
            solution: "m = (9 − 3)/(4 − 1) = 6/3 = 2"
          },
          {
            problem: "Halla el vértice de f(x) = x² − 6x + 8",
            solution: "x = −(−6)/(2·1) = 3. f(3) = 9 − 18 + 8 = −1. Vértice: (3, −1)"
          }
        ],
        tips: [
          "Para evaluar funciones, simplemente sustituye x por el valor dado.",
          "La pendiente indica cuánto sube (o baja) y por cada unidad que avanza x.",
          "En la PAA, las preguntas de funciones suelen pedir evaluar f(a), hallar dominio, o identificar la pendiente."
        ],
        exercises: [
          { id: "fun-1", question: "Si f(x) = 2x + 7, ¿cuánto es f(3)?", options: ["13", "10", "9", "14"], correctAnswer: 0, explanation: "f(3) = 2(3) + 7 = 6 + 7 = 13" },
          { id: "fun-2", question: "¿Cuál es la pendiente de la recta que pasa por (2, 5) y (6, 13)?", options: ["2", "4", "3", "8"], correctAnswer: 0, explanation: "m = (13 − 5)/(6 − 2) = 8/4 = 2" },
          { id: "fun-3", question: "Si f(x) = x² − 4, ¿cuánto es f(−3)?", options: ["5", "−13", "13", "−5"], correctAnswer: 0, explanation: "f(−3) = (−3)² − 4 = 9 − 4 = 5" },
          { id: "fun-4", question: "¿Cuál es el dominio de f(x) = √(x − 3)?", options: ["x ≥ 3", "x > 3", "x ≥ 0", "Todos los reales"], correctAnswer: 0, explanation: "La raíz requiere x − 3 ≥ 0, es decir x ≥ 3" },
          { id: "fun-5", question: "La función f(x) = −2x + 10 cruza el eje x cuando:", options: ["x = 5", "x = 10", "x = −5", "x = 2"], correctAnswer: 0, explanation: "f(x) = 0 → −2x + 10 = 0 → x = 5" },
          { id: "fun-6", question: "¿Cuál es el vértice de f(x) = x² − 4x + 3?", options: ["(2, −1)", "(4, 3)", "(−2, 15)", "(1, 0)"], correctAnswer: 0, explanation: "x = −(−4)/(2·1) = 2. f(2) = 4 − 8 + 3 = −1. Vértice: (2, −1)" },
          { id: "fun-7", question: "Si f(x) = 3x − 1 y g(x) = x + 5, ¿cuánto es f(g(2))?", options: ["20", "12", "10", "15"], correctAnswer: 0, explanation: "g(2) = 2 + 5 = 7. f(7) = 3(7) − 1 = 20" },
          { id: "fun-8", question: "¿Cuál es el intercepto en y de f(x) = −3x + 9?", options: ["9", "−3", "3", "−9"], correctAnswer: 0, explanation: "El intercepto en y es f(0) = −3(0) + 9 = 9, o sea b = 9" },
          { id: "fun-9", question: "La parábola f(x) = −x² + 6x − 5 abre hacia:", options: ["Abajo", "Arriba", "La derecha", "La izquierda"], correctAnswer: 0, explanation: "Como a = −1 < 0, la parábola abre hacia abajo" },
          { id: "fun-10", question: "Si f(x) = 5x − 2, ¿para qué valor de x es f(x) = 18?", options: ["4", "3.2", "5", "3"], correctAnswer: 0, explanation: "5x − 2 = 18 → 5x = 20 → x = 4" },
          { id: "fun-11", question: "¿Cuál es el rango de f(x) = x² + 1?", options: ["y ≥ 1", "y ≥ 0", "Todos los reales", "y > 1"], correctAnswer: 0, explanation: "El mínimo de x² es 0 (cuando x=0), así que f(x) ≥ 0 + 1 = 1" },
          { id: "fun-12", question: "Dos rectas son paralelas si tienen:", options: ["La misma pendiente", "Pendientes opuestas", "Pendientes recíprocas", "La misma intersección en y"], correctAnswer: 0, explanation: "Rectas paralelas tienen la misma pendiente m, pero diferente intercepto b" }
        ]
      },
      {
        id: "sucesiones",
        title: "Sucesiones y Patrones",
        content: `Una <strong>sucesión</strong> es una lista ordenada de números que sigue un patrón o regla definida. Cada número de la lista es un <strong>término</strong>. Las sucesiones son uno de los temas favoritos de la PAA porque evalúan tu capacidad de reconocer patrones.

<strong style="color:#f59e0b">Sucesión aritmética — suma constante</strong>
En una sucesión aritmética, cada término se obtiene <strong>sumando siempre la misma cantidad</strong> al anterior. Esta cantidad se llama <strong>diferencia común (d)</strong>.

<ul>
<li>Ejemplo: 2, 5, 8, 11, 14, ... → d = 3 (cada término es 3 más que el anterior)</li>
<li>Ejemplo: 20, 17, 14, 11, ... → d = −3 (la diferencia puede ser negativa → decrece)</li>
</ul>

<strong>Fórmulas de la sucesión aritmética:</strong>
<ul>
<li><strong>Término general:</strong> <code>aₙ = a₁ + (n − 1)·d</code> — te da directamente cualquier término sin calcular todos los anteriores</li>
<li><strong>Suma de n términos:</strong> <code>Sₙ = n(a₁ + aₙ)/2</code> — es el promedio del primero y último, multiplicado por la cantidad</li>
</ul>

<strong style="color:#f59e0b">Ejemplo paso a paso:</strong> En la sucesión 4, 7, 10, 13, ..., ¿cuál es el término 20?
<ol>
<li>Identifica: a₁ = 4, d = 7 − 4 = 3</li>
<li>Aplica la fórmula: a₂₀ = 4 + (20 − 1)·3 = 4 + 57 = 61</li>
</ol>

<strong style="color:#f59e0b">¿Cómo encontrar d?</strong> Resta cualquier término menos el anterior: d = aₙ − aₙ₋₁

<strong style="color:#f59e0b">Sucesión geométrica — multiplicación constante</strong>
En una sucesión geométrica, cada término se obtiene <strong>multiplicando siempre por la misma cantidad</strong>. Esta cantidad se llama <strong>razón común (r)</strong>.

<ul>
<li>Ejemplo: 3, 6, 12, 24, 48, ... → r = 2 (cada término es el doble del anterior)</li>
<li>Ejemplo: 81, 27, 9, 3, 1, ... → r = 1/3 (decrece, la razón es una fracción)</li>
</ul>

<strong>Fórmulas de la sucesión geométrica:</strong>
<ul>
<li><strong>Término general:</strong> <code>aₙ = a₁ · r⁽ⁿ⁻¹⁾</code></li>
<li><strong>Suma de n términos:</strong> <code>Sₙ = a₁(rⁿ − 1)/(r − 1)</code> (cuando r ≠ 1)</li>
</ul>

<strong style="color:#f59e0b">Ejemplo:</strong> En la sucesión 2, 6, 18, 54, ..., ¿cuál es el término 5?
<ol>
<li>Identifica: a₁ = 2, r = 6/2 = 3</li>
<li>a₅ = 2 · 3⁴ = 2 · 81 = 162</li>
</ol>

<strong style="color:#f59e0b">¿Cómo distinguir aritmética de geométrica?</strong>
<ul>
<li>Calcula las <strong>diferencias</strong> entre términos consecutivos. Si son iguales → <strong>aritmética</strong></li>
<li>Calcula los <strong>cocientes</strong> entre términos consecutivos. Si son iguales → <strong>geométrica</strong></li>
<li>Ejemplo: 5, 10, 20, 40 → Diferencias: 5, 10, 20 (no constantes). Cocientes: 2, 2, 2 (constantes) → <strong>geométrica</strong></li>
</ul>

<strong style="color:#f59e0b">Otros patrones que aparecen en la PAA:</strong>
<ul>
<li><strong>Fibonacci:</strong> 1, 1, 2, 3, 5, 8, 13, 21, ... — cada término es la suma de los dos anteriores</li>
<li><strong>Cuadrados perfectos:</strong> 1, 4, 9, 16, 25, 36, ... — el término n es n²</li>
<li><strong>Diferencia variable:</strong> 1, 2, 4, 7, 11, 16, ... — las diferencias son 1, 2, 3, 4, 5 (crecen linealmente)</li>
<li><strong>Alternante:</strong> 1, −1, 1, −1, ... — alterna signos (multiplica por −1)</li>
</ul>

<strong style="color:#f59e0b">Conexión con la vida real:</strong>
<ul>
<li><strong>Aritmética:</strong> ahorras la misma cantidad cada mes (B/.100 + B/.100 + ...)</li>
<li><strong>Geométrica:</strong> tu dinero crece con interés compuesto (se multiplica por un factor cada período)</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Confundir n (posición del término) con aₙ (valor del término). a₁₀ no es 10, es el valor del décimo término.</li>
<li>❌ En la fórmula aₙ = a₁ + (n−1)d, escribir n en vez de (n−1). El primer término "usa 0 saltos".</li>
<li>❌ Dividir mal para encontrar la razón en geométricas: r = aₙ/aₙ₋₁, no al revés</li>
<li>❌ No verificar si una sucesión que parece aritmética podría tener un patrón diferente (e.g., diferencias de diferencias)</li>
</ul>`,
        examples: [
          {
            problem: "En la sucesión 4, 7, 10, 13, ..., ¿cuál es el término 20?",
            solution: "Es aritmética con a₁ = 4, d = 3. a₂₀ = 4 + (20−1)·3 = 4 + 57 = 61"
          },
          {
            problem: "En la sucesión 2, 6, 18, 54, ..., ¿cuál es el término 5?",
            solution: "Es geométrica con a₁ = 2, r = 3. a₅ = 2 · 3⁴ = 2 · 81 = 162"
          }
        ],
        tips: [
          "Para identificar el patrón, calcula las diferencias entre términos consecutivos.",
          "Si las diferencias son iguales → aritmética. Si los cocientes son iguales → geométrica.",
          "En la PAA, a menudo te piden hallar un término específico o identificar el patrón."
        ],
        exercises: [
          { id: "suc-1", question: "En la sucesión 5, 9, 13, 17, ..., ¿cuál es el término 10?", options: ["41", "45", "37", "49"], correctAnswer: 0, explanation: "Aritmética: d = 4. a₁₀ = 5 + (10−1)·4 = 5 + 36 = 41" },
          { id: "suc-2", question: "¿Cuál es la razón común de la sucesión 3, 12, 48, 192, ...?", options: ["4", "3", "9", "6"], correctAnswer: 0, explanation: "12/3 = 4, 48/12 = 4, 192/48 = 4. La razón es 4" },
          { id: "suc-3", question: "En la sucesión aritmética 2, __, __, 14, ¿cuál es la diferencia común?", options: ["4", "3", "6", "5"], correctAnswer: 0, explanation: "De a₁=2 a a₄=14 hay 3 saltos: d = (14−2)/3 = 4" },
          { id: "suc-4", question: "¿Cuál es la suma de los primeros 10 números naturales?", options: ["55", "50", "45", "60"], correctAnswer: 0, explanation: "S = 10(1+10)/2 = 10·11/2 = 55" },
          { id: "suc-5", question: "En la sucesión 1, 2, 4, 8, 16, ..., ¿cuál es el término 8?", options: ["128", "64", "256", "96"], correctAnswer: 0, explanation: "Geométrica: r = 2. a₈ = 1 · 2⁷ = 128" },
          { id: "suc-6", question: "¿Qué número sigue en la sucesión 100, 90, 81, 73, ...?", options: ["66", "65", "64", "67"], correctAnswer: 0, explanation: "Diferencias: −10, −9, −8, ... El siguiente paso es −7: 73 − 7 = 66" },
          { id: "suc-7", question: "Si el término 5 de una sucesión aritmética es 23 y d = 4, ¿cuánto es a₁?", options: ["7", "3", "11", "9"], correctAnswer: 0, explanation: "a₅ = a₁ + 4d → 23 = a₁ + 16 → a₁ = 7" },
          { id: "suc-8", question: "¿Cuál es la suma de la sucesión aritmética 3, 7, 11, ..., 43?", options: ["253", "230", "243", "260"], correctAnswer: 0, explanation: "d=4. n = (43−3)/4 + 1 = 11. S = 11(3+43)/2 = 11·23 = 253" },
          { id: "suc-9", question: "La sucesión 5, 15, 45, 135, ... es:", options: ["Geométrica con r = 3", "Aritmética con d = 10", "Geométrica con r = 5", "Aritmética con d = 30"], correctAnswer: 0, explanation: "15/5 = 3, 45/15 = 3, 135/45 = 3. Es geométrica con razón 3" },
          { id: "suc-10", question: "¿Cuántos términos tiene la sucesión aritmética 7, 11, 15, ..., 83?", options: ["20", "19", "21", "18"], correctAnswer: 0, explanation: "n = (83−7)/4 + 1 = 76/4 + 1 = 19 + 1 = 20" },
          { id: "suc-11", question: "En una sucesión geométrica, a₁ = 5 y r = 2. ¿Cuánto es a₆?", options: ["160", "320", "80", "64"], correctAnswer: 0, explanation: "a₆ = 5 · 2⁵ = 5 · 32 = 160" },
          { id: "suc-12", question: "¿Cuál es el patrón de 1, 1, 2, 3, 5, 8, 13, ...?", options: ["Cada término es la suma de los dos anteriores", "Se multiplica por 2", "Se suma 1, luego 2, luego 3", "Se alterna suma y resta"], correctAnswer: 0, explanation: "Es la sucesión de Fibonacci: cada término es la suma de los dos anteriores" }
        ]
      }
    ]
  },
  {
    id: "geometria",
    title: "Geometría",
    description: "Ángulos, triángulos, círculos, perímetros, áreas, volúmenes y geometría analítica.",
    icon: "△",
    color: "#10b981",
    subtopics: [
      {
        id: "angulos-rectas",
        title: "Ángulos y Rectas",
        content: `Un <strong>ángulo</strong> se forma cuando dos rayos (semirrectas) comparten un punto de origen llamado <strong>vértice</strong>. Se mide en <strong>grados (°)</strong>, donde una vuelta completa = 360°. Los ángulos están en todas partes: en la arquitectura, en la navegación, y por supuesto en la PAA.

<strong style="color:#f59e0b">Tipos de ángulos según su medida:</strong>
<ul>
<li><strong>Agudo:</strong> menor de 90° (piensa en la punta de una flecha)</li>
<li><strong>Recto:</strong> exactamente 90° (la esquina de una hoja de papel). Se marca con un cuadradito.</li>
<li><strong>Obtuso:</strong> entre 90° y 180° (más abierto que un ángulo recto)</li>
<li><strong>Llano (o raso):</strong> exactamente 180° (una línea recta)</li>
<li><strong>Reflejo (o cóncavo):</strong> entre 180° y 360°</li>
</ul>

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="520" height="120" viewBox="0 0 520 120">
  <!-- Agudo -->
  <line x1="10" y1="100" x2="70" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <line x1="10" y1="100" x2="55" y2="40" stroke="#94a3b8" stroke-width="2"/>
  <path d="M 30 100 A 20 20 0 0 1 24 82" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="40" y="115" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Agudo</text>
  <text x="32" y="88" fill="#f59e0b" font-family="sans-serif" font-size="10">45°</text>
  <!-- Recto -->
  <line x1="140" y1="100" x2="200" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <line x1="140" y1="100" x2="140" y2="40" stroke="#94a3b8" stroke-width="2"/>
  <rect x="140" y="82" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="170" y="115" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Recto</text>
  <text x="158" y="78" fill="#f59e0b" font-family="sans-serif" font-size="10">90°</text>
  <!-- Obtuso -->
  <line x1="270" y1="100" x2="340" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <line x1="270" y1="100" x2="235" y2="45" stroke="#94a3b8" stroke-width="2"/>
  <path d="M 290 100 A 20 20 0 0 1 260 72" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="300" y="115" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Obtuso</text>
  <text x="278" y="82" fill="#f59e0b" font-family="sans-serif" font-size="10">120°</text>
  <!-- Llano -->
  <line x1="390" y1="80" x2="510" y2="80" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="450" cy="80" r="3" fill="#f59e0b"/>
  <path d="M 470 80 A 20 20 0 0 1 430 80" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="450" y="115" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Llano</text>
  <text x="450" y="72" fill="#f59e0b" font-family="sans-serif" font-size="10" text-anchor="middle">180°</text>
</svg>
</div>

<strong style="color:#f59e0b">Relaciones entre ángulos — las más preguntadas en la PAA:</strong>

<strong>Ángulos complementarios:</strong> dos ángulos que suman <strong>90°</strong>.
<ul>
<li>Si un ángulo mide 35°, su complemento mide 90° − 35° = 55°</li>
<li>Mnemotécnica: <strong>C</strong>omplementarios → <strong>C</strong>uarto de giro (90°)</li>
</ul>

<strong>Ángulos suplementarios:</strong> dos ángulos que suman <strong>180°</strong>.
<ul>
<li>Si un ángulo mide 110°, su suplemento mide 180° − 110° = 70°</li>
<li>Mnemotécnica: <strong>S</strong>uplementarios → <strong>S</strong>emicírculo (180°)</li>
</ul>

<strong>Ángulos opuestos por el vértice:</strong> cuando dos rectas se cruzan, los ángulos opuestos son <strong>iguales</strong>. Es como una X: los ángulos de arriba-izquierda y abajo-derecha son iguales, y los de arriba-derecha y abajo-izquierda también.

<strong style="color:#f59e0b">Suma de ángulos interiores de un polígono:</strong>
<code>Suma = (n − 2) × 180°</code>, donde n es el número de lados.
<ul>
<li>Triángulo (n=3): (3−2)×180° = 180°</li>
<li>Cuadrilátero (n=4): (4−2)×180° = 360°</li>
<li>Pentágono (n=5): (5−2)×180° = 540°</li>
<li>Hexágono (n=6): (6−2)×180° = 720° → cada ángulo de un hexágono regular = 720°/6 = 120°</li>
</ul>

<strong style="color:#f59e0b">Rectas paralelas cortadas por una transversal — tema estrella</strong>
Cuando una recta (transversal) corta a dos rectas paralelas, se forman 8 ángulos con relaciones especiales:
<ul>
<li><strong>Ángulos correspondientes:</strong> están en la misma posición respecto a cada paralela → son <strong>iguales</strong></li>
<li><strong>Ángulos alternos internos:</strong> están en lados opuestos de la transversal, entre las paralelas → son <strong>iguales</strong></li>
<li><strong>Ángulos alternos externos:</strong> están en lados opuestos de la transversal, fuera de las paralelas → son <strong>iguales</strong></li>
<li><strong>Ángulos co-interiores (consecutivos internos):</strong> están del mismo lado de la transversal, entre las paralelas → suman <strong>180°</strong></li>
</ul>

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="320" height="220" viewBox="0 0 320 220">
  <!-- Parallel lines -->
  <line x1="30" y1="60" x2="290" y2="60" stroke="#94a3b8" stroke-width="2"/>
  <line x1="30" y1="160" x2="290" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <!-- Parallel arrows -->
  <text x="12" y="64" fill="#94a3b8" font-family="sans-serif" font-size="14">l₁</text>
  <text x="12" y="164" fill="#94a3b8" font-family="sans-serif" font-size="14">l₂</text>
  <!-- Transversal -->
  <line x1="100" y1="10" x2="220" y2="210" stroke="#f59e0b" stroke-width="2"/>
  <text x="225" y="208" fill="#f59e0b" font-family="sans-serif" font-size="12">t</text>
  <!-- Angle labels on l1 -->
  <text x="165" y="52" fill="#e2e8f0" font-family="sans-serif" font-size="11">1</text>
  <text x="135" y="52" fill="#e2e8f0" font-family="sans-serif" font-size="11">2</text>
  <text x="135" y="78" fill="#e2e8f0" font-family="sans-serif" font-size="11">3</text>
  <text x="165" y="78" fill="#e2e8f0" font-family="sans-serif" font-size="11">4</text>
  <!-- Angle labels on l2 -->
  <text x="195" y="152" fill="#e2e8f0" font-family="sans-serif" font-size="11">5</text>
  <text x="165" y="152" fill="#e2e8f0" font-family="sans-serif" font-size="11">6</text>
  <text x="165" y="178" fill="#e2e8f0" font-family="sans-serif" font-size="11">7</text>
  <text x="195" y="178" fill="#e2e8f0" font-family="sans-serif" font-size="11">8</text>
  <!-- Legend -->
  <text x="30" y="205" fill="#e2e8f0" font-family="sans-serif" font-size="11">Correspondientes: 1=5, 2=6, 3=7, 4=8</text>
  <text x="30" y="218" fill="#e2e8f0" font-family="sans-serif" font-size="11">Alternos internos: 3=5, 4=6</text>
</svg>
</div>

<strong style="color:#f59e0b">Estrategia para problemas de ángulos en la PAA:</strong>
<ol>
<li><strong>Identifica la configuración:</strong> ¿hay rectas paralelas? ¿hay un triángulo? ¿se cruzan dos rectas?</li>
<li><strong>Marca los ángulos conocidos</strong> y busca relaciones (complementarios, suplementarios, correspondientes, etc.)</li>
<li><strong>Plantea la ecuación:</strong> si un ángulo es 3x y otro 48°, y son opuestos por el vértice, entonces 3x = 48° → x = 16°</li>
</ol>

<strong style="color:#f59e0b">Ángulo exterior de un triángulo:</strong>
Un ángulo exterior de un triángulo es igual a la <strong>suma de los dos ángulos interiores no adyacentes</strong>. Además, un ángulo exterior y su interior adyacente son suplementarios (suman 180°).

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Confundir complementarios (90°) con suplementarios (180°)</li>
<li>❌ Asumir que ángulos correspondientes son iguales sin verificar que las rectas sean paralelas</li>
<li>❌ Olvidar que los co-interiores SUMAN 180° (no son iguales)</li>
<li>❌ No saber la fórmula (n−2)×180° para polígonos</li>
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
          { id: "geo-4", question: "¿Cuánto mide el ángulo complementario de 72°?", options: ["18°", "108°", "28°", "8°"], correctAnswer: 0, explanation: "90° − 72° = 18°" },
          { id: "geo-5", question: "Un ángulo es 4 veces su complemento. ¿Cuánto mide el ángulo?", options: ["72°", "18°", "60°", "80°"], correctAnswer: 0, explanation: "Sea x el complemento. 4x + x = 90 → 5x = 90 → x = 18. El ángulo = 72°" },
          { id: "geo-6", question: "Si dos rectas paralelas son cortadas por una transversal y un ángulo alterno interno mide 55°, ¿cuánto mide el ángulo co-interior del mismo lado?", options: ["125°", "55°", "65°", "135°"], correctAnswer: 0, explanation: "Los ángulos co-interiores suman 180°: 180° − 55° = 125°" },
          { id: "geo-7", question: "La suma de un ángulo y su suplementario es:", options: ["180°", "90°", "360°", "270°"], correctAnswer: 0, explanation: "Por definición, ángulos suplementarios suman 180°" },
          { id: "geo-8", question: "Un ángulo mide (2x + 10)° y su suplementario mide (3x − 15)°. ¿Cuánto mide el ángulo?", options: ["84°", "96°", "74°", "106°"], correctAnswer: 0, explanation: "(2x+10) + (3x−15) = 180 → 5x − 5 = 180 → 5x = 185 → x = 37. Ángulo = 2(37)+10 = 84°" },
          { id: "geo-9", question: "¿Cuántos grados tiene cada ángulo interior de un hexágono regular?", options: ["120°", "108°", "135°", "144°"], correctAnswer: 0, explanation: "Suma de ángulos interiores = (6−2)×180 = 720°. Cada ángulo = 720/6 = 120°" },
          { id: "geo-10", question: "Tres ángulos forman un ángulo llano. Si dos de ellos miden 65° y 45°, ¿cuánto mide el tercero?", options: ["70°", "60°", "80°", "110°"], correctAnswer: 0, explanation: "180° − 65° − 45° = 70°" },
          { id: "geo-11", question: "En un triángulo, un ángulo exterior mide 130°. ¿Cuánto mide el ángulo interior adyacente?", options: ["50°", "130°", "60°", "40°"], correctAnswer: 0, explanation: "El ángulo exterior y el interior adyacente son suplementarios: 180° − 130° = 50°" },
          { id: "geo-12", question: "Si las manecillas del reloj marcan las 3:00, ¿qué ángulo forman?", options: ["90°", "180°", "120°", "60°"], correctAnswer: 0, explanation: "A las 3:00, la manecilla de la hora apunta al 3 y la del minuto al 12. Son 3 horas × 30° = 90°" }
        ]
      },
      {
        id: "triangulos",
        title: "Triángulos",
        content: `El triángulo es la figura geométrica más fundamental: es el polígono con menos lados posibles (3) y la base de toda la geometría. En la PAA, los triángulos aparecen en una gran variedad de problemas.

<strong style="color:#f59e0b">Propiedad más importante:</strong> La suma de los ángulos internos de <strong>cualquier</strong> triángulo es <strong>180°</strong>. Esto significa que si conoces dos ángulos, puedes encontrar el tercero restando de 180°. Ejemplo: si dos ángulos miden 45° y 65°, el tercero = 180° − 45° − 65° = 70°.

<strong style="color:#f59e0b">Clasificación por lados:</strong>
<ul>
<li><strong>Equilátero:</strong> 3 lados iguales → los 3 ángulos miden 60° (es el más simétrico)</li>
<li><strong>Isósceles:</strong> 2 lados iguales → los ángulos de la base (opuestos a los lados iguales) también son iguales</li>
<li><strong>Escaleno:</strong> todos los lados diferentes → todos los ángulos son diferentes</li>
</ul>

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="480" height="150" viewBox="0 0 480 150">
  <!-- Equilátero -->
  <polygon points="80,20 30,110 130,110" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="2"/>
  <text x="48" y="75" fill="#e2e8f0" font-family="sans-serif" font-size="11" transform="rotate(-60,48,75)">a</text>
  <text x="112" y="75" fill="#e2e8f0" font-family="sans-serif" font-size="11" transform="rotate(60,112,75)">a</text>
  <text x="80" y="125" fill="#e2e8f0" font-family="sans-serif" font-size="11" text-anchor="middle">a</text>
  <text x="80" y="145" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Equilatero</text>
  <!-- Tick marks equilátero -->
  <line x1="53" y1="62" x2="57" y2="68" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="103" y1="62" x2="107" y2="68" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="77" y1="110" x2="83" y2="110" stroke="#f59e0b" stroke-width="1.5"/>

  <!-- Isósceles -->
  <polygon points="240,20 190,110 290,110" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="2"/>
  <text x="208" y="72" fill="#e2e8f0" font-family="sans-serif" font-size="11" transform="rotate(-62,208,72)">a</text>
  <text x="272" y="72" fill="#e2e8f0" font-family="sans-serif" font-size="11" transform="rotate(62,272,72)">a</text>
  <text x="240" y="125" fill="#e2e8f0" font-family="sans-serif" font-size="11" text-anchor="middle">b</text>
  <text x="240" y="145" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Isosceles</text>
  <!-- Tick marks isósceles -->
  <line x1="213" y1="62" x2="217" y2="68" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="263" y1="62" x2="267" y2="68" stroke="#f59e0b" stroke-width="1.5"/>

  <!-- Escaleno -->
  <polygon points="380,30 350,110 440,110" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="2"/>
  <text x="358" y="75" fill="#e2e8f0" font-family="sans-serif" font-size="11" transform="rotate(-70,358,75)">a</text>
  <text x="418" y="78" fill="#e2e8f0" font-family="sans-serif" font-size="11" transform="rotate(50,418,78)">b</text>
  <text x="395" y="125" fill="#e2e8f0" font-family="sans-serif" font-size="11" text-anchor="middle">c</text>
  <text x="395" y="145" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Escaleno</text>
</svg>
</div>

<strong style="color:#f59e0b">Clasificación por ángulos:</strong>
<ul>
<li><strong>Acutángulo:</strong> todos los ángulos menores de 90° (los tres son agudos)</li>
<li><strong>Rectángulo:</strong> tiene exactamente un ángulo de 90° (el más importante para la PAA)</li>
<li><strong>Obtusángulo:</strong> tiene un ángulo mayor de 90° (solo puede tener uno obtuso, porque 2 ángulos > 90° sumarían más de 180°)</li>
</ul>

<strong>¿Cómo saber si un triángulo es rectángulo sin medir ángulos?</strong>
Dados tres lados a, b, c (donde c es el mayor):
<ul>
<li>Si a² + b² = c² → es <strong>rectángulo</strong></li>
<li>Si a² + b² > c² → es <strong>acutángulo</strong></li>
<li>Si a² + b² < c² → es <strong>obtusángulo</strong></li>
</ul>

<strong style="color:#f59e0b">Teorema de Pitágoras — el teorema más famoso de las matemáticas</strong>
Solo aplica para <strong>triángulos rectángulos</strong>:
<code>a² + b² = c²</code>
Donde <strong>c</strong> es la <strong>hipotenusa</strong> (el lado más largo, opuesto al ángulo recto) y <strong>a, b</strong> son los <strong>catetos</strong> (los lados que forman el ángulo recto).

<strong>¿Cómo identificar la hipotenusa?</strong> Es siempre el lado opuesto al ángulo de 90°, y siempre es el más largo.

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="280" height="200" viewBox="0 0 280 200">
  <!-- Right triangle -->
  <polygon points="40,170 40,40 220,170" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="2"/>
  <!-- Right angle square -->
  <rect x="40" y="150" width="20" height="20" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Side labels -->
  <text x="25" y="110" fill="#e2e8f0" font-family="sans-serif" font-size="14" text-anchor="middle">a</text>
  <text x="130" y="190" fill="#e2e8f0" font-family="sans-serif" font-size="14" text-anchor="middle">b</text>
  <text x="145" y="95" fill="#f59e0b" font-family="sans-serif" font-size="14" text-anchor="middle" transform="rotate(45,145,95)">c (hipotenusa)</text>
  <!-- Formula -->
  <text x="140" y="30" fill="#e2e8f0" font-family="sans-serif" font-size="14" text-anchor="middle" font-weight="bold">a² + b² = c²</text>
</svg>
</div>

<strong style="color:#f59e0b">Ternas pitagóricas que debes memorizar:</strong>
Estos son conjuntos de números enteros que satisfacen el teorema:
<ul>
<li><strong>(3, 4, 5)</strong> y sus múltiplos: (6, 8, 10), (9, 12, 15), (15, 20, 25)</li>
<li><strong>(5, 12, 13)</strong> y sus múltiplos: (10, 24, 26)</li>
<li><strong>(8, 15, 17)</strong></li>
<li><strong>(7, 24, 25)</strong></li>
</ul>
Si en la PAA ves catetos 6 y 8, inmediatamente sabes que la hipotenusa es 10 (es 3-4-5 multiplicado por 2).

<strong style="color:#f59e0b">Área del triángulo:</strong>
<code>A = (base × altura) / 2</code>
<ul>
<li>La <strong>base</strong> puede ser cualquier lado del triángulo</li>
<li>La <strong>altura</strong> es la distancia perpendicular desde la base al vértice opuesto</li>
<li>En un triángulo rectángulo, los catetos son la base y la altura: A = (cateto₁ × cateto₂) / 2</li>
</ul>

<strong style="color:#f59e0b">Triángulos semejantes — proporcionalidad</strong>
Dos triángulos son <strong>semejantes</strong> si tienen los mismos ángulos (misma forma, diferente tamaño). Cuando son semejantes:
<ul>
<li>Sus lados correspondientes son <strong>proporcionales</strong></li>
<li>El <strong>factor de escala</strong> k = lado del mayor / lado correspondiente del menor</li>
<li>Si el factor de escala es k, las áreas se relacionan como k²</li>
</ul>

<strong>Ejemplo:</strong> Un triángulo tiene lados 3, 4, 5. Otro semejante tiene un lado de 10 correspondiente al de 5. Factor de escala = 10/5 = 2. Entonces los otros lados son 3×2 = 6 y 4×2 = 8.

<strong style="color:#f59e0b">Desigualdad triangular</strong>
Para que tres segmentos puedan formar un triángulo, la suma de dos lados cualesquiera debe ser <strong>mayor</strong> que el tercer lado. Ejemplo: ¿pueden 2, 3, 7 formar un triángulo? 2 + 3 = 5 < 7 → No.

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Usar Pitágoras en triángulos que no son rectángulos</li>
<li>❌ Confundir la hipotenusa con un cateto (la hipotenusa es siempre c, la más larga)</li>
<li>❌ Olvidar dividir entre 2 al calcular el área</li>
<li>❌ Asumir que un triángulo isósceles es siempre equilátero</li>
<li>❌ Usar la altura equivocada (debe ser perpendicular a la base elegida)</li>
</ul>`,
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
          { id: "tri-5", question: "Dos triángulos semejantes: el menor tiene lados 3, 4, 5 y el mayor tiene un lado de 10 correspondiente al de 5. ¿Cuánto mide el lado correspondiente al de 3?", options: ["6", "8", "9", "5"], correctAnswer: 0, explanation: "Factor de escala: 10/5 = 2. Lado correspondiente = 3 × 2 = 6" },
          { id: "tri-6", question: "¿Cuánto mide cada ángulo de un triángulo equilátero?", options: ["60°", "90°", "45°", "120°"], correctAnswer: 0, explanation: "Los tres ángulos son iguales: 180°/3 = 60°" },
          { id: "tri-7", question: "Un triángulo rectángulo tiene catetos de 6 y 8. ¿Cuánto mide su hipotenusa?", options: ["10", "14", "12", "48"], correctAnswer: 0, explanation: "c² = 6² + 8² = 36 + 64 = 100 → c = 10" },
          { id: "tri-8", question: "En un triángulo isósceles, los ángulos de la base miden 50° cada uno. ¿Cuánto mide el ángulo del vértice?", options: ["80°", "50°", "100°", "130°"], correctAnswer: 0, explanation: "180° − 50° − 50° = 80°" },
          { id: "tri-9", question: "El perímetro de un triángulo equilátero es 36 cm. ¿Cuánto mide cada lado?", options: ["12 cm", "9 cm", "18 cm", "6 cm"], correctAnswer: 0, explanation: "Cada lado = 36/3 = 12 cm" },
          { id: "tri-10", question: "Un triángulo tiene lados 5, 12 y 13. ¿Es rectángulo?", options: ["Sí", "No", "No se puede saber", "Solo si tiene un ángulo de 90°"], correctAnswer: 0, explanation: "5² + 12² = 25 + 144 = 169 = 13². Cumple Pitágoras → sí es rectángulo" },
          { id: "tri-11", question: "¿Cuál es el área de un triángulo rectángulo con catetos de 9 y 12?", options: ["54", "108", "21", "36"], correctAnswer: 0, explanation: "A = (9 × 12)/2 = 108/2 = 54" },
          { id: "tri-12", question: "Si un triángulo tiene lados 7, 7 y 10, ¿qué tipo es por sus lados?", options: ["Isósceles", "Equilátero", "Escaleno", "Rectángulo"], correctAnswer: 0, explanation: "Tiene dos lados iguales (7 y 7) → es isósceles" }
        ]
      },
      {
        id: "circunferencia",
        title: "Circunferencia y Círculo",
        content: `La <strong>circunferencia</strong> es la línea curva (el borde), mientras que el <strong>círculo</strong> es toda la región interior incluyendo el borde. En la práctica, mucha gente los usa como sinónimos, pero en la PAA la distinción importa: la circunferencia es una longitud (perímetro) y el círculo tiene un área.

<strong style="color:#f59e0b">Elementos del círculo:</strong>
<ul>
<li><strong>Centro (O):</strong> el punto equidistante de todos los puntos de la circunferencia</li>
<li><strong>Radio (r):</strong> distancia del centro a cualquier punto de la circunferencia. Todos los radios son iguales.</li>
<li><strong>Diámetro (d):</strong> un segmento que pasa por el centro y une dos puntos de la circunferencia. d = 2r</li>
<li><strong>Cuerda:</strong> cualquier segmento que une dos puntos de la circunferencia. El diámetro es la cuerda más larga.</li>
<li><strong>Arco:</strong> una parte de la circunferencia (un "pedazo" de la curva)</li>
<li><strong>Sector:</strong> la región entre dos radios y un arco (como un "trozo de pizza")</li>
<li><strong>Tangente:</strong> una recta que toca la circunferencia en exactamente un punto. Es perpendicular al radio en ese punto.</li>
</ul>

<strong style="color:#f59e0b">Las dos fórmulas fundamentales:</strong>
<ul>
<li><strong>Circunferencia (perímetro):</strong> C = 2πr = πd</li>
<li><strong>Área del círculo:</strong> A = πr²</li>
</ul>
<strong>Cuidado:</strong> no confundas C (perímetro, una longitud) con A (área). Circunferencia tiene r¹ (lineal), Área tiene r² (cuadrático).

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="300" height="300" viewBox="0 0 300 300">
  <!-- Circle -->
  <circle cx="150" cy="150" r="100" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <!-- Shaded sector (0 to 60 degrees) -->
  <path d="M 150 150 L 250 150 A 100 100 0 0 0 200 63.4 Z" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="1"/>
  <!-- Center dot -->
  <circle cx="150" cy="150" r="4" fill="#f59e0b"/>
  <text x="142" y="145" fill="#e2e8f0" font-family="sans-serif" font-size="12">O</text>
  <!-- Radius -->
  <line x1="150" y1="150" x2="250" y2="150" stroke="#f59e0b" stroke-width="2"/>
  <text x="200" y="143" fill="#f59e0b" font-family="sans-serif" font-size="13" text-anchor="middle">r</text>
  <!-- Diameter -->
  <line x1="50" y1="150" x2="250" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6,3"/>
  <text x="100" y="168" fill="#e2e8f0" font-family="sans-serif" font-size="13" text-anchor="middle">d = 2r</text>
  <!-- Sector angle arc -->
  <path d="M 175 150 A 25 25 0 0 0 162.5 128.35" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="180" y="132" fill="#f59e0b" font-family="sans-serif" font-size="11">θ</text>
  <!-- Sector label -->
  <text x="210" y="120" fill="#e2e8f0" font-family="sans-serif" font-size="11">Sector</text>
  <!-- Formulas -->
  <text x="150" y="278" fill="#e2e8f0" font-family="sans-serif" font-size="13" text-anchor="middle" font-weight="bold">C = 2πr     A = πr²</text>
</svg>
</div>

<strong style="color:#f59e0b">El número π (pi)</strong>
π ≈ 3.14159... Es la razón entre la circunferencia y el diámetro de CUALQUIER círculo: π = C/d. Es un número irracional (tiene infinitos decimales sin patrón). En la PAA generalmente usan <strong>π ≈ 3.14</strong> o dejan las respuestas "en términos de π" (como 25π).

<strong style="color:#f59e0b">Arco y sector circular — fracciones del círculo</strong>
Un sector circular es como una "rebanada de pizza". El ángulo central θ determina qué fracción del círculo es:
<ul>
<li><strong>Fracción del círculo:</strong> θ/360°</li>
<li><strong>Longitud del arco:</strong> L = (θ/360°) × 2πr — es esa fracción del perímetro</li>
<li><strong>Área del sector:</strong> A = (θ/360°) × πr² — es esa fracción del área total</li>
</ul>

<strong>Ejemplo:</strong> Un sector con ángulo 90° y radio 6:
<ul>
<li>Fracción = 90°/360° = 1/4 (un cuarto del círculo)</li>
<li>Área = (1/4) × π(6²) = (1/4)(36π) = 9π</li>
<li>Longitud del arco = (1/4) × 2π(6) = (1/4)(12π) = 3π</li>
</ul>

<strong style="color:#f59e0b">Ángulos en la circunferencia:</strong>
<ul>
<li><strong>Ángulo central:</strong> tiene su vértice en el centro del círculo. Su medida es <strong>igual</strong> a la del arco que subtiende.</li>
<li><strong>Ángulo inscrito:</strong> tiene su vértice en un punto de la circunferencia. Su medida es la <strong>mitad</strong> del arco que subtiende.</li>
<li>Esto significa que un ángulo central y un ángulo inscrito que subtienden el mismo arco tienen una relación: el central es el doble del inscrito.</li>
</ul>

<strong style="color:#f59e0b">Corona circular</strong>
La corona circular es la región entre dos círculos concéntricos (mismo centro, diferentes radios R y r):
<code>Área corona = πR² − πr² = π(R² − r²)</code>

<strong style="color:#f59e0b">Semicírculo</strong>
Es la mitad del círculo:
<ul>
<li>Área del semicírculo = πr²/2</li>
<li>Perímetro del semicírculo = πr + 2r (medio perímetro + diámetro)</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Usar el diámetro en la fórmula del área en vez del radio: A = π(d)² está MAL. Primero divide d entre 2</li>
<li>❌ Confundir circunferencia (perímetro) con área</li>
<li>❌ Olvidar que el ángulo inscrito es la MITAD del arco, no igual</li>
<li>❌ No reducir la fracción θ/360° antes de calcular</li>
</ul>`,
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
          { id: "cir-4", question: "Un sector circular tiene ángulo 90° y radio 6. ¿Cuál es su área?", options: ["9π", "36π", "18π", "6π"], correctAnswer: 0, explanation: "Área = (90/360) × π(6)² = (1/4)(36π) = 9π" },
          { id: "cir-5", question: "¿Cuál es la longitud del arco con ángulo central 60° y radio 9?", options: ["3π", "6π", "9π", "18π"], correctAnswer: 0, explanation: "Arco = (60/360) × 2π(9) = (1/6)(18π) = 3π" },
          { id: "cir-6", question: "Si la circunferencia de un círculo es 20π, ¿cuánto mide el diámetro?", options: ["20", "10", "40", "5"], correctAnswer: 0, explanation: "C = πd → 20π = πd → d = 20" },
          { id: "cir-7", question: "Un círculo tiene diámetro 14. ¿Cuál es su área?", options: ["49π", "196π", "28π", "14π"], correctAnswer: 0, explanation: "Radio = 7. A = π(7)² = 49π" },
          { id: "cir-8", question: "¿Cuánto mide un ángulo inscrito si el arco que subtiende mide 140°?", options: ["70°", "140°", "280°", "35°"], correctAnswer: 0, explanation: "El ángulo inscrito es la mitad del arco: 140°/2 = 70°" },
          { id: "cir-9", question: "El área de un sector circular con radio 10 y ángulo 36° es:", options: ["10π", "100π", "36π", "5π"], correctAnswer: 0, explanation: "Área = (36/360) × π(10)² = (1/10)(100π) = 10π" },
          { id: "cir-10", question: "Si el área de un círculo es 100π, ¿cuánto mide la circunferencia?", options: ["20π", "10π", "50π", "100π"], correctAnswer: 0, explanation: "πr² = 100π → r = 10. C = 2π(10) = 20π" },
          { id: "cir-11", question: "Una rueda tiene radio 35 cm. ¿Cuántos cm recorre en una vuelta completa? (usa π ≈ 22/7)", options: ["220 cm", "110 cm", "70 cm", "350 cm"], correctAnswer: 0, explanation: "C = 2πr = 2(22/7)(35) = 2(110) = 220 cm" },
          { id: "cir-12", question: "Dos círculos concéntricos tienen radios 3 y 5. ¿Cuál es el área de la corona circular?", options: ["16π", "25π", "9π", "34π"], correctAnswer: 0, explanation: "Área corona = π(5)² − π(3)² = 25π − 9π = 16π" }
        ]
      },
      {
        id: "area-volumen",
        title: "Perímetro, Área y Volumen",
        content: `Este tema reúne las fórmulas más importantes de geometría. La clave no es memorizar todas mecánicamente, sino <strong>entender la lógica</strong> detrás de cada una. Muchas fórmulas están relacionadas entre sí.

<strong style="color:#f59e0b">FIGURAS PLANAS — Perímetro y Área</strong>
El <strong>perímetro</strong> es la distancia alrededor de la figura (suma de todos los lados). El <strong>área</strong> es la cantidad de superficie que cubre la figura.

<strong>Rectángulo:</strong>
<ul>
<li>P = 2(l + a) — suma los 4 lados</li>
<li>A = l × a — largo por ancho</li>
</ul>

<strong>Cuadrado</strong> (caso especial del rectángulo donde l = a):
<ul>
<li>P = 4l</li>
<li>A = l² — lado al cuadrado (de ahí viene el nombre "elevar al cuadrado")</li>
</ul>

<strong>Paralelogramo</strong> (un rectángulo "inclinado"):
<ul>
<li>A = base × altura (la altura es perpendicular a la base, NO el lado inclinado)</li>
</ul>

<strong>Trapecio</strong> (tiene dos lados paralelos):
<ul>
<li>A = (B + b) × h / 2 donde B = base mayor, b = base menor, h = altura</li>
<li>Truco: es como el promedio de las dos bases multiplicado por la altura</li>
</ul>

<strong>Rombo</strong> (4 lados iguales con diagonales perpendiculares):
<ul>
<li>A = (D × d) / 2 donde D y d son las diagonales mayor y menor</li>
</ul>

<strong>Triángulo:</strong> A = (base × altura) / 2 — es la mitad de un rectángulo con la misma base y altura

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="520" height="180" viewBox="0 0 520 180">
  <!-- Rectángulo -->
  <rect x="10" y="20" width="120" height="70" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="2"/>
  <text x="70" y="105" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">l</text>
  <text x="140" y="60" fill="#e2e8f0" font-family="sans-serif" font-size="12">a</text>
  <text x="70" y="12" fill="#e2e8f0" font-family="sans-serif" font-size="11" text-anchor="middle">A = l × a</text>
  <text x="70" y="125" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Rectangulo</text>

  <!-- Trapecio -->
  <polygon points="210,30 310,30 340,90 180,90" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="2"/>
  <text x="260" y="25" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">b</text>
  <text x="260" y="105" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">B</text>
  <!-- Height line -->
  <line x1="260" y1="30" x2="260" y2="90" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="270" y="65" fill="#f59e0b" font-family="sans-serif" font-size="12">h</text>
  <text x="260" y="12" fill="#e2e8f0" font-family="sans-serif" font-size="11" text-anchor="middle">A = (B+b)h/2</text>
  <text x="260" y="125" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Trapecio</text>

  <!-- Cilindro -->
  <ellipse cx="430" cy="30" rx="50" ry="15" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <ellipse cx="430" cy="100" rx="50" ry="15" fill="rgba(42,80,128,0.2)" stroke="#94a3b8" stroke-width="2"/>
  <line x1="380" y1="30" x2="380" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <line x1="480" y1="30" x2="480" y2="100" stroke="#94a3b8" stroke-width="2"/>
  <!-- Radius -->
  <line x1="430" y1="30" x2="480" y2="30" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="455" y="24" fill="#f59e0b" font-family="sans-serif" font-size="12" text-anchor="middle">r</text>
  <!-- Height -->
  <line x1="490" y1="30" x2="490" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="500" y="70" fill="#f59e0b" font-family="sans-serif" font-size="12">h</text>
  <text x="430" y="12" fill="#e2e8f0" font-family="sans-serif" font-size="11" text-anchor="middle">V = πr²h</text>
  <text x="430" y="135" fill="#e2e8f0" font-family="sans-serif" font-size="12" text-anchor="middle">Cilindro</text>
</svg>
</div>

<strong style="color:#f59e0b">SÓLIDOS — Volumen y Área Superficial</strong>
El <strong>volumen</strong> mide cuánto espacio ocupa un sólido (en unidades cúbicas: cm³, m³). El <strong>área superficial</strong> mide la superficie exterior total.

<strong>Prisma rectangular (caja):</strong>
<ul>
<li>V = largo × ancho × alto</li>
<li>Área superficial = 2(la + lh + ah)</li>
</ul>

<strong>Cubo</strong> (caso especial donde todos los lados son iguales):
<ul>
<li>V = l³ — lado al cubo (de ahí viene "elevar al cubo")</li>
<li>Área superficial = 6l² (6 caras iguales)</li>
</ul>

<strong>Cilindro</strong> (como una lata):
<ul>
<li>V = πr²h — el área del círculo base multiplicada por la altura</li>
<li>Área superficial = 2πr² + 2πrh (2 tapas circulares + la superficie lateral)</li>
</ul>

<strong>Cono</strong> (como un cono de helado):
<ul>
<li>V = πr²h / 3 — es exactamente <strong>un tercio</strong> del cilindro con la misma base y altura</li>
</ul>

<strong>Esfera</strong> (como una pelota):
<ul>
<li>V = (4/3)πr³</li>
<li>Área superficial = 4πr²</li>
</ul>

<strong>Pirámide:</strong>
<ul>
<li>V = (Área de la base × h) / 3 — es un tercio del prisma con la misma base y altura</li>
</ul>

<strong style="color:#f59e0b">Patrón importante: la regla del "un tercio"</strong>
<ul>
<li>Volumen del <strong>cono</strong> = (1/3) × Volumen del <strong>cilindro</strong> con misma base y altura</li>
<li>Volumen de la <strong>pirámide</strong> = (1/3) × Volumen del <strong>prisma</strong> con misma base y altura</li>
</ul>
Si recuerdas las fórmulas del cilindro y prisma, las del cono y pirámide son simplemente dividir entre 3.

<strong style="color:#f59e0b">Unidades de medida:</strong>
<ul>
<li>Perímetro → unidades lineales (cm, m)</li>
<li>Área → unidades cuadradas (cm², m²)</li>
<li>Volumen → unidades cúbicas (cm³, m³). Recuerda: 1 litro = 1,000 cm³</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Confundir radio con diámetro al calcular volúmenes de cilindros y esferas</li>
<li>❌ Olvidar dividir entre 3 en conos y pirámides</li>
<li>❌ Usar la fórmula del trapecio sin identificar correctamente las bases y la altura</li>
<li>❌ Confundir área superficial con volumen</li>
<li>❌ No convertir unidades cuando el problema mezcla cm y m</li>
</ul>`,
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
          { id: "vol-5", question: "Un rectángulo tiene perímetro 30 y largo 10. ¿Cuál es su área?", options: ["50", "30", "100", "75"], correctAnswer: 0, explanation: "P = 2(10+a) = 30 → a = 5. Área = 10 × 5 = 50" },
          { id: "vol-6", question: "¿Cuál es el volumen de un cono con radio 3 y altura 12?", options: ["36π", "108π", "12π", "324π"], correctAnswer: 0, explanation: "V = πr²h/3 = π(9)(12)/3 = 108π/3 = 36π" },
          { id: "vol-7", question: "El área de un rombo con diagonales 10 y 8 es:", options: ["40", "80", "18", "36"], correctAnswer: 0, explanation: "A = (D × d)/2 = (10 × 8)/2 = 40" },
          { id: "vol-8", question: "¿Cuál es el área total de un cubo de arista 5 cm?", options: ["150 cm²", "125 cm²", "25 cm²", "100 cm²"], correctAnswer: 0, explanation: "Área total = 6 × l² = 6 × 25 = 150 cm²" },
          { id: "vol-9", question: "Una pirámide de base cuadrada tiene arista de base 6 y altura 10. Su volumen es:", options: ["120", "360", "180", "60"], correctAnswer: 0, explanation: "Área base = 6² = 36. V = (36 × 10)/3 = 120" },
          { id: "vol-10", question: "Un paralelogramo tiene base 15 y altura 8. ¿Cuál es su área?", options: ["120", "46", "60", "23"], correctAnswer: 0, explanation: "A = base × altura = 15 × 8 = 120" },
          { id: "vol-11", question: "¿Cuántos litros caben en un tanque cilíndrico de radio 10 cm y altura 30 cm? (1 litro = 1000 cm³, usa π ≈ 3.14)", options: ["9.42 litros", "3.14 litros", "94.2 litros", "31.4 litros"], correctAnswer: 0, explanation: "V = π(10)²(30) = 3.14 × 100 × 30 = 9420 cm³ = 9.42 litros" },
          { id: "vol-12", question: "Un prisma rectangular mide 5 cm × 4 cm × 3 cm. ¿Cuál es su volumen?", options: ["60 cm³", "12 cm³", "47 cm³", "24 cm³"], correctAnswer: 0, explanation: "V = 5 × 4 × 3 = 60 cm³" }
        ]
      },
      {
        id: "geometria-analitica",
        title: "Geometría Analítica",
        content: `La <strong>geometría analítica</strong> es el puente entre el álgebra y la geometría: estudia figuras geométricas usando <strong>coordenadas numéricas</strong> en el plano cartesiano. Convierte problemas geométricos en ecuaciones y viceversa.

<strong style="color:#f59e0b">El plano cartesiano</strong>
Creado por René Descartes, es un sistema de dos ejes perpendiculares que permite ubicar cualquier punto con dos números:
<ul>
<li><strong>Eje X (horizontal):</strong> positivo a la derecha, negativo a la izquierda</li>
<li><strong>Eje Y (vertical):</strong> positivo hacia arriba, negativo hacia abajo</li>
<li><strong>Origen:</strong> el punto (0, 0) donde se cruzan los ejes</li>
<li>Cada punto se escribe como <code>(x, y)</code> — primero la coordenada horizontal, luego la vertical</li>
</ul>

<strong>Los 4 cuadrantes</strong> (se cuentan en sentido antihorario):
<ul>
<li><strong>I:</strong> (+, +) — arriba a la derecha</li>
<li><strong>II:</strong> (−, +) — arriba a la izquierda</li>
<li><strong>III:</strong> (−, −) — abajo a la izquierda</li>
<li><strong>IV:</strong> (+, −) — abajo a la derecha</li>
</ul>
Los puntos sobre los ejes no pertenecen a ningún cuadrante.

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="260" height="260" viewBox="0 0 260 260">
  <line x1="130" y1="10" x2="130" y2="250" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="10" y1="130" x2="250" y2="130" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="245" y="125" fill="#94a3b8" font-family="sans-serif" font-size="12">x</text>
  <text x="135" y="18" fill="#94a3b8" font-family="sans-serif" font-size="12">y</text>
  <text x="175" y="80" fill="#e2e8f0" font-family="sans-serif" font-size="11">I (+,+)</text>
  <text x="45" y="80" fill="#e2e8f0" font-family="sans-serif" font-size="11">II (−,+)</text>
  <text x="45" y="180" fill="#e2e8f0" font-family="sans-serif" font-size="11">III (−,−)</text>
  <text x="175" y="180" fill="#e2e8f0" font-family="sans-serif" font-size="11">IV (+,−)</text>
  <circle cx="190" cy="70" r="5" fill="#f59e0b"/>
  <text x="198" y="65" fill="#f59e0b" font-family="sans-serif" font-size="10">(3,3)</text>
  <circle cx="70" cy="170" r="5" fill="#10b981"/>
  <text x="40" y="195" fill="#10b981" font-family="sans-serif" font-size="10">(−3,−2)</text>
</svg>
</div>

<strong style="color:#f59e0b">Las 3 fórmulas más importantes de la geometría analítica:</strong>

<strong>1. Distancia entre dos puntos</strong>
<code>d = √[(x₂−x₁)² + (y₂−y₁)²]</code>
Esta fórmula es simplemente el <strong>Teorema de Pitágoras</strong> aplicado al plano cartesiano. La distancia horizontal es (x₂−x₁), la vertical es (y₂−y₁), y la distancia total es la hipotenusa.

<strong>Ejemplo:</strong> Distancia entre (1, 2) y (4, 6):
d = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5

<strong>2. Punto medio</strong>
<code>M = ((x₁+x₂)/2, (y₁+y₂)/2)</code>
Es simplemente el <strong>promedio</strong> de las coordenadas. El punto que está exactamente a la mitad del segmento.

<strong>Ejemplo:</strong> Punto medio entre (−2, 3) y (6, 7):
M = ((−2+6)/2, (3+7)/2) = (2, 5)

<strong>Truco de la PAA:</strong> Si te dan el punto medio y un extremo, puedes encontrar el otro extremo. Si M = (3, 5) y un extremo es (1, 2), el otro extremo es (2·3−1, 2·5−2) = (5, 8).

<strong>3. Pendiente de una recta</strong>
<code>m = (y₂−y₁)/(x₂−x₁)</code>
La pendiente mide la <strong>inclinación</strong> de la recta: cuánto sube (o baja) y por cada unidad que avanza x. También se lee como "cambio en y / cambio en x" o "subida / avance".

<strong style="color:#f59e0b">Ecuaciones de la recta — dos formas principales:</strong>
<ul>
<li><strong>Pendiente-intercepto:</strong> <code>y = mx + b</code> — útil cuando conoces la pendiente y el intercepto en y</li>
<li><strong>Punto-pendiente:</strong> <code>y − y₁ = m(x − x₁)</code> — útil cuando conoces la pendiente y un punto</li>
</ul>

<strong>Para escribir la ecuación de una recta necesitas:</strong>
<ol>
<li>La pendiente m (dada directamente o calculada con dos puntos)</li>
<li>Un punto por donde pasa la recta</li>
</ol>

<strong>Ejemplo:</strong> Escribe la ecuación de la recta con pendiente 3 que pasa por (1, 5):
y − 5 = 3(x − 1) → y = 3x − 3 + 5 → y = 3x + 2

<strong style="color:#f59e0b">Relaciones entre rectas:</strong>
<ul>
<li><strong>Paralelas:</strong> misma pendiente (m₁ = m₂), nunca se cruzan</li>
<li><strong>Perpendiculares:</strong> pendientes que son recíprocas negativas: m₁ · m₂ = −1. Si una tiene pendiente 2, la perpendicular tiene pendiente −1/2</li>
<li><strong>Secantes:</strong> se cruzan en un punto (pendientes diferentes pero no perpendiculares)</li>
</ul>

<strong style="color:#f59e0b">Interceptos — donde la recta cruza los ejes:</strong>
<ul>
<li><strong>Intercepto en y:</strong> el valor de y cuando x = 0. En y = mx + b, es <strong>b</strong>.</li>
<li><strong>Intercepto en x (raíz):</strong> el valor de x cuando y = 0. Iguala y = 0 y despeja x.</li>
</ul>

<strong style="color:#f59e0b">Pendientes especiales:</strong>
<ul>
<li>Recta <strong>horizontal</strong>: m = 0 (no sube ni baja). Ecuación: y = k</li>
<li>Recta <strong>vertical</strong>: m es <strong>indefinida</strong> (división por cero). Ecuación: x = k. No es una función.</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Invertir las coordenadas: (x, y) NO es (y, x). x siempre va primero</li>
<li>❌ Calcular la pendiente al revés: m = (x₂−x₁)/(y₂−y₁) está MAL. Es y sobre x</li>
<li>❌ Confundir pendiente con intercepto: en y = 3x + 5, m = 3 y b = 5, no al revés</li>
<li>❌ Olvidar que la perpendicular cambia signo Y es recíproca: la perpendicular a m = 3 es m = −1/3, no −3</li>
<li>❌ No reconocer que la fórmula de distancia es Pitágoras</li>
</ul>`,
        examples: [
          {
            problem: "¿Cuál es la distancia entre (1, 2) y (4, 6)?",
            solution: "d = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5"
          },
          {
            problem: "Halla el punto medio entre (−2, 3) y (6, 7)",
            solution: "M = ((−2+6)/2, (3+7)/2) = (4/2, 10/2) = (2, 5)"
          },
          {
            problem: "Escribe la ecuación de la recta con pendiente 3 que pasa por (1, 5)",
            solution: "y − 5 = 3(x − 1) → y = 3x − 3 + 5 → y = 3x + 2"
          }
        ],
        tips: [
          "La fórmula de distancia es Pitágoras aplicado al plano cartesiano.",
          "Para la ecuación de una recta necesitas: pendiente + un punto, o dos puntos.",
          "Rectas paralelas tienen la misma pendiente. Rectas perpendiculares: m₁ · m₂ = −1."
        ],
        exercises: [
          { id: "gean-1", question: "¿Cuál es la distancia entre (0, 0) y (3, 4)?", options: ["5", "7", "25", "1"], correctAnswer: 0, explanation: "d = √(9+16) = √25 = 5" },
          { id: "gean-2", question: "¿Cuál es el punto medio entre (2, 8) y (6, 4)?", options: ["(4, 6)", "(8, 12)", "(3, 2)", "(4, 4)"], correctAnswer: 0, explanation: "M = ((2+6)/2, (8+4)/2) = (4, 6)" },
          { id: "gean-3", question: "¿Cuál es la pendiente de la recta que pasa por (1, 3) y (5, 11)?", options: ["2", "4", "8", "3"], correctAnswer: 0, explanation: "m = (11−3)/(5−1) = 8/4 = 2" },
          { id: "gean-4", question: "¿En qué cuadrante se encuentra el punto (−3, 5)?", options: ["II", "I", "III", "IV"], correctAnswer: 0, explanation: "x negativo, y positivo → Cuadrante II" },
          { id: "gean-5", question: "Si una recta tiene pendiente 2 y pasa por (0, −3), ¿cuál es su ecuación?", options: ["y = 2x − 3", "y = −3x + 2", "y = 2x + 3", "y = −2x − 3"], correctAnswer: 0, explanation: "y = mx + b → y = 2x + (−3) → y = 2x − 3" },
          { id: "gean-6", question: "Una recta tiene pendiente 1/2. ¿Cuál es la pendiente de una recta perpendicular?", options: ["−2", "2", "−1/2", "1/2"], correctAnswer: 0, explanation: "Perpendiculares: m₁ · m₂ = −1 → (1/2) · m₂ = −1 → m₂ = −2" },
          { id: "gean-7", question: "¿Cuál es la distancia entre (−1, 2) y (5, 10)?", options: ["10", "8", "6", "14"], correctAnswer: 0, explanation: "d = √[(5−(−1))² + (10−2)²] = √[36+64] = √100 = 10" },
          { id: "gean-8", question: "La recta y = 3x + 5 tiene pendiente:", options: ["3", "5", "−3", "3/5"], correctAnswer: 0, explanation: "En y = mx + b, m es la pendiente. Aquí m = 3" },
          { id: "gean-9", question: "¿Dónde cruza el eje x la recta y = 4x − 8?", options: ["(2, 0)", "(0, −8)", "(−2, 0)", "(8, 0)"], correctAnswer: 0, explanation: "En el eje x, y = 0: 0 = 4x − 8 → x = 2. Punto: (2, 0)" },
          { id: "gean-10", question: "¿Las rectas y = 2x + 1 e y = 2x − 5 son...?", options: ["Paralelas", "Perpendiculares", "Coincidentes", "Secantes"], correctAnswer: 0, explanation: "Ambas tienen pendiente m = 2 pero diferente intercepto → son paralelas" },
          { id: "gean-11", question: "El punto medio de un segmento es (3, 5) y un extremo es (1, 2). ¿Cuál es el otro extremo?", options: ["(5, 8)", "(2, 3.5)", "(4, 7)", "(−1, −1)"], correctAnswer: 0, explanation: "(1+x)/2 = 3 → x = 5. (2+y)/2 = 5 → y = 8. El otro extremo es (5, 8)" },
          { id: "gean-12", question: "¿Cuál es el perímetro del triángulo con vértices (0,0), (4,0) y (0,3)?", options: ["12", "7", "10", "9"], correctAnswer: 0, explanation: "Lados: 4 (horizontal), 3 (vertical), √(16+9)=5 (hipotenusa). P = 4+3+5 = 12" }
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
        content: `Las medidas de tendencia central responden la pregunta: "¿Cuál es el valor <em>típico</em> o <em>representativo</em> de un conjunto de datos?" Hay tres medidas principales, y cada una es útil en situaciones diferentes.

<strong style="color:#f59e0b">1. Media aritmética (promedio)</strong>
<code>Media = Suma de todos los datos ÷ Cantidad de datos</code>

Es la medida más conocida. Usa TODOS los datos en su cálculo.

<strong>Ejemplo:</strong> Datos: 4, 7, 2, 9, 3
Media = (4 + 7 + 2 + 9 + 3) / 5 = 25/5 = 5

<strong>Propiedad importante:</strong> Si conoces la media y la cantidad de datos, puedes encontrar la suma total.
Si el promedio de 5 números es 20, entonces la suma = 5 × 20 = 100.

<strong style="color:#f59e0b">⚠ El gran problema de la media: los valores extremos (outliers)</strong>
La media es muy sensible a valores atípicos. Ejemplo: Los salarios de 5 personas son B/.500, B/.500, B/.600, B/.550, B/.10,000. La media = B/.2,430. ¿Es representativa? No — 4 de 5 personas ganan mucho menos que eso. El salario de B/.10,000 "arrastra" la media hacia arriba.

<strong style="color:#f59e0b">2. Mediana — el valor del medio</strong>
Es el valor que queda en el <strong>centro</strong> cuando ordenas todos los datos de menor a mayor.

<strong>Paso a paso:</strong>
<ol>
<li><strong>SIEMPRE ordena los datos primero</strong> (de menor a mayor)</li>
<li>Si la cantidad de datos es <strong>impar</strong>: la mediana es el dato de la posición central. Posición = (n+1)/2</li>
<li>Si la cantidad de datos es <strong>par</strong>: la mediana es el <strong>promedio</strong> de los dos datos centrales</li>
</ol>

<strong>Ejemplo con cantidad impar (7 datos):</strong>
Datos: 4, 7, 2, 9, 3, 7, 5
Ordenados: 2, 3, 4, <strong>5</strong>, 7, 7, 9
Mediana = 5 (el dato de la posición 4, que es el centro)

<strong>Ejemplo con cantidad par (6 datos):</strong>
Datos: 3, 8, 1, 5, 9, 4
Ordenados: 1, 3, <strong>4, 5</strong>, 8, 9
Mediana = (4 + 5) / 2 = 4.5 (promedio de los dos centrales)

<strong>Ventaja de la mediana:</strong> NO se afecta por valores extremos. En el ejemplo de salarios anterior, la mediana sería B/.550, que es mucho más representativa.

<strong style="color:#f59e0b">¿Cuándo usar la media vs. la mediana?</strong>
<ul>
<li><strong>Media:</strong> cuando los datos están distribuidos uniformemente sin valores extremos</li>
<li><strong>Mediana:</strong> cuando hay valores extremos que podrían distorsionar el promedio (salarios, precios de casas, etc.)</li>
</ul>

<strong style="color:#f59e0b">3. Moda — el dato más frecuente</strong>
Es el valor que <strong>más se repite</strong> en el conjunto de datos.
<ul>
<li>Datos: 2, 5, 3, <strong>5</strong>, 7, <strong>5</strong>, 8 → Moda = 5 (aparece 3 veces)</li>
<li><strong>Bimodal:</strong> 3, 3, 5, 7, 7 → Modas = 3 y 7 (ambas se repiten 2 veces)</li>
<li><strong>Sin moda:</strong> 2, 4, 6, 8 → ningún valor se repite</li>
</ul>

<strong>¿Cuándo es útil la moda?</strong> Para datos categóricos (no numéricos). Ejemplo: ¿cuál es el color favorito en la clase? Si 12 dicen azul, 8 rojo, 5 verde → la moda es "azul".

<strong style="color:#f59e0b">4. Rango — la dispersión</strong>
<code>Rango = Valor máximo − Valor mínimo</code>
Mide qué tan "dispersos" o "esparcidos" están los datos. Un rango grande indica mucha variación.
Ejemplo: Datos: 4, 12, 7, 3, 15, 9 → Rango = 15 − 3 = 12

<strong style="color:#f59e0b">5. Media ponderada — cuando no todos los datos "valen" lo mismo</strong>
Algunos datos tienen más importancia (peso) que otros. La media ponderada lo toma en cuenta:
<code>Media ponderada = Σ(dato × peso) / Σ(pesos)</code>

<strong>Ejemplo real:</strong> Un estudiante tiene estas notas con sus pesos:
<ul>
<li>Exámenes parciales (peso 30%): 80</li>
<li>Trabajos (peso 50%): 90</li>
<li>Participación (peso 20%): 70</li>
</ul>
Promedio ponderado = 80(0.30) + 90(0.50) + 70(0.20) = 24 + 45 + 14 = <strong>83</strong>
(Es diferente del promedio simple (80+90+70)/3 = 80, porque los trabajos pesan más)

<strong style="color:#f59e0b">Truco PAA: encontrar un dato faltante</strong>
"Si la media de 4 números es 10 y tres son 8, 12, 6, ¿cuál es el cuarto?"
Suma total = 4 × 10 = 40. Suma de los tres = 26. Cuarto = 40 − 26 = <strong>14</strong>.

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Calcular la mediana sin ordenar los datos primero</li>
<li>❌ Confundir mediana con media: la mediana depende de la posición, la media depende de los valores</li>
<li>❌ En datos pares, olvidar promediar los dos valores centrales para la mediana</li>
<li>❌ Pensar que "sin moda" significa "la moda es 0". No, significa que no existe moda</li>
<li>❌ Usar promedio simple cuando los pesos son diferentes</li>
</ul>`,
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
          { id: "est-5", question: "Al agregar el número 30 a los datos {10, 20, 20}, ¿qué sucede con la media?", options: ["Aumenta", "Disminuye", "No cambia", "Se duplica"], correctAnswer: 0, explanation: "Media original = 50/3 ≈ 16.7. Nueva media = 80/4 = 20. Aumentó." },
          { id: "est-6", question: "¿Cuál es el rango de los datos: 4, 12, 7, 3, 15, 9?", options: ["12", "15", "3", "11"], correctAnswer: 0, explanation: "Rango = máximo − mínimo = 15 − 3 = 12" },
          { id: "est-7", question: "Los datos 2, 4, 6, 8 tienen moda:", options: ["No tiene moda", "2", "5", "Todas"], correctAnswer: 0, explanation: "Ningún valor se repite, por lo tanto no tiene moda" },
          { id: "est-8", question: "Un alumno tiene notas de 70, 80, 90 con pesos de 20%, 30%, 50%. ¿Cuál es su promedio ponderado?", options: ["83", "80", "85", "78"], correctAnswer: 0, explanation: "70(0.20) + 80(0.30) + 90(0.50) = 14 + 24 + 45 = 83" },
          { id: "est-9", question: "La mediana de 5, 8, 12, 15, 20 es:", options: ["12", "8", "15", "10"], correctAnswer: 0, explanation: "Ya están ordenados. El valor central (posición 3) es 12" },
          { id: "est-10", question: "Si la media de 4 números es 10 y tres de ellos son 8, 12, 6, ¿cuál es el cuarto?", options: ["14", "10", "12", "16"], correctAnswer: 0, explanation: "Suma total = 40. Suma de los tres = 26. Cuarto número = 40 − 26 = 14" },
          { id: "est-11", question: "Los datos 3, 3, 5, 7, 7 son:", options: ["Bimodales (moda 3 y 7)", "Unimodales (moda 5)", "Sin moda", "Unimodales (moda 3)"], correctAnswer: 0, explanation: "Tanto el 3 como el 7 aparecen 2 veces → bimodal" },
          { id: "est-12", question: "¿Cuál medida de tendencia central no se afecta por valores extremos?", options: ["La mediana", "La media", "El rango", "La media ponderada"], correctAnswer: 0, explanation: "La mediana es resistente a valores extremos porque depende de la posición, no del valor." }
        ]
      },
      {
        id: "graficos",
        title: "Interpretación de Gráficos",
        content: `En la PAA aparecen gráficos que debes <strong>interpretar</strong> correctamente. No te piden dibujar gráficos, sino <em>leerlos, analizarlos y sacar conclusiones</em>. Este es uno de los temas más prácticos del examen — es pura lectura de datos visuales.

<strong style="color:#f59e0b">1. Gráfico de Barras — comparar cantidades</strong>
Se usa para comparar cantidades entre diferentes <strong>categorías</strong>. Cada categoría tiene una barra cuya altura (o longitud) representa su valor. Es el tipo más común en la PAA.

<strong>¿Cómo leerlo?</strong>
<ul>
<li>El eje horizontal (x) muestra las categorías</li>
<li>El eje vertical (y) muestra los valores numéricos</li>
<li>La altura de cada barra indica el valor de esa categoría</li>
<li>Puedes comparar barras visualmente para ver cuál es mayor o menor</li>
</ul>

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="420" height="280" viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="420" height="280" fill="rgba(42,80,128,0.2)" rx="8"/>
  <text x="210" y="22" fill="#e2e8f0" font-family="sans-serif" font-size="13" text-anchor="middle" font-weight="bold">Ventas Mensuales (miles de B/.)</text>
  <!-- Eje Y -->
  <line x1="60" y1="35" x2="60" y2="230" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Eje X -->
  <line x1="60" y1="230" x2="390" y2="230" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Líneas de referencia horizontales -->
  <line x1="60" y1="191" x2="390" y2="191" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="60" y1="152" x2="390" y2="152" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="60" y1="113" x2="390" y2="113" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="60" y1="74" x2="390" y2="74" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="60" y1="35" x2="390" y2="35" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <!-- Etiquetas eje Y -->
  <text x="52" y="234" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">0</text>
  <text x="52" y="195" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">10</text>
  <text x="52" y="156" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">20</text>
  <text x="52" y="117" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">30</text>
  <text x="52" y="78" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">40</text>
  <text x="52" y="39" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">50</text>
  <!-- Barras -->
  <rect x="80" y="152" width="45" height="78" fill="#f59e0b" rx="3"/>
  <text x="102" y="146" fill="#f59e0b" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">20</text>
  <rect x="145" y="113" width="45" height="117" fill="#3b82f6" rx="3"/>
  <text x="167" y="107" fill="#3b82f6" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">30</text>
  <rect x="210" y="74" width="45" height="156" fill="#10b981" rx="3"/>
  <text x="232" y="68" fill="#10b981" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">40</text>
  <rect x="275" y="133" width="45" height="97" fill="#ef4444" rx="3"/>
  <text x="297" y="127" fill="#ef4444" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">25</text>
  <rect x="340" y="55" width="45" height="175" fill="#8b5cf6" rx="3"/>
  <text x="362" y="49" fill="#8b5cf6" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">45</text>
  <!-- Etiquetas eje X -->
  <text x="102" y="248" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Ene</text>
  <text x="167" y="248" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Feb</text>
  <text x="232" y="248" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Mar</text>
  <text x="297" y="248" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Abr</text>
  <text x="362" y="248" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">May</text>
  <!-- Etiqueta eje -->
  <text x="210" y="270" fill="#94a3b8" font-family="sans-serif" font-size="11" text-anchor="middle">Mes</text>
</svg>
</div>

<strong>Preguntas típicas de la PAA sobre barras:</strong>
<ul>
<li>¿Qué mes tuvo más/menos ventas? → Lee la barra más alta/baja</li>
<li>¿Cuál fue el aumento de Ene a Feb? → 30 − 20 = 10 (miles de B/.)</li>
<li>¿Cuál fue el promedio de ventas? → (20+30+40+25+45)/5 = 32</li>
<li>¿En qué mes hubo una caída respecto al anterior? → De Mar (40) a Abr (25), cayó 15</li>
</ul>

<strong style="color:#f59e0b">2. Gráfico Circular (de Pastel) — mostrar proporciones</strong>
Se usa para mostrar cómo se <strong>divide un todo</strong> en partes. El círculo completo = 100% = 360°. Cada "rebanada" (sector) representa una proporción del total.

<strong>Relaciones clave:</strong>
<ul>
<li>El círculo completo = 360° = 100%</li>
<li>Para convertir grados a porcentaje: (grados / 360) × 100</li>
<li>Para convertir porcentaje a grados: (porcentaje / 100) × 360</li>
<li>Ejemplo: un sector de 90° = 90/360 × 100 = 25%</li>
</ul>

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="480" height="260" viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="480" height="260" fill="rgba(42,80,128,0.2)" rx="8"/>
  <text x="170" y="22" fill="#e2e8f0" font-family="sans-serif" font-size="13" text-anchor="middle" font-weight="bold">Distribución del Presupuesto</text>
  <!-- Sector 1: Alimentación 35% = 126° -->
  <path d="M 170 130 L 170 40 A 90 90 0 0 1 247 68 Z" fill="#f59e0b"/>
  <!-- Sector 2: Transporte 25% = 90° -->
  <path d="M 170 130 L 247 68 A 90 90 0 0 1 260 130 Z" fill="#3b82f6"/>
  <!-- Sector 3: Vivienda 20% = 72° -->
  <path d="M 170 130 L 260 130 A 90 90 0 0 1 225 207 Z" fill="#10b981"/>
  <!-- Sector 4: Ahorro 12% = 43.2° -->
  <path d="M 170 130 L 225 207 A 90 90 0 0 1 148 218 Z" fill="#ef4444"/>
  <!-- Sector 5: Otros 8% = 28.8° -->
  <path d="M 170 130 L 148 218 A 90 90 0 0 1 170 40 Z" fill="#8b5cf6"/>
  <!-- Etiquetas de porcentaje -->
  <text x="210" y="75" fill="#1e293b" font-family="sans-serif" font-size="12" font-weight="bold">35%</text>
  <text x="248" y="110" fill="#1e293b" font-family="sans-serif" font-size="11" font-weight="bold">25%</text>
  <text x="235" y="175" fill="#1e293b" font-family="sans-serif" font-size="11" font-weight="bold">20%</text>
  <text x="175" y="205" fill="#1e293b" font-family="sans-serif" font-size="10" font-weight="bold">12%</text>
  <text x="138" y="145" fill="#1e293b" font-family="sans-serif" font-size="10" font-weight="bold">8%</text>
  <!-- Leyenda -->
  <rect x="310" y="50" width="14" height="14" fill="#f59e0b" rx="2"/>
  <text x="330" y="62" fill="#e2e8f0" font-family="sans-serif" font-size="11">Alimentación (35%)</text>
  <rect x="310" y="75" width="14" height="14" fill="#3b82f6" rx="2"/>
  <text x="330" y="87" fill="#e2e8f0" font-family="sans-serif" font-size="11">Transporte (25%)</text>
  <rect x="310" y="100" width="14" height="14" fill="#10b981" rx="2"/>
  <text x="330" y="112" fill="#e2e8f0" font-family="sans-serif" font-size="11">Vivienda (20%)</text>
  <rect x="310" y="125" width="14" height="14" fill="#ef4444" rx="2"/>
  <text x="330" y="137" fill="#e2e8f0" font-family="sans-serif" font-size="11">Ahorro (12%)</text>
  <rect x="310" y="150" width="14" height="14" fill="#8b5cf6" rx="2"/>
  <text x="330" y="162" fill="#e2e8f0" font-family="sans-serif" font-size="11">Otros (8%)</text>
  <!-- Nota -->
  <text x="365" y="200" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">Total = 100%</text>
  <text x="365" y="215" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">= 360°</text>
</svg>
</div>

<strong>Preguntas típicas de la PAA sobre circulares:</strong>
<ul>
<li>Si el presupuesto total es B/.2,000, ¿cuánto se gasta en Alimentación? → 2,000 × 0.35 = B/.700</li>
<li>¿Cuántos grados tiene el sector de Transporte? → 25% × 360° = 90°</li>
<li>¿Qué fracción del presupuesto es Vivienda? → 20% = 1/5</li>
</ul>

<strong style="color:#f59e0b">3. Gráfico de Líneas — mostrar tendencias</strong>
Se usa para mostrar cómo cambia un valor a lo largo del <strong>tiempo</strong>. Cada punto de datos se conecta con una línea, lo que permite ver la tendencia (si sube, baja, se mantiene, o fluctúa).

<div style="display:flex;justify-content:center;margin:1.5rem 0">
<svg width="460" height="260" viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="460" height="260" fill="rgba(42,80,128,0.2)" rx="8"/>
  <text x="230" y="22" fill="#e2e8f0" font-family="sans-serif" font-size="13" text-anchor="middle" font-weight="bold">Temperatura Promedio por Mes (°C)</text>
  <!-- Eje Y -->
  <line x1="55" y1="35" x2="55" y2="220" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Eje X -->
  <line x1="55" y1="220" x2="430" y2="220" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Líneas de referencia -->
  <line x1="55" y1="183" x2="430" y2="183" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="55" y1="146" x2="430" y2="146" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="55" y1="109" x2="430" y2="109" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="55" y1="72" x2="430" y2="72" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <line x1="55" y1="35" x2="430" y2="35" stroke="#94a3b8" stroke-width="0.5" stroke-dasharray="3"/>
  <!-- Etiquetas eje Y -->
  <text x="48" y="224" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">20</text>
  <text x="48" y="187" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">22</text>
  <text x="48" y="150" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">24</text>
  <text x="48" y="113" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">26</text>
  <text x="48" y="76" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">28</text>
  <text x="48" y="39" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="end">30</text>
  <!-- Línea de datos -->
  <polyline points="90,183 152,164 214,109 276,72 338,90 400,146" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Puntos de datos -->
  <circle cx="90" cy="183" r="5" fill="#f59e0b"/>
  <circle cx="152" cy="164" r="5" fill="#f59e0b"/>
  <circle cx="214" cy="109" r="5" fill="#f59e0b"/>
  <circle cx="276" cy="72" r="5" fill="#f59e0b"/>
  <circle cx="338" cy="90" r="5" fill="#f59e0b"/>
  <circle cx="400" cy="146" r="5" fill="#f59e0b"/>
  <!-- Valores sobre los puntos -->
  <text x="90" y="175" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">22</text>
  <text x="152" y="156" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">23</text>
  <text x="214" y="101" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">26</text>
  <text x="276" y="64" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">28</text>
  <text x="338" y="82" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">27</text>
  <text x="400" y="138" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">24</text>
  <!-- Etiquetas eje X -->
  <text x="90" y="238" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Ene</text>
  <text x="152" y="238" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Feb</text>
  <text x="214" y="238" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Mar</text>
  <text x="276" y="238" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Abr</text>
  <text x="338" y="238" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">May</text>
  <text x="400" y="238" fill="#e2e8f0" font-family="sans-serif" font-size="10" text-anchor="middle">Jun</text>
  <!-- Etiqueta eje -->
  <text x="230" y="255" fill="#94a3b8" font-family="sans-serif" font-size="11" text-anchor="middle">Mes</text>
  <!-- Flecha de tendencia -->
  <text x="180" y="130" fill="#10b981" font-family="sans-serif" font-size="10">↑ sube</text>
  <text x="360" y="110" fill="#ef4444" font-family="sans-serif" font-size="10">↓ baja</text>
</svg>
</div>

<strong>Preguntas típicas de la PAA sobre líneas:</strong>
<ul>
<li>¿Cuál es la tendencia general? → Sube de Ene a Abr, luego baja</li>
<li>¿En qué mes se alcanzó la temperatura máxima? → Abril (28°C)</li>
<li>¿Cuál fue el rango de temperaturas? → 28 − 22 = 6°C</li>
<li>¿Entre qué meses hubo el mayor aumento? → Feb a Mar (+3°C)</li>
<li>¿Cuál fue la temperatura promedio? → (22+23+26+28+27+24)/6 = 25°C</li>
</ul>

<strong style="color:#f59e0b">4. Histograma — datos agrupados en intervalos</strong>
Es similar a un gráfico de barras, pero las barras son <strong>contiguas</strong> (sin espacio entre ellas) y representan <strong>intervalos</strong> de datos continuos en vez de categorías. La altura de cada barra es la frecuencia (cuántos datos caen en ese intervalo).

<strong>Diferencia clave con el gráfico de barras:</strong>
<ul>
<li><strong>Barras:</strong> categorías separadas (colores, ciudades, meses)</li>
<li><strong>Histograma:</strong> rangos numéricos continuos (edades 0-10, 10-20, 20-30...)</li>
</ul>

<strong style="color:#f59e0b">Estrategia general para interpretar CUALQUIER gráfico en la PAA:</strong>
<ol>
<li><strong>Lee el título</strong> — te dice qué información se muestra</li>
<li><strong>Lee las etiquetas de los ejes</strong> — qué mide cada eje y en qué unidades</li>
<li><strong>Observa la escala</strong> — ¿empieza en cero? ¿los intervalos son iguales?</li>
<li><strong>Identifica la tendencia general</strong> antes de buscar datos específicos</li>
<li><strong>Lee la pregunta cuidadosamente</strong> — ¿pide el valor, un cambio, un porcentaje, una tendencia?</li>
</ol>

<strong style="color:#f59e0b">⚠ Trampas visuales que usa la PAA:</strong>
<ul>
<li><strong>Escalas engañosas:</strong> si el eje y no empieza en cero, las diferencias parecen más grandes de lo que son</li>
<li><strong>Gráficos circulares con sectores que no suman 100%:</strong> verifica que los porcentajes sumen el total</li>
<li><strong>Barras dobles o apiladas:</strong> asegúrate de leer la leyenda para saber qué representa cada color</li>
<li><strong>Escalas no uniformes:</strong> a veces los intervalos del eje no son iguales (0, 10, 20, 50, 100)</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ No leer las etiquetas de los ejes y asumir las unidades</li>
<li>❌ Confundir "mayor valor" con "mayor crecimiento" (una barra puede ser alta pero haber crecido poco)</li>
<li>❌ En gráficos circulares, olvidar que 360° = 100%</li>
<li>❌ Calcular porcentaje de cambio usando el valor nuevo en vez del original</li>
<li>❌ En histogramas, contar las barras en vez de sumar las frecuencias</li>
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
          { id: "graf-4", question: "En un histograma, el intervalo 20-30 tiene frecuencia 8 y el intervalo 30-40 tiene frecuencia 5. ¿Cuántos datos hay en total entre 20 y 40?", options: ["13", "8", "5", "3"], correctAnswer: 0, explanation: "8 + 5 = 13 datos entre 20 y 40" },
          { id: "graf-5", question: "Un gráfico circular tiene un sector de 45°. ¿Qué fracción del total representa?", options: ["1/8", "1/4", "1/6", "1/3"], correctAnswer: 0, explanation: "45/360 = 1/8" },
          { id: "graf-6", question: "Las ventas mensuales fueron: Ene=100, Feb=120, Mar=90, Abr=150. ¿En qué mes hubo mayor crecimiento respecto al mes anterior?", options: ["Abril", "Febrero", "Enero", "Marzo"], correctAnswer: 0, explanation: "Feb vs Ene: +20. Abr vs Mar: +60. Abril tuvo el mayor crecimiento (+60)" },
          { id: "graf-7", question: "Un gráfico circular muestra que el 30% del presupuesto se usa en salarios. Si el presupuesto es B/.50,000, ¿cuánto es en salarios?", options: ["B/.15,000", "B/.30,000", "B/.20,000", "B/.5,000"], correctAnswer: 0, explanation: "50,000 × 0.30 = B/.15,000" },
          { id: "graf-8", question: "En un histograma de edades: 0-10 (5), 10-20 (12), 20-30 (8), 30-40 (5). ¿Cuántas personas tienen menos de 20 años?", options: ["17", "12", "5", "25"], correctAnswer: 0, explanation: "Personas < 20: 5 + 12 = 17" },
          { id: "graf-9", question: "Si un sector en un gráfico circular representa el 15% del total y el total es 200, ¿cuánto vale ese sector en unidades?", options: ["30", "15", "45", "60"], correctAnswer: 0, explanation: "200 × 0.15 = 30" },
          { id: "graf-10", question: "En un gráfico de barras dobles, el producto A vendió 50 en enero y 80 en febrero. El producto B vendió 60 en enero y 70 en febrero. ¿Cuál tuvo mayor crecimiento porcentual?", options: ["Producto A", "Producto B", "Igual", "No se puede determinar"], correctAnswer: 0, explanation: "A: (80−50)/50 = 60%. B: (70−60)/60 ≈ 16.7%. Producto A creció más." },
          { id: "graf-11", question: "Un gráfico de líneas muestra temperaturas: Lunes 25°, Martes 28°, Miércoles 22°, Jueves 30°. ¿Cuál fue el rango de temperaturas?", options: ["8°", "5°", "30°", "22°"], correctAnswer: 0, explanation: "Rango = 30° − 22° = 8°" },
          { id: "graf-12", question: "Un sector de un gráfico circular mide 108°. ¿Qué porcentaje del total representa?", options: ["30%", "25%", "40%", "108%"], correctAnswer: 0, explanation: "(108/360) × 100 = 30%" }
        ]
      },
      {
        id: "probabilidad",
        title: "Probabilidad Básica",
        content: `La <strong>probabilidad</strong> mide qué tan probable es que ocurra un evento. Es una herramienta para cuantificar la incertidumbre. En la PAA, los problemas de probabilidad van desde lanzar dados y monedas hasta situaciones más complejas con conteo.

<strong style="color:#f59e0b">La fórmula básica</strong>
<div style="text-align:center;margin:0.8rem 0;font-size:1.1em"><code>P(evento) = Casos favorables / Casos posibles totales</code></div>

<strong style="color:#f59e0b">¿Qué significa conceptualmente?</strong>
Imagina que metes la mano en una bolsa con 3 bolas rojas y 7 azules (10 en total). La probabilidad de sacar roja es 3/10. Esto significa que si repitieras el experimento muchas veces, aproximadamente el 30% de las veces sacarías una bola roja.

<strong>Escala de probabilidad:</strong>
<ul>
<li><strong>P = 0</strong> → Imposible (nunca va a pasar). Ejemplo: sacar un 7 de un dado normal</li>
<li><strong>P = 1</strong> → Seguro (siempre va a pasar). Ejemplo: sacar un número del 1 al 6 de un dado</li>
<li><strong>P = 0.5 (1/2)</strong> → Equiprobable (50-50). Ejemplo: cara o sello en una moneda</li>
<li>La probabilidad SIEMPRE está entre 0 y 1 (o entre 0% y 100%)</li>
</ul>

<strong style="color:#f59e0b">Vocabulario esencial:</strong>
<ul>
<li><strong>Experimento aleatorio:</strong> una acción cuyo resultado no se puede predecir con certeza (lanzar un dado, elegir una carta)</li>
<li><strong>Espacio muestral (S):</strong> el conjunto de TODOS los resultados posibles. Para un dado: S = {1, 2, 3, 4, 5, 6}</li>
<li><strong>Evento:</strong> un resultado o conjunto de resultados que nos interesa. "Sacar un número par" = {2, 4, 6}</li>
</ul>

<strong style="color:#f59e0b">Las 3 reglas fundamentales:</strong>

<strong>Regla 1: Complemento — "lo que NO ocurre"</strong>
<code>P(no A) = 1 − P(A)</code>
A veces es más fácil calcular la probabilidad de que algo NO ocurra.
Ejemplo: P(llueva) = 0.3. P(NO llueva) = 1 − 0.3 = 0.7

<strong>Regla 2: "O" (unión) — "uno u otro"</strong>
<code>P(A o B) = P(A) + P(B)</code> cuando A y B son <strong>mutuamente excluyentes</strong> (no pueden ocurrir al mismo tiempo).
Ejemplo: En un dado, P(sacar 3 o 5) = 1/6 + 1/6 = 2/6 = 1/3
<strong>¿Cuándo se SUMAN probabilidades?</strong> Cuando los eventos no se superponen y quieres saber si ocurre <em>cualquiera</em> de ellos.

<strong>Regla 3: "Y" (intersección) — "ambos ocurren"</strong>
<code>P(A y B) = P(A) × P(B)</code> cuando A y B son <strong>independientes</strong> (uno no afecta al otro).
Ejemplo: Al lanzar una moneda dos veces, P(cara y cara) = 1/2 × 1/2 = 1/4
<strong>¿Cuándo se MULTIPLICAN probabilidades?</strong> Cuando quieres que ocurran <em>dos cosas a la vez</em> (o en secuencia) y son independientes.

<strong style="color:#f59e0b">Regla mnemotécnica: "O" = sumar, "Y" = multiplicar</strong>

<strong style="color:#f59e0b">Eventos independientes vs. dependientes</strong>
<ul>
<li><strong>Independientes:</strong> el resultado del primero NO afecta al segundo. Ejemplo: lanzar dos dados — lo que sale en el primero no cambia las probabilidades del segundo.</li>
<li><strong>Dependientes:</strong> el resultado del primero SÍ afecta al segundo. Ejemplo: sacar 2 cartas de una baraja SIN reemplazo. Si sacas un as primero (4/52), ahora quedan 3 ases de 51 cartas (3/51). P(ambos ases) = 4/52 × 3/51 = 12/2652 = 1/221.</li>
</ul>

<strong style="color:#f59e0b">Principio de conteo (multiplicativo)</strong>
Si una decisión puede tomarse de m formas y otra de n formas, el total de combinaciones es m × n.

<strong>Ejemplo:</strong> Si tienes 4 camisas, 3 pantalones y 2 pares de zapatos: 4 × 3 × 2 = 24 combinaciones posibles.

<strong style="color:#f59e0b">Permutaciones — cuando el ORDEN importa</strong>
Una permutación cuenta las formas de ordenar elementos donde el orden sí importa.
<ul>
<li><strong>Permutación de n elementos:</strong> n! = n × (n−1) × (n−2) × ... × 1</li>
<li>Ejemplo: ¿De cuántas formas pueden sentarse 4 personas en fila? 4! = 4×3×2×1 = 24</li>
<li><strong>Permutación de n tomados de r:</strong> P(n,r) = n!/(n−r)!</li>
<li>Ejemplo: Elegir presidente y vicepresidente de 10 personas: P(10,2) = 10×9 = 90</li>
</ul>

<strong>Factoriales que debes conocer:</strong>
<code>0!=1, 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720, 7!=5040</code>

<strong style="color:#f59e0b">Combinaciones — cuando el orden NO importa</strong>
Una combinación cuenta las formas de elegir elementos sin importar el orden.
<ul>
<li><strong>C(n,r) = n! / (r! × (n−r)!)</strong></li>
<li>Ejemplo: ¿De cuántas formas se elige un comité de 3 personas de un grupo de 10? C(10,3) = 10!/(3!×7!) = 120</li>
<li>La diferencia con permutación: en un comité, elegir {Ana, Bob, Carlos} es lo mismo que {Carlos, Ana, Bob}</li>
</ul>

<strong style="color:#f59e0b">¿Permutación o combinación?</strong>
<ul>
<li>¿Importa el orden (presidente vs. vicepresidente, primer lugar vs. segundo)? → <strong>Permutación</strong></li>
<li>¿No importa el orden (elegir un grupo, un comité, una mano de cartas)? → <strong>Combinación</strong></li>
</ul>

<strong style="color:#f59e0b">Espacios muestrales comunes en la PAA:</strong>
<ul>
<li><strong>Moneda:</strong> 2 resultados (cara, sello). 2 monedas: 4 resultados. 3 monedas: 8 resultados.</li>
<li><strong>Dado:</strong> 6 resultados. 2 dados: 36 resultados (6×6).</li>
<li><strong>Baraja española:</strong> 40 cartas. <strong>Baraja inglesa:</strong> 52 cartas (4 palos × 13 valores).</li>
</ul>

<strong style="color:#f59e0b">Errores comunes en la PAA:</strong>
<ul>
<li>❌ Sumar probabilidades cuando deberías multiplicar: "sacar cara Y luego cara" es 1/2 × 1/2, no 1/2 + 1/2</li>
<li>❌ No ajustar las probabilidades en eventos dependientes (sin reemplazo)</li>
<li>❌ Olvidar que 0! = 1 (no es 0)</li>
<li>❌ Usar permutaciones cuando el orden no importa (o viceversa)</li>
<li>❌ Dar una probabilidad mayor que 1 — si tu respuesta es > 1, algo está mal</li>
</ul>`,
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
          { id: "prob-5", question: "Al lanzar un dado, ¿probabilidad de obtener un 3 o un 5?", options: ["1/3", "1/6", "2/3", "1/2"], correctAnswer: 0, explanation: "Son mutuamente excluyentes: P = 1/6 + 1/6 = 2/6 = 1/3" },
          { id: "prob-6", question: "Se lanza un dado. ¿Cuál es la probabilidad de obtener un número mayor que 4?", options: ["1/3", "1/2", "2/3", "1/6"], correctAnswer: 0, explanation: "Números mayores que 4: {5, 6} = 2 casos. P = 2/6 = 1/3" },
          { id: "prob-7", question: "Si tienes 3 camisas, 4 pantalones y 2 pares de zapatos, ¿cuántas combinaciones puedes hacer?", options: ["24", "9", "12", "36"], correctAnswer: 0, explanation: "Principio multiplicativo: 3 × 4 × 2 = 24" },
          { id: "prob-8", question: "Se sacan 2 cartas de una baraja de 52. ¿Cuál es la probabilidad de que ambas sean ases? (sin reemplazo)", options: ["1/221", "1/169", "4/52", "1/13"], correctAnswer: 0, explanation: "P(1er as) = 4/52. P(2do as) = 3/51. P(ambos) = (4/52)(3/51) = 12/2652 = 1/221" },
          { id: "prob-9", question: "¿Cuántas placas de 3 letras (A-Z) se pueden formar si se permite repetición?", options: ["17,576", "15,600", "650", "78"], correctAnswer: 0, explanation: "26 × 26 × 26 = 17,576" },
          { id: "prob-10", question: "Una urna tiene 5 bolas blancas, 3 negras y 2 rojas. ¿Probabilidad de sacar una que NO sea roja?", options: ["4/5", "2/10", "3/10", "1/2"], correctAnswer: 0, explanation: "P(no roja) = 1 − P(roja) = 1 − 2/10 = 8/10 = 4/5" },
          { id: "prob-11", question: "Se lanzan 2 dados. ¿Cuántos resultados posibles hay?", options: ["36", "12", "6", "24"], correctAnswer: 0, explanation: "Cada dado tiene 6 caras: 6 × 6 = 36 resultados posibles" },
          { id: "prob-12", question: "En un grupo de 10 personas se elegirán presidente y vicepresidente. ¿De cuántas formas se puede hacer?", options: ["90", "100", "45", "20"], correctAnswer: 0, explanation: "Permutación: 10 × 9 = 90 (importa el orden)" }
        ]
      }
    ]
  }
];

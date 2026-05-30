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
        content: `Una <strong>función</strong> es una relación que asigna a cada valor de entrada (x) exactamente un valor de salida. Se escribe <code>f(x)</code>.

<strong>Conceptos clave:</strong>
<ul>
<li><strong>Dominio:</strong> todos los valores posibles de x (entrada)</li>
<li><strong>Rango:</strong> todos los valores posibles de f(x) (salida)</li>
<li><strong>Evaluar:</strong> sustituir x por un valor. Si f(x) = 2x + 3, entonces f(4) = 2(4) + 3 = 11</li>
</ul>

<strong>Función lineal: f(x) = mx + b</strong>
<ul>
<li><strong>m</strong> = pendiente (inclinación de la recta). Si m > 0 sube, si m < 0 baja.</li>
<li><strong>b</strong> = intercepto en y (donde cruza el eje y)</li>
<li>La pendiente entre dos puntos: m = (y₂ − y₁) / (x₂ − x₁)</li>
</ul>

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

<strong>Función cuadrática: f(x) = ax² + bx + c</strong>
<ul>
<li>Su gráfica es una <strong>parábola</strong></li>
<li>Si a > 0, abre hacia arriba (tiene mínimo). Si a < 0, abre hacia abajo (tiene máximo).</li>
<li><strong>Vértice:</strong> x = −b/(2a), luego sustituye para hallar y</li>
<li><strong>Eje de simetría:</strong> x = −b/(2a)</li>
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
</div>`,
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
        content: `Una <strong>sucesión</strong> es una lista ordenada de números que sigue un patrón.

<strong>Sucesión aritmética:</strong> se suma siempre la misma cantidad (diferencia común <strong>d</strong>).
<ul>
<li>Ejemplo: 2, 5, 8, 11, 14, ... (d = 3)</li>
<li><strong>Término general:</strong> aₙ = a₁ + (n − 1)·d</li>
<li><strong>Suma de n términos:</strong> Sₙ = n(a₁ + aₙ)/2</li>
</ul>

<strong>Sucesión geométrica:</strong> se multiplica siempre por la misma cantidad (razón común <strong>r</strong>).
<ul>
<li>Ejemplo: 3, 6, 12, 24, 48, ... (r = 2)</li>
<li><strong>Término general:</strong> aₙ = a₁ · r⁽ⁿ⁻¹⁾</li>
<li><strong>Suma de n términos:</strong> Sₙ = a₁(rⁿ − 1)/(r − 1)</li>
</ul>

<strong>¿Cómo identificar el tipo?</strong>
<ul>
<li>Si la <em>diferencia</em> entre términos consecutivos es constante → aritmética</li>
<li>Si el <em>cociente</em> entre términos consecutivos es constante → geométrica</li>
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
        content: `<strong>Tipos de ángulos:</strong>
<ul>
<li><strong>Agudo:</strong> menor de 90°</li>
<li><strong>Recto:</strong> exactamente 90°</li>
<li><strong>Obtuso:</strong> entre 90° y 180°</li>
<li><strong>Llano:</strong> exactamente 180°</li>
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
</div>`,
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
        content: `<strong>La suma de los ángulos internos de un triángulo es 180°.</strong>

<strong>Clasificación por lados:</strong>
<ul>
<li><strong>Equilátero:</strong> 3 lados iguales (60° cada ángulo)</li>
<li><strong>Isósceles:</strong> 2 lados iguales</li>
<li><strong>Escaleno:</strong> todos los lados diferentes</li>
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

<strong>Clasificación por ángulos:</strong>
<ul>
<li><strong>Acutángulo:</strong> todos los ángulos menores de 90°</li>
<li><strong>Rectángulo:</strong> tiene un ángulo de 90°</li>
<li><strong>Obtusángulo:</strong> tiene un ángulo mayor de 90°</li>
</ul>

<strong>Teorema de Pitágoras</strong> (solo para triángulos rectángulos):
<code>a² + b² = c²</code> donde c es la hipotenusa (lado más largo, opuesto al ángulo recto).

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
        content: `<strong>Elementos:</strong>
<ul>
<li><strong>Radio (r):</strong> distancia del centro al borde</li>
<li><strong>Diámetro (d):</strong> d = 2r</li>
<li><strong>Circunferencia:</strong> perímetro del círculo = 2πr = πd</li>
<li><strong>Área del círculo:</strong> A = πr²</li>
</ul>

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
        content: `<strong>Fórmulas de figuras planas:</strong>

<strong>Rectángulo:</strong> P = 2(l+a), A = l × a
<strong>Cuadrado:</strong> P = 4l, A = l²
<strong>Paralelogramo:</strong> A = base × altura
<strong>Trapecio:</strong> A = (B + b) × h / 2 (B=base mayor, b=base menor)
<strong>Rombo:</strong> A = (D × d) / 2 (D y d son las diagonales)

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
        content: `La <strong>geometría analítica</strong> estudia figuras geométricas usando coordenadas en el plano cartesiano.

<strong>Plano cartesiano:</strong>
<ul>
<li>Eje X (horizontal) y Eje Y (vertical) se cruzan en el <strong>origen (0, 0)</strong></li>
<li>Cada punto se representa como <code>(x, y)</code></li>
<li>4 cuadrantes: I (+,+), II (−,+), III (−,−), IV (+,−)</li>
</ul>

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

<strong>Fórmulas esenciales:</strong>

<strong>Distancia entre dos puntos:</strong>
d = √[(x₂−x₁)² + (y₂−y₁)²]

<strong>Punto medio:</strong>
M = ((x₁+x₂)/2, (y₁+y₂)/2)

<strong>Pendiente de una recta:</strong>
m = (y₂−y₁)/(x₂−x₁)

<strong>Ecuación de la recta:</strong>
<ul>
<li>Forma pendiente-intercepto: y = mx + b</li>
<li>Forma punto-pendiente: y − y₁ = m(x − x₁)</li>
</ul>

<strong>Rectas perpendiculares:</strong> sus pendientes son recíprocas negativas (m₁ · m₂ = −1).`,
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

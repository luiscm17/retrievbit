# Plan de Trabajo: Desarrollo de Contenido para la Plataforma "Retrievbit"

## Ideas para la Sección `/blog`

El blog es tu anzuelo. Debe ser interesante, actual y fácil de compartir. Aquí buscamos temas que generen debate y curiosidad.

### 1. Artículo de Perspectiva Humana/Profesional

* **Título Sugerido:** *Un Día en la Vida de un Ingeniero de Perforación: Campo vs. Oficina.*
* **Por qué es interesante:** Humaniza la profesión y responde a una de las preguntas más comunes de los estudiantes y recién egresados. Es contenido muy fácil de compartir en LinkedIn.
* **Contenido clave:** Compara las responsabilidades, los desafíos, el software utilizado y el estilo de vida en ambos entornos. Puedes estructurarlo como una tabla comparativa o una narrativa de "dos caras de la moneda".

### 2. Artículo de "Mito vs. Realidad" (Myth-Busting)

* **Título Sugerido:** *5 Mitos sobre el Fracking que un Ingeniero Puede Desmentir con Ciencia.*
* **Por qué es interesante:** Aborda un tema controversial desde una perspectiva técnica y desapasionada. Esto te posiciona como una voz racional y experta, generando confianza y un alto potencial de ser compartido.
* **Contenido clave:** Enumera 5 mitos comunes (ej. "causa terremotos", "contamina el agua potable"). Para cada uno, ofrece una explicación técnica y científica que aclare la realidad, usando diagramas simples (¡perfecto para `Mermaid`!) para ilustrar los conceptos.

### 3. Artículo de Tendencia y Futuro (con Programación)

* **Título Sugerido:** *¿Por Qué Python se Está 'Comiendo' a Excel en la Ingeniería Petrolera?*
* **Por qué es interesante:** Ataca un "punto de dolor" real para muchos ingenieros que dependen de hojas de cálculo complejas. Ofrece una solución clara (aprender a programar) y muestra el camino a seguir.
* **Contenido clave:** Presenta un problema típico (ej. analizar datos de producción diarios de un pozo). Muéstralo en Excel (muchos pasos manuales, propenso a errores) y luego muestra un script corto en Python (`usando Pandas`) que hace lo mismo de forma automatizada y reproducible. Usa los bloques de código de tu sitio.

### 4. Artículo de Tecnología Aplicada

* **Título Sugerido:** *MWD/LWD: Los 'Ojos y Oídos' del Perforador a Kilómetros Bajo Tierra.*
* **Por qué es interesante:** Traduce un concepto técnico complejo (Medición Durante la Perforación) a una analogía fácil de entender. Es fascinante para quienes no están familiarizados con la tecnología de punta que se usa en la industria.
* **Contenido clave:** Explica qué son las herramientas MWD y LWD, qué parámetros miden (inclinación, azimut, rayos gamma, resistividad), y por qué son cruciales para la perforación direccional y la geonavegación. Usa imágenes o diagramas de las herramientas dentro de la sarta de perforación.

---

## Ideas para la Sección `/guias-practicas` (antes `/recipes`)

Aquí buscamos resolver problemas específicos con un formato de "paso a paso". El valor es inmediato y muy práctico.

### 1. Guía de Cálculo Fundamental

* **Título Sugerido:** *Guía Práctica: Cálculo de la Densidad Equivalente de Circulación (ECD) en 5 Pasos.*
* **Por qué es interesante:** Es un cálculo esencial y rutinario en las operaciones de perforación. Ofrecer una guía clara y concisa es de un valor inmenso para estudiantes y jóvenes ingenieros de campo.
* **Contenido clave:**
    1. **Qué es la ECD y por qué es importante.**
    2. **"Ingredientes" (Datos necesarios):** Densidad del lodo, Profundidad Vertical Verdadera (TVD), Pérdidas de presión anulares.
    3. **La "Receta" (La Fórmula):** Preséntala de forma clara usando el formato `KaTeX` para ecuaciones: $$ECD = MW + \frac{P_{an}}{0.052 \times TVD}$$
    4. **Ejemplo Práctico:** Un ejercicio numérico resuelto paso a paso.
    5. **Consideraciones:** ¿Cuándo es más crítica la ECD?

### 2. Guía de Programación Aplicada

* **Título Sugerido:** *Guía Práctica: Cómo Crear un Histograma de Porosidad a Partir de Datos LAS con Python.*
* **Por qué es interesante:** Es un primer paso perfecto para introducir a los ingenieros en el análisis de datos de pozos. Un archivo LAS es un estándar en la industria y esta tarea es muy común.
* **Contenido clave:**
    1. **Requisitos:** Librerías de Python a instalar (`pandas`, `matplotlib`, `lasio`).
    2. **Paso 1: Cargar el archivo LAS:** Muestra el código para leer el archivo usando la librería `lasio`.
    3. **Paso 2: Acceder a los datos:** Muestra cómo ver las curvas disponibles y seleccionar el registro de porosidad (ej. NPHI o DPHI).
    4. **Paso 3: Generar y personalizar el histograma:** Muestra el código `matplotlib` para crear el gráfico, añadirle títulos, etiquetas y guardarlo como imagen.
    5. **Paso 4: Interpretación:** Explica brevemente qué nos dice la distribución del histograma sobre la formación.

### 3. Guía de Interpretación Básica

* **Título Sugerido:** *Guía Práctica: Identificación de Litologías con Registros Gamma Ray (GR) y Potencial Espontáneo (SP).*
* **Por qué es interesante:** Es una de las habilidades más fundamentales en la geología del petróleo y la petrofísica. Una guía de referencia rápida es extremadamente útil.
* **Contenido clave:**
    1. **Principio Básico:** Qué mide cada registro de forma sencilla.
    2. **Reglas de Interpretación:** Usa el componente `<Notice type="info">` para resaltar reglas como "GR bajo = posible arena; GR alto = lutita".
    3. **Ejemplo Visual:** Muestra una imagen de un tramo de registro real o dibujado.
    4. **Paso a Paso:** Anota la imagen indicando "1. Dibuja la línea base de arenas", "2. Dibuja la línea base de lutitas", "3. Marca las deflexiones del SP para indicar permeabilidad".

## Consejo Estratégico para Empezar

Te sugiero que por cada tema que desarrolles en profundidad en `/docs`, crees un artículo relacionado en el `/blog` y una `/guia-practica` complementaria.

* **Ejemplo de Conexión:**
  * **`/docs`:** Un capítulo completo sobre "Fluidos de Perforación".
  * **`/blog`:** Un artículo titulado *"¿Lodo Base Agua o Base Aceite? La Decisión Millonaria en un Proyecto de Perforación"*.
  * **`/guia-practica`:** Una guía sobre *"Cómo Realizar los Cálculos Reológicos Básicos (Punto Cedente y Viscosidad Plástica)"*.

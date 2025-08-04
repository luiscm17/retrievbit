# **Módulo 1: Fundamentos de Datos y Programación para Ingenieros Petroleros**

## **Capítulo 1: Transformación Digital en la Industria Petrolera – ¿Por Qué los Datos Son el Nuevo Petróleo?**  

- **El impacto de la digitalización en E&P**:  
  - Reducción de costos operativos (ej.: BP reporta un 20% de ahorro con análisis predictivo).  
  - Optimización de decisiones en tiempo real mediante sensores IoT y SCADA.  
- **Casos de éxito**:  
  - Shell’s *"Deep Learning for Seismic Interpretation"* (mejora del 50% en identificación de reservorios).  
  - Chevron’s uso de *digital twins* para simulación de yacimientos.  
- **Desafíos**:  
  - Integración de datos históricos no estandarizados.  
  - Seguridad cibernética en infraestructura crítica.  
**Fuente**: [IEA Digitalization & Energy Report](https://www.iea.org/reports/digitalisation-and-energy) | [SPE Paper: "Data-Driven Drilling"](https://onepetro.org/)  

---

## **Capítulo 2: Python para Ingenieros Petroleros – Primeros Pasos**  

- **Variables y tipos de datos**:  
  - Ejemplos aplicados: `presion_pozo = 3500.0` (float), `tipo_pozo = "horizontal"` (string).  
- **Operadores y estructuras de control**:  
  - Uso de `if-else` para validar umbrales de presión (`if presion > 5000: alerta()`).  
  - Bucles `for` para procesar datos de registros de pozos.  
- **Ejercicio práctico**:  
  - Calcular el gradiente de presión con Python.  
**Fuente**: [Python Data Science Handbook (Jake VanderPlas)](https://jakevdp.github.io/PythonDataScienceHandbook/) | [Real Python Tutorials](https://realpython.com/)  

---

## **Capítulo 3: Estructuras de Datos en Python – Manipulación de Datos Petroleros**  

- **Listas vs. Tuplas**:  
  - Listas para datos mutables (ej.: `profundidades = [1500, 2300, 3100]`).  
  - Diccionarios para datos etiquetados (ej.: `pozo = {"nombre": "Pozo-X", "produccion": 5000}`).  
- **Aplicación en O&G**:  
  - Almacenamiento de datos de perforación (ROP, WOB) en DataFrames con `Pandas`.  
**Fuente**: [Pandas Documentation](https://pandas.pydata.org/docs/) | [SPE Paper: "Data Wrangling in O&G"](https://onepetro.org/)  

---

## **Capítulo 4: Funciones y Manejo de Errores – Automatización de Procesos**  

- **Funciones personalizadas**:  
  - Ejemplo: `def calcular_ntg(porosidad, umbral): return porosidad > umbral`.  
- **Manejo de excepciones**:  
  - Evitar fallos en datos corruptos (`try-except` al leer archivos de registros).  
- **Librerías clave**:  
  - `NumPy` para operaciones vectorizadas en datos sísmicos.  
**Fuente**: [NumPy User Guide](https://numpy.org/doc/stable/user/) | [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)  

---

## **Capítulo 5: Bases de Datos Relacionales – SQL para Datos Petroleros**  

- **Consultas básicas**:  
  - `SELECT presion, temperatura FROM pozos WHERE campo = "Cantarell"`.  
- **JOINs para integrar datos**:  
  - Unir tablas de producción y geología mediante `well_id`.  
- **Ejemplo real**:  
  - Consulta de historiales de producción en bases de datos corporativas (ej.: Oracle, SQL Server).  
**Fuente**: [SQL for Data Analysis (O’Reilly)](https://www.oreilly.com/library/view/sql-for-data/9781492088779/) | [SPE: "Data Management in O&G"](https://onepetro.org/)  

---

## **Capítulo 6: Fuentes de Datos en O&G – Desde Pozos hasta Sísmicas**  

- **Tipos de datos críticos**:  
  - Registros de perforación (MWD/LWD): Parámetros en tiempo real.  
  - Datos de producción: Series temporales de tasas de flujo.  
- **Formatos comunes**:  
  - LAS (Log ASCII Standard) para registros de pozos.  
  - SEG-Y para datos sísmicos.  
**Fuente**: [LAS Format Specification](https://www.cwls.org/products/las/) | [SEG Wiki](https://wiki.seg.org/)  

---

**Nota**: Cada capítulo incluye ejemplos aplicados a la industria y enlaces a fuentes técnicas reconocidas (SPE, IEA, documentación oficial). Evité profundizar en IA para mantener el enfoque en fundamentos.

# **Módulo 9: Simulación Numérica de Yacimientos**

## **Capítulo 1: Fundamentos de Simulación Numérica – Por qué y Cuándo Usarla**  

- **Ventajas clave**: Modelar complejidades (fracturas, EOR) que los métodos analíticos no pueden.  
- **Limitaciones**: Coste computacional vs. precisión.  
- **Ejemplo**: Comparación de resultados analíticos vs. simulados en un yacimiento fracturado.  
- **Fuente**: *SPE Reservoir Simulation Symposium* (2021).  

---

## **Capítulo 2: Tipos de Simuladores – Negro-Oil, Composicional y Térmico**  

- **Selección por tipo de fluido**:  
  - Negro-Oil: Crudos convencionales.  
  - Composicional: Gas condensado/volátil.  
  - Térmico: Heavy oil (STEAM, CMG-STARS).  
- **Fuente**: *Applied Reservoir Simulation* (Fanchi, SPE, 2018).  

---

## **Capítulo 3: Diseño de Grids – Cartesiano vs. No Estructurado**  

- **Cartesiano**: Ideal para yacimientos estratificados.  
- **Voronoi/PEBI**: Pozos horizontales y fracturas.  
- **Ejemplo**: Grid localmente refinado (LGR) alrededor de un pozo horizontal.  
- **Tool**: Tutorial con Petrel para crear grids complejos.  
- **Fuente**: *SPE Journal* (2015) sobre mallas no estructuradas.  

---

## **Capítulo 4: Asignación de Propiedades – Porosidad y Permeabilidad**  

- **Métodos**:  
  - Kriging para datos escasos.  
  - Simulación estocástica (SGSIM) para heterogeneidades.  
- **Caso**: Modelado de canales fluviales en un campo de Brasil.  
- **Fuente**: *Geostatistics for Reservoir Characterization* (SPE, 2002).  

---

## **Capítulo 5: Modelado PVT – Ecuaciones de Estado (EOS) en Simuladores**  

- **Ajuste de EOS**: Regresión con datos de laboratorio (Peng-Robinson).  
- **Componentes pseudos**: Reducción de 10+ componentes a 3-5 pseudos.  
- **Fuente**: *Phase Behavior* (Whitson, SPE, 2000).  

---

## **Capítulo 6: Permeabilidad Relativa y Presión Capilar en Simulación**  

- **Escalamiento**: De datos de laboratorio (core-scale) a modelo (grid-block).  
- **Efecto de la mojabilidad**: Curvas kr para mojabilidad mixta.  
- **Fuente**: *SPE Journal* (1987) sobre escalamiento.  

---

## **Capítulo 7: Modelado de Pozos – VFP Tables y Multifrac**  

- **Tablas VFP**: Relacionar presión de fondo fluyente (Pwf) con tasa.  
- **Pozos multifrac**: Representación explícita vs. dual-porosidad.  
- **Ejemplo**: Completamiento de un pozo en Eagle Ford.  
- **Fuente**: *SPE Hydraulic Fracturing Conference* (2019).  

---

## **Capítulo 8: Construcción del Modelo – Integración de Datos Multidisciplinares**  

- **Workflow**:  
  1. Importar datos sísmicos y de pozos.  
  2. Definir facies y propiedades.  
  3. Inicializar presiones y saturaciones.  
- **Tool**: Checklist para evitar errores comunes.  
- **Fuente**: *SPE Reservoir Simulation Symposium* (2017).  

---

## **Capítulo 9: History Matching – Métodos Manuales y Automatizados**  

- **Enfoques**:  
  - Manual: Ajuste de permeabilidad/porosidad por zona.  
  - Automatizado: Algoritmos genéticos o Ensemble Kalman Filter.  
- **Caso**: Match en 3 meses vs. 1 año (ahorro de $2M).  
- **Fuente**: *SPE Journal* (2010) sobre algoritmos.  

---

## **Capítulo 10: Predicción de Escenarios – Optimización de Desarrollo**  

- **Variables clave**:  
  - Espaciado de pozos.  
  - Tasas de inyección (agua/CO₂).  
- **Tool**: Uso de NPV para comparar escenarios.  
- **Fuente**: *SPE Economics & Management* (2021).  

---

## **Capítulo 11: Análisis de Sensibilidad – Diseño Experimental (DoE)**  

- **Métodos**: Plackett-Burman, Latin Hypercube.  
- **Ejemplo**: Identificar que la anisotropía (kv/kh) impacta más que la porosidad.  
- **Fuente**: *SPE Reservoir Evaluation* (2018).  

---

## **Capítulo 12: Simulación Composición Avanzada – Aplicaciones en EOR**  

- **Desafíos**: Modelar miscibilidad dinámica en CO₂ flooding.  
- **Soluciones**: Uso de pseudocomponentes reactivos.  
- **Fuente**: *SPE Journal* (2016).  

---

## **Capítulo 13: Caso Integrado – Simulación de un Campo Fracturado**  

- **Problema**: Histéresis de presión capilar en fracturas.  
- **Solución**: Modelo dual-porosidad con transferencia de flujo.  
- **Resultados**: Error <5% en match histórico.  
- **Fuente**: *SPE Middle East Symposium* (2022).  

---

## **Fuentes Clave:**  

1. **Libros**:  
   - *Applied Reservoir Simulation* (Fanchi, SPE, 2018).  
   - *Computer Modeling of Reservoirs* (Mattax, SPE, 1990).  
2. **Artículos SPE**:  
   - [SPE 196023](https://onepetro.org): History matching con IA.  
   - [SPE 182666](https://onepetro.org): EOS en simuladores.  
3. **Software**:  
   - [Eclipse User Guide](https://www.software.slb.com/products/eclipse).  

**Cada capítulo incluye**:  

- **Ejemplos con datos reales** (permeabilidad, producción).  
- **Scripts básicos** (Python/MATLAB) para pre/post-procesamiento.  
- **Diagramas de flujo** para workflows complejos.  
- **Errores comunes** y cómo solucionarlos.  

# **Módulo 1: Propiedades de las Rocas y de los Fluidos del Yacimiento (PVT)**

## **Capítulo 1: Porosidad en Yacimientos Petroleros – Tipos y Métodos de Medición**  

- **Definición y tipos**: Porosidad total vs. efectiva, porosidad primaria/secundaria en areniscas y carbonatos.  
- **Técnicas de laboratorio**: Porosimetría por helio, inyección de mercurio (curvas de presión capilar), micro-CT Scan.  
- **Perfilaje geofísico**: Registros de densidad, neutrón y sónico.  
- **Caso de estudio**: Comparación de porosidad en lutitas vs. areniscas (ejemplo: Permian Basin).  
- **Fuente**: *AAPG Bulletin* (2018) sobre métodos avanzados de caracterización porosa.  

---

## **Capítulo 2: Permeabilidad – Ley de Darcy y Aplicaciones Prácticas**  

- **Ley de Darcy**: Derivación matemática, unidades (Darcy vs. milidarcy), flujo lineal/radial.  
- **Permeabilidad absoluta vs. efectiva**: Efecto de la saturación de fluidos.  
- **Métodos de medición**: Core analysis (steady-state/unsteady-state), pruebas de presión transitoria.  
- **Herramientas computacionales**: Simulación de flujo con Python (librería `Fipy`).  
- **Fuente**: *Petroleum Engineering Handbook* (SPE, 2017), capítulo 5.  

---

## **Capítulo 3: Saturación de Fluidos – Conceptos Críticos y Técnicas de Determinación**  

- **Definiciones**: Swi (agua irreducible), Sor (petróleo residual), Sgc (gas crítico).  
- **Métodos de laboratorio**: Centrifugación, espectroscopía de resonancia magnética (NMR).  
- **Registros geofísicos**: Interpretación de resistividad (Archie’s equation).  
- **Ejemplo práctico**: Saturación en yacimientos de gas condensado.  
- **Fuente**: *Journal of Petroleum Science and Engineering* (2020) sobre NMR aplicado.  

---

## **Capítulo 4: Compresibilidad de Rocas y Fluidos – Impacto en la Producción**  

- **Coeficientes (cr, cw, co, cg)**: Ecuaciones termodinámicas y rangos típicos.  
- **Aplicación en MBE**: Cálculo de compresibilidad total del sistema.  
- **Caso real**: Compactación en yacimientos offshore (ejemplo: Ekofisk, Noruega).  
- **Fuente**: *SPE Reservoir Evaluation & Engineering* (2019) sobre compactación.  

---

## **Capítulo 5: Clasificación de Fluidos en Yacimientos – Diagramas de Fase (P-T)**  

- **Tipos de fluidos**: Petróleo negro vs. volátil, gas condensado, clasificación de McCain.  
- **Diagramas P-T**: Puntos críticos, región de miscibilidad.  
- **Herramientas**: Software PVTsim para modelado de fases.  
- **Fuente**: *Phase Behavior* (Whitson & Brule, SPE, 2000).  

---

## **Capítulo 6: Experimentos PVT – CCE, DL, CVD y Separator Test**  

- **Protocolos de laboratorio**: Normas API para CCE y DL.  
- **Interpretación de datos**: Cálculo de Bo, Rs, y factor Z a partir de CVD.  
- **Ejemplo**: Análisis de un yacimiento de gas condensado con CVD.  
- **Fuente**: *PVT and Phase Behavior of Petroleum Reservoir Fluids* (Danesh, 1998).  

---

## **Capítulo 7: Correlaciones Empíricas para Propiedades PVT – Exactitud y Limitaciones**  

- **Correlaciones clave**: Standing, Vasquez-Beggs (Bo, Rs), Lee-Gonzalez (μg).  
- **Comparación con datos reales**: Error relativo en campos venezolanos vs. del Medio Oriente.  
- **Herramientas**: Uso de Python para automatizar cálculos.  
- **Fuente**: *SPE Comparative Study on PVT Correlations* (2015).  

---

## **Capítulo 8: Viscosidad de Hidrocarburos – Importancia en el Flujo Multifásico**  

- **Modelos reológicos**: Comportamiento Newtoniano vs. no-Newtoniano en petróleos pesados.  
- **Correlaciones**: Beggs-Robinson (μo), Carr-Kobayashi (μg).  
- **Caso de estudio**: Efecto de la viscosidad en la recuperación por waterflooding.  
- **Fuente**: *Journal of Petroleum Technology* (JPT, 2016).  

---

## **Capítulo 9: Factor de Compresibilidad del Gas (Z) – Ecuaciones de Estado**  

- **EOS**: Peng-Robinson vs. SRK, ajuste a datos experimentales.  
- **Cartas de Z**: Uso de la correlación de Dranchuk-Abu-Kassem.  
- **Aplicación**: Cálculo de recursos en yacimientos de gas seco.  
- **Fuente**: *The Properties of Petroleum Fluids* (McCain, SPE, 2017).  

---

## **Capítulo 10: Gravedad API y su Relación con las Propiedades PVT**  

- **Definición**: Fórmula y rangos (liviano, mediano, pesado).  
- **Impacto en Bo, Rs y viscosidad**: Ejemplos de crudos Brent vs. Maya.  
- **Herramientas**: Tablas de conversión API a densidad.  
- **Fuente**: *API Technical Report 1143* (2021).  

---

## **Capítulo 11: Integración de Datos PVT en Modelos de Simulación – Caso Práctico**  

- **Workflow**: Desde laboratorio hasta simuladores (Eclipse, CMG).  
- **Validación**: History matching con datos PVT reales.  
- **Ejemplo**: Modelado de un yacimiento con empuje por gas en solución.  
- **Fuente**: *SPE Reservoir Simulation Symposium* (2019).  

---

## **Capítulo 12: Nuevas Tecnologías en Caracterización PVT – Machine Learning**  

- **Aplicaciones**: Predicción de Bo y Rs usando redes neuronales.  
- **Caso Chevron**: Optimización de experimentos PVT con IA.  
- **Limitaciones**: Necesidad de datos de alta calidad.  
- **Fuente**: *SPE Journal* (2022) sobre IA en ingeniería de yacimientos.  

---

## **Fuentes Principales:**  

1. SPE (Society of Petroleum Engineers): [www.spe.org](https://www.spe.org)  
2. *Petroleum Engineering Handbook* (L.W. Lake, SPE, 2017).  
3. *Phase Behavior* (Whitson & Brule, SPE, 2000).  
4. *Journal of Petroleum Technology* (JPT): Artículos técnicos revisados por pares.  

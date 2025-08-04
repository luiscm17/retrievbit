# **Módulo 2: Fundamentos del Flujo de Fluidos en Medios Porosos**

---

## **Capítulo 1: Ley de Darcy – Fundamentos y Aplicaciones en Flujo Lineal**  

- **Derivación matemática**: Ecuación de Darcy para líquidos (flujo laminar) y gases (factor de deslizamiento de Klinkenberg).  
- **Ejemplo práctico**: Cálculo de tasa de flujo en un núcleo de arenisca con permeabilidad conocida.  
- **Limitaciones**: No aplicable para flujo turbulento o altas velocidades.  
- **Fuente**: *Fundamentals of Reservoir Engineering* (Dake, 1978), Capítulo 3.  

---

## **Capítulo 2: Ley de Darcy en Flujo Radial – Aplicación a Pozos Petroleros**  

- **Ecuación radial**: Solución para flujo hacia un pozo vertical (presión vs. radio).  
- **Caso real**: Cálculo de la presión de fondo fluyente (Pwf) en un yacimiento homogéneo.  
- **Herramientas**: Uso de Python para resolver la ecuación radial con condiciones de frontera.  
- **Fuente**: *SPE Textbook Series, Vol. 1* (2007), sección sobre flujo radial.  

---

## **Capítulo 3: Permeabilidad Múltiple – Modelado de Yacimientos Estratificados**  

- **Concepto de permeabilidad efectiva**: Promedio armónico vs. geométrico en capas paralelas.  
- **Ejemplo**: Yacimiento con intercalaciones de arena y lutita (ejemplo: Permian Basin).  
- **Aplicación en simulación**: Uso de modelos de doble permeabilidad en Eclipse.  
- **Fuente**: *Journal of Petroleum Technology* (2019) sobre yacimientos estratificados.  

---

## **Capítulo 4: Potencial de Flujo – Gradientes Hidráulicos y Flujo Vertical**  

- **Definición**: Potencial de Hubbert (Φ = P + ρgz) y su relación con la dirección del flujo.  
- **Caso de estudio**: Invasión de agua en un yacimiento con buzamiento pronunciado.  
- **Herramientas**: Visualización con MATLAB de líneas equipotenciales.  
- **Fuente**: *Petroleum Reservoir Engineering* (Craft & Hawkins, 1991).  

---

## **Capítulo 5: Ecuación de Difusividad – Soluciones para Flujo Transitorio**  

- **Derivación en coordenadas cilíndricas**: Simplificaciones para líquidos ligeramente compresibles.  
- **Solución de línea fuente (Theis)**: Aplicación en pruebas de presión.  
- **Ejemplo**: Diagnóstico de daño de formación usando la solución transitoria.  
- **Fuente**: *Well Testing Analysis* (Earlougher, SPE, 1977).  

---

## **Capítulo 6: Flujo Pseudo-Estacionario – Comportamiento en Yacimientos Cerrados**  

- **Características**: Declinación exponencial de presión, ecuación de balance de materiales.  
- **Aplicación**: Estimación de volumen de yacimiento a partir de datos de producción.  
- **Caso real**: Análisis de un yacimiento de gas con fronteras selladas.  
- **Fuente**: *SPE Reservoir Evaluation & Engineering* (2018).  

---

## **Capítulo 7: Flujo Estacionario – Mantenimiento de Presión con Inyección**  

- **Condiciones**: Presión constante en fronteras (ejemplo: acuíferos activos).  
- **Ecuación de flujo**: Solución para patrones de inyección (5-spot, line drive).  
- **Herramientas**: Simulación en CMG para comparar escenarios.  
- **Fuente**: *Enhanced Oil Recovery* (Lake, SPE, 1989).  

---

## **Capítulo 8: Daño de Formación (Skin Factor) – Diagnóstico y Mitigación**  

- **Tipos de skin**: Daño mecánico (S>0), estimulación (S<0), skin por desviación.  
- **Cálculo**: Uso de gráficos semilog en pruebas de restauración.  
- **Ejemplo**: Efectividad de una acidificación en un pozo de carbonatos.  
- **Fuente**: *Well Performance* (Golan & Whitson, 1991).  

---

## **Capítulo 9: Flujo en Pozos Horizontales – Ecuaciones y Ventajas**  

- **Modelos de flujo**: Solución de Joshi para permeabilidad anisotrópica.  
- **Caso real**: Comparación de productividad entre pozo vertical vs. horizontal en shale gas.  
- **Herramientas**: Uso de PIPESIM para diseño de completamientos.  
- **Fuente**: *SPE Journal* (1991) sobre flujo en pozos horizontales.  

---

## **Capítulo 10: Permeabilidad Relativa – Curvas y Métodos de Medición**  

- **Técnicas de laboratorio**: Steady-state (flujo simultáneo) vs. unsteady-state (inyección de agua).  
- **Interpretación**: Efecto de la mojabilidad en las curvas (ejemplo: rocas mojadas por agua vs. aceite).  
- **Fuente**: *SCAL Guidelines* (API RP 40, 2015).  

---

## **Capítulo 11: Presión Capilar – Histéresis y Aplicaciones en Recobro**  

- **Curvas Pc**: Método de porosimetría de mercurio (MICP) y centrífuga.  
- **Impacto en saturación**: Atrapamiento de petróleo en rocas mojadas por agua.  
- **Ejemplo**: Diseño de inyección de agua basado en presión capilar.  
- **Fuente**: *Petrophysics* (Tiab & Donaldson, 2015).  

---

## **Capítulo 12: Mojabilidad (Wettability) – Efecto en la Eficiencia de Desplazamiento**  

- **Clasificación**: Índice de mojabilidad de Amott-USBM.  
- **Caso de estudio**: Cambio de mojabilidad en yacimientos con inyección de surfactantes.  
- **Fuente**: *SPE Reservoir Engineering* (1990) sobre mojabilidad en carbonatos.  

---

## **Capítulo 13: Teoría de Buckley-Leverett – Predicción del Frente de Desplazamiento**  

- **Derivación matemática**: Ecuación de flujo fraccional y solución gráfica.  
- **Aplicación**: Estimación del breakthrough en inyección de agua.  
- **Herramientas**: Simulación en Excel con datos de permeabilidad relativa.  
- **Fuente**: *Secondary Recovery* (Craig, 1971).  

---

## **Fuentes Principales:**  

1. **Libros**:  
   - Dake, L.P. (1978). *Fundamentals of Reservoir Engineering*. Elsevier.  
   - Tiab & Donaldson (2015). *Petrophysics*. Gulf Professional Publishing.  
2. **Artículos SPE**:  
   - [SPE Journal](https://www.spe.org) (1991-2023).  
3. **Normas API**:  
   - API RP 40 (2015). *Recommended Practices for Core Analysis*.  

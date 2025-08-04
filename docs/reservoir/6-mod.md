# **Módulo 6: Análisis de Declinación de Producción (Decline Curve Analysis - DCA)**

## **Capítulo 1: Fundamentos del DCA – Objetivos y Supuestos Clave**  

- **3 objetivos principales**: Pronóstico de producción, cálculo de EUR, evaluación de pozos.  
- **Supuestos críticos**: Flujo en régimen pseudo-estacionario, condiciones operativas constantes.  
- **Limitaciones**: No aplicable para flujo transitorio prolongado.  
- **Fuente**: *SPE Petroleum Resources Management System* (PRMS, 2018).  

---

## **Capítulo 2: Declinación Exponencial – Ecuación y Casos de Uso**  

- **Ecuación**: q(t) = q_i e^(-Dt) (D = tasa de declinación constante).  
- **Aplicación típica**: Yacimientos con empuje hidráulico activo.  
- **Ejemplo**: Campo Mariscal Sucre (Venezuela).  
- **Fuente**: *Arps (1945)* en *Trans. AIME*.  

---

## **Capítulo 3: Declinación Hiperbólica – El Modelo Más Versátil**  

- **Ecuación**: q(t) = q_i / (1 + bD_i t)^(1/b).  
- **Parámetro b**: Rango 0-1 (0=exponencial, 1=armónico).  
- **Caso real**: Ajuste en pozos de la Formación Bakken.  
- **Fuente**: *Fetkovich (1980)* en *JPT*.  

---

## **Capítulo 4: Declinación Armónica – Caso Límite de Hiperbólica**  

- **Ecuación**: q(t) = q_i / (1 + D_i t).  
- **Uso típico**: Pozos con inyección de agua balanceada.  
- **Ejemplo**: Campos maduros del Mar del Norte.  
- **Fuente**: *SPE Reservoir Evaluation & Engineering* (2005).  

---

## **Capítulo 5: Limitaciones de los Modelos de Arps – Cuándo Fallan**  

- **Problemas comunes**:  
  - Pozos en shale con flujo transitorio prolongado.  
  - Cambios abruptos en condiciones operativas.  
- **Solución**: Uso de modelos híbridos.  
- **Fuente**: *SPE 166352* (2013).  

---

## **Capítulo 6: Curvas Tipo de Fetkovich – Unificación de DCA y Flujo**  

- **Método**: Superposición de curvas adimensionales.  
- **Ejemplo**: Diagnóstico de daño en pozos de gas.  
- **Tool**: Gráficos log-log personalizados en Python.  
- **Fuente**: *Fetkovich (1980)* en *JPT*.  

---

## **Capítulo 7: Método de Blasingame – Incorporando Presión Variable**  

- **Variables normalizadas**: Tasa/presión (q/ΔP) vs. tiempo material.  
- **Ventaja**: Precisa para gas no convencional.  
- **Fuente**: *SPE 14238* (Blasingame, 1991).  

---

## **Capítulo 8: DCA en Shale Gas – Modelos Modificados (Duong, SEPD)**  

- **Duong (2011)**: q(t) = q_1 t^(-m) e^(a(t^(1-m)-1)/(1-m)).  
- **SEPD**: Stretched Exponential Decline.  
- **Caso**: Pozos horizontales en Eagle Ford.  
- **Fuente**: *SPE 144844* (Duong, 2011).  

---

## **Capítulo 9: Tasa de Flujo Equivalente – Normalización por Presión**  

- **Fórmula**: q_eq = q × (P_i/P_avg).  
- **Aplicación**: Comparación de pozos con diferentes historiales de presión.  
- **Fuente**: *SPE 109975* (2007).  

---

## **Capítulo 10: Análisis de Agotamiento (Depletion Analysis) – EUR Realista**  

- **Método**: Combinar DCA con volumetría y MBE.  
- **Ejemplo**: Re-evaluación de reservas en campos maduros.  
- **Fuente**: *SPE 175083* (2015).  

---

## **Capítulo 11: DCA con Machine Learning – Enfoques Modernos**  

- **Algoritmos**: Random Forest para predecir declinaciones atípicas.  
- **Caso**: Pronóstico en campos con datos ruidosos.  
- **Fuente**: *SPE Journal* (2022).  

---

## **Capítulo 12: Software para DCA – Desde Excel hasta ARIES**  

- **Comparativa**:  
  - Excel: Ajuste manual con Solver.  
  - Harmony: Automatización con curvas tipo.  
  - Python: Librerías como `DeclineAnalysis`.  
- **Fuente**: *SPE Software Survey* (2023).  

---

## **Capítulo 13: Caso Integrado – DCA en un Campo No Convencional**  

- **Dataset**: 5 años de producción de pozos en Vaca Muerta.  
- **Técnicas aplicadas**: Hiperbólico modificado + curvas tipo.  
- **Resultados**: EUR ajustado con ±15% de error.  
- **Fuente**: *SPE Argentina Symposium* (2021).  

---

## **Fuentes Clave:**  

1. **Libros**:  
   - *Production Analysis with Decline Curves* (SPE, 2015).  
   - *Reservoir Engineering Handbook* (Ahmed, 2019).  
2. **Artículos SPE**:  
   - [SPE 166352](https://onepetro.org): "Limitations of DCA in Unconventionals".  
   - [SPE 144844](https://onepetro.org): Duong's Method.  
3. **Herramientas**:  
   - [Harmony DCA Software](https://www.slb.com/harmony)  
   - [Python DeclineAnalysis](https://github.com/fracability/decline)  

Cada capítulo incluye:  

- **Ecuaciones clave** destacadas en cuadros.  
- **Ejemplos de campo** con datos reales.  
- **Herramientas prácticas** (Excel/Python).  
- **Errores comunes** y cómo evitarlos.  

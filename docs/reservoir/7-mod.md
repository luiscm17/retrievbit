# **Módulo 7: Recuperación Secundaria**

## **Capítulo 1: Fundamentos de Recuperación Secundaria – Por qué y Cuándo Aplicarla**  

- **Brecha de recuperación**: Factores típicos de recobro primario (5-30%) vs. potencial con secundaria (30-60%).  
- **Mecanismos clave**: Desplazamiento capilar vs. barrido areal.  
- **Ejemplo**: Comparación Campos Ghawar (agua) vs. Prudhoe Bay (gas).  
- **Fuente**: *SPE Enhanced Oil Recovery Handbook* (2018).  

---

## **Capítulo 2: Eficiencia de Barrido Volumétrico (Ev) – Cómo Maximizarla**  

- **Ecuación**: Ev = Ea × Evz (areal × vertical).  
- **Factores controladores**: Heterogeneidad, movilidad, estratificación.  
- **Tool**: Simulación 2D en Python de patrones de inyección.  
- **Fuente**: *Journal of Petroleum Technology* (Craig, 1971).  

---

## **Capítulo 3: Eficiencia de Desplazamiento Microscópico (Ed) – El Papel de la Mojabilidad**  

- **Ecuación de Buckley-Leverett**: Saturación residual de petróleo (Sor).  
- **Casos extremos**: Mojado por agua (Sor=20%) vs. mojado por aceite (Sor=50%).  
- **Fuente**: *SPE Reservoir Engineering* (1988) sobre mojabilidad.  

---

## **Capítulo 4: Waterflooding – Diseño de Patrones de Inyección**  

- **Patrones comunes**:  
  - 5-spot (40% Ea) vs. Line Drive (70% Ea).  
  - Invertido para alta anisotropía.  
- **Ejemplo real**: Patrón 9-spot en Cantarell (México).  
- **Fuente**: *Waterflooding* (Willhite, SPE, 1986).  

---

## **Capítulo 5: Razón de Movilidad (M) – El Enemigo del Barrido Eficiente**  

- **Fórmula**: M = (λw/λo) = (krw/μw)/(kro/μo).  
- **Umbrales**:  
  - M<1: Frente estable  
  - M>1: Canalización  
- **Caso**: Viscosidad de crudos pesados (M>>10).  
- **Fuente**: *SPE Journal* (1965) sobre movilidad.  

---

## **Capítulo 6: Curvas de Rendimiento Fraccional – Método de Welge**  

- **Construcción gráfica**:  
  1. Curva de flujo fraccional (fw vs. Sw).  
  2. Tangente para saturación frontal (Swf).  
- **Ejemplo**: Campo East Texas (areniscas homogéneas).  
- **Fuente**: *SPE Textbook Series* (1983).  

---

## **Capítulo 7: Método Dykstra-Parsons – Predicción en Yacimientos Estratificados**  

- **Coeficiente V**: Medida de heterogeneidad (0=homogéneo, 1=heterogéneo).  
- **Correlaciones**: Recobro vs. V y M.  
- **Tool**: Calculadora Excel basada en tablas originales.  
- **Fuente**: *Trans. AIME* (1950) paper original.  

---

## **Capítulo 8: Método de Stiles – Aproximación para Capas No Comunicadas**  

- **Supuesto clave**: Permeabilidad ordenada de mayor a menor.  
- **Ecuación**: Recobro = 1 – (1 – Ed × Ea)^N (N=capas).  
- **Limitaciones**: Ignora comunicación vertical.  
- **Fuente**: *SPE Reservoir Evaluation* (1992).  

---

## **Capítulo 9: Tratamiento de Agua de Inyección – Desafíos Técnicos**  

- **4 problemas críticos**:  
  1. Sólidos suspendidos (<1 mg/L).  
  2. Corrosión (O2 < 10 ppb).  
  3. Bacterias (SRB < 10^2 CFU/mL).  
  4. Incrustaciones (CaCO3, BaSO4).  
- **Caso**: Sistema de filtrado en Campos del Mar del Norte.  
- **Fuente**: *API RP 45* (2021).  

---

## **Capítulo 10: Inyección de Gas No Miscible – Alternativa al Waterflooding**  

- **Aplicaciones típicas**:  
  - Mantenimiento de presión en casquetes de gas.  
  - Evitar subsidencia en yacimientos compactantes.  
- **Ejemplo**: Inyección de gas en Groningen (Holanda).  
- **Fuente**: *Gas Injection Handbook* (SPE, 2017).  

---

## **Capítulo 11: Reinyección de Gas Producido – Economía vs. Recobro**  

- **Decisiones clave**: Vender gas vs. reinyectar para mantenimiento.  
- **Análisis NPV**: Umbral de precios del gas.  
- **Caso**: Campos de gas asociado en Medio Oriente.  
- **Fuente**: *SPE Economics & Management* (2019).  

---

## **Capítulo 12: Simulación Numérica de Waterflooding – Del Modelo a la Práctica**  

- **Workflow**:  
  1. Upscaling de permeabilidades.  
  2. Calibración con pruebas de interferencia.  
  3. Optimización de tasas de inyección.  
- **Tool**: Tutorial Eclipse con dataset público.  
- **Fuente**: *SPE Reservoir Simulation Symposium* (2021).  

---

## **Capítulo 13: Caso Integrado – Waterflooding en un Campo Fracturado**  

- **Desafío**: Fracturas naturales causando canalización temprana.  
- **Solución**: Inyección con polímeros para reducir movilidad.  
- **Resultados**: +15% de recobro vs. agua convencional.  
- **Fuente**: *SPE Latin American Symposium* (2022).  

---

## **Fuentes Clave:**  

1. **Libros**:  
   - *Enhanced Oil Recovery* (Lake, SPE, 2014).  
   - *Waterflooding* (Willhite, SPE, 1986).  
2. **Normas**:  
   - [API RP 45](https://www.api.org): Tratamiento de agua.  
3. **Artículos SPE**:  
   - [SPE 29694](https://onepetro.org): Dykstra-Parsons moderno.  
   - [SPE 185054](https://onepetro.org): Reinyección de gas.  

**Cada capítulo incluye**:  

- **Ejemplos de campo** con datos cuantitativos.  
- **Herramientas descargables** (Excel/Python).  
- **Errores comunes** en diseño de proyectos.  
- **Gráficos técnicos** listos para usar en presentaciones.  

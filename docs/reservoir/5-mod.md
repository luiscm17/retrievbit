# **Módulo 5: Análisis de Pruebas de Presión (Well Testing)**

## **Capítulo 1: Fundamentos de Pruebas de Presión – Objetivos y Aplicaciones Clave**  

- **4 objetivos principales**: Permeabilidad (k), daño (skin), presión promedio y límites del yacimiento.  
- **Ejemplo real**: Cómo un test de build-up reveló una falla no mapeada en el Campo Permian.  
- **Fuente**: *SPE Textbook Series* (Well Testing, 2007).  

---

### **Capítulo 2: Pruebas de Declinación (Drawdown) – Diseño e Interpretación**  

- **Ecuación clave**: ΔP vs. log(t) para calcular k y skin.  
- **Errores comunes**: Efectos de almacenamiento en pozos profundos.  
- **Caso**: Análisis de un pozo en Vaca Muerta.  
- **Fuente**: *Well Testing Analysis* (Earlougher, SPE).  

---

### **Capítulo 3: Pruebas de Restauración (Build-up) – Método de Horner**  

- **Gráfico semilog**: Pendiente = 162.6qBμ/kh.  
- **Tiempo ideal de cierre**: Regla de 1.5x el tiempo de flujo.  
- **Tool**: Python script para graficar Horner.  
- **Fuente**: *SPE Journal* (1967) paper original.  

---

### **Capítulo 4: Pruebas de Interferencia – Conectividad de Yacimientos**  

- **Análisis de presión en pozos observación**: Identificación de compartimientos.  
- **Caso**: Campo offshore Brasil con inyección de agua.  
- **Fuente**: *SPE Reservoir Evaluation* (2015).  

---

### **Capítulo 5: Pruebas de Pulso – Técnica para Yacimientos Apretados**  

- **Diseño**: Ciclos de producción/cierre y análisis de amplitud.  
- **Ventaja**: Menos sensible al ruido de fondo.  
- **Fuente**: *SPE Formation Evaluation* (1984).  

---

### **Capítulo 6: Gráficos Log-Log – Diagnóstico con Derivada de Presión**  

- **Firmas características**:  
  - Pendiente 0.5 = flujo lineal  
  - "Hump" = daño  
- **Ejemplo**: Yacimiento fracturado vs. homogéneo.  
- **Fuente**: *Modern Well Test Analysis* (Bourdet, 2002).  

---

### **Capítulo 7: Identificación de Regímenes de Flujo – Radial, Lineal, Esférico**  

- **Tiempos característicos**:  
  - 0.1 hrs (flujo pozo) → 10 hrs (radial infinito).  
- **Tool**: Curvas tipo de Gringarten.  
- **Fuente**: *SPE Advanced Well Test Analysis* (1995).  

---

### **Capítulo 8: Yacimientos Naturalmente Fracturados – Modelo de Doble Porosidad**  

- **Firma en derivada**: "V" característica.  
- **Parámetros**: λ (coeficiente de interflujo) y ω (relación de almacenamiento).  
- **Fuente**: *SPE Journal* (Warren & Root, 1963).  

---

### **Capítulo 9: Análisis de Daño (Skin) – Mecánico vs. No-Darcy**  

- **Ecuación de skin total**: S = S_mec + Dq (efecto turbulencia).  
- **Ejemplo**: Efectividad de una acidificación en carbonatos.  
- **Fuente**: *Well Performance* (Golan & Whitson, SPE).  

---

### **Capítulo 10: Detección de Límites – Fallas y Acuíferos**  

- **Técnicas**:  
  - Pendiente doble en Horner  
  - Derivada "levantándose"  
- **Caso**: Límite sellado vs. acuífero parcial.  
- **Fuente**: *SPE Reservoir Engineering* (1990).  

---

### **Capítulo 11: Pozos Horizontales – Análisis con Curvas Tipo Especializadas**  

- **3 regímenes clave**: Flujo temprano (lineal vertical), radial horizontal, late-time.  
- **Tool**: Uso de KAPPA Saphir para matching.  
- **Fuente**: *SPE Journal* (1991) modelo de Goode.  

---

### **Capítulo 12: Software de Análisis – Desde Excel hasta KAPPA/ECRIN**  

- **Workflow comparado**:  
  - Excel: Básico para Horner  
  - KAPPA: Análisis avanzado con curvas tipo  
- **Fuente**: *SPE Software Survey* (2023).  

---

### **Capítulo 13: Caso Integrado – Diagnóstico Completo de un Yacimiento Real**  

- **Dataset**: Prueba de build-up + interferencia en un campo de Medio Oriente.  
- **Hallazgos**: Doble porosidad + límite a 200m.  
- **Fuente**: *SPE Annual Technical Conference* (2021).  

---

### **Fuentes Clave:**  

1. **Libros**:  
   - Earlougher, R. *Advances in Well Test Analysis* (SPE, 1977).  
   - Bourdet, D. *Well Test Analysis: The Use of Advanced Interpretation Models* (2002).  
2. **SPE Papers**:  
   - SPE-16494 (Warren & Root, doble porosidad).  
   - SPE-30136 (análisis de derivada).  
3. **Herramientas**:  
   - [KAPPA Engineering](https://www.kappaeng.com)  
   - [Python Well Test Library](https://github.com/fracturedreservoir/pywelltest)  

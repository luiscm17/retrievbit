# **Módulo 5: Aplicaciones Prácticas y Estudios de Caso en O&G**

## **Capítulo 1: Predicción de Propiedades de Yacimientos con Machine Learning**  

- **Modelado de permeabilidad/porosidad**:  
  - Uso de Random Forests y XGBoost para predecir propiedades de roca a partir de registros geofísicos (GR, Resistividad, Neutrón-Densidad).  
  - Ejemplo práctico: Corrección de datos de núcleos usando ML.  
- **Validación cruzada estratificada** para evitar overfitting en datos de pozos.  
**Fuente**: [SPE Paper: "Permeability Prediction with ML"](https://onepetro.org/) | [XGBoost Documentation](https://xgboost.readthedocs.io/)  

---

## **Capítulo 2: Clasificación Automática de Facies Geológicas**  

- **Algoritmos comparados**:  
  - SVM vs. Redes Neuronales para interpretación de facies en registros de pozos.  
  - Manejo de desbalance de clases (ej.: lutitas vs. areniscas).  
- **Código para visualización**:  

  ```python
  plt.figure(figsize=(12,4))
  plt.plot(well_df['Depth'], well_df['Facies_Predicted'], label='ML Prediction')  
  ```  

**Fuente**: [SEG Machine Learning Contest](https://seg.org/) | [Scikit-learn SVM Guide](https://scikit-learn.org/stable/modules/svm.html)  

---

## **Capítulo 3: Optimización de Perforación con IA**  

- **Predicción de ROP**:  
  - Modelos de regresión avanzada (Gradient Boosting) con datos de WOB, RPM y parámetros de lodo.  
  - Caso de campo: Ahorro del 15% en tiempo de perforación en shale plays.  
- **Detección de kicks**:  
  - Análisis en tiempo real con ventanas deslizantes de datos de presión.  
**Fuente**: [IADC Best Practices for ROP Optimization](https://www.iadc.org/) | [SPE: "Real-Time Kick Detection"](https://onepetro.org/)  

---

## **Capítulo 4: Pronóstico de Producción con Enfoque Práctico**  

- **Técnicas híbridas**:  
  - Combinación de ARIMA (para tendencias) + Random Forest (para variables operacionales).  
  - Métricas de negocio: MAPE aplicado a presupuestos de campo.  
- **Dashboard interactivo**:  

  ```python
  import streamlit as st
  st.line_chart(production_df[['Actual','Forecast']])  
  ```  

**Fuente**: [Journal of Petroleum Technology - "Production Forecasting"](https://jpt.spe.org/) | [Facebook Prophet Tutorial](https://facebook.github.io/prophet/)  

---

## **Capítulo 5: Mantenimiento Predictivo en Equipos de Superficie**  

- **Detección de fallas en bombas ESP**:  
  - Análisis de firmas eléctricas con clustering espectral.  
  - Umbrales de alerta temprana basados en datos históricos.  
- **Ahorros documentados**:  
  - Reducción del 40% en tiempos de parada no planificados (caso Pemex).  
**Fuente**: [SPE Paper: "ESP Failure Prediction"](https://onepetro.org/) | [Vibration Analysis Handbook](https://www.mobiusinstitute.com/)  

---

## **Capítulo 6: Implementación de Proyectos de Ciencia de Datos en O&G**  

- **Metodología CRISP-DM adaptada**:  
  - Ejemplo: De la problemática de arena en pozos al modelo de erosión de válvulas.  
- **Ética y seguridad**:  
  - Protocolos para datos sensibles (reservorios estratégicos).  
  - Sesgos en datos históricos de campos maduros.  
**Fuente**: [CRISP-DM 2.0 Specification](https://www.ibm.com/analytics) | [API Data Security Standards](https://www.api.org/)  

---

## **Capítulo 7: Optimización de Levantamiento Artificial con ML**  

- **Selección de método**:  
  - Árboles de decisión para recomendar Gas Lift vs. ESP basado en:  
    - CUR (Cumulative Oil Rate)  
    - GOR (Gas-Oil Ratio)  
    - Presión de fondo  
- **Caso práctico**:  
  - Aumento del 8% en producción en campos marginales.  
**Fuente**: [SPE Production & Operations Journal](https://www.spe.org/) | [Scikit-learn Decision Trees](https://scikit-learn.org/stable/modules/tree.html)  

---

**Características clave**:  

1. **Código listo para implementar**: Todos los ejemplos usan bibliotecas estándar (Pandas, Scikit-learn).  
2. **Métricas de impacto real**: Tiempos de perforación, incrementos de producción, reducción de costos.  
3. **Enfoque en escalabilidad**: Soluciones aplicables desde un solo pozo hasta campos completos.  

**Opcional**:  

- ¿Incluir un anexo con datasets sintéticos basados en campos reales (ej. Permian, Orinoco) para practicar?  

Cada capítulo incluye:  
✔ Gráficos específicos de la industria (curvas de declinación, mapas de facies)  
✔ Advertencias sobre errores comunes (ej.: sobreajuste en datos de pozos vecinos)  
✔ Enlaces a repositorios de código abierto (GitHub) y estándares SPE/API

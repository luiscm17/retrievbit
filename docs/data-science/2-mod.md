# **Módulo 2: Adquisición, Limpieza y Preparación de Datos Petroleros**

## **Capítulo 1: Fuentes de Datos en la Industria Petrolera – ¿Dónde y Cómo se Generan?**  

- **Datos de perforación (MWD/LWD)**:  
  - Parámetros clave: ROP (Rate of Penetration), WOB (Weight on Bit), RPM.  
  - Ejemplo: Uso de datos de vibración en tiempo real para prevenir *stick-slip*.  
- **Datos de producción**:  
  - Series temporales de tasas de flujo y presión (ej.: Diagnóstico de fallas en bombas ESP mediante análisis de corriente).  
- **Datos geofísicos**:  
  - Registros de pozos (gamma ray, resistividad) y su correlación con facies geológicas.  
**Fuente**: [SPE Paper: "Real-Time Data Acquisition in Drilling"](https://onepetro.org/) | [OWG JIP Standards](https://www.oilfieldenergy.org/)  

---

## **Capítulo 2: Técnicas de Adquisición de Datos – Sensores y Sistemas SCADA**  

- **Sistemas SCADA/PI System**:  
  - Arquitectura básica: Sensores → PLC → Historiador → Dashboards.  
  - Ejemplo: Monitoreo de presión en oleoductos con alertas automatizadas.  
- **Registros de pozo (Wireline vs. LWD)**:  
  - Ventajas de LWD para toma de decisiones en tiempo real.  
  - Formatos estándar: LAS (Log ASCII Standard) para intercambio de datos.  
**Fuente**: [ISA SCADA Standards](https://www.isa.org/) | [Schlumberger Wireline Data Handbook](https://www.slb.com/)  

---

## **Capítulo 3: Limpieza de Datos Petroleros – Tratamiento de Valores Nulos y Outliers**  

- **Manejo de datos faltantes**:  
  - Técnicas: Eliminación, interpolación lineal (para series temporales), imputación por media/mediana.  
  - Caso práctico: Relleno de huecos en datos de producción usando `Pandas.fillna()`.  
- **Detección de outliers**:  
  - Métodos: IQR (Interquartile Range), Z-score.  
  - Ejemplo en O&G: Identificación de valores anómalos en datos de presión de fondo.  
**Fuente**: [Python Data Cleaning Tutorial (Real Python)](https://realpython.com/python-data-cleaning-numpy-pandas/) | [SPE: "Outlier Detection in Production Data"](https://onepetro.org/)  

---

## **Capítulo 4: Normalización y Transformación de Datos – Preparación para ML**  

- **Estandarización vs. Normalización**:  
  - Cuándo usar `StandardScaler` (ej.: datos sísmicos) vs. `MinMaxScaler` (ej.: propiedades de roca).  
- **Codificación de variables categóricas**:  
  - One-hot encoding para tipos de fluidos ("gas", "agua", "petróleo").  
  - Label encoding para facies geológicas (ej.: "arena"=1, "lutita"=2).  
- **Transformaciones no lineales**:  
  - Uso de log-transform en datos de permeabilidad (distribución log-normal).  
**Fuente**: [Scikit-learn Preprocessing Guide](https://scikit-learn.org/stable/modules/preprocessing.html) | [SPE Paper: "Data Preprocessing for Reservoir Modeling"](https://onepetro.org/)  

---

## **Capítulo 5: Manejo de Series Temporales en O&G – Remuestreo e Interpolación**  

- **Técnicas para datos temporales**:  
  - Remuestreo diario/mensual de datos de producción con `Pandas.resample()`.  
  - Interpolación lineal vs. spline para datos de presión en pozos.  
- **Caso aplicado**:  
  - Alineación de datos de producción y perforación usando timestamps.  
**Fuente**: [Time Series Analysis in Python (O’Reilly)](https://www.oreilly.com/library/view/python-for-time/9781492049459/) | [SPE: "Time-Series Data Quality"](https://onepetro.org/)  

---

## **Capítulo 6: Integración de Datos Petroleros – Unificando Fuentes Dispersas**  

- **Desafíos comunes**:  
  - Diferentes escalas de tiempo (ej.: datos diarios de producción vs. muestras semanales de laboratorio PVT).  
  - Unificación por profundidad (MD/TVD) en registros de pozos.  
- **Herramientas**:  
  - Uso de `Pandas.merge()` y `SQL JOINs` para combinar tablas.  
  - Ejemplo: Creación de un DataFrame unificado con datos de perforación, producción y geología.  
**Fuente**: [Data Integration in O&G (Halliburton)](https://www.halliburton.com/) | [SPE: "Data Fusion Techniques"](https://onepetro.org/)  

---

**Nota**: Cada capítulo incluye ejemplos prácticos en Python (usando `Pandas`, `NumPy`) y referencias a estándares de la industria (SPE, formatos LAS). Los temas están diseñados para leerse en 20 minutos, con enlaces a documentación técnica y papers para profundizar.

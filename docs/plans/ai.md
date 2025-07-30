# Temario Extendido: Inteligencia Artificial (IA)

## **Módulo 1: Introducción a la Inteligencia Artificial y sus Fundamentos**

**1.1 ¿Qué es la Inteligencia Artificial?**

* Definiciones y conceptos clave (IA fuerte vs. IA débil, IA estrecha vs. IA general).
* Historia de la IA: Hitos importantes, inviernos de la IA y el resurgimiento actual.
* Subcampos de la IA: Machine Learning, Deep Learning, Procesamiento del Lenguaje Natural, Visión por Computadora, Robótica, Sistemas Expertos.

**1.2 Conceptos Básicos de Lógica y Razonamiento:**

* Introducción a la lógica proposicional y de predicados.
* Sistemas basados en reglas y árboles de decisión como ejemplos tempranos de IA.

**1.3 Resolución de Problemas y Búsqueda:**

* Espacios de estados y grafos.
* Algoritmos de búsqueda sin información (BFS, DFS) y con información (A*, greedy best-first search).
* Algoritmos de búsqueda adversarial (Minimax para juegos).

**1.4 Introducción a la Programación para IA:**

* Entornos de desarrollo (Jupyter Notebooks, VS Code).
* Uso de Python y librerías fundamentales: NumPy, Pandas.
* Conceptos básicos de álgebra lineal y cálculo para IA.

## **Módulo 2: Fundamentos de Machine Learning y Deep Learning**

**2.1 Repaso de Machine Learning (ML):**

* Tipos de aprendizaje: Supervisado (regresión, clasificación), no supervisado (clustering, reducción de dimensionalidad), por refuerzo.
* Preprocesamiento de datos para ML: Normalización, estandarización, codificación de variables categóricas.
* Selección de características (Feature Engineering).
* Evaluación de modelos: Métricas comunes (precisión, recall, F1-score, R2, MSE), validación cruzada.

**2.2 Modelos Clásicos de Machine Learning:**

* Regresión Lineal y Logística.
* Máquinas de Soporte Vectorial (SVM) - Introducción.
* Árboles de Decisión y Random Forests.
* K-Nearest Neighbors (KNN).
* Algoritmos de Clustering: K-Means, DBSCAN (introducción).

**2.3 Introducción al Deep Learning (DL):**

* Concepto de neurona artificial y redes neuronales.
* Capas (input, ocultas, output), activación, pesos, sesgos.
* Arquitecturas básicas: Perceptrón Multicapa (MLP).
* Proceso de entrenamiento: Función de pérdida, optimizadores (descenso de gradiente).
* Backpropagation (concepto).
* Uso de frameworks como TensorFlow o PyTorch (nivel conceptual y uso básico).

## **Módulo 3: Procesamiento del Lenguaje Natural (PLN / NLP)**

**3.1 Fundamentos del Lenguaje Humano y PLN:**

* Desafíos del PLN: Ambigüedad, contexto, sarcasmo.
* Pipeline básico de PLN: Recopilación, limpieza, tokenización, normalización (lematización, stemming).
* Etiquetado de Parte de la Oración (POS tagging), reconocimiento de entidades nombradas (NER).

**3.2 Representación del Texto:**

* Modelos Bag-of-Words (BoW), TF-IDF (Term Frequency-Inverse Document Frequency).
* Word Embeddings: Word2Vec, GloVe, FastText (conceptos).

**3.3 Clasificación de Texto y Análisis de Sentimientos:**

* Aplicación de modelos de ML (Naive Bayes, SVM) para clasificación de texto.
* Técnicas y herramientas para análisis de sentimientos.

**3.4 Introducción a Modelos Secuenciales para PLN:**

* Redes Neuronales Recurrentes (RNNs) y LSTMs (conceptos básicos).
* Introducción a la arquitectura Transformer (atención).

**3.5 Aplicaciones del PLN:** Resumen de texto, traducción automática, chatbots (nivel de componente).

## **Módulo 4: Visión por Computadora (Computer Vision)**

**4.1 Fundamentos de Procesamiento de Imágenes:**

* Representación de imágenes digitales (píxeles, canales de color).
* Operaciones básicas con imágenes: Escala de grises, umbralización, filtrado (convolución, desenfoque).
* Detección de bordes y características (ej. SIFT, HOG).

**4.2 Clasificación de Imágenes:**

* Conjuntos de datos de imágenes comunes (MNIST, CIFAR-10).
* Redes Neuronales Convolucionales (CNNs):
  * Capas convolucionales, capas de pooling.
  * Arquitecturas básicas de CNN (ej. LeNet, AlexNet simplificado).
  * Transfer Learning: Uso de modelos pre-entrenados (ImageNet) para nuevas tareas (ej. VGG, ResNet simplificado).

**4.3 Detección y Segmentación de Objetos:**

* Conceptos básicos de detección de objetos (bounding boxes).
* Introducción a algoritmos (R-CNN, YOLO, SSD - conceptos).
* Segmentación de imágenes (semántica, de instancia) - Introducción.

**4.4 Reconocimiento Facial y Detección de Hitos:**

* Conceptos de detección y verificación facial.
* Extracción de características faciales.

**4.5 Aplicaciones de Visión por Computadora:** Control de calidad visual, seguridad, reconocimiento de patrones en imágenes satelitales, análisis de video.

## **Módulo 5: Reconocimiento de Voz y Síntesis de Voz**

**5.1 Fundamentos de Procesamiento de Audio:**

* Representación digital del sonido: Muestreo, cuantificación.
* Características del audio para el habla (MFCCs).

**5.2 Reconocimiento Automático de Voz (ASR - Automatic Speech Recognition):**

* Pipeline básico de ASR: Preprocesamiento, extracción de características, modelos acústicos, modelos de lenguaje.
* Conceptos de Deep Learning en ASR.
* Modelos de extremo a extremo (end-to-end ASR) - introducción.

**5.3 Síntesis de Voz (Text-to-Speech - TTS):**

* Principios de la generación de voz.
* Concatenación y síntesis paramétrica.
* Modelos basados en Deep Learning para TTS.

**5.4 Tecnologías de Voz y Aplicaciones:**

* Sistemas de comando de voz.
* Transliteración de audio a texto.
* Creación de narraciones.

## **Módulo 6: Agentes Conversacionales (Chatbots y Asistentes Virtuales)**

**6.1 Arquitectura de Agentes Conversacionales:**

* Componentes clave: Reconocimiento de Intención (Intent Recognition), Extracción de Entidades (Entity Extraction), Gestión de Diálogo (Dialogue Management), Generación de Respuesta.

**6.2 Construcción de Chatbots Basados en Reglas vs. IA:**

* Diseño de árboles de decisión y flujos conversacionales.
* Uso de plataformas para la construcción de bots (ej. Dialogflow, Rasa - conceptos).

**6.3 Integración de Componentes de PLN y Voz:**

* Conexión de ASR y TTS para asistentes de voz.
* Manejo de estados en conversaciones complejas.

**6.4 Consideraciones de Diseño y Experiencia de Usuario (UX) para Chatbots:**

* Principios de diseño de diálogo.
* Personalización y contexto.
* Métricas de rendimiento de chatbots.

## **Módulo 7: Minería de Conocimiento y Búsqueda Inteligente**

**7.1 Recuperación de Información (Information Retrieval):**

* Conceptos básicos de búsqueda (índices, consulta).
* Modelos de búsqueda (Booleana, Vectorial).
* Ranking de resultados de búsqueda.

**7.2 Extracción de Información (Information Extraction):**

* Reconocimiento de Entidades Nombradas (NER) en profundidad.
* Extracción de relaciones entre entidades.
* Minería de eventos.

**7.3 Resumen de Documentos y Preguntas y Respuestas (Q&A):**

* Generación de resúmenes extractivos y abstractivos.
* Sistemas de Q&A basados en recuperación y generativos.

**7.4 Construcción de Grafos de Conocimiento (Knowledge Graphs):**

* Concepto de grafos de conocimiento (entidades, relaciones).
* Aplicaciones en búsqueda semántica y recomendación.

**7.5 Búsqueda Cognitiva / Búsqueda Empresarial:**

* Indexación de grandes volúmenes de datos no estructurados.
* Capacidades de búsqueda semántica y contextual.

## **Módulo 8: Modelos de Base (Foundation Models) y Generative AI**

**8.1 Introducción a los Modelos de Base (Foundation Models):**

* Concepto de modelos a gran escala, pre-entrenados en vastos datasets.
* Transferencia de conocimiento y capacidad de adaptación (fine-tuning, prompt engineering).

**8.2 Grandes Modelos de Lenguaje (LLMs - Large Language Models):**

* Arquitectura Transformer y el mecanismo de Atención (repaso y profundización).
* Modelos encoder-decoder (ej. T5), decoder-only (ej. GPT), encoder-only (ej. BERT).
* Capacidades: Generación de texto, resumen, traducción, Q&A, razonamiento.
* Prompt Engineering:** Técnicas para optimizar la interacción con LLMs (few-shot learning, cadena de pensamiento).

**8.3 Modelos Generativos de Imágenes y Otros Medios:**

* Introducción a los Modelos de Difusión (Diffusion Models) y GANs (Generative Adversarial Networks) - conceptos básicos.
* Generación de imágenes a partir de texto (Text-to-Image).

**8.4 Aplicaciones de la IA Generativa:**

* Creación de contenido, desarrollo de software asistido por IA, asistentes inteligentes avanzados.
* Consideraciones sobre la alucinación y la fiabilidad.

## **Módulo 9: Despliegue y Operación de Soluciones de IA (MLOps Básico)**

**9.1 Ciclo de Vida del Desarrollo de IA/ML:**

* Desde la ideación hasta el despliegue y monitoreo.
* Colaboración entre científicos de datos, ingenieros de ML y DevOps.

**9.2 Contenerización con Docker:**

* Concepto de contenedores y virtualización ligera.
* Creación de imágenes Docker para modelos de ML.

**9.3 Despliegue de Modelos de IA:**

* API RESTful para inferencia de modelos (ej. Flask, FastAPI básico).
* Conceptos de escalabilidad y latencia.

**9.4 Monitoreo de Modelos y Re-entrenamiento:**

* Drift de datos y drift de modelo.
* Métodos para monitorear el rendimiento del modelo en producción.
* Estrategias de re-entrenamiento y actualización de modelos.

## **Módulo 10: Ética, Gobernanza y Futuro de la IA**

**10.1 IA Responsable y Ética:**

* Conceptos clave: Equidad, transparencia, responsabilidad, privacidad, seguridad.
* Sesgos en los datos y algoritmos: Cómo identificarlos y mitigarlos.
* Explicabilidad de la IA (XAI - Explainable AI): LIME, SHAP (conceptos).

**10.2 Gobernanza de la IA:**

* Regulaciones emergentes sobre IA (ej. Ley de IA de la UE).
* Estándares y mejores prácticas.
* Auditorías de modelos de IA.

**10.3 Implicaciones Sociales y Laborales de la IA:**

* Impacto en el empleo y la economía.
* IA y el futuro del trabajo.

**10.4 Tendencias y Desafíos Futuros de la IA:**

* IA general (AGI).
* IA más allá del Deep Learning (Neuro-simbólica, IA Cognitiva).
* IA y la sostenibilidad.
* La IA en la exploración espacial, medicina y otras industrias.

---

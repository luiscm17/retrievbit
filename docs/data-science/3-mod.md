# **Module 3: Exploratory Data Analysis (EDA) and Visualization**

## **Chapter 1: Exploratory Data Analysis (EDA) Fundamentals for Oil & Gas**  

- **Key statistical measures**:  
  - When to use median vs. mean (e.g., skewed production data from unconventional reservoirs).  
  - Kurtosis interpretation for seismic attribute distributions.  
- **Correlation pitfalls**:  
  - Spurious correlations in drilling parameters (ROP vs. RPM).  
  - Spearman vs. Pearson for nonlinear relationships (e.g., permeability vs. porosity).  
**Source**: [SPE Paper: "Statistical Pitfalls in Reservoir Characterization"](https://onepetro.org/) | [Python Data Science Handbook - EDA Chapter](https://jakevdp.github.io/PythonDataScienceHandbook/)

---

## **Chapter 2: Distribution Analysis of Petroleum Data**  

- **Practical applications**:  
  - Log-normal distributions in permeability data (histograms with `Seaborn.kdeplot`).  
  - Identifying bimodal distributions in facies classification.  
- **Python implementation**:  

  ```python
  import seaborn as sns
  sns.displot(data=df, x='Porosity', hue='Facies', kind='kde')
  ```  

**Source**: [SPE Reservoir Evaluation & Engineering Journal](https://www.spe.org/) | [Matplotlib Visualization Guide](https://matplotlib.org/stable/contents.html)

---

## **Chapter 3: Advanced Visualization with Python for O&G**  

- **Specialized plots**:  
  - **Log plots**: LAS file visualization using `lasio` + `Matplotlib`.  
  - **Pressure-rate plots**: Diagnosing well damage (scatter plots with regression lines).  
- **Interactive examples**:  

  ```python
  import plotly.express as px
  px.scatter(df, x='Bottomhole_Pressure', y='Oil_Rate', color='Well_Type')
  ```  

**Source**: [Plotly O&G Visualization Examples](https://plotly.com/python/) | [SPE: "Visual Analytics for Drilling Data"](https://onepetro.org/)

---

## **Chapter 4: Time-Series Visualization for Production Analysis**  

- **Critical techniques**:  
  - Resampling monthly production data (`df.resample('M').mean()`).  
  - Identifying decline trends with rolling averages.  
- **Anomaly detection**:  
  - Highlighting ESP failures in dynamic pressure charts.  
**Source**: [Python for Time Series Analysis (O'Reilly)](https://www.oreilly.com/library/view/python-for-time/9781492049459/) | [Journal of Petroleum Technology - Production Analysis](https://jpt.spe.org/)

---

## **Chapter 5: Multivariate Visualization with Heatmaps & Pair Plots**  

- **Drilling optimization**:  
  - Heatmaps of WOB-RPM-ROP relationships.  
  - Pair plots for reservoir properties (porosity, saturation, permeability).  
- **Python code**:  

  ```python
  sns.heatmap(df[['WOB','RPM','ROP']].corr(), annot=True)
  ```  

**Source**: [Seaborn Tutorial](https://seaborn.pydata.org/tutorial.html) | [SPE: "Multivariate Analysis in Drilling"](https://onepetro.org/)

---

## **Chapter 6: Building Interactive Dashboards for Field Teams**  

- **Streamlit prototypes**:  
  - Live production monitoring dashboard (≤50 lines of code).  
  - Filterable well log visualization.  
- **Best practices**:  
  - Prioritizing KPIs for drilling supervisors vs. reservoir engineers.  
  - Mobile-responsive design for field use.  
**Source**: [Streamlit O&G Demo Gallery](https://streamlit.io/gallery) | [SPE: "Data Visualization for Decision Making"](https://onepetro.org/)

---

**Key Features**:  

1. Every chapter includes **ready-to-run Python snippets** using real O&G data structures.  
2. Visual examples focus on **industry-standard plots** (log plots, decline curves).  
3. Sources combine **technical papers (SPE)** with **core Python library documentation**.  
4. Estimated reading time controlled by separating fundamental concepts (Ch1-2) from applied techniques (Ch3-6).  

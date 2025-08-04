# **Module 4: Estimation of Hydrocarbons and the Material Balance Equation (MBE)**

## **Chapter 1: Volumetric OOIP Calculation – The Foundation of Reservoir Evaluation**  

- **Equation**: OOIP = 7758 × A × h × Φ × (1-Sw)/Bo  
- **Key parameters**: Net pay thickness (h) mapping using seismic and well logs.  
- **Case study**: OOIP estimation in Ghawar Field's Arab-D carbonate.  
- **Source**: *SPE Petroleum Resources Management System* (2018).  

---

## **Chapter 2: OGIP Estimation – Gas Expansion Factor and Pore Volume**  

- **Equation**: OGIP = 43,560 × A × h × Φ × (1-Sw)/Bgi  
- **Uncertainty analysis**: Handling heterogeneous permeability in shale gas.  
- **Tool**: Monte Carlo simulation for probabilistic ranges.  
- **Source**: *Gas Reservoir Engineering* (Ahmed, SPE, 2006).  

---

## **Chapter 3: Recovery Factors – From Volumetric to Dynamic Estimates**  

- **Typical ranges**:  
  - 5-15% for solution gas drive  
  - 30-60% for water drive  
- **Carbonate vs. sandstone**: Impact of fracture connectivity.  
- **Source**: *AAPG Bulletin* (2015) on global recovery factor benchmarks.  

---

## **Chapter 4: Reserves Classification – SPE-PRMS Guidelines**  

- **Definitions**: Proved (1P), Probable (2P), Possible (3P) reserves.  
- **Case example**: How reservoir pressure data upgrades 2P to 1P.  
- **Source**: *SPE-PRMS* (2018) official document.  

---

## **Chapter 5: MBE Fundamentals – Mass Conservation Derivation**  

- **General equation**: N = NpBo + (Gp - NpRs)Bg - We + WinjBw  
- **Unit consistency**: Converting surface to reservoir volumes.  
- **Source**: *Applied Petroleum Reservoir Engineering* (Craft & Hawkins, 1991).  

---

## **Chapter 6: Solution Gas Drive MBE – p/Z Plot Interpretation**  

- **Linear form**: p/Z = pi/Zi - (Gp/G)  
- **Diagnostics**: Identifying aquifer support from plot deviations.  
- **Field example**: Haynesville Shale gas reservoir.  
- **Source**: *SPE Reservoir Evaluation & Engineering* (2017).  

---

## **Chapter 7: Gas Cap Drive MBE – Handling Two-Phase Expansion**  

- **Modified equation**: N(Bt - Bti) + mN(Bg - Bgi) = Np(Bt + (Rp - Rs)Bg)  
- **m calculation**: Using initial gas cap size.  
- **Tool**: Excel template for iterative solutions.  
- **Source**: *Advanced Reservoir Engineering* (Dake, 2001).  

---

## **Chapter 8: Water Drive MBE – Calculating Aquifer Influx (We)**  

- **Models**: Van Everdingen-Hurst (unsteady-state) vs. Fetkovich (pseudo-steady).  
- **MATLAB code**: Automating We calculations.  
- **Case**: North Sea waterdrive field.  
- **Source**: *Aquifer Engineering* (SPE Monograph, 2008).  

---

## **Chapter 9: Havlena-Odeh Method – Linearized MBE Diagnostics**  

- **Plot types**: F/Et vs. We/Et for drive mechanism identification.  
- **Tutorial**: Step-by-step analysis of a volatile oil reservoir.  
- **Source**: *SPE Journal* (1963) original paper.  

---

## **Chapter 10: MBE Sensitivity Analysis – Impact of PVT Data Errors**  

- **Key sensitivities**: Bo, Rs, and pressure measurement errors.  
- **Example**: ±10% error in Bo causing OOIP misestimation.  
- **Tool**: Tornado diagrams in @RISK.  
- **Source**: *Journal of Petroleum Technology* (2019).  

---

## **Chapter 11: Software for MBE – From Excel to Commercial Tools**  

- **Workflow comparison**:  
  - Excel: Manual Havlena-Odeh plots  
  - MBAL: Automated history matching  
  - Python: Custom scripts for uncertainty  
- **Source**: *SPE Software Survey* (2022).  

---

## **Chapter 12: Integrated Case Study – MBE in a Complex Reservoir**  

- **Challenge**: Combined gas cap + water drive + compaction.  
- **Solution**: Sequential MBE analysis with pressure compartments.  
- **Dataset**: Publicly available UAE carbonate field data.  
- **Source**: *SPE Annual Technical Conference* (2020).  

---

## **Key Sources:**  

1. **SPE Standards**:  
   - [SPE-PRMS 2018](https://www.spe.org/industry/docs/PRMS_Guidelines_2018.pdf)  
2. **Textbooks**:  
   - Craft & Hawkins (1991). *Applied Petroleum Reservoir Engineering*  
   - Dake (2001). *Advanced Reservoir Engineering*  
3. **Software**:  
   - [MBAL User Guide](https://www.petex.com/products/mbal/)  

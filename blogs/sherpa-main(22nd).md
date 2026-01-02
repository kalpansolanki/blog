---
publishDate: 2025-12-30T00:00:00Z
title: S.H.E.R.P.A – Edge-Based Wearable System for Early Detection of Acute Mountain Sickness
excerpt: A lumbar-mounted wearable system using context-aware sensor fusion and edge computing to detect early markers of Acute Mountain Sickness by distinguishing healthy exertion from pathological gait instability in real time.
image: 22nd-submission/gait.jpg
tags:
  - Wearable Technology
  - Embedded Systems
  - ESP32
  - Sensor Fusion
  - Edge Computing
  - Gait Analysis
  - Acute Mountain Sickness
---

> **Your brain may not work at high altitude. S.H.E.R.P.A. does.**

---

## Acknowledgements

We express our sincere gratitude to our mentor **Dr. Shams Ul Haq** for his exemplary guidance, valuable feedback, and continuous encouragement throughout the development of this project.

We also thank the **Department of Electronics & Communication Engineering** and the **Department of Electrical Engineering**, **Jamia Millia Islamia, New Delhi**, for providing the academic environment, infrastructure, and resources necessary for this work.

Finally, we acknowledge our colleagues and technical staff for their direct and indirect support during the course of this project.

---

## Project Team

- **Affan Danish** (Team Lead) – Electronics & Communication Engineering  
- **Mohd Zahaib Eqbal** – Electronics & Communication Engineering  
- **Ammar Rashid** – Electrical Engineering  
- **Mohd Maaz Quraishi** – Electronics & Communication Engineering  

**Institution:** Jamia Millia Islamia, New Delhi

---

## Overview

High-altitude mountaineering presents a critical safety challenge where environmental hostility is compounded by reduced human cognitive awareness. Hypoxia often impairs judgment before the individual realizes danger, making self-assessment unreliable.

S.H.E.R.P.A. (Surveillance for High-altitude Effects on Reflexes, Performance & Awareness) addresses this problem through a **standalone edge-computing wearable** that continuously monitors gait stability, balance, and rhythmic coordination. Unlike cloud-dependent systems or peripheral wearables, the device operates autonomously and focuses on **control metrics rather than output metrics**, enabling early detection of pathological instability associated with Acute Mountain Sickness (AMS).

**Key features:**

* Real-time detection of gait instability (ataxia)  
* Context-aware sensor fusion on the body’s center of mass  
* Edge-only operation (no cloud or network dependency)  
* Terrain-adaptive sensitivity using barometric feedback  
* Emergency intervention with gesture-based acknowledgement  

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="https://raw.githubusercontent.com/NavyStudent2893/S.H.E.R.P.A./refs/heads/patch-1/Index.jpg" width="800"><br/>
  <i>Energy Index Display</i>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/NavyStudent2893/S.H.E.R.P.A./refs/heads/patch-1/Index_2.jpg" width="800"><br/>
  <i>Device Interface View</i>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/NavyStudent2893/S.H.E.R.P.A./refs/heads/patch-1/circuit_Sherpa.jpg" width="800"><br/>
  <i>Circuit Diagram</i>
</p>

---


### **Videos**

**Presentation**
<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/U8Bf6p719Ro"></iframe>
</div>

**Demonstration**
<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/JfRc9E1AGzs"></iframe>
</div>

---


## Features (Detailed)

### **1. Orthogonal Gait Analysis Engine**

The system decouples movement **intensity** from **coordination** using three orthogonal indices:

- **EIRI (Energy Irregularity Index):** Measures exertion variance  
- **SIRI (Step Irregularity Index):** Detects arrhythmic gait patterns  
- **SSIRI (Stability Sway Irregularity Index):** Quantifies loss of balance  

Each index is computed using the coefficient of variation over a sliding window, enabling accurate distinction between healthy exertion and pathological instability.

---

### **2. Context-Aware Gain Scheduling**

A barometric pressure sensor identifies terrain state (Ascent, Descent, Flat) and dynamically adjusts sensor sensitivity:

- **Ascent:** Energy sensitivity reduced, sway sensitivity amplified  
- **Flat terrain:** Step rhythm sensitivity amplified to detect subtle ataxia  
- **High altitude:** Global risk multiplier increases system sensitivity  

This approach dramatically reduces false positives during strenuous activity.

---

### **3. AMS Risk Scoring Engine**

A weighted fusion of the three indices produces a real-time **AMS Score**:

\[
AMS = (K_{energy} \cdot EIRI) + (K_{step} \cdot SIRI) + (K_{stability} \cdot SSIRI)
\]

When the score exceeds a calibrated threshold, the system transitions into emergency mode.

---

### **4. Emergency Intervention & Feedback**

- Audible buzzer alarm  
- OLED display locked to **EMERGENCY – DESCEND** warning  
- Gesture-based acknowledgement using proximity sensor  
- Automatic return to monitoring after cooldown  

This ensures alerts are both noticeable and verifiable under extreme conditions.

---

### **5. Biomechanically Optimal Placement**

The device is mounted at the **posterior lumbar region (L3 vertebra)**, acting as a proxy for the body’s center of mass. This placement minimizes kinetic noise from limbs and soft tissue, significantly improving signal fidelity.

---

## Usage Instructions

### **Device Mounting & Initialization**
1. Secure the device to the posterior waist belt (L3 region)  
2. Ensure firm contact with the lumbar spine  
3. Power on the device (single beep confirms initialization)

### **Calibration Phase**
- Walk normally on flat terrain for **30 seconds**  
- System establishes baseline gait and sway metrics

### **Emergency Protocol**
- Alarm activates when AMS score exceeds threshold  
- Wave hand within **5 cm** of sensor to acknowledge alert  
- System resumes monitoring after cooldown  

---

## Tech Stack

### Hardware
- ESP32 (Dual-Core MCU)
- 6-Axis IMU (Accelerometer + Gyroscope)
- BMP180 Barometric Pressure Sensor
- OLED Display
- Buzzer Module
- Posterior Lumbar Mount (L3)

### Firmware
- C++ / Embedded C
- Real-time processing loop (50 Hz)
- Fully edge-based execution

### Algorithms
- Context-Aware Sensor Fusion
- Weighted Multi-Index System (EIRI, SIRI, SSIRI)
- Dynamic Gain Scheduling

---

## Requirements / Installation

### Firmware Libraries (Arduino / ESP32)

- `Wire.h`
- `I2Cdev`
- `MPU6050 MotionApps`
- `Adafruit BMP085 / BMP180`
- `Adafruit GFX`
- `Adafruit SSD1306`

### Python (Optional Dashboard & Analysis)

```bash
pip install numpy pandas matplotlib pyserial

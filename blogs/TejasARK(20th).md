---
publishDate: 2025-12-31T00:00:00Z
title: TejasArk – Sensor-Based AI Powered Solar Panel Monitoring System
excerpt: A sensor-based AI-powered solar panel monitoring system that enables real-time performance tracking, fault detection, and predictive maintenance using IoT sensing and intelligent analytics.
image: 20th-submission/tejasark_coverpage.png
tags:
  - MYOSA
  - Solar Energy
  - IoT Monitoring
  - Photovoltaic Systems
  - Predictive Maintenance
  - AI Analytics
---

> Improving solar panel reliability through continuous sensor-based monitoring and smart diagnostics.

---

## Acknowledgements

We, **Team TejasArk**, express our sincere gratitude to the **IEEE Sensors Council** and the **MYOSA 4.0** team for providing the platform, resources, and MYOSA Mini Kit that enabled the successful development of this project.

We are deeply thankful to our mentor **Ms. Valentina Basker** for her valuable guidance and technical insights throughout the project.

We also acknowledge the support of **St. Francis Institute of Technology** for providing the academic environment and encouragement necessary for the completion of this work.

---

## Overview

Solar photovoltaic (PV) systems often experience unnoticed performance degradation due to dust accumulation, environmental stress, shading, and hidden electrical faults. These issues lead to reduced energy output, increased maintenance costs, and shortened system lifespan.

TejasArk addresses these challenges through a sensor-driven IoT framework that continuously monitors voltage, current, temperature, irradiance, vibration, and environmental parameters in real time. A secondary AI-based analytics layer processes this data to detect faults, identify performance degradation trends, and provide predictive maintenance insights. The result is a low-cost, scalable, and self-diagnostic solar monitoring solution that improves efficiency and minimizes downtime.

**Key features:**

* Real-time solar panel performance monitoring  
* Multi-sensor environmental data acquisition  
* AI-assisted fault detection and prediction  
* Web-based dashboard for visualization  
* Low-cost and scalable IoT architecture  

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/20th-submission/mainpage.png" width="600"><br/>
  <i>TejasArk Web Portal – Main Page</i>
</p>

<p align="center">
  <img src="/assets/images/20th-submission/dashbaord1.png" width="600"><br/>
  <img src="/assets/images/20th-submission/dashboard2.png" width="600"><br/>
  <img src="/assets/images/20th-submission/responsive.png" width="600"><br/>
  <i>TejasArk Dashboard Views</i>
</p>

<p align="center">
  <img src="/assets/images/20th-submission/panel_front.png" width="400"><br/>
  <i>Solar Panel Front View with Sensors</i>
</p>

<p align="center">
  <img src="/assets/images/20th-submission/hardware_cir.png" width="400"><br/>
  <i>TejasArk Circuit Diagram</i>
</p>

<p align="center">
  <img src="/assets/images/20th-submission/cir_sideview.png" width="400"><br/>
  <i>Side View of Hardware Assembly</i>
</p>

<p align="center">
  <img src="/assets/images/20th-submission/front_sensor.png" width="400"><br/>
  <i>On-Panel Sensor Placement</i>
</p>

### **Videos**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/ZA6Cmpmh6hA"></iframe>
</div>

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/tCsTsO6hSgI"></iframe>
</div>

*Note: Video quality is reduced due to upload limitations.*

---

## Features (Detailed)

### **1. Multi-Parameter Solar Monitoring**

The system monitors voltage, current, power output, panel tilt, vibration, motion, RGB values, proximity, light irradiation, altitude, pressure, panel temperature, ambient temperature, and dust particulate matter.

### **2. IoT-Based Data Acquisition**

Sensor data is collected using the MYOSA motherboard and transmitted to the backend server in real time for processing and visualization.

### **3. AI-Assisted Fault Detection**

AI models analyse historical and real-time data to detect abnormal patterns, identify efficiency loss, and predict potential faults before they cause significant degradation.

### **4. Web-Based Monitoring Dashboard**

A responsive web portal provides live sensor readings, performance graphs, historical trends, and system health indicators for easy monitoring.

### **5. Predictive Maintenance Support**

Based on AI insights, the system recommends timely maintenance actions to reduce downtime and improve long-term reliability.

---

## Usage Instructions

1. Mount voltage, current, temperature, irradiance, and environmental sensors on the solar panel  
2. Power on the MYOSA board to initiate real-time data acquisition  
3. Access the web dashboard at `http://localhost:8080/`  
4. Monitor live values, performance trends, and system alerts  
5. Follow AI-based maintenance recommendations to improve efficiency  

---

## Tech Stack

### Frontend
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Bootstrap  
- EJS (Embedded JavaScript Templates)

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB Atlas  
- Mongoose ODM  

### IoT & Embedded
- MYOSA Motherboard  
- Solar Panel Sensors  
- Arduino IDE (C++)

### AI / Analytics
- Python  
- Flask  
- TensorFlow / Keras  
- Scikit-learn  
- NumPy & Pandas  

### Visualization & Tools
- Chart.js  
- Git & GitHub  
- VS Code  
- Render (Deployment)

---

## Requirements / Installation

### Web Portal Setup

```bash
git clone https://github.com/parthteredesai/TejasArk_portal.git
cd TejasArk_portal
npm install
npm start

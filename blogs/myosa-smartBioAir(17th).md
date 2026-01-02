---
publishDate: 2025-12-31T00:00:00Z
title: SmartBio Air: AI-Driven Indoor Algae Based Air Purification System Using MYOSA Mini IoT Kit
excerpt: An indoor air purification and research system integrating living algae, multi-sensor environmental sensing, Edge AI–based safety control, and Cloud AI–assisted research analysis using the MYOSA Mini IoT Kit.
image: 17th-submission/Banner.png
tags:
  - MYOSA Mini
  - IoT
  - Edge AI
  - Cloud AI
  - Algae-Based Air Purification
  - Environmental Monitoring
---

> AI-driven indoor air purification and research platform combining biological treatment, Edge AI safety, and cloud-based environmental analysis.

---

## Contributors

- **Nimalan P** – [@nimalan-parameswaran](https://github.com/nimalan-parameswaran)  
- **Dhakshatha M K** – [@DhakshathaMylsamy](https://github.com/DhakshathaMylsamy)

---

## Acknowledgements

We express our sincere gratitude to the **IEEE International MYOSA 4.0 Committee Members** for shortlisting this project and supporting it through the provision of a **USD 250 MYOSA Mini IoT Kit**.

We also thank the **IEEE Sensors Council** for encouraging student-led research and applied engineering initiatives.

Special thanks to **Dr. Dinesh Chellappan**, Centre for Research and Development, for his valuable technical guidance and mentorship throughout the project.

We further acknowledge **Ms. Pinki Dey**, Assistant Professor II, Department of Biomedical Engineering, for her support in the cultivation and maintenance of the *Spirulina* culture, which forms a core biological component of this system.

---

## Overview

**SmartBio Air** is an intelligent indoor air purification and experimental research platform that combines algae-based biological air treatment with multi-sensor environmental monitoring and intelligent control.

The system follows a hybrid intelligence approach: safety-critical and time-sensitive operations are executed locally on the MYOSA Mini IoT Kit using Edge AI and threshold-based logic, while long-term data analysis and research-oriented insights are handled through cloud-based AI services.

This architecture ensures uninterrupted and safe operation during network outages while enabling extended scientific observation when connectivity is available. SmartBio Air functions both as a practical indoor air purifier and a research platform for studying the relationship between air quality, environmental conditions, and algae growth behavior.

**Key features:**

* Algae-based biological air purification
* Multi-sensor indoor air quality monitoring
* Edge AI–based safety and motor pump protection
* Dual offline and online operating modes
* Cloud-assisted research and long-term analysis
* Autonomous operation during network unavailability

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/17th-submission/Img1.jpg" width="600"><br/>
  <i>SmartBio Air system prototype with algae chamber and MYOSA Mini IoT Kit</i>
</p>

### **Videos**

<p align="center">
  <img src="/assets/videos/17th-submission/Demo2.gif" width="100%">
</p>


<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/h595brKQ8pY"></iframe>
</div>

---

## Features (Detailed)

### **1. Algae-Based Air Purification**

The system incorporates a living microalgae (*Spirulina*) chamber that biologically absorbs carbon dioxide and certain airborne pollutants while producing oxygen through photosynthesis.

### **2. Multi-Sensor Environmental Monitoring**

Multiple MQ-series gas sensors, environmental sensors, and light sensors continuously monitor indoor air quality, temperature, humidity, and pollution levels.

### **3. Edge AI Safety and Motor Protection**

Time-sensitive decisions such as air quality response and motor pump health classification are executed locally on the MYOSA Mini using on-device inference and predefined safety thresholds.

### **4. Dual Operating Modes**

- **Offline Edge Mode:** Fully autonomous operation prioritising air purification and hardware safety without internet connectivity.
- **Online Cloud Mode:** Sensor data is transmitted to the cloud for research-oriented analysis, correlation, and visualization.

### **5. Cloud-Assisted Research Platform**

Cloud AI services store and analyse long-term sensor data to study the relationship between air pollution levels, environmental conditions, and algae growth behaviour.

---

## Usage Instructions

1. Power the MYOSA Mini IoT Kit and ensure all sensors are securely connected  
2. Allow MQ-series gas sensors sufficient warm-up time  
3. Observe air quality and system status on the OLED display  
4. In offline mode, the system operates fully on-device  
5. In online mode, sensor data is transmitted to the cloud for analysis  
6. Monitor trends and system insights through the web dashboard  

---

## Tech Stack

### Hardware

- MYOSA Mini IoT Kit (ESP32-based)
- MPU6050
- APDS9960
- BMP180
- SSD1306 OLED Display
- MQ-2, MQ-3, MQ-7, MQ-135 Gas Sensors
- L298N Motor Driver
- 6V DC Air Pump
- 3.3V Mini Fan
- 4-Channel 12V Relay Board
- 12V Plant Grow LED

### Firmware

- Arduino
- Edge Impulse TinyML inference

### Cloud

- Microsoft Azure Functions
- Azure OpenAI Services

### Frontend

- HTML
- CSS
- JavaScript
- GitHub Pages

---

## Requirements / Installation

- MYOSA Mini IoT Kit
- Arduino IDE or PlatformIO
- Edge Impulse account for model deployment
- Microsoft Azure account
- Stable power supply for continuous operation

Flash the firmware after configuring Wi-Fi credentials and cloud endpoints.

---

## File Structure (Optional)


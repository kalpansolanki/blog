---
publishDate: 2025-12-29T00:00:00Z
title: Sensor-Integrated Real-Time Anti-Drowsiness Safety System for Drivers Using MYOSA Platform
excerpt: A real-time driver safety system using the MYOSA platform that detects drowsiness and hazardous conditions through sensor fusion and provides instant voice-based alerts to prevent accidents.
image: 8th-submission/myosa-drowsiness.jpg.jpeg
tags:
  - MYOSA Platform
  - Embedded Systems
  - Sensor-Based Safety System
  - Voice-Based Alert System
---

> Real-time driver drowsiness detection with intelligent voice alerts for safer driving.

---

## Acknowledgements

We gratefully acknowledge the **IEEE Sensors Council** for providing the MYOSA hardware kit, which enabled the successful implementation of this sensor-integrated system.

We also thank the management, Principal, and the Department of Electrical and Electronics Engineering, **New Horizon College of Engineering, Bengaluru**, for offering the necessary infrastructure and academic support.

Our sincere gratitude goes to **Dr. M. Karthika**, Associate Professor, for her invaluable guidance and encouragement throughout the project. Finally, we thank our friends and families for their continued motivation and support.

---

## Overview

The Sensor-Integrated Real-Time Anti-Drowsiness Safety System for Drivers, developed using the MYOSA platform, aims to enhance road safety by continuously monitoring driver alertness and surrounding environmental conditions.

The system analyses eye-blink patterns, motion behaviour, and gas concentration in real time. When abnormal or unsafe conditions are detected, immediate voice-based alerts are issued to the driver, enabling timely corrective action. The architecture offers a low-cost, reliable, and scalable solution suitable for intelligent transportation and advanced driver assistance systems.

**Key features:**

* Real-time driver alertness monitoring
* Multi-sensor data fusion on MYOSA platform
* Threshold-based decision algorithms
* Speaker-based voice alert system
* Low-latency embedded processing
* Compact and energy-efficient design

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/8th-submission/myosa-drowsiness.jpg.jpeg" width="800"><br/>
  <i>Hardware implementation of the MYOSA-based real-time anti-drowsiness safety system</i>
</p>

### **Videos**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/m2QsTFZ9kG0"></iframe>
</div>

---

## Features (Detailed)

### **1. Driver Drowsiness Detection**

An IR-based eye-blink sensor mounted on the driver’s spectacles monitors eyelid closure duration and blink frequency. Prolonged eye closure beyond predefined thresholds is interpreted as drowsiness.

### **2. Motion and Orientation Monitoring**

The MPU6050 accelerometer and gyroscope continuously measure driver movement and orientation to detect abnormal behaviour indicative of fatigue or unsafe driving conditions.

### **3. Gas Leakage Detection**

The MQ2 gas sensor monitors the presence of harmful gases such as smoke or alcohol vapours inside the vehicle cabin, triggering alerts if unsafe concentrations are detected.

### **4. Voice-Based Alert System**

Upon detecting drowsiness, gas leakage, or abnormal motion, the system activates a DFPlayer Mini module connected to a speaker to play pre-recorded warning messages such as *“Drowsiness detected”* or *“Alert! Gas detected”*.

### **5. Visual Feedback via OLED Display**

All sensor readings and system status messages are displayed in real time on a 128×64 SSD1306 OLED screen, providing clear visual feedback alongside audio alerts.

---

## Usage Instructions

* Ensure the MYOSA platform is powered using a stable 5V supply.
* Mount the eye-blink sensor on the driver’s spectacles and align it correctly.
* Switch ON the system and allow sensors to initialize and calibrate.
* During vehicle operation, the system continuously monitors driver alertness.
* If drowsiness or hazardous conditions are detected, a voice alert is triggered automatically.
* The driver should respond by taking appropriate corrective action.
* Power OFF the system after vehicle operation is completed.

---

## Code

```cpp
// (Your full Arduino C/C++ code remains unchanged here)

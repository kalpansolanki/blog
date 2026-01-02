---
publishDate: 2025-12-28T00:00:00Z
title: Distributed Smart Actuator System for Collaborative Robots (Co-Bots)
excerpt: A distributed smart actuator system for collaborative robots using the MYOSA Mini IoT board, where each actuator performs local sensing, TinyML-based anomaly detection, and autonomous corrective control to reduce fault detection latency and improve safety during human–robot interaction.
image: 18th-submission/Co-Bot-sample-1.jpeg
tags:
  - MYOSA Mini
  - Collaborative Robots
  - TinyML
  - Fault Detection
  - Embedded Systems
  - Industrial IoT
---

> Enabling safer and faster collaborative robots through intelligent, decentralized actuator control.

---

## Acknowledgements

We sincerely thank the management of **Loyola-ICAM College of Engineering and Technology (LICET)** for their encouragement and support in carrying out this work.

We are deeply grateful to the **Director, Dean of Students, and Principal** for their guidance and motivation throughout the project.

We extend our heartfelt thanks to **Dr. I. William Christopher**, Professor, Department of Electrical and Electronics Engineering, for his valuable mentorship and technical guidance.

We also acknowledge the **Department of Electrical and Electronics Engineering** and the **Department of Electronics and Communication Engineering** for their academic support, constructive suggestions, and encouragement, which contributed significantly to the successful completion of this study.

---

## Overview

Conventional collaborative robot (co-bot) systems rely on centralized controllers for monitoring and decision-making. This architecture introduces communication delays when detecting actuator-level faults such as motor stalling, slippage, imbalance, or overload.

Such delays can lead to unsafe movements and reduced precision, especially during close human–robot interaction. This project addresses these limitations by decentralizing intelligence directly to the actuator level. Each actuator node independently performs sensing, anomaly detection, and corrective control, enabling immediate response without dependence on centralized commands.

**Key features:**

- Distributed actuator-level intelligence  
- Real-time fault and anomaly detection  
- TinyML-based local inference  
- Autonomous corrective motor control  
- Reduced communication latency  
- Improved human–robot safety  

---

## Demo / Examples

### Images
<p align="center">
  <img src="/assets/images/18th-submission/Co-Bot-sample-1.jpeg" width="800"><br/>
</p>

<p align="center">
  <img src="/assets/images/18th-submission/Co-Bot-sample-2.jpeg" width="800"><br/>
</p>

<p align="center">
  <img src="/assets/images/18th-submission/Co-Bot-sample-3.jpeg" width="800"><br/>
</p>

<p align="center">
  <img src="/assets/images/18th-submission/Co-Bot-team.jpeg" width="800"><br/>
</p>


### Videos
**Demonstration**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/Az9MyzpZ1T8"></iframe>
</div>

<br>

**Presentation**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/uxSSRntSumM"></iframe>
</div>

---

## Features (Detailed)

### 1. Real-Time Actuator Health Monitoring

Each actuator continuously monitors vibration and angular motion using an MPU6050 IMU sensor to evaluate mechanical health in real time.

### 2. TinyML-Based Anomaly Detection

A TinyML model deployed on the MYOSA Mini IoT board classifies actuator behavior into normal and faulty states, detecting anomalies such as stalling, slippage, and imbalance.

### 3. Autonomous Local Corrective Control

Upon detecting an anomaly, the actuator node autonomously regulates or stops the motor using PWM control, ensuring immediate fault mitigation without external intervention.

### 4. Distributed System Architecture

Decentralized decision-making eliminates dependency on a central controller, reducing communication overhead and improving scalability and fault tolerance.

### 5. Event-Driven and Energy-Efficient Operation

Event-driven sampling minimizes unnecessary computation and allows the system to enter low-power modes during stable operating conditions.

---

## Usage Instructions

1. Power the MYOSA Mini IoT board and ensure all sensors are securely connected  
2. Upload the firmware containing TinyML inference and actuator control logic  
3. Allow the IMU sensor to initialize and stabilize  
4. Operate the actuator under normal conditions  
5. Introduce fault scenarios such as stall or overload for testing  
6. Observe autonomous corrective action and status updates via display or wireless interface  

---

## Tech Stack

### Hardware
- MYOSA Mini IoT Board (ESP32-based)
- MPU6050 IMU Sensor
- APDS9960 Proximity Sensor
- SSD1306 OLED Display
- L293D Motor Driver
- Regulated Power Supply

### Software & Tools
- Arduino IDE
- Edge Impulse Studio (TinyML)
- Blynk IoT Platform

---

## Requirements / Installation

- MYOSA Mini IoT Kit  
- Arduino IDE  
- Edge Impulse account for model training and deployment  
- Blynk IoT account (optional)  
- Stable power supply  

Flash the firmware after configuring actuator parameters and communication settings.

---

## Limitations

- Prototype demonstrates a single actuator node rather than a full multi-axis system  
- TinyML model accuracy depends on training data quality  
- Limited computational resources constrain model complexity  

---

## Future Improvements

- Deployment of multiple synchronized actuator nodes  
- Adaptive or online learning for improved detection accuracy  
- Integration of additional diagnostic sensors  
- Cloud-based analytics for long-term performance monitoring  

---

## License

This project is intended for academic and research purposes and may be released under an open-source–friendly license subject to institutional and MYOSA guidelines.

---

## Contribution Notes

Contributors are encouraged to clearly document experimental setups, actuator parameters, and training datasets when submitting improvements or extensions.

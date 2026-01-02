---
publishDate: 2026-01-01T00:00:00Z
title: SitX – Smart Posture Correction Jacket
excerpt: A smart wearable jacket that monitors sitting posture in real time and actively corrects poor posture using pneumatic feedback, sensor fusion, and IoT-based analytics.
image: 25th-submission/coverr.jpg
tags:
  - IoT
  - Wearable Technology
  - Health Innovation
  - ESP32
  - Smart Posture
  - MQTT
  - Flutter
  - Node.js
---

> Monitor and correct your sitting posture in real time using intelligent pneumatic feedback.

---

## Contributors

The SitX project is the result of a multidisciplinary collaboration:

- **Doaa Mohamed** – Web Development  
  GitHub: https://github.com/mdoaa  

- **Abdulrahman Ehab** – Hardware Design  
  GitHub: https://github.com/Abdo2496  

- **Rawan Ahmed** – Mobile Application Development  
  GitHub: https://github.com/rrahmed43  

- **Omar Ahmed** – Data Analysis & Firmware Development  
  GitHub: https://github.com/Opop1omar4645545  

- **Farah Abdel-Fattah** – System Integration  
  GitHub: https://github.com/farah2375  

---

## Overview

SitX is a smart wearable posture-correction jacket designed to reduce physical strain caused by prolonged sitting. Unlike passive posture-monitoring systems that rely solely on notifications, SitX provides **active physical correction** through integrated pneumatic air chambers.

The jacket continuously analyses spinal alignment using force and inertial sensors. When sustained poor posture is detected, SitX delivers corrective feedback through controlled pneumatic inflation and haptic alerts. User progress and posture analytics are accessible through a Flutter-based mobile application, while system data is managed by a Node.js backend using MQTT for real-time communication and MongoDB Atlas for long-term storage.

**Key features:**

- Continuous posture and spinal alignment monitoring  
- Active physical correction using pneumatic air chambers  
- Redundant Wi-Fi and multi-broker MQTT communication  
- Mobile-based posture analytics and severity tracking  
- Fully integrated wearable IoT architecture  

---

## Demo / Examples

### Images

<p align="center">
  <img src="/assets/images/25th-submission/front.jpg" width="200">
  <img src="/assets/images/25th-submission/back.jpg" width="200">
  <img src="/assets/images/25th-submission/hardware.jpg" width="400">
  <img src="/assets/images/25th-submission/mobilee.jpg" width="200"><br/>
  <i>Front view, corrective chambers, ESP32 hardware, and mobile dashboard</i>
</p>

### Videos

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/aUsZM1RteMQ"></iframe>
</div>

---

## Features (Detailed)

### **1. Multi-Sensor Fusion**

SitX processes data from four Force Sensitive Resistors (FSRs) and an MPU6050 accelerometer/gyroscope from the MYOSA kit. By computing pitch and roll angles relative to a calibrated reference position, the system constructs a digital model of spinal posture to identify slouching, leaning, and twisting patterns.

---

### **2. Active Pneumatic Feedback System**

If poor posture persists for more than 15 seconds, pneumatic air pumps inflate dedicated air chambers embedded in the jacket. This provides a physical nudge that encourages the user to correct their posture. A vibration motor wave acts as a secondary alert mechanism.

---

### **3. Industrial-Grade Connectivity**

The firmware implements a fault-tolerant network stack capable of switching between multiple Wi-Fi SSIDs and MQTT brokers. Sensor data is transmitted every five seconds in a compressed JSON format using the ESP32 module supplied through the MYOSA program.

---

## Usage Instructions

### **1. Hardware Operation and Calibration**

- **Initial Calibration:**  
  Wear the jacket and sit in an ideal upright position. Short-press the right button to store the current pitch, roll, and FSR values as the reference posture. The OLED displays *CALIBRATED* upon success.

- **Manual Valve Override:**  
  Long-press the right button for two seconds to deflate pneumatic chambers manually.

- **Haptic Feedback Toggle:**  
  Short-press the left button to enable or disable vibration alerts. Status is shown on the OLED display.

---

### **2. Logic and Actuation Flow**

1. **Detection:** Sensors are polled every 100 ms.  
2. **Validation:** Posture deviation thresholds (e.g., pitch > 10°) initiate a timer.  
3. **Haptic Alert:** After 15 seconds of continuous deviation, vibration feedback is triggered.  
4. **Pneumatic Correction:** If posture is not corrected, air chambers inflate.  
5. **Data Synchronization:** System state and posture metrics are published via MQTT every 5 seconds.

---

## Tech Stack

- **Mobile Application:** Flutter with GetX  
- **Web Interface:** React  
- **Backend Communication:** Node.js with MQTT  
- **Database:** MongoDB Atlas  
- **Firmware:** C++ / Arduino (ESP32)  

---

## Requirements / Installation

### Prerequisites

- Node.js v18 or higher  
- npm  
- Flutter SDK  
- Arduino IDE with ESP32 board support  

---

### Backend (Node.js)

```bash
cd web/backend
npm install
npm start

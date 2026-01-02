---
publishDate: 2025-12-30
title: Smart Protective Vest for Night-Time Safety
excerpt: A wearable safety vest that detects unsafe night-time movement and provides alerts with automatic protective inflation.
image: 23rd-submission/cover-image.jpeg
tags:
  - wearable
  - healthcare
  - iot
  - safety
---

> A smart wearable vest that detects unsafe movement at night and protects vulnerable users through alerts and automatic inflation.

---

## Overview

The Smart Protective Vest is designed for individuals who are at risk during night-time movement, such as sleepwalking patients, elderly users, or people with neurological or cognitive conditions.  
Unexpected movement at night can lead to falls, collisions with furniture, or serious injuries.

This vest continuously monitors the user’s motion and posture using multiple sensors.  
When abnormal movement is detected, the system first alerts the user with a buzzer. If the user is conscious, they can cancel the alert using a dedicated button. If no response is received, the vest automatically inflates protective air bladders to reduce injury risk.

For user safety and comfort, the vest also includes a **manual quick-release valve** that allows the user or caregiver to instantly deflate the air bladders whenever required.

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/23rd-submission/cover-image.jpeg" width="800"><br/>
  <i>Smart Protective Vest – complete prototype</i>
</p>

<p align="center">
  <img src="/assets/images/23rd-submission/Vest-worn-by-user.jpeg" width="800"><br/>
  <i>Vest worn by the user in normal condition</i>
</p>

<p align="center">
  <img src="/assets/images/23rd-submission/setup.jpeg" width="800"><br/>
  <i>Electronics, sensors, and inflation system setup</i>
</p>

### **Videos**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/fdNK3MtSFVo"></iframe>
</div>

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/i5cTle_P5pA"></iframe>
</div>
---

## Features (Detailed)

### **1. Multi-Sensor Movement Detection**
The vest uses multiple sensors to detect unsafe night-time movement:
- **MPU6050 (Accelerometer & Gyroscope):** detects sudden body motion and orientation changes.
- **BMP180 (Pressure Sensor):** detects small height changes when the user moves from lying to standing.
- **APDS9960 (Gesture/Proximity Sensor):** detects proximity and contextual movement near the body.

A rule-based approach combines these inputs to reduce false alerts.

---

### **2. Alert and Manual Override**
When unsafe movement is detected:
- A buzzer alerts the user immediately.
- If the user is awake and stable, they can press the **cancel button** to stop the alert.
- This ensures the system does not activate unnecessarily.

---

### **3. Automatic Protective Inflation**
If no response is received within a safety time window:
- A high-power air pump inflates PVC/TPU air bladders integrated into the vest.
- These bladders provide cushioning around vulnerable areas such as the arms, neck, and upper torso.
- This reduces injury risk from falls or collisions.

---

### **4. Manual Quick-Release Deflation**
For safety and comfort, the vest includes a **manual quick-release valve**:
- Allows instant deflation of all air bladders
- Can be operated by the user or caregiver
- Ensures the vest never restrains the user unintentionally
- Enables quick reset of the system for the next use

This feature provides an essential mechanical safety fallback independent of electronics.

---

### **5. OLED Status Display**
An **SSD1306 OLED display** provides real-time system feedback:
- Normal state
- Alert state
- User cancellation
- Inflation status

This makes the system transparent and easy to understand for caregivers.

---

### **6. Event Logging Using Micro SD Card**
A **HW-125 Micro SD card module** logs important events such as:
- Unsafe movement detection
- Alert activation
- User response
- Inflation triggering

These logs can be reviewed later by caregivers or clinicians.

---

### **7. Expandable Caregiver Notification**
The ESP32 supports Bluetooth and Wi-Fi connectivity.  
Future versions can transmit alerts wirelessly to caregivers for remote monitoring.

---

## Usage Instructions

1. The user wears the vest before sleeping.
2. The system continuously monitors motion and posture.
3. If unsafe movement is detected:
   - The buzzer alerts the user.
4. If the user is awake:
   - Press the cancel button to stop the alert.
5. If no response is detected:
   - The vest inflates protective air bladders automatically.
6. At any time:
   - The **manual quick-release valve** can be used to deflate the vest instantly.
7. All events are logged to the SD card.

---

## Core Firmware Logic (Representative)

```cpp
if (movementDetected && postureChanged) {
  buzzerOn();
  startTimer();

  if (cancelPressed()) {
    buzzerOff();
    logEvent("Alert cancelled by user");
  } else if (timerExpired()) {
    buzzerOff();
    startInflation();
    logEvent("Inflation triggered");
  }
}

## Tech Stack

ESP32 Microcontroller
MPU6050 IMU
BMP180 Pressure Sensor
APDS9960 Gesture Sensor
SSD1306 OLED Display
HW-125 Micro SD Card Module
Arduino IDE
Embedded C/C++

## Requirements / Installation
Arduino IDE with ESP32 board support

Required libraries:

Adafruit_SSD1306
Adafruit_GFX
Adafruit_BMP085
Adafruit_APDS9960
MPU6050

## Acknowledgements
This project was developed as part of the IEEE MYOSA initiative under the IEEE Sensors Council, encouraging innovative sensor-based humanitarian solutions.
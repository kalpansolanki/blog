---
publishDate: 2025-12-29

title: Smart Pothole Detection System using MYOSA Kit

excerpt: An embedded system that detects potholes using MPU6050 and logs road condition events through the MYOSA platform for infrastructure monitoring.

image: 5th-submission/pitstop-cover.jpg

tags:
  - embedded
  - iot
  - smart-city
  - road-safety
  - myosa
---


> An affordable system to identify pothole-affected road segments for timely road maintenance.

---

## Acknowledgements

This project was developed under the MYOSA Event 4.0 at COEP Technological University by Team Pitstop.

---

## Overview

Poor road conditions and potholes are a major cause of vehicle damage and accidents. This project focuses on **monitoring pothole-affected road segments**, not on tracking vehicles or riders.

The MYOSA kit includes an in-built MPU6050 accelerometer and gyroscope module. This project uses the native sensing capability of the MYOSA hardware to detect pothole-affected road segments.

The system detects abnormal vertical vibrations when a vehicle passes over a pothole and logs these events using the MYOSA platform so that authorities can study road quality and take corrective action.

**Key features:**

* MPU6050 based vibration sensing  
* OLED based pothole warning display  
* Audible buzzer alert  
* BLE based data logging to MYOSA app  

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/5th-submission/hardware-setup.jpg" width="800"><br/>
  <i>Complete system setup using MYOSA kit</i>
</p>

<p align="center">
  <img src="/assets/images/5th-submission/bike-testing.jpeg" width="800"><br/>
  <i>Testing the system developed using MYOSA kit</i>
</p>

### **Videos**

<ins>The videos are made locally available.</ins> But due to GitHub preview size limitations, the demo videos may not play directly in the browser.
Please download the MP4 files to view the complete demonstration.

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/EwpFhBIEHvs"></iframe>
</div>
<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/4Q7EvrjGQtY"></iframe>
</div>



---

## Features (Detailed)

### **1. Vibration Based Pothole Detection**

The MPU6050 continuously measures acceleration values.  
A sudden spike in Z-axis acceleration beyond a predefined threshold is classified as a pothole event.
Code snippet monitoring the acceleration in Z direction:
```cpp
float dz = z - prevZ;
if (abs(dz) > POTHOLE_THRESHOLD) {
  myosa.turnOnBuzzer(0);
  myosa.display.println("WARNING");
  myosa.display.println("POTHOLE");
}
```

### **2. OLED Warning Display**

<p align="center">
  <img src="/assets/images/5th-submission/warning-display.jpg" width="800"><br/>
  <i>OLED displaying pothole detection warning</i>
</p>

Once a pothole is detected, the OLED display shows:

**WARNING  
POTHOLE**

to visually indicate road damage, otherwise it displays: **Road Okay**

### **3. Audible Buzzer Alert**

A buzzer is triggered to provide an audio indication of detection.

### **4. MYOSA BLE Data Logging**

<p align="center">
  <img src="/assets/images/5th-submission/myosa-app-data.jpg" width="400"><br/>
  <i>Acceleration spikes visible on MYOSA app during pothole detection</i>
</p>

Sensor readings are transmitted to the MYOSA mobile application for later analysis of affected road segments. The MYOSA app visualizes real-time acceleration values, where sharp Z-axis spikes represent pothole events, as shown in the app graph screenshot.

---

## Usage Instructions

1. Power the MYOSA kit and connect the MPU6050 module.
2. Upload the code using Arduino IDE.
3. Open the MYOSA mobile app and connect using BLE.
4. Place the device on a moving vehicle.
5. Pothole events will be logged automatically.

---

## Tech Stack

* **MYOSA Edu Kit** (containing a motherboard, an accelerometer and gyroscope module, a buzzer and an OLED display)
* **Arduino IDE**
* **Embedded C++**
* **MYOSA Android Application**

---

## Requirements / Installation

```bash
Install Adafruit MPU6050 Library
Install Adafruit Unified Sensor Library
Install MYOSA Library

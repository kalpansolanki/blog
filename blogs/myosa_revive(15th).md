---
publishDate: 2025-12-30
title: ReVive – Smart EV Safety Backup System Using MYOSA Mini IoT Kit
excerpt: ReVive is an intelligent EV safety backup system that predicts crash and slope risks in real time, assists steering and braking decisions, and remains operational through a dedicated LiPo-based backup power system with live IoT monitoring.
image: 15th-submission/cover_page.jpg
tags:
  - MYOSA Platform
  - Electric Vehicles
  - Embedded Systems
  - Safety Systems
  - IoT Monitoring
---

> Power reclaimed at every stop — when braking becomes backup power.  
> **Reclaim. Recharge. ReVive**

---

## Acknowledgements

We sincerely thank **MYOSA**, the **IEEE Sensors Council**, and **Pandit Deendayal Energy University (PDEU)** for providing the MYOSA Mini IoT Kit and platform to explore real-world sensor-based innovations.

We also express our gratitude to our faculty mentor **Dr. Abhishek Gor** for his guidance and support, and for providing access to laboratory facilities during the development of this prototype.

---

## Overview

The rapid evolution of electric vehicles introduces a critical safety challenge: complete power failure during emergencies. In such situations, essential safety systems may fail precisely when they are needed most.

**ReVive** addresses this problem by acting as an intelligent safety backup layer for electric vehicles. It integrates regenerative braking, smart power switching, sensor intelligence, and real-time IoT monitoring using the MYOSA Mini IoT Kit and ESP32 microcontroller.

The system predicts potential crash scenarios in advance, assists steering and braking decisions, and remains operational even during primary battery failure using a dedicated LiPo backup power source. ReVive converts raw sensor data into real-time decisions, enabling proactive safety instead of reactive response.

**Key features:**

* Regenerative braking energy recovery
* Dual power architecture with automatic switching
* Intelligent pre-crash prediction
* Emergency ReVive fail-safe mode
* Steering assist and braking logic
* Live IoT dashboard monitoring

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/15th-submission/sideview.jpg" width="800"><br/>
  <i>Side view of the ReVive prototype system</i>
</p>

<p align="center">
  <img src="/assets/images/15th-submission/topview.jpg" width="800"><br/>
  <i>Top view showing sensor and power architecture</i>
</p>

<p align="center">
  <img src="/assets/images/15th-submission/esp32.jpg" width="800"><br/>
  <i>ESP32 controller with buck converter and relay module</i>
</p>

<p align="center">
  <img src="/assets/images/15th-submission/sensor.jpg" width="800"><br/>
  <i>Live sensor readings and energy monitoring</i>
</p>

<p align="center">
  <img src="/assets/images/15th-submission/regenerative_braking.jpg" width="800"><br/>
  <i>Regenerative braking energy recovery demonstration</i>
</p>

<p align="center">
  <img src="/assets/images/15th-submission/slope.jpg" width="800"><br/>
  <i>Slope detection displayed on OLED</i>
</p>

<p align="center">
  <img src="/assets/images/15th-submission/buzzer.jpg" width="800"><br/>
  <i>Buzzer-based alert system</i>
</p>

---

### **Videos**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/oEldVJIImo4"></iframe>
</div>
---

## Features (Detailed)

### **1. Regenerative Braking Energy Recovery**

ReVive incorporates regenerative braking that converts kinetic energy into electrical energy during manual braking. The recovered energy is stored and later used during emergency situations when the primary power source fails.

This ensures critical safety systems remain operational even after complete battery failure.

---

### **2. Dual Power Backup with Intelligent Switching**

A relay-controlled dual power architecture enables seamless switching between the main battery and a LiPo backup battery.

| System State | Power Source | ESP32 Mode | Vehicle Behavior |
|-------------|-------------|-----------|------------------|
| Main Battery ON | Main Battery | Normal Mode | Motors active, sensors operational |
| Main Battery OFF | LiPo Backup | Emergency ReVive Mode | Motors off, steering assisted, alerts active |

This ensures uninterrupted operation of safety intelligence under all conditions.

---

### **3. Alert-Based Emergency ReVive Mode**

When the main battery fails, ReVive automatically enters Emergency Mode:

* Buzzer activates for immediate attention
* OLED displays **“EMERGENCY – ReVive ACTIVE”**
* Sensors continue monitoring in real time
* IoT dashboard remains active

This local alert system improves safety even if external displays fail.

---

### **4. Intelligent Pre-Crash Prediction**

Using the MPU6050 sensor, ReVive continuously monitors tilt angle, acceleration, and slope conditions. Unsafe thresholds trigger pre-crash warnings before an accident occurs.

* Real-time slope risk percentage
* Energy level awareness on OLED
* Proactive safety decision-making

This transforms inertial data into actionable intelligence.

---

### **5. Emergency Steering Assist & Braking Logic**

During critical failures:

* Steering is electronically locked to a safe neutral position
* Software-based braking logic prevents uncontrolled motion
* Alerts and monitoring remain active via LiPo power

The system mimics a biological fail-safe response, prioritizing protection even during hardware failure.

---

### **6. Proximity Detection and Awareness Alerts**

ReVive uses proximity sensing to detect nearby objects:

* OLED displays **“ALERT – Object Near”**
* Energy level remains visible
* Enhances safety in low-visibility and close-range situations

This adds an environmental awareness layer to the safety system.

---

## Usage Instructions

### How to Demonstrate ReVive

1. **Power Up**
   * Activate main battery
   * ESP32 boots and initializes sensors

2. **Normal Operation**
   * Motors and steering operate normally
   * Dashboard shows live data

3. **Regenerative Braking Demo**
   * Activate manual braking
   * Observe energy level increase on OLED

4. **Emergency Simulation**
   * Disconnect main battery
   * System switches to LiPo backup
   * Alerts activate and steering locks

5. **Monitoring**
   * Observe live crash risk, slope warnings, and energy data on dashboard

---

## How It Works

### Crash Risk Detection
```cpp
tiltAngle = atan(sqrt(ax*ax + ay*ay) / abs(az)) * 57.3;
accMag = sqrt(ax*ax + ay*ay + az*az);

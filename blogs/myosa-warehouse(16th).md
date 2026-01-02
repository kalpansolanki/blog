---
publishDate: 2025-12-31
title: Warehouse Management Using IoT
excerpt: An IoT-based warehouse monitoring system using MYOSA ESP32 for safety and automation.
image: 16th-submission/cover.jpg
tags:
  - iot
  - warehouse
  - esp32
  - myosa
---

> Smart warehouse monitoring using MYOSA ESP32 with cloud and BLE integration.

---

## Acknowledgements
This project is developed as part of the MYOSA (LearnTheEasyWay) initiative by MakeSense EduTech and Pegasus Automation, with technical inspiration and learning support aligned with the IEEE Sensors Council.  
The project idea was academically inspired by the journal *IoT Based Intelligent Warehouse Monitoring and Alerting System.*


---

## Overview
This project demonstrates an IoT-based warehouse management system using the MYOSA motherboard.
It monitors environmental parameters such as temperature, air quality, pressure, and light intensity
to ensure safety and automation in warehouse environments.

**Key features:**
* Real-time sensor monitoring
* BLE communication with Android app
* OLED-based local display
* Alert generation using buzzer and relay
* Cloud visualization using ThingSpeak

---

## Demo / Examples

### **Images**
<p align="center">
  <img src="/assets/images/16th-submission/control-flow.jpg" width="800"><br/>
  <i>Control flow of MYOSA Project</i>
</p>

<p align="center">
  <img src="/assets/images/16th-submission/iot1.jpg" width="800"><br/>
  <i>ThingSpeak iot dashboard1</i>
</p>

<p align="center">
  <img src="/assets/images/16th-submission/iot2.jpg" width="800"><br/>
  <i>ThingSpeak</i>
</p>



### **Videos**
<video controls width="100%">
  <source src="/assets/videos/16th-submission/gas-ventilation.mp4" type="video/mp4">
</video>

<video controls width="100%">
  <source src="/assets/videos/16th-submission/fire-extinguisher.mp4" type="video/mp4">
</video>




---

## Features (Detailed)

### **1. IoT-Based System Architecture**
The MYOSA ESP32 acts as an IoT controller, enabling sensor data acquisition, wireless communication, and integration with cloud and mobile platforms.

### **2. Environmental Monitoring**
The system continuously monitors temperature, air quality, pressure, and ambient light using MYOSA-supported sensors.

### **3. BLE Communication**
Sensor data is transmitted via BLE to the MYOSA Android application for real-time visualization.

### **4. Local Display and Alerts**
Sensor values are displayed on an OLED screen and alerts are generated when thresholds are exceeded.

### **5. Control Flow Description**

The MYOSA-based warehouse monitoring system follows a multi-sensor decision-driven control flow to ensure reliable detection of hazards such as fire, gas leakage, and intrusion.

1. The ESP32-based MYOSA controller continuously acquires data from multiple sensors including temperature, humidity, gas, light (LUX), motion, proximity, RGB, accelerometer/gyroscope, and gesture sensors.

2. Sensor data is not evaluated in isolation. Instead, multiple parameters are correlated before triggering any safety action.

3. **Fire Detection Logic:**  
   An increase in temperature alone does not directly trigger a fire alert. The system cross-verifies temperature rise with additional indicators such as gas concentration, abnormal RGB/light patterns, and humidity changes. Only when multiple conditions indicate a potential fire risk does the system activate safety responses such as the fan, buzzer, and mobile alerts. This multi-input validation significantly reduces false alarms.

4. **Ventilation and Cooling Control:**  
   The fan or cooling system is activated based on a combination of rising temperature, air quality degradation, and pressure variations, ensuring efficient environmental control rather than reacting to a single parameter.

5. **Intrusion Detection Logic:**  
   Intrusion is detected by correlating motion, proximity, and light intensity data. For example, the presence of light during nighttime combined with motion or proximity sensing strengthens the intrusion confirmation. Additional inputs such as accelerometer data (vibrations) further validate unauthorized access.

6. Confirmed abnormal conditions are displayed locally on the OLED screen and transmitted via BLE to the mobile application. Critical events are also logged to the cloud for remote monitoring and analysis.

7. When danger is confirmed, alerts are generated through the buzzer,controlled actuators, and mobile notifications to ensure immediate response.

This multi-sensor, decision-based control flow enhances system reliability by avoiding single-parameter dependency, making the warehouse monitoring system robust, accurate, and suitable for real-world industrial environments.


---

## Usage Instructions
1. Connect all MYOSA sensor modules to the controller board.
2. Upload the MYOSA master code using Arduino IDE.
3. Power the board using USB-C.
4. Install the MYOSA Android app and connect via Bluetooth.

---

## Tech Stack
* ESP32 (MYOSA Motherboard)
* Arduino IDE
* C/C++
* Bluetooth Low Energy (BLE)
* ThingSpeak
* Android (MYOSA App)

---

## Requirements / Installation
* Arduino IDE 2.x
* ESP32 Board Package
* MYOSA Libraries
* Android phone with Bluetooth support

---

## File Structure
/myosa-warehouse-management
* myosa-warehouse-management.md
* cover.jpeg
* control-flow.jpeg
* iot1.jpeg
* iot2.jpeg
* fire-extinguisher.mp4
* gas-ventilation.mp4




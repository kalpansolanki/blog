---
publishDate: 2025-12-30
title: Gesture-Based Automation Hub
excerpt: A touchless 3-channel home automation system powered by APDS9960 gestures.
image: 6th-submission/cover.jpg
tags:
  - myosa
  - gesture-control
  - automation
  - embedded-system
---

> A fully offline, touchless gesture-based controller for multi-device home automation.

---

## Acknowledgements

This project has been developed as part of the **MYOSA Hardware Challenge**.  
I would like to thank the MYOSA team for providing the hardware kit, clear guidelines, and an opportunity to explore gesture-based automation systems.

---

## Overview

The **Gesture-Based Automation Hub** is a touchless control system designed to operate multiple electrical appliances using simple hand gestures.

Unlike conventional home automation systems that rely on:
- Internet connectivity  
- Mobile applications  
- Physical switches  
- Voice assistants  

this system works **completely offline** and focuses on **privacy, hygiene, and instant response**.

Using an **APDS9960 gesture sensor**, a **microcontroller**, and an **OLED display**,  the system converts air gestures into direct electrical control commands without any cloud dependency.

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/6th-submission/demo1.jpg" width="800"><br/>
  <i>Components used in the project</i>
</p>

<p align="center">
  <img src="/assets/images/6th-submission/demo2.jpg" width="800"><br/>
  <i>OLED feedback showing active channel and device states</i>
</p>

---

### **Videos**

📽️ **Project Presentation Video**  
<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/1-20txAusBU"></iframe>
</div>

📽️ **Live Demonstration Video**  
<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/MVmsMZfu3fc"></iframe>
</div>

*(Videos are uploaded locally as per MYOSA submission rules.)*

---

## Features 

### **1. Multi-Device Gesture Control**
The system supports control of **three independent devices**.
Each device can be controlled individually through gesture-based commands.

---

### **2. State-Based Channel Selection (Finite State Machine)**

- **Swipe** → Select next channel (1 → 2 → 3 → 1)
- **swipe** can be in any direction i.e. up, down, right, left.

Once selected, the channel remains active until another gesture is detected.

---

### **3. Action Gestures**
- **1 second hold** → Turn ON the selected channel
-  **1 second hold** → Turn OFF the selected channel 

This separation of *selection* and *action* ensures reliable multi-device control.

---

### **4. Dynamic OLED Visual Feedback**
The OLED display continuously shows:
- Active channel indicator  
- ON/OFF status of all channels  
- Instant updates after every valid gesture  

This improves usability and prevents accidental operations.

---

### **5. Offline, Low-Latency Operation**
- No Wi-Fi  
- No cloud processing  
- No smartphone dependency  
- Instant GPIO-based relay switching  

The system responds immediately to gestures with minimal delay.

---

### **6. Hygienic and Accessible Interface**
The touchless interface makes the system suitable for:
- Hygiene-sensitive environments like Operation Theatres
- Workshops and labs  
- Wet or dusty conditions  
- Users with limited motor control  

---

## Usage Instructions

1. Power the system using the MYOSA microcontroller.
2. On startup, the system automatically performs an **environment calibration** to establish a baseline for reliable gesture detection.
   - During this calibration phase, **do not place your hand above or near the gesture sensor**.
   - This allows the sensor to adapt to ambient light and surrounding conditions accurately.
3. Perform **swipe** to select the desired appliance.
4. Perform **1 second hold** to turn the appliance ON.
5. Perform **1 second hold again** to turn the appliance OFF.
6. Observe real-time feedback on the OLED display.

---

## Tech Stack

- **Microcontroller** (MYOSA Kit)  
- **APDS9960 Gesture Sensor**  
- **SSD1306 OLED Display (0.96 inch)**  
- **Arduino IDE (C++ firmware)**  
- **Adafruit_APDS9960 Library**  

---

## Requirements / Installation

### **Libraries Required**
```bash
Adafruit_APDS9960
Adafruit_GFX
Adafruit_SSD1306

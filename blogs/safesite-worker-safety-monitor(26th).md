---
publishDate: 2026-01-01T00:00:00Z
title: SafeSite - IoT Factory Worker Safety Monitoring System
excerpt: A real-time factory worker safety monitoring system using ESP32 and MYOSA sensors with a web-based dashboard for manufacturing floor safety management.
image: 26th-submission/safesite-cover.png
tags:
  - IoT
  - Factory-Safety
  - ESP32
  - MQTT
  - React
  - Real-Time-Monitoring
  - MYOSA
  - Manufacturing
---

> Protecting factory workers through real-time sensor monitoring and instant alert communication.

---

## Acknowledgements

Special thanks to:

- **MakeSense EduTech & Pegasus Automation** for the MYOSA platform and development resources
- **MYOSA Community** for continuous support and feedback
- **Open Source Contributors** for the libraries that made this project possible

---

## Overview

**SafeSite** is a comprehensive IoT-based worker safety monitoring system specifically designed for **factory and manufacturing environments**. The system uses the MYOSA platform's ESP32 controller and multiple sensors to continuously monitor factory floor workers' conditions and environmental factors in real-time.

In busy factory settings, workers operate heavy machinery, work near hazardous equipment, and navigate complex production floors. **SafeSite** addresses critical safety challenges by providing:

- **Real-time monitoring** of worker movement and orientation
- **Instant emergency communication** via panic button
- **Centralized oversight** for floor supervisors and safety managers
- **Environmental awareness** through temperature and pressure monitoring

**What problem does it solve?**

- Delayed response to factory floor emergencies and accidents
- Lack of real-time visibility into worker conditions on the production floor
- No centralized monitoring system for multiple factory workers
- Poor communication between floor workers and safety supervisors
- Difficulty detecting worker falls or unusual movements near machinery

**Who is it for?**

- Factory floor supervisors
- Manufacturing plant safety managers
- Production line coordinators
- Industrial safety officers
- Quality control managers
- Any manufacturing facility with workers in potentially hazardous areas

**Key Features:**

- Real-time sensor data streaming (accelerometer, gyroscope, temperature, pressure, light)
- Panic button for emergency alerts
- Web-based dashboard for monitoring multiple workers
- Bidirectional communication (admin can send alerts to workers)
- Motion detection with tilt angle monitoring
- Audio and visual alert notifications
- Worker status tracking (online/offline detection)
- Data logging and export functionality

---

## Demo / Examples

### **Images**

<p align="center">
  <img src="/assets/images/26th-submission/safesite-login.png" width="800"><br/>
  <i>SafeSite Login Screen - Secure access for factory supervisors</i>
</p>

<p align="center">
  <img src="/assets/images/26th-submission/safesite-dashboard.png" width="800"><br/>
  <i>SafeSite Admin Dashboard - Real-time monitoring of all factory workers</i>
</p>

<p align="center">
  <img src="/assets/images/26th-submission/safesite-hardware.jpeg" width="800"><br/>
  <i>MYOSA ESP32 hardware setup - Wearable sensor unit for factory workers</i>
</p>

### **Videos**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/VFZv7Pr-MHI"></iframe>
</div>

---

## Features (Detailed)

### **1. Real-Time Sensor Monitoring**

The system continuously reads data from multiple MYOSA sensors and streams it to the dashboard via MQTT protocol.

**Sensors Used:**

- **Accelerometer & Gyroscope (MPU6050)**: Detects motion, orientation, and potential falls
- **Barometric Pressure Sensor (BMP280)**: Measures atmospheric pressure and estimates altitude
- **Light & Proximity Sensor (APDS-9960)**: Monitors ambient light levels and proximity
- **Temperature Sensor**: Built into the motion sensor for body/environment temperature

**Data Processing:**

- 10-sample moving average filter for smooth readings
- 500ms publish interval for real-time updates
- Automatic reconnection on network failure

### **2. Panic Button Emergency Alert**

Workers can trigger an immediate emergency alert by pressing a physical panic button connected to GPIO 33.

**How it works:**

1. Worker presses panic button
2. ESP32 detects button press with debounce logic
3. Alert is published to MQTT topic
4. Dashboard receives alert instantly
5. Audio alarm plays on admin's computer
6. Visual notification appears with worker details
7. OLED displays "PANIC ALERT SENT" confirmation

**Alert Data Includes:**

- Worker ID and name
- Alert type (panic)
- Severity level (critical)
- Timestamp
- Location (GPS ready for future)

### **3. Admin-to-Worker Communication**

Administrators can send alerts directly to workers from the dashboard.

**Features:**

- Send custom messages to specific workers
- Broadcast alerts to all workers simultaneously
- Adjustable severity levels (low, medium, high, critical)
- Worker's buzzer activates on receiving alert
- Message displayed on worker's OLED screen

### **4. Worker Status Tracking**

The system automatically detects when hardware workers connect or disconnect.

**Status States:**

- **Online (Green)**: Worker device is connected and sending data
- **Offline (Gray)**: No data received for 15+ seconds
- **Alert (Red)**: Active emergency alert

**For Simulated Workers:**

- Always show as online when simulation is running
- Useful for testing and demonstration

### **5. Motion Detection & Tilt Monitoring**

Advanced motion analysis for safety monitoring.

**Capabilities:**

- Motion status (YES/NO) based on accelerometer activity
- Tilt angles (X, Y, Z) in degrees
- Gyroscope readings for rotation detection
- Potential fall detection (based on sudden acceleration changes)

### **6. Data Logging & Export**

All sensor data and alerts are stored in a SQLite database.

**Export Options:**

- Download all logs as JSON
- Export alerts as CSV
- Export sensor data as CSV
- Filter by date range or worker

### **7. Multi-Worker Dashboard**

Monitor multiple workers simultaneously from a single interface.

**Dashboard Features:**

- Worker cards with live status
- Click to view detailed sensor data
- Real-time charts (accelerometer, gyroscope)
- Alert history per worker
- Add new workers dynamically

---

## Usage Instructions

### **Starting the System**

**Step 1: Start Mosquitto MQTT Broker**

```bash
mosquitto -v
```

**Step 2: Start Backend Server**

```bash
cd safesite-dashboard/backend
npm install
node server.js
```

**Step 3: Start Frontend Development Server**

```bash
cd safesite-dashboard/frontend
npm install
npm start
```

**Step 4: Upload Code to ESP32**

1. Open `code_safesite.ino` in Arduino IDE
2. Update WiFi credentials:

```cpp
const char *ssid = "YOUR_WIFI_SSID";
const char *password = "YOUR_WIFI_PASSWORD";
```

1. Update MQTT broker IP:

```cpp
const char *mqtt_server = "YOUR_PC_IP_ADDRESS";
```

1. Upload to ESP32

**Step 5: Access Dashboard**
Open browser and navigate to:

```
http://localhost:3000
```

**Default Login:**

- Username: `admin`
- Password: `admin123`

### **Using the Panic Button**

Connect a push button between GPIO 33 and GND. The internal pull-up resistor is enabled automatically.

```
GPIO 33 ──── Button ──── GND
```

Press the button to send an emergency alert to the dashboard.

### **Sending Alerts from Dashboard**

1. Click on a worker card to open detail panel
2. Type a message in the alert input field
3. Click "Send Alert"
4. Worker's buzzer will sound and message appears on OLED

---

## Tech Stack

- **ESP32** - Microcontroller with WiFi capability
- **MYOSA Platform** - Sensor modules and OLED display
- **Arduino IDE** - Firmware development
- **Node.js** - Backend server runtime
- **Express.js** - REST API framework
- **Socket.io** - Real-time WebSocket communication
- **MQTT (Mosquitto)** - Lightweight messaging protocol
- **React.js** - Frontend user interface
- **Tailwind CSS** - UI styling framework
- **Chart.js** - Real-time data visualization
- **SQLite (sql.js)** - Embedded database
- **ArduinoJson** - JSON parsing on ESP32
- **PubSubClient** - MQTT client library for Arduino

---

## Requirements / Installation

### **Hardware Requirements**

- MYOSA Controller Board (ESP32)
- MYOSA Accelerometer/Gyroscope Module
- MYOSA Barometric Pressure Module
- MYOSA Light/Proximity Module
- MYOSA OLED Display
- Push Button (for panic trigger)
- USB Cable for programming
- 3.3V Power Supply or USB Power

### **Software Requirements**

**For ESP32:**

```
Arduino IDE 2.0+
ESP32 Board Package
Libraries:
  - PubSubClient
  - ArduinoJson
  - MYOSA Library (included)
```

**For Backend/Frontend:**

```bash
# Install Node.js 18+ from https://nodejs.org

# Backend dependencies
cd safesite-dashboard/backend
npm install

# Frontend dependencies
cd safesite-dashboard/frontend
npm install
```

**MQTT Broker:**

```bash
# Windows (using Chocolatey)
choco install mosquitto

# macOS
brew install mosquitto

# Linux
sudo apt install mosquitto mosquitto-clients
```

---

## File Structure

```
/MYOSA
├── code_safesite.ino          # Main ESP32 firmware
├── src/
│   ├── myosa.cpp              # MYOSA library implementation
│   ├── myosa.h                # MYOSA library header
│   └── ...                    # Other library files
├── safesite-dashboard/
│   ├── backend/
│   │   ├── server.js          # Express server entry point
│   │   ├── db.js              # SQLite database operations
│   │   ├── mqtt-handler.js    # MQTT message handling
│   │   ├── routes/
│   │   │   ├── auth.js        # Authentication routes
│   │   │   ├── workers.js     # Worker CRUD routes
│   │   │   ├── alerts.js      # Alert management routes
│   │   │   └── logs.js        # Log export routes
│   │   └── simulation/
│   │       └── dataGenerator.js  # Simulated sensor data
│   └── frontend/
│       ├── public/
│       │   ├── index.html
│       │   ├── favicon.svg
│       │   └── sounds/
│       │       └── alert.mp3
│       └── src/
│           ├── App.jsx
│           ├── index.js
│           └── components/
│               ├── Dashboard.jsx
│               ├── WorkerCard.jsx
│               ├── DetailPanel.jsx
│               ├── Login.jsx
│               ├── CreateWorkerModal.jsx
│               └── AlertNotification.jsx
└── safesite-submission/
    ├── safesite-worker-safety-monitor.md
    ├── safesite-cover.jpg
    ├── safesite-dashboard.jpg
    ├── safesite-demo.mp4
    └── ...
```

---

## Hardware Connection Diagram

```
                 ESP32 Controller Board
                 ┌─────────────────────┐
                 │  3.3V  GND  SDA SCL │
                 └──┬────┬────┬────┬──┘
                    │    │    │    │
    ┌───────────────┼────┼────┼────┼───────────────┐
    │               │    │    │    │               │
┌───▼───┐      ┌───▼───▼───▼───▼───┐      ┌───────▼───────┐
│ OLED  │      │   I2C Sensor Bus  │      │ Panic Button  │
│Display│      │                   │      │   GPIO 33     │
└───────┘      │ ┌─────┐ ┌─────┐  │      │      │        │
               │ │Accel│ │Baro │  │      │    ──┴──      │
               │ │Gyro │ │Press│  │      │   /    \      │
               │ └─────┘ └─────┘  │      │  (BUTTON)     │
               │ ┌─────┐ ┌─────┐  │      │   \    /      │
               │ │Light│ │Temp │  │      │    ──┬──      │
               │ │Prox │ │Humid│  │      │      │        │
               │ └─────┘ └─────┘  │      │     GND       │
               └──────────────────┘      └───────────────┘
```

---

## MQTT Topic Structure

| Topic | Direction | Description |
|-------|-----------|-------------|
| `safesite/worker/{id}/sensors/motion` | ESP32 → Server | Accelerometer, gyroscope, tilt data |
| `safesite/worker/{id}/sensors/environment` | ESP32 → Server | Pressure, altitude data |
| `safesite/worker/{id}/sensors/light` | ESP32 → Server | Light, proximity data |
| `safesite/worker/{id}/status` | ESP32 → Server | Online status, WiFi signal |
| `safesite/worker/{id}/alert` | ESP32 → Server | Panic button alerts |
| `safesite/commands/{id}/alert` | Server → ESP32 | Admin alerts to worker |
| `safesite/commands/all/alert` | Server → All ESP32 | Broadcast alerts |

---

## License

This project is open source and available under the MIT License.

```
MIT License

Copyright (c) 2026 SafeSite Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## Contribution Notes

Contributions are welcome! Here's how you can help:

**Bug Reports:**

- Open an issue describing the bug
- Include steps to reproduce
- Attach screenshots if applicable

**Feature Requests:**

- Open an issue with the "enhancement" label
- Describe the feature and its use case

**Code Contributions:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Future Enhancements Planned:**

- GPS location tracking
- Fall detection algorithm
- Gas/toxic sensor integration
- Mobile app for workers
- Historical data analytics
- Multi-language support

---

## Contact

For questions, suggestions, or collaboration:

- **Email**: <dev.myosa@gmail.com>
- **MYOSA Community**: [MYOSA Platform](https://drive.google.com/file/d/1On6kzIq3ejcu9aMGr2ZB690NnFrXG2yO/view)

---

*Built with ❤️ using the MYOSA Platform*

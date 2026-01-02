---
publishDate: 2025-12-31
title: "MyoTrack: Real-Time Motion Monitoring for Hemiparesis Recovery"
excerpt: "A wearable IoT-based system using inertial sensing and real-time dashboards to support objective rehabilitation monitoring."
image: 14th-submission/MyoTrackdevice-setup.jpeg
tags:
  - rehabilitation
  - iot
  - wearable-sensors
---
> **Where Sensors Meet Recovery**

## Acknowledgements
We acknowledge the MYOSA initiative for providing the Mini IoT Kit and platform support. We also thank the IEEE Sensors Council and Karunya Institute of Technology and Sciences for academic guidance and infrastructure support.
## Overview
MyoTrack is a wearable IoT-based rehabilitation monitoring system designed to support patients recovering from hemiparesis caused by stroke or neurological disorders. Traditional rehabilitation assessment relies heavily on subjective observation, which can lead to inconsistent progress evaluation.

MyoTrack addresses this limitation by using wearable inertial sensors to capture real-time limb motion data. The system provides objective insights into movement quality, symmetry, and activity trends through cloud-based dashboards, enabling clinicians to monitor recovery remotely and make data-driven decisions.

## Demo / Examples
### Image
<p align="center">
  <img src="/assets/images/14th-submission/MyoTrackdevice-setup.jpeg" width="800"><br/>
  <i>Figure 1: MyoTrack device setup with MYOSA Mini IoT board</i>
</p>


### Videos
Presentation video
<video controls width="100%">
  <source src="/assets/videos/14th-submission/myotrack-project-presentation.mp4" type="video/mp4">
</video>
Demo video
<video controls width="100%">
  <source src="/assets/videos/14th-submission/myotrack-project-demo.mp4" type="video/mp4">
</video>

## Features (Detailed)

### 1. Real-Time Motion Sensing
The system uses an MPU6050 inertial measurement unit to capture 3-axis acceleration and 3-axis angular velocity, enabling quantitative assessment of limb movement and posture.

### 2. Edge Processing on MYOSA Board
The ESP32-based MYOSA Mini IoT board performs real-time data acquisition, basic filtering, and time-stamping before transmitting data to the cloud.

### 3. Cloud-Based Visualization
Processed sensor data is uploaded to a cloud platform where clinicians can visualize motion trends, activity levels, and rehabilitation progress remotely.

### 4. Local Feedback
An OLED display provides instant visual feedback on sensor readings and system status during therapy sessions.
## Usage Instructions
1. Power the MYOSA Mini IoT board using USB or a Li-ion battery.
2. Wear the device on the patient’s wrist or forearm.
3. Connect the board to a Wi-Fi network.
4. Begin motion exercises as instructed by the therapist.
5. View real-time data on the OLED display and cloud dashboard.

## Tech Stack
* **Hardware:** MYOSA Mini IoT Board (ESP32), MPU6050, OLED Display  
* **Firmware:** Arduino IDE (C/C++)  
* **Communication:** Wi-Fi (HTTP)  
* **Cloud Platform:** ThingSpeak  
* **Visualization:** Web-based dashboard  

## Requirements / Installation
Arduino IDE
ESP32 Board Package
Adafruit MPU6050 Library
Adafruit SSD1306 Library
WiFi Library

## License
This project is released for academic and research use under an open-source license.
## Contribution Notes
Contributions for feature enhancement, clinical validation, and data analytics are welcome through pull requests.

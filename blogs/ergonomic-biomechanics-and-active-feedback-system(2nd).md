---
publishDate: 2025-12-29
title: MYOSA EBAFS – Ergonomic Biomechanics and Active Feedback System
excerpt: A multi-sensor ergonomic system combining fitness gamification, posture enforcement, and environment monitoring.
image: 2nd-submission/cover-image.png
tags: ["ergonomics", "fitness", "health-tech", "myosa", "EBAFS"]
---
<p align="center">
  <i>cover image</i>
</p>

## MYOSA EBAFS

The **MYOSA Ergonomic Biomechanics and Active Feedback System (EBAFS)** integrates three modules — active posture compliance, gamified exercise, and environmental monitoring — into a unified platform.

## Acknowledgements

We would like to express our sincere gratitude to **MYOSA** and the **IEEE Sensors Council** for providing the essential mini‑kit and technical resources that enabled us to successfully complete the MYOSA EBAFS project. Their support has been invaluable in turning the concept into a working prototype. We are deeply thankful to **Arun Mathiyalagan Sir** for his constant encouragement, and to the **HOD of the ECE Department of Panimalar Engineering College Dr. Rajakumar Sir** for his guidance. Finally, we extend our heartfelt thanks to our **family**, whose motivation and support made this project possible.  
This project would not have been possible without the combined support of these mentors and institutions, whose contributions ensured that MYOSA EBAFS could evolve from an idea into a practical, interactive, and impactful ergonomics system.

## Overview

* **Posture Module:** Enforces active compliance by blacking out the laptop screen and sounding a buzzer when slouching is detected. User needs to sit back straight to be able to resume work.
* **Fitness Module:** Gamifies exercise through a custom developed game where the NemoBird character jumps to avoid tree obstacles when a bicep curl is performed.
* **Environment Module:** Monitors ambient light, pressure, and temperature, issuing warnings via buzzer and OLED display in low-light conditions.

## Features
### 1. Posture Correction 
- An accelerometer sensor is strapped to the user's shoulder and the system calibrates when the user sits with the correct posture.
- If slouching is detected: buzzer sounds and the **laptop screen blacks out**. The user can resume their laptop work only if they return to correct posture.
- Unlike mobile‑notification systems, the user must physically sit back straight for the buzzer to stop and the screen to become normal again.
- Ensures **active compliance** rather than passive reminders.
- Targets **freelancers and laptop users** to help prevent **lumbar spine pain** and **cervicogenic headaches**
<p align="center">
  <img src="/assets/images/2nd-submission/active-posture-correction.png" width="800"><br/>
  <i>active posture correction</i>
</p>

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/9QO56VPrsUM"></iframe>
</div>


### 2. Fitness Game Integration 
- A **custom game** was built in Unityhub.
- Accelerometer attached to a **dumbbell** detects bicep curls (0° → 90°).
- When the user **performs one full lift** and the threshold is reached, the **NemoBird character jumps to avoid tree obstacles**.
- Next jump is not initiated unless user moves dumbell to resting position to **prevent false jumps**.
- The game accesses the sensors signals in the serial monitor via **serial communication** and sends the jump signal from the sensor to the player, gamifying exercise in real time.
- An edge collider and a box collider was added to the background so as to display the **game over interface** when the Nemobird **hits the ceiling or ground**.
<p align="center">
  <img src="/assets/images/2nd-submission/gliding-nemobird-game.png" width="800"><br/>
  <i>gamified exercise</i>
</p>

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/9E81awz1ofc"></iframe>
</div>



### 3. Environmental Monitoring 
- Light sensor detects low lighting conditions.
- In low light, the system issues a **warning via buzzer + OLED display**.
- Under normal conditions, it displays **room light, temperature, and pressure** readings from the barometric pressure and light sensor.
<p align="center">
  <img src="/assets/images/2nd-submission/enviromental-warning.png" width="800"><br/>
  <i>enviromental warning</i>
</p>


<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/rFcYg6uCiiY"></iframe>
</div>



## Usage Instructions

**Follow these steps to set up and run the Posture Control Module**.

### 1. Hardware Setup
Connect the **MPU6050** sensor to your motherboard.



---

### 2. Firmware Configuration (Arduino IDE)
1. Navigate to the `source_code` folder in this repository.
2. Open the file `posture_goodbad3_calib_buzzer.ino` using the **Arduino IDE**.
3. Select your board and the correct COM port.
4. Click **Upload**.
5. **⚠️ Important:** Once the upload is complete, **close the Serial Monitor**. The Python script requires exclusive access to the serial port to read the data.

---

### 3. Python Code
Open VS code and run the posture_monitorblack.py script

---


**Follow these steps to set up and run the Gamified Exercise Module**.

### 1. Hardware Connection
Connect the **MPU6050** sensor to your motherboard. Ensure the sensor is securely attached to the dumbell



---

### 2. Firmware Setup (Arduino IDE)
1. Navigate to the `source-code/` folder.
2. Open the file named `flybird_2_better.ino`.
3. Upload the code to your board.
4. **⚠️ Important:** Close the Arduino Serial Monitor immediately after the upload is successful so Unity can access the data.

---

### 3. Launching the Game (Unity)
1. Navigate to the `z-onedrive-gamebuild` file inside the source-code folder.
2. Open the project in the **Unity Editor**.
3. Press the **Play** button to start the game. Your physical movements will now control the "Nemobird" or player in real-time.

---

### 4. Simplified Version
If you want to inspect or modify how the movement data is processed within the game engine:
* Open the `player.cs` script in **VS Code**. 
* Attach this script to a simple gameobject (eg- square) in unity editor.

---

**Follow these steps to set up and run the Environment Module**.

### 1. Hardware Connection
Connect the following sensors to your motherboard:
* **BMP180**: Measures barometric pressure and temperature.
* **APDS-9960**: Measures ambient light levels.
1. Locate the `lowlight_pressure_buzzer.ino` sketch in the `source_code/` folder.
2. Open the file in the Arduino IDE.
3. Ensure you have the necessary myosa libraries installed.
4. Upload the code to your board.

---
## Requirements / Installation
- Download myosa libraries
- Install Unityhub and Unity editor
- Install the following python package in VS code
  ```bash
     pip install pyserial
- Import the following c# package in VS code
 - **UnityEngine**
 - **System.IO.Ports**

## Technology Stack
### 💻 Programming Languages
* **C++ (Arduino)**: Sensor data acquisition and hardware logic.
* **C# (Unity)**: Game physics, player movement, and sprite control.
* **Python**: Desktop application for screen monitoring and GUI.

### 🔌 Connectivity & Frameworks
* **Unity Hub & Editor**: Game engine for the exercise module.
* **Serial Communication**: 
    * `System.IO.Ports` (C#) for Unity-to-Hardware integration.
    * `PySerial` (Python) for hardware-to-PC data transfer.
* **GUIs & Libraries**: 
    * `Tkinter` (Python) for the monitoring interface.
    * `Myosa Libraries` for Arduino sensor management.

## 📂 Project Structure

```plaintext

├── images/                                  # UI images
├── source-code/                             # Core project files
│   ├── Player.cs                            # Unity player movement script
│   ├── flybird_2_better.ino                 # Gamified exercise firmware
│   ├── lowlight_pressure_buzzer.ino         # Environment module firmware
│   ├── posture_goodbad3_calib_buzzer.ino    # Posture module firmware
│   ├── posture_monitorblack.py              # Python screen monitoring script
│   └── z-onedrive-gamebuild/                # Unity game build
├── videos/                                  # Demo videos
└── ergonomic-biomechanics-and-ac...         # Project documentation .md file
```
## Contribution Notes

From the day the MYOSA kit arrived, we were excited to begin experimenting.The journey brought plenty of challenges: we had close calls with the screen blackout implementation and the Unity game mechanics, often without existing projects to reference online. Each obstacle demanded persistence and creative problem‑solving. Despite the hurdles, we transformed the concept into a working prototype.This project reflects our technical growth and the resilience behind every iteration.

**Note on Hardware**: The initial plan was to use a servo motor to physically close the laptop screen, but through testing we found that a software‑driven blackout achieved the same compliance enforcement. This adjustment simplified the design while keeping the intended impact intact and fully exploiting the myosa kit.
Sensors are exposed in the videos to show the MYOSA kit integration; final versions will use custom 3D-printed casings for aesthetics and durability

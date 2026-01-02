---
publishDate: 2025-01-10
title: MyoPet- An Interactive S.T.E.A.M. Learning Robot for kids.
excerpt: An ESP32-based interactive S.T.E.A.M. learning robot that teaches children alphabets, colors, poems, stories, basic science concepts, and emotions through audio, display, and sensor-based interaction.
image: 4th-submission/front.JPG
tags:
  - myosa
  - esp32
  - robotics
  - education
  - steam
  - embedded-systems
---

> MyoPet: A friendly interactive learning robot that helps children learn alphabets, colors, stories, and emotions using voice, display, and sensor-based interaction.
---
## Acknowledgements

We sincerely thank the MYOSA team for providing the platform and the MYOSA Mini Kit upon clearing the first round, which enabled the successful implementation of this project. 

We also acknowledge the open-source community for the tools, libraries, and documentation that supported the development process.

We express our sincere gratitude to the Students Research Lab (SRL) at M. M. Patel Students Research Project Cell (MMPSRPC), affiliated with Kadi Sarva Vishwavidyalaya (KSV) for their continuous support, guidance, and encouragement that made this work possible.
## Overview

MYOPET is an interactive learning robot designed as a smart learning companion for children. The project focuses on introducing early learning concepts along with basic science and technology in a simple, engaging, and hands-on manner. By interacting with MYOPET, children are exposed to ideas such as motion, system response, and cause-and-effect, helping to build curiosity and interest in learning beyond traditional screen-based methods.

The robot is built using the MYOSA motherboard and integrates multiple sensors for real-time interaction, including gesture, motion, color, and temperature sensing. MYOPET supports various learning modes such as alphabet learning, color recognition, poems, stories, emotion-based interaction, and temperature awareness. Learning feedback is provided through an OLED display and audio output, combining visual and auditory learning in an intuitive way.

Designed with a low-cost and sustainable approach, MYOPET demonstrates that effective and meaningful educational technology can be developed using simple materials while delivering an interactive and engaging learning experience.

**Key features:**
* Multi-mode interactive learning covering alphabets, colors, poems, stories, emotions, and basic science concepts  
* Multi-sensor based interaction using gesture, motion, color, and temperature sensing for hands-on learning  
* Real-time audio-visual feedback through OLED display, speaker, and buzzer to support visual and auditory learning  
* Low-cost and sustainable design utilizing reused electronic waste components, reducing material waste and cost  
* Portable, child-friendly, and distraction-free learning experience designed for safe and engaging early education  

----
## Demo / Examples

### Images

<p align="center">
  <img src="/assets/images/4th-submission/front.JPG" width="1000"><br/>
</p>

<p align="center">
  <img src="/assets/images/4th-submission/back.JPG" width="30%">
  <img src="/assets/images/4th-submission/side.jpg" width="30%">
  <img src="/assets/images/4th-submission/open.jpg" width="30%">
</p>
<p align="center">
  <i> Fig 1: MYOPET interactive learning robot highlighting the OLED display and its child-friendly physical design.</i>
</p>


---

### Presentation Video

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/a_00pyr0d5s"></iframe>
</div>




---

## Features

MYOPET is designed with multiple hardware and software features that work together to create an interactive and engaging learning experience for children. Each feature is described in detail below.

---

### **1. Power Control and System Startup**

MYOPET includes a dedicated ON/OFF switch that controls the power supply of the system. When powered ON, the robot initializes all connected sensors and output devices. During startup, the OLED display shows the “MYOSA” logo, and a welcome audio message is played through the speaker, indicating that the system is active and ready for interaction. This simple power control makes the device easy, safe, and child-friendly to use.

<p align="center">
  <img src="/assets/images/4th-submission/myosa-start.jpeg" width="45%">
  <img src="/assets/images/4th-submission/oled-myosa.jpeg" width="45%">
    <p align="center"> Fig 2: MYOPET power control and OLED startup display.</p align="center">
</p>

---

### **2. Alphabet Learning Mode**

In Alphabet Mode, MYOPET helps children learn alphabets from A to Z using gesture-based interaction. The APDS9960 gesture sensor detects slow hand movements, allowing children to move forward through the alphabet sequence. Each alphabet is displayed clearly on the SSD1306 OLED screen and spoken aloud through the speaker, enabling both visual and auditory learning. This mode encourages active participation and improves letter recognition.

<p align="center">
 <img src="/assets/images/4th-submission/alphabet-a.jpeg" width="45%">
  <img src="/assets/images/4th-submission/alphabet-oled-a.jpeg" width="45%">
  <img src="/assets/images/4th-submission/alphabet-b.jpeg" width="45%">
  <p align="center"> Fig 3: Alphabet learning mode where hand movements detected by the APDS9960 sensor move to the next letter from A to Z, with audio output and OLED display feedback.
</p align="center">
</p>

---

### **3. Color Detection and Audio Learning Mode**

In Color Detection Mode, MYOPET uses the APDS9960 sensor to identify RGB colors. When a color is detected, the corresponding color name is displayed on the OLED screen and announced through the speaker. Additionally, each color triggers a specific audio-based learning activity:
- **Red color** plays a poem (“Johnny Johnny Yes Papa”)
- **Blue color** plays a poem (“Twinkle Twinkle Little Star”)
- **Green color** plays a short story  

This mode combines color recognition with storytelling and poems, making learning enjoyable and interactive.

<p align="center">
   <img src="/assets/images/4th-submission/color-green.jpeg" width="300">
  <img src="/assets/images/4th-submission/color-red-oled.jpeg" width="300">
</p>
<p align="center">
  <p align="center">Fig 4: Color detection mode where the APDS9960 sensor identifies the color of an object, announces it aloud, and triggers corresponding story or poem playback with audio output and OLED display feedback.</p align="center">
</p>

---

### **4. Emotion Learning Mode Using Motion Sensing**

MYOPET includes an Emotion Learning Mode that uses the MPU6050 gyroscope sensor to detect motion and orientation. Based on the detected movement, the robot displays different emoji expressions on the OLED screen along with matching audio responses. This feature helps children understand basic emotions in a friendly and intuitive way through physical interaction.

<p align="center">
    <img src="/assets/images/4th-submission/emoji.jpeg" width="45%">
  <img src="/assets/images/4th-submission/emoji-oled.jpeg" width="45%">
  <p align="center"> Fig 5: Emotion mode where the MPU6050 sensor detects robot body movements and updates the displayed emoji accordingly on the OLED screen.</p align="center">
</p>

---

### **5. Temperature Awareness and Safety Mode**

The Temperature Mode uses the MYOSA BMP180 sensor to measure the real-time ambient temperature. The current temperature is displayed on the OLED screen. If the temperature exceeds **35 °C**, an alert symbol is shown on the display and the buzzer is activated. This feature introduces children to basic environmental awareness and safety concepts in a simple and practical manner.

<p align="center">
 <img src="/assets/images/4th-submission/temp.jpeg" width="45%">
  <img src="/assets/images/4th-submission/temp-oled.jpeg" width="45%">
  <p align="center"> Fig 6: Temperature awareness mode with alert indication</p align="center">
</p>

---

### **6. Mode Selection Using Dedicated Button**

MYOPET features a mode selection button located on the left shoulder of the robot. Each press cycles the system through different learning modes in the following order:
```
- Alphabet Mode  
- Color Detection Mode  
- Emotion Mode  
- Temperature Mode  
```
Every mode change is clearly indicated on the OLED display, ensuring that children understand which activity is currently active.

<p align="center">
  <img src="/assets/images/4th-submission/button(1)(1).png" width="45%">
  <br>
  <p align="center">Fig 7: Mode selection button used to switch learning modes</p align="center">
</p>


---

### **7. Reset Functionality**

A dedicated reset button is provided to restart the MYOPET system whenever required. Pressing this button resets all active modes and reinitializes the system, returning it to the startup state. This feature ensures reliable operation during repeated use.

---

### **8. Audio-Visual Output System**

MYOPET delivers feedback through a combination of visual and audio outputs. The SSD1306 OLED display provides clear text, symbols, and emojis, while the speaker plays stored audio files from the micro SD card. A buzzer is used for alerts and notifications. This multi-sensory output system enhances learning by engaging multiple senses simultaneously.

---

### **9. Demonstration Video**

<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/I3q92VEFtzU"></iframe>
</div>

---

## Usage Instructions

This section explains how others can use, rebuild, and operate the MYOPET project using the files provided in the GitHub repository.

---

### 1. Clone or Download the Repository

Download the project files from GitHub using one of the following methods.

```plaintext
git clone <repository-url>

Alternatively, download the repository as a ZIP file and extract it on your computer.
```
---
### Firmware Upload / Programming

To upload or update the MYOPET firmware, connect the ESP32 to a computer using a USB cable and follow the steps below.

```plaintext
Open Arduino IDE
Select Board: ESP32-WROOM-DA
Select Port: COMx
Click Upload
```
---
### Hardware Setup

Assemble the MYOPET hardware using all components listed in the **Hardware Stack** section of this document. Connect the ESP32-WROOM-DA as the main controller and interface the sensors, display, and output devices as follows:

- Connect the **APDS9960**, **MPU6050**, and **BMP180** sensors to the ESP32 using the I2C communication interface.
- Connect the **SSD1306 OLED display** to the ESP32 for visual output.
- Connect the **speaker** and **buzzer** for audio feedback and alert notifications.
- Connect the **Mode Button** and **Reset Button** for system control and mode switching.
- Connect the **Micro SD Card module** and insert a FAT32-formatted SD card containing the required WAV audio files.

Ensure the following before powering the system:
- All I2C devices are connected correctly and share the same I2C bus.
- The SD card is formatted in **FAT32** format.
- Audio files are placed on the SD card according to the project file structure.

---

## Tech Stack

### Hardware Stack
* **ESP32-WROOM-DA** – Main microcontroller  
* **APDS9960** – Gesture and RGB color detection  
* **MPU6050** – Motion-based interaction  
* **BMP180** – Temperature sensing  
* **SSD1306 OLED Display** – Visual output  
* **Speaker** – Audio output  
* **Buzzer** – Alert notifications  
* **Mode Button** – Learning mode selection  
* **Micro SD Card Module** – Audio file storage  

### Software Stack
* **Arduino IDE** – Firmware development and code uploading  

---

## Requirements / Installation

To set up or rebuild the MYOPET project, install the required software and libraries listed below.

### Software Requirements
- Arduino IDE  
- ESP32 Board Package (via Arduino Board Manager)

### Required Arduino Libraries

Install the following libraries using the Arduino Library Manager or by adding them manually to the Arduino libraries folder:

```bash
Wire.h
SPI.h
SD.h
driver/dac.h
Adafruit_GFX.h
Adafruit_SSD1306.h
SparkFun_APDS9960.h
Adafruit_MPU6050.h
Adafruit_BMP085_U.h
Adafruit_Sensor.h
```

## Contribution Notes

Contributions to the MYOPET project are welcome and encouraged. Interested contributors can participate in the following ways:

- Improve or extend the firmware by adding new learning modes, optimizing sensor logic, or enhancing system performance.
- Add or modify educational content such as audio files, poems, stories, or display visuals.
- Improve documentation, wiring explanations, or usage instructions.
- Report bugs, hardware issues, or unexpected behavior by opening a GitHub issue.
- Suggest new features or learning ideas suitable for early education.

### How to Contribute

1. Fork the repository on GitHub.
2. Clone the forked repository to your local system.
3. Make the required changes and test them where applicable.
4. Commit and push the changes to your fork.
5. Submit a Pull Request with a clear description of the updates.

For minor suggestions or discussions, contributors are encouraged to open an issue before making major changes.

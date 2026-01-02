---
publishDate: 2025-12-09T00:00:00Z
title: Myosa 4.0 Submission Guidelines
excerpt: The mandatory submission format and rules that all participants must strictly follow for the MYOSA project.
image: thumbnail-image.jpeg
tags:
- submission
- rules
- guidelines
- myosa-4.0
---
> This format is mandatory for all participants; failure to follow it may result in rejection.

---

## Acknowledgements (Optional)
We thank all participants for adhering to these guidelines to ensure a smooth review process for the MYOSA 4.0 event.

---

## Overview
[cite_start]This document outlines the **mandatory submission format and rules** that all participants must strictly follow while uploading their project to the official MYOSA GitHub repository[cite: 90]. [cite_start]Submissions that do not follow this format may be **rejected or asked for resubmission**[cite: 91].

**Key features of a valid submission:**
* [cite_start]**Single Markdown File:** Each team must upload one `.md` file following the exact structure provided[cite: 93].
* [cite_start]**Local Media Only:** YouTube links are not allowed; videos must be local `.mp4` files[cite: 100, 101].
* [cite_start]**Strict Naming Conventions:** Files must use lowercase names with no spaces[cite: 116, 117].
* [cite_start]**Open Source Ethics:** All work must be original and free of unauthorized copyrighted material.

---

## Demo / Examples

### **Images**
[cite_start]All images must be placed in the **same folder** as your markdown file[cite: 96].
Use the following format for images:

<p align="center">
<img src="/assets/images/demo-image.jpeg" width="800"><br/>
<i>Correct Image Format Example: Caption goes here</i>
</p>

### **Videos**
[cite_start]Youtube links are **NOT** allowed[cite: 100]. Place your video in the same folder and use this format:

<video controls width="100%">
<source src="/assets/videos/trial.mp4" type="video/mp4">
</video>

---

## Features (Detailed)

### **1. Submission Format (Mandatory)**
Each participant/team must upload a **single Markdown (.md) file**. [cite_start]It must include a YAML frontmatter (dates, title, tags), an overview, demo examples, detailed features, usage instructions, tech stack, and license information[cite: 93, 94].

### **2. Media Upload Rules**
* [cite_start]**Images:** Must be in JPG or PNG format only and properly named without spaces[cite: 96].
* [cite_start]**Videos:** Must be a local `.mp4` file located in the same folder as the markdown file[cite: 101].

### **3. Content Requirements**
Each project must clearly explain:
* What the project does.
* How it works.
* [cite_start]Who it is for and what problem it solves[cite: 105].
* [cite_start]**Must Include:** Proper overview, real images & demo video, tech stack used, and working instructions[cite: 106].

### **4. File & Folder Naming Rules**
* [cite_start]**No spaces** in file names[cite: 116].
* [cite_start]**Use lowercase** letters only[cite: 117].

[cite_start]**Good Example:** [cite: 119]
* `myosa-smart-home.md`
* `myosa-demo.mp4`

[cite_start]**Bad Example:** [cite: 121]
* `My Project Final.md`
* `Demo Video.mp4`

---

## Usage Instructions
Before submitting, please review the final checklist and responsibility notes.

### **Submission Checklist**
Ensure you have confirmed the following:
1.  [cite_start]Markdown file format followed[cite: 126].
2.  [cite_start]Images added correctly[cite: 126].
3.  [cite_start]MP4 video uploaded locally[cite: 126].
4.  [cite_start]Proper overview and tech stack included[cite: 126].
5.  [cite_start]Commands and code formatted correctly[cite: 126].

### **Organizer Final Note**
[cite_start]Failure to follow the guidelines may result in rejection, a request for resubmission, or disqualification in case of repeated violation[cite: 130].

---

## Tech Stack
* **Markdown**
* **Git / GitHub**
* **HTML (for media embedding)**

---

## Requirements / Installation
Participants may include installation commands for their projects using the following format:

```bash
pip install dependency1 dependency2
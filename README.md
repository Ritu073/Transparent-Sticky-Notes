# 📝 Transparent Sticky Notes

A simple, transparent sticky notes desktop application built using Electron.js. This tool lets users create sticky notes that stay on top and blend into their desktop for easy access and minimal distraction.

---

## 🚀 Features

- Transparent, borderless sticky notes  
- Always-on-top functionality  
- Save notes locally  
- Minimal UI with draggable notes  
- Lightweight and fast  

---

## 📁 Project Structure

transparent-sticky-notes/
├── assets/
├── main.js
├── index.html
├── renderer.js
├── style.css
├── package.json
└── README.md

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above)  
- npm (comes with Node.js)  
- Git (optional, for cloning)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ritu073/Transparent-Sticky-Notes.git
cd Transparent-Sticky-Notes
2. Install Dependencies
bash
Copy
Edit
npm install

▶️ Run the App (Development Mode)
bash
Copy
Edit
npm start
📦 Build Executable (Windows)
bash
Copy
Edit
npm install electron-packager -g
electron-packager . TransparentStickyNotes --platform=win32 --arch=x64 --icon=assets/icon.ico --overwrite
Your .exe file will be inside the /TransparentStickyNotes-win32-x64 folder.

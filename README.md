<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transparent Sticky Notes - README</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: auto;
      padding: 2rem;
      background-color: #f7f9fc;
      color: #333;
    }
    h1, h2, h3 {
      color: #007acc;
    }
    pre {
      background: #eee;
      padding: 10px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-bottom: 1rem;
    }
    .note {
      background-color: #fff8c5;
      border-left: 4px solid #f1c40f;
      padding: 1rem;
      margin: 1rem 0;
    }
  </style>
</head>
<body>

  <h1>📝 Transparent Sticky Notes</h1>

  <p>A simple, transparent sticky notes desktop application built using Electron.js. This tool lets users create sticky notes that stay on top and blend into their desktop for easy access and minimal distraction.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Transparent, borderless sticky notes</li>
    <li>Always-on-top functionality</li>
    <li>Save notes locally</li>
    <li>Minimal UI with draggable notes</li>
    <li>Lightweight and fast</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <pre>
transparent-sticky-notes/
├── assets/
├── main.js
├── index.html
├── renderer.js
├── style.css
├── package.json
└── README.md
  </pre>

  <h2>⚙️ Prerequisites</h2>
  <p>Make sure you have the following installed:</p>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> (v16 or above)</li>
    <li>npm (comes with Node.js)</li>
    <li>Git (optional, for cloning)</li>
  </ul>

  <h2>🛠️ Setup Instructions</h2>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/Ritu073/Transparent-Sticky-Notes.git
cd Transparent-Sticky-Notes</code></pre>

  <h3>2. Install Dependencies</h3>
  <pre><code>npm install</code></pre>

  <h2>▶️ Run the App (Development Mode)</h2>
  <pre><code>npm start</code></pre>

  <h2>📦 Build Executable (Windows)</h2>
  <pre><code>npm install electron-packager -g
electron-packager . TransparentStickyNotes --platform=win32 --arch=x64 --icon=assets/icon.ico --overwrite</code></pre>

  <div class="note">
    Your <code>.exe</code> file will be inside the <code>/TransparentStickyNotes-win32-x64</code> folder.
  </div>

  <h2>⚠️ Notes</h2>
  <ul>
    <li>Do <strong>NOT</strong> push <code>node_modules</code> or <code>.exe</code> files to GitHub</li>
    <li>To share the executable, upload it to Google Drive or use GitHub Releases</li>
    <li>Others can run <code>npm install</code> to regenerate dependencies</li>
  </ul>

  <h2>🙋‍♀️ Author</h2>
  <p><strong>Ritupurna Sahoo</strong></p>
  <p>
    🔗 <a href="https://github.com/Ritu073">GitHub</a><br>
    🔗 <a href="https://www.linkedin.com/in/ritupurna-sahoo-5276a82a6/">LinkedIn</a>
  </p>

  <h2>📄 License</h2>
  <p>This project is open-source and free to use.</p>

</body>
</html>

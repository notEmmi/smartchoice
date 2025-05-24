const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 1024,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // ✅ Make sure this path is correct
      contextIsolation: true,  // ✅ REQUIRED for contextBridge to work
      nodeIntegration: false,  // ✅ MUST be false
    },
  });

  win.loadURL('http://localhost:5173'); // or your React dev server
  win.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

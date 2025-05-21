const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 1024,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional for security
      nodeIntegration: true, // Enable Node.js features in renderer
      contextIsolation: false
    },
  });

  win.loadURL('http://localhost:5173'); // Change port if using Create React App
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

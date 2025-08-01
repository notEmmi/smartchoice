const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

let win;

function readData() {
  try {
    const raw = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading data file:", err);
    return {};
  }
}

function writeData(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error("Error writing data file:", err);
  }
}

ipcMain.handle('get-categories', () => {
  return readData().categories || [];
});

ipcMain.handle('set-categories', (event, categories) => {
  const currentData = readData();
  currentData.categories = categories;
  writeData(currentData);
  return true;
});

ipcMain.handle('get-moods', () => {
  return readData().moods || [];
});

ipcMain.handle('set-moods', (event, moods) => {
  const currentData = readData();
  currentData.moods = moods;
  writeData(currentData);
  return true;
});

ipcMain.handle('get-selected-moods', () => {
  return readData().selectedMoods || [];
});

ipcMain.handle('set-selected-moods', (event, selectedMoods) => {
  const currentData = readData();
  currentData.selectedMoods = selectedMoods;
  writeData(currentData);
  return true;
});

ipcMain.on('window-minimize', () => win.minimize());

ipcMain.on('window:toggle-maximize', () => {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

ipcMain.on('window-close', () => win.close());


function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 1024,
    frame: false, //disable native top bar
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // ✅ Make sure this path is correct
      contextIsolation: true,  // ✅ REQUIRED for contextBridge to work
      nodeIntegration: false,  // ✅ MUST be false
    },
  });

  win.loadURL('http://localhost:5173'); // or your React dev server
  // win.webContents.openDevTools();  // opens devtool

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

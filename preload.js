const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getCategories: () => ipcRenderer.invoke('get-categories'),
  setCategories: (categories) => ipcRenderer.invoke('set-categories', categories),
  getMoods: () => ipcRenderer.invoke('get-moods'),
  setMoods: (moods) => ipcRenderer.invoke('set-moods', moods),
});

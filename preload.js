const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getCategories: () => ipcRenderer.invoke('get-categories'),
  setCategories: (categories) => ipcRenderer.invoke('set-categories', categories),
});

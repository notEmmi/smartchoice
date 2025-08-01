const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // window functtions
  minimize: () => ipcRenderer.send('window-minimize'),
  toggleMaximize: () => ipcRenderer.send('window:toggle-maximize'),
  close: () => ipcRenderer.send('window-close'),


  // category functions
  getCategories: () => ipcRenderer.invoke('get-categories'),
  setCategories: (categories) => ipcRenderer.invoke('set-categories', categories),
  getMoods: () => ipcRenderer.invoke('get-moods'),
  setMoods: (moods) => ipcRenderer.invoke('set-moods', moods),
  getSelectedMoods: () => ipcRenderer.invoke('get-selected-moods'),
  setSelectedMoods: (selectedMoods) => ipcRenderer.invoke('set-selected-moods', selectedMoods),


});



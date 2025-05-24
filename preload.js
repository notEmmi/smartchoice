const { contextBridge } = require('electron');
const Store = require('electron-store');
const fs = require('fs');
const path = require('path');

const store = new Store();

if (!store.has('categories')) {
  try {
    const defaultData = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'default-data.json'), 'utf-8')
    );
    store.set('categories', defaultData);
  } catch (err) {
    console.error('Failed to load default categories:', err);
  }
}

contextBridge.exposeInMainWorld('electronAPI', {
  test: () => console.log('✅ preload is working'),

  getCategories: () => store.get('categories'),
  setCategories: (categories) => store.set('categories', categories),
});

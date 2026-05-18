const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {

  minimize: () =>
    ipcRenderer.invoke("minimize-window"),

  maximize: () =>
    ipcRenderer.invoke("toggle-maximize"),

  close: () =>
    ipcRenderer.invoke("close-window")

});
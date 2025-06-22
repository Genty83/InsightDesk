const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  // Window control methods
  minimize: () => ipcRenderer.send("window:minimize"),
  maximize: () => ipcRenderer.send("window:maximize"),
  close: () => ipcRenderer.send("window:close"),
  toggleFullscreen: () => ipcRenderer.send("window:fullscreen"),
  createNewWindow: () => ipcRenderer.send("window:new"),

  // Navigation controls
  goBack: () => ipcRenderer.send("window:back"),
  goForward: () => ipcRenderer.send("window:forward"),
  refresh: () => ipcRenderer.send("window:refresh"),
  getNavState: () => ipcRenderer.invoke("window:get-nav-state"),

  // Window state listener
  onWindowStateChange: (callback) => {
    ipcRenderer.on("window-state", (_, state) => callback(state));
  },
});
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

// 🧭 Register navigation state handler using the modern API
ipcMain.handle("window:get-nav-state", () => {
  const win = BrowserWindow.getFocusedWindow();
  if (!win) return { canGoBack: false, canGoForward: false };

  const { canGoBack, canGoForward } = win.webContents.navigationHistory;
  return {
    canGoBack: Boolean(canGoBack),
    canGoForward: Boolean(canGoForward),
  };
});

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minHeight: 600,
    minWidth: 800,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("http://localhost:5173");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

// 🚀 Create window when app is ready
app.whenReady().then(createWindow);

// 🧼 Reopen window on macOS if no windows remain
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// 🔘 Window Controls
ipcMain.on("window:minimize", () => {
  const focusedWin = BrowserWindow.getFocusedWindow();
  if (focusedWin) focusedWin.minimize();
});

ipcMain.on("window:maximize", () => {
  const focusedWin = BrowserWindow.getFocusedWindow();
  if (focusedWin) {
    focusedWin.isMaximized() ? focusedWin.restore() : focusedWin.maximize();
  }
});

ipcMain.on("window:close", () => {
  const focusedWin = BrowserWindow.getFocusedWindow();
  if (focusedWin) focusedWin.close();
});

ipcMain.on("window:fullscreen", () => {
  const focusedWin = BrowserWindow.getFocusedWindow();
  if (focusedWin) {
    focusedWin.setFullScreen(!focusedWin.isFullScreen());
  }
});

// ↩️ Navigation Actions
ipcMain.on("window:back", () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win && win.webContents.navigationHistory.canGoBack) {
    win.webContents.goBack();
  }
});

ipcMain.on("window:forward", () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win && win.webContents.navigationHistory.canGoForward) {
    win.webContents.goForward();
  }
});

ipcMain.on("window:refresh", () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.webContents.reload();
});

// 🆕 New Window Support
ipcMain.on("window:new", () => {
  let newWin = new BrowserWindow({
    width: 1100,
    height: 700,
    minHeight: 600,
    minWidth: 800,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      nodeIntegration: false,
    },
  });

  newWin.loadURL("http://localhost:5173");

  newWin.on("closed", () => {
    newWin = null;
  });
});
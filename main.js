const {
  app,
  BrowserWindow,
  session,
  ipcMain,
  Tray,
  Menu,
  nativeImage
} = require("electron");

const path = require("path");

let mainWindow;
let tray;

function createWindow() {

  mainWindow = new BrowserWindow({

    width: 1280,
    height: 860,

    minWidth: 1000,
    minHeight: 700,

    autoHideMenuBar: true,

    backgroundColor: "#0b140b",

    icon: path.join(__dirname, "icon/icon.ico"),

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false
    }

  });

  session.defaultSession.setPermissionRequestHandler(
    (webContents, permission, callback) => {

      if (
        permission === "media" ||
        permission === "camera" ||
        permission === "microphone"
      ) {
        callback(true);
      } else {
        callback(false);
      }

    }
  );

  mainWindow.loadFile("index.html");

  mainWindow.on("close", (e) => {

    if (!app.isQuiting) {

      e.preventDefault();

      mainWindow.hide();

    }

    return false;

  });

}

function createTray() {

  const trayIcon = nativeImage.createFromPath(
    path.join(__dirname, "icon/icon.ico")
  );

  tray = new Tray(trayIcon);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "打开护眼系统",
      click() {
        mainWindow.show();
      }
    },
    {
      label: "退出",
      click() {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip("护眼检测系统");

  tray.setContextMenu(contextMenu);

  tray.on("double-click", () => {
    mainWindow.show();
  });

}

app.whenReady().then(() => {

  createWindow();

  createTray();

});

app.on("window-all-closed", () => {

  if (process.platform !== "darwin") {
    app.quit();
  }

});

ipcMain.handle("minimize-window", () => {
  mainWindow.minimize();
});

ipcMain.handle("toggle-maximize", () => {

  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }

});

ipcMain.handle("close-window", () => {
  mainWindow.hide();
});
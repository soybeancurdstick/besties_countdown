const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {

    const win = new BrowserWindow({

        width: 400,
        height: 230,

        frame: false,

        transparent: true,

        resizable: false,

        alwaysOnTop: false,

        webPreferences: {

            preload: path.join(__dirname, "preload.js"),

            contextIsolation: true,

            nodeIntegration: false

        }

    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on("close-window", () => {

    app.quit();

});
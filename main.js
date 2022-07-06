const electron = require('electron');
const url = require('url'); 
const path = require('path'); 
const { Menu } = require('electron');

const {app, BrowserWindow} = electron;

let mainWindow; 

// Listen for app to be ready
app.on('ready', function() {
    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file', 
        slashes: true
    }));

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);    
});

// Handle create add window
function createAddWindow() {
     //Create new window
     mainWindow = new BrowserWindow({});
     //Load html into window
     mainWindow.loadURL(url.format({
         pathname: path.join(__dirname, 'mainWindow.html'),
         protocol:'file', 
         slashes: true
     }));
}

// Create menu template
const mainMenuTemplate = [
    {
        label:'File', 
        submenu:[
            {
                label: 'Add Items',
                click(){
                    createAddWindow();
                }
            },
            {
                label: 'Clear Items'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }, 
  
];
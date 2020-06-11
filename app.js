const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');
const {ipcMain} = require('electron')
const {Communication} = require('./comm')
const {TxtInvStatus, processCommand ,packResponseBuffer} = require('./TxtInverter')

//menu template
let menuTemplate = [
    {
        label: "File",
        submenu: [
            { role: "quit" }
        ]
    }
];
//Windowing
let win;
function createWindow(){
	win = new BrowserWindow({
    width: 1000,
    height: 800,
    'min-width': 800,
    'min-height': 200,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden',
    'title':'InverSIm 0.1 : Axpert Inverter Communication Simulator',
     webPreferences: {
                nodeIntegration: true
      }
	});
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol:'file',
		slashes: true
	})
	);

	let menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
	

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});

	

}


app.on('ready', createWindow);

app.on('windows-all-closed', () =>{
	if(process.platform !== 'darwin'){
		app.quit();
	}
})

//Communication
var startComm = ( params)=>{
	var method = params.mode;
	if (method == "udp"){
		var udp_port = params.udp_port;

		var started = Communication.startUDPServer(udp_port);
		handleServerStarted("udp", started);
		if (!started){
			return;
		}
		Communication.udpServer.on('message',function(msg,info){
			var responseObj = handleIncoming(msg);

			//sending msg
			Communication.udpServer.send( responseObj.response ,info.port,'localhost',function(error){
			 	if(error){
			    	client.close();
			  	}

			  	handleOutcoming(error, responseObj);

				});

		});

		//emits when socket is ready and listening for datagram msgs
		Communication.udpServer.on('listening',function(){
	  		console.log('Server is listening at port');
		});
	
	}else if(method == "serial"){

		var started  = Communication.startSerialServer({
			path:params.port,
			baudRate:params.baudrate
		}, function(error){
			handleServerStarted("serial", error ? false:true );
		});


		Communication.serialParser.on('data', function(line){

			var responseObj = handleIncoming(line);

			//sending message
			Communication.serialServer.write(responseObj.response);
			handleOutcoming(false, responseObj);

		});
	}
	
	

	
};
var stopComm = (method) => {
	if (Communication.connectedMethod == 'udp'){
		var stopped = Communication.stopUDPServer();
		handleServerStopped(method, stopped);
	}else if (Communication.connectedMethod == 'serial'){
		var stopped = Communication.stopSerialServer();
		handleServerStopped(method, stopped);
	}
	
};


//msgbytes : Buffer
var handleIncoming = function(msgbytes){
	//notify WebPage
	win.webContents.send('comm-rx', msgbytes.toString())

	//calculate the message
	var responseObj = processCommand(msgbytes);
	//var response = responseObj.response;
	
	return responseObj;
}

var handleOutcoming = function(error, respobj){
	if (error){
		console.log("ERROR");
	}else{
		win.webContents.send('comm-tx', respobj.response.toString() )
		if( respobj.change )
			win.webContents.send('sim-inv-cnf-change', appBuildUiInvState() );

	}

}

var handleServerStarted = function(method, started){
	win.webContents.send('sim-comm-server-started', {error:!started} );

}

var handleServerStopped = function (method, stopped){
	win.webContents.send('sim-comm-server-stopped', {error:!stopped} );
}

//events
ipcMain.on('ui-startstop-server',(event, params)=>{
	
	if( params.command == "start" ){
		startComm(params.params);
	}else if( params.command == "stop" ){
		stopComm(params.params.mode);
	}
})


ipcMain.on('ui-cmd-exe', (event, command)=>{
	//notify WebPage
	win.webContents.send('comm-rx', command );
	//calculate the message
	var responseObj = processCommand(packResponseBuffer(command.toString()));
	var response = responseObj.response;
	win.webContents.send('comm-tx', response.toString() )
	if( responseObj.change )
		win.webContents.send('sim-inv-cnf-change', appBuildUiInvState() );
})

ipcMain.on('ui-inv-cnf-change', (event, uicnf)=>{
	appUpdateInvState(uicnf);
	//console.log(uicnf);
})

ipcMain.on('ui-ready', (event, data)=>{
	putEverythingAtDefault();
})



var appUpdateInvState = function(uicnf){
	//a whole copy of the UI config to the Simulator config
	//Flags
	TxtInvStatus.model_hint = uicnf.model_hint;
	TxtInvStatus.mode = uicnf.mode;
	TxtInvStatus.flags = uicnf.flags;
	TxtInvStatus.general_status = uicnf.general_status ;
	TxtInvStatus.warnings = uicnf.warnings;
}

var appBuildUiInvState = function(){
	return TxtInvStatus;
}

var putEverythingAtDefault = function(){
	var command ="PF"; 
	//notify WebPage
	//win.webContents.send('comm-rx', command );
	//calculate the message
	var responseObj = processCommand(packResponseBuffer(command.toString()));
	var response = responseObj.response;
	//win.webContents.send('comm-tx', response.toString() )
	if( responseObj.change )
		win.webContents.send('sim-inv-cnf-change', appBuildUiInvState() );

}
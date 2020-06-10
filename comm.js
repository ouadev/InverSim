var udp = require('dgram');
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const Delimiter = require('@serialport/parser-delimiter')

// --------------------creating a udp server --------------------







const commStartUDPServer = (port)=>{
  if ( !Communication.udpServer){
    Communication.udpServer = udp.createSocket('udp4');
  }
  //emits after the socket is closed using socket.close();
  Communication.udpServer.on('close',function(){
    console.log('Socket is closed !');
  });
  // emits when any error occurs
  Communication.udpServer.on('error',function(error){
    console.log('Error: ' + error);
    Communication.udpServer.close();
  });

    //bind
  Communication.udpServer.bind(parseInt(port) );

  Communication.connectedMethod = 'udp';

  return true;

}

const commStopUDPServer = () =>{
  if( Communication.udpServer ){
    Communication.udpServer.close();
    Communication.udpServer = null;
    Communication.connectedMethod = null;
  }
  return true;
  
}

/* Serial Server*/
var commStartSerialServer = function(portconf, callback){
  Communication.serialServer = new SerialPort(
    portconf.path,
    {
      baudRate : portconf.baudRate
    }, callback);

  Communication.serialParser = new Delimiter( {delimiter: Buffer.alloc(1, 10) } );
  Communication.serialServer.pipe(Communication.serialParser);

  Communication.connectedMethod = 'serial';
  return true;
}

var commStopSerialServer = function(){
  Communication.serialServer.close();
  Communication.serialServer = null;

  return true;
}
// creating a udp server
var Communication = {
  connectedMethod : null,
  udpServer : null,
  startUDPServer : commStartUDPServer,
  stopUDPServer : commStopUDPServer,

  serialServer : null,
  serialParser : null,
  startSerialServer : commStartSerialServer,
  stopSerialServer : commStopSerialServer
};


module.exports.Communication=Communication;
# InverSim 0.1
This is an Electron JS application to simulate Axpert power inverters communication protocol.

![Alt text](docs/inversim-0.1-ui.png?raw=true "InverSim 0.1 Screenshot")

# Features
+ replies to commands sent via a serial link or UDP.
+ configure some general characteristics of the inverter : flags, warnings, and status data.
+ setting parameters commands changes internal values, example : PE/PD
+ a console to view the received commands and sent responses.
+ possibility to send commands to the simulator on the UI.

# Download
releases : https://github.com/ouadev/InverSim/releases
 
# disclaimer
The Axpert power inverters have several series and models, and there is no official specification for each model. 
This application helps developers check if their programs, interfacing with an Axpert power inverter, are sending commands with the right format : length, CRC, etc. Howerver, the responses to the commands are guaranteed to cover 95% of cases, since some models don't implement all of the commands, or reply differently. Please check the specification you have for your model, and make sure the simulator is replying the way it's expected, and send a PR if something doesn't add up.

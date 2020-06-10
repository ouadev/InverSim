
//Protocol Flavors : Inverter models
const TxtInvModels = [
			"AXPERT-OTHER",
			"AXPERT-VP-3000",
			"AXPERT-VM-3000",
			"AXPERT-VM-PLUS",
			"AXPERT-VM-5000",
			"AXPERT-KS-1000",
			"AXPERT-KS-2000",
			"AXPERT-KS-3000",
			"AXPERT-KS-4000",
			"AXPERT-KS-5000",
			"AXPERT-MKS-1000-12",
			"AXPERT-MKS-1000-24",
			"AXPERT-MKS-2000-24",
			"AXPERT-MKS-3000-24",
			"AXPERT-MKS-2000-24-plus",
			"AXPERT-MKS-3000-24-plus",
			"AXPERT-MKS-1000-48",
			"AXPERT-MKS-2000-48",
			"AXPERT-MKS-3000-48",
			"AXPERT-MKS-2000-48-plus",
			"AXPERT-MKS-3000-48-plus",
			"AXPERT-MKS-4000",
			"AXPERT-MKS-5000",
];

//Global State of the Inverter using ASCII protocol.
var TxtInvStatus =
{
	model_hint:"other",
	device: "AXPERT-KS-1000",
	flags : {
		buzzer : true,
		bypass_function : true,
		bypass_function_forbidden : true,
		power_saving : true,
		lcd_escape : true,
		overload_restart : true,
		overtemperature_restart : true,
		backlights_on : true,
		alarm_primary_interrupt : true,
		fault_code_record : true
	},
	general : {
		serial_number : "INVERSIM-00000", //show the same on for the long version
		firmware_version : "VERFW:00000.10", //QVFW 
		firmware_version_2 : "VERFW2:FFFFF.FF",

	},
	rated: {
		grid_voltage : 241.0,
		grid_current: 5.0,
		ac_out_voltage: 0.0,
		ac_out_frequency : 50.0,
		ac_out_current : 1.0,
		ac_out_apparent_power : 5555,
		ac_out_active_power : 444,
		battery_voltage : 44.6,
		battery_recharge_voltage : 44.1,
		battery_under_voltage : 77.9,
		battery_bulk_voltage : 11.1,
		battery_float_voltage : 88.8,
		battery_type : 2,
		ac_max_charging_current : 55,
		max_charging_current : 78,
		in_voltage_range : 1,
		out_source_priority : 2,
		charger_source_priority : 3,
		parallel_max_number : 9,
		machine_type : 01,//01,10
		topology : 1,
		out_mode : 04, //00,01,02,03
		battery_redischarge_voltage : 99.9,
		pv_ok_condition_parallel : 0,
		pv_power_balance : 1,
		max_charging_time_cv : 999,
		operation_logic_king: 2 //Axpert King only
	},
	mode: "L",
	general_status:{
		grid_voltage : 444.3,
		grid_frequency: 12.1,
		ac_out_voltage: 4.5,
		ac_out_frequency: 45.5,
		ac_out_apparent_power: 4444,
		ac_out_active_power: 7898,
		out_load_percent: 147,
		bus_voltage: 111,
		battery_voltage: 45.45,
		battery_charging_current: 121,
		battery_capacity: 232,
		heat_sink_temperature: 1474,
		pv_in_current_battery: 5588,
		pv_in_voltage_1: 142.3,
		battery_voltage_scc: 11.22,
		battery_discharge_current: 1541,
		status_add_sbu_priority_version:false,
		status_configuration_status_changed:true,
		status_scc_firmware_version_updated:false,
		status_load:false,
		status_battery_voltage_steady:true,
		status_charging:false,
		status_charging_scc:true,
		status_charging_ac:false,
		battery_voltage_offset_fans:44,
		eeprom_version:12,
		pv_charging_power:12345,
		status_charging_floating_mode:false,
		status_switch_on:true,
		status_dustproof_installed:false, //axpert V series Only

		ac_max_charging_current : 55,
		max_charging_current : 78,
		ac_in_voltage_range : 1,
		out_source_priority : 2,
		battery_recharge_voltage : 44.1,
		charger_source_priority : 3,
		battery_type : 2,
		out_mode: 00, //single machine output
		battery_float_voltage : 88.8,
		battery_bulk_voltage : 11.1,
		battery_under_voltage : 77.9,
		battery_redischarge_voltage : 99.9,
		pv_ok_condition_parallel : 1,
		pv_power_balance : 1,
		max_charging_time_cv : 999,
		operation_logic_king: 2 //Axpert King only

	},
	parallel_info:{ //only one parallel.
		exists : true,
		serial_number: "123456789ABCDE",
		work_mode : "L",
		fault_code : 01,
		grid_voltage : 124.21,
		grid_frequency : 45.54,
		ac_out_voltage : 444.2,
		ac_out_frequency : 55.02,
		ac_out_apparent_power : 4414,
		ac_out_active_power : 1212,
		load_percentage : 147,
		battery_voltage : 11.2,
		battery_charging_current : 121,
		battery_capacity : 111,
		pv_in_voltage : 124.36,
		total_charging_current : 458,
		total_ac_out_apparent_power:12345,
		total_out_active_power : 14785,
		total_ac_out_percentage : 124,
		status_scc_ok:false,
		status_ac_charging:true,
		status_scc_charging:true,
		status_battery : 0 ,//2 :open, 1:under, 0:normal,
		status_line_loss : false,
		status_load_on : true,
		status_configuration_changed : false,
		out_mode : 3, //0-4
		charger_source_priority : 2, //0-3
		max_charger_current : 121,
		max_charger_range : 478,
		max_ac_charger_current : 44,
		pv_in_current_battery : 14,
		battery_discharge_current : 474
	},
	warnings:{
		inverter_fault:true,
		bus_over:true,
		bus_under : false,
		bus_soft_fail : false,
		line_fail : true, 
		opvshort : false,
		inverter_voltage_too_low : false,
		inverter_voltage_too_high : false,
		over_temperature : false,
		fan_locked : false,
		battery_voltage_high : false,
		battery_low_alarm : false,
		overcharge : false,
		battery_under_shutdown : false,
		battery_derating : false,
		over_load : false,
		eeprom_fault : false,
		inverter_over_current : false,
		inverter_soft_fail : false,
		self_test_fail : false,
		op_dc_voltage_over : false,
		bat_open : false,
		current_sensor_fail : false,
		battery_short : false,
		power_limit : false,
		pv_voltage_high : false,
		mppt_overload_fault : false,
		mppt_overload_warning : false,
		battery_too_low_to_charge : false,
		dcdc_over_current : false,
		fault_code:"51"
	},
	default:{
		ac_out_voltage : 230.0,
		ac_out_frequency: 50.0,
		max_ac_charging_current : {
			"AXPERT-OTHER":25,
			"AXPERT-VP-3000":25,
			"AXPERT-VM-3000":25,
			"AXPERT-VM-PLUS":30,
			"AXPERT-VM-5000":25,
			"AXPERT-KS-1000":20,
			"AXPERT-KS-2000":30,
			"AXPERT-KS-3000":30,
			"AXPERT-KS-4000":30,
			"AXPERT-KS-5000":30,
			"AXPERT-MKS-1000-12":20,
			"AXPERT-MKS-1000-24":20,
			"AXPERT-MKS-2000-24":30,
			"AXPERT-MKS-3000-24":30,
			"AXPERT-MKS-2000-24-plus":30,
			"AXPERT-MKS-3000-24-plus":30,
			"AXPERT-MKS-1000-48":15,
			"AXPERT-MKS-2000-48":15,
			"AXPERT-MKS-3000-48":15,
			"AXPERT-MKS-2000-48-plus":15,
			"AXPERT-MKS-3000-48-plus":15,
			"AXPERT-MKS-4000":30,
			"AXPERT-MKS-5000":30
		},
		battery_under_voltage:11.5,
		charging_float_voltage:11.5,
		charging_bulk_voltage:11.5,
		battery_recharge_voltage: 11.5,
		max_charging_current:{
			"AXPERT-OTHER":50,
			"AXPERT-VP-3000":50,
			"AXPERT-VM-3000":40,
			"AXPERT-VM-PLUS":60,
			"AXPERT-VM-5000": 60,
			"AXPERT-KS-1000":50,
			"AXPERT-KS-2000":50,
			"AXPERT-KS-3000":50,
			"AXPERT-KS-4000":50,
			"AXPERT-KS-5000":50,
			"AXPERT-MKS-1000-12":20,
			"AXPERT-MKS-1000-24":20,
			"AXPERT-MKS-2000-24":30,
			"AXPERT-MKS-3000-24":30,
			"AXPERT-MKS-2000-24-plus":60,
			"AXPERT-MKS-3000-24-plus":60,
			"AXPERT-MKS-1000-48":20,
			"AXPERT-MKS-2000-48":20,
			"AXPERT-MKS-3000-48":20,
			"AXPERT-MKS-2000-48-plus":15,
			"AXPERT-MKS-3000-48-plus":60,
			"AXPERT-MKS-4000":60,
			"AXPERT-MKS-5000":60
		},
		ac_in_voltage_range:0, //there is a difference for King !!
		out_source_priority:0,
		charger_source_priority : 0,
		battery_type : 0,
		dis_buzzer : 0,
		en_power_saving : 0,
		en_overload_restart : 0,
		en_overtemperature_restart : 0,
		en_backlight : 1,
		en_alarm_primary_source_interrupt: 1,
		en_fault_code_record : 0,
		overload_bypass : 0,
		en_lcd_escape : 1,
		out_mode : 0,
		battery_redischarge_voltage: 54.0, //differ
		pv_ok_condition_parallel : 0,
		pv_power_balance : 0,
		max_charging_time_cv : 0,
		operation_logic_king : 0

	},
	
	battery_equalization:{
		enabled : false,
		active : true,
		time: 556,
		period:1,
		voltage:20.23,
		overtime:152,
		max_current : 102, //todo: add to UI ?
	}
};

module.exports.TxtInvStatus = TxtInvStatus;



var packResponseBuffer = function(strPayload){

	var bufpayload = Buffer.from(strPayload);
	var crc = crc16(bufpayload);
	var resbuf = Buffer.alloc(bufpayload.length + 3);

	bufpayload.copy( resbuf, 0, 0, bufpayload.length);
	crc.copy(resbuf, bufpayload.length, 0, crc.length);

	resbuf[bufpayload.length + 2] = 0x0d;

	return resbuf;
}
module.exports.packResponseBuffer = packResponseBuffer;
//cmdbytes: Buffer
var processCommand =  function(cmdbytes){
	var resp;
	var isSetCommand = false;
	var device  = TxtInvStatus.device;
	var cmd = null;
	resp = "(";
	//analyze rx
	var payloadbytes = cmdbytes.subarray(0, cmdbytes.length-3);

	var crc_rx = cmdbytes.subarray(payloadbytes.length,payloadbytes.length+2 );
	console.log(crc_rx);
	var crc = crc16(payloadbytes);
	console.log( crc);


	if(crc.equals(crc_rx) == false ){
		resp += "NAK";
		return {
			response:packResponseBuffer(resp),
			change: isSetCommand,
		};
	}

	cmd = payloadbytes.toString();
	//construct response
	
	if ( cmd == "QID"){
		resp += TxtInvStatus.general.serial_number;


	}else if( cmd == "QSID" ){
		resp += TxtInvStatus.general.serial_number + "000000";
	}else if( cmd == "QVFW"){
		resp += TxtInvStatus.general.firmware_version;

	}else if ( cmd == "QVFW2" ){
		resp += TxtInvStatus.general.firmware_version_2;

	}else if( cmd == "QPIRI"){
		resp += floatStr(TxtInvStatus.rated.grid_voltage, 3,1) + " ";
		resp += floatStr(TxtInvStatus.rated.grid_current, 2,1) + " ";
		resp += floatStr(TxtInvStatus.rated.ac_out_voltage, 3,1) + " ";
		resp += floatStr(TxtInvStatus.rated.ac_out_frequency, 2,1) + " ";
		resp += floatStr(TxtInvStatus.rated.ac_out_current, 2,1) + " ";
		resp +=   intStr(TxtInvStatus.rated.ac_out_apparent_power, 4) + " ";
		resp +=   intStr(TxtInvStatus.rated.ac_out_active_power, 3) + " ";
		resp += floatStr(TxtInvStatus.rated.battery_voltage, 2,1) + " ";
		resp += floatStr(TxtInvStatus.rated.battery_recharge_voltage, 2,1) + " ";
		resp += floatStr(TxtInvStatus.rated.battery_under_voltage, 2,1) + " ";
		resp += floatStr(TxtInvStatus.rated.battery_bulk_voltage, 2,1) + " ";
		resp += floatStr(TxtInvStatus.rated.battery_float_voltage, 2,1) + " ";
		resp += TxtInvStatus.rated.battery_type + " ";
		resp +=   intStr(TxtInvStatus.rated.ac_max_charging_current, 2) + " ";
		resp +=   intStr(TxtInvStatus.rated.max_charging_current, 2) + "0 ";
		resp += TxtInvStatus.rated.in_voltage_range + " ";
		resp += TxtInvStatus.rated.out_source_priority + " ";
		resp += TxtInvStatus.rated.charger_source_priority + " ";
		resp += TxtInvStatus.rated.parallel_max_number + " ";
		resp +=   intStr(TxtInvStatus.rated.machine_type, 2) + " ";
		resp += TxtInvStatus.rated.topology + " ";
		resp += TxtInvStatus.rated.out_mode + " ";
		resp += floatStr(TxtInvStatus.rated.battery_redischarge_voltage, 2,1) + " ";
		resp += TxtInvStatus.rated.pv_ok_condition_parallel + " ";
		resp += TxtInvStatus.rated.pv_power_balance + " ";
		resp +=   intStr(TxtInvStatus.rated.max_charging_time_cv, 3) + " ";

		if (TxtInvStatus.model_hint == "king"){
			resp +=TxtInvStatus.rated.operation_logic_king;
		}
		



	}else if ( cmd == "QMOD"){
		resp += TxtInvStatus.mode;

	}else if ( cmd == "QPIGS"){
		resp += floatStr( TxtInvStatus.general_status.grid_voltage,3,1) + " ";
		resp += floatStr( TxtInvStatus.general_status.grid_frequency,2,1) + " ";
		resp += floatStr( TxtInvStatus.general_status.ac_out_voltage,3,1) + " ";
		resp += floatStr( TxtInvStatus.general_status.ac_out_frequency,2,1) + " ";
		resp += intStr( TxtInvStatus.general_status.ac_out_apparent_power,4) + " ";
		resp += intStr( TxtInvStatus.general_status.ac_out_active_power,4) + " ";
		resp += floatStr( TxtInvStatus.general_status.out_load_percent,3) + " ";
		resp += intStr( TxtInvStatus.general_status.bus_voltage,3) + " ";
		resp += floatStr( TxtInvStatus.general_status.battery_voltage,2,2) + " ";
		resp += intStr( TxtInvStatus.general_status.battery_charging_current,3) + " ";
		resp += intStr( TxtInvStatus.general_status.battery_capacity,3) + " ";
		resp += intStr( TxtInvStatus.general_status.heat_sink_temperature,4 ) + " ";
		resp += intStr( TxtInvStatus.general_status.pv_in_current_battery,4) + " ";
		resp += floatStr( TxtInvStatus.general_status.pv_in_voltage_1,3,1) + " ";
		resp += floatStr( TxtInvStatus.general_status.battery_voltage_scc,2,2) + " ";
		resp += intStr( TxtInvStatus.general_status.battery_discharge_current,5) + " ";

		resp += TxtInvStatus.general_status.status_add_sbu_priority_version ?"1":"0";
		resp += TxtInvStatus.general_status.status_configuration_status_changed ?"1":"0";
		resp += TxtInvStatus.general_status.status_scc_firmware_version_updated ?"1":"0";
		resp += TxtInvStatus.general_status.status_load ?"1":"0";
		resp += TxtInvStatus.general_status.status_battery_voltage_steady ?"1":"0";
		resp += TxtInvStatus.general_status.status_charging ?"1":"0";
		resp += TxtInvStatus.general_status.status_charging_scc ?"1":"0";
		resp += TxtInvStatus.general_status.status_charging_ac ?"1":"0";
		resp += " ";

		resp += intStr( TxtInvStatus.general_status.battery_voltage_offset_fans,2) + " ";
		resp += intStr( TxtInvStatus.general_status.eeprom_version,2) + " ";
		resp += intStr( TxtInvStatus.general_status.pv_charging_power,5) + " ";

		resp += TxtInvStatus.general_status.status_charging_floating_mode ?"1":"0";
		resp += TxtInvStatus.general_status.status_switch_on ?"1":"0";
		resp += TxtInvStatus.general_status.status_dustproof_installed ?"1":"0";
		
	}else if ( cmd.startsWith("QPGS") ){

		resp +="NAK"; //NO PARALLEL
		/*
		//parallel information.: QPGSn
		var parallel_n = parseInt(cmd.charAt(4));

		resp += (parallel_n == 1) ? "1 ":"0 "; //A:num parallel exists.
		resp += TxtInvStatus.parallel_info.serial_number + " ";
		resp += TxtInvStatus.parallel_info.work_mode + " ";
		resp += intStr( TxtInvStatus.parallel_info.fault_code,2) + " ";
		resp += floatStr( TxtInvStatus.parallel_info.grid_voltage,3,1) + " ";
		resp += floatStr( TxtInvStatus.parallel_info.grid_frequency,2,2) + " ";
		resp += floatStr( TxtInvStatus.parallel_info.ac_out_voltage,3,1) + " ";
		resp += floatStr( TxtInvStatus.parallel_info.ac_out_frequency,2,2) + " ";
		resp += intStr( TxtInvStatus.parallel_info.ac_out_apparent_power,4) + " ";
		resp += intStr( TxtInvStatus.parallel_info.ac_out_active_power,4) + " ";
		resp += intStr( TxtInvStatus.parallel_info.load_percentage,3) + " ";
		resp += floatStr( TxtInvStatus.parallel_info.battery_voltage,2,1) + " ";
		resp += intStr( TxtInvStatus.parallel_info.battery_charging_current,3) + " ";
		resp += intStr( TxtInvStatus.parallel_info.battery_capacity,3) + " ";
		resp += floatStr( TxtInvStatus.parallel_info.pv_in_voltage,3,1) + " ";
		resp += intStr( TxtInvStatus.parallel_info.total_charging_current,3) + " ";
		resp += intStr( TxtInvStatus.parallel_info.total_ac_out_apparent_power,5) + " ";
		resp += intStr( TxtInvStatus.parallel_info.total_out_active_power,5) + " ";
		resp += intStr( TxtInvStatus.parallel_info.total_ac_out_percentage,3) + " ";

		resp += TxtInvStatus.parallel_info.status_scc_ok ? "1":"0";
		resp += TxtInvStatus.parallel_info.status_ac_charging ? "1":"0";
		resp += TxtInvStatus.parallel_info.status_scc_charging ? "1":"0";
		resp += TxtInvStatus.parallel_info.status_battery;
		resp += TxtInvStatus.parallel_info.status_line_loss? "1":"0";
		resp += TxtInvStatus.parallel_info.status_load_on ? "1":"0";
		resp += TxtInvStatus.parallel_info.status_configuration_changed ? "1":"0";
		resp += " "

		resp += TxtInvStatus.parallel_info.out_mode + " ";
		resp += TxtInvStatus.parallel_info.charger_source_priority + " ";
		resp += intStr( TxtInvStatus.parallel_info.max_charger_current,3) + " ";
		resp += intStr( TxtInvStatus.parallel_info.max_charger_range,3) + " ";
		resp += intStr( TxtInvStatus.parallel_info.max_ac_charger_current,2) + " ";
		resp += intStr( TxtInvStatus.parallel_info.pv_in_current_battery,2) + " ";
		resp += intStr( TxtInvStatus.parallel_info.battery_discharge_current,3) + " ";

		*/

	}else if( cmd == "QPIWS"){
		resp += "0"; //reserved
		resp += TxtInvStatus.warnings.inverter_fault ? "1":"0";
		resp += TxtInvStatus.warnings.bus_over ? "1":"0";
		resp += TxtInvStatus.warnings.bus_under ? "1":"0";
		resp += TxtInvStatus.warnings.bus_soft_fail ? "1":"0";
		resp += TxtInvStatus.warnings.line_fail ? "1":"0";
		resp += TxtInvStatus.warnings.opvshort ? "1":"0";
		resp += TxtInvStatus.warnings.inverter_voltage_too_low ? "1":"0";
		resp += TxtInvStatus.warnings.inverter_voltage_too_high ? "1":"0";
		resp += TxtInvStatus.warnings.over_temperature ? "1":"0";
		resp += TxtInvStatus.warnings.fan_locked ? "1":"0";
		resp += TxtInvStatus.warnings.battery_voltage_high ? "1":"0";
		resp += TxtInvStatus.warnings.battery_low_alarm ? "1":"0";
		resp += TxtInvStatus.warnings.overcharge ? "1":"0";
		resp += TxtInvStatus.warnings.battery_under_shutdown ? "1":"0";
		resp += TxtInvStatus.warnings.battery_derating ? "1":"0";
		resp += TxtInvStatus.warnings.over_load ? "1":"0";
		resp += TxtInvStatus.warnings.eeprom_fault ? "1":"0";
		resp += TxtInvStatus.warnings.inverter_over_current ? "1":"0";
		resp += TxtInvStatus.warnings.inverter_soft_fail ? "1":"0";
		resp += TxtInvStatus.warnings.self_test_fail ? "1":"0";
		resp += TxtInvStatus.warnings.op_dc_voltage_over ? "1":"0";
		resp += TxtInvStatus.warnings.bat_open ? "1":"0";
		resp += TxtInvStatus.warnings.current_sensor_fail ? "1":"0";
		resp += TxtInvStatus.warnings.battery_short ? "1":"0";
		resp += TxtInvStatus.warnings.power_limit ? "1":"0";
		resp += TxtInvStatus.warnings.pv_voltage_high ? "1":"0";
		resp += TxtInvStatus.warnings.mppt_overload_fault ? "1":"0";
		resp += TxtInvStatus.warnings.mppt_overload_warning ? "1":"0";
		resp += TxtInvStatus.warnings.battery_too_low_to_charge ? "1":"0";
		resp += TxtInvStatus.warnings.dcdc_over_current ? "1":"0";
		resp += "0"; //reserved

		if(TxtInvStatus.model_hint == "king"){
			resp += intStr(TxtInvStatus.warnings.fault_code, 2); //2 chars.
		}
		





	}else if( cmd == "QDI"){
		
		resp += floatStr(TxtInvStatus.default.ac_out_voltage, 3, 1) + " ";
		resp += floatStr(TxtInvStatus.default.ac_out_frequency, 2, 1) + " ";
		resp += "00" + intStr(TxtInvStatus.default.max_ac_charging_current[device], 2) + " ";
		resp += floatStr(TxtInvStatus.default.battery_under_voltage, 2, 1) + " ";
		resp += floatStr(TxtInvStatus.default.charging_float_voltage, 2, 1) + " ";
		resp += floatStr(TxtInvStatus.default.charging_bulk_voltage, 2, 1) + " ";
		resp += floatStr(TxtInvStatus.default.battery_recharge_voltage, 2, 1) + " ";
		resp += intStr(TxtInvStatus.default.max_charging_current[device], 2) + " ";
		resp += TxtInvStatus.default.ac_in_voltage_range + " ";
		resp += TxtInvStatus.default.out_source_priority + " ";
		resp += TxtInvStatus.default.charger_source_priority + " ";
		resp += TxtInvStatus.default.battery_type + " ";
		resp += TxtInvStatus.default.dis_buzzer + " ";
		resp += TxtInvStatus.default.en_power_saving + " ";
		resp += TxtInvStatus.default.en_overload_restart + " ";
		resp += TxtInvStatus.default.en_overtemperature_restart + " ";
		resp += TxtInvStatus.default.en_backlight + " ";
		resp += TxtInvStatus.default.en_alarm_primary_source_interrupt + " ";
		resp += TxtInvStatus.default.en_fault_code_record + " ";
		resp += TxtInvStatus.default.overload_bypass + " ";
		resp += TxtInvStatus.default.en_lcd_escape + " ";
		resp += TxtInvStatus.default.out_mode + " ";
		resp += floatStr(TxtInvStatus.default.battery_redischarge_voltage, 2, 1) + " ";
		resp += TxtInvStatus.default.pv_ok_condition_parallel + " ";
		resp += TxtInvStatus.default.pv_power_balance + " ";
		resp += intStr(TxtInvStatus.default.max_charging_time_cv, 3) + " ";
		resp += TxtInvStatus.default.operation_logic_king;


	}else if( cmd == "QMCHGCR"){
		resp += TxtInvStatus.rated.max_charging_current[device];

	}else if( cmd == "QMUCHGCR"){
		resp += TxtInvStatus.rated.max_charging_current[device];

	}else if (cmd == "QOPM"){
		if (TxtInvStatus.model_hint == "4k5k"){
			resp += intStr( TxtInvStatus.general_status.out_mode, 2);
		}else{
			resp += "NAK";
		}

	}else if( cmd == "QFLAG"){
		var enabled = "";
		var disabled = "";
		if (TxtInvStatus.flags.buzzer)
			enabled += "a";
		else
			disabled += "a";
		if (TxtInvStatus.flags.bypass_function)
			enabled += "b";
		else
			disabled += "b";
		if (TxtInvStatus.flags.bypass_function_forbidden)
			enabled += "c";
		else
			disabled += "c";
		if (TxtInvStatus.flags.power_saving)
			enabled += "j";
		else
			disabled += "j";
		if (TxtInvStatus.flags.lcd_escape)
			enabled += "k";
		else
			disabled += "k";
		if (TxtInvStatus.flags.overload_restart)
			enabled += "u";
		else
			disabled += "u";
		if (TxtInvStatus.flags.overtemperature_restart)
			enabled += "v";
		else
			disabled += "v";
		if (TxtInvStatus.flags.backlights_on)
			enabled += "x";
		else
			disabled += "x";
		if (TxtInvStatus.flags.alarm_primary_interrupt)
			enabled += "y";
		else
			disabled += "y";
		if (TxtInvStatus.flags.fault_code_record)
			enabled += "z";
		else
			disabled += "z";

		resp += "E"+enabled+"D"+disabled;


	}else if( cmd.startsWith("PE") || cmd.startsWith("PD") ){
		//validate
		var ok=true;
		for (var i = 2; i < cmd.length; i++) {
			var f = cmd.charAt(i);
			if ("abcjkuvxyz".indexOf(f)< 0){
				ok=false;
				break;
			}

		}

		if(ok){

			//execute
			isSetCommand = true;

			if(cmd.startsWith("PE")){
				var val = true;
			}else{
				var val = false;
			}

			for (var i = 2; i < cmd.length; i++) {
				var f = cmd.charAt(i);
				if(f=='a')
					TxtInvStatus.flags.buzzer = val;
				else if(f == 'b')
					TxtInvStatus.flags.bypass_function = val;
				else if(f == 'c')
					TxtInvStatus.flags.bypass_function_forbidden = val;
				else if(f == 'j')
					TxtInvStatus.flags.power_saving = val;
				else if(f == 'k')
					TxtInvStatus.flags.lcd_escape = val;
				else if(f == 'u')
					TxtInvStatus.flags.overload_restart = val;
				else if(f == 'v')
					TxtInvStatus.flags.overtemperature_restart = val;
				else if(f == 'x')
					TxtInvStatus.flags.backlights_on = val;
				else if(f == 'y')
					TxtInvStatus.flags.alarm_primary_interrupt = val;
				else if(f == 'z')
					TxtInvStatus.flags.fault_code_record = val;
				else{
					//it shouldn't happen if we check commands before processing.
				}
				
			}

			resp += "ACK";
		}else{
			resp += "NAK";
		}



	}else if (cmd == "PF"){
		TxtInvStatus.general_status.ac_out_voltage = TxtInvStatus.default.ac_out_voltage;
		TxtInvStatus.general_status.ac_out_frequency= TxtInvStatus.default.ac_out_frequency;
		TxtInvStatus.general_status.max_charging_current = TxtInvStatus.default.max_charging_current[device];
		TxtInvStatus.general_status.ac_max_charging_current = TxtInvStatus.default.max_ac_charging_current[device];
		TxtInvStatus.general_status.ac_in_voltage_range = TxtInvStatus.default.ac_in_voltage_range;
		TxtInvStatus.general_status.out_source_priority = TxtInvStatus.default.out_source_priority;
		TxtInvStatus.general_status.battery_recharge_voltage  = TxtInvStatus.default.battery_recharge_voltage;
		TxtInvStatus.general_status.charger_source_priority = TxtInvStatus.default.charger_source_priority;
		TxtInvStatus.general_status.battery_type = TxtInvStatus.default.battery_type;
		
		TxtInvStatus.flags.buzzer =  ! TxtInvStatus.default.dis_buzzer;
		TxtInvStatus.flags.power_saving =  ! TxtInvStatus.default.en_power_saving;
		TxtInvStatus.flags.overload_restart =  ! TxtInvStatus.default.en_overload_restart;
		TxtInvStatus.flags.backlights_on =  ! TxtInvStatus.default.en_backlight;
		TxtInvStatus.flags.alarm_primary_interrupt =  ! TxtInvStatus.default.en_alarm_primary_source_interrupt;
		TxtInvStatus.flags.overload_bypass =  ! TxtInvStatus.default.overload_bypass;
		TxtInvStatus.flags.lcd_escape =  ! TxtInvStatus.default.en_lcd_escape;

		TxtInvStatus.general_status.out_mode = TxtInvStatus.default.out_mode;
		TxtInvStatus.general_status.battery_float_voltage = TxtInvStatus.default.charging_float_voltage;
		TxtInvStatus.general_status.battery_bulk_voltage = TxtInvStatus.default.charging_bulk_voltage;
		TxtInvStatus.general_status.battery_under_voltage = TxtInvStatus.default.battery_under_voltage;
		TxtInvStatus.general_status.battery_redischarge_voltage = TxtInvStatus.default.battery_redischarge_voltage;
		TxtInvStatus.general_status.pv_ok_condition_parallel = TxtInvStatus.default.pv_ok_condition_parallel;
		TxtInvStatus.general_status.pv_power_balance = TxtInvStatus.default.pv_power_balance;
		TxtInvStatus.general_status.max_charging_time_cv = TxtInvStatus.default.max_charging_time_cv;
		TxtInvStatus.general_status.operation_logic_king = TxtInvStatus.default.operation_logic_king;
		resp += "ACK";
		isSetCommand = true;


				//
	}else if (cmd.startsWith("MCHGC") ){
		//verify
		if (cmd.length != 8){
			resp += "NAK";
		}else{
			//==8
			//read
			var current = cmd.substring(5,8);
			if(isNaN(current)){
				resp += "NAK";
			}else{
				//is a number
				TxtInvStatus.general_status.max_charging_current = parseInt(current);
				resp += "ACK";
				isSetCommand = true;
			}

		}
		
		
	}else if (cmd.startsWith("MNCHGC")){
		resp+="NAK";
		if (cmd.length == 10){
			var current = cmd.substring(6,10);
			if(!isNaN(current)){
				TxtInvStatus.general_status.max_charging_current = parseInt(current);
				resp += "ACK";
			isSetCommand = true;
			}
			
		}
		

	}else if (cmd.startsWith("MUCHGC")){
		resp+="NAK";
		if (cmd.length == 8){
			var current = cmd.substring(5,8);
			if (!isNaN(current)){
				TxtInvStatus.general_status.ac_max_charging_current = parseInt(current);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("F")){ //should be after all the words that starts with F
		resp+="NAK";
		if (cmd.length == 3){
			var freq = cmd.substring(1,3);
			if(!isNaN(freq)){
				TxtInvStatus.general_status.ac_out_frequency = parseInt(freq);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("POP")){
		resp+="NAK";
		if (cmd.length == 5){
			var prio = cmd.substring(3,5);
			if(!isNaN(prio)){
				TxtInvStatus.general_status.out_source_priority = parseInt(prio);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PBCV")){
		//PBCVnn.n
		resp+="NAK";
		if (cmd.length == 8){
			var volt = cmd.substring(4,8);
			if(volt.charAt(2)=="." && !isNaN(volt)){
				TxtInvStatus.general_status.battery_recharge_voltage = parseFloat(volt);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PBDV")){
		//PBDVnn.n
		resp+="NAK";
		if (cmd.length == 8){
			var volt = cmd.substring(4,8);
			if(volt.charAt(2)=="." && !isNaN(volt)){
				TxtInvStatus.general_status.battery_redischarge_voltage = parseFloat(volt);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PCP")){
		resp+="NAK";
		if (cmd.length == 5){
			var prio = cmd.substring(3,5);
			if(!isNaN(prio)){
				TxtInvStatus.general_status.charger_source_priority = parseInt(prio);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PGR")){
		resp += "ACK";
		isSetCommand = true;
		//todo: meaning ?
	}else if (cmd.startsWith("PBT")){
		resp+="NAK";
		if (cmd.length == 5){
			var type = cmd.substring(3,5);
			if(!isNaN(type)){
				TxtInvStatus.general_status.battery_type = parseInt(type);
				resp += "ACK";
				isSetCommand = true;
			}
		}

	}else if (cmd.startsWith("POPM")){
		if (TxtInvStatus.model_hint == "4k5k"){
			resp+="NAK";
			if (cmd.length == 6){
				var type = cmd.substring(4,6);
				if(!isNaN(type)){
					TxtInvStatus.general_status.out_mode = parseInt(type);
					resp += "ACK";
					isSetCommand = true;
				}
			}
		}else{
			resp += "NAK";
			//isSetCommand = true;
		}
	}else if (cmd.startsWith("PPCP")){
		resp += "NAK";
		isSetCommand = true;
		//NO PARALLEL
	}else if (cmd.startsWith("PSDV")){
		//PSDVnn.n
		resp+="NAK";
		if (cmd.length == 8){
			var volt = cmd.substring(4,8);
			if(volt.charAt(2)=="." && !isNaN(volt)){
				TxtInvStatus.general_status.battery_under_voltage = parseFloat(volt);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PCVV")){
		resp+="NAK";
		if (cmd.length == 8){
			var volt = cmd.substring(4,8);
			if(volt.charAt(2)=="." && !isNaN(volt)){
				//todo: tbd
				//TxtInvStatus.general_status.battery_under_voltage = parseFloat(volt);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PBFT")){
		resp+="NAK";
		if (cmd.length == 8){
			var volt = cmd.substring(4,8);
			if(volt.charAt(2)=="." && !isNaN(volt)){
				TxtInvStatus.general_status.battery_float_voltage = parseFloat(volt);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PPVOKC")){
		resp+="NAK";
		if (cmd.length == 7){
			var type = cmd.substring(6,7);
			if(!isNaN(type)){
				TxtInvStatus.general_status.pv_ok_condition_parallel = parseInt(type);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PSPB")){
		resp+="NAK";
		if (cmd.length == 5){
			var type = cmd.substring(4,5);
			if(!isNaN(type)){
				TxtInvStatus.general_status.pv_power_balance = parseInt(type);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd == "QMN" ){
		resp += TxtInvStatus.device;
	}else if (cmd == "QGMN"){
		resp += "013"; //todo: get list of models and fix this
	}else if (cmd.startsWith("PBEQE") ){
		resp+="NAK";
		if (cmd.length == 6){
			var type = cmd.substring(5,6);
			if(type == "0" || type == "1"){
				TxtInvStatus.battery_equalization.enabled = (type != '0');
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PBEQT")){
		resp+="NAK";
		if (cmd.length == 8){
			var type = cmd.substring(5,8);
			if(!isNaN(type)){
				TxtInvStatus.battery_equalization.time = parseInt(type);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd.startsWith("PBEQP")){
		resp+="NAK";
		if (cmd.length == 8){
			var type = cmd.substring(5,8);
			if(!isNaN(type)){
				TxtInvStatus.battery_equalization.period = parseInt(type);
				resp += "ACK";
				isSetCommand = true;
			}
		}

	}else if (cmd.startsWith("PBEQV")){
		resp+="NAK";
		if (cmd.length == 10){
			var val = cmd.substring(5,10);
			if(val.charAt(2)=="." && !isNaN(val)){
				TxtInvStatus.battery_equalization.voltage = parseFloat(val);
				resp += "ACK";
				isSetCommand = true;
			}
		}

	}else if (cmd.startsWith("PBEQOT")){
		resp+="NAK";
		if (cmd.length == 9){
			var type = cmd.substring(6,9);
			if(!isNaN(type)){
				TxtInvStatus.battery_equalization.overtime = parseInt(type);
				resp += "ACK";
				isSetCommand = true;
			}
		}

	}else if (cmd.startsWith("PBEQA")){
		resp+="NAK";
		if (cmd.length == 6){
			var type = cmd.substring(5,6);
			if(type == "0" || type == "1"){
				TxtInvStatus.battery_equalization.active = (type != '0');
				resp += "ACK";
				isSetCommand = true;
			}
		}

	}else if (cmd == "QBEQI"){
		resp += TxtInvStatus.battery_equalization.enabled ? "1 ":"0 ";
		resp += intStr(TxtInvStatus.battery_equalization.time, 3) + " ";
		resp += intStr(TxtInvStatus.battery_equalization.period, 3) + " ";
		resp += intStr(TxtInvStatus.battery_equalization.max_current, 3) + " ";
		resp += "FFF" + " "; //reserved
		resp += floatStr(TxtInvStatus.battery_equalization.voltage, 2, 2) + " ";
		resp += "HHH" +  " "; //reserved
		resp += intStr(TxtInvStatus.battery_equalization.overtime, 3) + " ";
		resp += TxtInvStatus.battery_equalization.active ? "1 ":"0 ";
		resp += "KKKK" + " "; //reserved
	}else if (cmd.startsWith("PCVT") ){
		resp+="NAK";
		if (cmd.length == 7){
			var type = cmd.substring(4,7);
			if(!isNaN(type)){
				TxtInvStatus.general_status.max_charging_time_cv = parseInt(type);
				resp += "ACK";
				isSetCommand = true;
			}
		}
	}else if (cmd == "POPLG"){
		if (TxtInvStatus.model_hint == "king"){
			resp+="NAK";
			if (cmd.length == 7){
				var type = cmd.substring(5,7);
				if(!isNaN(type)){
					TxtInvStatus.general_status.operation_logic_king  = parseInt(type);
					resp += "ACK";
					isSetCommand = true;
				}
			}
		}else{
			resp +="NAK";
		}
		
	}
	else{
		resp += "NAK";
	}




	return {
		response:packResponseBuffer(resp),
		change: isSetCommand,
	};
}

module.exports.processCommand = processCommand;




var intStr = function(val, length){
	var intval = Number.parseInt(val);
	console.log("VAL="+intval);
	if (intval < 0){
		intval = intval*(-1);
	}
	var val_str = intval + "";
	val_str = val_str.padStart(length, "0");
	if (val_str.length > length){
		val_str = val_str.substring(val_str.length - length);
	}

	return val_str;
}

var floatStr = function (val, before, after){
	var len = before + after + 1 ;
	var ff = Number.parseFloat(val);
	if (ff < 0){
		ff = ff*(-1);
	}
	var roundup = ff.toFixed(after);
	var roundup_str = roundup+"";
	var nbr_str = roundup_str.padStart(len, "0");

	if (nbr_str.length > len){
		nbr_str = nbr_str.substring(nbr_str.length - len);
	}

	return nbr_str;
}


/*
* checks the sanity of a frame, and extract the payload.
* 
*/
var checkFrame = function(frame){


	return "QID"
}



  //////////////////////////////////////////
 ///////////// CRC16 XMODEM ///////////////
//////////////////////////////////////////



// Modified from http://automationwiki.com/index.php?title=CRC-16-CCITT

var crcTable = 
[0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5,
0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b,
0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210,
0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c,
0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401,
0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b,
0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6,
0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738,
0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5,
0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969,
0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96,
0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc,
0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03,
0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd,
0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6,
0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a,
0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb,
0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1,
0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c,
0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2,
0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb,
0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447,
0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8,
0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2,
0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9,
0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827,
0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c,
0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0,
0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d,
0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07,
0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba,
0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74,
0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];


function crc16(s) {
    var crc = 0x0;
    var j, i;


    for (i = 0; i < s.length; i++) {

        c = s.readUInt8(i);
        if (c > 255) {
            throw new RangeError();
        }
        j = (c ^ (crc >> 8)) & 0xFF;
        crc = crcTable[j] ^ (crc << 8);
    }

    var crc_nbr =  ((crc ^ 0) & 0xFFFF);
    var buff = Buffer.alloc(2,0);
    buff.writeUInt16LE(crc_nbr, 0);
    return buff;

}

const remote = require('electron').remote
const ipcRenderer  = require('electron').ipcRenderer
const main = remote.require('./app.js')

//Vue.Js



//Vue Components

//navig-area
Vue.component('navig-area',{
  template:`
  <div class="pane pane-sm sidebar">
                <slot></slot>
  </div>
  `

});
//navig-section
Vue.component('navig-section',{
  props:['title'],
  template:`
  <div>
    <h5 class="nav-group-title">{{ title }}</h5>
    <slot></slot>
  </div>
  `

})
//navig-entry
Vue.component('navig-entry',{
  props:['title','id','action','activeState'],
  template:'<span class="nav-group-item" :class="isActive"  @click="navigEntryClicked(title)">{{ title }}</span>',
  data(){
    return {
      isActive: this.activeState
    }
  },
  methods:{
    navigEntryClicked : function(ttl){
      this.$root.$emit('navig-entry-clicked', ttl);
    }
  },
    mounted(){
      this.$root.$on('navig-entry-clicked', (navigttl)=>{
        this.isActive = (navigttl == this.title)?'active':'';
      });
    }
})


//config-panel
Vue.component('config-panel',{
  props:['navig', 'showfirst'],
  template:'<div v-show="vsbl" class="config-panel"> <slot></slot> </div>',
  data(){
    return{
      vsbl:this.showfirst
    };
  },
   mounted(){
      this.$root.$on('navig-entry-clicked', (navigttl)=>{
        this.vsbl = (navigttl == this.navig);
      });
    }
})

var cicComp = Vue.component('config-input-cb',{
    props: ['value', 'label'],
    template: `
        <div>
          <label>
            <input
            type="checkbox"
            :checked="value"
            @change="$emit('input', $event.target.checked)"> {{ label }}
          </label>
        </div>
      `,
      /*data:function(){
        return {
          checked:this.value
        }
      },
      methods:{
        change:function(){
          this.checked = !this.checked;
          this.$emit('input', this.checked);
        }
      }*/
})

Vue.component('config-input-sel',{
    props: ['first', 'label'],
    template: `
        <div>
          <label>
          {{ label }} : 
            <select
            @change="change"
            >
            <slot></slot>
            </select>
          </label>
        </div>
      `,
      data:function(){
        return {
          value:this.first
        }
      },
      methods:{
        change:function(){
          this.checked = !this.checked;
          this.$emit('input', this.checked);
        }
      }
})


Vue.component('config-input-text',{
  props: ['value', 'type', 'label','disabled' ],
  template:`
    <div >
    <label>
    {{ label }} :
    <input 
      :type="type"
      :value="value" 
      v-on:input="updateValue($event.target.value)" :disabled="disabled">
    </label>
    </div>
  `,
  data() {
    return {
      localValue: this.value
    };
  },
  created() {
    this.localValue = this.value;
    //this.$watch("localValue", value => {
      
    //});
  },
  methods:{
    updateValue:function(value){
      this.$emit("input", value);
    }
  }
})

//console-area
Vue.component('console-area', {
  template:`          
  <div id="console-box" >
    <div id="console-tools-box">
    <button class="btn btn-mini btn-default icon icon-trash" v-on:click="clearConsole()">
            clear console
      </button>
      <span style="margin-left:30px;"></span>
      <input type="text" id="console-cmd" placeholder="try a command"
      @keyup="keyup">
      
    </div>
    <div id="console-body"" >
          <slot></slot>
    </div>
  </div>
   `,
   methods:{
    keyup:function(event){
      if (event.keyCode === 13) {
        ipcRenderer.send("ui-cmd-exe",event.srcElement.value);
        //event.srcElement.value = "";
      }
      
    },
    clearConsole:function(event){
      const cbody = document.getElementById("console-body")
      cbody.innerHTML=""
    }
   }
})

Vue.component('console-event-line', {
  props:['type', 'content' ],
  template:`
  <div class="cons-ln allow-copy" :class="lineStyle">
  {{ type }} : <slot></slot>
  </div>
  `,
  data(){
    return {
      lineStyle : this.styleFromType(this.type),
    }
  },
  methods:{
    styleFromType: function(type){
      if (type == "RX"){
        return "cons-ln-rx";
      }else if(type == "TX"){
        return "cons-ln-tx";
      }else{
        return "cons-ln-default";
      }
    }
  }
})

var vueAppControlBox = new Vue({
    el: '#control-box',
    data(){
      return {
        comm:{
          mode:'udp',
          port:"/dev/pts/4",
          baudrate:2400,
          stop_bit:1,
          data_bits:8,
          parity:"none",
          udp_port:2222
        },

        configs:{
          model_hint:"other",//king,4k5k
          mode: "L",
          flags:{
                buzzer : false,
                bypass_function : true,
                bypass_function_forbidden : true,
                power_saving : false,
                lcd_escape : false,
                overload_restart : false,
                overtemperature_restart : false,
                backlights_on : false,
                alarm_primary_interrupt : false,
                fault_code_record : true
          },
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
        }
      }
    },
    watch: {
      configs:{
        deep:true,
        handler:function(val, oldval){
         
          //console.log(this.configs);
          ipcRenderer.send("ui-inv-cnf-change",this.configs);

        }
      }
    }
})


var vueAppToolBar =  new Vue({
    el: '#toolbar-box',
    data() {
      return{
        user_comm_method_udp:true,
        user_comm_method_ser:false,
        action:"Start Simulator",
        online:false,
        offline:true,
        state:"online"
      }
    },
    methods:{
       userCommMethod: function(meth){
        this.user_comm_method_ser=false;
        this.user_comm_method_udp=false;
        if (meth == 'ser'){
          this.user_comm_method_ser=true;
          vueAppControlBox.comm.mode='serial';
        }else{
          vueAppControlBox.comm.mode='udp';
          this.user_comm_method_udp=true;
        }
        if (this.online){
          this.serverStartStop();
        }
       },
      serverStartStop: function(){
          if( this.offline){
            //main.startComm();
            ipcRenderer.send("ui-startstop-server",{
              command:'start',
              params:vueAppControlBox.comm,
            });



          }else{
            //main.stopComm();
            ipcRenderer.send("ui-startstop-server",{
              command:'stop',
              params:vueAppControlBox.comm,
            });
   

          }      

      }
    },
    mounted: function(){
      //send command to Main to get initialize the protocol emulator.
      ipcRenderer.send("ui-ready",{ });

    }
})

var vueAppFooterBox = new Vue({
  el: '#footer-box',
  data: {
    clines:[]
  },
  methods:{
    addConsoleLine:function(cltype, clcontent){
      this.clines.push({ type:cltype, content:clcontent});
      var consbody = document.getElementById("console-body");
      consbody.scrollTop = consbody.scrollHeight;

    }
  }
})


// End Vue.js


let consoleDOM = document.getElementById("console-body");

ipcRenderer.on('comm-rx', (event, message)=>{
  //console.log(message);
  vueAppFooterBox.addConsoleLine("RX", message);
});

ipcRenderer.on('comm-tx', (event, message)=>{
  //console.log(message);
  vueAppFooterBox.addConsoleLine("TX", message);
});

ipcRenderer.on('sim-inv-cnf-change', (event, newconf)=>{
  vueAppControlBox.configs = newconf;
  //console.log(vueAppControlBox.configs)
});


ipcRenderer.on('sim-comm-server-started', (event,message)=>{
  if(message.error){
    vueAppFooterBox.addConsoleLine("APP", "Error starting simulator");
  }else{
    vueAppToolBar.action = "Stop Simulator";
    vueAppFooterBox.addConsoleLine("APP", "emulator is connected ");
    vueAppToolBar.online = !vueAppToolBar.online;
    vueAppToolBar.offline = !vueAppToolBar.offline;
  }
});

ipcRenderer.on('sim-comm-server-stopped', (event,message)=>{
  if(message.error){
    vueAppFooterBox.addConsoleLine("APP", "Error stopping simulator");
  }else{
    vueAppToolBar.action = "Start Simulator";
    vueAppFooterBox.addConsoleLine("APP", "emulator is disconnected !!");
    vueAppToolBar.online = !vueAppToolBar.online;
    vueAppToolBar.offline = !vueAppToolBar.offline;
  }
});
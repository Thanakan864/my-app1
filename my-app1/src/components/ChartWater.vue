<template>
  <div id="weather-chart">
    <div id="app-picker">
      <v-row>
        <div class="textOfDate">
        <v-text-field
        v-model="dateRangeText"
        v-on:click="click_text()"
        label="Date range"
        prepend-icon="mdi-calendar"
        readonly
      ></v-text-field>
      <div class="picker-dialog" v-if="state_text_click === true">
        <v-date-picker
          v-model="dates"
          color="rgb(41 149 250)"
          range
          no-title
        ></v-date-picker>
        <v-btn
          v-on:click="click_btn()"
          min-width=89%
          color="rgb(41 149 250)"
          elevation="2"
          >OK</v-btn
        >
      </div>

      </div>
      <div class="exprot">
        <v-btn
        v-on:click="onExport()"
        elevation="2"
        color="rgb(41 149 250)"
        >Export</v-btn
      ></div>
      </v-row>
      
      
      
      
    </div>
    <div class="ctn-chart-weather">
        <!-- chart.js component -->
        <LineChart :chart-data = 'datacollection'></LineChart>
    </div>
    <!-- <button v-on="this.fillData()" >fill</button> -->
</div>
</template>
<script>
import axios from "axios";
import LineChart from './ChartWaterJS.js'
import XLSX from "xlsx"; // import xlsx
export default {
  name:'chart-weather',
  components:{
        LineChart,
        
    },
  data() {
    /// get Datenow - 30 day ///
    var d = new Date();
    // console.log(d.toLocaleString())
    // console.log(d.toISOString())
    this.date_now = d.toISOString().substr(0, 10);
    d.setDate(d.getDate() - 30);
    this.date_old = d.toISOString().substr(0, 10);
    /// END get Datenow - 30 day ///
    return {
      info: null,
      sprit_data: [],
      state_text_click: false,
      date_now: null,
      date_old: null,
      dates: [this.date_old, this.date_now],
      datacollection: null,
      loaded: false,
      DateOfChart:null,
      WindSpeed_F1:null,Temperature_F1:null,Humidity_F1:null,Waterlevel_F1:null,WindSpeed_F2:null,Temperature_F2:null,Humidity_F2:null,Waterlevel_F2:null,WindSpeed_F3:null,Temperature_F3:null,Humidity_F3:null,Waterlevel_F3:null
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  methods: {
      getData(){
          axios
      .get(
        // "https://script.google.com/macros/s/AKfycbyn9rKaQXdHzu3n-ocdq2OdKJmmsxNOlNRKFhiCSDpxPbxsYfD49mvwd52k1Za92WezIw/exec?action=getUsers"
        // "https://script.google.com/macros/s/AKfycbxxE23SBHICIiZaASF6iRKcHh5aunewTXz5kL0RGZJLa-sOAABHNBCwy-GlehVh8wQ/exec?action=getData"
        "https://script.google.com/macros/s/AKfycbyS_6UXRFkw3DGNoXa-kk1cFY725ncq_7FpZmC-xXlNP6rp4iLe60ZSQV2t-BsXhHce/exec?action=getData"
      )
      .then((response) => {
        this.info = response.data;
        // console.log(response.data);
        var select_date = this.dates;
        var start_date = new Date(select_date[0]);
        var end_date = new Date(select_date[1]);
        var sprit_date;
        var data_filter = [];
        var data_select = [];
        var d;
        var Date_chart= [];
        var WindSpeedF1= [];
        var TemperatureF1= [];
        var HumidityF1= [];
        var WaterlevelF1= [];
        var WindSpeedF2= [];
        var TemperatureF2= [];
        var HumidityF2= [];
        var WaterlevelF2= [];
        var WindSpeedF3= [];
        var TemperatureF3= [];
        var HumidityF3= [];
        var WaterlevelF3= [];
        ///// filer set Date to correct /////
        for (var item of this.info) {
          d = new Date(item.Date);
          d.setDate(d.getDate(item.Date) + 1);
          item.Date = d.toISOString().substr(0, 10);
          data_filter.push(item);
        }
        // console.log("data_filter")
        // console.log(data_filter)
        ///// filer data to table follow date your select /////
        for (var item of data_filter) {
          sprit_date = new Date(item.Date.substr(0, 10));
          if (start_date <= sprit_date && sprit_date <= end_date) {
            // console.log(item)
            data_select.push(item);
          }
          this.sprit_data = data_select;
        //   console.log(data_select)
          }
          for (var item of data_select) {
            //   console.log(item["Date"].substr(0, 10))
            var d = item["Date"].substr(0, 10)
            var wind1 = parseInt(item["WindSpeed_F1"])
            var temp1 = parseInt(item["Temperature_F1"])
            var humi1 = parseInt(item["Humidity_F1"])
            var water1 = parseInt(item["Waterlevel_F1"])
            var wind2 = parseInt(item["WindSpeed_F2"])
            var temp2 = parseInt(item["Temperature_F2"])
            var humi2 = parseInt(item["Humidity_F2"])
            var water2 = parseInt(item["Waterlevel_F2"])
            var wind3 = parseInt(item["WindSpeed_F3"])
            var temp3 = parseInt(item["Temperature_F3"])
            var humi3 = parseInt(item["Humidity_F3"])
            var water3 = parseInt(item["Waterlevel_F3"])
            Date_chart.push(d);
            WindSpeedF1.push(wind1);
            TemperatureF1.push(temp1);
            HumidityF1.push(humi1);
            WaterlevelF1.push(water1);
            WindSpeedF2.push(wind2);
            TemperatureF2.push(temp2);
            HumidityF2.push(humi2);
            WaterlevelF2.push(water2);
            WindSpeedF3.push(wind3);
            TemperatureF3.push(temp3);
            HumidityF3.push(humi3);
            WaterlevelF3.push(water3);
          }
        //   console.log(Date_chart)
        //   console.log(WindSpeedF1)
          this.DateOfChart = Date_chart;
          this.WindSpeed_F1 = WindSpeedF1;
          this.Temperature_F1 = TemperatureF1;
          this.Humidity_F1 = HumidityF1;
          this.Waterlevel_F1 = WaterlevelF1;
          this.WindSpeed_F2 = WindSpeedF2;
          this.Temperature_F2 = TemperatureF2;
          this.Humidity_F2 = HumidityF2;
          this.Waterlevel_F2 = WaterlevelF2;
          this.WindSpeed_F3 = WindSpeedF3;
          this.Temperature_F3 = TemperatureF3;
          this.Humidity_F3 = HumidityF3;
          this.Waterlevel_F3 = WaterlevelF3;
       
          this.fillData()
        $(document).ready(function () {
          $("#myTable").DataTable();
        });
      });
      },
      fillData(){
            this.datacollection = {
                labels: this.DateOfChart,
                datasets:[
                    {
                        label:"WindSpeed_F1(m/s)",
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'red',
                        pointHoverBackgroundColor:'red',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.WindSpeed_F1,
                    },
                    {
                        label: 'Temperature_F1(C)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'green',
                        pointHoverBackgroundColor:'green',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Temperature_F1
                    },
                    {
                        label: 'Humidity_F1(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'blue',
                        pointHoverBackgroundColor:'blue',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Humidity_F1
                    },
                    {
                        label: 'Waterlevel_F1(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple',
                        pointHoverBackgroundColor:'purple',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Waterlevel_F1
                    },
                    {
                        label: 'WindSpeed_F2(m/s)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'brown ',
                        pointHoverBackgroundColor:'brown ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.WindSpeed_F2
                    },
                    {
                        label: 'Temperature_F2(C)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'orange ',
                        pointHoverBackgroundColor:'orange ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Temperature_F2
                    },
                    {
                        label: 'Humidity_F2(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'pink ',
                        pointHoverBackgroundColor:'pink ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Humidity_F2
                    },
                    {
                        label: 'Waterlevel_F2(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'gold ',
                        pointHoverBackgroundColor:'gold ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Waterlevel_F2
                    },
                    {
                        label: 'WindSpeed_F3(m/s)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'black ',
                        pointHoverBackgroundColor:'black ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data:this.WindSpeed_F3
                    },
                    {
                        label: 'Temperature_F3(C)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'crimson ',
                        pointHoverBackgroundColor:'crimson ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Temperature_F3
                    },
                    {
                        label: 'Humidity_F3(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple ',
                        pointHoverBackgroundColor:'purple ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Humidity_F3
                    },
                    {
                        label: 'Waterlevel_F3(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'indigo ',
                        pointHoverBackgroundColor:'indigo ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Waterlevel_F3
                    },
                    
                ]
            }
        },
    click_text: function (event) {
      if (this.state_text_click == false) {
        // console.log("click_text_state=true")
        return (this.state_text_click = true);
      } else {
        // console.log("click_text_state=false")
        return (this.state_text_click = false);
      }
    },
    click_btn: function (event) {
    //   console.log("click_btn_OK")
    //   console.log(this.dates)
        var select_date = this.dates;
        var start_date = new Date(select_date[0]);
        var end_date = new Date(select_date[1]);
        var sprit_date;
        var d;
        var Date_chart= [];
        var WindSpeedF1= [];
        var TemperatureF1= [];
        var HumidityF1= [];
        var WaterlevelF1= [];
        var WindSpeedF2= [];
        var TemperatureF2= [];
        var HumidityF2= [];
        var WaterlevelF2= [];
        var WindSpeedF3= [];
        var TemperatureF3= [];
        var HumidityF3= [];
        var WaterlevelF3= [];
    //   console.log(select_date[0],select_date[1])

      if (select_date[0] == null || select_date[1] == null) {
        // console.log("no")
        alert("Please Enter Date for Start to END");
      }
      if (start_date > end_date) {
        alert("Please enter a valid start to end date.");
      } else {
        var data_select = [];
        for (var item of this.info) {
          sprit_date = new Date(item.Date.substr(0, 10));
          if (start_date <= sprit_date && sprit_date <= end_date) {
            // console.log(item)
            data_select.push(item);
          }
        }
        // console.log(data_select)
        // console.log("done")
        
      }

      var data_select = [];
      for (var item of this.info) {
        sprit_date = new Date(item.Date.substr(0, 10));
        if (start_date <= sprit_date && sprit_date <= end_date) {
        //   console.log(item);
          data_select.push(item);
        }
      }
      
    //   console.log(data_select);
      for (var item of data_select) {
            //   console.log(item["Date"].substr(0, 10))
            var d = item["Date"].substr(0, 10)
            var wind1 = parseInt(item["WindSpeed_F1"])
            var temp1 = parseInt(item["Temperature_F1"])
            var humi1 = parseInt(item["Humidity_F1"])
            var water1 = parseInt(item["Waterlevel_F1"])
            var wind2 = parseInt(item["WindSpeed_F2"])
            var temp2 = parseInt(item["Temperature_F2"])
            var humi2 = parseInt(item["Humidity_F2"])
            var water2 = parseInt(item["Waterlevel_F2"])
            var wind3 = parseInt(item["WindSpeed_F3"])
            var temp3 = parseInt(item["Temperature_F3"])
            var humi3 = parseInt(item["Humidity_F3"])
            var water3 = parseInt(item["Waterlevel_F3"])
            Date_chart.push(d);
            WindSpeedF1.push(wind1);
            TemperatureF1.push(temp1);
            HumidityF1.push(humi1);
            WaterlevelF1.push(water1);
            WindSpeedF2.push(wind2);
            TemperatureF2.push(temp2);
            HumidityF2.push(humi2);
            WaterlevelF2.push(water2);
            WindSpeedF3.push(wind3);
            TemperatureF3.push(temp3);
            HumidityF3.push(humi3);
            WaterlevelF3.push(water3);
          }
        //   console.log(Date_chart)
        //   console.log(WindSpeedF1)
          this.DateOfChart = Date_chart;
          this.WindSpeed_F1 = WindSpeedF1;
          this.Temperature_F1 = TemperatureF1;
          this.Humidity_F1 = HumidityF1;
          this.Waterlevel_F1 = WaterlevelF1;
          this.WindSpeed_F2 = WindSpeedF2;
          this.Temperature_F2 = TemperatureF2;
          this.Humidity_F2 = HumidityF2;
          this.Waterlevel_F2 = WaterlevelF2;
          this.WindSpeed_F3 = WindSpeedF3;
          this.Temperature_F3 = TemperatureF3;
          this.Humidity_F3 = HumidityF3;
          this.Waterlevel_F3 = WaterlevelF3;
        //   console.log("done")
       this.fillData()
          
      return (this.state_text_click = false), (this.sprit_data = data_select);
    },
    onExport: function (event) {
      const dataWS = XLSX.utils.json_to_sheet(this.info);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      XLSX.writeFile(wb, "export.xlsx");
    },
  },
  async mounted() {
      await this.fillData()
      await this.getData()
      
  },
  
};
</script>
<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2995fa;
  color: white;
}
#app-picker {
  /* position: absolute; */
  width: 290px;
  height: auto;
}
.dataTables_wrapper {
  z-index: 0;
}
.picker-dialog {
  position: absolute;
  z-index: 1;
}
.ctn-chart-weather{
    width: 700px;
    height: 400px;
    margin: 10px auto;
}
.row {
    display: flex;
    flex: 1 1 auto;
    margin-left: 25px;
    margin-top: 10px;
    flex-wrap: wrap;
}
</style>
<template>
  <div id="irrigation-chart">
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
    <div class="ctn-chart-irrigation">
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
  name:'chart-irrigation',
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
      AWD_B1:null,AWD_B2:null,AWD_B3:null,AWD_E2:null,Soil_D1:null,Soil_D2:null,Soil_D3:null,Soil_D4:null,CTH_C5:null,CTH_C6:null,CTH_C7:null,CTH_C8:null
      ,Water_F2:null,Wind_F2:null,Temp_F2:null,Humi_F2:null
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
                "https://script.google.com/macros/s/AKfycbxN3VT7K0Bxw4N6breKfuvvLZQW-j9TFTQdLkGapB7REpBiJQ5ICWUWVB2UdNGiiVKsYw/exec?action=getData"
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
        var AWDB1= [];
        var AWDB2= [];
        var AWDB3= [];
        var AWDE2= [];
        var SoilD1= [];
        var SoilD2= [];
        var SoilD3= [];
        var SoilD4= [];
        var CTHC5= [];
        var CTHC6= [];
        var CTHC7= [];
        var CTHC8= [];
        var WaterF2= [];
        var WindF2= [];
        var TempF2= [];
        var HumiF2= [];
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
            var b1 = parseInt(item["AWD_B1"])
            var b2 = parseInt(item["AWD_B2"])
            var b3 = parseInt(item["AWD_B3"])
            var e2 = parseInt(item["AWD_E2"])
            var d1 = parseInt(item["Soil_D1"])
            var d2 = parseInt(item["Soil_D2"])
            var d3 = parseInt(item["Soil_D3"])
            var d4 = parseInt(item["Soil_D4"])
            var c5 = parseInt(item["CTH_C5"])
            var c6 = parseInt(item["CTH_C6"])
            var c7 = parseInt(item["CTH_C7"])
            var c8 = parseInt(item["CTH_C8"])
            var Water2 = parseInt(item["Water_F2"])
            var Wind2 = parseInt(item["Wind_F2"])
            var Temp2 = parseInt(item["Temp_F2"])
            var Humi2 = parseInt(item["Humi_F2"])
            Date_chart.push(d);
            AWDB1.push(b1);
            AWDB2.push(b2);
            AWDB3.push(b3);
            AWDE2.push(e2);
            SoilD1.push(d1);
            SoilD2.push(d2);
            SoilD3.push(d3);
            SoilD4.push(d4);
            CTHC5.push(c5);
            CTHC6.push(c6);
            CTHC7.push(c7);
            CTHC8.push(c8);
            WaterF2.push(Water2);
            WindF2.push(Wind2);
            TempF2.push(Temp2);
            HumiF2.push(Humi2);
          }
        //   console.log(Date_chart)
        //   console.log(AWDB1)
          this.DateOfChart = Date_chart;
          this.AWD_B1 = AWDB1;
          this.AWD_B2 = AWDB2;
          this.AWD_B3 = AWDB3;
          this.AWD_E2 = AWDE2;
          this.Soil_D1 = SoilD1;
          this.Soil_D2 = SoilD2;
          this.Soil_D3 = SoilD3;
          this.Soil_D4 = SoilD4;
          this.CTH_C5 = CTHC5;
          this.CTH_C6 = CTHC6;
          this.CTH_C7 = CTHC7;
          this.CTH_C8 = CTHC8;
          this.Water_F2 = WaterF2;
          this.Wind_F2 = WindF2;
          this.Temp_F2 = TempF2;
          this.Humi_F2 = HumiF2;
       
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
                        label:"AWD_B1(CM)",
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'red',
                        pointHoverBackgroundColor:'red',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_B1,
                    },
                    {
                        label: 'AWD_B2(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'green',
                        pointHoverBackgroundColor:'green',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_B2
                    },
                    {
                        label: 'AWD_B3(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'blue',
                        pointHoverBackgroundColor:'blue',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_B3
                    },
                    {
                        label: 'AWD_E2(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple',
                        pointHoverBackgroundColor:'purple',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_E2
                    },
                    {
                        label: 'Soil_D1(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'brown ',
                        pointHoverBackgroundColor:'brown ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Soil_D1
                    },
                    {
                        label: 'Soil_D2(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'orange ',
                        pointHoverBackgroundColor:'orange ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Soil_D2
                    },
                    {
                        label: 'Soil_D3(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'pink ',
                        pointHoverBackgroundColor:'pink ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Soil_D3
                    },
                    {
                        label: 'Soil_D4(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'gold ',
                        pointHoverBackgroundColor:'gold ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Soil_D4
                    },
                    {
                        label: 'CTH_C5(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'black ',
                        pointHoverBackgroundColor:'black ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data:this.CTH_C5
                    },
                    {
                        label: 'CTH_C6(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'crimson ',
                        pointHoverBackgroundColor:'crimson ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C6
                    },
                    {
                        label: 'CTH_C7(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple ',
                        pointHoverBackgroundColor:'purple ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C7
                    },
                    {
                        label: 'CTH_C8(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'indigo ',
                        pointHoverBackgroundColor:'indigo ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C8
                    },
                    {
                        label: 'Water_F2(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#1DA290 ',
                        pointHoverBackgroundColor:'#1DA290 ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Water_F2
                    },
                    {
                        label: 'Wind_F2(m/s)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#6FB0F1 ',
                        pointHoverBackgroundColor:'#6FB0F1 ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Wind_F2
                    },
                    {
                        label: 'Temp_F2(C)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#FFB7B7 ',
                        pointHoverBackgroundColor:'#FFB7B7 ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Temp_F2
                    },
                    {
                        label: 'Humi_F2(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#A4FFA8 ',
                        pointHoverBackgroundColor:'#A4FFA8 ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Humi_F2
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
        var AWDB1= [];
        var AWDB2= [];
        var AWDB3= [];
        var AWDE2= [];
        var SoilD1= [];
        var SoilD2= [];
        var SoilD3= [];
        var SoilD4= [];
        var CTHC5= [];
        var CTHC6= [];
        var CTHC7= [];
        var CTHC8= [];
        var WaterF2= [];
        var WindF2= [];
        var TempF2= [];
        var HumiF2= [];
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
            var b1 = parseInt(item["AWD_B1"])
            var b2 = parseInt(item["AWD_B2"])
            var b3 = parseInt(item["AWD_B3"])
            var e2 = parseInt(item["AWD_E2"])
            var d1 = parseInt(item["Soil_D1"])
            var d2 = parseInt(item["Soil_D2"])
            var d3 = parseInt(item["Soil_D3"])
            var d4 = parseInt(item["Soil_D4"])
            var c5 = parseInt(item["CTH_C5"])
            var c6 = parseInt(item["CTH_C6"])
            var c7 = parseInt(item["CTH_C7"])
            var c8 = parseInt(item["CTH_C8"])
            var Water2 = parseInt(item["Water_F2"])
            var Wind2 = parseInt(item["Wind_F2"])
            var Temp2 = parseInt(item["Temp_F2"])
            var Humi2 = parseInt(item["Humi_F2"])
            Date_chart.push(d);
            AWDB1.push(b1);
            AWDB2.push(b2);
            AWDB3.push(b3);
            AWDE2.push(e2);
            SoilD1.push(d1);
            SoilD2.push(d2);
            SoilD3.push(d3);
            SoilD4.push(d4);
            CTHC5.push(c5);
            CTHC6.push(c6);
            CTHC7.push(c7);
            CTHC8.push(c8);
            WaterF2.push(Water2);
            WindF2.push(Wind2);
            TempF2.push(Temp2);
            HumiF2.push(Humi2);
          }
        //   console.log(Date_chart)
        //   console.log(AWDB1)
          this.DateOfChart = Date_chart;
          this.AWD_B1 = AWDB1;
          this.AWD_B2 = AWDB2;
          this.AWD_B3 = AWDB3;
          this.AWD_E2 = AWDE2;
          this.Soil_D1 = SoilD1;
          this.Soil_D2 = SoilD2;
          this.Soil_D3 = SoilD3;
          this.Soil_D4 = SoilD4;
          this.CTH_C5 = CTHC5;
          this.CTH_C6 = CTHC6;
          this.CTH_C7 = CTHC7;
          this.CTH_C8 = CTHC8;
          this.Water_F2 = WaterF2;
          this.Wind_F2 = WindF2;
          this.Temp_F2 = TempF2;
          this.Humi_F2 = HumiF2;
       
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
.ctn-chart-irrigation{
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
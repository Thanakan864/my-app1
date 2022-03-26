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
          min-width=100%
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
      AWD_A1:null,AWD_A2:null,AWD_A3:null,AWD_E1:null,CTH_C1:null,CTH_C2:null,CTH_C3:null,CTH_C4:null,Water_F1:null,Wind_F1:null,Temp_F1:null,Humi_F1:null
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
                "https://script.google.com/macros/s/AKfycbw9VEh3hp0KtFrRbfs8PdkG_0ufleVaQE8c9MnDBDKeeeqVkBkMcUrCZYi6TJxonw2VXg/exec?action=getData"
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
        var AWDA1= [];
        var AWDA2= [];
        var AWDA3= [];
        var AWDE1= [];
        var CTHC1= [];
        var CTHC2= [];
        var CTHC3= [];
        var CTHC4= [];
        var WaterF1= [];
        var WindF1= [];
        var TempF1= [];
        var HumiF1= [];
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
            var a1 = parseInt(item["AWD_A1"])
            var a2 = parseInt(item["AWD_A2"])
            var a3 = parseInt(item["AWD_A3"])
            var e1 = parseInt(item["AWD_E1"])
            var c1 = parseInt(item["CTH_C1"])
            var c2 = parseInt(item["CTH_C2"])
            var c3 = parseInt(item["CTH_C3"])
            var c4 = parseInt(item["CTH_C4"])
            var water1 = parseInt(item["Water_F1"])
            var wind1 = parseInt(item["Wind_F1"])
            var temp1 = parseInt(item["Temp_F1"])
            var humi1 = parseInt(item["Humi_F1"])
            Date_chart.push(d);
            AWDA1.push(a1);
            AWDA2.push(a2);
            AWDA3.push(a3);
            AWDE1.push(e1);
            CTHC1.push(c1);
            CTHC2.push(c2);
            CTHC3.push(c3);
            CTHC4.push(c4);
            WaterF1.push(water1);
            WindF1.push(wind1);
            TempF1.push(temp1);
            HumiF1.push(humi1);
          }
        //   console.log(Date_chart)
        //   console.log(AWDA1)
          this.DateOfChart = Date_chart;
          this.AWD_A1 = AWDA1;
          this.AWD_A2 = AWDA2;
          this.AWD_A3 = AWDA3;
          this.AWD_E1 = AWDE1;
          this.CTH_C1 = CTHC1;
          this.CTH_C2 = CTHC2;
          this.CTH_C3 = CTHC3;
          this.CTH_C4 = CTHC4;
          this.Water_F1 = WaterF1;
          this.Wind_F1 = WindF1;
          this.Temp_F1 = TempF1;
          this.Humi_F1 = HumiF1;
       
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
                        label:"AWD_A1(CM)",
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'red',
                        pointHoverBackgroundColor:'red',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_A1,
                    },
                    {
                        label: 'AWD_A2(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'green',
                        pointHoverBackgroundColor:'green',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_A2
                    },
                    {
                        label: 'AWD_A3(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'blue',
                        pointHoverBackgroundColor:'blue',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_A3
                    },
                    {
                        label: 'AWD_E1(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple',
                        pointHoverBackgroundColor:'purple',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_E1
                    },
                    {
                        label: 'CTH_C1(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'brown ',
                        pointHoverBackgroundColor:'brown ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C1
                    },
                    {
                        label: 'CTH_C2(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'orange ',
                        pointHoverBackgroundColor:'orange ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C2
                    },
                    {
                        label: 'CTH_C3(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'pink ',
                        pointHoverBackgroundColor:'pink ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C3
                    },
                    {
                        label: 'CTH_C4(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'gold ',
                        pointHoverBackgroundColor:'gold ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C4
                    },
                    {
                        label: 'Water_F1(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'black ',
                        pointHoverBackgroundColor:'black ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data:this.Water_F1
                    },
                    {
                        label: 'Wind_F1(m/s)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'crimson ',
                        pointHoverBackgroundColor:'crimson ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Wind_F1
                    },
                    {
                        label: 'Temp_F1(C)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple ',
                        pointHoverBackgroundColor:'purple ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Temp_F1
                    },
                    {
                        label: 'Humi_F1(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'indigo ',
                        pointHoverBackgroundColor:'indigo ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Humi_F1
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
        var AWDA1= [];
        var AWDA2= [];
        var AWDA3= [];
        var AWDE1= [];
        var CTHC1= [];
        var CTHC2= [];
        var CTHC3= [];
        var CTHC4= [];
        var WaterF1= [];
        var WindF1= [];
        var TempF1= [];
        var HumiF1= [];
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
            var a1 = parseInt(item["AWD_A1"])
            var a2 = parseInt(item["AWD_A2"])
            var a3 = parseInt(item["AWD_A3"])
            var e1 = parseInt(item["AWD_E1"])
            var c1 = parseInt(item["CTH_C1"])
            var c2 = parseInt(item["CTH_C2"])
            var c3 = parseInt(item["CTH_C3"])
            var c4 = parseInt(item["CTH_C4"])
            var water1 = parseInt(item["Water_F1"])
            var wind1 = parseInt(item["Wind_F1"])
            var temp1 = parseInt(item["Temp_F1"])
            var humi1 = parseInt(item["Humi_F1"])
            Date_chart.push(d);
            AWDA1.push(a1);
            AWDA2.push(a2);
            AWDA3.push(a3);
            AWDE1.push(e1);
            CTHC1.push(c1);
            CTHC2.push(c2);
            CTHC3.push(c3);
            CTHC4.push(c4);
            WaterF1.push(water1);
            WindF1.push(wind1);
            TempF1.push(temp1);
            HumiF1.push(humi1);
          }
        //   console.log(Date_chart)
        //   console.log(AWDA1)
          this.DateOfChart = Date_chart;
          this.AWD_A1 = AWDA1;
          this.AWD_A2 = AWDA2;
          this.AWD_A3 = AWDA3;
          this.AWD_E1 = AWDE1;
          this.CTH_C1 = CTHC1;
          this.CTH_C2 = CTHC2;
          this.CTH_C3 = CTHC3;
          this.CTH_C4 = CTHC4;
          this.Water_F1 = WaterF1;
          this.Wind_F1 = WindF1;
          this.Temp_F1 = TempF1;
          this.Humi_F1 = HumiF1;
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
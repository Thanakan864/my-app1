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
      AWD_A4:null,AWD_A5:null,AWD_A6:null,AWD_E3:null,CTH_C9:null,CTH_C10:null,CTH_C11:null,CTH_C12:null,Water_F3:null,Wind_F3:null,Temp_F3:null,Humi_F3:null
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
                "https://script.google.com/macros/s/AKfycbxpWEZxEVvlvMEJzUBq89y00ML9dpe71J7jYkQ_qyFPc35c-iPg5uszfr7Dzld6z02c/exec?action=getData"
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
        var AWDA4= [];
        var AWDA5= [];
        var AWDA6= [];
        var AWDE3= [];
        var CTHC9= [];
        var CTHC10= [];
        var CTHC11= [];
        var CTHC12= [];
        var WaterF3= [];
        var WindF3= [];
        var TempF3= [];
        var HumiF3= [];
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
            var a4 = parseInt(item["AWD_A4"])
            var a5 = parseInt(item["AWD_A5"])
            var a6 = parseInt(item["AWD_A6"])
            var e1 = parseInt(item["AWD_E3"])
            var c9 = parseInt(item["CTH_C9"])
            var c10 = parseInt(item["CTH_C10"])
            var c11 = parseInt(item["CTH_C11"])
            var c12 = parseInt(item["CTH_C12"])
            var water3 = parseInt(item["Water_F3"])
            var wind3 = parseInt(item["Wind_F3"])
            var temp3 = parseInt(item["Temp_F3"])
            var humi3 = parseInt(item["Humi_F3"])
            Date_chart.push(d);
            AWDA4.push(a4);
            AWDA5.push(a5);
            AWDA6.push(a6);
            AWDE3.push(e1);
            CTHC9.push(c9);
            CTHC10.push(c10);
            CTHC11.push(c11);
            CTHC12.push(c12);
            WaterF3.push(water3);
            WindF3.push(wind3);
            TempF3.push(temp3);
            HumiF3.push(humi3);
          }
        //   console.log(Date_chart)
        //   console.log(AWDA4)
          this.DateOfChart = Date_chart;
          this.AWD_A4 = AWDA4;
          this.AWD_A5 = AWDA5;
          this.AWD_A6 = AWDA6;
          this.AWD_E3 = AWDE3;
          this.CTH_C9 = CTHC9;
          this.CTH_C10 = CTHC10;
          this.CTH_C11 = CTHC11;
          this.CTH_C12 = CTHC12;
          this.Water_F3 = WaterF3;
          this.Wind_F3 = WindF3;
          this.Temp_F3 = TempF3;
          this.Humi_F3 = HumiF3;
       
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
                        label:"AWD_A4(CM)",
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'red',
                        pointHoverBackgroundColor:'red',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_A4,
                    },
                    {
                        label: 'AWD_A5(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'green',
                        pointHoverBackgroundColor:'green',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_A5
                    },
                    {
                        label: 'AWD_A6(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'blue',
                        pointHoverBackgroundColor:'blue',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_A6
                    },
                    {
                        label: 'AWD_E3(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple',
                        pointHoverBackgroundColor:'purple',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_E3
                    },
                    {
                        label: 'CTH_C9(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'brown ',
                        pointHoverBackgroundColor:'brown ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C9
                    },
                    {
                        label: 'CTH_C10(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'orange ',
                        pointHoverBackgroundColor:'orange ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C10
                    },
                    {
                        label: 'CTH_C11(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'pink ',
                        pointHoverBackgroundColor:'pink ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C11
                    },
                    {
                        label: 'CTH_C12(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'gold ',
                        pointHoverBackgroundColor:'gold ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.CTH_C12
                    },
                    {
                        label: 'Water_F3((CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'black ',
                        pointHoverBackgroundColor:'black ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data:this.Water_F3
                    },
                    {
                        label: 'Wind_F3(m/s)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'crimson ',
                        pointHoverBackgroundColor:'crimson ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Wind_F3
                    },
                    {
                        label: 'Temp_F3(C)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple ',
                        pointHoverBackgroundColor:'purple ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Temp_F3
                    },
                    {
                        label: 'Humi_F3(%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'indigo ',
                        pointHoverBackgroundColor:'indigo ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.Humi_F3
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
        var AWDA4= [];
        var AWDA5= [];
        var AWDA6= [];
        var AWDE3= [];
        var CTHC9= [];
        var CTHC10= [];
        var CTHC11= [];
        var CTHC12= [];
        var WaterF3= [];
        var WindF3= [];
        var TempF3= [];
        var HumiF3= [];
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
            var a4 = parseInt(item["AWD_A4"])
            var a5 = parseInt(item["AWD_A5"])
            var a6 = parseInt(item["AWD_A6"])
            var e1 = parseInt(item["AWD_E3"])
            var c9 = parseInt(item["CTH_C9"])
            var c10 = parseInt(item["CTH_C10"])
            var c11 = parseInt(item["CTH_C11"])
            var c12 = parseInt(item["CTH_C12"])
            var water3 = parseInt(item["Water_F3"])
            var wind3 = parseInt(item["Wind_F3"])
            var temp3 = parseInt(item["Temp_F3"])
            var humi3 = parseInt(item["Humi_F3"])
            Date_chart.push(d);
            AWDA4.push(a4);
            AWDA5.push(a5);
            AWDA6.push(a6);
            AWDE3.push(e1);
            CTHC9.push(c9);
            CTHC10.push(c10);
            CTHC11.push(c11);
            CTHC12.push(c12);
            WaterF3.push(water3);
            WindF3.push(wind3);
            TempF3.push(temp3);
            HumiF3.push(humi3);
          }
        //   console.log(Date_chart)
        //   console.log(AWDA4)
          this.DateOfChart = Date_chart;
          this.AWD_A4 = AWDA4;
          this.AWD_A5 = AWDA5;
          this.AWD_A6 = AWDA6;
          this.AWD_E3 = AWDE3;
          this.CTH_C9 = CTHC9;
          this.CTH_C10 = CTHC10;
          this.CTH_C11 = CTHC11;
          this.CTH_C12 = CTHC12;
          this.Water_F3 = WaterF3;
          this.Wind_F3 = WindF3;
          this.Temp_F3 = TempF3;
          this.Humi_F3 = HumiF3;
       
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
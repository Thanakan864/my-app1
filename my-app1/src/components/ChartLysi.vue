<template>
  <div id="lysimeter1-chart">
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
    <div class="ctn-chart-lysimeter1">
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
  name:'chart-lysimeter1',
  components:{
        LineChart,
        
    },
  data() {
    /// get Datenow - 15 day ///
    var d = new Date();
    // console.log(d.toLocaleString())
    // console.log(d.toISOString())
    this.date_now = d.toISOString().substr(0, 10);
    d.setDate(d.getDate() - 15);
    this.date_old = d.toISOString().substr(0, 10);
    /// END get Datenow - 15 day ///
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
      AWD_Z1:null,AWD_Z2:null,AWD_Z3:null,AWD_Z4:null,AWD_Z5:null,AWD_Z6:null,AWD_Z7:null,AWD_Z8:null,AWD_Z9:null,AWD_Z10:null,AWD_Z11:null,AWD_Z12:null,AWD_Z13:null,AWD_Z14:null,AWD_Z15:null,AWD_Z16:null
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
        // "https://script.google.com/macros/s/AKfycbyS_6UXRFkw3DGNoXa-kk1cFY725ncq_7FpZmC-xXlNP6rp4iLe60ZSQV2t-BsXhHce/exec?action=getData"
        "https://script.google.com/macros/s/AKfycbyQvjhX67GAjurkBrO__i5qPuFCqZfC0_h4MLinQbmU82L7fWJE1M8GlcPfn938L08sxw/exec?action=getData"

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
        var awd1= [];
        var awd2= [];
        var awd3= [];
        var awd4= [];
        var awd5= [];
        var awd6= [];
        var awd7= [];
        var awd8= [];
        var awd9= [];
        var awd10= [];
        var awd11= [];
        var awd12= [];
        var awd13= [];
        var awd14= [];
        var awd15= [];
        var awd16= [];
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
            var z1 = parseInt(item["AWD_Z1"])
            var z2 = parseInt(item["AWD_Z2"])
            var z3 = parseInt(item["AWD_Z3"])
            var z4 = parseInt(item["AWD_Z4"])
            var z5 = parseInt(item["AWD_Z5"])
            var z6 = parseInt(item["AWD_Z6"])
            var z7 = parseInt(item["AWD_Z7"])
            var z8 = parseInt(item["AWD_Z8"])
            var z9 = parseInt(item["AWD_Z9"])
            var z10 = parseInt(item["AWD_Z10"])
            var z11 = parseInt(item["AWD_Z11"])
            var z12 = parseInt(item["AWD_Z12"])
            var z13 = parseInt(item["AWD_Z13"])
            var z14 = parseInt(item["AWD_Z14"])
            var z15 = parseInt(item["AWD_Z15"])
            var z16 = parseInt(item["AWD_Z16"])
            Date_chart.push(d);
            awd1.push(z1);
            awd2.push(z2);
            awd3.push(z3);
            awd4.push(z4);
            awd5.push(z5);
            awd6.push(z6);
            awd7.push(z7);
            awd8.push(z8);
            awd9.push(z9);
            awd10.push(z10);
            awd11.push(z11);
            awd12.push(z12);
            awd13.push(z13);
            awd14.push(z14);
            awd15.push(z15);
            awd16.push(z16);
          }
        //   console.log(Date_chart)
        //   console.log(WindSpeedF1)
          this.DateOfChart = Date_chart;
          this.AWD_Z1 = awd1;
          this.AWD_Z2 = awd2;
          this.AWD_Z3 = awd3;
          this.AWD_Z4 = awd4;
          this.AWD_Z5 = awd5;
          this.AWD_Z6 = awd6;
          this.AWD_Z7 = awd7;
          this.AWD_Z8 = awd8;
          this.AWD_Z9 = awd9;
          this.AWD_Z10 = awd10;
          this.AWD_Z11 = awd11;
          this.AWD_Z12 = awd12;
          this.AWD_Z13 = awd13;
          this.AWD_Z14 = awd14;
          this.AWD_Z15 = awd15;
          this.AWD_Z16 = awd16;
       
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
                        label:"AWD_Z1(CM)",
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'red',
                        pointHoverBackgroundColor:'red',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z1,
                    },
                    {
                        label: 'AWD_Z2(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'green',
                        pointHoverBackgroundColor:'green',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z2
                    },
                    {
                        label: 'AWD_Z3(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'blue',
                        pointHoverBackgroundColor:'blue',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z3
                    },
                    {
                        label: 'AWD_Z4(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple',
                        pointHoverBackgroundColor:'purple',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z4
                    },
                    {
                        label: 'AWD_Z5(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'brown ',
                        pointHoverBackgroundColor:'brown ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z5
                    },
                    {
                        label: 'AWD_Z6(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'orange ',
                        pointHoverBackgroundColor:'orange ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z6
                    },
                    {
                        label: 'AWD_Z7(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'pink ',
                        pointHoverBackgroundColor:'pink ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z7
                    },
                    {
                        label: 'AWD_Z8(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'gold ',
                        pointHoverBackgroundColor:'gold ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z8
                    },
                    {
                        label: 'AWD_Z9(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'black ',
                        pointHoverBackgroundColor:'black ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data:this.AWD_Z9
                    },
                    {
                        label: 'AWD_Z10(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'crimson ',
                        pointHoverBackgroundColor:'crimson ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z10
                    },
                    {
                        label: 'AWD_Z11(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'purple ',
                        pointHoverBackgroundColor:'purple ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z11
                    },
                    {
                        label: 'AWD_Z12(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'indigo ',
                        pointHoverBackgroundColor:'indigo ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z12
                    },
                    {
                        label: 'AWD_Z13CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#17A2CD ',
                        pointHoverBackgroundColor:'#17A2CD ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z13
                    },
                    {
                        label: 'AWD_Z14(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#41FF6E ',
                        pointHoverBackgroundColor:'#41FF6E ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z14
                    },
                    {
                        label: 'AWD_Z15(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#10DDF3 ',
                        pointHoverBackgroundColor:'#10DDF3 ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z15
                    },
                    {
                        label: 'AWD_Z16(CM)',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'#DE8E8E ',
                        pointHoverBackgroundColor:'#DE8E8E ',
                        pointHoverBorderWidth:1,
                        borderWidth: 2,
                        // pointBorderColor:'undefined',
                        data: this.AWD_Z16
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
        var awd1= [];
        var awd2= [];
        var awd3= [];
        var awd4= [];
        var awd5= [];
        var awd6= [];
        var awd7= [];
        var awd8= [];
        var awd9= [];
        var awd10= [];
        var awd11= [];
        var awd12= [];
        var awd13= [];
        var awd14= [];
        var awd15= [];
        var awd16= [];
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
            var z1 = parseInt(item["AWD_Z1"])
            var z2 = parseInt(item["AWD_Z2"])
            var z3 = parseInt(item["AWD_Z3"])
            var z4 = parseInt(item["AWD_Z4"])
            var z5 = parseInt(item["AWD_Z5"])
            var z6 = parseInt(item["AWD_Z6"])
            var z7 = parseInt(item["AWD_Z7"])
            var z8 = parseInt(item["AWD_Z8"])
            var z9 = parseInt(item["AWD_Z9"])
            var z10 = parseInt(item["AWD_Z10"])
            var z11 = parseInt(item["AWD_Z11"])
            var z12 = parseInt(item["AWD_Z12"])
            var z13 = parseInt(item["AWD_Z13"])
            var z14 = parseInt(item["AWD_Z14"])
            var z15 = parseInt(item["AWD_Z15"])
            var z16 = parseInt(item["AWD_Z16"])
            Date_chart.push(d);
            awd1.push(z1);
            awd2.push(z2);
            awd3.push(z3);
            awd4.push(z4);
            awd5.push(z5);
            awd6.push(z6);
            awd7.push(z7);
            awd8.push(z8);
            awd9.push(z9);
            awd10.push(z10);
            awd11.push(z11);
            awd12.push(z12);
            awd13.push(z13);
            awd14.push(z14);
            awd15.push(z15);
            awd16.push(z16);
          }
        //   console.log(Date_chart)
        //   console.log(WindSpeedF1)
          this.DateOfChart = Date_chart;
          this.AWD_Z1 = awd1;
          this.AWD_Z2 = awd2;
          this.AWD_Z3 = awd3;
          this.AWD_Z4 = awd4;
          this.AWD_Z5 = awd5;
          this.AWD_Z6 = awd6;
          this.AWD_Z7 = awd7;
          this.AWD_Z8 = awd8;
          this.AWD_Z9 = awd9;
          this.AWD_Z10 = awd10;
          this.AWD_Z11 = awd11;
          this.AWD_Z12 = awd12;
          this.AWD_Z13 = awd13;
          this.AWD_Z14 = awd14;
          this.AWD_Z15 = awd15;
          this.AWD_Z16 = awd16;
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
.ctn-chart-lysimeter1{
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
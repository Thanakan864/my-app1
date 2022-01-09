<template>
  <div id="water-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of this.sprit_data" v-bind:key="item.id">
          <td>{{ item["Date"].substr(0,10) }}</td>
          <td>{{ item["A"] }}</td>
          <td>{{ item["B"] }}</td>
          <td>{{ item["C"] }}</td>
          <td>{{ item["D"] }}</td>
          <td>{{ item["E"] }}</td>
          <td>{{ item["F"] }}</td>
          <td>{{ item["G"] }}</td>
          <td>{{ item["H"] }}</td>
        </tr>
      </tbody>
    </table>

    <div id="app-picker">
      <v-app id="inspire">
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              v-model="dateRangeText"
              v-on:click = "click_text()"
              label="Date range"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
            <div class="picker-dialog"
            v-if="state_text_click === true">
              <v-date-picker
                v-model="dates"
                range
                no-title
              ></v-date-picker>
              <v-btn
                v-on:click="click_btn()"
                block
                color="primary"
                elevation="2"
              >OK</v-btn>
            </div>
            
          </v-col>
        </v-row>
      </v-app>
    </div>
    
      
      
      
  </div>
</template>
<script>

import axios from "axios";
export default {
  name: "water-table",
  data() {
    /// get Datenow - 15 day ///
        var d = new Date();
        // console.log(d.toLocaleString())
        // console.log(d.toISOString())
        this.date_now = d.toISOString().substr(0,10)
        d.setDate(d.getDate() - 15);
        this.date_old = d.toISOString().substr(0,10)
    /// END get Datenow - 15 day ///
    return {
      info: null,
      sprit_data:[],
      state_text_click:false,
      date_now:null,
      date_old:null,
      dates: [this.date_old,this.date_now],
    };
  },
  computed: {
        dateRangeText() {
          
          return this.dates.join(' ~ ')
    },
  },
  methods: {
    click_text: function (event) {
      
      if(this.state_text_click == false){
        // console.log("click_text_state=true")
        return this.state_text_click = true
      }
      else {
        // console.log("click_text_state=false")
        return this.state_text_click = false
      }
    },
    click_btn: function(event){
      // console.log("click_btn_OK")
      // console.log(this.dates)
      var select_date = this.dates;
      var start_date = new Date(select_date[0]);
      var end_date = new Date(select_date[1]);
      var sprit_date;
      // console.log(select_date[0],select_date[1])
      
      if(select_date[0]==null || select_date[1]==null){
          // console.log("no")
          alert("Please Enter Date for Start to END")
        }
      if(start_date>end_date){
          alert("Please enter a valid start to end date.")
      }
      else{
          var data_select=[];
          for(var item of this.info) {
          sprit_date = new Date(item.Date.substr(0,10));
          if(start_date<=sprit_date&&sprit_date<=end_date){
            // console.log(item)
            data_select.push(item)
              }
            }
          // console.log(data_select) 
          return this.state_text_click = false, this.sprit_data = data_select
          }

      var data_select=[];
      for(var item of this.info) {
        sprit_date = new Date(item.Date.substr(0,10));
        if(start_date<=sprit_date&&sprit_date<=end_date){
          console.log(item)
          data_select.push(item)
        }
      }
      console.log(data_select) 
      return this.state_text_click = false, this.sprit_data = data_select
    }
  },
  mounted() {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyn9rKaQXdHzu3n-ocdq2OdKJmmsxNOlNRKFhiCSDpxPbxsYfD49mvwd52k1Za92WezIw/exec?action=getUsers"
      )
      .then((response) => {
        this.info = response.data;
        // console.log(response.data);
        var select_date = this.dates;
        var start_date = new Date(select_date[0]);
        var end_date = new Date(select_date[1]);
        var sprit_date;
        var data_filter=[];
        var data_select=[];
        var d;
       ///// filer set Date to correct /////
        for(var item of this.info){
          d = new Date(item.Date)
          d.setDate(d.getDate(item.Date)+ 1);
          item.Date = d.toISOString().substr(0,10)
          data_filter.push(item)
        }
        // console.log("data_filter")
        // console.log(data_filter)
      ///// filer data to table follow date your select /////
        for(var item of data_filter){
          sprit_date = new Date(item.Date.substr(0,10));
          if(start_date<=sprit_date&&sprit_date<=end_date){
            // console.log(item)
            data_select.push(item)
        }
        this.sprit_data = data_select;
        // console.log(data_select) 
        }
      });
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
  background-color: #04aa6d;
  color: white;
}
</style>
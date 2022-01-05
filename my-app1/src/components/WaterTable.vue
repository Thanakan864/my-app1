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
        <tr v-for="item of info" v-bind:key="item.id">
          <td>{{ item["Date"] }}</td>
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
    return {
      info: null,
      state_text_click:false,
      dates: ['2021-05-01', '2021-05-09'],
      // dates: ['Start Date', 'End Date'],
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
        console.log("click_text_state=true")
        return this.state_text_click = true
      }
      else {
        console.log("click_text_state=false")
        return this.state_text_click = false
      }
    },
    click_btn: function(event){
      console.log("click_btn_OK")
      console.log(this.dates)
      return this.state_text_click = false
    }
  },
  mounted() {
    // console.log('water')
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyn9rKaQXdHzu3n-ocdq2OdKJmmsxNOlNRKFhiCSDpxPbxsYfD49mvwd52k1Za92WezIw/exec?action=getUsers"
        // "https://script.google.com/macros/s/AKfycbzDm1SNtXwsmaQo2s0NFRrfWNrCX05QH-hDmRLxMnotWiohnOQk9KQQM9xfqL90lYzX/exec?action=getDatas"
      )
      .then((response) => {
        this.info = response.data;
        console.log(response.data);
        // for(let item of this.info){
        //   console.log(item.PADDY)
        // }
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
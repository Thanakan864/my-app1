<template>
  <div id="alternative-table">
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
        <v-btn class="btn-ok"
          v-on:click="click_btn()"
          min-width=89%
          color="rgb(41 149 250)"
          elevation="2"
          >OK</v-btn>
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

    <!-- <div class="btn-export"><v-btn v-on:click="onExport()" elevation="2" color="rgba(60, 179, 113,0.5)">Export</v-btn></div> -->
    <div class="Table-irrigation">
      <table id="myTable">
      <thead>
        <tr>
          <th>Date</th>
          <th>AWD_A1</th>
          <th>AWD_A2</th>
          <th>AWD_A3</th>
          <th>AWD_E1</th>
          <th>CTH_C1</th>
          <th>CTH_C2</th>
          <th>CTH_C3</th>
          <th>CTH_C4</th>
          <th>Water_F1</th>
          <th>Wind_F1</th>
          <th>Temp_F1</th>
          <th>Humi_F1</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of this.sprit_data" v-bind:key="item.id">
          <td>{{ item["Date"].substr(0, 10) }}</td>
          <td>{{ item["AWD_A1"] }}</td>
          <td>{{ item["AWD_A2"] }}</td>
          <td>{{ item["AWD_A3"] }}</td>
          <td>{{ item["AWD_E1"] }}</td>
          <td>{{ item["CTH_C1"] }}</td>
          <td>{{ item["CTH_C2"] }}</td>
          <td>{{ item["CTH_C3"] }}</td>
          <td>{{ item["CTH_C4"] }}</td>
          <td>{{ item["Water_F1"] }}</td>
          <td>{{ item["Wind_F1"] }}</td>
          <td>{{ item["Temp_F1"] }}</td>
          <td>{{ item["Humi_F1"] }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
import XLSX from "xlsx"; // import xlsx

export default {
  name: "alternative-table",
  components: {
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
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  methods: {
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
      // console.log("click_btn_OK")
      // console.log(this.dates)
      var select_date = this.dates;
      var start_date = new Date(select_date[0]);
      var end_date = new Date(select_date[1]);
      var sprit_date;
      // console.log(select_date[0],select_date[1])

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
        return (this.state_text_click = false), (this.sprit_data = data_select);
      }

      var data_select = [];
      for (var item of this.info) {
        sprit_date = new Date(item.Date.substr(0, 10));
        if (start_date <= sprit_date && sprit_date <= end_date) {
          console.log(item);
          data_select.push(item);
        }
      }
      console.log(data_select);
      return (this.state_text_click = false), (this.sprit_data = data_select);
    },
    onExport: function (event) {
      const dataWS = XLSX.utils.json_to_sheet(this.info);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      XLSX.writeFile(wb, "export.xlsx");
    },
    getDataAlternative : function(event){
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
          // console.log(data_select)
        }

        $(document).ready(function () {
          $("#myTable").DataTable({
            info:false,
            lengthChange: false,
            pageLength: 999999999,
            scrollY:550,
            // searching: ture,
            
            
            paging: false,
            // scrollY: false,
            // scrollX: false,
            // searching: false,
            // scrollbars:false,

          });
        });
      });
    }
  },
  mounted() {
    this.getDataAlternative();
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
.btn-ok{
    padding: 0px 0px;
}
.row {
    display: flex;
    flex: 1 1 auto;
    margin-left: 25px;
    margin-top: 10px;
    flex-wrap: wrap;
}
.Table-irrigation{
  margin-top:50px;
  width: 70vw;
  text-align: center;
}
</style>
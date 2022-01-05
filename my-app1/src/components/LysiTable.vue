<template>
  <div id="lysi-table">
    <div class="date-select">
      <div class="date_box"><DatePicker/></div>
    </div>
    <div class="table-show">
      <table>
        <thead>
          <tr>
            <th>D/M/Y</th>
            <th>PADDY</th>
            <th>Rain gauge</th>
            <th>Cut Throatful</th>
            <th>Class A Pan</th>
            <th>AWD</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of info" v-bind:key="item.id">
            <td>{{ item["D/M/Y"] }}</td>
            <td>{{ item["PADDY"] }}</td>
            <td>{{ item["Rain gauge"] }}</td>
            <td>{{ item["Cut Throatful"] }}</td>
            <td>{{ item["Class A Pan"] }}</td>
            <td>{{ item["AWD"] }}</td>
            <td>{{ item["P"] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
import DatePicker from './DatePicker.vue'
export default {
  name: "lysi-table",
  components:{
    DatePicker,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    // console.log('lysi')
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
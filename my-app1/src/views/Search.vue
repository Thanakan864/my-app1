<template>
  <div class="search">
    <div class="menu-search">
      <div @click="onClickMenuBtn('Irrigation')" :class="Table_Irrigation_btn_class">
        <p>Irrigation</p>
      </div>
      <div @click="onClickMenuBtn('weather')" :class="Table_weather_btn_class">
       <p>Weather</p>
      </div>
      <div @click="onClickMenuBtn('lysi')" :class="lysi_btn_class">
        <p>Lysimeter</p>
      </div>
    </div>
    <div v-if="content_value ==='Irrigation'" class="content-home" id="Irrigation">
      <h1>Table Irrigation</h1>
      <IrrigationTable/>
      
    </div>
    <div  v-if="content_value ==='weather'" class="content-search" id="weather">
      <h1 >Table Weather</h1>
      <WeatherTable/>
    </div>
    <div v-else-if="content_value ==='lysi'" id="lysimeter">
      <h1 >Table Lysi meter</h1>
      <LysiTable/>
    </div>
  </div>
</template>
<style scoped>

.search{
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 140px 6fr;
  grid-template-areas:
  "menu-search content-search"
  "menu-search content-search"
  "menu-search content-search";
  background-color: #fff;
  color: #444;
}
.menu-search {
  grid-area: menu-search;
  background-color: #ffffff;
  width: 100%;
  min-height: 100vh;
  height: 100%;
}
.btn-menu{
  border-bottom: solid 1px  rgb(185, 182, 182);
  color: #444;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.btn-menu-active{
  border-bottom: solid 1px  rgb(185, 182, 182);
  color: #444;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(45, 183, 245);
}
.btn-menu{
  background-color: rgb(255, 255, 255);
}
#lysimeter{
  background-color: #ffffff;
}
#weather{
  background-color: #ffffff;
}
.content-search {
  grid-area: content-search;
  /* background-color: #adb942; */
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import WeatherTable from '@/components/WeatherTable.vue'
import LysiTable from '@/components/LysiTable.vue'
import IrrigationTable from '@/components/IrrigationTable.vue'
// import PlanetChart from './components/PlanetChart.vue'
// import DatePicker from '@/components/DatePicker.vue'
import DatePicker from 'vue2-datepicker'
export default {
  name: 'Search',
  components: {
    HelloWorld,
    WeatherTable,
    LysiTable,
    DatePicker,
    IrrigationTable,
    // PlanetChart,
  },
  data() {
    return {
      content_value:"Irrigation",
      Table_weather_btn_class:"btn-menu",
      lysi_btn_class:"btn-menu",
      Table_Irrigation_btn_class:"btn-menu-active",
      date:'',
      
    }
  },
  methods: {
    onClickMenuBtn:function(name){
      if(name == 'weather')
    {
      this.Table_weather_btn_class = 'btn-menu-active'
      this.lysi_btn_class = 'btn-menu'
      this.Table_Irrigation_btn_class = "btn-menu";
      this.content_value="weather"
    }else if(name == 'lysi'){
      this.Table_weather_btn_class = 'btn-menu'
      this.lysi_btn_class = 'btn-menu-active'
      this.Table_Irrigation_btn_class = "btn-menu";
      this.content_value="lysi"
    }
    else if (name == "Irrigation") {
      this.Table_weather_btn_class = "btn-menu";
      this.lysi_btn_class = "btn-menu";
      this.Table_Irrigation_btn_class = "btn-menu-active";
      // this.content_value = false;
      this.content_value = "Irrigation";
    }
    
    // console.log(this.Table_weather_btn_class)
    // console.log(this.content_value)
    }
  },
}

</script>

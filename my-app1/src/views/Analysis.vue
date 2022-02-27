<template>
  <div class="analysis">
    <div class="menu-analysis">
      <div @click="onClickMenuBtn('Irrigation')" :class="Irrigation_btn_class">
        <p>Irrigation</p>
      </div>
      <div @click="onClickMenuBtn('weather')" :class="weather_btn_class">
        <p>Weather</p>
      </div>
      <div @click="onClickMenuBtn('lysi')" :class="lysi_btn_class">
        <p>Lysimeter</p>
      </div>
    </div>
    <div v-if="content_value ==='Irrigation'" class="content-analysis" id="Irrigation">
      <h1 >Content Irrigation</h1>
      <ChartIrrigation/>
    </div>
    <div v-if="content_value ==='weather'" class="content-analysis" id="weather">
      <h1 >Content Weather</h1>
      <ChartWater/>
    </div>
    <div v-if="content_value ==='lysi'" id="lysimeter">
      <h1 >Content Lysimeter</h1>
      <ChartLysi/>
      
    </div>
  </div>
</template>
<style scoped>
.analysis{
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 140px 6fr;
  grid-template-areas:
  "menu-analysis content-analysis"
  "menu-analysis content-analysis"
  "menu-analysis content-analysis";
  background-color: #fff;
  color: #444;
}
.menu-analysis {
  grid-area: menu-analysis;
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
#Irrigation{
  background-color: #ffffff;
}
#weather{
  background-color: #ffffff;
}
.content-analysis {
  grid-area: content-analysis;
  background-color: #adb942;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ChartIrrigation from '@/components/ChartIrrigation.vue'
import ChartWater from '@/components/ChartWater.vue'
import ChartLysi from '@/components/ChartLysi.vue'
// import ChartWaterJS from '@/components/ChartWaterJS.js'



export default {
  name: 'analysis',
  components: {
    HelloWorld,
    ChartIrrigation,
    ChartWater,
    ChartLysi,
    
  },
  data() {
    return {
      content_value:"Irrigation",
      Irrigation_btn_class:"btn-menu-active",
      weather_btn_class:"btn-menu",
      lysi_btn_class:"btn-menu"
    }
  },
  methods: {
    onClickMenuBtn:function(name){
      if(name == 'weather')
    {
      this.weather_btn_class = 'btn-menu-active'
      this.lysi_btn_class = 'btn-menu'
      this.Irrigation_btn_class = 'btn-menu'
      this.content_value='weather'
    }else if(name == 'lysi'){
      this.weather_btn_class = 'btn-menu'
      this.lysi_btn_class = 'btn-menu-active'
      this.Irrigation_btn_class = 'btn-menu'
      this.content_value='lysi'
    }
    else if(name == 'Irrigation'){
      this.weather_btn_class = 'btn-menu'
      this.lysi_btn_class = 'btn-menu'
      this.Irrigation_btn_class = 'btn-menu-active'
      this.content_value='Irrigation'
    }
    
    // console.log(this.weather_btn_class)
    }
  },
}

</script>
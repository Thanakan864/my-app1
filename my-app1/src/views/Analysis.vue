<template>
  <div class="analysis">
    <div class="menu-analysis">
      <div @click="onClickMenuBtn('water')" :class="water_btn_class">
        <p>Water</p>
      </div>
      <div @click="onClickMenuBtn('lysi')" :class="lysi_btn_class">
        <p>Lysi Meter</p>
      </div>
    </div>
    <div v-if = "content_value" class="content-analysis" id="water">
      <h1 >Content Water</h1>
      <ChartWater/>

      
    </div>
    <div v-else class="content-analysis" id="lysimeter">
      <h1 >Content Lysi meter</h1>
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
#water{
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
import ChartWater from '@/components/ChartWater.vue'
import ChartLysi from '@/components/ChartLysi.vue'
// import ChartWaterJS from '@/components/ChartWaterJS.js'



export default {
  name: 'analysis',
  components: {
    HelloWorld,
    ChartWater,
    ChartLysi,
    
  },
  data() {
    return {
      content_value:true,
      water_btn_class:"btn-menu-active",
      lysi_btn_class:"btn-menu"
    }
  },
  methods: {
    onClickMenuBtn:function(name){
      if(name == 'water')
    {
      this.water_btn_class = 'btn-menu-active'
      this.lysi_btn_class = 'btn-menu'
      this.content_value=true
    }else if(name == 'lysi'){
      this.water_btn_class = 'btn-menu'
      this.lysi_btn_class = 'btn-menu-active'
      this.content_value=false
    }
    
    console.log(this.water_btn_class)
    }
  },
}

</script>
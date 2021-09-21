<template>
  <div class="search">
    <div class="menu-search">
      <div @click="onClickMenuBtn('water')" :class="water_btn_class">
       <p>Water</p>
      </div>
      <div @click="onClickMenuBtn('lysi')" :class="lysi_btn_class">
        <p>Lysi Meter</p>
      </div>
    </div>
    <div v-if = "content_value" class="content-search" id="water">
      <h1 >Content Water</h1>
      <WaterTable/>
    </div>
    <div v-else class="content-search" id="lysimeter">
      <h1 >Content Lysi meter</h1>
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
#water{
  background-color: #ffffff;
}
.content-search {
  grid-area: content-search;
  background-color: #adb942;
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import WaterTable from '@/components/WaterTable.vue'
import LysiTable from '@/components/LysiTable.vue'
// import DatePicker from '@/components/DatePicker.vue'
import DatePicker from 'vue2-datepicker'
export default {
  name: 'Search',
  components: {
    HelloWorld,
    WaterTable,
    LysiTable,
    DatePicker,
  },
  data() {
    return {
      content_value:true,
      water_btn_class:"btn-menu-active",
      lysi_btn_class:"btn-menu",
      date:'',
      
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
    console.log(this.content_value)
    }
  },
}

</script>

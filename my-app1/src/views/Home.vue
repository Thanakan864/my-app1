<template>
  <div class="home">
    <div class="menu-home">
      <div @click="onClickMenuBtn('Irrigation')" :class="Irrigation_btn_class">
        <p>Irrigation</p>
      </div>
      <div @click="onClickMenuBtn('weather')" :class="weather_btn_class">
        <p>Weather</p>
      </div>
      <div @click="onClickMenuBtn('adw')" :class="adw_btn_class">
        <p>Lysimeter</p>
      </div>
    </div>
    <div v-if="content_value ==='Irrigation'" class="content-home" id="Irrigation">
      <h1>Content Irrigation</h1>
      <HomeIrrigation/>
    </div>
    <div v-if="content_value ==='weather'" class="content-home" id="weather">
      <h1>Content weather station</h1>
      <HomeWeather/>
    </div>
    <div v-else-if="content_value ==='adw'" class="content-home" id="adwmeter">
      <h1>Content LYSIMETER</h1>
      <HomeLysimeter/>
    </div>
  </div>
</template>
<style scoped>
.home {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 140px 6fr;
  grid-template-areas:
    "menu-home content-home"
    "menu-home content-home"
    "menu-home content-home";
  background-color: #fff;
  color: #444;
}
.menu-home {
  grid-area: menu-home;
  background-color: #ffffff;
  width: 100%;
  min-height: 100vh;
  height: 100%;
}
.btn-menu {
  border-bottom: solid 1px rgb(185, 182, 182);
  color: #444;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.btn-menu-active {
  border-bottom: solid 1px rgb(185, 182, 182);
  color: #444;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(45, 183, 245);
}
.btn-menu {
  background-color: rgb(255, 255, 255);
}
#adwmeter {
  background-color: #ffffff;
}
#weather {
  background-color: #ffffff;
}
.content-home {
  grid-area: content-home;
  background-color: #ffffff;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HomeWeather from '@/components/HomeWeather.vue'
import HomeLysimeter from '@/components/HomeLysimeter.vue'
import HomeIrrigation from '@/components/HomeIrrigation.vue'

export default {
  name: "home",
  components: {
    HelloWorld,
    HomeIrrigation,
    HomeWeather,
    HomeLysimeter,
  },
  data() {
    return {
      // content_value: true,
      content_value:"Irrigation",
      Irrigation_btn_class:"btn-menu-active",
      weather_btn_class: "btn-menu",
      adw_btn_class: "btn-menu",
    };
  },
  methods: {
    onClickMenuBtn: function (name) {
      if (name == "weather") {
        this.weather_btn_class = "btn-menu-active";
        this.adw_btn_class = "btn-menu";
        this.Irrigation_btn_class = "btn-menu";
        // this.content_value = true;
        this.content_value = "weather";
      } else if (name == "adw") {
        this.weather_btn_class = "btn-menu";
        this.adw_btn_class = "btn-menu-active";
        this.Irrigation_btn_class = "btn-menu";
        // this.content_value = false;
        this.content_value = "adw";
      }
      else if (name == "Irrigation") {
        this.weather_btn_class = "btn-menu";
        this.adw_btn_class = "btn-menu";
        this.Irrigation_btn_class = "btn-menu-active";
        // this.content_value = false;
        this.content_value = "Irrigation";
      }

      // console.log(this.weather_btn_class);
    },
  },
};
</script>
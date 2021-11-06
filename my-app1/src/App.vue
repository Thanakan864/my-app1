<template>
  <div id="app">
    <div class="sidebar">
      <div class="sidebar-logo">
        <img src="./assets/logo1.jpg" alt="logo1" />
        <img src="./assets/logo2.png" alt="logo2" />
      </div>
      <div class="iot-platform"><h1>IOT-PLATFORM</h1></div>
      <div id="nav">
        <router-link to="/">
          <div :class="home_btn_active" @click="onClickNavBtn('home')">
            <i id="icon-home" class="fa fa-home" aria-hidden="true"></i>
            <p>HOME</p>
          </div>
        </router-link>
        <router-link to="/Search">
          <div :class="search_btn_active" @click="onClickNavBtn('search')">
            <i id="icon-search" class="fa fa-search" aria-hidden="true"></i>
            <p>SEARCH</p>
          </div>
        </router-link>
        <router-link to="/Analysis">
          <div :class="analysis_btn_active" @click="onClickNavBtn('analysis')">
            <i id="icon-analysis" class="fa fa-line-chart" aria-hidden="true"></i>
            <p>ANALYSIS</p>
          </div>
        </router-link>
        <router-link to="/Location">
          <div :class="location_btn_active" @click="onClickNavBtn('location')">
            <i id="icon-location" class="fa fa-map-marker" aria-hidden="true"></i>
            <p>LOCATION</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      home_btn_active: "nav_active",
      search_btn_active: "nav_deactive",
      analysis_btn_active: "nav_deactive",
      location_btn_active: "nav_deactive",
    };
  },
  //get URL for change color navigator Home , Search , Analysis , Location
  mounted(nameBtn){
    var url = window.location.href;
        console.log(url)
        if (nameBtn == "home"|| url == "http://localhost:8080/") {
        this.home_btn_active = "nav_active";
        this.search_btn_active = "nav_deactive";
        this.analysis_btn_active = "nav_deactive";
        this.location_btn_active = "nav_deactive";
        
      } else if (nameBtn == "search" || url == "http://localhost:8080/Search") {
        this.home_btn_active = "nav_deactive";
        this.search_btn_active = "nav_active";
        this.analysis_btn_active = "nav_deactive";
        this.location_btn_active = "nav_deactive";
      } else if (nameBtn == "analysis" || url == "http://localhost:8080/Analysis") {
        this.home_btn_active = "nav_deactive";
        this.search_btn_active = "nav_deactive";
        this.analysis_btn_active = "nav_active";
        this.location_btn_active = "nav_deactive";
      } else if (nameBtn == "location" || url == "http://localhost:8080/Location") {
        this.home_btn_active = "nav_deactive";
        this.search_btn_active = "nav_deactive";
        this.analysis_btn_active = "nav_deactive";
        this.location_btn_active = "nav_active";
      }
  },

  methods: {
    //event onclick navigator Home , Search , Analysis , Location
    onClickNavBtn: function (nameBtn) {
      
      if (nameBtn == "home") {
        this.home_btn_active = "nav_active";
        this.search_btn_active = "nav_deactive";
        this.analysis_btn_active = "nav_deactive";
        this.location_btn_active = "nav_deactive";
        
      } else if (nameBtn == "search") {
        this.home_btn_active = "nav_deactive";
        this.search_btn_active = "nav_active";
        this.analysis_btn_active = "nav_deactive";
        this.location_btn_active = "nav_deactive";
      } else if (nameBtn == "analysis") {
        this.home_btn_active = "nav_deactive";
        this.search_btn_active = "nav_deactive";
        this.analysis_btn_active = "nav_active";
        this.location_btn_active = "nav_deactive";
      } else if (nameBtn == "location") {
        this.home_btn_active = "nav_deactive";
        this.search_btn_active = "nav_deactive";
        this.analysis_btn_active = "nav_deactive";
        this.location_btn_active = "nav_active";
      }
    },
  },
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  text-decoration-color: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-areas:
    "sidebar content content"
    "sidebar content content"
    "sidebar content  content";
  /* background-color: #fff;
  color: #444; */
}
.sidebar {
  grid-area: sidebar;
  background-color: rgb(84, 92, 100);
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.sidebar-logo {
  margin: 20px 25px;
  
}

.sidebar-logo img:nth-child(1) {
  width: 60px;
  height: 80px;
  margin-top:0px;
  /* background-color: blue; */
}

.sidebar-logo img:nth-child(2) {
  margin-left: 10px;
  margin-top:0px;
  width: 80px;
  height: 80px;
  padding-bottom: 0px;
  /* background-color: blue; */
}
/*********************************************END LOGO*****************************************************/
.iot-platform h1 {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 25px;
}
/*********************************************END IOT-PLATFORM*****************************************************/

#nav {
  text-align: left;
}

#nav p {
  padding-left: 10px;
  display: inline;
  text-decoration: none;
}
#icon-analysis{
  margin-right: -1px;
}
#icon-location{
  margin-right: 7px;
}

.nav_deactive {
  padding: 20px 10px;
  padding-left: 40px;
  /* margin-left:30px ; */
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
}
.nav_active {
  padding: 20px 10px;
  padding-left: 40px;
  color: #adb942;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
}
#nav div:hover {
  background-color: rgb(70, 77, 83);
  cursor: pointer;
}

/*********************************************END NAV*****************************************************/

.content {
  grid-area: content;
  /* background-color: #adb942; */
}
</style>

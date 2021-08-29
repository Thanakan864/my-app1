<template>
  <div class="home">
    <div class="menu-home">
      <div @click="onClickMenuBtn('vector')" :class="vector_btn_class">
        <p>Vector Station</p>
      </div>
      <div @click="onClickMenuBtn('adw')" :class="adw_btn_class">
        <p>ADW</p>
      </div>
    </div>
    <div v-if="content_value" class="content-home" id="vector">
      <h1>Content vector station</h1>
    </div>
    <div v-else class="content-home" id="adwmeter">
      <h1>Content ADW</h1>
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
#vector {
  background-color: #ffffff;
}
.content-home {
  grid-area: content-home;
  background-color: #adb942;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      content_value: true,
      vector_btn_class: "btn-menu-active",
      adw_btn_class: "btn-menu",
    };
  },
  methods: {
    onClickMenuBtn: function (name) {
      if (name == "vector") {
        this.vector_btn_class = "btn-menu-active";
        this.adw_btn_class = "btn-menu";
        this.content_value = true;
      } else if (name == "adw") {
        this.vector_btn_class = "btn-menu";
        this.adw_btn_class = "btn-menu-active";
        this.content_value = false;
      }

      console.log(this.vector_btn_class);
    },
  },
};
</script>
<template>
    <div id="app-picker">
      <v-app id="inspire">
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              v-model="dateRangeText"
              v-on:click = "click_texts()"
              label="Date range"
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
            <div class="picker-dialogs"
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
</template>
<script>

export default {
    name: 'app-picker',
    data(){
        return{
            state_text_click:false,
            dates: ['2021-05-01', '2021-05-09'],
        }
    },
    computed: {
        dateRangeText() {
          return this.dates.join(' ~ ')
    },
  },
  methods: {
    click_texts: function (event) {
      
      if(this.state_text_click == false){
        console.log("click_texts_state=true")
        return this.state_text_click = true
      }
      else {
        console.log("click_texts_state=false")
        return this.state_text_click = false
      }
    },
    click_btn: function(event){
      console.log("click_btn_OK")
      console.log(this.dates)
      return this.state_text_click = false
    }
  },
    
}
</script>
<style>


.picker-dialogs{
    position: absolute;
    z-index: 1000;
}
.row{
    all:unset;
}
.v-application--wrap{
    position: relative;
    
}


</style>
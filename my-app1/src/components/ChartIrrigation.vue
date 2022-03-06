<template>
  <div id="irrigation-chart">
    <div data-app>
           <v-select
           v-model="select"
            :items="items"
            item-text="text"
            item-value="value"
            label="Select"
            persistent-hint
            return-object
            single-line
          v-on:change="onChange($event)">
        </v-select>

        </div>
    <div v-if="select.text ==='Alternative Wetting and Dryying'">
       <AlternativeChart/>
    </div>
    <div v-if="select.text ==='Saturated soil Irrigation'">
       <SaturatedChart/>
    </div>
    <div v-if="select.text ==='Continuous Flooding'">
       <ContinousChart/>
    </div>
</div>
</template>
<script>
import AlternativeChart from "@/components/Irrigation_AlternativeChart.vue";
import SaturatedChart from "@/components/Irrigation_SaturatedChart.vue";
import ContinousChart from "@/components/Irrigation_ContinousChart.vue";
export default {
  name:'chart-irrigation',
  components:{
      AlternativeChart,
      SaturatedChart,
      ContinousChart,
        
    },
  data() {
    
    return {
      select:{text:'Alternative Wetting and Dryying' ,value:"1"},
      items: [
        {text:'Alternative Wetting and Dryying' ,value:"1"},
        {text:'Saturated soil Irrigation',value:"2"},
        {text:'Continuous Flooding',value:"3"}
        ],
      
    };
  },
  computed: {
    
  },
  methods: {
      
  },
  async mounted() {
 
  },
  
};
</script>
<style scoped>

</style>
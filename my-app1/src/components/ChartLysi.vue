<template>
<div class="area-lysi">
    <div class="ctn-chart-lysi">
        <!-- chart.js component -->
        <LineChart :chart-data = 'datacollection'></LineChart>
    </div>
</div>
    
</template>
<style scope>
.ctn-chart-lysi{
    width: 40vw;
    height: 50vh;
    margin: 0 auto;
}
</style>
<script>
import LineChart from './ChartWaterJS.js'
export default {
    name:'chart-lysi',
    components:{
        LineChart,
    },
    data(){
        return{
            datacollection: null,
            loaded: false
        }
    },
    mounted(){
        this.fillData()
    },
    methods:{
        fillData(){
            this.datacollection = {
                labels: [0,1,2,3,4,5,6,7,8,9],
                datasets:[
                    {
                        label: 'lysi1',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'red',
                        pointBackgroundColor:'red',
                        borderWidth: 1,
                        pointBorderColor:'undefined',
                        data: [0,4,0,3,4,5,4,0,8,7]
                    },
                    {
                        label: 'lysi2',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'blue',
                        pointBackgroundColor:'blue',
                        borderWidth: 1,
                        pointBorderColor:'undefined',
                        data: [7,1,2,0,4,7,2,7,0,3]
                    },
                    {
                        label: 'lysi3',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'Green',
                        pointBackgroundColor:'Green',
                        borderWidth: 1,
                        pointBorderColor:'undefined',
                        data: [5,4,5,4,5,4,6,7,5,4]
                    }
                ]
            }
        }
    }
}
</script>




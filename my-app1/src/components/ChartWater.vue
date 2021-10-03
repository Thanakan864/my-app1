<template>
<div class="area-water">
    <div class="ctn-chart-water">
        <!-- chart.js component -->
        <LineChart :chart-data = 'datacollection'></LineChart>
    </div>
</div>
    
</template>
<style scope>
.ctn-chart-water{
    width: 40vw;
    height: 50vh;
    margin: 0 auto;
}
</style>
<script>
import LineChart from './ChartWaterJS.js'
export default {
    name:'chart-water',
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
                        label: 'Water1',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'red',
                        pointBackgroundColor:'red',
                        borderWidth: 1,
                        pointBorderColor:'undefined',
                        data: [3,4,2,3,4,5,3,4,8,7]
                    },
                    {
                        label: 'Water2',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'blue',
                        pointBackgroundColor:'blue',
                        borderWidth: 1,
                        pointBorderColor:'undefined',
                        data: [4,1,2,3,4,1,2,7,8,3]
                    },
                    {
                        label: 'Water3',
                        backgroundColor: 'rgba(0, 0, 0, 0.0)',
                        borderColor:'Green',
                        pointBackgroundColor:'Green',
                        borderWidth: 1,
                        pointBorderColor:'undefined',
                        data: [2,5,6,3,4,5,6,7,5,6]
                    }
                ]
            }
        }
    }
}
</script>




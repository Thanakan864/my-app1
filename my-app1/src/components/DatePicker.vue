<template>
    <div id="datepicker">
        <date-picker v-model="date" lang="en" type="date" format="YYYY-MM-dd"></date-picker>
    </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
export default {
    name: 'datepicker',
    component:{
        DatePicker,
    },
    data(){
        return{
            date:''
        }
    }
    
}
</script>
<template>
    <div class="flexbox-adw">
        <div class="header-topic">
            <div class="col">
                <h3>Alternative Wetting and Drying</h3>
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00001</p>
                        <p>{{this.info_mm.A}} CM</p>
                    </div>
                </div>
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00002</p>
                        <p>5 CM</p>
                    </div>
                </div>
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00003</p>
                        <p>5 CM</p>
                    </div>
                </div>
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00004</p>
                        <p>5 CM</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <h3>Saturated soil Irrigation</h3>
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>SM00001</p>
                        <p>25.1 %RH</p>
                    </div>
                </div>
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>SM00002</p>
                        <p>25.1 %RH</p>
                    </div>
                </div>
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>SM00003</p>
                        <p>25.1 %RH</p>
                    </div>
                </div>
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>SM00004</p>
                        <p>25.1 %RH</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <h3>Continuous Flooding</h3>
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00005</p>
                        <p>5 CM</p>
                    </div>
                </div>
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00006</p>
                        <p>5 CM</p>
                    </div>
                </div>
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00007</p>
                        <p>5 CM</p>
                    </div>
                </div>
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>AWD00008</p>
                        <p>5 CM</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    
</template>
<script>
import axios from "axios";
export default {
   name: "home-adw",
  data() {
    return{
        info_cm:"",
        info_mm:"",
        info_soil:"",
    };
  },
  mounted() {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbxXn5GImshdySSMUPprJzp2Qbrit2Q2DENti_dWyYusEf_6Jbdi0D_4x_8-I4KDupDd/exec?action=getData"
        )
      .then((response) => {
        var data_soil = response.data;
        console.log(data_soil)
        for(var item of data_soil){
            this.info_soil = item
            
        }
        console.log(this.info_soil)
       })
    
    axios
       .get(
        "https://script.google.com/macros/s/AKfycbxz3uFuiPeE6Kc0GaJcrjcuHnzi6gGtBKsWTtUOmufgt--O8lD-XNCx-yn2wsWGtbVN/exec?action=getData"
        )
      .then((response) => {
        var data_cm = response.data;
        console.log(data_cm)
        for(var item of data_cm){
            this.info_cm = item
            
        }
        console.log(this.info_cm)
       })
    
    axios
       .get(
        "https://script.google.com/macros/s/AKfycbwwEsu66T4zurvD0rkygtZrdWnS4dlY64vT39sAq99aWFeBz8tQyZIpJPYsFpLpQUSl/exec?action=getData"
        )
      .then((response) => {
        var data_mm = response.data;
        console.log(data_mm)
        for(var item of data_mm){
            this.info_mm = item
            
        }
        console.log(this.info_mm)
       })
    }
}

</script>
<style scope>
*{
    margin: 0;
    padding: 0;
}
.header-topic{
    padding: 50px;
    padding-right: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 5%;
}
.col{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 30%;
    height: 100%;
    min-width: 300px;
    max-width: 350px;
}
.col p{
    color: rgb(255, 255, 255);
}

.item-adw1 img,.item-adw2 img,.item-adw3 img{
    width: 80px;
}
.item-adw1,.item-adw3{
    display: flex;
    background-color: rgb(43, 41, 161);
    border-radius: 7px;
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.item-adw2{
    display: flex;
    background-color: rgb(29, 189, 69);
    border-radius: 7px;
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

</style>
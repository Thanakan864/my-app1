<template>
    <div class="flexbox-adw">
        <div class="header-topic-AWD">
            <div class="col-AWD">
                <!-- Col1 -->
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>A</p>
                        <p>AWD_Z1 : {{this.info_Lysimeter.AWD_Z1}} CM</p>
                    </div>
                </div>
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>C</p>
                        <p>AWD_Z2 : {{this.info_Lysimeter.AWD_Z2}} CM</p>
                    </div>
                </div>
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>B</p>
                        <p>AWD_Z3 : {{this.info_Lysimeter.AWD_Z3}} CM</p>
                    </div>
                </div>
                <div class="item-adw1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>D</p>
                        <p>AWD_Z4 : {{this.info_Lysimeter.AWD_Z4}} CM</p>
                    </div>
                </div>
            </div>
            <div class="col-AWD">
                <!-- Col2 -->
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>B</p>
                        <p>AWD_Z5 : {{this.info_Lysimeter.AWD_Z5}} CM</p>
                    </div>
                </div>
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>D</p>
                        <p>AWD_Z6 : {{this.info_Lysimeter.AWD_Z6}} CM</p>
                    </div>
                </div>
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>A</p>
                        <p>AWD_Z7 : {{this.info_Lysimeter.AWD_Z7}} CM</p>
                    </div>
                </div>
                <div class="item-adw2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>C</p>
                        <p>AWD_Z8 : {{this.info_Lysimeter.AWD_Z8}} CM</p>
                    </div>
                </div>
            </div>
            <div class="col-AWD">
                <!-- col-AWD3 -->
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>A</p>
                        <p>AWD_Z9 : {{this.info_Lysimeter.AWD_Z9}} CM</p>
                    </div>
                </div>
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>C</p>
                        <p>AWD_Z10 : {{this.info_Lysimeter.AWD_Z10}} CM</p>
                    </div>
                </div>
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>B</p>
                        <p>AWD_Z11 : {{this.info_Lysimeter.AWD_Z11}} CM</p>
                    </div>
                </div>
                <div class="item-adw3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>D</p>
                        <p>AWD_Z12 : {{this.info_Lysimeter.AWD_Z12}} CM</p>
                    </div>
                </div>
            </div>
            <div class="col-AWD">
                <!-- col-AWD4 -->
                <div class="item-adw4">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>A</p>
                        <p>AWD_Z13 : {{this.info_Lysimeter.AWD_Z13}} CM</p>
                    </div>
                </div>
                <div class="item-adw4">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>C</p>
                        <p>AWD_Z14 : {{this.info_Lysimeter.AWD_Z14}} CM</p>
                    </div>
                </div>
                <div class="item-adw4">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>B</p>
                        <p>AWD_Z15 : {{this.info_Lysimeter.AWD_Z15}} CM</p>
                    </div>
                </div>
                <div class="item-adw4">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-adw">
                        <p>D</p>
                        <p>AWD_Z16 : {{this.info_Lysimeter.AWD_Z16}} CM</p>
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
        info_Lysimeter:"",
    };
  },
  mounted() {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyQvjhX67GAjurkBrO__i5qPuFCqZfC0_h4MLinQbmU82L7fWJE1M8GlcPfn938L08sxw/exec?action=getData"
        )
      .then((response) => {
        var data_Lysimeter = response.data;
        // console.log(data_Lysimeter)
        for(var item of data_Lysimeter){
            this.info_Lysimeter = item
            
        }
        // console.log(this.info_Lysimeter)
       })
    
    }
}

</script>
<style scope>
*{
    margin: 0;
    padding: 0;
}
.header-topic-AWD{
    
    justify-content: normal;
    width: auto;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3vh 2vw;
    padding: 2rem;
}
.col-AWD{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    width:30%;
    height: 100%;
    min-width: 250px;
    max-width: 17vw;
}
.col-AWD p{
    color: rgb(255, 255, 255);
}

.item-adw1 img,.item-adw2 img,.item-adw3 img,.item-adw4 img{
    width: 80px;
}
.item-adw1,.item-adw3,.item-adw4{
    display: flex;
    background-color: rgb(43, 41, 161);
    border-radius: 7px;
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
}
.item-adw2{
    display: flex;
    background-color: rgb(43, 41, 161);
    border-radius: 7px;
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
}

</style>
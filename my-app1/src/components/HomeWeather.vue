<template>
    <div class="wrap-all-div">
        <div class="flexbox">
            <div class="item">
                <div class="contentbox" id="ctb1">
                    <img src="../assets/propeller.png" alt="propeller" />
                    <div class="data-in-box">
                        <p>-Wind speed</p>
                        <p>{{this.info_ClassA.WindSpeed_F2}} m/s</p>
                        <p>force 0 wind</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb2">
                    <img src="../assets/wind-direction.png" alt="wind-direction" />
                    <div class="data-in-box">
                        <p>-Wind direction</p>
                        <p>{{this.info_ClassA.Temperature_F2}}°</p>
                        <p>Northeast By North</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb3">
                    <img src="../assets/pyranometer.png" alt="pyranometer" />
                    <div class="data-in-box">
                        <p>-Pyranometer</p>
                        <p>27 W/m2</p>
                        <!-- <p>force 0 wind</p> -->
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb4">
                    <img src="../assets/pyranometer.png" alt="pyranometer" />
                    <div class="data-in-box">
                        <p>-Solar Radiation</p>
                        <p>74 W/m2</p>
                        <!-- <p>force 0 wind</p> -->
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb5">
                    <img src="../assets/temperature.png" alt="temperature" />
                    <div class="data-in-box">
                        <p>-Atmospheric</p>
                        <p>temperature</p>
                        <p>{{this.info_ClassA.Temperature_F2}} °C</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb6">
                    <img src="../assets/humidity.png" alt="humidity" />
                    <div class="data-in-box">
                        <p>-Atmospheric</p>
                        <p>humidity</p>
                        <p>{{this.info_ClassA.Humidity_F2}} %RH</p>
                    </div>
                </div>
            </div>
            <!-- <div class="item">
                <div class="contentbox" id="ctb7">
                    <img src="../assets/pressure.png" alt="pressure" />
                    <div class="data-in-box">
                        <p>-Atmospheric</p>
                        <p>pressure</p>
                        <p>1003.7 hPa</p>
                    </div>
                </div>
            </div> -->
            <div class="item">
                <div class="contentbox" id="ctb8">
                    <img src="../assets/rain.png" alt="rain" />
                    <div class="data-in-box">
                        <p>Rainfall</p>
                        <p>Tipping : {{this.info_Raingauge.Tipping}}</p>
                        <p>Value : {{this.info_Raingauge.Value}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</template>
<script>
import axios from "axios";
export default {
   name: "home-Weather",
    data() {
    return{
        info_AWD:"",
        info_FLOODED:"",
        info_SATURATED:"",
        info_ClassA:"",
        info_Raingauge:"",
    };
  },
  mounted() {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbxxE23SBHICIiZaASF6iRKcHh5aunewTXz5kL0RGZJLa-sOAABHNBCwy-GlehVh8wQ/exec?action=getData"
        )
      .then((response) => {
        var data_AWD = response.data;
        // console.log(data_AWD)
        for(var item of data_AWD){
            this.info_AWD = item
            
        }
        // console.log(this.info_AWD)
       })
    
    axios
       .get(
        "https://script.google.com/macros/s/AKfycbyq992sG-XkLy8pbwkRnhVRuNBB5Dl7Chkb5fz14rKQ2FgbxreLb3cVqQp20B_6sg2l-A/exec?action=getData"
        )
      .then((response) => {
        var data_FLOODED = response.data;
        // console.log(data_FLOODED)
        for(var item of data_FLOODED){
            this.info_FLOODED = item
            
        }
        // console.log(this.info_FLOODED)
       })
    
    axios
       .get(
        "https://script.google.com/macros/s/AKfycbwncKxwj-oUBRCj-kWwBdrmPxeaYo8QBdkGdKlRIWoADVrt4SNe_KxdO5d40uCK5UfHfg/exec?action=getData"
        )
      .then((response) => {
        var data_SATURATED = response.data;
        // console.log(data_SATURATED)
        for(var item of data_SATURATED){
            this.info_SATURATED = item
            
        }
        // console.log(this.info_SATURATED)
       })

    axios
       .get(
        "https://script.google.com/macros/s/AKfycbyS_6UXRFkw3DGNoXa-kk1cFY725ncq_7FpZmC-xXlNP6rp4iLe60ZSQV2t-BsXhHce/exec?action=getData"
        )
      .then((response) => {
        var data_ClassA = response.data;
        // console.log(data_ClassA)
        for(var item of data_ClassA){
            this.info_ClassA = item
            
        }
        // console.log(this.info_ClassA)
       })  

    axios
       .get(
        "https://script.google.com/macros/s/AKfycbwYpwwX04KrwZ0e5b03lK1gN4htHHv-rkv7ukYOX6XzHcuFGo70owx0kP_Dr12l0wcY/exec?action=getData"
        )
      .then((response) => {
        var data_Raingauge = response.data;
        // console.log(data_Raingauge)
        for(var item of data_Raingauge){
            this.info_Raingauge = item
            
        }
        // console.log(this.info_Raingauge)
       })  
    }
    }
</script>
<style scope>
/*******************************************************adjust display***********************************************************/
.flexbox{
    width: auto;
    height: 35rem;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10vh 2vw;
    align-content: center;
    align-items: center;
    
}
.item{
    display: block;
    box-sizing: border-box;
    width: 20%;
    min-width: 100px;
    max-width: 30vw;
    
}
/*******************************************************end adjust display***********************************************************/

/*******************************************************content in boxs***********************************************************/
.contentbox{
    display: flex;
    justify-content: space-around;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    width: 100%;
    height: 120px;
    text-align: center;
    align-items: center;
    
}
.contentbox img{
    /* width: 75px;
    height: 75px; */
    width: 10vw;
    height: 10vh;
    /* margin-right: 10px; */
    margin-left: 10px;
}
.contentbox div{
    width: 100%;
    min-width: 100px;
    max-width: 30vw;
}
#ctb1{
    background-color: rgba(54, 235, 99, 0.911);
}
#ctb2{
    background-color: rgb(53, 119, 219);
}
#ctb3{
    background-color: rgb(42, 16, 190);
}
#ctb4{
    background-color: rgb(38, 94, 52);
}
#ctb5{
    background-color: rgb(10, 109, 112);
}
#ctb6{
    background-color: rgb(27, 26, 112);
}
#ctb7{
    background-color: rgb(101, 19, 233);
}
#ctb8{
    background-color: rgb(191, 89, 223);
}

/*******************************************************end content in boxs***********************************************************/

</style>
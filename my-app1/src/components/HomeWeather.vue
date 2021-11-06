<template>
    <div class="wrap-all-div">
        <div class="flexbox">
            <div class="item">
                <div class="contentbox" id="ctb1">
                    <img src="../assets/propeller.png" alt="propeller" />
                    <div class="data-in-box">
                        <p>-Wind speed</p>
                        <p>0 m/s</p>
                        <p>force 0 wind</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb2">
                    <img src="../assets/wind-direction.png" alt="wind-direction" />
                    <div class="data-in-box">
                        <p>-Wind direction</p>
                        <p>19°</p>
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
                        <p>25 °C</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb6">
                    <img src="../assets/humidity.png" alt="humidity" />
                    <div class="data-in-box">
                        <p>-Atmospheric</p>
                        <p>humidity</p>
                        <p>79.7 %RH</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb7">
                    <img src="../assets/pressure.png" alt="pressure" />
                    <div class="data-in-box">
                        <p>-Atmospheric</p>
                        <p>pressure</p>
                        <p>1003.7 hPa</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="contentbox" id="ctb8">
                    <img src="../assets/rain.png" alt="rain" />
                    <div class="data-in-box">
                        <p>-24-hour</p>
                        <p>Cumulative rainfall</p>
                        <p>0 mm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</template>
<script>
export default {
   name: "home-Weather",
//   data() {
    
    
//   },
//   mounted() {
    
    
//   },
}
</script>
<style scope>
/*******************************************************adjust display***********************************************************/
.flexbox{
    width: auto;
    height: 50rem;
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
    width: 75px;
    height: 75px;
    /* margin-right: 10px; */
    margin-left: 10px;
}
.contentbox div{
    width: 100%;
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
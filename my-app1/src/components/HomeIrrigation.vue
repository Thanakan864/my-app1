<template>
    <div class="flexbox-Irrigation">
        <div class="header-topic-Irri">
            <div class="col">
                <h3>Alternative Wetting and Drying</h3>
                <div class="item-Irrigation1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_A1 : {{this.info_FLOODED.AWD_A1}} CM</p>
                        <p>CTH_C9 : {{this.info_AWD.CTH_C9}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_A2 : {{this.info_FLOODED.AWD_A2}} CM</p>
                        <p>CTH_C10 : {{this.info_AWD.CTH_C10}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_A3 : {{this.info_FLOODED.AWD_A3}} CM</p>
                        <p>CTH_C11 : {{this.info_AWD.CTH_C11}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_E3 : {{this.info_FLOODED.AWD_E3}} CM</p>
                        <p>CTH_C12 : {{this.info_AWD.CTH_C12}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation1">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>CAP_F3</p>
                        <p>Water : {{this.info_ClassA.Waterlevel_F3}} CM</p>
                        <p>Wind : {{this.info_ClassA.WindSpeed_F3}} m/s</p>
                        <p>Temp : {{this.info_ClassA.Temperature_F3}} c</p>
                        <p>Humi : {{this.info_ClassA.Humidity_F3}} %</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <h3>Saturated soil Irrigation</h3>
                <div class="item-Irrigation2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>Soli_D1 : {{this.info_SATURATED.SOIL_D1}} CM</p>
                        <p>CTH_C5 : {{this.info_FLOODED.CTH_C5}} CM</p>
                        <p>AWD_B1 : {{this.info_SATURATED.AWD_B1}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>Soli_D2 : {{this.info_SATURATED.SOIL_D2}} CM</p>
                        <p>CTH_C6 : {{this.info_FLOODED.CTH_C6}} CM</p>
                        <p>AWD_B2 : {{this.info_SATURATED.AWD_B2}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>Soli_D3 : {{this.info_SATURATED.SOIL_D3}} CM</p>
                        <p>CTH_C7 : {{this.info_FLOODED.CTH_C7}} CM</p>
                        <p>AWD_B3 : {{this.info_SATURATED.AWD_B3}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>Soli_D4 : {{this.info_SATURATED.SOIL_D4}} CM</p>
                        <p>CTH_C8 : {{this.info_FLOODED.CTH_C8}} CM</p>
                        <p>AWD_E2 : {{this.info_SATURATED.AWD_E2}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation2">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>CAP_F2</p>
                        <p>Water : {{this.info_ClassA.Waterlevel_F2}} CM</p>
                        <p>Wind : {{this.info_ClassA.WindSpeed_F2}} m/s</p>
                        <p>Temp : {{this.info_ClassA.Temperature_F2}} c</p>
                        <p>Humi : {{this.info_ClassA.Humidity_F2}} %</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <h3>Continuous Flooding</h3>
                <div class="item-Irrigation3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_A1 : {{this.info_FLOODED.AWD_A1}} CM</p>
                        <p>CTH_C1 : {{this.info_SATURATED.CTH_C1}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_A2 : {{this.info_FLOODED.AWD_A2}} CM</p>
                        <p>CTH_C2 : {{this.info_SATURATED.CTH_C2}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_A3 : {{this.info_FLOODED.AWD_A3}} CM</p>
                        <p>CTH_C3 : {{this.info_SATURATED.CTH_C3}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>AWD_E1 : {{this.info_FLOODED.AWD_E1}} CM</p>
                        <p>CTH_C4 : {{this.info_SATURATED.CTH_C4}} CM</p>
                    </div>
                </div>
                <div class="item-Irrigation3">
                    <img src="../assets/humidity.png" alt="humidity">
                    <div class="contentbox-Irrigation">
                        <p>CAP_F1</p>
                        <p>Water : {{this.info_ClassA.Waterlevel_F1}} CM</p>
                        <p>Wind : {{this.info_ClassA.WindSpeed_F1}} m/s</p>
                        <p>Temp : {{this.info_ClassA.Temperature_F1}} c</p>
                        <p>Humi : {{this.info_ClassA.Humidity_F1}} %</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    
</template>
<script>
import axios from "axios";
export default {
   name: "home-Irrigation",
  data() {
    return{
        info_AWD:"",
        info_FLOODED:"",
        info_SATURATED:"",
        info_ClassA:"",
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
    }
}

</script>
<style scope>
*{
    margin: 0;
    padding: 0;
}
.header-topic-Irri{

    justify-content: normal;
    width: auto;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3vh 2vw;
    padding: 2rem;
    
}
.col{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    width:30%;
    height: 100%;
    min-width: 250px;
    max-width: 22vw;
}
.col p{
    color: rgb(255, 255, 255);
}

.item-Irrigation1 img,.item-Irrigation2 img,.item-Irrigation3 img{
    width: 80px;
}
.item-Irrigation1,.item-Irrigation3{
    display: flex;
    background-color: rgb(43, 41, 161);
    border-radius: 7px;
    width: 100%;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.item-Irrigation2{
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
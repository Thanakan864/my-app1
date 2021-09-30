<template>
    <div class="flexbox">
        <div class="item">
            <div class="contentbox" id="ctb1">Content 1</div>
        </div>
        <div class="item">
            <div class="contentbox" id="ctb2">Content 2</div>
        </div>
        <div class="item">
            <div class="contentbox" id="ctb3">Content 3</div>
        </div>
        <div class="item">
            <div class="contentbox" id="ctb4">Content 4</div>
        </div>
        <div class="item">
            <div class="contentbox" id="ctb5">Content 5</div>
        </div>
        <div class="item">
            <div class="contentbox" id="ctb6">Content 6</div>
        </div>
        <div class="item">
            <div class="contentbox" id="ctb7">Content 7</div>
        </div>
        <div class="item">
            <div class="contentbox" id="ctb8">Content 8</div>
        </div>
    </div>
    
</template>
<script>
export default {
   name: "home-vetor-station",
//   data() {
    
    
//   },
//   mounted() {
    
    
//   },
}
</script>
<style scope>
.flexbox{
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.item{
    display: block;
    box-sizing: border-box;
    width: 20%;
    margin: 20px;
    margin-top: 5%;
    
}
.contentbox{
    background-color: rgb(67, 117, 255);
    border: 2px solid rgb(0, 0, 0);
    padding: 50px;
    text-align: center;
}
#ctb1 , #ctb8{
    background-color: rgb(94, 238, 130);
}
#ctb2 , #ctb7{
    background-color: rgb(237, 147, 255);
}
#ctb3 , #ctb6{
    background-color: rgb(203, 212, 66);
}

</style>
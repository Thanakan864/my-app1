<template>
    <div class="flexbox-adw">
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb1-adw">Content 1</div>
        </div>
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb2-adw">Content 2</div>
        </div>
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb3-adw">Content 3</div>
        </div>
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb4-adw">Content 4</div>
        </div>
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb5-adw">Content 5</div>
        </div>
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb6-adw">Content 6</div>
        </div>
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb7-adw">Content 7</div>
        </div>
        <div class="item-adw">
            <div class="contentbox-adw" id="ctb8-adw">Content 8</div>
        </div>
    </div>
    
</template>
<script>
export default {
   name: "home-adw",
//   data() {
    
    
//   },
//   mounted() {
    
    
//   },
}
</script>
<style scope>
.flexbox-adw{
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.item-adw{
    display: block;
    box-sizing: border-box;
    width: 20%;
    margin: 20px;
    margin-top: 5%;
    
}
.contentbox-adw{
    background-color: rgb(67, 117, 255);
    border: 2px solid rgb(0, 0, 0);
    padding: 50px;
    text-align: center;
}
#ctb5-adw , #ctb7-adw{
    background-color: rgb(94, 238, 130);
}
#ctb2-adw , #ctb8-adw{
    background-color: rgb(237, 147, 255);
}
#ctb4-adw , #ctb3-adw{
    background-color: rgb(203, 212, 66);
}

</style>
<template >
    <div id="footer">
        <div class="footer-content">
       <img :src=imgIcon alt="icon"/><h1>Inuit</h1>  
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgIcon:'https://i.postimg.cc/x1LgMPJh/icon-1-removebg-preview.png'
        }
    }
}
</script>
<style scoped>
#footer{
    display: flex;
    justify-content: center; 
}
.footer-content{
    display: flex;
    padding: 5px;
}
img{
    width:px;
    height:80px;
}
h1{
    margin-top:6px;
}
</style>
    

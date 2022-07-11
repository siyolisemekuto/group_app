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
            imgIcon:'https://i.postimg.cc/nrxbv1nL/icon-1.png'
        }
    }
}
</script>
<style scoped>
#footer{
    display: flex;
    justify-content: center; 
    background-color:#4F4538 ;
    color:#F5F5DC;
}
.footer-content{
    display: flex;
    padding: 5px;
    gap: 5px;
    
}
img{
    height: 30px;
}

</style>
    

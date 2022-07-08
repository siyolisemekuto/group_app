<template>
<section id="user-page">
    
    <div class="user" >
        <h1>Profile</h1> 
        <div id="user-img"><img :src=imgUrl alt="user"></div>
        <h1>{{ UserName }}</h1>
        <div class="bio">
            <H2>Bio</H2>
            <div class="text">
            <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, saepe totam. Fugit consequatur necessitatibus quis cumque, nostrum et repellat aliquid nobis ducimus ullam repudiandae possimus? Adipisci porro a quas dolorem!</P>
        </div>
        </div>
    </div>
    <div class="posts"></div>
    </section>
</template>
<script>
export default {
    data(){
     return{
        imgUrl:"https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
        UserName:"Lihle"
     }
    }
}
</script>
<style scoped>
#user-page{
background: linear-gradient(0.5turn, #dbdb71, #D8A23A);
}
.user{
    padding:10%;
}
img{
  width: 200px;
    border: 2px solid black;
  border-radius:50%; 
  padding-top: 5px; 
}
.text{
    width:500px;
    margin: auto;
    height: fit-content;
    border: 1px solid black;
}
</style>
<template>
<section id="user-page">
    
    <div class="user" >
         
        <div class="user_details">
            <h1>Profile</h1>
        <div id="user-img"><img :src=imgUrl alt="user" class="img"></div>
        <h1>{{ UserName }}</h1>
        <div class="bio">
            <H2>Bio</H2>
            <div class="text">
            <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, saepe totam. Fugit consequatur necessitatibus quis cumque, nostrum et repellat aliquid nobis ducimus ullam repudiandae possimus? Adipisci porro a quas dolorem!</P>
        </div>
        </div>
        </div>
    </div>
    <div class="posts">
     <div class="post">
        <div class="use">
            <img :src="post_sender_img" alt="">
      <h3>{{ post_sender }}</h3>
      </div>
      <p>{{ post_text }}</p>
     </div>
       <div class="post">
        <div class="use">
            <img :src="post_sender_img" alt="">
      <h3>{{ post_sender }}</h3>
      </div>
      <p>{{ post_text }}</p>
     </div>
    </div>
    </section>
</template>
<script>
export default {
    data(){
     return{
        imgUrl:"https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
        UserName:"Lihle",
        post_text:"Lorem ipsum dolor sit amet consectetur odit distinctio officia laboriosam aliquam at, expedita dolorem earum autem et molestiae necessitatibus architecto aliquid dolore tenetur, voluptatem hic.",
        post_sender:"Username",
        post_sender_img:"https://i.postimg.cc/nrxbv1nL/icon-1.png"
     }
    }
}
</script>
<style scoped>
h1,h2,h3{
    color: #F5F5DC;
}
#user-page{
    height: fit-content;
background: linear-gradient(0.5turn, #dbdb71, #D8A23A);
}
.user{
    padding:10%;
    display: flex;
    justify-content: center;
    
}
.img{
  width: 200px;
    border: 2px solid black;
  border-radius:50%; 
  padding-top: 5px; 
}
.text{
    width:500px;
    margin: auto;
    height: fit-content;
   
}
.user_details{
    width: fit-content;
    border: 1px solid black;
    border-radius: 10px;
}
.posts{
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

}
.post{
    width: 250px;
    height: 200px;
    border: 2px double #8F7245 ;
    border-radius:10px ;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 5px;
}
img{
  width: 30px;
  height: 50;
  box-shadow:2px 1px ;
}

.use{
    display: flex;
    margin: auto;
    gap:5px;
}
</style>
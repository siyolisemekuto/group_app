<template >
    <section id="notice">
        <div class="container">
    <h1>Notifications</h1>
    <p>Here are Your Notification</p>
    <div class="notices">

        <div class="notice">
            <img :src="notice_imageUrl" alt="">
          <h3>{{notice_sender}}</h3>
            <p>{{notice_brief}}</p>
            </div>
    </div>
    </div>
    </section>
</template>
<script>
export default {
    data(){
     return{
        notice_id:1,
        notice_sender:"Inuit origization",
        notice_imageUrl:"https://i.postimg.cc/nrxbv1nL/icon-1.png",
        notice_brief:"Daliy Motivation",
        notice:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam quo reiciendis architecto molestias dolorum ea placeat voluptatem, nemo voluptatibus cumque aut facere inventore optio eligendi nulla cum sapiente reprehenderit."
     }
    }
}
</script>
<style scoped>
section{
    height: 100vh;
   padding-top: 100px; 
    padding-bottom: 100px; 
   background: url('https://www.arcticfocus.org/media/images/eNUK1-copy-1080x720.2e16d0ba.fill-1370x700-c100.jpg');
   background-repeat: no-repeat;
   background-size: cover;
}
.notices{
    margin-top:50px ;
    display: flex;
    justify-content: center;
}
.notice{
border:1px solid black;
border-radius:15px;
padding: 10px;
width: 80vw;
display: flex;
gap: 10px;
background: linear-gradient(0.5turn, #dbdb71, #D8A23A); 
}
img{
  width: 30px;
  height: 50;
  box-shadow:2px 1px ;
}
        

</style>
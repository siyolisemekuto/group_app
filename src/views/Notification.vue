<template >
    <section id="notice">
        <div class="container">
    <h1>Notifications</h1>
    <p>Here are Your Notification</p>
    <div v-if="Quotes" class="notices">
          <div  class="notice">
            <img :src="notice_imageUrl" alt="">
          <h3>{{notice_sender}}</h3>
            <p>{{notice_brief}}</p>
            </div>
            <div v-for="Quote in Quotes" :key="Quote.id" class="notice">
            <img :src="notice_imageUrl" alt="">
          <h3>{{notice_sender}}</h3>
            <p>{{Quote.string}}</p>
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
    },
    mounted(){
    this.$store.dispatch("getQuotes")
},
computed:{
    Quotes(){
        return this.$store.state.Quotes
      }
},
methods: {
  
//   picker() {
//   let quoteChosen = Math.floor(Math.random() * this.Quotes.length);
//   this.quoteToday = this.Quotes[quoteChosen];
// }
}
}
</script>
<style scoped>
section{
    height: fit-content;
   padding-top: 100px; 
    padding-bottom: 100px; 
        background:url('https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-firstarts/usr/images/exhibitions/group_images_override/39/ds2281-1-2.jpg');
   background-repeat: no-repeat;
   background-size: cover;
}
.notices{
    margin-top:50px ;
    display: flex;
    flex-wrap: wrap;
gap:10px;

}
.notice{
border:1px solid black;
border-radius:15px;
padding: 10px;
width: 80vw;
display: flex;
gap: 10px;
background: linear-gradient(0.5turn, #dbdb71, #D8A23A); 
margin-inline: auto;
}
img{
  width:  5vw;
  height: 100%;
  box-shadow:2px 1px ;
}
        
</style>
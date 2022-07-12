<template>
    <section>
        <h1>Feed</h1>
      <div id="timeline">
       <div class="feed">
        <div class="post">
            <img :src="user.user_img" alt="">
         <p class="head"><strong>{{user.username}}</strong></p>
         <h3>{{user.post}}</h3>
        </div>
       </div>
      </div> 
    </section>
</template>
<script>
export default {
    data(){
        return{
           user:{
            username:"Siyolise",
            post:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui facere ullam ea nihil laudantium odio, repellat consequatur labore? Deleniti beatae recusandae aperiam nisi quidem voluptate totam tenetur! Voluptate, laboriosam.",
            userId:1,
            user_img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F7c%2FUser_font_awesome.svg%2F2048px-User_font_awesome.svg.png&imgrefurl=https%3A%2F%2Fwikimania2014.wikimedia.org%2Fwiki%2FFile%3AUser_font_awesome.svg&tbnid=bioz38Mge73kaM&vet=12ahUKEwi-0d-S8_D4AhXG3oUKHWsZChgQMygGegUIARDlAQ..i&docid=OlBVhBsssqjHUM&w=2048&h=2048&q=user&ved=2ahUKEwi-0d-S8_D4AhXG3oUKHWsZChgQMygGegUIARDlAQ"           
           }
        }
    },
  
}
</script>
<style>
section{
    padding-top: 50px;
    background-color:#F5F5DC;
    height: 100vh;
    }
p.head{
        text-align: start;

}
.post{
    width: 80vw;
    margin: auto;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px;
    background-color: #D8A23A;
    color: #4F4538;
}
</style>
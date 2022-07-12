<template>
    <div id="single-view">
        <h1>{{post.username}}</h1>
        <h2>{{user.post}}</h2>
        <body></body>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            post:{}
        }
    },
     mounted(){
      fetch('http://localhost:3000/posts/' + this.id).then(function(data){
        console.log(data)
        this.post = data.body;
      })
    }
}
</script>
<style>
    
</style>
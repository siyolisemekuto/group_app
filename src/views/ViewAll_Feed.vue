<template>
    <div>
      <div id="timeline">
        <feed></feed>
      </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            users:[]
        }
    },
     mounted(){
      fetch('http://localhost:3000/users')
      .then((res)=> res.json())
      .then((data)=>(this.users=data))
     }
}
</script>
<style>
    
</style>
<template >
    <div>
         <nav>
    <router-link to="/"><img :src=imgIcon /></router-link> 
    <div>
           <form  @submit.prevent="filteredPosts"> <input type="search" name="search" id="search" placeholder="Search" v-model="search">   <i @click="filteredPosts" class="fa-solid fa-magnifying-glass"></i></form>
            {{search}}
    </div>
    <div class='Icons'>
    <router-link to="/user"><i class="fa-solid fa-user"></i></router-link> |
        <router-link to="/theme"><i class="fa-solid fa-t"></i></router-link>    |
    <router-link to="/notification" @click="picker"><i class="fa-solid fa-bell"></i></router-link> |
    <router-link to="/viewall_feed">Feed</router-link> |

    </div>
  </nav>
    </div>
</template>
<script>
export default {
     data(){
        return {
            imgIcon:'https://i.postimg.cc/nrxbv1nL/icon-1.png',
            search:"",
           
        }
    }
    ,
computed:{
    posts(){
        return this.$store.state.posts
    }
  },
  methods: {
   filteredPosts() {
    const search = this.search
    return this.$store.dispatch("getFilteredPosts",search)
 } 
  },
}
</script>
<style scoped>
nav a{
  border:2px solid black;
  border-radius:25%;
  padding:3px;
}
i{
  font-size:larger;
  
}
img{
  width: 30px;
  height: 50;
  box-shadow:2px 1px ;
}
.Icons{
  
  margin-top:10px ;
}
nav {
  position: fixed;
  padding: 10px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 1px;
  background-color: #8F7245;
}

nav a {
  font-weight: bold;
  color: #D8A23A;
}

nav a.router-link-exact-active {
  color: #F5F5DC;
}
</style>
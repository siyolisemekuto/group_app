<template >
    <div>
         <nav>
    <router-link to="/"><img :src=imgIcon /></router-link> 
    <div class='Icons'>
    <router-link to="/user"><i class="fa-solid fa-user"></i></router-link> |
        <router-link to="/theme"><i class="fa-solid fa-t"></i></router-link>    |
    <router-link to="/user"><i class="fa-solid fa-bell"></i></router-link> |

    </div>
  </nav>
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
<style >
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
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
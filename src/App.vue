<template>
 <Navbar/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
      <router-link to="/profile">profile</router-link>|
      <router-link to="/register">register</router-link>
  </nav>
<router-view></router-view>
<Footer/>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default{
  components:{
    Navbar,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}


</style>

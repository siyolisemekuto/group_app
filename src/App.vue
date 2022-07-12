<template>
<Navbar/>
  <HomeView></HomeView>

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
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Ubuntu:wght@300&display=swap');

#app {
  text-align: center;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

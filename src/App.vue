<template>
 <Navbar/>
<router-view></router-view>
<Footer></Footer>
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
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}


</style>

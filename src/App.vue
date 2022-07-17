<template>
<Navbar/>


  <div v-for="post in posts" :key="post.postID">
    <h1>{{ post.postStatus }}</h1>
  </div>
  <router-view />
  <Footer/>
</template>
<script>
import store from "./store";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
    data() {
        return {
            posts: store.state.posts,
        };
    },
    computed: {
        //place this in navbar
        user() {
            return this.$store.state.user;
        },
    },
    mounted() {
        store.dispatch("getPostData");
    },
    created() {
        // const getPosts = (this.posts = store.getters.getPost);
    },
    components: { Navbar,Footer }
};
// let user =JSON.parse(localStorage.user);
// console.log(user)
</script>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
     opacity: 1;
}

</style>

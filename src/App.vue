<template>
  <nav>
    <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link>|
    <div v-if="user">
      <router-link to="/profile">profile</router-link>
    </div>
  </nav>
  <div v-if="user">Welcome {{ user.username }}</div>
  <div v-for="post in posts" :key="post.postID">
    <h1>{{ post.postStatus }}</h1>
  </div>
  <router-view />
</template>
<script>
import store from "./store";
export default {
  data() {
    return {
      posts: store.state.posts,
    };
  },
  computed: {
    //place this in navbar
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    // user() {
    //   return store.state.user;
    // },
    //for navbar above
  },
  mounted() {
    store.dispatch("getPostData");
  },
  created() {
    // const getPosts = (this.posts = store.getters.getPost);
  },
};
// let user =JSON.parse(localStorage.user);
// console.log(user)
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

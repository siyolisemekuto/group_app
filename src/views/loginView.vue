<template>
  <div class="hello">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email " />
      <input type="text" v-model="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
    <div v-if="user">Welcome {{ data.username}}</div>
    <div v-if="incorrect">You have mistaken your details my child</div>
  </div>
</template>
<script>
import store from "../store";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    users() {
      return store.state.posts;
    },
  },
  data() {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  methods: {
    login() {
      store.dispatch("login", {
        email: this.email,
        password: this.password,
        
      });
      // console.log(store.state.posts);
      // this.$store.posts.details.email == email &  posts.details.password == password
      //   ? (user = user)
      //   : incorrect;

      // alert("found you");
      // alert("No user found, please register");
    },
  },
};
</script>

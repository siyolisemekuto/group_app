<template>
  <div class="hello">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email " />
      <input type="text" v-model="password" placeholder="password" />
      <button type="submit">submit</button>                             
    </form>
    <div v-if="user">Welcome {{ data.username }}</div>
  </div>
</template>
<script>
import store from "../store";
export default {
  
  mounted(){
let user=this.$store.dispatch.login()
  },
  computed: {


  },
  data() {
    return {
      email: "",
      password: "",
      user: null,
      username:''
    };
  },
  methods: {
    login() {
      store.dispatch("login", {
        email: this.email,
        password: this.password,
        
      });
    },
  },
};
</script>

<template>
  <div class="hello">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email " />
      <input type="text" v-model="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
    <div v-if="user">Welcome {{ user.details.username }}</div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    users() {
      return this.$store.state.data;
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
    //  users?details.email=${this.email}&details.password=${this.password}
    for()
          alert("No user found, please register");
        });
    },
  },
};
</script>

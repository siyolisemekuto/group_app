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
  data() {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  methods: {
    login() {
      fetch(
        `http://localhost:3000/users?details.email=${this.email}&details.password=${this.password}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length)
            return (
              (this.user = data[0]),
              localStorage.setItem("user", JSON.stringify(this.user))
            );

          alert("No user found, please register");
        });
    },
  },
};
</script>

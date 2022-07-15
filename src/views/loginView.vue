
<template>
  <div v-if="!user" id="landing" class="row">
    <div id="about" class="col">
      <h1>Inuit</h1>
      <p class="about-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
        similique iusto perferendis libero architecto atque accusamus
        repellendus esse, ut, sapiente reiciendis temporibus voluptas aliquam
        laboriosam tempora voluptatum voluptatem quibusdam, ex eligendi
        voluptate totam nihil consequatur illum. Fugiat, obcaecati beatae,
        repellat recusandae magnam aspernatur facilis praesentium suscipit
        laudantium fugit cupiditate libero!
      </p>
      <div class="container">
        <h1 v-if="!user">Welcome</h1> 
        <h1 v-if="user">Welcome {{user.username}}</h1>
        
        <form @submit.prevent="login">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              class="inputs"
              placeholder="Email"
              required
              v-model="email"
            />
            <input
              type="password"
              name="password"
              id="password"
              class="inputs"
              placeholder="Password"
              required
              v-model="password"
            />
          </div>
          <button type="submit" class="btn">Submit</button>
        
        </form>
      </div>
    </div>
    <div class="col">
      <!-- <img alt="logo" src="../assets/iconrebg.png" /> -->
    </div>
  </div>
<div v-if="user"></div>

</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Ubuntu:wght@300&display=swap");
#landing {
  display: flex;
  width: fit-content;
  background: linear-gradient(0.5turn, #f5f5dc, #d8a23a);
  height: fit-content;
}
.row {
  display: flex;
  justify-content: center;
}
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 5%;
}
.about-text {
  width: fit-content;
  text-align: center;
}
img {
  width: 37rem;
  height: 50rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: none;
  object-fit: cover;
}
.container {
  width: fit-content;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.inputs {
  width: 450px;
  padding: 10px;
  margin: 20px;
  border: none;
  border-bottom: 1px solid;
  background: inherit;
}
:-ms-input-placeholder::after {
  display: none;
}
.btn {
  margin-top: 20px;
  padding: 5px;
  font-size: large;
  border-radius: 9px;
  background: none;
}
form {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* @media only screen and (max-width: 600px){ */
/* #about{
    display:flex;
    flex:wrap;
  }
} */
</style>

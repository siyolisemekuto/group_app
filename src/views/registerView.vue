<template >
    <div>
      <div id="registerForm">
 <form @submit.prevent="registerUser">
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
              id="password"
              class="inputs"
              placeholder="Password"
              required
              v-model="password"
            />
          <button type="submit">register</button>
        
        </form>
        
          </div>
    </div>
</template>
<script>
import store from "../store";

export default {

    methods:{
        registerUser() {
      store.dispatch("registerUser", {
        email: this.email,
        password: this.password,
      });
    },
    }
}
</script>
 <style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Ubuntu:wght@300&display=swap");

#registerForm{
  /* margin-top:55px ; */
  height: 95vh;
}
form{
  width: 100%;
  height:100%;
  display: flex ;
  align-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
      background: linear-gradient(0.5turn, #f5f5dc, #d8a23a);
      

}
form > *{
  margin: 0.3%;
font-size: large;

}
input{
  
  height: 2em;
  margin-right: 1%;
}
</style>
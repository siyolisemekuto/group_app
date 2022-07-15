<template >
    <div>
 <form @submit.prevent="registerUser">
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
          <button  type="submit" class="btn">register</button>
        
        </form>
        
    </div>
</template>
<script>
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
<style>

</style>
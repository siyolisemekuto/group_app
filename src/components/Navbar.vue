<template>
  <div>
    <nav>
      <div v-if="!user">
        <router-link to="/"><img :src="imgIcon" /></router-link>
      </div>
      <div v-else>
        <router-link to="/viewall_feed"><img :src="imgIcon" /></router-link>
      </div>
      <div v-if="user">
        <form @submit.prevent="filteredPosts">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            v-model="search"
          />
          <i @click="filteredPosts" class="fa-solid fa-magnifying-glass"></i>
        </form>
        {{ search }}
      </div>
      <div v-if="user" class="Icons">
        <router-link to="/profile"
          ><i class="fa-solid fa-user"></i
        ></router-link>
        |
        <router-link
          to="/notification"
          @click="picker"
          toggle="picker"
          class="red"
          ><i class="fa-solid fa-bell"></i
        ></router-link>
        |
      </div>
    </nav>
  </div>
</template>
<script>
import store from "../store";

export default {
  data() {
    return {
      imgIcon: "https://i.postimg.cc/nrxbv1nL/icon-1.png",
      search:""
    };
  },
  picker() {
    Notification.length > 0;
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    posts(){
        return this.$store.state.posts
    }
  },

  methods: {
   filteredPosts() {
    const search = this.search
    return this.$store.dispatch("getFilteredPosts",search)
 } 
  },
};
</script>
<style scoped>
nav a {
  padding: 5px;
  line-height: 15px;
}
i {
  font-size: 20px;
  margin-bottom: 5px;
}
img {
  margin-top: 5px;
  width: 30px;
}
.Icons {
  margin-top: 10px;
  margin-right: 20px;
}
nav {
  position: fixed;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 1px;
  background-color: #8f7245;
}
nav a {
  font-weight: bold;
  color: #d8a23a;
}
nav a.router-link-exact-active {
  color: #f5f5dc;
}
</style>

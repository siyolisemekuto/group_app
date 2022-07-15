<template>
  <div class="hello">
    {{User.name}}
    <!-- {{ Posts }} -->
    <div v-for="post in Posts" :key="post.id">
      <h1>{{ post.username }}</h1>
      <p>{{ post.message }}</p>
      <img :src="post.image" alt="" />
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "HelloWorld",
  computed: {
    User() {
      return store.state.user;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

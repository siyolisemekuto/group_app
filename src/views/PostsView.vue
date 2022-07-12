<template>
  <h1>Posts</h1>
  <!-- {{ posts }} -->
  <div v-if="posts.length">
    <div v-for="post in posts" :key="post.id" class="post">
    <router-link :to="{ name: 'postDetails', params: { postId: post.id } }">
      <h3>{{ post.username }}</h3>
      <img :src="post.image" alt="{{ post.username}}"/>
      <p>{{post.message}}</p>
    </router-link>
  </div>
  </div>
  <div v-else>
    <h3>Loading Feed...</h3>
  </div>
  
</template>
<script>
import post from "@/components/post.vue";
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
.post h3 {
  background: white;
  padding: 20px;
  border-radius: 25px;
  margin: 10px auto;
  max-width: 500px;
  cursor: pointer;
  color: black;
}
.post h3:hover {
  background: gray;
}
.post a {
  text-decoration: none;
}
.post{
  min-width: 200px;
  max-width: 400px;
  border-radius: 50px;
  box-shadow: 5px 5px 5px 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-inline: auto;

}
</style>

<template>
  <div v-if="post">
    <h1>{{ post.username }}</h1>
    <img :src="post.image" alt="{{ post.username}}" />
    <p>{{ post.message }}</p>
  </div>
  <div v-else>
    <p>Loading Feed...</p>
  </div>
</template>
<script>
export default {
  props: ["id"],

  computed: {
    post(){
        return store.state.post;
    }
  },
  mounted() {
    fetch("http://localhost:3000/posts/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped></style>

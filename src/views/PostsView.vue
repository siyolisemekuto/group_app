<template>
  <h1>Posts</h1>
  <addNewPost/>
  <div v-if="posts" class="posts">
    <post v-for="post in posts" :key="post.id" :post="post"/>
    
  </div>

  <div v-else>Loading Feed...</div>
</template>
<script>
import store from "@/store";
import post from "@/components/post.vue";
import AddNewPost from "@/components/addNewPost.vue";

export default {
  components: { post, AddNewPost },

  mounted() {
    this.$store.dispatch("getPosts");
  },

  methods: {
    addNewPost() {
      store.dispatch("addNewPost", this.postContent);
    },
  },
  computed: {
    posts() {
      return store.state.posts;
    },
  },
};
</script>
<style scoped>
/* img{
  max-width: 300px;
  min-width: ;
} */
.posts{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  gap:20px
}
</style>

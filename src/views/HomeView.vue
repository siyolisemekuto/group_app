<template>
  <div v-for="post in posts" :key="post.postID"></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  computed: {
    // $state.users
  },
};
</script>

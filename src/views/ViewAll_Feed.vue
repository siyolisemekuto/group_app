<template>
<section>

    <h1>Feed</h1>
    <AddNewPost/>
      <div id="timeline">
        <p @click="sortPost">sort Latest to oldest</p>
          <div v-if="posts" class="feed">
              <div v-for="post of posts" :key="post.id"  class="post">
        <p class="head">{{ post.username }}</p>
        <div class="postdetails">
        <img :src="post.image" alt="image"/>
        <span>{{ post.message }}</span>
       <div @click="handleDelete(post.id)" ><i class="fa-solid fa-trash" style="margin-top: 15px"></i></div>
       </div>
        </div>
        </div>
       </div>
   
 </section>
</template>
<script>
import AddNewPost from '@/components/addNewPost.vue';
export default {
    mounted() {
        this.$store.dispatch("getPosts");
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        },
        // components:{
        // }
    },
    methods: {
        handleDelete(id) {
            return this.$store.dispatch("deletePost", id);
        },
        sortPost() {
            return this.$store.commit("sortPosts");
        }
    },
    components: { AddNewPost }
}
  
</script>
<style scoped>
section{
    padding-top: 50px;
    background-color:#F5F5DC;
    height: fit-content;
    background: url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fartlogic-res.cloudinary.com%2Fw_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto%2Fws-firstarts%2Fusr%2Fimages%2Fexhibitions%2Fgroup_images_override%2F39%2Fds2281-1-2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    }
    .feed{
        display: flex;
        flex-wrap: wrap;
    }
p.head{
        text-align: start;
        z-index: -1;
        font-size: 2rem;
}
.post{
    margin: 5px;
    border-radius: 15px;
    padding: 5px;
    background-color: #D8A23A;
    color: #4F4538;
    max-width: 600px;
    min-width: 200px;
    flex-grow: 1;
  
}
.postdetails{
  display: flex;
    flex-direction: column;
}
img{
    width:20vw;
    height: fit-content;
    margin-inline: auto;
}

</style> 
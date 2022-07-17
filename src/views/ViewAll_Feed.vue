<template>
  <section>
    <h1>Feed</h1>
    <AddNewPost />
    <div id="timeline">
      <p @click="sortPost">sort Latest to oldest</p>

      <div v-if="posts" class="feed">

      <button type="toggle" @click="scrollFeed()">scroll</button>
      <div v-if="lazyScroll">
        <marquee scrollamount="30" direction="up">
            
            <div v-for="post of posts" :key="post.id" class="post">
          <p class="head">{{ post.username }}</p>
          <div class="postdetails">
              <img :src="post.image" alt="image" />
            <span>{{ post.message }}</span>
            <div @click="handleDelete(post.id)">
              <i class="fa-solid fa-trash" style="margin-top: 15px"></i>
            </div>
          </div>
        </div>
        </marquee>
     </div>
     <div v-if="!lazyScroll" class="manualFeed">
    <div v-for="post of posts" :key="post.id" class="post">
          <p class="head">{{ post.username }}</p>
          <div class="postdetails">
              <img :src="post.image" alt="image" />
            <span>{{ post.message }}</span>
            <div @click="handleDelete(post.id)">
              <i class="fa-solid fa-trash" style="margin-top: 15px"></i>
            </div>
          </div>
        </div> 
     </div>
      </div>
    </div>
  </section>
</template>
<script>
import AddNewPost from "@/components/addNewPost.vue";
import store from "../store";
export default {
  mounted() {
    this.$store.dispatch("getPosts");
  },
  
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    lazyScroll() {
      console.log(this.$store.state.lazyScroll);
      return this.$store.state.lazyScroll;
    },
  
  },
  methods: {
    handleDelete(id) {
      return this.$store.dispatch("deletePost", id);
    },
    sortPost() {
        return this.$store.commit("sortPosts");
    },
        scrollFeed(){
            this.$store.state.lazyScroll=!this.$store.state.lazyScroll
            let lazyScroll= this.$store.state.lazyScroll
                console.log(lazyScroll ,Math.random()*5)
        }
  },
  components: { AddNewPost },
};
</script>
<style scoped>
section {
  padding-top: 50px;
  background-color: #f5f5dc;
  height: fit-content;
  background: url("https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fartlogic-res.cloudinary.com%2Fw_1200%2Cc_limit%2Cf_auto%2Cfl_lossy%2Cq_auto%2Fws-firstarts%2Fusr%2Fimages%2Fexhibitions%2Fgroup_images_override%2F39%2Fds2281-1-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
marquee {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
  justify-content: center;
}
.manualFeed{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}

p.head {
  text-align: start;
  z-index: -1;
  font-size: 2rem;
}
.post {
  margin: 5%;
/* display: flex; */
  border-radius: 15px;
  padding:5%;
  background-color: #d8a23a;
  color: #4f4538;
  width: fit-content;
  /* flex-grow: 1; */
}
.postdetails {
    display: flex;
  flex-direction: column;
}
img {
    width: 20vw;
    border-radius: 15px;
  height: fit-content;
  margin-inline: auto;
}
.manualFeed >*{
padding: 3%;
margin :1%;
}
</style>

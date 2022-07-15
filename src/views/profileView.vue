<template>
  <section id="user-page">
    <!-- user icon -->
    <!-- has class for notications
         check if messages[].length -->
    <!-- edit user icon button (small) -->
    <!-- user name -->
    <!-- user email -->
    <!-- user password -->
    <!-- user posts -->
    <!-- user friends list -->
    <div class="user">
      <div class="user_details container">
        <h1>Profile of {{ user.username }}</h1>
        <div id="user-img">
          <img :src="user.usericon" alt="user" class="img" />
        </div>
        <H1
          ><input
            @change="updateProfile()"
            type="text"
            class="i"
            v-model="user.username"
        /></H1>
        <H3
          ><input
            @change="updateProfile()"
            type="email"
            class="i"
            v-model="user.email"
        /></H3>
        <H5
          ><input
            @change="updateProfile()"
            type="password"
            class="i"
            v-model="user.password"
        /></H5>
        <!-- <H2>Bio</H2>  -->
        <H5
          ><input
            @change="updateProfile()"
            type="text"
            class="i"
            v-model="user.heading"
        /></H5>
        <H5
          ><input
            @change="updateProfile()"
            type="text"
            class="i"
            v-model="user.blurb"
        /></H5>
        <H5
          ><input
            @change="updateProfile()"
            type="text"
            class="i"
           v-model="user.usericon"
        /></H5>

        <div class="bio"></div>
      </div>
    </div>
    <div class="posts">
      <div class="post">
        <div class="use">
          <img :src="post_sender_img" alt="" />
          <h3>{{ post_sender }}</h3>
        </div>
        <p>{{ post_text }}</p>
      </div>
      <div class="post">
        <div class="use">
          <img :src="post_sender_img" alt="" />
          <h3>{{ post_sender }}</h3>
        </div>
        <p>{{ post_text }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    updateProfile() {
      // get values from fields
    
      console.log(this.$store.state.user);
      // rewrite values
      this.$store.dispatch(setUser)
    },
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },

};
</script>
<style scoped>
#user-page {
  background-image: url("https://cdn.shopify.com/s/files/1/1294/9703/products/proud-new-mother-inuit-art-card.gif?v=1625188889");
}
input {
  background: none;
  border: none;
  text-align: center;
  /* width: max-content; */
  overflow-wrap: normal;
  overflow-y: scroll;
}
.i::after {
  content: "🖉";
}

h1,
h2,
h3 {
  color: #f5f5dc;
}

#user-page {
  height: fit-content;
  background: linear-gradient(0.5turn, #dbdb71, #d8a23a);
}
.user {
  padding: 10%;
  display: flex;
  justify-content: center;
}
.user-details {
  position: relative;
  left: -15px;
}
.img {
  width: 40%;
  border-radius: 50%;
  padding-top: 5px;
}
.text {
  width: 500px;
  margin: auto;
  height: fit-content;
}
.user_details {
  width: fit-content;
  border: 1px solid black;
  border-radius: 10px;
}
.posts {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.post {
  width: 250px;
  height: 200px;
  border: 2px double #8f7245;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 5px;
}
img {
  width: 30px;
  height: 50;
  box-shadow: 2px 1px;
}
.use {
  display: flex;
  margin: auto;
  gap: 5px;
}
.i {
  font-size: 2em;
}
</style>

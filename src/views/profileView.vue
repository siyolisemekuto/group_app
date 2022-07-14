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
        <h1>Profile</h1>
        <div id="user-img"><img :src="imgUrl" alt="user" class="img" /></div>
        <H1><input type="text" v-model="username" name="username" class="i" :placeholder="UserName"/></H1>
        <H3><input type="email" v-model="email" name="email" class="i" :placeholder="email"/></H3>
        <H5><input type="password"  v-model="password" name="password" class="i" :placeholder="password"/></H5>
          <!-- <H2>Bio</H2>  -->
        <H5><input type="text"  v-model="heading" name="heading" class="i" :placeholder="heading"/></H5>
        <H5><input type="text"  v-model="blurb" name="blurb" class="i" :placeholder="blurb"/></H5>
        <p><input type="text"  v-model="nl" name="blurb" class="i" placeholder="replace image"/></p>
        <div class="bio">
          
        </div>
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
  data() {
    return {
      imgUrl:
        "https://cdn.donmai.us/sample/1b/3b/__yoroizuka_mizore_and_kasaki_nozomi_hibike_euphonium_and_1_more_drawn_by_lyy__sample-1b3b61b1a06c197a4c3ab1eba4a70ffc.jpg",
      UserName: "Lihle",
      post_text:
        "Lorem ipsum dolor sit amet consectetur odit distinctio officia laboriosam aliquam at, expedita dolorem earum autem et molestiae necessitatibus architecto aliquid dolore tenetur, voluptatem hic.",
      post_sender: "Username",
      post_sender_img: "https://i.postimg.cc/nrxbv1nL/icon-1.png",
      password:"****",
      email:"lihle@gmail.com",
      heading:"heading",
      blurb:"blurb",
    };
  },
  props:{

  }
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
      width: max-content;
    }
 
.i::after{  
    font: 1em sans-serif;
    content: "edit";
    /* content: "🖉"; */
}

h1::after{  
    font: 1em sans-serif;
    
    content: "🖉";
}
h1,
h2,
h3{
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
.i{
font-size: 2em
;
}
</style>

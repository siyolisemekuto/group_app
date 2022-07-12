import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    getPost(state) {
      state.posts;
    },
  },
  mutations: {
    setPost(state, posts) {
      state.posts = posts;
    },
    //enterSite(){
    // return loginOBJ
    // }
    //loginUser()
    //addPost()
    //deletePost()
    //addUser()
    //filterItems()
    //sortItems()
    //searchItems()
  },
  actions: {
    async getPostData(context) {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setPost", data);
        });
    },

    //profileView.vue
    user: (state) => {
      let users = state.users.map((user) => {
        return {
          user: users.details.username
            ? users.details.username
            : users.details.email,
          theme: users.theme,
          userIcon: users.profile.usericon,
          bio: users.profile.blurb,
          mantle: users.profile.heading,
        };
      });
    },
    //feedView.vue
    posts: (state) => {
      let posts = state.users.posts.map((post) => {
        return {
          //id
          id: users.posts.postID,
          //type
          type: users.posts.postStatus,
          //body
          body: users.posts.postText,
        };
      });
    },
  },
  modules: {},
});

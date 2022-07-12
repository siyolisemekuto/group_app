import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    user:[]
  },
  getters: {
    getPost(state) {
      state.posts;
    },
    getUser(state) {
      state.user;
    }
  },
  mutations: {
    setPost(state, posts) {
      state.posts = posts;
    },
    setUser(state, user) {
      state.user = user;
    }
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
    async login(commit,payload){
      fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => {
        commit('setUser',payload)
      })
    },
    async getPostData(context) {
      fetch("http://localhost:3000/users")
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

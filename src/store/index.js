import { createStore } from "vuex";
// import axios from "axios";

export default createStore({
  state: {
    posts: [],
    user: null,
  },
  getters: {
    // getUser(state){
    //   user: (state) => {
    //     const user = state.user.map( user => {
    //         return {
    //             userame:  '**' + product.name + '**',
    //             price: product.price / 2,
    //         };
    //     });
    //     return saleProducts;
    // }
    // }
  },
  mutations: {
    setPost(state, posts) {
      state.posts = posts;
    },
    setUser(state, user) {
      state.user = user;
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
      fetch("http://localhost:3000/data")
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
    login: async (context, payload) => {
      const { email, password } = payload;
      let response = await fetch(`http://localhost:3000/Data/?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            alert("Email not found");
          } else {
            // Compare password
            let databasePass = data[0].password;
            if (databasePass !== password) {
              alert("Password doesnt match");
            } else {
              let user = data;
              return user;
            }
          }
        });
      console.log(response);
      context.commit("setUser", response[0]);
    },
  },
  modules: {},
});

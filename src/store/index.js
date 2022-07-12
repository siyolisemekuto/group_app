import { createStore } from "vuex";

export default createStore({
  state: {
    data:fetch(
      `http://localhost:3000/users`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length)
          return (
            (this.user = data[0]),
            localStorage.setItem("user", JSON.stringify(this.user))
          );
      })
  },
  getters: {},
  mutations: {
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

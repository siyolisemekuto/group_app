import router from "@/router";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    posts: null,
    post: null,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
  },
  actions: {
    //Get Posts from db
    getPosts: async (context) => {
      // console.log("test");
      const response = await fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => {
          return data;
          // console.log(data);
        });

      if (response.length === 0) {
        console.log("run json file");
      } else {
        context.commit("setPosts", response);
      }
      // .catch((err) => );
    },

    //Get a single post in DB using Id of the username
    getPost: async (context, id) => {
      fetch("http://localhost:3000/posts/" + id)
        .then((res) => res.json())
        .then((data) => (this.posts = data))
        .catch((err) => context.commit("setPost", post));
    },

    //Add New Post
    addNewPost: async (context, post) => {
      fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify({
          image:post.image,
          message:post.message,
          video:post.video
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())

        .then((json) => {
          console.log(json);
        });
      context.commit("setPosts");
    },

    //Deleting posts using id
    deletePost: async (context, id) => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      }).then(() => context.dispatch(getPosts));
    },
  },
  modules: {},
});

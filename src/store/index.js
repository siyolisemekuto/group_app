// import express from "express";
import { createStore } from "vuex";
// import axios from "axios";

export default createStore({
  state: {
    posts: null,
    user: null,
    Quotes:null
  },
  getters: {
    
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },      
    setUser(state, user) {
      state.user = user;
    },  
    setQuotes(state,quotes){
      state.Quotes = quotes;
    },
    updateProfile: (state, payload) => {
      state.user.put((user) => {
        state.user = payload;
      });
    },
    // updaetprofile(state, user){
    // state.user= user.push
    // }
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
    async getPostusers(context) {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((users) => {
          console.log(users);
          context.commit("setPost", users);
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

    //update profile
    updateProfile: (context, payload) => {
      context.commit("setUser", payload);
      alert("active");
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
      let response = await fetch(`http://localhost:3000/users/?email=${email}`)
        .then((res) => res.json())
        .then((users) => {
          if (users.length === 0) {
            alert("Email not found");
          } else {
            let usersbasePass = users[0].password;
            if (usersbasePass !== password) {
              alert("Password doesnt match");
            } else {
              let user = users;
              return user;
            }
          }
        });
      console.log(response);
      context.commit("setUser", response[0]);
    }
    ,
    registerUser(context, payload) {
      alert("welcome new member");
      const { email, password } = payload;
      fetch("http://localhost:3000/users", {
        method: post,
        body: express.json.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("registerUser", json));

      context.commit("setUser", express.response[0]);
    },
    getPosts: async (context)=>{
      fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => context.commit("setPosts",data))
    },
    getQuotes: async (context)=>{
     fetch('http://localhost:3000/quotes')
     .then(res => res.json())
     .then(data => context.commit("setQuotes",data) )
    }
    ,
  getUserPosts: async (context)=>{
    fetch(`http://localhost:3000/posts?userId=${state.user.user_id}`)
    .then(res => res.json())
    .then(data => context.commit('setUsersPosts',data))
    },

    //Add New Post
    addNewPost: async (context, post) => {
      fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify({
           username:post.username,
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
    deletePost: async (context,id)=>{
      fetch("http://localhost:3000/posts/" + id, {
      method: 'DELETE',
      }).then(() => context.dispatch("getPosts",id))
    },
    getFilteredPosts: async (context,search)=>{
       const response = await fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => {
        data.filter((post) =>{
          return post.username.toLowerCase().includes(search.toLowerCase()),
          console.log(post.username)
        })
      });
      console.log(response);
     context.commit("setPosts",search)
    }
    },


  modules:{}
})

import { buildSlots } from '@vue/compiler-core';
import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    posts:null,
    UserPosts:null,
    Quotes:null
  },
  getters: {
    getPost(state){
    state.posts
    },
    getUserPosts(state){
      state.UserPosts
      }
  },
  mutations: {
  setPosts(state,posts){
    state.posts = posts;
  },  setQuotes(state,quotes){
    state.Quotes = quotes;
  },
  setUsersPosts(state,UserPosts){
    state.UserPosts = UserPosts;
  },
  setUser(state,user ){
    state.user = user;
  },
 },
  actions: {
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
getUserPosts: async (context,payload)=>{
  const username = payload;
  fetch(`http://localhost:3000/users?details${username}`)
  .then(res => res.json())
  .then(data => context.commit('setUsersPosts',data))
  },
  SubmitForm: async (context, payload) => {
    const { email, password } = payload;
    let response = await fetch(`http://localhost:3000/users?${email}`)
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
            let user=data
            return user
          }
        }
      });
    console.log(response);
  },
  },
  modules: {
  }
})

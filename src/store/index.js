import { createStore } from 'vuex'

export default createStore({
  state: {
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
  }
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
  }
  },
  modules: {
  }
})

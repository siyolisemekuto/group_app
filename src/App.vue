<template>
  <HomeView></HomeView>
  <ViewAll_Feed></ViewAll_Feed>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Ubuntu:wght@300&display=swap');

#app {
  text-align: center;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

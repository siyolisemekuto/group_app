<template >
    <div>
         <nav>
          <div v-if="user">
    <router-link to="/"><img :src=imgIcon /></router-link> 
          </div>
          <div v-else>
    <router-link to="/viewall_feed"><img :src=imgIcon /></router-link> 
    </div >
    <div v-if="!user" class='Icons'>
    <router-link to="/user"><i class="fa-solid fa-user"></i></router-link> |
    <router-link to="/notification" @click="picker" toggle="picker" class="red"><i class="fa-solid fa-bell"></i></router-link> |

    </div>
  </nav>
    </div>
</template>
<script>
import NotificationVue from '@/views/Notification.vue'

export default {
     data(){
        return {
            imgIcon:'https://i.postimg.cc/nrxbv1nL/icon-1.png'
        }
    },
    picker(){
      Notification.length > 0;
      
    }

} 

</script>
<style scoped>
nav a{
  padding: 5px;
  line-height: 15px;
}
i{
  font-size:20px;
  margin-bottom: 5px;
  
}
img{
  margin-top: 5px;
  width: 30px;
}
.Icons{
  margin-top:10px ;
}
nav {
  position: fixed;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 1px;
  background-color: #8F7245;
}

nav a {
  font-weight: bold;
  color: #D8A23A;
}

nav a.router-link-exact-active {
  color: #F5F5DC;
}

</style>
<template >
<section id="Login-SignUp">
<div class="container">
<h1>Login-SignUp</h1>
<form @submit.prevent="SubmitForm">
        <div >
        <input type="email" name="email" id="email" class="inputs" placeholder="Email" required  v-model="email">
        <input type="password" name="password" id="password" class="inputs" placeholder="Password" required v-model="Password">
        </div>
        <button type="submit" class="btn">Login-SignUp</button>
</form>
</div>
</section>
</template>
<script>
export default {
    data() {
return {
   email:'',
   Password:''
}
},
methods:{
SubmitForm(){

}
}
}
</script>
<style  scoped>
#Login-SignUp{
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
    background-color: #eee;
}
.container{
  width: 50vw;
  height: fit-content;  
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;

  border: 1px solid;
  border-radius: 10px;
background-color: white;
}
.inputs{
    width: 450px;
    padding: 10px;
    margin: 20px;
    border-radius: px;
    border: none;
    border-bottom: 1px solid;
}
:-ms-input-placeholder::after{
    display: none;
}
.btn{
    margin-top: 20px;
    padding: 5px;
    font-size: large;
    background-color:#eee;

    border-radius: 9px;  
}
</style>
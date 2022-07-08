<template>
    <div id="landing" class="row" >
      <div id="about" class="col">
      <h1>Inuit</h1>
      <p class="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat similique iusto perferendis libero architecto atque accusamus repellendus esse, ut, sapiente reiciendis temporibus voluptas aliquam laboriosam tempora voluptatum voluptatem quibusdam, ex eligendi voluptate totam nihil consequatur illum. Fugiat, obcaecati beatae, repellat recusandae magnam aspernatur facilis praesentium suscipit laudantium fugit cupiditate libero!</p>
      <div class="container">
      <h1>Welcome</h1>
      <form @submit.prevent="SubmitForm">
          <div >
          <input type="email" name="email" id="email" class="inputs" placeholder="Email" required  v-model="email">
          <input type="password" name="password" id="password" class="inputs" placeholder="Password" required v-model="Password">
          </div>
          <button type="submit" class="btn">Submit</button>
  </form>
  </div>
      </div>
      <div id="Login-SignUp" class="col">
        <img alt="logo" src="../assets/iconrebg.png">

  </div>
      </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
//  data() {
// return {
//    email:'',
//    Password:''
// }
// }
// methods:{
// SubmitForm(){
// }
// }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#landing{
  display: flex;
  width: fit-content;
  background: linear-gradient(0.5turn, #F5F5DC, #D8A23A);
  height: 100vh;
}
.row{
  font-family: Verdana, sans-serif;

}
#about{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:auto;
  padding: 5%;
}
.about-text{
  width: fit-content;
  text-align: center;
}
img{
  width:20rem;
  height:12rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background:none;
}
#Login-SignUp{
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
}
.container{
  width: 50vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.inputs{
    width: 450px;
    padding: 10px;
    margin: 20px;
    border: none;
    border-bottom: 1px solid;
    background:inherit;
}
:-ms-input-placeholder::after{
    display: none;
}
.btn{
    margin-top: 20px;
    padding: 5px;
    font-size: large;;
    border-radius: 9px;
}
</style>

<template >

<section id="Login-SignUp">
<div class="container">
    <h1>Login/SignUp</h1>
    <form>
        <div>
        <input type="text" name="" id="" class="inputs" placeholder="Name">
        <input type="text" name="" id="" class="inputs" placeholder="Surname">
        <input type="text" name="" id="" class="inputs" placeholder="Number">
        <input type="text" name="" id="" class="inputs" placeholder="Email">
        <input type="text" name="" id="" class="inputs" placeholder="Birthday">
        </div>
        <button type="submit" class="btn">Submit</button>
    </form>
    </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style >
.Login-SignUp{
width: 100vw;
height: 100vh;
}
 .container{
    width: 50vw;
      height: 90vh;  
   margin: auto;
display: flex;
flex-direction: column;
padding-top: 10vh;
}
.inputs{
    width: 450px;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
}
:-ms-input-placeholder::after{
    display: none;
}
.btn{
    padding: 10px;
    font-size: large;
   

}
</style>
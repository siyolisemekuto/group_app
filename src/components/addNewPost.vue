<template>
    <div class="card">
        <form @submit="addNewPost" class="Postaddition">
            <input type="text" v-model="username" placeholder="Username">
            <input type="text" v-model="message" placeholder="What's on Your Mind?...">
            <input type="text" v-model="image" placeholder="image_url">
            <input type="text" v-model="video" placeholder="video_url">
            <button type="submit">Add New Post</button>
        </form>
    </div>
</template>
<script>
export default {
    mounted(){
    return this.$store.state.posts,
    this.$store.state.user

    },
    props: ["post"],
    data(){
        return{
            username:"",
            message: "",
            image: "",
            video: "",
        };
    },
    methods: {
        addNewPost(){
            const postadd ={
                username:this.username,
                message: this.message,
                image: this.image,
                video: this.video
            }
            return this.$store.dispatch("addNewPost",postadd)
        }
    }
}
</script>
<style scoped>
.card{
    width: 50vw;
    margin:auto;
}
.Postaddition{
    display: flex;
    flex-direction: column;
}
input{
    padding: 10px;
    border-radius:10px ;
    margin: 2px;
}
button {
    width: fit-content;
    padding: 5px;
    margin: auto;
}
</style>
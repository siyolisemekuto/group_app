<template>
    <div class="card">
        <form @submit.prevent="addNewPost" class="Postaddition">
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
    return this.$store.state.posts
    },
    props: ["post"],
    data(){
        return{
            message: "",
            image: "",
            video: "",
        };
    },
    methods: {
        addNewPost(){
            const postadd ={
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
</style>
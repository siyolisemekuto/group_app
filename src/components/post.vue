<template>
    <div>
        <router-link :to="{name: 'post', params: {id: post.id}}" class="card">
            <div class="card">
                <h3>{{ post.username }}</h3>
                <img :src="post.image" :alt="image"/>
                <video :src="post.video" :alt="post.username"></video>
                <h4>{{ post.message }}</h4>
            </div>
        </router-link>
        
    </div>
</template>
<script>
export default {
    props: ["post"]
}
</script>
<style scoped>
.card{
    width: 20vw;
    height: fit-content;
}
</style>
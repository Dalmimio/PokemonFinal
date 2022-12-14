<script setup>
import { ref, computed } from 'vue'
import user from '../store/User.js'
import PostItem from '../components/PostItem.vue';
import { posts } from '../store/PostStore.js'

const myPosts = ref([])

const updateMyPosts = computed(()=>{
    if(user.value){
        myPosts.value = posts.value.filter(element => element.email === user.value.email) 
    }
})




</script>

<template>
    <main class="d-flex flex-column align-items-center">
        {{updateMyPosts}}

        <h1 v-if="!user">You must be logged in to see your posts and profile</h1>


        <div class="header d-flex gap-3 justify-content-between">
            <img :src="user? user.photoURL : 'https://github.com/Dalmimio/Img-blog/blob/main/perfil.jpg?raw=true'" alt="profile-icon" >
            <div class="text-start align-self-center">
                <h3 >{{user?user.displayName:'Unregistered'}}</h3>
                <p class="username">{{user.email}}</p>
            </div>
            <RouterLink to="/settings">
                <font-awesome-icon icon="fa-solid fa-gear" />
            </RouterLink>
        </div>
        <div class="main">
            <h2 class="text-start">Recent Post</h2>
        </div>
        <div class="cardContainer">
            <PostItem v-for="post in myPosts" :post="post" :key="post.id" />
        </div>
    </main>
</template>

<style scoped>


.cardContainer {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}
.header{
    margin: 1rem 0;
    width: 90%;
    padding-bottom: 1.5rem;
}
.header img{
    border-radius: 50%;
    width: 100px;
}
.username{
    color: #9c9c9c;
    }
a{
    font-size: 1.4rem;
    color: var(--color-text-ligth);
    opacity: .8;
}
.main{
    width: 90%;
    padding-top: 1.5rem;
    border-top: #9b9b9b52 solid 1px;
}
@media screen and (min-width: 767px) {
    main{
        
        width: 60vw;
    }
}
</style>

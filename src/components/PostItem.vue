<script setup>

import { ref } from 'vue';
import CommentContainer from './CommentContainer.vue';
import NewComment from './NewComment.vue';
import user from '../store/User.js';



const props = defineProps({
    post: {},
    typeof: Object
})


</script>

<template>
    <div class="card mb-3 posteo">
        <div class="posteo-header d-flex justify-content-between align-items-center">
            <div class="d-flex gap-4 align-items-center">
                <img :src="post.photo ? post.photo : 'https://picsum.photos/200'" alt="">
            
                <h5 class="text-center">{{ post.name }}</h5>
            </div>

            <!-- Button trigger modal -->
            <!-- Botoncito para borrar, falta logica para cerrar el modal luego de borrar -->
            <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <font-awesome-icon class="trash" icon="fa-solid fa-trash-can" />
            </button> -->
        </div>
       
        <div class="card-body text-white">
            <p class="card-text text-start">{{post.body}}</p>
        </div>
      
        <CommentContainer :postId="post.id" />
        <NewComment v-if="user" :postId="post.id" />
    </div>
</template>


<style scoped>
.posteo{
        background-color: rgba(112, 112, 112, 0.349);
        border: 5px;
        width: clamp(300px, 25rem, 600px) !important;
        /* height:clamp(10rem, 12rem, 16rem) !important; */
        max-height: auto;
        color: white;
        padding: .2rem;
        
    }
    .posteo-header{
        padding: 10px;
    }
    .posteo-header img{
        width: 3rem;
        border-radius: 50%;
    }
    .posteo-header h5{
        color: rgba(204, 204, 204, 0.788);
        margin-bottom: 0 !important;
        
    }
    .posteo .card-body{
        border-bottom: .5px solid rgba(204, 204, 204, 0.151);
        border-top: .5px solid rgba(204, 204, 204, 0.151);
    
    }

    .icon-fav-y, .trash{
        color: var(--color-primary);
    }
    .icon-fav-n{
        color: rgba(0, 0, 0, 0.418);
    }
    .icon-coment-y{
        color: rgba(0, 0, 0, 0.418);
    }
    button{
        border: none;
        background: transparent;
        font-size: 1.3rem;
    }
    /* .card-footer{
        height: auto;
        background: transparent;
    }
    
    .comentarios-container{
        width: 95%;
    }
    .linea{
        width: 3px;
        background-color: var(--color-primary);
        height: auto;
    }
    */
</style>
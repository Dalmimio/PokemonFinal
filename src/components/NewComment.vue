<script setup>

import user from '../store/User.js';
import { addComment } from '../firebase/comments.js';
import { ref } from 'vue';

const texto = ref('');

const props = defineProps({
    postId: '',
    typeOf: String
})

const addNewComment = () => {
    let newComment = {
        id: crypto.randomUUID(),
        postId: props.postId,
        date: Date.now(),
        name: user.value.displayName,
        email: user.value.email,
        text: texto.value,
        photo: user.value.photoURL,
    }
    addComment(newComment)
    texto.value = ''
}


</script>

<template>
    <form class="d-flex gap-2 justify-content-evenly" @submit.prevent="addNewComment">
        <input maxlength="80" v-model="texto" type="text" :placeholder="'comentar como '+ user.displayName.split(' ')[0]">
        <button class="btn btn-comment" :disabled="!texto">Post</button>
    </form>
</template>

<style scoped>
    input{
        width: 80%;
        border: none;
        border-radius: 50rem !important;
        background: rgba(255, 255, 255, 0.185);
        color: white;
        padding: .3rem .5rem;
    }
    .btn-comment{
        background-color: var(--color-primary);
        color: var(--text-light);
        width: auto;
        font-size: 1rem;
    }

form{
    width: 100%;
    padding-bottom: 5px;
}
input{
    color: var(--text-light);
    background-color: rgba(253, 253, 253, 0.103);
    border: none;
    border-radius: 5px;
    width: 70%;
}
     button{
        border: none;
        background: transparent;
        font-size: 1.3rem;
    }
    
    
    .btn-comment{
        background-color: var(--color-primary);
        color: var(--text-light);
        width: auto;
        font-size: 1rem;
    }
    

</style>
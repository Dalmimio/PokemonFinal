<script setup>

import { ref, computed } from 'vue';
import { addPost } from '../firebase/posts.js';
import user from '../store/User.js';

const name = ref('')
const email = ref('')
const message = ref('')

const updateData = computed(() => {
    if (user.value) {
        console.log(user);
        name.value = user.value.displayName
        email.value = user.value.email
    }
})

const addNewPost = () => {
    // logica para que los datos ingresados esten bien etc etc etc...
    let newPost = {
        id: crypto.randomUUID(),
        date: Date.now(),
        name: name.value,
        email: email.value,
        body: message.value,
        photo: user.value.photoURL,
    }
    addPost(newPost)
    message.value = ''
}

</script>

<template>
    {{ updateData }}
    <form>
        <div class="header">
            <img :src="user.photoURL" alt="foto de perfil">
            <textarea maxlength="150" required v-model="message" placeholder="¿Que estas pensando?"
                @keyup.enter="addNewPost"></textarea>
        </div>
        <button @click.prevent="addNewPost" :disabled="!message" class="btn btn-more mt-2">Post <font-awesome-icon icon="fa-regular fa-pen-to-square" /></button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: transparent;
    margin: 10px auto;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    
}

form img {
    width: 50px;
    height: 50px;
    object-fit: cover;
}




.header {
    display: flex;
    gap: 10px;
}

textarea {
    width: clamp(280px, 90%, 600px) !important;
    background: rgba(255, 255, 255, 0.205);
    border: none;
    border-radius: .5rem;
    color: #FEFEFE;
    height: auto;
    padding: 1rem;
}



.icon{
        color: #191919;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
    }
    button{
        width: 10rem !important;
    }
    button svg, button{
        font-size: 1.2rem;
    }
    form{
    width: 100%;
}
@media screen and (max-width: 600px){
    form{
        width: 95%;
    }
}
</style>
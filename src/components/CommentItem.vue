<script setup>

const props = defineProps({
    comment: {},
    typeof: Object,
})

</script>

<template>
<div class="d-flex contenedor">
    <div class="lineH"></div>
    <div class="d-flex flex-row-reverse w-100 gap-2">
        <div class="cardHeader">
            <img :src="comment.photo" alt="foto perfil">
        </div>
        <div class="comment d-flex justify-content-center">
            <p class="d-flex flex-column gap-2 p-1">
                <span>{{ comment.name.split(' ')[0] }}</span>
                {{ comment.text }}
            </p>
        </div>
    </div>
</div>
</template>


<style scoped>

.contenedor {
    width: 100%;
}
p{
    text-align: start;
    width: 100%;
}

.cardHeader{
    width: 20%;
    height: 90% !important;
    display: flex;
    align-items: flex-end;
    align-items: center;
}


.cardHeader img{
    width: 40px;
    border-radius: 25px;
}
.comment{

    width: 70%;
    background-color: rgba(255, 255, 255, 0.041);
    border-radius: .9rem;
    text-align: start;
    padding: .2rem;
    
}
.comment span{
    font-weight: bold;
    border-bottom: 1px solid white;
}
.trash{
        color: var(--color-primary);
}
button{
        border: none;
        background: transparent;
        font-size: 1.3rem;
}
.lineH{
    align-self: center;
    width: 9%;
    height: 1px;
    background-color: var(--color-primary);
}
</style>
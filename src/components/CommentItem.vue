<script setup>

const props = defineProps({
    comment: {},
    typeof: Object,
})

</script>

<template>
<div class="d-flex contenedor gap-2">
    <div class="lineH"></div>
    <div class="d-flex flex-row-reverse align-items-center">
        <div class="cardHeader">
            <img :src="comment.photo" alt="foto perfil">
        </div>
        <div class="comment d-flex justify-content-center">
            <p class="d-flex flex-column gap-3">
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
    width: 20vw;
    display: flex;
    align-items: flex-end;
    align-items: center;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 5px 10px 10px 0;
}


.cardHeader img{
    width: 100%;
    border-radius: 52px
}
.comment{
    padding: .2rem;
    width: 60vw;
    background-color: rgba(255, 255, 255, 0.041);
    border-radius: .9rem;
    text-align: start;
    padding: .8rem;
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
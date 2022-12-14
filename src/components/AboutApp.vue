<script setup>

</script>

<template>
    <main class="d-flex flex-column align-items-center">
        <h1>About Us</h1>

    <div class="d-flex flex-wrap aboutss justify-content-center mt-5">
        <div class="artic">
        <article>
        <h3>Mission:</h3>
        <p>Help pokemon trainers to give each one of them the best quality of life, so they grow up happy and healthy, bringing information and useful places to make it possible, we are here to help you make this path more comfortable. 
        </p> 
    </article>

        <img src="https://raw.githubusercontent.com/Dalmimio/Img-blog/main/63889-h.jpg" alt="team">
    
    </div>
    <div class="artic">
        <article>
        <h3>Vision:</h3>
        <p>We seek to be able to guarantee all trainers the necessary tools to be able to fulfill our mission in all possible regions, grow as an organization and continue helping pokemon centers that need us.
        </p> 
        </article>

        <img src="https://github.com/Dalmimio/Img-blog/blob/main/poke-abrazo.gif?raw=true" alt="team">
    
    </div>
    </div>
    </main>
</template>

<style scoped>
    
    article{
        width: 90%;
        text-align: start;
        margin: 1.5rem 0rem;
    }
    img{
        width: 90%;
        border-radius: 1rem;
    }
    @media screen and (min-width: 767px) {
        main{
            display: flex;

        }
        .aboutss{

            width: 100% !important;
            gap: 2rem;
        }
        .artic{
            width: 40%;
        }
        article{
            width: 100%;
        }
        img{
            width: 100%;
        }
        
    }
</style>
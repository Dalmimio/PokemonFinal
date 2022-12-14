<script setup>
</script>

<template>
    <main class="d-flex flex-column align-items-center justify-content-center">
        <h1>Terms and Conditions</h1>
        <p>These are the terms and conditions for the use of this website.</p>
    
    
    
        <div class="xl">
            <div class="accordion  accordion-flush d-flex flex-column align-items-center" id="accordionFlushExample">
    
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            General
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li>
                                    Dont break the site or do anything that interferes with normal use of Mewwit.
    
                                </li>
                                <li>
                                    Remember human. Pokeblog is a place to build community and belonging, not to attack
                                    marginalized or vulnerable groups of people or their pokemons.
                                </li>
                                <li>
                                    Everyone has the right to use the Pokeblog without harassment, intimidation, or threats
                                    of violence. Posts that incite violence or promote hate will be prohibited.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Comply with the community rules.
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li>
                                    Post authentic content in a publication in which you have a vested interest, and do not
                                    cheat or engage in content manipulation (including spamming, vote rigging, ban
                                    circumvention, or subscriber fraud) or interfere or Disrupt the Pokeblog community.
                                </li>
                                <li>
                                    Respect the privacy of others. You are not allowed to incite bullying, for example, by
                                    revealing someone's personal or confidential information.
                                </li>
                                <li>
                                    Never post or threaten to post someone's intimate or sexually explicit media without
                                    their consent.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Privacy & Security
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ol>
                                <li>
                                    Do not share private information with any fellow community, let's stay safe.
                                    <ul>
                                        <li>Do not share passwords, security codes or personal identification</li>
                                    </ul>
                                </li>
                                <li>
                                    Keep it legal and avoid posting illegal content or soliciting or facilitating illegal or
                                    prohibited transactions.
                                </li>
    
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://github.com/Dalmimio/Img-blog/blob/main/oficial_jenny.png?raw=true" alt="jenny">
        </div>
    </main>
</template>

<style scoped>
.accordion{
    width: 100%;
}
.accordion-item{
    background-color: transparent;
    color: var(--color-text-ligth);
    border-bottom: 0;
    margin: .5rem 0;
    width: 90%;
}
.accordion-button{
    background-color: var(--color-btn);
    color: var(--color-text-dark);
    font-weight: 700;
    border-radius: .3rem !important;
}
.accordion-button:focus{
    box-shadow: inset 1px 1px 5px 0.25rem var(--color-btn-hover);
}
.accordion-button:hover{
    background-color: var(--color-btn-hover);
}
ul, ol{
    width: 95%;
    text-align: start;
    margin-top: 1rem;
}
li{
    margin-top: 1rem;
}
img{
    width: 90%;
}

@media screen and (min-width: 767px) {
   
    .accordion{
        width: 50%;
        align-self: center;
        margin-top: 3rem;
    }
    main{
        flex-direction: row;
    }
    .xl{
        display: flex;
    }
    .xl img{
        width: 40%;
    }
}
</style>
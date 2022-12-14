
<script setup>
import { loginWithGoogle, logout } from '../firebase/auth.js'
import user from '../store/User.js'
import router from '../router/index.js'
import { computed } from 'vue'

const login = () => {
  loginWithGoogle()
}

// computed function

const changeUser = computed(() => {
  if(user){
    console.log(user.displayName);
  }
})

</script>

<template>
  <main class="login">
    {{ changeUser }}
    <div  v-if="!user" class="d-flex flex-column align-items-center justify-content-evenly no-login">
      <h3>Initial session to enjoy and inform yourself</h3>
      <p>We are working to be able to offer more variety in the start and registration of the session. Know excuse!</p>

      <img src="https://github.com/Dalmimio/Img-blog/blob/main/b7586a3c97afb70ece7dab6f0dcfedab.jpg?raw=true" alt="WorkForUs">
    </div>


    <div v-if="user"  class="formsContainer">

      <!-- user card from firebase -->
        <div class="userCard">
          <h4>Welcome back dear {{user.displayName.split(' ')[0]}}</h4>
          <img :src="user.photoURL" alt="user photo" />
        </div>
        <img src="https://github.com/Dalmimio/Img-blog/blob/main/frieends.png?raw=true" alt="friends">
    </div>
    <!-- Login with google button -->
    <div>
      <button v-if="!user" class="loginButton d-flex justify-content-around align-items-center" @click="login">
        <font-awesome-icon class="google" icon="fa-brands fa-google" />
        Login with Google
      </button>
      <button v-if="user" class="logoutButton  d-flex justify-content-around align-items-center" @click="logout">
        Logout
         <font-awesome-icon class="out" icon="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
    <!-- Logout button -->
  </main>
</template>

<style scoped>
.no-login{
  width: 100%;
  height: 50vh;

}

.no-login img{
  width: 280px;
  border-radius: 35px;
}
.login{
  margin-top: 2.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.containerCard{
  width: 90%;
}
.formsContainer{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
.formsContainer > img{
  width: 70%;
}

/* Google login button */
.loginButton {
  background-color: var(--color-text-ligth);
  width: 250px;
  color: var(--color-text-dark);
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}
.google{
  color: var(--color-primary);
  font-size: 1.3rem;
}
.out{
  font-size: 1.3rem;
}
.logoutButton{
  background-color: var(--color-primary);
  color: white;
  width: 230px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  font-size: 16px;  
  margin-top: 3rem;
}

.userCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 80%;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 50px;
  margin: 1rem;
}

.userCard img{
  width: 100px;
  height: 100px;
  border-radius: 5px;
}



input, textarea{
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea{
  resize: none;
}

form button{
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}
@media (orientation: landscape) {
  .login{
    margin-top: 0;
}
  .formsContainer{
    justify-content: center;   
}
.formsContainer > img{
  width: 50%;
}
.userCard{
  flex-direction: row;
  border-radius: 25px;
}

.userCard img{
 border-radius: 25px;
}
 .no-login{
  width: 70%;
  gap: 1rem;
 } 
 .loginButton {
  margin-top: 4rem;
 }
 .no-login img{
  width: 40%;
 }
}
</style>
<template>
    
    <div class="Inicia Sesión">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button @click='login'>Conectarse</button>
        <p>Si aún no tienes cuenta, tu puedes <router-link to='/sign-up'>crearla</router-link></p>

    </div>
</template>


<script>

import firebase from 'firebase';


export default {
    name: 'login',
    data(){
        return{
            email: '',
            password:''
        }
    },
    methods:{
        login: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                ()=>{
                    this.$router.replace('home')
                },
                (err)=>{
                    alert('Oops, ' + err.message)
                }
            );
        }
    }
}
</script>

<style scoped>

    .login{
        margin-top: 40px;
    }

    input{
        margin: auto;
        width: 20%;
        display: flex;
        padding: 15px;
        margin-top: 10px;
    }

    button { 
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
        padding: 10px;
        background: #59B984;
    }
    p{
        margin-top: 30px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }

</style>

<template>
    <div class="sign-up">
        <p>Let´s create a new account</p>
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="signUp">Iniciar</button>
        <span>Si ya tienes una cuenta, <router-link to='/login'> inicia sesión </router-link></span>
    </div>
</template>

<script>
import firebase from'firebase';

export default {
    
    name: 'signUp',
    data(){
        return{
            email:'',
            password: ''
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( 
                () => {
                this.$router.replace('home')
            },
                (err) => {
                alert('Ops', + err.message)
                }
            );
        }
    }
}
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input{
        margin: auto;
        margin-top: 20px;
        width: 20%;
        padding: 15px;
        display: flex;
    }
    button{
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
        padding: 10px;
        background: #59B984;
    }
    span{
        display: block;
        margin-top: 20px;
        font-size:11px;
        color: #35495E;
        font-weight: bold;
    }
</style>>

<template>
  <div class="home">
    <form @submit.prevent="addAnswer">
      <input type="text" v-model="newAnswers.answer"><br>
      <input type="text" v-model="newAnswers.guideId">
      <button type="submit">Enviar</button>
      <table id="tabla">
      <tr v-for="answer in answers" v-bind:value="answer.answer" :key="answer.value">
        <td>
          {{answer.answer}}
        </td>
      </tr>
      </table>
    </form>

    <button @click="logout">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Firebase from 'firebase';
import answersRef from '../main';


export default {
  name: 'home',
  firebase:{
    answers: answersRef
  },

  table = new Vue({
  data :{
      newAnswers:{
        answer:'',
        guideId:''
      }
  },
  }),
  
  methods:{
    logout:function(){
      Firebase.auth().signOut().then(() =>{
        this.$router.replace('login')
      });
    },
    addAnswer: () => {
      Vue.push(this.newAnswers);
      this.answersRef.answer = '';
      this.answersRef.guideId = '';
    }
  }
  }

</script>

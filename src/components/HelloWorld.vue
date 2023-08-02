<template>
  <div class="hello">
    <h1>{{msg}}</h1> 

    <v-container>   
      <v-row>
        <v-col cols="6" md="4" v-for="udata in user" :key="udata.id">
    <v-card class="ma-4 pa-4"  elevation="8" style="width: 300px; height: 400px;">
            <img class="w-50" :src="udata.image">
            <v-card-title class="text-left text-wrap">{{`Name : ${ udata.name}, (${udata.id})`}}</v-card-title>
            <p class="text-left text-wrap">{{ udata.gender }}</p>
            <p class="text-left text-wrap">{{ udata.occupation }}</p>

                
    </v-card>
  </v-col>
  </v-row>
  </v-container>

    
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapGetters({user: 'getUsers'})
  },
  methods: {
    ...mapActions({createUser: 'registerUser'})
  },
  created() {
    this.createUser();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

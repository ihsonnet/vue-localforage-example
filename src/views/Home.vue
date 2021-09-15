<template>
  <v-container>
    <v-row>
      <v-col>
         <p class="my-4">Welcome to vue-localforage(INDEXEDDB)</p>

      <v-btn-toggle
        v-model="icon"
        borderless
      >
        <v-btn value="left">
          <span class="hidden-sm-and-down">Save Data</span>

          <v-icon right>
            mdi-content-save-outline
          </v-icon>
        </v-btn>

        <v-btn value="center">
          <span class="hidden-sm-and-down">Edit Data</span>

          <v-icon right>
           mdi-content-save-edit-outline
          </v-icon>
        </v-btn>

        <v-btn value="right">
          <span class="hidden-sm-and-down">Delete Data</span>

          <v-icon right>
            mdi-delete-outline
          </v-icon>
        </v-btn>

        <v-btn value="justify">
          <span class="hidden-sm-and-down">Show Data</span>

          <v-icon right>
            mdi-book-open-outline
          </v-icon>
        </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
    data(){
      return {
        userData: [
          {
            name: "Injam Sonnet",
            age: 12,
            address: "Dhaka"
          },
          {
            name: "Faisul Islam",
            age: 15,
            address: "Sylhet"
          }
        ],
      }
    },
    methods: {
     saveData(){
       this.$setItem('userData', this.userData , function(){
         console.log('Data saved done');
       })
     } 
    },
    mounted() {
      this.saveData();
    }
  }
</script>

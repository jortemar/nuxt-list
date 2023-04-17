<template> 
  <v-container fluid class="mt-5">  
    <v-row>
      <v-col offset="4" cols="4">
        <!-- TITULO -->
        <v-row class="d-flex justify-center">  
          <v-col cols="12">
            <p style="font-size:40px" class="font-weight-bold"> Tarea 1 </p>
            <!-- <p style="font-size:40px" class="font-weight-bold"> {{ $t('titleMessage') }} </p> -->
          </v-col>
        </v-row>
        <!-- INPUT -->
        <Input />                                 
      </v-col>
    </v-row>

    <!-- LISTAS DE TAREAS -->
    <v-row class="mt-8">   
      <PendingTasks  />
      <CompletedTasks  />
      <!-- <TaskList  
      v-for="(pendingTask) in pendingTasks" :key="pendingTask.taskName"
      />
      
      <TaskList  
      v-for="(completedTask) in completedTasks" :key="completedTask.taskName"
      /> -->
      
    </v-row>
  </v-container> 
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',

  // computed: {
  //   ...mapGetters('tasklist', ['pendingTasks', 'completedTasks']),
  // },
  methods: {
    ...mapActions('tasklist', ['loadTasks']),
  },

  created() {
    this.loadTasks()
  }
}

</script>

<style scoped>
#app {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: #f8f9fa;
  }

  .bg-app {
    background-color: #f8f9fa;
  }


</style>

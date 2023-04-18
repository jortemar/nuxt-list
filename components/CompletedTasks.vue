<template>
  <v-col cols="12" sm="6" class="d-flex justify-center">
    <v-card max-width="300" width="300" min-height="300" class="border bg-green-lighten-5">
      <h4 class="title-color py-3"> completadas </h4>
      <!-- <h4 class="title-color py-3">{{ $t("completedListMessage") }}</h4> -->
      <v-list class="bg-green-lighten-5">
        <v-list-item v-for="completedTask in completedTasks" :key="completedTask.taskName" >
          <!-- <div class="d-flex"> -->
            <!-- <v-checkbox-btn @change="changeToPending(completedTask)" /> -->
            <Task :task="completedTask" />          
          <!-- </div> -->
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
// import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {   
  name: 'CompletedTasks',

  // components: {
  //   Task: defineAsyncComponent(() => import(/* webpackChunkName: "Task" */ '@/components/Task'))
  // },

  computed: {
    ...mapGetters('tasklist', ['completedTasks']),
  },

  // methods: {
  //   ...mapActions('tasklist', ['updateTask']),

  //   changeToPending(completedTask) {
  //     this.updateTask(completedTask)
      
  //     // this.$store.state.tasklist.pendingTask = completedTask.name
  //   }
  // }
}
</script>
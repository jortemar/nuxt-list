<template>
  <v-col cols="12" sm="6" class="d-flex justify-center">
    <v-card max-width="300" width="300" min-height="300" class="border bg-green-lighten-5">
      <h4 class="title-color py-3"> pendientes </h4>
      <!-- <h4 class="title-color py-3">{{ $t("pendingListMessage") }}</h4> -->
      <v-list class="bg-green-lighten-5">
        <!-- <v-list-item>
          <Task 
          v-for="(pendingTask, index) in pendingTasks"
          :key="index"
          :task="pendingTask"
          />
        </v-list-item> -->


        <v-list-item v-for="(pendingTask) in pendingTasks" :key="pendingTask.taskName" >
          <div class="d-flex">
            <v-checkbox @change="changeToCompleted(pendingTask)" />
            <Task :task="pendingTask" />
          </div>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
// import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  // name: 'PendingTasks',
  
  // components: {
  //   Task: defineAsyncComponent(() => import(/* webpackChunkName: "Task" */ '@/components/Task'))
  // },

  computed: {
    ...mapGetters('tasklist', ['pendingTasks']),
  },

  methods: {
    ...mapActions('tasklist', ['updateTask']),

    changeToCompleted(pendingTask) {
      this.updateTask(pendingTask)

     // this.$store.state.tasklist.isCleaned = false
     // this.$store.state.tasklist.completedTask = pendingTask.name
     }
  }
}
</script>

<style>
.title-color {
  background-color: #2c3e50;
  color: #198754;
  font-size:larger;
}
</style>
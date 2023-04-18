<template>
    <!-- <div class="d-flex"> -->
        <!-- <v-checkbox-btn @change="changeToPending(task)" /> -->
        <!-- <v-checkbox @change="changeToPending(task)" /> -->

        <v-text-field hide-details class="bg-amber-lighten-4" style="color:white">
            {{ task.taskName }}
        </v-text-field>
    <!-- </div> -->
</template>

<!-- <template>
    <v-text-field hide-details class="bg-amber-lighten-4">
      {{ task.taskName }}
    </v-text-field>
</template> -->

<script>
// import { mapActions } from 'vuex'

export default {
    // name: 'Task',
    
    props: {
        task: {
            type: Object,
            required: true,
        }
    },

    // methods: {
    //     ...mapActions('tasklist', ['updateTask']),

    //     changeToPending(completedTask) {
    //     this.updateTask(completedTask)
        
    //   // this.$store.state.tasklist.pendingTask = completedTask.name
    // }
  
}
</script>

<style>
</style>
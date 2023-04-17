<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" lg="10" xl="8">  
      <!-- el .trim elimina espacios en blanco -->
      <v-text-field
          class="font-italic amber-lighten-3"
          label="alpiste"
          v-model.trim="taskName"
          @keypress.enter="addTask" />  

          {{ this._counter }}
      <!-- <v-text-field
          class="font-italic amber-lighten-3"
          :label="$t('inputMessage')"
          v-model.trim="taskName"
          @keypress.enter="addTask" />   -->
        
    </v-col>

    <Buttons :addTaskProp="addTask" />

  </v-row>
</template>

<script>
// import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Input',
  // components: {
  //   TaskButtons: defineAsyncComponent(() => import(/* webpackChunkName: "TaskButtons" */ '@/components/TaskButtons'))
  // },

  data() {
    return {
      taskName: null
    }
  },

  methods: {
    ...mapActions('tasklist', ['createTask']),

    addTask() {
      // console.log('el método va')
      if (!this.taskName) {
        alert('No se puede insertar una tarea vacía')
      } else {
        this.createTask(this.taskName)
        console.log(this.taskName)
        this.taskName = null
      }
    }
  },

  computed: {
    ...mapState('tasklist', ['_counter'])
  },  

  watch: {
    taskName(value) {
      this.taskName = value
    }
  }
}

</script>
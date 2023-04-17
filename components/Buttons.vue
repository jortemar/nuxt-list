<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-btn class="border bg-amber-lighten-3" @click="addTaskProp">
        <p class="text-none font-weight-bold"> añadir tarea </p>
        <!-- <p class="text-none font-weight-bold">{{ $t("addButtonMessage") }}</p> -->
      </v-btn>
    </v-col>

    <v-col cols="12" md="6">
      <v-btn class="border bg-amber-lighten-3" @click="cleanCompletedTasks">
        <p class="text-none font-weight-bold"> limpiar completadas </p>
        <!-- <p class="text-none font-weight-bold">{{ $t("cleanButtonMessage") }}</p> -->
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Buttons',

  props: {
    addTaskProp: {
      type: Function
    }
  },

  methods: {
    ...mapActions('tasklist', ['deleteCompletedTasks']),

    async cleanCompletedTasks() {
      if (await this.deleteCompletedTasks()) {
        alert ('La lista de tareas completadas ya está vacía')
      }
    }
  }
}  
</script>

<style>
.color-button {
  background-color: #198754;
}
</style>
// import { serviceCreate, serviceUpdate, serviceDelete, serviceLoad } from "@/services/taskServiceFirebase"
import { serviceCreate, serviceUpdate, serviceDelete, serviceLoad } from "@/services/taskServiceLocalStorage"

export const createTask = async ({ commit }, nombreTarea) => {
    commit('addTask', await serviceCreate(nombreTarea))
}

export const updateTask = async ({ commit, dispatch }, task) => {
    commit('updateTask', await serviceUpdate(task))
    dispatch('loadTasks')
}

export const deleteCompletedTasks = async ({ commit }) => {
    commit('cleanCompletedTasks')
    return serviceDelete()
} 

export const loadTasks = async ({ commit }) => {
    const tasks = await serviceLoad()

    if (!tasks) {
        commit('setTaskList', [])
        return
    }

    commit('setTaskList', tasks)
}
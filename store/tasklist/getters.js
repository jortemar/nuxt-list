
export const pendingTasks = (state) => {
    return state.taskList.filter(task => !task.completed)
}

export const completedTasks = (state) => {
    return state.taskList.filter(task => task.completed)
}





// GETTERS PARA BARRA DE NOTIFICACIÓN
// export const getTask = (state) => {
//     return state.taskToNotice
// }

// export const getIsCleaned = (state) => {
//     return state.isCleaned
// }

// export const getCompletedTask = (state) => {
//     return state.completedTask
// }

// export const getPendingTask = (state) => {
//     return state.pendingTask
// }
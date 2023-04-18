export const addTask = (state, task) => {
    state._taskList = [...state._taskList, task]
    console.log(task)
    console.log(state._taskList)

    // state.taskToNotice = state.taskName
}



export const updateTask = (state, task) => {
    const index = state._taskList.map(e => e.id).indexOf(task.id)
    state._taskList[index] = task
}


export const cleanCompletedTasks = (state) => {
    state._taskList = state._taskList.filter(task => !task.completed)
    // state.isCleaned = true
}

export const setTaskList = (state, tasks) => {
    state._taskList = [...tasks]
    console.log(state._taskList)
}



// export const resetVars = (state) => {
//     state.taskToNotice = ""
//     state.isCleaned = false
//     state.completedTask = ""
//     state.pendingTask = ""
// }






export const addTask = (state, task) => {
    state.taskList = [...state.taskList, task]
    console.log(task)
    console.log(state.taskList)

    // state.taskToNotice = state.taskName
}



export const updateTask = (state, task) => {
    const index = state.taskList.map(e => e.id).indexOf(task.id)
    state.taskList[index] = task
}


export const cleanCompletedTasks = (state) => {
    state.taskList = state.taskList.filter(task => !task.completed)
    // state.isCleaned = true
}

export const setTaskList = (state, tasks) => {
    state.taskList = [...tasks]
}



// export const resetVars = (state) => {
//     state.taskToNotice = ""
//     state.isCleaned = false
//     state.completedTask = ""
//     state.pendingTask = ""
// }






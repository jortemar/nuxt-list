import _ from 'lodash';

let tasksList = []

export const serviceCreate = async (nombreTarea) => {
    const task = {
        id: Math.floor(Math.random() * 100000),
        taskName: nombreTarea,
        completed: false
    }

    tasksList.push(task)
    localStorage.setItem('taskList', JSON.stringify(tasksList))

    return task
}


export const serviceUpdate = async (task) => {
    task.completed ? task.completed = false : task.completed = true

    tasksList = JSON.parse(localStorage.taskList)

    for (let index in tasksList) {
        if (task.id === tasksList[index].id) {
            tasksList[index] = task
        }
    }

    localStorage.taskList = JSON.stringify(tasksList)

    return task
}


export const serviceDelete = async () => {
    tasksList = JSON.parse(localStorage.taskList)
    let tasksListChanged = tasksList.filter(task => !task.completed)
    localStorage.taskList = JSON.stringify(tasksListChanged)

    // DOS FORMAS DE COMPARAR LOS ARRAYS (devolvemos el booleano para mostrar o no el alert)
    // return (JSON.stringify(tasksList) !== JSON.stringify(tasksListChanged)) ? false : true
    return _.isEqual(tasksList, tasksListChanged)
}


export const serviceLoad = async () => {
    if (process.client) {
        return JSON.parse(localStorage.taskList)
    }
}
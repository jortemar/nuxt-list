import { updateApi, deleteApi, getApi } from "./taskService"
// import { createApi, updateApi, deleteApi, getApi } from "./taskService"
import { db } from "~/plugins/firebase"

export const serviceCreate = async (nombreTarea) => {
    const task = {taskName: nombreTarea, completed: false }
    // const { data } = await createApi(task)
    const response = db.collection('tasks').add(task)
    console.log(response)
    response.then(() => {
        this.$router.back()
    })
    task.id = response.name

    return task
}

export const serviceUpdate = async (tarea) => {
    let { taskName, completed } = tarea
    completed ? completed = false : completed = true

    const task = { taskName, completed }
    await updateApi(tarea.id, task)

    return task
}

export const serviceDelete = async () => {
    const { data } = await getApi()

    const idList = [] 
    if (data) {
        for (let id of Object.keys(data)) {
            if (data[id].completed) {
                idList.push(data[id])
                await deleteApi(id)       
            }
        }
    }   

    return idList.length === 0 ? true : false
}

export const serviceLoad = async () => {
    const { data } = await getApi()

    const tasks = [] 
    if (data) {
        for (let id of Object.keys(data)) {
            tasks.push({
                id,
                ...data[id]
            })
        }
    }
    
    console.log(tasks)
    return tasks
}
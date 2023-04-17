import taskApi from "./taskApi";

const resource = '/tasks.json'
 
export const createApi = (data) => {
    return taskApi.post(resource, data)
}

export const updateApi = (id, data) => {
    return taskApi.put(`/tasks/${id}.json`, data)
}

export const deleteApi = (id) => {
    return taskApi.delete(`/tasks/${id}.json`)
}

export const getApi = () => {
    return taskApi.get(resource)
}
    

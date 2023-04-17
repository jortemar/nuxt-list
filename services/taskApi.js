import axios from 'axios'

const baseURL = 'https://task-list-db-default-rtdb.europe-west1.firebasedatabase.app'
// const baseURL = 'mysql URL'

const taskApi = axios.create({
    baseURL
})

export default taskApi
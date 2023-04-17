// import { createStore } from 'vuex'
import taskListStore from './tasklist'

// export default createStore({

//     modules: {
//         tasklist: taskListStore
//     }

// })

export default ({
    modules: {
        tasklist: taskListStore
    }
})


// export const state = () => ({
//     _counter: 0
// })
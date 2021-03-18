import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            socket:{},
            loggedIn:false,
            initialConnection:false,
            connectionError:false,
            userDetails:{
                username:null,
                colour:"red"
            },
            onlineUsers:[],
            messages:[]
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
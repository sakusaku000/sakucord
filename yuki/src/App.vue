<template>
    <div class="base" v-if="$store.state.initialConnection">
        <!-- Login Screen -->
        <Login v-if="!$store.state.loggedIn"/>
        <!-- Chat Screen -->
        <Chat v-if="$store.state.loggedIn"/>
        <!-- Error Screen -->
        <ErrorPopup v-if="$store.state.connectionError" errorMessage="Lost connection to server"/>
    </div>
</template>

<script>
// Import Socket.IO Client
import io from 'socket.io-client';

// Components
import Login from './components/Login.vue'
import Chat from './components/Chat.vue'
import ErrorPopup from './components/ErrorPopup.vue'

export default {    
    name: 'App',
    components: {
        Login,
        Chat,
        ErrorPopup
    },
    created() {
        // Connect to socket server
        this.$store.state.socket = io.connect(process.env.VUE_APP_SOCKET_SERVER);
        // Ping socket server
        this.$store.state.socket.emit("ping", null, response => {
            console.log(response);
            this.$store.state.initialConnection = true;
        })
    }
}
</script>

<style>
/* Poppins Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

html, body {
    background-color:#2e2e2e;
    color:#fefefe;
    font-family:'Poppins',sans-serif;
}
:root {
    --red-accent:#DC4E4E;
    --green-accent:#86E361;
    --blue-accent:#5EDBDA;
    --pink-accent:#F3A9F4;
}

/* generic button */
.standardButton {
    border:0; border-radius:10px;
    padding:6px 10px;
    font-weight:500;
    font-size:1.2rem;
    background-color:#DC4E4E;
    color:#fefefe;
    transition-duration:0.1s;
}
.standardButton:hover {
    background-color:#dc4e4ed7;
    cursor:pointer;
}
</style>

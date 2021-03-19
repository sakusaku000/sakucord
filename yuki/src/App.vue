<template>
    <div class="base" v-if="$store.state.initialConnection">
        <!-- Login Screen -->
        <Login v-if="!$store.state.loggedIn"/>
        <!-- Chat Screen -->
        <Chat v-if="$store.state.loggedIn"/>
    </div>
    <transition name="loadFade">
        <div class="load" v-if="!$store.state.initialConnection">
            <h1>Sakucord</h1>
        </div>
    </transition>

    <!-- Error Screen -->
    <ErrorPopup v-if="$store.state.connectionError" errorMessage="Lost connection to server"/>
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
        // Get state
        const state = this.$store.state;

        // Set page title
        document.title = "Sakucord"

        // Connect to socket server
        state.socket = io.connect(process.env.VUE_APP_SOCKET_SERVER);
        // Set ping timeout
        const pingTimeout = setTimeout(function() {
            state.connectionError = true;
            state.socket = {};
        }, 15000);
        // Ping socket server
        state.socket.emit("ping", null, response => {
            // log ping
            console.log(response);
            // Cancel timeout
            clearTimeout(pingTimeout);
            // Set connection to true
            state.initialConnection = true;
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

/* LOADING SCREEN */
.load {
    position:fixed; top:0px; bottom:0px; left:0px; right:0px;
    display:flex; justify-content:center; align-items:center;
    color:#2e2e2e;
    background-color:#fefefe;
}
.load h1 {
    font-weight:100;
    animation:loadAnim 0.5s infinite;
}
@keyframes loadAnim {
    0% {transform:scale(1)}
    50% {transform:scale(1.1)}
    100% {transform:scale(1)}
}

.loadFade-enter-active, .loadFade-leave-active {
  transition: opacity .3s;
}
.loadFade-enter, .loadFade-leave-to {
  opacity: 0;
}
/* LOADING SCREEN */

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

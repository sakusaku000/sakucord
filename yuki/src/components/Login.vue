<template>
    <div class="container">
        <div class="login">
            <div class="login-head">
                <h1>Welcome to Sakucord</h1>
            </div>
            <div class="login-details">
                <!-- username -->
                <h5>Enter a Username</h5>
                <input type="text" id="username" v-model="usernameInput">
                <span v-if="failedInput">Please enter a valid username</span>
                <!-- colour picker -->
                <h5>Select a colour</h5>
                <ColourPickerButton colour="red"/>
                <ColourPickerButton colour="green"/>
                <ColourPickerButton colour="blue"/>
                <ColourPickerButton colour="pink"/>
                <br>
                <!-- Submit -->
                <button class="standardButton" @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
// components
import ColourPickerButton from "./ColourPickerButton.vue";
export default {
    name:'Login',
    components:{
        ColourPickerButton
    },
    data() {
        return {
            usernameInput:"",
            failedInput:false
        }
    },
    methods:{
        login() {
            // get username
            const username = this.usernameInput
            // get state
            const state = this.$store.state;
        
            // Set username to user details
            if (username.length > 3) {
                state.userDetails.username = username
                this.failedInput = false
            } else {
                this.failedInput = true
            }

            // Send new user event to server
            state.socket.emit("set_user_details", state.userDetails);
            
            // Set logged in state
            state.loggedIn = true;

            // Subscribe to client events
            // -- New User Join
            state.socket.on("new_user_join", function(data) {
                // Push join message to chat
                state.messages.push({username:"System", colour:"green", content:`${data.username} has joined!`});

                // Reload user list
                state.socket.emit("get_all_users", null, response => {
                    state.onlineUsers = response;
                });
            })

            // -- User Leave
            state.socket.on("user_leave", function(data) {
                // Push leave message to chat
                state.messages.push({username:"System", colour:"red", content:`${data.username} has left`});

                // Reload user list
                state.socket.emit("get_all_users", null, response => {
                    state.onlineUsers = response;
                });
            })

            // -- Message Posted
            state.socket.on("message", function(data) {
                // Push message to chat
                state.messages.push({username:data.username, colour:data.colour, content:data.content});
            })

            // -- Server Disconnect
            state.socket.on("disconnect", function() {
                state.connectionError = true;
            });
        }
    }
}
</script>

<style scoped>
    .container {
        display:flex;
        justify-content:center;
        align-items:center;
        height:95vh;
    }
    
    .login {
        text-align:center;
        background-color:#DCDCDC;
        color:#2e2e2e;
    }
    .login-head {
        padding:5px 50px;
        background-color:#DCDCDC;
        filter:drop-shadow(0px 0px 10px #00000050);
    }
    .login-details {
        padding:20px;
    }
    .login-details h5 {
        margin:0;
        font-weight:400;
    }
    .login-details span {
        display:block;
        margin-top:-10px;
        margin-bottom:10px;
        color:red;
    }
    label {
        display:block;
    }
    input {
        padding:10px;
        width:80%;
        margin-bottom:20px;
    }
    .standardButton {
        margin-top:20px;
    }
</style>
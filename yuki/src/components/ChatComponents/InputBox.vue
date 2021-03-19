<template>
    <div class="input-box">
        <input type="text" placeholder="Send a message to the chat, press enter to send" v-model="textInput" v-on:keyup.enter="sendMessage">
    </div>
</template>

<script>
export default {
    name:"InputBox",
    data() {
        return {
            textInput:""
        }
    },
    methods:{
        sendMessage() {
            if (this.textInput.length >= 1) {
                // Send out message
                this.$store.state.socket.emit("message", {username:this.$store.state.userDetails.username, colour:this.$store.state.userDetails.colour, content:this.textInput})
                // clear input box
                this.textInput = "";
            }
        }
    }
}
</script>

<style scoped>
    .input-box {
        position:fixed; bottom:0px; left:0px; right:320px;
        height:50px;
        padding:20px;
        display:flex; align-items:center;
    }
    .input-box input {
        padding:10px; width:100%;
        background-color:#474747;
        color:#FFFFFF;
        border:none;
        border-radius:10px;
    }

    /* EXTEND ON MOBILE */
    @media only screen and (max-width: 600px) {
        .input-box {
            right:0px;
        }
    }
</style>
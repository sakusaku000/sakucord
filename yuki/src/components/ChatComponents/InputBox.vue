<template>
    <div class="input-box">
        <input type="text" v-model="textInput" v-on:keyup.enter="sendMessage">
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
            // Send out message
            this.$store.state.socket.emit("message", {username:this.$store.state.userDetails.username, colour:this.$store.state.userDetails.colour, content:this.textInput})
            // clear input box
            this.textInput = "";
        }
    }
}
</script>

<style scoped>
    .input-box {
        position:fixed; bottom:0px; left:0px; right:0px;
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
</style>
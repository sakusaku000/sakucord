<template>
    <ChatHeader :username="$store.state.userDetails.username"/>
    <Messages/>
    <InputBox/>
</template>

<script>
// components
import ChatHeader from './ChatComponents/ChatHeader.vue';
// import OnlineUsers from './ChatComponents/OnlineUsers.vue';
import Messages from './ChatComponents/Messages.vue';
import InputBox from './ChatComponents/InputBox.vue';

export default {
    name:"Chat",
    components:{
        ChatHeader,
        Messages,
        InputBox
    }
}
</script>
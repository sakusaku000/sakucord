<template>
    <div class="online-users">
        <h1>Currently Online</h1>
        <User v-for="user in $store.state.onlineUsers" v-bind:key="user.id" v-bind:username="user.username" v-bind:colour="user.colour"/>
    </div>
</template>

<script>
import User from './User.vue';
export default {
    name:"OnlineUsers",
    components:{
        User
    }
}
</script>

<style scoped>
    .online-users {
        position:fixed;
        top:0px; right:0px;
        width:280px; height:100%;
        background-color:#111111;
        padding:20px;
    }
    h1 {
        font-size:1.5rem;
    }
</style>
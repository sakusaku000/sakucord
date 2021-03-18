<template>
    <div class="container">
        <Message v-for="message in $store.state.messages" v-bind:key="message.username" v-bind:username="message.username" v-bind:content="message.content" v-bind:colour="message.colour"/>
    </div>
</template>

<script>
import Message from './Message.vue';
export default {
    name:"Messages",
    components:{
        Message
    },
    updated() {
        this.$nextTick(() => this.scrollDown());
    },
    methods:{
        scrollDown() {
            this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
        }
    }
}
</script>

<style scoped>
    .container {
        position:fixed; 
        top:50px;
        bottom:70px;
        left:0px;
        right:0px;
        padding:20px;
        overflow-y:scroll;
    }
</style>
<template>
    <div class="chat-header">
        <h1>Signed in as: {{username}}</h1>
    </div>
</template>

<script>
export default {
    name:"ChatHeader",
    props:{
        username:String
    }
}
</script>

<style scoped>
    .chat-header {
        position:fixed;
        top:0px; left:0px; right:0px;
        background-color:#DCDCDC;
        color:#2e2e2e;
        display:flex; align-items:center;
        padding:0px 20px;
        height:50px;
    }
    .chat-header h1 {
        margin:0px;
        font-weight:700;
        font-size:1.4rem;
    }
</style>
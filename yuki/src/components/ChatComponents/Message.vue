<template>
    <div class="msgbox">
        <h5 :class="[colour]">{{username}}</h5>
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    name:"Message",
    props:{
        username:String,
        content:String,
        colour:String
    }
}
</script>

<style scoped>
    .msgbox {
        padding:10px 20px;
    }
    h5 {
        margin:0px;
    }
    p {
        margin:0px;
    }

    .red {
        color:var(--red-accent);
    }
    .green {
        color:var(--green-accent);
    }
    .blue {
        color:var(--blue-accent);
    }
    .pink {
        color:var(--pink-accent);
    }
</style>
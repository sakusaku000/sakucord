<template>
    <h5 :class="colour">{{username}}</h5>
    <p>{{content}}</p>
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
    h5 {
        margin:0px;
    }
    p {
        margin:0px;
        margin-bottom:20px;
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
<template>
    <div class="user">
        <span :class="colour">· {{username}}</span>
    </div>
</template>

<script>
export default {
    name:"User",
    props:{
        username:String,
        colour:String
    }
}
</script>

<style scoped>
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
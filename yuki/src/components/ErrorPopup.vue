<template>
    <div class="container">
        <div class="error">
            <h1>Error</h1>
            <p>{{errorMessage}}</p>
            <button class="standardButton" @click="reloadPage">Reload</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"ErrorPopup",
    props:{
        errorMessage:String
    },
    methods:{
        reloadPage() {
            location.reload();
        }
    }
}
</script>

<style scoped>
    .error {
        background-color:rgb(36, 36, 36);
        color:white;
        padding:20px;
        text-align:center;
    }
    .container {
        position:fixed; top:0px; left:0px; right:0px; bottom:0px;
        display:flex;
        justify-content:center; align-items:center;
        background-color:#000000b4;
    }
    h1 {
        margin:0px;
    }
    p {
        margin:0px
    }
</style>
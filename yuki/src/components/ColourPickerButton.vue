<template>
    <button :class="[$store.state.userDetails.colour === colour ? 'selected' : 'n', colour]" @click="changeColour"/>
</template>

<script>
export default {
    name:'ColourPickerButton', 
    props:{
        colour:String
    },
    methods:{
        changeColour() {
            this.$store.state.userDetails.colour = this.$props.colour;
        }
    }
}
</script>

<style scoped>
    button {
        width:50px; height:50px;
        border:0;
        margin:10px;
        transition-duration:0.1s;
    }
    button:hover {
        opacity:0.8;
    }

    .selected {
        transform:scale(1.1);
        filter:drop-shadow(0px 0px 5px #00000050);
    }

    .red {
        background-color:var(--red-accent);
    }
    .green {
        background-color:var(--green-accent);
    }
    .blue {
        background-color:var(--blue-accent);
    }
    .pink {
        background-color:var(--pink-accent);
    }
</style>
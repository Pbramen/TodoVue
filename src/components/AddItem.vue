<script setup>

    function add() { 
        console.log("adding...")
    }
</script>
<template>

    <div>
        <button @click="add()" class="addButton">+ <span> Add New Item</span></button> 
    </div>
</template>

<style scoped>
    button.addButton{
        border-radius: 30px;
        background-color: transparent;
        border-width: 3px;
        font-size:30px;
        margin: 5px 5px;
        border-style:solid;
    }
    button:active{
        background-color: black;
    }
</style>
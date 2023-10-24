<script setup>
  import {ref} from 'vue'
  import HomePage from './components/HomePage.vue'
  import AddItem from './components/AddItem.vue'
  import ItemComp from './components/ItemComp.vue'
const todoItems = ref({})
</script>

<template>

    <HomePage/>
    <div class="hztl-wrapper">
      <ItemComp/>
      <ItemComp/>
      <ItemComp/>
      <ItemComp/>
      <ItemComp/>
    </div>
    <div class="wrapper">
      <AddItem />
    </div>
</template>

<style>
  .wrapper{
    align-self:flex-end;
    margin-right: 50px;
  }
  .hztl-wrapper{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 20px;
    margin: 50px 0px;
  }
</style>

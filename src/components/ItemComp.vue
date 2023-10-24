<script>
import { ref } from 'vue'
    export default{
        setup() {
            const date = ref("testing")
            const description = ref("nothing to see here...")
            const list = ref({name:"todo item here", descript:"pokemon"})

            return { 
                date,
                description,
                list
            }
        }    
    }

</script>
<template>
    <div class="fixed-box" draggable="true">
        <p>{{date}}</p>
        <ul  class="checkList">
            <li v-for="item in list">
                <label>
                    <input type="checkbox"> {{ item }}
                </label>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .fixed-box{
        position:relative;
        width: 250px;
        height: 300px;
        border-color:white;
        border-style: solid;
        border-radius: 5px;
        border-width: 6px;
        border-bottom-width: 12px;
        box-shadow: 7px 10px black;
        font-size: 12px;
    }
    div > p {
        text-align:center;
        margin: 10px 10px;
    }
    .checkList{
        padding-left: 0px;
        margin: 10px 10px;
        list-style-type: none;
    }
</style>
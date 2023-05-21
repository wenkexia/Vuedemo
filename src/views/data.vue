<template>
    <h1>列表渲染</h1>
    <p> key-索引-值</p>
    <li v-for="(item, index) in items" :key="item.id">

        {{ item.id }} - {{ index }} - {{ item.message }}
    </li>
    <strong>展示过滤或排序后的结果</strong>


    <li v-for="e in evenNumbers">
        {{ e }}
    </li>

    <strong>对象</strong>
    <ul>
        <li v-for="value, key, index in obj">{{ index }}-{{ key }}-{{ value }} </li>
    </ul>
</template>


<script  setup lang="ts">
import { ref, computed, reactive } from "vue"

const items = ref([{ message: 'foo' }, { message: 'bar' },])
const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const evenNumbers = computed(() => {
    return numbers.value.filter((n) => n % 2 === 0)
})

const obj = reactive({
    id: 1,
    name: "张三",
    age: 23
})

</script>

<style lang="scss" scoped></style>
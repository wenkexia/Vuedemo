<template>
    <h1>条件渲染</h1>
    <p v-if="ins_if">v-if指令 为真 </p>
    <p v-else>v-if指令 为假时 </p>

    <div v-if="is_word==='a'">is a</div>
    <div v-else-if="is_word==='b'">is b</div>
    <div v-else> not a or b</div>


    <div v-show="is_show"> v-show 显示该元素</div>

</template>

<script  setup>
import { ref } from "vue"
const ins_if = true
const is_word = "a"
const is_show = true

</script>

<style lang="scss" scoped>

</style>
<script  setup>
import { ref ,reactive } from "vue"

</script>

<template>
    <div>
        <h1>动态路由匹配</h1>
        <h2>获取路径参数</h2>
        User {{ $route.params.username }} with post {{ $route.params.postId }}
    </div>
</template>

<style lang="scss" scoped>

</style>
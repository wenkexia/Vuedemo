<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1"><RouterLink to="/home">home</RouterLink></el-menu-item>
          <el-menu-item index="1"><RouterLink to="/data">data</RouterLink></el-menu-item>
          <el-menu-item index="1"><RouterLink to="/about">about</RouterLink></el-menu-item>
          <el-menu-item index="1"><RouterLink to="/echarts">echarts</RouterLink></el-menu-item>
          <el-menu-item index="1"><RouterLink to="/new">新闻智分系统</RouterLink></el-menu-item>
          <el-menu-item index="1"><RouterLink to="/getcode">注册机</RouterLink></el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>


           <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>



      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped></style>

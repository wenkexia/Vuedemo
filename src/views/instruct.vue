<script setup>
import { ref ,reactive} from 'vue'
const message = "文本插值"
const message1 = "这是指令v-text"


const isActive = ref(true)
const hasError = ref(false)



const vueValue = ref("v-model双向数据绑定")
const b_click = () => {
    alert("点击事件")
}

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})
</script>

<template>
    <div v-text="message1"></div>
    <p>{{ message }}</p>
    <p>{{ message }}</p>
    <div title="这是文本提示信息"></div>

    <button v-on:click="b_click">按钮</button>
    <button @click="b_click">v-on@语法糖</button>



    <div>
        <p>{{ vueValue }}</p>
        <input type="text" v-model.trim="vueValue" />

    </div>
    <hr>
    <!-- v-bind绑定class    -->
    <!-- 渲染结果为 <div class="static active"></div> -->
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">v-bind的class绑定</div>

    <hr>
    <div :style="styleObject"> v-bind内联样式绑定</div>

</template>
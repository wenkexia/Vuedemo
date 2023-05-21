<template>
    <h1>侦听器学习</h1>
    <div>
        <input type="text" v-model="name" />
        <p>name:{{ name }}</p>
        <p>new_name:{{ new_name }}</p>
    </div>

    <strong>监听对象中的某个属性</strong>
    <!-- old_math:<div v-model="name"></div> -->


    new_ath :<input v-model="newName"><input />
</template>

<script  setup>
import { ref, watch } from "vue"
let name = ref("张三")
let new_name = ref()


// 当第一个参数name被改动时，监听器将触发并执行第二个参数（回调函数），它接收两个参数，分别是 newValue(新值)和oldValue(旧值)。
watch(name, (newName, oldName) => {
    new_name.value = newName
    console.log("newName", newName)
    console.log("oldName", oldName)
})
//通过reactiva定义的复杂数据类型，会自动开启deep:true深度监听


let stu = reactive({
    name: "张三",
    age: 18,
    scores: {
        math: 100,
        english: 100
    }
})

// 监听对象中的某个属性  需要传入回调函数  getter 函数
watch(() => stu.scores.math, (newMath, oldMath) => {
    console.log("newMath", newMath)

})

</script>

<style lang="scss" scoped></style>
<script setup lang="ts">
import { ref } from 'vue'

import { getnew } from '@/api/Getnew.js'

// import { ElMessage, ElMessageBox } from 'element-plus'


const title = ref('')
const body = ref('')
const label = ref('')

const post_analyse = () => {
  if (title.value === '' || body.value === '') {
    // Show warning message if title or body is empty
    ElMessage({
      showClose: true,
      message: '输入新闻内容不能为空!',
      type: 'warning'
    })

    label.value = ''
    console.log('输入新闻内容不能为空!')

    // this.$refs.analy.style.visibility = 'hidden'
  } else {
    getnew(title.value, body.value)
      .then((res) => {
        console.log('请求成功！')
        // 注意这里获取的是res,而不是res.data
        console.log(res)
        // console.log(res.data)

        label.value = res.label
        // label.value = res.data['label']

        // ElMessage({
        //   showClose: true,
        //   message: '新闻分类完成！ 新闻类别：' + label.value,
        //   type: 'success'
        // })
        ElMessageBox.alert('新闻类别：' + label.value, '分类结果', {
          // if you want to disable its autofocus
          // autofocus: false,
          confirmButtonText: 'OK',

        })
      })
      .catch((err) => {
        console.log(err)
        ElMessage({
          showClose: true,
          message: '请求出错！',
          type: 'error'
        })
      })
  }
}
</script>

<template>
  <div class="back">
    <el-card class="box-card ec">
      <template #header>
        <div class="card-header">
          <div class="title">新闻智分系统</div>
        </div>
      </template>

      <div class="tip">请输入新闻标题:</div>
      <el-input class="inp" v-model="title" autosize type="textarea" placeholder="请输入新闻标题" />

      <div class="tip">请输入新闻内容:</div>
      <el-input
        class="inp"
        v-model="body"
        :autosize="{ minRows: 20, maxRows: 30 }"
        type="textarea"
        placeholder="请输入新闻内容"
      />

      <el-button type="primary" @click="post_analyse">开始分析</el-button>
      <!-- <div>新闻类别：{{ label }}</div> -->
    </el-card>
  </div>
</template>

<style lang="scss" scoped>

.ec {
  background-image: url('/src/assets/b1.png');
  // background-image: url('/src/assets/b2.jpg');
  backgroundrepeat: 'no-repeat';
  backgroundsize: '100% 100%';
}

.inp {
  :deep(.el-textarea__inner) {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.title {
  font-family: cursive;
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  width: 325px;
  height: 35px;
  margin-bottom: 10px;
}

.tip {
  font-family: 宋体;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}

.el-button {
  margin: 0 auto;
  position: relative;
  margin-top: 15px;
  margin-bottom: 10px;
  display: block;
}

.result {
  font-family: 宋体;
  font-size: 22px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 170px;
  height: 25px;
  color: #4876ff;
  visibility: hidden;
}
</style>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { getcode } from '@/api/Getcode'

import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const form = reactive({
  machine_code: '',
  date: '',
  desc: ''
})
const code = ref('')

const onSubmit = () => {
  // 从前端获取到数据，然后提交到后端
  //     {
  //     "machine_code": "jlkasdjfklajs",
  //     "date": 1683136800000,
  //     "desc": "这是备注"
  // }
  const data = {
    machine_code: form.machine_code,
    date: form.date,
    desc: form.desc
  }
  // 将data转换成json格式

  console.log(data)
  getcode(JSON.stringify(data))
    .then((response) => {
      // 处理请求成功的响应
      console.log(response)
      // const res = response.data
      code.value = response.code

      console.log(response.code)
    })
    .catch((error) => {
      // 处理请求失败的响应
      console.error(error)
    })
}
</script>

<template>
  <!-- 居中布局 -->
  <el-row class="row-bg" justify="center">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>注册机</span>
          <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
      </template>
      <el-form :model="form" label-width="120px">
        <el-form-item label="机器码">
          <el-input v-model="form.machine_code" />
        </el-form-item>

        <el-form-item label="过期时间">
          <el-date-picker
            v-model="form.date"
            type="datetime"
            placeholder="Pick a Date"
            format="YYYY/MM/DD hh:mm:ss"
            value-format="x"
          />
        </el-form-item>

        <el-form-item label="备注">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()" dialogVisible = "true"
            >生成</el-button
          >
          <el-button>关闭</el-button>
          <!-- 对话框 -->
          <el-dialog
            v-model="dialogVisible"
            title="请妥善保管激活码"
            width="30%"
            :before-close="handleClose"
          >
            <el-text class="mx-1">激活码：{{ code }}</el-text>

            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
              </span>
            </template>
          </el-dialog>
        </el-form-item>
      </el-form>
    </el-card>
  </el-row>
</template>

<style lang="scss" scoped>
// .d1 {
//     margin: 0 auto;
//     width: 800px;
// }
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 800px;
}
</style>

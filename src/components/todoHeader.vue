<template>
  <div class="todoHeader">
    <el-input class="search" v-model="searchContent" placeholder="请输入搜索内容"></el-input>
    <el-button type="primary">搜索</el-button>
    <el-button @click="dialogVisible = true" type="primary">新增</el-button>
  </div>
  <el-dialog title="新增待办" center v-model="dialogVisible" width="360px" :before-close="handleClose">
    <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">
      <el-form-item label="活动名称" prop="addContent">
        <el-input class="add" v-model="ruleForm.addContent" placeholder="请输入待办内容"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import {
    defineComponent,
    ref,
    reactive,
    getCurrentInstance 
  } from 'vue'

  export default defineComponent({
    name: 'todoHeader',
    setup(props, context) {
      // 新增弹窗
      const ruleFormRef = ref(null as any)
      const dialogVisible = ref(false)
      const rules = {
        addContent: [{
          required: true,
          message: '请输入待办内容'
        }]
      }
      const ruleForm = reactive({
        addContent: ""
      })
      const submit = () => {
        ruleFormRef.value.validate((valid: boolean) => {
          if (valid) {
            console.log()
          }
        })
      }
      const handleClose = () => {
        dialogVisible.value = false
      }
      // 搜索待办
      const searchContent = ref('')
      return {
        dialogVisible,
        rules,
        ruleFormRef,
        ruleForm,
        submit,
        handleClose,
        searchContent
      }
    }
  })
</script>
<style lang="scss" scoped>
  .todoHeader {
    display: flex;

    .search {
      flex: 1;
      margin-right: 10px;
    }
  }
</style>
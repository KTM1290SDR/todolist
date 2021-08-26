<template>
  <div class="todoItem">
    <el-checkbox v-model="todoItem.isSelect">{{
      todoItem.content
    }}</el-checkbox>
    <span class="updateTime">{{ todoItem.updateTime }}</span>
    <i class="el-icon-remove"></i>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
interface TodoItem {
  id: number;
  creationTime: string;
  updateTime: string;
  content: string;
  isSelect: boolean;
}
export default defineComponent({
  name: "todoItem",
  props: {
    todoItem: {
      type: Object,
    },
  },
  setup(props, context) {
    
  },
});
</script>
<style lang="scss" scoped>
.todoItem {
  height: 32px;
  line-height: 32px;
  background: #fff;
  position: relative;
  margin-bottom: 10px;
  padding: 0 25px;
  border-radius: 3px;
  border-left: 5px solid #629a9c;
  box-shadow: 0 1px 2px rgb(0 0 0 / 7%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  :deep .el-checkbox {
    flex: 1;
  }
  .updateTime {
    padding: 0 20px;
  }
}
</style>

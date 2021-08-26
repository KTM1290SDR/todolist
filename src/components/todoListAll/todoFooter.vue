<template>
  <el-button type="primary" icon="el-icon-delete" @click="$emit('delDoneAll')"
    >删除已完成</el-button
  >
  <el-button type="primary" icon="el-icon-success" @click="$emit('allDone')"
    >全部完成</el-button
  >
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "todoFooter",
  emits: ["delDoneAll", "allDone"],
  setup() {},
});
</script>
<style lang="scss" scoped></style>

<template>
  <div class="todoListAll">
    <todoHeader />
    <div class="listing">
      <h3><span>进行中</span><span>{{listing.length}}</span></h3>
      <todoList :list="listing" />
    </div>
    <div class="listed">
      <h3><span>已完成</span><span>{{listed.length}}</span></h3>
      <todoList :list="listed" />
    </div>
    <!-- <todoFooter /> -->
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    defineAsyncComponent,
    reactive
  } from 'vue'
  // interface TodoItem {
  //   id: number
  //   creationTime: Date
  //   updateTime: Date
  //   content: string
  //   isSelect: boolean
  // }
  export default defineComponent({
    name: 'todoListAll',
    components: {
      todoHeader: defineAsyncComponent(() => import('@/components/todoHeader.vue')),
      todoList: defineAsyncComponent(() => import('@/components/todoList.vue')),
      todoFooter: defineAsyncComponent(() => import('@/components/todoFooter.vue'))
    },
    setup() {
      const listing = reactive([{
        id: 1,
        creationTime: '2020-1-1',
        updateTime: '2020-1-2',
        content: "新公馆",
        isSelect: false
      }, {
        id: 1,
        creationTime: '2020-1-1',
        updateTime: '2020-1-2',
        content: "jiujiu",
        isSelect: false
      }])
      const listed = reactive([])
      return {
        listing,
        listed
      }
    }
  })
</script>
<style lang="scss" scoped>
  .todoListAll {
    width: 460px;
    margin: 0 auto;

    h3 {
      span:nth-last-child(1) {
        margin-left: 10px;
      }
    }
  }
</style>
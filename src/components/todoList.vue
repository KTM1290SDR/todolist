<template>
  <todoItem v-for="(item,index) in list" :key="`list${index}`" :todoItem="item" />
</template>
<script lang="ts">
  import {
    defineComponent,
    defineAsyncComponent
  } from 'vue'

  export default defineComponent({
    name: 'todoListing',
    components: {
      todoItem: defineAsyncComponent(() => import('@/components/todoItem.vue'))
    },
    props: {
      list: {
        type: Array,
      }
    },
    setup() {

    }
  })
</script>
<style lang="scss" scoped>
</style>
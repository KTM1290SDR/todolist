<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos " :key="todo.id" :todo="todo" :delTodo="delTodo" :index="index" :updateTodo="updateTodo"/>
  </ul>
</template>
<script lang='ts'>
import {defineComponent,defineAsyncComponent} from 'vue'
export default defineComponent({
  name: 'List',
  components: {
    Item: defineAsyncComponent(
        () => import("@/components/todoListExample/Item.vue")
      ),
  },
  props: ['todos', 'delTodo', 'updateTodo']
})
</script>
<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}
.todo-empty{
  height: 40px;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

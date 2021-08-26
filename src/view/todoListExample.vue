<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo" />
      <Footer :todos="todos" :checkAll="checkAll" :clear="clearAllCompletedTodos" />
    </div>
  </div>
</template>
<script lang="ts">
  import {
    defineComponent,
    onMounted,
    reactive,
    toRefs,
    defineAsyncComponent,
    watch
  } from 'vue'
  import {
    Todo
  } from '../type/todo'
  import { saveArray, readArray } from '../utils/localStorageUtil'
  export default defineComponent({
    name: 'App',
    components: {
      Header: defineAsyncComponent(
        () => import("@/components/todoListExample/Header.vue")
      ),
      List: defineAsyncComponent(
        () => import("@/components/todoListExample/List.vue")
      ),
      Footer: defineAsyncComponent(
        () => import("@/components/todoListExample/Footer.vue")
      ),
    },
    setup() {
      // const state = reactive<{todos: Todo[]}>({
      //   todos: [
      //     {id:1,title: '记单词',isCompleted: false},
      //     {id:2,title: '编程',isCompleted: true}
      //   ]
      // })
      const state = reactive < {
        todos: Todo[]
      } > ({
        todos: []
      })
      const key = 'todos_key'
      // 界面加载完毕后过一会后再读取数据
      onMounted(() => {
        setTimeout(() => {
          state.todos = readArray(key)
        }, 1000)
      })
      const addTodo = (todo: Todo) => {
        state.todos.unshift(todo)
      } // 添加数组的方法，放在数组头部
      const delTodo = (index: number) => {
        state.todos.splice(index, 1)
      } // 删除数据
      const updateTodo = (todo: Todo, isComplete: boolean) => {
        todo.isCompleted = isComplete
      } // 修改todo的isCompleted属性的状态，属性的修改应该让父组件来决定
      const checkAll = (isComplete: boolean) => {
        state.todos.forEach(todo => {
          todo.isCompleted = isComplete
        })
      }
      const clearAllCompletedTodos = () => {
        state.todos = state.todos.filter(todo => !todo.isCompleted)
      }
      // 监视操作: 如果todos数组的数据变化了，直接存储到浏览器的缓存中
      // watch(()=>state.todos,(value)=>{
      //   localStorage.setItem('todos_key',JSON.stringify(value))
      // },{deep:true}) 
      watch(() => state.todos, (value: Todo[]) => {
        saveArray(key, value as[])
      }, {
        deep: true
      })
      return {
        ...toRefs(state),
        addTodo,
        delTodo,
        updateTodo,
        checkAll,
        clearAllCompletedTodos
      }
    }
  })
</script>
<style lang="scss" scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
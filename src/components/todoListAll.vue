<template>
  <div class="todoListAll">
    <todoHeader @addSubmit="addSubmit" />
    <div class="listing">
      <h3>
        <span>进行中</span><span>{{ listing.length }}</span>
      </h3>
      <todoList :list="listing" />
    </div>
    <div class="listed">
      <h3>
        <span>已完成</span><span>{{ listed.length }}</span>
      </h3>
      <todoList :list="listed" />
    </div>
    <todoFooter @allDone="allDone" @delDoneAll="delDoneAll" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  reactive,
  onMounted,
} from "vue";
interface TodoItem {
  id: number;
  creationTime: string;
  updateTime: string;
  content: string;
  isSelect: boolean;
}
export default defineComponent({
  name: "todoListAll",
  components: {
    todoHeader: defineAsyncComponent(
      () => import("@/components/todoHeader.vue")
    ),
    todoList: defineAsyncComponent(() => import("@/components/todoList.vue")),
    todoFooter: defineAsyncComponent(
      () => import("@/components/todoFooter.vue")
    ),
  },
  setup() {
    onMounted(() => {
      listing.push(
        ...(JSON.parse(localStorage.getItem("listing") as string) || [])
      );
      listed.push(
        ...(JSON.parse(localStorage.getItem("listed") as string) || [])
      );
    });
    const listing: TodoItem[] = reactive([]);
    const listed: TodoItem[] = reactive([]);
    // 新增代办记录
    const addSubmit = (addItem: TodoItem) => {
      listing.push(addItem);
      localStorage.setItem("listing", JSON.stringify(listing));
    };
    // 删除已完成
    const delDoneAll = () => {
      console.log("delAll");
    };
    // 全部完成
    const allDone = () => {
      console.log("delAll");
    };

    return {
      listing,
      listed,
      addSubmit,
      delDoneAll,
      allDone,
    };
  },
});
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

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
    $saveStorage,
    $getStorage
  } from "../utils/localStorageUtil";
  import {
    defineComponent,
    defineAsyncComponent,
    reactive,
    onMounted,
    toRefs,
    watch,
    getCurrentInstance,
    ComponentInternalInstance
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
        () => import("@/components/todoListAll/todoHeader.vue")
      ),
      todoList: defineAsyncComponent(() => import("@/components/todoListAll/todoList.vue")),
      todoFooter: defineAsyncComponent(
        () => import("@/components/todoListAll/todoFooter.vue")
      ),
    },
    setup() {
      const {
        proxy
      } = getCurrentInstance() as ComponentInternalInstance;
      onMounted(() => {
        state.listed = $getStorage("listed")
        state.listing = $getStorage("listing")
      });
      const state = reactive < {
        listing: TodoItem[],
        listed: TodoItem[]
      } > ({
        listing: [],
        listed: []
      });
      // 新增代办记录
      const addSubmit = (addItem: TodoItem) => {
        state.listing.unshift(addItem);
      };
      // 删除已完成
      const delDoneAll = () => {
        state.listed = state.listed.filter(item => item.isSelect === false)
      };
      // 全部完成
      const allDone = () => {
        let allDoneList: TodoItem[] = JSON.parse(JSON.stringify([...state.listing.filter(item => item
          .isSelect === true)]))
        state.listed.unshift(...allDoneList.map(mapItem => {
          mapItem.isSelect = false
          mapItem.updateTime = (proxy as any).$day().format("YYYY-MM-DD HH:mm:ss")
          return mapItem
        }))
        console.log(state.listing.filter(item => item.isSelect === false))
        state.listing = state.listing.filter(item => item.isSelect === false)
      };
      watch(() => state.listing, (value: TodoItem[]) => {
        $saveStorage('listing', value as[])
        state.listing = $getStorage("listing")
      }, {
        deep: true
      })
      watch(() => state.listed, (value: TodoItem[]) => {
        $saveStorage('listed', value as[])
        state.listed = $getStorage("listed")
      }, {
        deep: true
      })
      return {
        ...toRefs(state),
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
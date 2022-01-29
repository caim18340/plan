<!-- layouts -->
<template>
  <div class="app-container">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
// import TabBar, { ITabList } from '@/components/TabBar.vue'
// import { useRoute } from 'vue-router'
// interface ILayoutState {
//   tabbars: Array<ITabList>
//   defaultActive: number
// }
export default defineComponent({
  name: 'layouts',
  // components: {
  //   TabBar
  // },
  setup() {
    // const route = useRoute()
    // const state: ILayoutState = reactive({
    //   tabbars: [
    //     { title: '首页', to: { name: 'Home' }, icon: 'home-o' },
    //     // { title: '案例', to: { name: 'Dome' }, icon: 'star-o' },
    //     { title: '关于我', to: { name: 'About' }, icon: 'user-o' }
    //   ],
    //   defaultActive: computed(() => {
    //     return state.tabbars.findIndex((item: ITabList) => {
    //       return item.to.name === route.name
    //     })
    //   })
    // })
    // const handleChange = (v: number) => {
    //   console.log('tab value:', v)
    // }

    return {
      // ...toRefs(state),
      // handleChange
    }
  }
})
</script>
<style lang="scss" scoped></style>

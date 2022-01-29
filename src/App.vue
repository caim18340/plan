<template>
  <router-view />
  <MobileConsole v-if="false" />
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue'
import { config } from '@/config/index'
import MobileConsole from '@/components/Common/MobileConsole/index.vue'
export default defineComponent({
  name: 'App',
  components: { MobileConsole },
  setup() {
    console.log('环境配置', config)
  }
})
</script>
<style lang="scss"></style>

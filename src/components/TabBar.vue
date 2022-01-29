<!-- TabBar -->
<template>
  <div class="tag">
    <van-tag
      plain
      closeable
      size="medium"
      :key="index"
      v-for="(item, index) in tabbars"
      :style="{ background: item.checked ? '#fff' : 'transparent' }"
      @close="close(index)"
      @click="onTouchStart(index)"
    >
      {{ item.value }}
    </van-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRef, inject, ref } from 'vue'
export default defineComponent({
  name: 'TabBar',
  props: {},
  setup(props, context) {
    const tabbars = inject('show')
    const submit = inject('submit')
    const close = (index: number) => {
      context.emit('close', index)
    }
    const onTouchStart = (index: number) => {
      context.emit('onTouchStart', index)
    }
    return {
      tabbars,
      close,
      submit,
      onTouchStart
    }
  }
})
</script>
<style lang="scss"></style>

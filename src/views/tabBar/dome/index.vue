<!-- demo -->
<template>
  <div class="form">
    <div class="form-top">
      <van-steps :active="active" active-icon="success" active-color="#38f">
        <van-step>计划生成前准备</van-step>
        <van-step>开始计划生成</van-step>
      </van-steps>
    </div>
    <div class="form-middle">
      <div class="beforePlan" v-if="active === 0">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field name="radio" label="主题选择:" label-align="right">
              <template #input>
                <van-radio-group v-model="theme" direction="horizontal" @change="changeTheme">
                  <van-radio name="1">默认主题</van-radio>
                  <van-radio name="2">自定义主题</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field name="radio" label="自定义头部:" label-align="right" v-if="theme === '2'">
              <template #input>
                <van-radio-group v-model="themeTop" direction="horizontal">
                  <van-radio name="1">头部1</van-radio>
                  <van-radio name="2">头部2</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field
              :label="'头部' + themeTop + '预览:'"
              v-if="themeTop === '1'"
              label-align="right"
            >
              <template #input>
                <van-image
                  width="200px"
                  height="90px"
                  fit="contain"
                  :src="require('../../../assets/bg_top.png')"
                />
              </template>
            </van-field>
            <van-field
              :label="'头部' + themeTop + '预览:'"
              v-if="themeTop === '2'"
              label-align="right"
            >
              <template #input>
                <van-image
                  width="200px"
                  height="90px"
                  fit="contain"
                  :src="require('../../../assets/bg_top1.png')"
                />
              </template>
            </van-field>
            <van-field name="radio" label="自定义尾部:" label-align="right" v-if="theme === '2'">
              <template #input>
                <van-radio-group v-model="themeBottom" direction="horizontal">
                  <van-radio name="1">尾部1</van-radio>
                  <van-radio name="2">尾部2</van-radio>
                  <van-radio name="3">尾部3</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field
              :label="'尾部' + themeBottom + '预览:'"
              v-if="themeBottom === '1'"
              label-align="right"
            >
              <template #input>
                <van-image
                  width="200px"
                  height="207px"
                  fit="contain"
                  :src="require('../../../assets/bg_bottom.png')"
                />
              </template>
            </van-field>
            <van-field
              :label="'尾部' + themeBottom + '预览:'"
              v-if="themeBottom === '2'"
              label-align="right"
            >
              <template #input>
                <van-image
                  width="200px"
                  height="215px"
                  fit="contain"
                  :src="require('../../../assets/bg_bottom1.png')"
                />
              </template>
            </van-field>
            <van-field
              :label="'尾部' + themeBottom + '预览:'"
              v-if="themeBottom === '3'"
              label-align="right"
            >
              <template #input>
                <van-image
                  width="200px"
                  height="218px"
                  fit="contain"
                  :src="require('../../../assets/bg_bottom3.png')"
                />
              </template>
            </van-field>
            <van-field :label="checked === '1' ? '默认预览' : '自定义预览'" label-align="right">
              <template #input>
                <van-image width="200px" height="355px" fit="contain" :src="image" />
              </template>
            </van-field>
          </van-cell-group>
        </van-form>
      </div>
      <div class="afterPlan" v-if="active === 1">
        <div class="top">
          <div class="about_top"></div>
          <div class="about_middle">
            <div v-for="(item, index) in list" :key="index" class="list">
              <div class="list-left">
                <span> {{ index + 1 }}. </span>
                <span>{{ item }}</span>
              </div>
              <van-icon name="passed" color="#5db878" />
            </div>
          </div>
          <div class="about_bottom"></div>
          <div class="userInfo">
            <div>
              测试
            </div>
            <div>
              {{ new Date() }}
            </div>
          </div>
        </div>
        <div class="bottom">
          <div>
            保存计划
          </div>
          <div>
            生成二维码
          </div>
        </div>
      </div>
    </div>
    <div class="form-bottom">
      <van-button round block type="primary" native-type="submit" @click="nextSubmit(1)">
        上一步
      </van-button>
      <van-button round block type="primary" native-type="submit" @click="nextSubmit(2)">
        下一步
      </van-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'demo',
  props: {},
  setup() {
    const router = useRouter()
    const arr = ref(router.currentRoute.value.query.arr)
    const theme = ref('1')
    const themeTop = ref('')
    const themeBottom = ref('')
    const active = ref(0)
    const nextSubmit = (val: number) => {
      if (val === 1) {
        if (active.value === 0) {
          router.go(-1)
          active.value = 0
          return
        }
        active.value--
      } else {
        active.value++
      }
    }
    const changeTheme = (val: any) => {
      if (val === '2') {
        themeTop.value = '1'
        themeBottom.value = '1'
      } else {
        themeTop.value = ''
        themeBottom.value = ''
      }
    }
    return {
      themeTop,
      themeBottom,
      arr,
      theme,
      active,
      nextSubmit,
      changeTheme
    }
  }
})
</script>
<style lang="scss" scoped>
.form {
  height: 100%;
  background: url('../../../assets/bottom.png');
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .form-top {
    height: 7%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .form-middle {
    overflow: scroll;
    width: 100%;
    position: absolute;
    flex: 1;
    top: 7%;
    left: 0;
    right: 0;
    bottom: 7%;
  }
  .form-bottom {
    @include flexbox();
    justify-content: center;
    height: 7%;
    width: 100%;
    color: #000;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>

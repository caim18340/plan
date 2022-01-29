/* eslint-disable prettier/prettier */
<!-- Home -->
<template>
  <div class="home-container">
    <div class="top"></div>
    <div class="middle">
      <van-collapse v-model="activeNames" class="box">
        <van-collapse-item title="选择计划" name="1" :is-link="false">
          <template #icon>
            <van-icon
              size="24"
              :name="activeNames.indexOf('1') !== -1 ? 'descending' : 'ascending'"
            />
          </template>
          <TabBar :tabbars="tabbars" @close="close" @onTouchStart="onTouchStart" />
          <van-tag @click="add" class="add">+</van-tag>
        </van-collapse-item>
        <van-collapse-item title="计划主题" name="2" :is-link="false">
          <template #icon>
            <van-icon
              size="24"
              :name="activeNames.indexOf('2') !== -1 ? 'descending' : 'ascending'"
            />
          </template>
          <van-form @submit="onSubmit">
            <van-cell-group inset>
              <van-field
                v-model="username"
                name="用户名"
                label="用户名:"
                label-align="right"
                placeholder="请填写用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <van-field
                v-model="result"
                is-link
                label-align="right"
                readonly
                name="calendar"
                label="日历:"
                placeholder="请点击选择日期"
                @click="showCalendar = true"
                :rules="[{ required: true, message: '请点击选择日期' }]"
              />
              <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
            </van-cell-group>
            <van-cell-group inset>
              <van-field name="radio" label="主题选择:" label-align="right">
                <template #input>
                  <van-radio-group
                    v-model="theme"
                    direction="horizontal"
                    @change="changeTheme"
                    icon-size="16px"
                  >
                    <van-radio name="1">默认主题</van-radio>
                    <van-radio name="2">自定义主题</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
              <van-field name="radio" label="自定义头部:" label-align="right" v-if="theme === '2'">
                <template #input>
                  <van-radio-group v-model="themeTop" direction="horizontal">
                    <van-radio name="1">头部1</van-radio>
                    <van-radio name="2" disabled>头部2</van-radio>
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
                    <van-radio name="4">尾部4</van-radio>
                    <van-radio name="5">尾部5</van-radio>
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
              <van-field
                :label="'尾部' + themeBottom + '预览:'"
                v-if="themeBottom === '4'"
                label-align="right"
              >
                <template #input>
                  <van-image
                    width="200px"
                    height="172px"
                    fit="contain"
                    :src="require('../../../assets/bg_bottom2.png')"
                  />
                </template>
              </van-field>
              <van-field
                :label="'尾部' + themeBottom + '预览:'"
                v-if="themeBottom === '5'"
                label-align="right"
              >
                <template #input>
                  <van-image
                    width="200px"
                    height="282px"
                    fit="contain"
                    :src="require('../../../assets/bg_bottom4.png')"
                  />
                </template>
              </van-field>
              <van-field :label="theme === '1' ? '默认预览' : '自定义预览'" label-align="right">
                <template #input>
                  <van-image
                    v-if="theme === '1'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/bg.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '1' && themeBottom === '1'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/1-1.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '1' && themeBottom === '2'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/1-2.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '1' && themeBottom === '3'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/1-3.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '1' && themeBottom === '4'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/1-4.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '1' && themeBottom === '5'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/1-5.png')"
                  />
                  <!-- <van-image
                    v-if="theme === '2' && themeTop === '2' && themeBottom === '1'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/2-1.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '2' && themeBottom === '2'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/2-2.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '2' && themeBottom === '3'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/2-3.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '2' && themeBottom === '4'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/2-4.png')"
                  />
                  <van-image
                    v-if="theme === '2' && themeTop === '2' && themeBottom === '5'"
                    width="200px"
                    height="355px"
                    fit="contain"
                    :src="require('../../../assets/2-5.png')"
                  /> -->
                </template>
              </van-field>
            </van-cell-group>
          </van-form>
        </van-collapse-item>
      </van-collapse>
      <van-popup
        class="show"
        v-model:show="show"
        closeable
        close-icon="close"
        @close="closed"
        :close-on-click-overlay="false"
      >
        <div class="submit" @click="submit"></div>
        <van-field
          v-model="text"
          placeholder="点击2022保存"
          clearable
          autofocus
          input-align="center"
        />
      </van-popup>
    </div>
    <div class="bottom" @click="getPlan">
      生成计划清单
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, provide, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast, Dialog } from 'vant'
import TabBar from '@/components/TabBar.vue'
export default defineComponent({
  name: 'Home',
  props: {},
  components: {
    TabBar
  },
  setup() {
    const router = useRouter()
    const clickTimes = ref(0)
    const show = ref(false)
    const flag = ref(-1)
    const text = ref('')
    const tabbars = ref([
      { value: '一场说走就走的旅行', checked: true },
      { value: '听一场演唱会', checked: true },
      { value: '早睡早起', checked: true },
      { value: '瘦五斤', checked: false }
    ])
    const activeNames = ref(['1', '2'])
    const add = () => {
      show.value = true
    }
    const close = (index: number) => {
      if (tabbars.value.length === 1) {
        Toast('至少保留一个')
        return
      }
      tabbars.value.splice(index, 1)
    }
    const submit = () => {
      if (!text.value) {
        Toast('请填写计划再点击哦')
        return
      }
      if (text.value.length > 11) {
        Toast('计划不能超过11个字哦')
        return
      }
      console.log(flag.value)
      if (flag.value === -1) {
        tabbars.value.push({ value: text.value, checked: false })
      } else {
        tabbars.value.forEach((item, index) => {
          if (flag.value === index) {
            item.value = text.value
          }
        })
      }
      show.value = false
    }
    const closed = () => {
      text.value = ''
      flag.value = -1
    }
    const onTouchStart = (index: number) => {
      clickTimes.value++
      if (clickTimes.value === 2) {
        clickTimes.value = 0
        show.value = true
        text.value = tabbars.value[index].value
        flag.value = index
      } else {
        setTimeout(() => {
          if (clickTimes.value === 1) {
            clickTimes.value = 0
            tabbars.value.forEach((item, idx) => {
              if (index === idx) {
                item.checked = !item.checked
              }
            })
          }
        }, 250)
      }
    }
    const theme = ref('1')
    const themeTop = ref('')
    const themeBottom = ref('')
    const username = ref('')
    const result = ref('')
    const showCalendar = ref(false)
    const onConfirm = (date: any) => {
      console.log(date)
      result.value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      showCalendar.value = false
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
    const goAbout = (arr: string[]) => {
      router.push({
        path: '/about',
        query: {
          arr,
          theme: theme.value,
          themeTop: themeTop.value,
          themeBottom: themeBottom.value,
          username: username.value,
          result: result.value
        }
      })
    }
    const getPlan = () => {
      if (!username.value) {
        Toast('请填写用户名!')
        return
      }
      if (!result.value) {
        Toast('请选择日期!')
        return
      }
      const arr: string[] = []
      tabbars.value.forEach((item, idx) => {
        if (item.checked) {
          arr.push(item.value)
        }
      })
      if (arr.length) {
        goAbout(arr)
      } else {
        Toast('请至少选择三个计划呦!')
      }
    }
    provide('show', tabbars)
    provide('submit', tabbars)
    return {
      result,
      onConfirm,
      showCalendar,
      username,
      themeTop,
      themeBottom,
      theme,
      clickTimes,
      flag,
      text,
      show,
      tabbars,
      activeNames,
      add,
      close,
      submit,
      closed,
      onTouchStart,
      getPlan,
      goAbout,
      changeTheme
    }
  }
})
</script>
<style lang="scss">
.home-container {
  height: 100%;
  background: url('../../../assets/bottom.png');
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .top {
    height: 32%;
    width: 100%;
    background: url('../../../assets/top.png');
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .middle {
    overflow: scroll;
    width: 100%;
    position: absolute;
    flex: 1;
    top: 32%;
    left: 0;
    right: 0;
    bottom: 7%;
    .box {
      .van-cell,
      .van-collapse-item__content {
        background: transparent;
      }
      .van-cell {
        font-size: 20px;
        font-weight: 900;
        color: #e12323;
        .van-cell__title {
          span {
            padding-left: 5px;
          }
        }
      }
      .van-tag {
        margin: 5px;
        color: #969799;
        font-size: 16px;
        padding: 10px 8px;
      }
      .add {
        background: url('../../../assets/enter.png');
        @include flexbox();
        justify-content: center;
        padding: 0;
        width: 36px;
        height: 36px;
        font-size: 22px;
      }
    }
    .show {
      width: 250px;
      height: 250px;
      background: url('../../../assets/input.png');
      background-size: 100%;
      position: fixed;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .van-cell {
        width: 180px;
        height: 50px;
        background: transparent;
        margin-bottom: 45px;
        font-size: 22px;
      }
      .submit {
        width: 80px;
        height: 50px;
        background: transparent;
      }
      .van-popup__close-icon {
        color: #e12323;
        right: 10px;
      }
    }
    .van-form {
      .van-cell-group {
        background: transparent;
        .van-field__label {
          width: 100px;
          span {
            font-size: 16px;
            color: #000;
          }
        }
      }
      .van-field__control {
        font-size: 16px;
      }
      .van-radio {
        padding-bottom: 5px;
        padding-right: 5px;
        .van-radio__label {
          font-size: 14px;
          color: #969799;
        }
      }
      .van-calendar {
        width: 100%;
      }
    }
  }
  .bottom {
    @include flexbox();
    justify-content: center;
    height: 7%;
    width: 100%;
    background: url('../../../assets/enter.png');
    border-top: 1px solid #fb802f;
    color: #000;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>

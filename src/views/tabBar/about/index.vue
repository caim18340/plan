<!-- about -->
<template>
  <div :class="top">
    <div class="top">
      <div :class="middle"></div>
      <div class="about_middle">
        <div v-for="(item, index) in list" :key="index" class="list">
          <div class="list-left">
            <span> {{ index + 1 }}. </span>
            <span>{{ item }}</span>
          </div>
          <van-icon name="passed" color="#5db878" />
        </div>
      </div>
      <div :class="bottom">
        <div :class="userInfo">
          <div>
            {{ username }}
          </div>
          <div>
            {{ result }}
          </div>
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
</template>
<script lang="ts">
import { computed, defineComponent, provide, toRefs, ref, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { Toast, Dialog } from 'vant'
export default defineComponent({
  name: 'about',
  props: {},
  setup() {
    const router = useRouter()
    const show = ref(true)
    const text = ref('')
    const list = ref(router.currentRoute.value.query.arr)
    const theme = router.currentRoute.value.query.theme
    const themeTop = router.currentRoute.value.query.themeTop
    const themeBottom = router.currentRoute.value.query.themeBottom
    const username = router.currentRoute.value.query.username
    const result = router.currentRoute.value.query.result
    const top = ref('')
    const middle = ref('')
    const bottom = ref('')
    const userInfo = ref('')
    if (theme === '1') {
      top.value = 'about_container bg_bottom'
      middle.value = 'about_top about_top1'
      bottom.value = 'about_bottom'
      userInfo.value = 'userInfo userInfo1'
    } else if (theme === '2') {
      userInfo.value = 'userInfo userInfo2'
      top.value = 'about_container bg_middle'
      if (themeTop === '1') {
        middle.value = 'about_top about_top2'
      } else if (themeTop === '2') {
        middle.value = 'about_top about_top3'
      }
      if (themeBottom === '1') {
        bottom.value = 'about_bottom about_bottom1'
      } else if (themeBottom === '2') {
        bottom.value = 'about_bottom about_bottom2'
      } else if (themeBottom === '3') {
        bottom.value = 'about_bottom about_bottom3'
      } else if (themeBottom === '4') {
        bottom.value = 'about_bottom about_bottom4'
      } else if (themeBottom === '5') {
        bottom.value = 'about_bottom about_bottom5'
      }
    }
    const submit = () => {
      if (!text.value) {
        Toast('请填写再点击哦')
        return
      }
      show.value = false
    }
    return {
      username,
      result,
      userInfo,
      bottom,
      middle,
      top,
      list,
      show,
      text
    }
  }
})
</script>
<style lang="scss" scoped>
.bg_bottom {
  background: url('../../../assets/bottom.png');
}
.bg_middle {
  background: url('../../../assets/bg_middle.png');
}
.about_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: scroll;
    height: 100%;
  }
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8%;
    background: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 110px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      font-size: 18px;
    }
    div:nth-child(1) {
      background: #f1e34f;
      color: #0c205f;
      border-radius: 5% 10% 10% 5%;
      border-top: 3px solid #0c205f;
      border-left: 3px solid #0c205f;
      border-right: 7px solid #0c205f;
      border-bottom: 7px solid #0c205f;
    }
    div:nth-child(2) {
      background: #37bdd6;
      color: #fff;
      border-radius: 5% 10% 10% 5%;
      border-top: 3px solid #0d2160;
      border-left: 3px solid #0d2160;
      border-right: 7px solid #0d2160;
      border-bottom: 7px solid #0d2160;
    }
  }
  .about_top2 {
    background: url('../../../assets/bg_top.png');
  }
  .about_top3 {
    background: url('../../../assets/bg_top1.png');
  }
  .about_top {
    height: 25%;
    width: 100%;
    background-size: 100%;
  }
  .about_top1 {
    background: url('../../../assets/top.png');
    background-size: 100%;
    height:32%;
  }
  .about_middle {
    width: 100%;
    flex: 1;
    padding-bottom: 30px;
    .list {
      height: 30px;
      padding: 8px 66px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .list-left {
        span:nth-child(1) {
          padding-right: 3px;
        }
        span:nth-child(2) {
          font-size: 18px;
          color: #0c205f;
        }
      }
    }
  }
  .about_bottom {
    width: 100%;
    background-size: 100%;
    position: relative;
    .userInfo1 {
      background: transparent;
    }
    .userInfo2 {
      background: url('../../../assets/bg_middle.png');
    }
    .userInfo {
      position: absolute;
      top: -25px;
      width: 100%;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      div {
        padding-right: 10px;
        text-align: right;
        height: 20px;
        line-height: 20px;
        font-size: 18px;
        color: #0c205f;
        width: 30%;
        text-align: center;
      }
    }
  }
  .about_bottom1 {
    background: url('../../../assets/bg_bottom.png');
    background-size: 100%;
    height: 77%;
  }
  .about_bottom2 {
    background: url('../../../assets/bg_bottom1.png');
    background-size: 100%;
    height: 77%;
  }
  .about_bottom3 {
    background: url('../../../assets/bg_bottom3.png');
    background-size: 100%;
    height: 77%;
  }
  .about_bottom4 {
    background: url('../../../assets/bg_bottom2.png');
    background-size: 100%;
    height: 77%;
  }
  .about_bottom5 {
    background: url('../../../assets/bg_bottom4.png');
    background-size: 100%;
    height: 77%;
  }
}
</style>

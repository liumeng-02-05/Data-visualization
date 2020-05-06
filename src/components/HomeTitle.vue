<template>
  <div class="heanderTitle">
    <div class="heanderTitle-top">
      <div class="headerName">
        <h2>全国业务态势</h2>
        <p>{{ date }} {{ time }}</p>
      </div>
      <div class="headerContent" v-for="item of data" :key="item.id">
        <HeaderTemplate
          :src="item.src"
          :number="item.number"
          :company="item.company"
        >
        </HeaderTemplate>
      </div>
    </div>
    <div class="heanderTitle-tab">
      <div
        class="heanderTitle-tab-conetnet"
        v-for="item in homeTab"
        :key="item.id"
        :class="{ 'heanderTitle-tab-select': item.id === tabActive }"
        @click="handleTabClick(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
    <HomeMap></HomeMap>
    <div class="heanderTitle-message-roll">
      <div class="heanderTitle-message-roll-top">
        <div class="message" v-for="item in messageRole" :key="item.id">
          {{ item.message }}
        </div>
      </div>
      <div class="heanderTitle-message-roll-bottom">
        <!-- 测试版 -->
        <!-- <Tempalte></Tempalte> -->

        <!-- <div class="message" v-for="item in messageRole" :key="item.id">
          {{ item.message }} -->
        <!-- </div> -->
      </div>
    </div>
    <div class="heanderTitle-bottom">
      省 ｜ 市 ｜ 县 ｜ 地区代码
    </div>
  </div>
</template>

<script>
import HeaderTemplate from "@/components/base/HeaderTemplate";
import HomeMap from "@/components/base/HomeMap";
// import Tempalte from "@/components/Tempalte";
import { clock as useClock } from "../utils/clock";
import { ref } from "vue";
export default {
  components: {
    HeaderTemplate,
    HomeMap
    //  Tempalte
  },
  setup() {
    const { date, time } = useClock();
    const data = [
      { id: 1, src: "1", number: "10,245", company: "万元" },
      { id: 2, src: "2", number: "798", company: "TB" },
      { id: 3, src: "3", number: "10,245", company: "km" },
      { id: 4, src: "4", number: "25,675", company: "min" }
    ];
    const homeTab = ref([
      { id: 1, name: "全国" },
      { id: 2, name: "京津翼地区" },
      { id: 3, name: "长江三角洲" },
      { id: 4, name: "珠江三角洲" }
    ]);
    const setInterval =
      (() => {
        if (this.activeIndex < this.prizeList.length) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      },
      1000);
    const tabActive = ref(1);
    const handleTabClick = data => {
      tabActive.value = data;
    };
    const messageRole = ref([
      { id: 1, message: "这是一段内容1" },
      { id: 2, message: "这是一段内容2" },
      { id: 3, message: "这是一段内容3" },
      { id: 4, message: "这是一段内容4" },
      { id: 5, message: "这是一段内容5" },
      { id: 6, message: "这是一段内容6" },
      { id: 7, message: "这是一段内容7" },
      { id: 8, message: "这是一段内容8" },
      { id: 9, message: "这是一段内容9" },
      { id: 10, message: "这是一段内容10" },
      { id: 1, message: "这是一段内容1" },
      { id: 2, message: "这是一段内容2" }
    ]);
    return {
      date,
      time,
      data,
      homeTab,
      tabActive,
      handleTabClick,
      messageRole,
      setInterval
    };
  }
};
</script>

<style lang="scss" scoped>
.heanderTitle {
  position: relative;
  .heanderTitle-top {
    display: flex;
    justify-content: flex-start;
    .headerName {
      text-align: left;
      width: 400px;
      h2 {
        font-size: 46px;
        color: #f8f8f8;
        font-style: 900;
      }
      p {
        font-size: 14px;
        color: rgba(146, 188, 251, 0.7);
        line-height: 51px;
      }
    }
    .headerContent {
      margin-right: 25px;
      &:last-child {
        margin: 0;
      }
    }
  }
  .heanderTitle-tab {
    height: 16px;
    display: flex;
    .heanderTitle-tab-conetnet {
      width: 25%;
      font-size: 12px;
      text-align: center;
      line-height: 16px;
      color: #a6a6a6;
      border-radius: 3px;
    }
    .heanderTitle-tab-select {
      background: #fd3c64;
      color: #fff;
    }
  }
  .heanderTitle-message-roll {
    position: absolute;
    right: 20px;
    top: 150px;
    .heanderTitle-message-roll-top {
      overflow: hidden;
      height: 32px;
      .message {
        text-align: right;
        color: #ff4949;
        font-size: 11px;
        opacity: 0.5;
        line-height: 32px;
        animation: myMove 4s linear infinite;
        animation-fill-mode: forwards;
      }
    }

    .heanderTitle-message-roll-bottom {
      width: 120px;
      overflow: hidden;
      height: 192px;
      margin-top: 10px;
      .message {
        width: 120px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 32px;
        line-height: 32px;
        text-align: right;
        color: #525d73;
        font-size: 11px;
        animation: myMove2 10s linear infinite;
        animation-fill-mode: forwards;
      }
    }
    @keyframes myMove2 {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-170px);
      }
    }
    @keyframes myMove {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-278px);
      }
    }
  }
  .heanderTitle-bottom {
    position: absolute;
    bottom: 20px;
    right: 20px;
    border: 1px solid #d56673;
    text-align: left;
    font-size: 14px;
    color: #69799c;
    padding: 10px;
  }
}
</style>

<template>
  <div class="right-top">
    <div class="right-top-name">
      <span></span>
      <p>Typesmoething</p>
    </div>
    <div class="right-top-show">
      <div class="right-top-content" v-for="item in data" :key="item.id">
        <RIghtTopTemplate
          :title="item.title"
          :number="item.number"
        ></RIghtTopTemplate>
      </div>
    </div>
    <div class="right-top-Speed">
      <div class="right-top-Speed-left">
        <p>Title</p>
        <p class="template-title-number">
          <span>73</span>
          <span class="Company">%</span>
        </p>
      </div>
      <div class="right-top-Speed-right">
        <!-- <div class="left"></div> -->
        <Progress
          :progressData="progressData"
          style="margin:0 3px;flex:1"
        ></Progress>
        <!-- <div class="right"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import RIghtTopTemplate from "@/components/base/RIghtTopTemplate";
import Progress from "@/components/base/Progress";
import { ref } from "vue";
export default {
  components: {
    RIghtTopTemplate,
    Progress
  },
  setup() {
    const progressData = ref(75);
    const data = ref([
      { id: 1, title: "Title", number: "56" },
      { id: 2, title: "Title", number: "44" },
      { id: 3, title: "Title", number: "22" }
    ]);
    return {
      data,
      progressData
    };
  }
};
</script>

<style lang="scss" scoped>
.right-top {
  position: relative;
  width: 100%;
  height: 276px;
  box-sizing: border-box;
  padding: 0 30px 0;
  // background: url("../../public/img/rightBorder.png") no-repeat center;
  // background-size: 496px 276px;
  pointer-events: auto;
  border-radius: 0px;
  border-style: solid;
  border-image: url("../../public/img/rightBorder.png") 32 37 fill / 32px 37px /
    0 stretch;
  border-width: 1px;
  background: none;
  filter: blur(0px);
  backdrop-filter: blur(0px);
  background-color: rgba(13, 215, 239, 0.06);
  box-sizing: border-box;
  .right-top-name {
    font-size: 14px;
    text-align: left;
    color: #00c0ff;
    line-height: 50px;
    display: flex;
    align-items: center;
    span {
      width: 8px;
      height: 8px;
      background: #00c0ff;
      display: inline-block;
      margin: 3px 8px 0 0;
    }
  }
  .right-top-show {
    display: flex;
    margin-top: 10px;
    .right-top-content {
      margin-left: 30px;
      &:first-child {
        margin: 0;
      }
    }
  }
  .right-top-Speed {
    height: 76px;
    margin-top: 20px;
    text-align: left;
    display: flex;
    align-items: center;
    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }
    .template-title-number {
      font-size: 30px;
      color: #62a5f4;
      font-family: Acens;
      span {
        font-style: italic;
      }
      .Company {
        font-size: 14px;
      }
    }
    .right-top-Speed-right {
      width: 76px;
      margin-left: 10px;
      width: 348px;
      display: flex;
      align-items: center;
      // .left,
      // .right {
      //   width: 5px;
      //   height: 30px;
      //   border: 1px solid rgb(57, 65, 77);
      //   display: inline-block;
      // }
    }
  }
}
</style>

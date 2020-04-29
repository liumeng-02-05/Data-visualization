<template>
  <div class="right-centent">
    <div class="right-centent-message">
      <span></span>
      <p>Typesomething</p>
    </div>
    <div class="right-content-pei">
      <div class="pei-show" v-for="item in peiData" :key="item.id">
        <RightCenterPei :peiData="item.peiData" :id="item.id"></RightCenterPei>
      </div>
    </div>
    <RightCenterBar
      :fileName="fileName"
      :barData="barData"
      :barData2="barData2"
    ></RightCenterBar>
    <RightCenterLine
      style="marginTop:10px"
      :lineXaxis="lineXaxis"
      :lineData1="lineData1"
      :lineData2="lineData2"
    ></RightCenterLine>
  </div>
</template> 

<script>
import RightCenterPei from "@/components/base/RightCenterPei";
import RightCenterBar from "@/components/base/RightCenterBar";
import RightCenterLine from "@/components/base/RightCenterLine";
import { ref } from "vue";
export default {
  components: { RightCenterPei, RightCenterBar, RightCenterLine },
  setup() {
    const peiData = ref([
      { id: 1, peiData: 55.0 },
      { id: 2, peiData: 46.0 },
      { id: 3, peiData: 65.0 }
    ]);
    const fileName = ref(["浙江", "辽宁", "吉林", "黑龙江", "安徽"]);
    const barData = ref([70, 34, 60, 78, 69]);
    const barData2 = ref([10, 13, 11, 34, 90, 30, 10]);
    const lineXaxis = ref(["01/01", "04/01", "07/01", "10/01", "01/01"]);
    const lineData1 = ref([220, 182, 191, 234, 290, 330, 310]);
    const lineData2 = ref([800, 20, 500, 800, 300, 600, 500]);
    return {
      peiData,
      fileName,
      barData,
      barData2,
      lineXaxis,
      lineData1,
      lineData2
    };
  }
};
</script>

<style lang="scss" scoped>
.right-centent {
  margin-top: 10px;
  padding: 0 10px;
  padding-bottom: 15px;
  box-sizing: border-box;
  // background: url("../../public/img/rightBorder.10.png") repeat center;
  // background-size: 100%;
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
  .right-centent-message {
    font-size: 14px;
    text-align: left;
    color: #00c0ff;
    line-height: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin-left: 20px;
    span {
      width: 8px;
      height: 8px;
      background: #00c0ff;
      display: inline-block;
      margin: 3px 8px 0 0;
    }
  }
  .right-content-pei {
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    .pei-show {
      height: 170px;
      width: 152px;
    }
  }
}
</style>

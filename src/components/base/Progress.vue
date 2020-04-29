<template>
  <div class="progress">
<<<<<<< HEAD
    <!-- 这个是关于echarts的图表设置 现在改为使用图片展示 -->
=======
>>>>>>> 数据可视化提交
    <!-- <div id="progressEcharts" :style="{ width: '100%', height: '30px' }"></div> -->
    <div
      class="-datav-wraper"
      style='width: 348px;  pointer-events: auto; font-family: "Microsoft Yahei";'
    >
      <div class="percentage-bar" style="border:none">
        <div class="bar-box" style="padding: 0px 2px;">
          <span
            class="right"
            style="position: relative; width: 1.5%; float: right; height: 36px;"
            ><i
              class="right-before"
              style="position: absolute; width: 100%; height: 100%; border: 1px solid rgb(57, 65, 77); border-radius: 1px; box-sizing: border-box;"
            ></i
          ></span>
          <span
            class="left"
            style="position: relative; width: 1.5%; float: left; height: 36px;"
            ><i
              class="left-before"
              style="position: absolute; width: 100%; height: 100%; border: 1px solid rgb(57, 65, 77); border-radius: 1px; box-sizing: border-box;"
            ></i
          ></span>
          <div class="bar" style="width: 97%; margin: 0px auto;">
            <div
              class="inner"
              style="border-radius: 1px; border: 1px solid rgb(57, 65, 77); padding: 2px; position: relative; margin: 0px 3px; box-sizing: content-box; height: 30px;"
            >
              <svg
                class="dotted-line"
                style="width: 100%; height: 100%; display: inherit;"
              >
                <defs>
                  <linearGradient
                    id="gradientsvg-path-ohglilzcva"
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                  >
                    <stop offset="0%" stop-color="#62a5f4"></stop>
                    <stop offset="100%" stop-color="#fd3c64"></stop>
                  </linearGradient>
                  <clipPath id="svg-path-ohglilzcva">
                    <rect
                      x="0"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="9.170704225352113"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="18.341408450704225"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="27.51211267605634"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="36.68281690140845"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="45.85352112676056"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="55.02422535211268"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="64.19492957746479"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="73.3656338028169"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="82.53633802816901"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="91.70704225352112"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="100.87774647887323"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="110.04845070422536"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="119.21915492957747"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="128.38985915492958"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="137.56056338028168"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="146.7312676056338"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="155.90197183098593"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="165.07267605633803"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="174.24338028169015"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="183.41408450704225"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="192.58478873239437"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="201.75549295774647"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="210.9261971830986"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="220.09690140845072"
                      y="0"
                      width="8.170704225352113"
                      height="100%"
                    ></rect>
                    <rect
                      x="229.26760563380282"
                      y="0"
                      width="8.391194366197176"
                      height="100%"
                    ></rect>
                  </clipPath>
                </defs>
                <rect
                  id="rect"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#gradientsvg-path-ohglilzcva)"
                  clip-path="url(#svg-path-ohglilzcva)"
                  style="width: 73%;"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Echarts from "echarts";
import { onMounted } from "vue";
export default {
  props: {
    progressData: {
      type: Number
    }
  },
  setup(props) {
    const drawLine = () => {
      // 基于准备好的dom，初始化echarts实例
      if (!document.getElementById("progressEcharts")) {
        return;
      }
      let myChart = Echarts.init(document.getElementById("progressEcharts"));
      // 绘制图表
      var g_cellBar0_y =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAoCAYAAAAhf6DEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA6SURBVEhLY2x8/vY/A4mg3zwcTDOBSTLBqGYSwahmEsGoZhLBqGYSwahmEsGoZhLBqGYSwZDUzMAAAJldBMF2UASmAAAAAElFTkSuQmCC";
      var g_cellBarImg0_y = new Image();
      g_cellBarImg0_y.src = g_cellBar0_y;
      myChart.setOption({
        grid: {
          left: 0,
          right: 0
        },
        yAxis: {
          type: "category",
          show: false,
          splitNumber: 1,
          splitLine: {
            show: true
          }
        },
        xAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [props.progressData],
            type: "bar",
            barWidth: 30,
            itemStyle: {
              color: {
                image: g_cellBar0_y,
                repeat: "repeat-x"
              }
              // color: new Echarts.graphic.LinearGradient(
              //   0,
              //   0,
              //   1,
              //   1,
              //   [
              //     {
              //       offset: 0.2,
              //       color: "rgba(98, 165, 244,.9)"
              //     },
              //     {
              //       offset: 0.9,
              //       color: "rgba(253, 60, 100,.9)"
              //     }
              //   ],
              //   false
              // )
            }
          }
        ]
      });
    };
    onMounted(() => {
      drawLine();
    });
    return {
      drawLine
    };
  }
};
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  // border: 1px solid rgb(57, 65, 77);
  box-sizing: border-box;
}
</style>

<template>
  <div class="right-center-pei-template">
    <img src="../../../public/img/border.png" alt="" />
    <div :id="'pei' + id" style="width:152px;height:144px;"></div>
    <p class="message">Title</p>
  </div>
</template>

<script>
import Echarts from "echarts";
import PeiImg from "../../../public/img/border.png";
import { onMounted } from "vue";
export default {
  props: {
    peiData: {
      type: Number
    },
    id: {
      type: Number
    }
  },
  setup(props) {
    const drawLine = () => {
      // 基于准备好的dom，初始化echarts实例
      if (!document.getElementById(`pei${props.id}`)) {
        return;
      }
      let myChart = Echarts.init(document.getElementById(`pei${props.id}`));
      // 绘制图表
      var g_cellBar0_y = PeiImg;
      var g_cellBarImg0_y = new Image();
      g_cellBarImg0_y.src = g_cellBar0_y;
      myChart.setOption({
        series: [
          {
            type: "pie",
            clockWise: true,
            radius: [58, 67],
            startAngle: 90,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            z: 2,
            hoverAnimation: false,
            data: [
              {
                value: props.peiData,
                name: "invisible",
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: "#7995b5",
                        align: "center",
                        fontSize: 24
                      }
                    },
                    formatter: function(params) {
                      return "{a|" + params.value + "}" + " {a|%}";
                    },
                    position: "center",
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#f92657"
                  }
                }
              },
              {
                value: 100 - Number(props.peiData),
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "rgba(255,255,255,0.1)" //未完成的圆环的颜色
                  }
                }
              }
            ]
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
.right-center-pei-template {
  position: relative;
  height: 170px;
  width: 152px;
  img {
    width: 152px;
    height: 144px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .message {
    font-size: 14px;
    color: #717984;
    text-align: center;
    line-height: 30px;
  }
}
</style>

<template>
  <div id="right-center-bar" style="width:473px;height:194px"></div>
</template>

<script>
import Echarts from "echarts";
import { onMounted } from "vue";
export default {
  props: {
    fileName: {
      type: Array
    },
    barData: {
      type: Array
    },
    barData2: {
      type: Array
    }
  },
  setup(props) {
    const drawLine = () => {
      // 基于准备好的dom，初始化echarts实例
      if (!document.getElementById("right-center-bar")) {
        return;
      }
      let myChart = Echarts.init(document.getElementById("right-center-bar"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "Title",
          show: true,
          padding: [10, 0, 0, 20],
          textStyle: {
            color: "rgba(146, 188, 251, 0.7)",
            fontSize: 16
          }
        },
        grid: {
          right: "3%",
          top: "15%",
          left: "2%",
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#687487"
            },
            fontSize: 14
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            show: true,
            data: props.fileName,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#687487",
              fontSize: 12
            }
          }
        ],
        series: [
          {
            name: "空白列",
            type: "bar",
            yAxisIndex: 0,
            data: [0, 0, 0, 0, 0],
            barMinHeight: 2,
            stack: "bar",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)"
              }
            }
          },
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: props.barData,
            stack: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: 10,
                color: new Echarts.graphic.LinearGradient(0, 1, 1, 0, [
                  {
                    offset: 0,
                    color: "#81086b"
                  },
                  {
                    offset: 1,
                    color: "#cb2c34"
                  }
                ])
              }
            }
          },
          {
            name: "",
            type: "bar",
            stack: "bar",
            barWidth: 20,
            data: props.barData2,
            itemStyle: {
              normal: {
                barBorderRadius: 10,
                shadowColor: "#5600d6",
                shadowOffsetX: -10,
                color: new Echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: "#5600d6"
                  },
                  {
                    offset: 0.5,
                    color: "#5600d6"
                  },
                  {
                    offset: 1,
                    color: "#ba00a9"
                  }
                ])
              }
            }
          },
          {
            name: "框",
            type: "bar",
            barGap: "-120%",
            yAxisIndex: 0,
            barWidth: 25,
            data: [200, 200, 200, 200, 200], // 暂时保留 后期直接两个数组的最大值
            itemStyle: {
              normal: {
                color: "none",
                borderColor: "#304770",
                borderWidth: 2,
                barBorderRadius: 10
              }
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
.right-center-bar {
  height: 164px;
}
</style>

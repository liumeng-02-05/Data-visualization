<template>
  <div id="right-center-line" style="width:473px;height:212px"></div>
</template>

<script>
import Echarts from "echarts";
import { onMounted } from "vue";
export default {
  props: {
    lineXaxis: {
      type: Array
    },
    lineData1: {
      type: Array
    },
    lineData2: {
      type: Array
    }
  },
  setup(props) {
    const drawLine = () => {
      // 基于准备好的dom，初始化echarts实例
      if (!document.getElementById("right-center-line")) {
        return;
      }
      let myChart = Echarts.init(document.getElementById("right-center-line"));
      // 绘制图表
      myChart.setOption({
        grid: {
          right: "5%",
          top: "20%",
          left: "2%",
          bottom: 0,
          containLabel: true
        },
        title: {
          text: "Title",
          show: true,
          padding: [10, 0, 0, 20],
          textStyle: {
            color: "rgba(146, 188, 251, 0.7)",
            fontSize: 16
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 2
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#687487"
            },
            fontSize: 14
          },
          data: props.lineXaxis
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#687487"
            },
            fontSize: 14
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              width: 1,
              color: "#3c64a7"
            }
          }
        },
        series: [
          {
            name: "",
            type: "line",
            symbol: "circle",
            symbolSize: 4,
            data: props.lineData1,
            color: "#2f9ea0",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1,
                  color: "#9a2435"
                }
              }
            },
            areaStyle: {
              normal: {
                color: new Echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(133, 33, 53, 0.3)"
                    },
                    {
                      offset: 0.9,
                      color: "rgba(133, 33, 53, 0.4)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            }
          },
          {
            name: "",
            type: "line",
            symbol: "circle",
            symbolSize: 4, //拐点圆的大小
            color: "#5e283a",
            smooth: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1,
                  color: "#00c0ff",
                  type: "dotted" //'dotted'虚线 'solid'实线
                }
              }
            },
            data: props.lineData2
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

<style lang="scss" scoped></style>

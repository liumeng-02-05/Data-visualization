<template>
  <div id="home-bottom-scatter" style="width:808px;height:120px"></div>
</template>

<script>
import Echarts from "echarts";
import { onMounted } from "vue";
export default {
  setup() {
    const drawLine = () => {
      // 基于准备好的dom，初始化echarts实例
      if (!document.getElementById("home-bottom-scatter")) {
        return;
      }
      let myChart = Echarts.init(
        document.getElementById("home-bottom-scatter")
      );
      const data = [
        [
          [11, 5],
          [14, 4],
          [17, 4],
          [17, 4],
          [13, 4],
          [20, 4],
          [12, 4],
          [19, 7]
        ],
        [
          [14, 4],
          [18, 4],
          [13, 6],
          [17, 5],
          [12, 6],
          [10, 7]
        ]
      ];
      // 绘制图表

      myChart.setOption({
        grid: {
          left: "10%",
          right: "15%",
          top: 0,
          bottom: "20%",
          containLabel: true
        },
        singleAxis: {
          type: "category",
          height: 10,
          top: 50,
          // splitNumber: 11,
          splitLine: {
            show: false
          },
          // 底部显示的是分割线还是数据信息  这边展示的是分割线 下面关于数据信息需要注释
          // 如果底部展示的是数据信息  x轴上的信息需要注释 下面的数据信息需要打开
          axisLine: {
            lineStyle: {
              color: "#9399a3"
            }
          }
        },
        series: [
          {
            name: "",
            coordinateSystem: "singleAxis",
            data: data[0],
            type: "scatter",
            symbolOffset: [0, "20%"],
            symbolSize: function(dataItem) {
              return dataItem[1] * 7;
            },
            label: {
              show: false
              // 数据信息的展示
              // show: true,
              // position: "bottom",
              // distance: 5,
              // color: "#77828c",
              // formatter: function(a) { // 如果两个数据有相同的数据只需要展示一条
              //   var number = a.value[0];
              //   const arr = [];
              //   for (var i = 0; i < data[1].length; i++) {
              //     arr.push(data[1][i][0]);
              //   }
              //   if (arr.indexOf(number) == -1) {
              //     return number;
              //   } else {
              //     return "";
              //   }
              // }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: "rgba(204, 46, 65,.8)"
            }
          },
          {
            name: "",
            data: data[1],
            type: "scatter",
            coordinateSystem: "singleAxis",
            symbolOffset: [0, "20%"],
            symbolSize: function(dataItem) {
              return dataItem[1] * 7;
            },
            label: {
              show: false
              // 数据信息的展示
              // show: true,
              // position: "bottom",
              // distance: 5,
              // color: "#77828c"
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(25, 100, 150, 0.5)",
              shadowOffsetY: 5,
              color: "rgba(25, 183, 207,.5)"
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

<style lang="scss" scoped></style>

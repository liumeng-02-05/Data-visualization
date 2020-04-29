<template>
  <div class="home-map">
    <div id="home-map" style="width:1200px;height:812px"></div>
  </div>
</template>

<script>
import Echarts from "echarts";
import "echarts/map/js/china.js"; //node_modules中
import { onMounted } from "vue";
import { map, Province, convertData, geoCoordMap } from "../../utils/map";
export default {
  setup() {
    const drawLine = () => {
      // 基于准备好的dom，初始化echarts实例
      if (!document.getElementById("home-map")) {
        return;
      }
      let myChart = Echarts.init(document.getElementById("home-map"));
      var newData = [];
      for (let i = 0; i < map.length; i++) {
        newData.push({
          label: map[i].name,
          color: map[i].color,
          start: i + 1,
          end: i + 1
        });
      }
      const newData2 = [];
      newData2.push({
        name: "南海诸岛",
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            opacity: 0,
            label: {
              show: false
            }
          }
        }
      });
      var BJData = [
        [{ name: "北京" }, { name: "上海", value: 95, select: true }],
        [{ name: "北京" }, { name: "广州", value: 90, select: true }],
        [{ name: "北京" }, { name: "大连", value: 80 }],
        [{ name: "北京" }, { name: "南宁", value: 70 }],
        [{ name: "北京" }, { name: "南昌", value: 60 }],
        [{ name: "北京" }, { name: "拉萨", value: 50 }],
        [{ name: "北京" }, { name: "长春", value: 40 }],
        [{ name: "北京" }, { name: "包头", value: 30 }],
        [{ name: "北京" }, { name: "重庆", value: 20 }],
        [{ name: "北京" }, { name: "常州", value: 10 }],
        [{ name: "北京" }, { name: "合肥", value: 10, select: true }]
      ];
      // var planePath =
      //   "path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705";

      var series = [];
      [["北京", BJData]].forEach(function(item) {
        series.push(
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 2,
              trailLength: 0.1,
              color: "#1cbada",
              symbolSize: 4
            },
            symbol: "circle",
            lineStyle: {
              normal: {
                width: 0,
                curveness: -0.2
              }
            },
            data: convertData(item[1])
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            color: "#804224",
            rippleEffect: {
              //涟漪特效
              color: "#804224",
              period: 2, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 3 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            symbol: "circle",
            symbolSize: [3, 3],
            itemStyle: {
              normal: {
                show: true
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
            })
          }
        );
      });
      series.push({
        type: "map",
        data: map,
        geoIndex: 0,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: false
          }
        }
      });
      // 绘制图表
      myChart.setOption({
        title: {
          text: "亚洲",
          show: true,
          padding: [90, 0, 0, 350],
          textStyle: {
            color: "#1395c6",
            fontSize: 18
          }
        },
        grid: {
          right: "3%",
          top: 0,
          left: 0,
          bottom: 0,
          containLabel: true
        },
        visualMap: {
          left: 0,
          bottom: 40,
          show: false
        },
        geo: {
          map: "china",
          regions: newData2,
          silent: true, // 禁用鼠标的所有事件
          label: {
            normal: {
              show: true,
              fontSize: "14",
              color: "#fff",
              formatter: function(name) {
                return Province(name);
              }
            }
          },
          itemStyle: {
            borderColor: "#cee6ea",
            borderWidth: 2,
            shadowColor: "#2872d7",
            shadowBlur: 10,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
            emphasis: {
              areaColor: "#4f2153"
            }
          }
        },
        series: series,
        dataRange: {
          x: "-1000 px", //图例横轴位置
          y: "-1000 px", //图例纵轴位置
          splitList: newData
        }
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
.home-map {
  width: 1348px;
  height: 825px;
  margin-top: 5px;
  pointer-events: auto;
  border-radius: 0px;
  border-style: solid;
  border-image: url("../../../public/img/rightBorder.png") 32 37 fill / 32px
    37px / 0 stretch;
  border-width: 1px;
  background: none;
  filter: blur(0px);
  backdrop-filter: blur(0px);
  box-sizing: border-box;
}
</style>

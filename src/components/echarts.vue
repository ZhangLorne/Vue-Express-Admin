<template>
  <div class="line1">
    <div id="line1" class="" style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts';
  // 引入柱状图
  import 'echarts/lib/chart/bar';
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/legend';
  import 'echarts/lib/component/toolbox';
  import 'echarts/lib/component/markPoint';
  import 'echarts/lib/component/tooltip';
  export default {
    mounted(){
      this.myChart = echarts.init(document.getElementById('line1'));
      this.initData();
    },
    methods: {
      initData(){
        const colors = ['#5793f3', '#675bba', '#d14a61'];
        var timeData = ['2017-12-01','2017-12-02','2017-12-03','2017-12-04','2017-12-05', '2017-12-06','2017-12-07',];
        const option = {
          color: colors,
          title: {
            text: '走势图',
            subtext: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['新注册用户', '新增订单', '新增管理员']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['bar', 'line']},
              restore: {},
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: timeData
          },
          yAxis: [
            {
              type: 'value',
              name: '用户',
              min: 0,
              max: 200,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                formatter: '{value}'
              },
            },
            {
              type: 'value',
              name: '订单',
              min: 0,
              max: 200,
              position: 'right',
              axisLine: {
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
          ],
          series: [
            {
              name:'新注册用户',
              type:'line',
              data:[41,9,39,31,66,103,78],
              yAxisIndex: 1,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值',data:20,},
                  {type: 'min', name: '最小值'}
                ]
              },
            },
            {
              name:'新增订单',
              type:'line',
              data:[65,118,130,66,77,34,21],
              yAxisIndex: 1,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            },
            {
              name:'新增管理员',
              type:'line',
              data:[54,90,45,125,96,20,96],
              yAxisIndex: 1,
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            }
          ]
        };
        this.myChart.setOption(option);
      }
    },
    watch: {
      sevenDate: function (){
        this.initData()
      },
      sevenDay: function (){
        this.initData()
      }
    }
  }
</script>

<style>
</style>

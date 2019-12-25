<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome t1o Your Vue.js App"/>-->
      <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="6" v-for="(items,i) in items" :key="i">
                  <el-image
                          :src="items"
                          ></el-image>
          </el-col>

      </el-row>
      <div id="main" style="width: 100%;height:400px;"></div>
      <div class="flex">
          <div id="main2" style=" height:400px;" class="one"></div>
          <div id="main3" style="height:400px;" class="two"></div>
      </div>

  </div>
</template>

<script>
    import echarts from 'echarts';
export default {
  name: 'home',
    data(){
      return {
          items: [
              require('../assets/01.jpeg'),
              require('../assets/01.jpeg'),
              require('../assets/01.jpeg'),
              require('../assets/01.jpeg')]
      }
    },
    methods:{
        init () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        init2 () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main2'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                color: '#457894',
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        init3 () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main3'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                color: '#626262',
                legend: {
                    data:['利润']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '利润',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },
    mounted () {
      this.init();
      this.init2();
        this.init3();
    }
  // components: {
  //   HelloWorld
  // }
}
</script>
<style>
    .flex{
        display: flex;
        margin-left: 15px;
    }
    .one{
         left:10px;
        width: 45%;
    }
    .two{
        right: 10px;
        width: 45%;
    }
</style>

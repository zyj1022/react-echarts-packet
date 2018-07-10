import {Colors, ColorAlpha, Rdom} from './utils'
require('./theme/wonderland.js')
require('./theme/roma.js')

export const mixedOptions = {
    theme: 'roma',
    option: {
      // color: Colors,
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#999'
              }
          }
      },
      toolbox: {
          feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
          }
      },
      legend: {
          data:['蒸发量','降水量','白天温度', '夜晚温度']
      },
      xAxis: [
          {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                  type: 'shadow'
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                  formatter: '{value} ml'
              }
          },
          {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                  formatter: '{value} °C'
              }
          }
      ],
      series: [
          {
              name:'蒸发量',
              type:'bar',
              data: Rdom(11, 10, 200)
          },
          {
              name:'降水量',
              type:'bar',
              data: Rdom(11, 10, 200)
          },
          {
              name:'夜晚温度',
              type:'line',
              yAxisIndex: 1,
              data: Rdom(11, 1, 15)
          },
          {
              name:'白天温度',
              type:'line',
              yAxisIndex: 1,
              data: Rdom(11, 10, 25)
          },
      ]
    },
    events: {
        click: (params) => {
          console.log(params)
        }
    }
};

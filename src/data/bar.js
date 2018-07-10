import {Colors, ColorAlpha, Rdom} from './utils'
require('./theme/roma.js')

export const barOptions = {
  theme: 'roma',
  option: {
      title : {
          text: '柱状数据图示例',
          subtext: '纯属虚构',
          x: 'center'
      },
      tooltip : {
          trigger: 'axis'
      },
      legend: {
          top: 'bottom',
          data:['蒸发量','降水量']
      },
      toolbox: {
          show : true,
          feature : {
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'蒸发量',
              type:'bar',
              data:Rdom(12, 2, 200),
              markPoint : {
                  data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name: '平均值'}
                  ]
              }
          },
          {
              name:'降水量',
              type:'bar',
              data:Rdom(12, 2, 200),
              markPoint : {
                  data : [
                      {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                      {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name : '平均值'}
                  ]
              }
          }
      ]
  },
  events: {
      click: (params) => {
        console.log(params)
      }
  }

}

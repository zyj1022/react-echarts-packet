import {Colors, Rdom} from './utils'

const _ = require('lodash')
require('./theme/roma.js')

export const doughnutOptions = {
  theme: 'roma',
  option: {
      title: {
        text: '环形图示数据意图',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:_.random(100, 500), name:'直接访问'},
                  {value:_.random(100, 500), name:'邮件营销'},
                  {value:_.random(100, 500), name:'联盟广告'},
                  {value:_.random(100, 500), name:'视频广告'},
                  {value:_.random(100, 500), name:'搜索引擎'}
              ]
          }
      ]
  }

}

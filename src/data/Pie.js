import {Colors, ColorAlpha, Rdom} from './utils'
const _ = require('lodash');
require('./theme/wonderland.js')
require('./theme/roma.js')

export const pieOptions = {
  theme: 'roma',
  option: {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: [
          '50%', '60%'
        ],
        data: [
          {
            value: _.random(100, 2000),
            name: '直接访问'
          }, {
            value: _.random(100, 2000),
            name: '邮件营销'
          }, {
            value: _.random(100, 2000),
            name: '联盟广告'
          }, {
            value: _.random(100, 2000),
            name: '视频广告'
          }, {
            value: _.random(100, 2000),
            name: '搜索引擎'
          }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}

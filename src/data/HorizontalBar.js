import {Colors, ColorAlpha, Rdom} from './utils'

require('./theme/roma.js')

export const horizontalOptions = {
  theme: 'roma',
  option: {
    // color: Colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    grid: {
      left: '4%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: [
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周日'
      ]
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: Rdom(7, 200, 300)
      }, {
        name: '邮件营销',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: Rdom(7, 200, 400)
      }, {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: Rdom(7, 300, 500)
      }, {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: Rdom(7, 500, 700)
      }, {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: Rdom(7, 700, 900)
      }
    ]
  },
  events: {
      click: (params) => {
        console.log(params)
      }
  }

}

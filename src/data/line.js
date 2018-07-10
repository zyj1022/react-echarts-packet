import {Colors, ColorAlpha, Rdom} from './utils'

require('./theme/wonderland.js')
require('./theme/roma.js')

export const option = {
  // color: Colors,
  title: {
    text: '折线数据图示例',
    subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top:'bottom',
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '12%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
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
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: Rdom(7, 100, 500)
    }, {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      data: Rdom(7, 200, 400)
    }, {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      data: Rdom(7, 300, 600)
    }, {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      data: Rdom(7, 400, 700)
    }, {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      data: Rdom(7, 500, 900)
    }
  ]
}


export const lineOptions = {
  theme: 'roma',
  option: {
    // color: Colors,
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
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
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: Rdom(7, 100, 500)
      }, {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: Rdom(7, 200, 400)
      }, {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: Rdom(7, 300, 600)
      }, {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: Rdom(7, 400, 700)
      }, {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: Rdom(7, 500, 900)
      }
    ]
  }
}

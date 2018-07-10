import {Colors, ColorAlpha, Rdom} from './utils'

const _ = require('lodash')
require('./theme/roma.js')

export const scatterOptions = {
  theme: 'roma',
  option: {
      title: {
        text: '散点图示数据意图',
        subtext: '纯属虚构',
        x: 'center'
      },
      xAxis: {},
      yAxis: {},
      series: [{
          symbolSize: 10,
          data: [
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
          ],
          type: 'scatter'
      },
      {
          symbolSize: 20,
          data: [
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
            Rdom(5, 10, 100),
          ],
          type: 'scatter'
      },{
          symbolSize: 30,
          data: [
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
            Rdom(3, 10, 100),
          ],
          type: 'scatter'
      }]
  }

}

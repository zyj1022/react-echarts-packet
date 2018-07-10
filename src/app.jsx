/**
* react-echart
**/
import React, {Component} from 'react';

import Echarts from '../lib/index';

import { lineOptions, option } from './data/line'
import { barOptions } from './data/bar'
import { horizontalOptions } from './data/horizontalBar'
import { mixedOptions } from './data/mixed'
import { radarOptions } from './data/radar'
import { pieOptions } from './data/pie'
import { doughnutOptions } from './data/Doughnut'
import { scatterOptions } from './data/Scatter'
import { bubbleOptions } from './data/bubble'
import { riverOptions } from './data/river'

import './css/css.css';

require('./data/theme/wonderland.js')
require('./data/theme/roma.js')


const onLineEvents = {
    click: (params) => {
      console.log(params)
    }
}

const charts = () => {
  return (<div className="chart-list">
    <div className="title-bar">
        <a href="https://github.com/zyj1022/react-echarts-packet">View On GitHub</a>
        <h2><em>React</em> + <i>Echarts</i> = <em>React-Echarts-Packet</em></h2>
    </div>
    <div className="row">
      <div className="col">
        <div className="box">
          <Echarts option={option} theme={'roma'} events={onLineEvents}/>
        </div>
      </div>
      <div className="col"><div className="box"><Echarts {...barOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...horizontalOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...mixedOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...pieOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...doughnutOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...bubbleOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...riverOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...radarOptions}/></div></div>
      <div className="col"><div className="box"><Echarts {...scatterOptions}/></div></div>
    </div>
  </div>);
};

export default class App extends Component {
  render() {
    return charts();
  }
}

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
import { Select } from 'antd';
import './css/css.css';
import "antd/dist/antd.css";
require('./data/theme/wonderland.js')
require('./data/theme/roma.js')

import { barOps, barOps1, barOps2, yAxisData, seriesData } from './data/bars';

const { Option } = Select;
const onLineEvents = {
    click: (params) => {
      console.log(params)
    }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    barOps.option.yAxis.data = yAxisData[0];
    barOps.option.series = seriesData[0];
    barOps1.option.yAxis.data = yAxisData[1];
    barOps1.option.series = seriesData[1];
    barOps2.option.yAxis.data = yAxisData[2];
    barOps2.option.series = seriesData[2];
    this.state = {
      options: [barOps, barOps1, barOps2, pieOptions,],
      index: 0,
    }
  }

  handleChange(value) {
    console.log(`selected ${value}`);
    this.setState({
      index: value
    })
  }

  render() {
    return (
      <div className="chart-list">
        <div className="title-bar">
            <a href="https://github.com/zyj1022/react-echarts-packet">View On GitHub</a>
            <h2><em>React</em> + <i>Echarts</i> = <em>React-Echarts-Packet</em></h2>
        </div>
        <div className="formbox">
          动态数据切换演示：
          <Select defaultValue="0" style={{ width: 220 }} onChange={this.handleChange}>
             <Option value="0">图例1</Option>
             <Option value="1">图例2</Option>
             <Option value="2">图例3</Option>
             <Option value="3">图例4</Option>
           </Select>
        </div>
        <div className="row">
          <div className="col">
            <div className="box">
              <Echarts option={option} theme={'roma'} events={onLineEvents}/>
            </div>
          </div>
          <div className="col"><div className="box"><Echarts {...this.state.options[this.state.index]}/></div></div>
          <div className="col"><div className="box"><Echarts {...horizontalOptions}/></div></div>
          <div className="col"><div className="box"><Echarts {...mixedOptions}/></div></div>
          <div className="col"><div className="box"><Echarts {...pieOptions}/></div></div>
          <div className="col"><div className="box"><Echarts {...doughnutOptions}/></div></div>
          <div className="col"><div className="box"><Echarts {...bubbleOptions}/></div></div>
          <div className="col"><div className="box"><Echarts {...riverOptions}/></div></div>
          <div className="col"><div className="box"><Echarts {...radarOptions}/></div></div>
          <div className="col"><div className="box"><Echarts {...scatterOptions}/></div></div>
        </div>
      </div>
    )
  }
}

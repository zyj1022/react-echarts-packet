import React, { Component } from 'react';
import { object, string, bool, array, func, shape, number, oneOfType, oneOf } from 'prop-types';
import isEqual from 'lodash/isEqual';
import echarts from 'echarts'

export default class Echarts extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.echartsDom = null
  }
  componentDidMount() {
    this.rerender();
  }
  componentWillUnmount() {
    this.dispose();
  }
  componentDidUpdate(prevProps) {
    // 修改 theme/opts/events 时，先 dispose 再 rerender
    if (prevProps.theme !== this.props.theme ||
      !isEqual(prevProps.opts, this.props.opts) ||
      !isEqual(prevProps.events, this.props.events)
    ) {
      this.dispose();
      this.rerender();
      return;
    }
    const echartObj = this.renderEchartDom();
    // 样式修改的时候，有可能大小会变化，触发一下 resize
    if (!isEqual(prevProps.style, this.props.style) || !isEqual(prevProps.className, this.props.className)) {
      try {
        echartObj.resize();
      } catch (e) {
        console.warn(e);
      }
    }
  }

  getEchartsInstance() {
    const { theme, opts, option} = this.props;
    return echarts.getInstanceByDom(this.echartsDom) || echarts.init(this.echartsDom, theme, opts);
  }

  renderEchartDom() {
    const echartObj = this.getEchartsInstance();
    echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
    this.bindEvents(echartObj);
    return echartObj;
  }

  bindEvents(instance) {
    const { events } = this.props;
    if (events) {
      for(const eventName in events) {
        // hasOwnProperty() 方法会返回一个布尔值，检测一个对象是否含有特定的自身属性
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
          instance.on(eventName, (param) => {
            events[eventName](param, instance);
          });
        }
      }
    }
  }

  rerender() {
    try {
      setTimeout(() => {
        if (this.echartsDom === null) {
          return;
        }
        const echartObj = this.renderEchartDom();
      }, 100);
    } catch (e) {
      console.warn(e)
    }
  }
  dispose() {
    if (this.echartsDom) {
      echarts.dispose(this.echartsDom);
    }
  }
  render() {
    const {style, className } = this.props;
    const styles = {
			width: this.props.width ? this.props.width : '100%',
			height: this.props.height ? this.props.height : '400px',
      ...style,
		};
    return (
      <div ref={(e) => { this.echartsDom = e }}
        className={`react-echarts ${className ? className : ''}`}
        style={styles}>
      </div>
    )
  }
}

Echarts.propTypes = {
  theme: oneOfType([object, string]),
  option: object.isRequired,
  events: object,
  opts: shape({
    devicePixelRatio: number,
    renderer: oneOf(['canvas', 'svg']),
    width: oneOfType([
      number,
      oneOf([null, undefined, 'auto'])
    ]),
    height: oneOfType([
      number,
      oneOf([null, undefined, 'auto'])
    ]),
  }),
  notMerge: bool,
  lazyUpdate: bool,
  style: object,
  className: string
}

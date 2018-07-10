# React-Echarts-Packet

React + Echarts = React-Echarts-Packet

> React component for [Echarts 4.x](http://echarts.baidu.com/index.html)

## 安装方法 Installation
`npm install react-echarts-packet echarts --save`

## 预览 [Demo](http://zyj1022.github.io/demos/react-echarts-packet/)

## 本机运行

```
git clone git@github.com:zyj1022/react-echarts-packet.git

npm install

npm run dev
```

## 使用方法 Usage

`option` 可参照 echarts [官方实例](http://echarts.baidu.com/examples/#chart-type-candlestick)。

```
import Echarts from 'react-echarts-packet'

const options={
  theme: null, // 可选
  option: {
    // ……data
  },
  events: {
    click: (params) => {
      console.log(params)
    }
  }
}

<Echarts {...options}/>
```

或者

```
import Echarts from 'react-echarts-packet'

const option= {
  // …………data
}
const onEvents = {
    click: (params) => {
      console.log(params)
    }
}

<Echarts option={option} theme={'roma'} events={onEvents} />
```

## Properties

 - theme: oneOfType([object, string]),
 - option: object.isRequired,
 - events: object,
 - opts: shape({
     - devicePixelRatio: number,
     - renderer: oneOf(['canvas', 'svg']),
     - width:
     - height
  }),
 - notMerge: bool,
 - lazyUpdate: bool,
 - style: object,
 - className: string


## 图表类型 Chart type

图表类型,可参照 echarts 官方实例[图表种类](http://echarts.baidu.com/examples/#chart-type-candlestick),与官方保持一致。

- Line
- Bar
- Pie
- Scatter
- Map
- Candlestick
- Radar
- Boxplot
- Heatmap
- Graph
- Tree
- Treemap
- ……more

## License

MIT License

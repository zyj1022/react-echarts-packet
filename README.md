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
 - notMerge: bool,  // 可选，是否不跟之前设置的 option 进行合并，默认为 false，即合并。
 - lazyUpdate: bool, // 可选，在设置完 option 后是否不立即更新图表，默认为 false，即立即更新。
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

## Echarts踩坑记

echart在制作同一纬度正负轴Bar图的时候，如果有动态数据切换，就会发生多的bar莫名其妙出现在少bar的图表中。

**解决办法：** 让每次切换的动态数据的数组长度相同。

可以查看本demo实例中切换图例演示。

**补充解决方案：** [`notMerge: true`](https://github.com/apache/incubator-echarts/issues/10721)

 - `option` 图表的配置项和数据
 - `notMerge` 可选，是否不跟之前设置的 option 进行合并，默认为 false，即合并。
 - `lazyUpdate` 可选，在设置完 option 后是否不立即更新图表，默认为 false，即立即更新。

## License

MIT License

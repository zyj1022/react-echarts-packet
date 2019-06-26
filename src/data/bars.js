export const yAxisData = [
  ["", "", "36-45岁", "46-55岁", "56岁以上", "其他", "", ""],
  ["", "", "plus会员", "非plus会员", "", ""],
  ["", "", "一线城市", "三线城市", "二线城市", "", ""],
  ["", "", "女性", "家庭用户", "男性", "", ""]
];

export const barOps = {
  option: {
    color: ["#73b3Ee", "#8de2a7", "#7ad9d9", "#f8e8a3", "#9a9ef2", "#c09fef"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: params => {
        var result = `<div>${params[0].name}</div>`;
        if (params[0].name !== "") {
          return result;
        } else {
          return "";
        }
      }
    },
    grid: {
      top: "1%",
      left: "20",
      right: "20",
      bottom: "1%",
      containLabel: true
    },
    xAxis: [{
      type: "value",
      position: "bottom",
      type: "value",
      min: -100,
      max: 100,
      splitNumber: "5",
      axisLabel: {
        color: "#666",
        formatter: (value, i) => {
          return Math.abs(value) + "%";
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
          // type: 'dashed',
        }
      },
      min: -100,
      max: 100
    }],
    yAxis: [{
      type: "category",
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#b4b4b4"
        }
      },
      inverse: true,
      data: []
    }],
    series: []
  },
  notMerge: true
};

export const barOps1 = {
  option: {
    color: ["#73b3Ee", "#8de2a7", "#7ad9d9", "#f8e8a3", "#9a9ef2", "#c09fef"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: params => {
        var result = `<div>${params[0].name}</div>`;
        if (params[0].name !== "") {
          return result;
        } else {
          return "";
        }
      }
    },
    grid: {
      top: "1%",
      left: "20",
      right: "20",
      bottom: "1%",
      containLabel: true
    },
    xAxis: [{
      type: "value",
      position: "bottom",
      type: "value",
      min: -100,
      max: 100,
      splitNumber: "5",
      axisLabel: {
        color: "#666",
        formatter: (value, i) => {
          return Math.abs(value) + "%";
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
          // type: 'dashed',
        }
      },
      min: -100,
      max: 100
    }],
    yAxis: [{
      type: "category",
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#b4b4b4"
        }
      },
      inverse: true,
      data: []
    }],
    series: []
  },
  notMerge: true
};

export const barOps2 = {
  option: {
    color: ["#73b3Ee", "#8de2a7", "#7ad9d9", "#f8e8a3", "#9a9ef2", "#c09fef"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: params => {
        var result = `<div>${params[0].name}</div>`;
        if (params[0].name !== "") {
          return result;
        } else {
          return "";
        }
      }
    },
    grid: {
      top: "1%",
      left: "20",
      right: "20",
      bottom: "1%",
      containLabel: true
    },
    xAxis: [{
      type: "value",
      position: "bottom",
      type: "value",
      min: -100,
      max: 100,
      splitNumber: "5",
      axisLabel: {
        color: "#666",
        formatter: (value, i) => {
          return Math.abs(value) + "%";
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
          // type: 'dashed',
        }
      },
      min: -100,
      max: 100
    }],
    yAxis: [{
      type: "category",
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#b4b4b4"
        }
      },
      inverse: true,
      data: []
    }],
    series: []
  },
  notMerge: true
};

export const barOps3 = {
  option: {
    color: ["#73b3Ee", "#8de2a7", "#7ad9d9", "#f8e8a3", "#9a9ef2", "#c09fef"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: params => {
        var result = `<div>${params[0].name}</div>`;
        if (params[0].name !== "") {
          return result;
        } else {
          return "";
        }
      }
    },
    grid: {
      top: "1%",
      left: "20",
      right: "20",
      bottom: "1%",
      containLabel: true
    },
    xAxis: [{
      type: "value",
      position: "bottom",
      type: "value",
      min: -100,
      max: 100,
      splitNumber: "5",
      axisLabel: {
        color: "#666",
        formatter: (value, i) => {
          return Math.abs(value) + "%";
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#e9e9e9"
          // type: 'dashed',
        }
      },
      min: -100,
      max: 100
    }],
    yAxis: [{
      type: "category",
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#b4b4b4"
        }
      },
      inverse: true,
      data: []
    }],
    series: []
  },
  notMerge: true
};

export const seriesData = [
  [{
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, 0]
    },
    {
      name: "36-45岁",
      type: "bar",
      barGap: "-100%",
      stack: "36-45岁",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , 80]
    },
    {
      name: "46-55岁",
      type: "bar",
      barGap: "-100%",
      stack: "46-55岁",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , 35]
    },
    {
      name: "56岁以上",
      type: "bar",
      barGap: "-100%",
      stack: "56岁以上",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , 55]
    },
    {
      name: "其他",
      type: "bar",
      barGap: "-100%",
      stack: "其他",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , 45]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , , , 0]
    },

    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: ["-0"]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, "-0"]
    },
    {
      name: "36-45岁",
      type: "bar",
      barGap: "-100%",
      stack: "36-45岁",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , "-80"]
    },
    {
      name: "46-55岁",
      type: "bar",
      barGap: "-100%",
      stack: "46-55岁",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , "-35"]
    },
    {
      name: "56岁以上",
      type: "bar",
      barGap: "-100%",
      stack: "56岁以上",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , "-55"]
    },
    {
      name: "其他",
      type: "bar",
      barGap: "-100%",
      stack: "其他",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , "-45"]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , , "-0"]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , , , "-0"]
    }
  ],
  [{
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, 0]
    },
    {
      name: "plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , 45.96]
    },
    {
      name: "非plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "非plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , 36]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , 0]
    },

    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, 0]
    },
    {
      name: "plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , "-45.96"]
    },
    {
      name: "非plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "非plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , "-36"]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , 0]
    }
  ],
  [{
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , 0]
    },
    {
      name: "plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , 85.96]
    },
    {
      name: "非plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "非plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , 16]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , , 0]
    },

    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , 0]
    },
    {
      name: "plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , "-85.96"]
    },
    {
      name: "非plus会员",
      type: "bar",
      barGap: "-100%",
      stack: "非plus会员",
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , "-16"]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , 0]
    },
    {
      name: "",
      type: "bar",
      barGap: "-100%",
      stack: "",
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: params => {
            if (params.data !== 0) {
              return parseFloat(Math.abs((params.data * -1).toFixed(2))) + '%';
            }
          }

        }
      },
      data: [, , , , , , 0]
    }
  ],
  [],
  []
];

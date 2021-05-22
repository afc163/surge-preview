export const codes = [
  {
    fileName: 'basic-annotation.ts',
    fileIndex: 0,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-0', {
      data: data,
      xField: 'Date',
      yField: 'scales',
      annotations: [{
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: {
          textBaseline: 'bottom'
        }
      }, {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'red',
          lineDash: [2, 2]
        }
      }]
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'basic-gradients.ts',
    fileIndex: 1,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicGradients = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-1', {
      data: data,
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        range: [0, 1],
        tickCount: 5
      },
      areaStyle: function areaStyle() {
        return {
          fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'
        };
      }
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'basic-slider.ts',
    fileIndex: 2,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicSlider = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-2', {
      data: data,
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        tickCount: 5
      },
      animation: false,
      slider: {
        start: 0.1,
        end: 0.9,
        trendCfg: {
          isArea: true
        }
      }
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 3,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-3', {
      data: data,
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [0, 1]
      }
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 4,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-4', {
      data: data,
      xField: 'year',
      yField: 'value',
      seriesField: 'country',
      color: ['#82d1de', '#cb302d', '#e3ca8c'],
      areaStyle: {
        fillOpacity: 0.7
      },
      appendPadding: 10,
      isPercent: true,
      yAxis: {
        label: {
          formatter: function formatter(value) {
            return value * 100;
          }
        }
      }
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'area-large-data.ts',
    fileIndex: 5,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.areaLargeData = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-5', {
      data: data,
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      color: ['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f'],
      xAxis: {
        type: 'time',
        mask: 'YYYY'
      },
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: function formatter(v) {
            return "".concat(v).replace(/d{1,3}(?=(d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          }
        }
      },
      legend: {
        position: 'top'
      }
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'basic-slider.ts',
    fileIndex: 6,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicSlider = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-6', {
      data: data,
      xField: 'date',
      yField: 'value',
      seriesField: 'country',
      slider: {
        start: 0.1,
        end: 0.9
      }
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 7,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var area = new G2Plot.Area('container-7', {
      data: data,
      xField: 'date',
      yField: 'value',
      seriesField: 'country'
    });
    area.render();
  });
});`,
  },
  {
    fileName: 'bar-background.ts',
    fileIndex: 8,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.barBackground = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '家具家电',
    sales: 38
  }, {
    type: '粮油副食',
    sales: 52
  }, {
    type: '生鲜水果',
    sales: 61
  }, {
    type: '美容洗护',
    sales: 145
  }, {
    type: '母婴用品',
    sales: 48
  }, {
    type: '进口食品',
    sales: 38
  }, {
    type: '食品饮料',
    sales: 38
  }, {
    type: '家庭清洁',
    sales: 38
  }];
  var bar = new G2Plot.Bar('container-8', {
    data: data,
    xField: 'sales',
    yField: 'type',
    legend: {
      position: 'top-left'
    },
    barBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)'
      }
    },
    interactions: [{
      type: 'active-region',
      enable: false
    }]
  });
  bar.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 9,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    year: '1951 年',
    value: 38
  }, {
    year: '1952 年',
    value: 52
  }, {
    year: '1956 年',
    value: 61
  }, {
    year: '1957 年',
    value: 145
  }, {
    year: '1958 年',
    value: 48
  }];
  var bar = new G2Plot.Bar('container-9', {
    data: data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left'
    }
  });
  bar.render();
});`,
  },
  {
    fileName: 'color.ts',
    fileIndex: 10,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.color = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '家具家电',
    sales: 38
  }, {
    type: '粮油副食',
    sales: 52
  }, {
    type: '生鲜水果',
    sales: 61
  }, {
    type: '美容洗护',
    sales: 145
  }, {
    type: '母婴用品',
    sales: 48
  }, {
    type: '进口食品',
    sales: 38
  }, {
    type: '食品饮料',
    sales: 38
  }, {
    type: '家庭清洁',
    sales: 38
  }];
  var barPlot = new G2Plot.Bar('container-10', {
    data: data,
    xField: 'sales',
    yField: 'type',
    seriesField: 'type',
    color: function color(_ref) {
      var type = _ref.type;
      return type === '美容洗护' ? '#FAAD14' : '#5B8FF9';
    },
    legend: false,
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  });
  barPlot.render();
});`,
  },
  {
    fileName: 'conversion-tag.ts',
    fileIndex: 11,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.conversionTag = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    action: '浏览网站',
    pv: 50000
  }, {
    action: '放入购物车',
    pv: 35000
  }, {
    action: '生成订单',
    pv: 25000
  }, {
    action: '支付订单',
    pv: 15000
  }, {
    action: '完成交易',
    pv: 8500
  }];
  var barPlot = new G2Plot.Bar('container-11', {
    data: data,
    xField: 'pv',
    yField: 'action',
    conversionTag: {}
  });
  barPlot.render();
});`,
  },
  {
    fileName: 'scrollbar.ts',
    fileIndex: 12,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.scrollbar = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var column = new G2Plot.Bar('container-12', {
      data: data,
      yField: '城市',
      xField: '销售额',
      yAxis: {
        label: {
          autoRotate: false
        }
      },
      scrollbar: {
        type: 'vertical'
      }
    });
    column.render();
  });
});`,
  },
  {
    fileName: 'width-ratio.ts',
    fileIndex: 13,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.widthRatio = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '家具家电',
    sales: 38
  }, {
    type: '粮油副食',
    sales: 52
  }, {
    type: '生鲜水果',
    sales: 61
  }, {
    type: '美容洗护',
    sales: 145
  }, {
    type: '母婴用品',
    sales: 48
  }, {
    type: '进口食品',
    sales: 38
  }, {
    type: '食品饮料',
    sales: 38
  }, {
    type: '家庭清洁',
    sales: 38
  }];
  var barPlot = new G2Plot.Bar('container-13', {
    data: data,
    xField: 'sales',
    yField: 'type',
    barWidthRatio: 0.8,
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  });
  barPlot.render();
});`,
  },
  {
    fileName: 'width.ts',
    fileIndex: 14,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.width = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '家具家电',
    sales: 38
  }, {
    type: '粮油副食',
    sales: 52
  }, {
    type: '生鲜水果',
    sales: 61
  }, {
    type: '美容洗护',
    sales: 145
  }, {
    type: '母婴用品',
    sales: 48
  }, {
    type: '进口食品',
    sales: 38
  }, {
    type: '食品饮料',
    sales: 38
  }, {
    type: '家庭清洁',
    sales: 38
  }];
  var barPlot = new G2Plot.Bar('container-14', {
    data: data,
    xField: 'sales',
    yField: 'type',
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    },
    minBarWidth: 20,
    maxBarWidth: 20
  });
  barPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 15,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    label: 'Mon.',
    type: 'series1',
    value: 2800
  }, {
    label: 'Mon.',
    type: 'series2',
    value: 2260
  }, {
    label: 'Tues.',
    type: 'series1',
    value: 1800
  }, {
    label: 'Tues.',
    type: 'series2',
    value: 1300
  }, {
    label: 'Wed.',
    type: 'series1',
    value: 950
  }, {
    label: 'Wed.',
    type: 'series2',
    value: 900
  }, {
    label: 'Thur.',
    type: 'series1',
    value: 500
  }, {
    label: 'Thur.',
    type: 'series2',
    value: 390
  }, {
    label: 'Fri.',
    type: 'series1',
    value: 170
  }, {
    label: 'Fri.',
    type: 'series2',
    value: 100
  }];
  var stackedBarPlot = new G2Plot.Bar('container-15', {
    data: data,
    isGroup: true,
    xField: 'value',
    yField: 'label',

    /** 自定义颜色 */
    // color: ['#1383ab', '#c52125'],
    seriesField: 'type',
    marginRatio: 0,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [// 柱形图数据标签位置自动调整
      {
        type: 'interval-adjust-position'
      }, // 数据标签防遮挡
      {
        type: 'interval-hide-overlap'
      }, // 数据标签文颜色自动调整
      {
        type: 'adjust-color'
      }]
    }
  });
  stackedBarPlot.render();
});`,
  },
  {
    fileName: 'corner-radius.ts',
    fileIndex: 16,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.cornerRadius = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    label: 'Mon.',
    type: 'series1',
    value: 2800
  }, {
    label: 'Mon.',
    type: 'series2',
    value: 2260
  }, {
    label: 'Tues.',
    type: 'series1',
    value: 1800
  }, {
    label: 'Tues.',
    type: 'series2',
    value: 1300
  }, {
    label: 'Wed.',
    type: 'series1',
    value: 950
  }, {
    label: 'Wed.',
    type: 'series2',
    value: 900
  }, {
    label: 'Thur.',
    type: 'series1',
    value: 500
  }, {
    label: 'Thur.',
    type: 'series2',
    value: 390
  }, {
    label: 'Fri.',
    type: 'series1',
    value: 170
  }, {
    label: 'Fri.',
    type: 'series2',
    value: 100
  }];
  var stackedBarPlot = new G2Plot.Bar('container-16', {
    data: data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    marginRatio: 0,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'right',
      // 'left', 'middle', 'right'
      offset: 4
    },
    barStyle: {
      radius: [2, 2, 0, 0]
    }
  });
  stackedBarPlot.render();
});`,
  },
  {
    fileName: 'dodge-padding.ts',
    fileIndex: 17,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dodgePadding = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    label: 'Mon.',
    type: 'series1',
    value: 2800
  }, {
    label: 'Mon.',
    type: 'series2',
    value: 2260
  }, {
    label: 'Tues.',
    type: 'series1',
    value: 1800
  }, {
    label: 'Tues.',
    type: 'series2',
    value: 1300
  }, {
    label: 'Wed.',
    type: 'series1',
    value: 950
  }, {
    label: 'Wed.',
    type: 'series2',
    value: 900
  }, {
    label: 'Thur.',
    type: 'series1',
    value: 500
  }, {
    label: 'Thur.',
    type: 'series2',
    value: 390
  }, {
    label: 'Fri.',
    type: 'series1',
    value: 170
  }, {
    label: 'Fri.',
    type: 'series2',
    value: 100
  }];
  var stackedBarPlot = new G2Plot.Bar('container-17', {
    data: data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    dodgePadding: 4,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [// 柱形图数据标签位置自动调整
      {
        type: 'interval-adjust-position'
      }, // 数据标签防遮挡
      {
        type: 'interval-hide-overlap'
      }, // 数据标签文颜色自动调整
      {
        type: 'adjust-color'
      }]
    }
  });
  stackedBarPlot.render();
});`,
  },
  {
    fileName: 'interval-padding.ts',
    fileIndex: 18,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.intervalPadding = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    label: 'Mon.',
    type: 'series1',
    value: 2800
  }, {
    label: 'Mon.',
    type: 'series2',
    value: 2260
  }, {
    label: 'Tues.',
    type: 'series1',
    value: 1800
  }, {
    label: 'Tues.',
    type: 'series2',
    value: 1300
  }, {
    label: 'Wed.',
    type: 'series1',
    value: 950
  }, {
    label: 'Wed.',
    type: 'series2',
    value: 900
  }, {
    label: 'Thur.',
    type: 'series1',
    value: 500
  }, {
    label: 'Thur.',
    type: 'series2',
    value: 390
  }, {
    label: 'Fri.',
    type: 'series1',
    value: 170
  }, {
    label: 'Fri.',
    type: 'series2',
    value: 100
  }];
  var stackedBarPlot = new G2Plot.Bar('container-18', {
    data: data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    dodgePadding: 4,
    intervalPadding: 20,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [// 柱形图数据标签位置自动调整
      {
        type: 'interval-adjust-position'
      }, // 数据标签防遮挡
      {
        type: 'interval-hide-overlap'
      }, // 数据标签文颜色自动调整
      {
        type: 'adjust-color'
      }]
    }
  });
  stackedBarPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 19,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    country: 'Asia',
    year: '1750',
    value: 502
  }, {
    country: 'Asia',
    year: '1800',
    value: 635
  }, {
    country: 'Asia',
    year: '1850',
    value: 809
  }, {
    country: 'Asia',
    year: '1900',
    value: 947
  }, {
    country: 'Asia',
    year: '1950',
    value: 1402
  }, {
    country: 'Asia',
    year: '1999',
    value: 3634
  }, {
    country: 'Asia',
    year: '2050',
    value: 5268
  }, {
    country: 'Africa',
    year: '1750',
    value: 106
  }, {
    country: 'Africa',
    year: '1800',
    value: 107
  }, {
    country: 'Africa',
    year: '1850',
    value: 111
  }, {
    country: 'Africa',
    year: '1900',
    value: 133
  }, {
    country: 'Africa',
    year: '1950',
    value: 221
  }, {
    country: 'Africa',
    year: '1999',
    value: 767
  }, {
    country: 'Africa',
    year: '2050',
    value: 1766
  }, {
    country: 'Europe',
    year: '1750',
    value: 163
  }, {
    country: 'Europe',
    year: '1800',
    value: 203
  }, {
    country: 'Europe',
    year: '1850',
    value: 276
  }, {
    country: 'Europe',
    year: '1900',
    value: 408
  }, {
    country: 'Europe',
    year: '1950',
    value: 547
  }, {
    country: 'Europe',
    year: '1999',
    value: 729
  }, {
    country: 'Europe',
    year: '2050',
    value: 628
  }];
  var barPlot = new G2Plot.Bar('container-19', {
    data: data,
    xField: 'value',
    yField: 'year',
    seriesField: 'country',
    isPercent: true,
    isStack: true,

    /** 自定义颜色 */
    // color: ['#2582a1', '#f88c24', '#c52125', '#87f4d0'],
    label: {
      position: 'middle',
      content: function content(item) {
        return item.value.toFixed(2);
      },
      style: {
        fill: '#fff'
      }
    }
  });
  barPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 20,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    values: [76, 100]
  }, {
    type: '分类二',
    values: [56, 108]
  }, {
    type: '分类三',
    values: [38, 129]
  }, {
    type: '分类四',
    values: [58, 155]
  }, {
    type: '分类五',
    values: [45, 120]
  }, {
    type: '分类六',
    values: [23, 99]
  }, {
    type: '分类七',
    values: [18, 56]
  }, {
    type: '分类八',
    values: [18, 34]
  }];
  var barPlot = new G2Plot.Bar('container-20', {
    data: data.reverse(),
    xField: 'values',
    yField: 'type',
    isRange: true,
    label: {
      position: 'middle',
      layout: [{
        type: 'adjust-color'
      }]
    }
  });
  barPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 21,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    year: '1991',
    value: 3,
    type: 'Lon'
  }, {
    year: '1992',
    value: 4,
    type: 'Lon'
  }, {
    year: '1993',
    value: 3.5,
    type: 'Lon'
  }, {
    year: '1994',
    value: 5,
    type: 'Lon'
  }, {
    year: '1995',
    value: 4.9,
    type: 'Lon'
  }, {
    year: '1996',
    value: 6,
    type: 'Lon'
  }, {
    year: '1997',
    value: 7,
    type: 'Lon'
  }, {
    year: '1998',
    value: 9,
    type: 'Lon'
  }, {
    year: '1999',
    value: 13,
    type: 'Lon'
  }, {
    year: '1991',
    value: 3,
    type: 'Bor'
  }, {
    year: '1992',
    value: 4,
    type: 'Bor'
  }, {
    year: '1993',
    value: 3.5,
    type: 'Bor'
  }, {
    year: '1994',
    value: 5,
    type: 'Bor'
  }, {
    year: '1995',
    value: 4.9,
    type: 'Bor'
  }, {
    year: '1996',
    value: 6,
    type: 'Bor'
  }, {
    year: '1997',
    value: 7,
    type: 'Bor'
  }, {
    year: '1998',
    value: 9,
    type: 'Bor'
  }, {
    year: '1999',
    value: 13,
    type: 'Bor'
  }];
  var stackedBarPlot = new G2Plot.Bar('container-21', {
    data: data.reverse(),
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [// 柱形图数据标签位置自动调整
      {
        type: 'interval-adjust-position'
      }, // 数据标签防遮挡
      {
        type: 'interval-hide-overlap'
      }, // 数据标签文颜色自动调整
      {
        type: 'adjust-color'
      }]
    }
  });
  stackedBarPlot.render();
});`,
  },
  {
    fileName: 'customize-tooltip.ts',
    fileIndex: 22,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "@antv/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("@antv/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.util);
    global.customizeTooltip = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _util) {
  "use strict";

  var divStyles = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.95)',
    boxShadow: 'rgb(174, 174, 174) 0px 0px 10px',
    borderRadius: '4px'
  };

  var setStyles = function setStyles(container, styles) {
    for (var key in styles) {
      container.style[key] = styles[key];
    }
  };

  fetch('https://gw.alipayobjects.com/os/bmw-prod/5a209bb2-ee85-412f-a689-cdb16159a459.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    return data.filter(function (d) {
      return ['United States', 'France', 'Germany', 'Austria', 'Japan', 'Sweden'].includes(d.country);
    });
  }).then(function (data) {
    var line = new G2Plot.Line('container-22', {
      padding: 'auto',
      appendPadding: [8, 10, 0, 10],
      data: data,
      xField: 'year',
      yField: 'value',
      seriesField: 'country',
      smooth: true,
      lineStyle: function lineStyle(_ref) {
        var country = _ref.country;
        var importantCountries = ['United States', 'France', 'Germany'];
        var idx = importantCountries.indexOf(country);
        return {
          lineWidth: idx !== -1 ? 2 : 1
        };
      },
      interactions: [{
        type: 'brush'
      }],
      tooltip: {
        follow: true,
        enterable: true,
        offset: 18,
        shared: true,
        marker: {
          lineWidth: 0.5,
          r: 3
        }
      }
    });
    line.render();

    var createPie = function createPie(container, data) {
      var piePlot = new G2Plot.Pie(container, {
        data: data,
        width: 120,
        height: 120,
        appendPadding: 10,
        autoFit: false,
        angleField: 'value',
        colorField: 'type',
        legend: false,
        tooltip: false,
        animation: false,
        color: line.chart.themeObject.colors10,
        label: {
          type: 'inner',
          offset: '-10%',
          content: function content(_ref2) {
            var percent = _ref2.percent;
            return "".concat((percent * 100).toFixed(0), "%");
          }
        }
      });
      piePlot.render();
    };

    line.update({
      tooltip: {
        customContent: function customContent(value, items) {
          var pieData = items.map(function (item) {
            return {
              type: item.name,
              value: Number(item.value)
            };
          });
          var container = document.createElement('div');
          var pieContainer = document.createElement('div');
          setStyles(container, divStyles);
          createPie(pieContainer, pieData);
          container.appendChild(pieContainer);
          return container;
        }
      }
    }); // 初始化，默认激活

    var point = line.chart.getXY((0, _util.last)(data.filter(function (d) {
      return !!d.value;
    })));
    line.chart.showTooltip(point);
  });
});`,
  },
  {
    fileName: 'desire-heatmap.ts',
    fileIndex: 23,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.desireHeatmap = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  // 数据截取于: 2021-02-21 13:04:19, 前往参与游戏: https://antv-studio.antfin.com/bless-heatmap
  fetch('https://gw.alipayobjects.com/os/antfincdn/wOj8DF0KF0/desire-heatmap.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var COLS = 15;
    var ROWS = 10;

    function getSizeFactor() {
      var box = document.getElementById('container-23').getBoundingClientRect();
      var size = Math.min(box.width / COLS, box.height / ROWS);
      return {
        width: size * COLS,
        height: size * ROWS,
        size: size
      };
    }

    var _getSizeFactor = getSizeFactor(),
        width = _getSizeFactor.width,
        height = _getSizeFactor.height,
        size = _getSizeFactor.size;

    var plot = new G2Plot.Heatmap('container-23', {
      data: data,
      autoFit: false,
      width: width,
      height: height,
      xField: 'row',
      yField: 'col',
      colorField: 'count',
      shape: 'square',
      sizeRatio: 1,
      color: ['#dcdcdc', '#dad0bf', '#d9c3a1', '#d7b784', '#d6aa67', '#da9a54', '#e3864c', '#ec7344', '#f65f3c', '#ff4b34'],
      tooltip: false,
      xAxis: false,
      yAxis: false,
      meta: {
        count: {
          max: 200
        }
      },
      label: {
        formatter: function formatter(datum) {
          return datum.item;
        },
        layout: [{
          type: 'adjust-color'
        }],
        style: {
          fontWeight: 700,
          fontSize: size / 36 * 14 * (size < 32 ? 1.2 : 1)
        }
      },
      theme: {
        geometries: {
          polygon: {
            square: {
              active: {
                style: {
                  stroke: '#fff'
                }
              }
            }
          }
        }
      },
      interactions: [{
        type: 'element-active',
        cfg: {
          showEnable: [{
            trigger: 'element:mouseenter',
            action: 'cursor:pointer'
          }, {
            trigger: 'element:mouseleave',
            action: 'cursor:default'
          }]
        }
      }]
    });
    plot.render();
    window.addEventListener('resize', function () {
      var _getSizeFactor2 = getSizeFactor(),
          width = _getSizeFactor2.width,
          height = _getSizeFactor2.height,
          size = _getSizeFactor2.size;

      plot.changeSize(width, height);

      if (plot.options.width / COLS !== size) {
        plot.update({
          label: {
            formatter: function formatter(datum) {
              return datum.item;
            },
            layout: [{
              type: 'adjust-color'
            }],
            style: {
              fontWeight: 700,
              fontSize: 14 * (size < 32 ? 0.8 : size < 40 ? 1.48 : 1.3)
            }
          }
        });
      }
    });
  });
});`,
  },
  {
    fileName: 'line.ts',
    fileIndex: 24,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.line = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.In order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function fetchAreaData() {
    return fetch('https://gw.alipayobjects.com/os/bmw-prod/b6fde479-c353-47de-a4c0-442d58474b9d.json').then(function (data) {
      return data.json();
    });
  }

  function fetchTrendData() {
    return fetch('https://gw.alipayobjects.com/os/bmw-prod/b0b850d4-a8ce-4abe-8466-232a677af79c.json').then(function (data) {
      return data.json();
    });
  }

  Promise.all([fetchAreaData(), fetchTrendData()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        data1 = _ref2[0],
        data2 = _ref2[1];

    var uvData = data2.uniqueSessions.map(function (d, idx) {
      return {
        date: "".concat(idx),
        uv: d
      };
    });
    var pvData = data2.pageSessions.map(function (d, idx) {
      return {
        date: "".concat(idx),
        pv: d
      };
    });
    var directTrafficData = data2.directTraffic.map(function (d, idx) {
      return {
        date: "".concat(idx),
        directTraffic: d
      };
    });
    var referringSitesData = data2.referringSites.map(function (d, idx) {
      return {
        date: "".concat(idx),
        referringSites: d
      };
    });
    var plot = new G2Plot.Mix('container-24', {
      height: 140,
      appendPadding: [20, 0, 0, 0],
      tooltip: false,
      legend: {
        position: 'top-left'
      }
    });
    plot.update({
      plots: [{
        type: 'area',
        region: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 1,
            y: 0.4
          }
        },
        options: {
          data: data1,
          xField: 'sessions',
          yField: 'visits',
          seriesField: 'type',
          isStack: false,
          meta: {
            visits: {
              min: 30,
              max: 180,
              tickItnerval: 30
            },
            sessions: {
              range: [0, 1]
            }
          },
          yAxis: {
            grid: {
              line: {
                style: {
                  lineDash: [4, 2],
                  stroke: '#ddd'
                }
              }
            },
            tickLine: {
              style: {
                stroke: '#ddd'
              }
            }
          },
          xAxis: false,
          tooltip: {
            showMarkers: false,
            showCrosshairs: true,
            shared: true
          },
          areaStyle: function areaStyle(_ref3) {
            var type = _ref3.type;

            var _plot$chart$getTheme = plot.chart.getTheme(),
                colors10 = _plot$chart$getTheme.colors10;

            return {
              fill: type === 'Current Month' ? "l(90) 0.3:".concat(colors10[0], " 1:rgba(255,255,255,0.2)") : "l(90) 0.3:".concat(colors10[1], "  1:rgba(255,255,255,0.2)")
            };
          },
          line: {
            style: {
              lineWidth: 1.5
            }
          }
        }
      }, {
        type: 'tiny-area',
        region: {
          start: {
            x: 0,
            y: 0.5
          },
          end: {
            x: 11 / 24,
            y: 0.7
          }
        },
        options: {
          data: uvData.map(function (d) {
            return d.uv;
          }),
          tooltip: {},
          meta: {
            iv: {
              min: 20
            }
          },
          seriesField: '1',
          color: function color() {
            var _plot$chart$getTheme2 = plot.chart.getTheme(),
                colors10 = _plot$chart$getTheme2.colors10;

            return "l(90) 0:".concat(colors10[0], " 1:rgba(255,255,255,0.2)");
          },
          line: {
            style: function style() {
              var _plot$chart$getTheme3 = plot.chart.getTheme(),
                  colors10 = _plot$chart$getTheme3.colors10;

              return {
                lineWidth: 1,
                stroke: colors10[0]
              };
            }
          },
          annotations: [{
            type: 'text',
            content: 'Unique Sessions',
            position: ['min', 'max'],
            offsetY: -8,
            style: {
              textAlign: 'left'
            }
          }, {
            type: 'text',
            content: "".concat(uvData.reduce(function (a, b) {
              return a + b.uv;
            }, 0)),
            position: ['max', 'median'],
            offsetX: 4,
            style: {
              textAlign: 'left'
            }
          }]
        }
      }, {
        type: 'tiny-area',
        region: {
          start: {
            x: 13 / 24,
            y: 0.5
          },
          end: {
            x: 17 / 18,
            y: 0.7
          }
        },
        options: {
          data: pvData.map(function (d) {
            return d.pv;
          }),
          tooltip: {},
          meta: {
            pv: {
              min: 20
            }
          },
          seriesField: '1',
          color: function color() {
            var _plot$chart$getTheme4 = plot.chart.getTheme(),
                colors10 = _plot$chart$getTheme4.colors10;

            return "l(90) 0:".concat(colors10[0], " 1:rgba(255,255,255,0.2)");
          },
          line: {
            style: function style() {
              var _plot$chart$getTheme5 = plot.chart.getTheme(),
                  colors10 = _plot$chart$getTheme5.colors10;

              return {
                lineWidth: 1,
                stroke: colors10[0]
              };
            }
          },
          annotations: [{
            type: 'text',
            content: 'Page Sessions',
            position: ['min', 'max'],
            offsetY: -8,
            style: {
              textAlign: 'left'
            }
          }, {
            type: 'text',
            content: "".concat(pvData.reduce(function (a, b) {
              return a + b.pv;
            }, 0)),
            position: ['max', 'median'],
            offsetX: 8,
            style: {
              textAlign: 'left'
            }
          }]
        }
      }, {
        type: 'tiny-area',
        region: {
          start: {
            x: 0 / 24,
            y: 0.75
          },
          end: {
            x: 11 / 24,
            y: 0.98
          }
        },
        options: {
          data: directTrafficData.map(function (d) {
            return d.directTraffic;
          }),
          tooltip: {},
          meta: {
            directTraffic: {
              min: 2000
            }
          },
          seriesField: '1',
          color: function color() {
            var _plot$chart$getTheme6 = plot.chart.getTheme(),
                colors10 = _plot$chart$getTheme6.colors10;

            return "l(90) 0:".concat(colors10[0], " 1:rgba(255,255,255,0.2)");
          },
          line: {
            style: function style() {
              var _plot$chart$getTheme7 = plot.chart.getTheme(),
                  colors10 = _plot$chart$getTheme7.colors10;

              return {
                lineWidth: 1,
                stroke: colors10[0]
              };
            }
          },
          annotations: [{
            type: 'text',
            content: 'Direct Traffic',
            position: ['min', 'max'],
            offsetY: -8,
            style: {
              textAlign: 'left'
            }
          }, {
            type: 'text',
            position: ['max', 'median'],
            content: "".concat(directTrafficData.reduce(function (a, b) {
              return a + b.directTraffic;
            }, 0)),
            offsetX: 8,
            style: {
              textAlign: 'left'
            }
          }]
        }
      }, {
        type: 'tiny-area',
        region: {
          start: {
            x: 13 / 24,
            y: 0.75
          },
          end: {
            x: 17 / 18,
            y: 0.98
          }
        },
        options: {
          data: referringSitesData.map(function (d) {
            return d.referringSites;
          }),
          tooltip: {},
          seriesField: '1',
          color: function color() {
            var _plot$chart$getTheme8 = plot.chart.getTheme(),
                colors10 = _plot$chart$getTheme8.colors10;

            return "l(90) 0:".concat(colors10[0], " 1:rgba(255,255,255,0.2)");
          },
          line: {
            style: function style() {
              var _plot$chart$getTheme9 = plot.chart.getTheme(),
                  colors10 = _plot$chart$getTheme9.colors10;

              return {
                lineWidth: 1,
                stroke: colors10[0]
              };
            }
          },
          annotations: [{
            type: 'text',
            content: 'Referring Sites',
            position: ['min', 'max'],
            offsetY: -8,
            style: {
              textAlign: 'left'
            }
          }, {
            type: 'text',
            content: "".concat(referringSitesData.reduce(function (a, b) {
              return a + b.referringSites;
            }, 0)),
            position: ['max', 'median'],
            offsetX: 8,
            style: {
              textAlign: 'left'
            }
          }]
        }
      }]
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'pie.ts',
    fileIndex: 25,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.pie = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-25', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: function formatter(v) {
          return "xA5 ".concat(v);
        }
      }
    },
    label: {
      type: 'inner',
      offset: '-50%',
      autoRotate: false,
      style: {
        textAlign: 'center'
      },
      formatter: function formatter(_ref) {
        var percent = _ref.percent;
        return "".concat((percent * 100).toFixed(0), "%");
      }
    },
    statistic: {
      title: {
        offsetY: -8
      },
      content: {
        offsetY: -4
      }
    },
    // 添加 中心统计文本 交互
    interactions: [{
      type: 'element-selected'
    }, {
      type: 'element-active'
    }, {
      type: 'pie-statistic-active',
      cfg: {
        start: [{
          trigger: 'element:mouseenter',
          action: 'pie-statistic:change'
        }, {
          trigger: 'legend-item:mouseenter',
          action: 'pie-statistic:change'
        }],
        end: [{
          trigger: 'element:mouseleave',
          action: 'pie-statistic:reset'
        }, {
          trigger: 'legend-item:mouseleave',
          action: 'pie-statistic:reset'
        }]
      }
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'trend-funnel.ts',
    fileIndex: 26,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "insert-css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("insert-css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.insertCss);
    global.trendFunnel = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _insertCss) {
  "use strict";

  var data = [{
    stage: '触达次数',
    times: 789,
    uv: 1000,
    conversionUV: 0
  }, {
    stage: '响应次数',
    times: 453,
    uv: 800,
    conversionUV: 600
  }, {
    stage: '分享次数',
    times: 193,
    uv: 600,
    conversionUV: 200
  }];
  (0, _insertCss.insertCss)("  .container{    margin: 16px -8px; display: flex;  }  .box{    padding: 0px 16px;  }  .title{    font-weight: bold;  }  .tooltip-item{    margin-top: 12px;    display: flex;    width: 120px;    justify-content: space-between;  }  .link{    display: inline-block;    margin-top: 12px;    color: #5B8FF9;    text-decoration: none;    cursor: pointer;  }  .link:hover{    color: #5D7092;  }");
  var funnelPlot = new G2Plot.Funnel('container-26', {
    data: data,
    xField: 'stage',
    yField: 'times',
    legend: false,
    conversionTag: false,
    interactions: [{
      type: 'element-active'
    }],
    tooltip: {
      follow: true,
      enterable: true,
      offset: 5,
      customContent: function customContent(value, items) {
        if (!items || items.length <= 0) return;
        var itemData = items[0].data;
        return "<div class='container'>" + "<div class='box' style='border-right: 1px solid #c2c2c2'>" + "<div class='title'>u8F6Cu5316</div>" + "<div class='tooltip-item'><span>u8F6Cu5316u4EBAu6570</span><span>".concat(itemData.conversionUV, "</span></div>") + "<div class='tooltip-item'><span>u8F6Cu5316u7387</span><span>".concat((itemData.conversionUV / itemData.uv * 100).toFixed(0), "%</span></div>") + "<a class='link'>u67E5u770Bu8F6Cu5316u8BE6u60C5</a>" + "</div>" + "<div class='box'>" + "<div class='title'>u672Au8F6Cu5316</div>" + "<div class='tooltip-item'><span>u672Au8F6Cu5316u4EBAu6570</span><span>".concat(itemData.uv - itemData.conversionUV, "</span></div>") + "<div class='tooltip-item'><span>u672Au8F6Cu5316u7387</span><span>".concat(((1 - itemData.conversionUV / itemData.uv) * 100).toFixed(0), "%</span></div>") + "<a class='link'>u67E5u770Bu672Au8F6Cu5316u8BE6u60C5</a>" + "</div>" + "</div>";
      }
    }
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 27,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '家具家电',
    sales: 38
  }, {
    type: '粮油副食',
    sales: 52
  }, {
    type: '生鲜水果',
    sales: 61
  }, {
    type: '美容洗护',
    sales: 145
  }, {
    type: '母婴用品',
    sales: 48
  }, {
    type: '进口食品',
    sales: 38
  }, {
    type: '食品饮料',
    sales: 38
  }, {
    type: '家庭清洁',
    sales: 38
  }];
  var columnPlot = new G2Plot.Column('container-27', {
    data: data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'color.ts',
    fileIndex: 28,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.color = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '1-3秒',
    value: 0.16
  }, {
    type: '4-10秒',
    value: 0.125
  }, {
    type: '11-30秒',
    value: 0.24
  }, {
    type: '31-60秒',
    value: 0.19
  }, {
    type: '1-3分',
    value: 0.22
  }, {
    type: '3-10分',
    value: 0.05
  }, {
    type: '10-30分',
    value: 0.01
  }, {
    type: '30+分',
    value: 0.015
  }];
  var paletteSemanticRed = '#F4664A';
  var brandColor = '#5B8FF9';
  var columnPlot = new G2Plot.Column('container-28', {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: function color(_ref) {
      var type = _ref.type;

      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: function content(originData) {
        var val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    }
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'conversion-tag.ts',
    fileIndex: 29,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.conversionTag = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    action: '浏览网站',
    pv: 50000
  }, {
    action: '放入购物车',
    pv: 35000
  }, {
    action: '生成订单',
    pv: 25000
  }, {
    action: '支付订单',
    pv: 15000
  }, {
    action: '完成交易',
    pv: 8500
  }];
  var columnPlot = new G2Plot.Column('container-29', {
    data: data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    }
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'region-annotation.ts',
    fileIndex: 30,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.regionAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    month: '1',
    value: 1078
  }, {
    month: '2',
    value: 1216
  }, {
    month: '3',
    value: 758
  }, {
    month: '4',
    value: 623
  }, {
    month: '5',
    value: 319
  }, {
    month: '6',
    value: 422
  }, {
    month: '7',
    value: -4
  }, {
    month: '8',
    value: -217
  }, {
    month: '9',
    value: -358
  }, {
    month: '10',
    value: 1513
  }, {
    month: '11',
    value: 1388
  }, {
    month: '12',
    value: 597
  }];
  var columnPlot = new G2Plot.Column('container-30', {
    data: data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    meta: {
      value: {
        max: 2000,
        min: -1000
      },
      month: {
        formatter: function formatter(val) {
          return "".concat(val, " u6708");
        }
      }
    },
    annotations: [{
      type: 'region',
      start: function start(xScale) {
        var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
        var x = xScale.scale('7') - ratio / 2;
        return ["".concat(x * 100, "%"), '0%'];
      },
      end: function end(xScale) {
        var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
        var x = xScale.scale('9') + ratio / 2;
        return ["".concat(x * 100, "%"), '100%'];
      }
    }],
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    }
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'scrollbar.ts',
    fileIndex: 31,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.scrollbar = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var column = new G2Plot.Column('container-31', {
      data: data,
      xField: '城市',
      yField: '销售额',
      xAxis: {
        label: {
          autoRotate: false
        }
      },
      scrollbar: {
        type: 'horizontal'
      }
    });
    column.render();
  });
});`,
  },
  {
    fileName: 'slider.ts',
    fileIndex: 32,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.slider = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var column = new G2Plot.Column('container-32', {
      data: data,
      xField: '城市',
      yField: '销售额',
      xAxis: {
        label: {
          autoRotate: false
        }
      },
      slider: {
        start: 0.1,
        end: 0.2
      }
    });
    column.render();
  });
});`,
  },
  {
    fileName: 'width-ratio.ts',
    fileIndex: 33,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.widthRatio = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '家具家电',
    sales: 38
  }, {
    type: '粮油副食',
    sales: 52
  }, {
    type: '生鲜水果',
    sales: 61
  }, {
    type: '美容洗护',
    sales: 145
  }, {
    type: '母婴用品',
    sales: 48
  }, {
    type: '进口食品',
    sales: 38
  }, {
    type: '食品饮料',
    sales: 38
  }, {
    type: '家庭清洁',
    sales: 38
  }];
  var columnPlot = new G2Plot.Column('container-33', {
    data: data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'width.ts',
    fileIndex: 34,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.width = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '家具家电',
    sales: 38
  }, {
    type: '粮油副食',
    sales: 52
  }, {
    type: '生鲜水果',
    sales: 61
  }, {
    type: '美容洗护',
    sales: 145
  }, {
    type: '母婴用品',
    sales: 48
  }, {
    type: '进口食品',
    sales: 38
  }, {
    type: '食品饮料',
    sales: 38
  }, {
    type: '家庭清洁',
    sales: 38
  }];
  var columnPlot = new G2Plot.Column('container-34', {
    data: data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    },
    minColumnWidth: 20,
    maxColumnWidth: 20
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 35,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    name: 'London',
    月份: 'Jan.',
    月均降雨量: 18.9
  }, {
    name: 'London',
    月份: 'Feb.',
    月均降雨量: 28.8
  }, {
    name: 'London',
    月份: 'Mar.',
    月均降雨量: 39.3
  }, {
    name: 'London',
    月份: 'Apr.',
    月均降雨量: 81.4
  }, {
    name: 'London',
    月份: 'May',
    月均降雨量: 47
  }, {
    name: 'London',
    月份: 'Jun.',
    月均降雨量: 20.3
  }, {
    name: 'London',
    月份: 'Jul.',
    月均降雨量: 24
  }, {
    name: 'London',
    月份: 'Aug.',
    月均降雨量: 35.6
  }, {
    name: 'Berlin',
    月份: 'Jan.',
    月均降雨量: 12.4
  }, {
    name: 'Berlin',
    月份: 'Feb.',
    月均降雨量: 23.2
  }, {
    name: 'Berlin',
    月份: 'Mar.',
    月均降雨量: 34.5
  }, {
    name: 'Berlin',
    月份: 'Apr.',
    月均降雨量: 99.7
  }, {
    name: 'Berlin',
    月份: 'May',
    月均降雨量: 52.6
  }, {
    name: 'Berlin',
    月份: 'Jun.',
    月均降雨量: 35.5
  }, {
    name: 'Berlin',
    月份: 'Jul.',
    月均降雨量: 37.4
  }, {
    name: 'Berlin',
    月份: 'Aug.',
    月均降雨量: 42.4
  }];
  var stackedColumnPlot = new G2Plot.Column('container-35', {
    data: data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [// 柱形图数据标签位置自动调整
      {
        type: 'interval-adjust-position'
      }, // 数据标签防遮挡
      {
        type: 'interval-hide-overlap'
      }, // 数据标签文颜色自动调整
      {
        type: 'adjust-color'
      }]
    }
  });
  stackedColumnPlot.render();
});`,
  },
  {
    fileName: 'corner-radius.ts',
    fileIndex: 36,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.cornerRadius = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var column = new G2Plot.Column('container-36', {
      data: data,
      xField: 'city',
      yField: 'value',
      seriesField: 'type',
      isGroup: 'true',
      columnStyle: {
        radius: [20, 20, 0, 0]
      }
    });
    column.render();
  });
});`,
  },
  {
    fileName: 'dodge-padding.ts',
    fileIndex: 37,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dodgePadding = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Column('container-37', {
      data: data,
      isGroup: true,
      xField: '月份',
      yField: '月均降雨量',
      seriesField: 'name',
      // 分组柱状图 组内柱子间的间距 (像素级别)
      dodgePadding: 2,
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle',
        // 'top', 'middle', 'bottom'
        // 可配置附加的布局方法
        layout: [// 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position'
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap'
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color'
        }]
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'interval-padding.ts',
    fileIndex: 38,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.intervalPadding = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Column('container-38', {
      data: data,
      isGroup: true,
      xField: '月份',
      yField: '月均降雨量',
      seriesField: 'name',
      // 分组柱状图 组内柱子间的间距 (像素级别)
      dodgePadding: 2,
      // 分组柱状图 组间的间距 (像素级别)
      intervalPadding: 20,
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle',
        // 'top', 'middle', 'bottom'
        // 可配置附加的布局方法
        layout: [// 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position'
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap'
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color'
        }]
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'stacked.ts',
    fileIndex: 39,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stacked = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var column = new G2Plot.Column('container-39', {
      data: data,
      xField: 'product_type',
      yField: 'order_amt',
      isGroup: true,
      isStack: true,
      seriesField: 'product_sub_type',
      groupField: 'sex'
    });
    column.render();
  });
});`,
  },
  {
    fileName: 'stacked2.ts',
    fileIndex: 40,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stacked2 = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/cK%24sTxSsah/stack-group-column.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var column = new G2Plot.Column('container-40', {
      data: data,
      xField: 'month',
      yField: 'value',
      isGroup: true,
      isStack: true,
      seriesField: 'type',
      groupField: 'name'
    });
    column.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 41,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    country: 'Asia',
    year: '1750',
    value: 502
  }, {
    country: 'Asia',
    year: '1800',
    value: 635
  }, {
    country: 'Asia',
    year: '1850',
    value: 809
  }, {
    country: 'Asia',
    year: '1900',
    value: 947
  }, {
    country: 'Asia',
    year: '1950',
    value: 1402
  }, {
    country: 'Asia',
    year: '1999',
    value: 3634
  }, {
    country: 'Asia',
    year: '2050',
    value: 5268
  }, {
    country: 'Africa',
    year: '1750',
    value: 106
  }, {
    country: 'Africa',
    year: '1800',
    value: 107
  }, {
    country: 'Africa',
    year: '1850',
    value: 111
  }, {
    country: 'Africa',
    year: '1900',
    value: 133
  }, {
    country: 'Africa',
    year: '1950',
    value: 221
  }, {
    country: 'Africa',
    year: '1999',
    value: 767
  }, {
    country: 'Africa',
    year: '2050',
    value: 1766
  }, {
    country: 'Europe',
    year: '1750',
    value: 163
  }, {
    country: 'Europe',
    year: '1800',
    value: 203
  }, {
    country: 'Europe',
    year: '1850',
    value: 276
  }, {
    country: 'Europe',
    year: '1900',
    value: 408
  }, {
    country: 'Europe',
    year: '1950',
    value: 547
  }, {
    country: 'Europe',
    year: '1999',
    value: 729
  }, {
    country: 'Europe',
    year: '2050',
    value: 628
  }];
  var columnPlot = new G2Plot.Column('container-41', {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
    label: {
      position: 'middle',
      content: function content(item) {
        return item.value.toFixed(2);
      },
      style: {
        fill: '#fff'
      }
    }
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'interaction.ts',
    fileIndex: 42,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.interaction = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  G2Plot.G2.registerInteraction('element-link', {
    start: [{
      trigger: 'interval:mouseenter',
      action: 'element-link-by-color:link'
    }],
    end: [{
      trigger: 'interval:mouseleave',
      action: 'element-link-by-color:unlink'
    }]
  });

  fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var columnPlot = new G2Plot.Column('container-42', {
      data: data,
      xField: 'year',
      yField: 'value',
      seriesField: 'type',
      isPercent: true,
      isStack: true,
      meta: {
        value: {
          min: 0,
          max: 1
        }
      },
      label: {
        position: 'middle',
        content: function content(item) {
          return "".concat((item.value * 100).toFixed(2), "%");
        },
        style: {
          fill: '#fff'
        }
      },
      tooltip: false,
      interactions: [{
        type: 'element-highlight-by-color'
      }, {
        type: 'element-link'
      }]
    });
    columnPlot.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 43,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    values: [76, 100]
  }, {
    type: '分类二',
    values: [56, 108]
  }, {
    type: '分类三',
    values: [38, 129]
  }, {
    type: '分类四',
    values: [58, 155]
  }, {
    type: '分类五',
    values: [45, 120]
  }, {
    type: '分类六',
    values: [23, 99]
  }, {
    type: '分类七',
    values: [18, 56]
  }, {
    type: '分类八',
    values: [18, 34]
  }];
  var barPlot = new G2Plot.Column('container-43', {
    data: data,
    xField: 'type',
    yField: 'values',
    isRange: true,
    label: {
      position: 'middle',
      layout: [{
        type: 'adjust-color'
      }]
    }
  });
  barPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 44,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var stackedColumnPlot = new G2Plot.Column('container-44', {
      data: data,
      isStack: true,
      xField: 'year',
      yField: 'value',
      seriesField: 'type',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle',
        // 'top', 'bottom', 'middle'
        // 可配置附加的布局方法
        layout: [// 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position'
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap'
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color'
        }]
      }
    });
    stackedColumnPlot.render();
  });
});`,
  },
  {
    fileName: 'column-background.ts',
    fileIndex: 45,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.columnBackground = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var stackedColumnPlot = new G2Plot.Column('container-45', {
      data: data,
      isStack: true,
      xField: 'year',
      yField: 'value',
      seriesField: 'type',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle' // 'top', 'bottom', 'middle'

      },
      interactions: [{
        type: 'active-region',
        enable: false
      }],
      columnBackground: {
        style: {
          fill: 'rgba(0,0,0,0.1)'
        }
      }
    });
    stackedColumnPlot.render();
  });
});`,
  },
  {
    fileName: 'area-with-line-annotation.ts',
    fileIndex: 46,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.areaWithLineAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Area('container-46', {
      data: data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      meta: {
        Date: {
          range: [0.02, 0.98]
        }
      },
      yAxis: {
        grid: null
      },
      smooth: true,
      annotations: [{
        type: 'line',

        /** 起始位置 */
        start: ['min', 'median'],

        /** 结束位置 */
        end: ['max', 'median'],
        text: {
          content: '中位线',
          position: 'right',
          offsetY: 18,
          style: {
            textAlign: 'right'
          }
        },
        style: {
          lineWidth: 0.5,
          lineDash: [4, 4]
        }
      }]
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'image-annotation.ts',
    fileIndex: 47,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.imageAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-47', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: '-50%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return "".concat((percent * 100).toFixed(0), "%");
      },
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center'
      }
    },
    statistic: null,
    annotations: [{
      type: 'image',
      src: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ',

      /** 位置 */
      position: ['50%', '50%'],

      /** 图形样式属性 */
      style: {
        width: 50,
        height: 50
      },

      /** x 方向的偏移量 */
      offsetX: -25,

      /** y 方向的偏移量 */
      offsetY: 40
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'line-annotation.ts',
    fileIndex: 48,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.In order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var maxValue = Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
      return d.scales;
    })));
    var averageValue = data.map(function (d) {
      return d.scales;
    }).reduce(function (a, b) {
      return a + b;
    }, 0) / data.length;
    var line = new G2Plot.Line('container-48', {
      data: data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        tickCount: 5
      },
      smooth: true,
      annotations: [{
        type: 'line',

        /** 起始位置 */
        start: ['min', maxValue],

        /** 结束位置 */
        end: ['max', maxValue],
        text: {
          content: '最大值',
          position: 'right',
          offsetY: 18,
          style: {
            textAlign: 'right'
          }
        },
        style: {
          lineDash: [4, 4]
        }
      }, {
        type: 'line',

        /** 起始位置 */
        start: ['min', averageValue],

        /** 结束位置 */
        end: ['max', averageValue],
        text: {
          content: '平均值线',
          position: 'right',
          offsetY: -6,
          style: {
            textAlign: 'right',
            fill: 'lightblue'
          }
        },
        style: {
          lineDash: [4, 4],
          stroke: 'lightblue'
        }
      }]
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'line-annotation1.ts',
    fileIndex: 49,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineAnnotation1 = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/89729b32-1592-44ae-ba96-1e296638f5f7.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-49', {
      data: data,
      padding: 'auto',
      xField: 'date',
      yField: 'value',
      meta: {
        date: {
          formatter: function formatter(v) {
            return v.split(' ') ? v.split(' ')[1] : '';
          }
        },
        value: {
          min: 0,
          max: Math.pow(10, 7),
          tickCount: 10,
          formatter: function formatter(v) {
            return "".concat(v / Math.pow(10, 6), "M");
          }
        }
      },
      lineStyle: {
        lineCap: 'round'
      },
      interactions: [{
        type: 'brush'
      }]
    });
    line.render();
    var yScale = line.chart.getScaleByField('value');
    var coordinate = line.chart.getCoordinate();

    var getDimYPosition = function getDimYPosition(value) {
      return coordinate.convertDim(yScale.scale(value), 'y');
    };

    line.update({ ...line.options,
      annotations: [{
        type: 'line',
        start: {
          date: 'January 1991',
          value: 2549000
        },
        end: ['August 1990', 3850000],
        text: {
          // 旅游萧条 标注
          content: 'The UK recession of 1991',
          rotate: 0,
          autoRotate: false,
          offsetY: getDimYPosition(3850000) - getDimYPosition(2549000) - 10,
          style: {
            textAlign: 'center',
            textBaseline: 'bottom'
          }
        },
        style: {
          stroke: '#000',
          lineDash: [2, 4]
        }
      }]
    });
  });
});`,
  },
  {
    fileName: 'region-and-data-marker.ts',
    fileIndex: 50,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.regionAndDataMarker = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    month: '1',
    value: 1078
  }, {
    month: '2',
    value: 1216
  }, {
    month: '3',
    value: 758
  }, {
    month: '4',
    value: 623
  }, {
    month: '5',
    value: 319
  }, {
    month: '6',
    value: 422
  }, {
    month: '7',
    value: -4
  }, {
    month: '8',
    value: -217
  }, {
    month: '9',
    value: -358
  }, {
    month: '10',
    value: 1513
  }, {
    month: '11',
    value: 1388
  }, {
    month: '12',
    value: 597
  }];
  var line = new G2Plot.Line('container-50', {
    data: data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    meta: {
      value: {
        max: 2000,
        min: -1000
      },
      month: {
        formatter: function formatter(val) {
          return "".concat(val, " u6708");
        }
      }
    },
    annotations: [{
      type: 'region',
      start: ['7', 'min'],
      end: ['9', 'max']
    }, {
      type: 'dataMarker',
      position: ['2', 1216],
      text: {
        content: '2月份因逢春节水产销售需求旺盛，需求大增',
        style: {
          textAlign: 'left'
        }
      },
      line: {
        length: 20
      },
      point: {
        style: {
          fill: '#f5222d',
          stroke: '#f5222d'
        }
      },
      autoAdjust: false
    }]
  });
  line.render();
});`,
  },
  {
    fileName: 'region-annotation.ts',
    fileIndex: 51,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.regionAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    month: '1',
    value: 1078
  }, {
    month: '2',
    value: 1216
  }, {
    month: '3',
    value: 758
  }, {
    month: '4',
    value: 623
  }, {
    month: '5',
    value: 319
  }, {
    month: '6',
    value: 422
  }, {
    month: '7',
    value: -4
  }, {
    month: '8',
    value: -217
  }, {
    month: '9',
    value: -358
  }, {
    month: '10',
    value: 1513
  }, {
    month: '11',
    value: 1388
  }, {
    month: '12',
    value: 597
  }];
  var columnPlot = new G2Plot.Column('container-51', {
    data: data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    meta: {
      value: {
        max: 2000,
        min: -1000
      },
      month: {
        formatter: function formatter(val) {
          return "".concat(val, " u6708");
        }
      }
    },
    annotations: [{
      type: 'region',
      // @ts-ignore todo 修复 G2 类型定义
      start: function start(xScale) {
        var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
        var x = xScale.scale('7') - ratio / 2;
        return ["".concat(x * 100, "%"), '0%'];
      },
      // @ts-ignore todo 修复 G2 类型定义
      end: function end(xScale) {
        var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
        var x = xScale.scale('9') + ratio / 2;
        return ["".concat(x * 100, "%"), '100%'];
      }
    }]
  });
  columnPlot.render();
});`,
  },
  {
    fileName: 'legend-focus.ts',
    fileIndex: 52,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.legendFocus = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Column('container-52', {
      data: data,
      xField: 'city',
      yField: 'value',
      seriesField: 'type',
      isGroup: 'true',
      legend: {
        selected: {
          // 默认置灰
          茶叶: false
        }
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'legend-item-value.ts',
    fileIndex: 53,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.legendItemValue = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Column('container-53', {
      data: data,
      xField: 'city',
      yField: 'value',
      seriesField: 'type',
      isGroup: 'true',
      legend: {
        position: 'right-top',
        offsetX: 8,
        title: {
          text: '产品类别 (平均销售量）',
          spacing: 8
        },
        itemValue: {
          formatter: function formatter(text, item) {
            var items = data.filter(function (d) {
              return d.type === item.value;
            });
            return items.length ? items.reduce(function (a, b) {
              return a + b.value;
            }, 0) / items.length : '-';
          },
          style: {
            opacity: 0.65
          }
        }
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'column-line.ts',
    fileIndex: 54,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.columnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    time: '2019-03',
    value: 350,
    count: 800
  }, {
    time: '2019-04',
    value: 900,
    count: 600
  }, {
    time: '2019-05',
    value: 300,
    count: 400
  }, {
    time: '2019-06',
    value: 450,
    count: 380
  }, {
    time: '2019-07',
    value: 470,
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-54', {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column'
    }, {
      geometry: 'line',
      lineStyle: {
        lineWidth: 2
      }
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'column-multi-line.ts',
    fileIndex: 55,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.columnMultiLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvData = [{
    time: '2019-03',
    value: 35
  }, {
    time: '2019-04',
    value: 90
  }, {
    time: '2019-05',
    value: 30
  }, {
    time: '2019-06',
    value: 45
  }, {
    time: '2019-07',
    value: 47
  }];
  var transformData = [{
    time: '2019-03',
    count: 800,
    name: 'a'
  }, {
    time: '2019-04',
    count: 600,
    name: 'a'
  }, {
    time: '2019-05',
    count: 400,
    name: 'a'
  }, {
    time: '2019-06',
    count: 380,
    name: 'a'
  }, {
    time: '2019-07',
    count: 220,
    name: 'a'
  }, {
    time: '2019-03',
    count: 750,
    name: 'b'
  }, {
    time: '2019-04',
    count: 650,
    name: 'b'
  }, {
    time: '2019-05',
    count: 450,
    name: 'b'
  }, {
    time: '2019-06',
    count: 400,
    name: 'b'
  }, {
    time: '2019-07',
    count: 320,
    name: 'b'
  }, {
    time: '2019-03',
    count: 900,
    name: 'c'
  }, {
    time: '2019-04',
    count: 600,
    name: 'c'
  }, {
    time: '2019-05',
    count: 450,
    name: 'c'
  }, {
    time: '2019-06',
    count: 300,
    name: 'c'
  }, {
    time: '2019-07',
    count: 200,
    name: 'c'
  }];
  var dualAxes = new G2Plot.DualAxes('container-55', {
    data: [uvData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      columnWidthRatio: 0.4
    }, {
      geometry: 'line',
      seriesField: 'name'
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'custom-column-line.ts',
    fileIndex: 56,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    time: '2019-03',
    value: 350,
    count: 800
  }, {
    time: '2019-04',
    value: 900,
    count: 600
  }, {
    time: '2019-05',
    value: 300,
    count: 400
  }, {
    time: '2019-06',
    value: 450,
    count: 380
  }, {
    time: '2019-07',
    value: 470,
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-56', {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    yAxis: {
      // 格式化左坐标轴
      value: {
        min: 0,
        label: {
          formatter: function formatter(val) {
            return "".concat(val, "u4E2A");
          }
        }
      },
      // 隐藏右坐标轴
      count: false
    },
    geometryOptions: [{
      geometry: 'column',
      color: '#5B8FF9',
      columnWidthRatio: 0.4,
      label: {
        position: 'middle'
      }
    }, {
      geometry: 'line',
      smooth: true,
      color: '#5AD8A6'
    }],
    // 更改柱线交互，默认为 [{type: 'active-region'}]
    interactions: [{
      type: 'element-highlight'
    }, {
      type: 'active-region'
    }],
    annotations: {
      value: [{
        type: 'text',
        position: ['2019-06', 'max'],
        content: '柱线混合图'
      }],
      count: [{
        type: 'dataMarker',
        top: true,
        position: ['2019-05', 400],
        line: {
          length: 20
        },
        text: {
          content: '2019-05, 发布新版本',
          style: {
            textAlign: 'left'
          }
        }
      }]
    }
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'demo-more-1.ts',
    fileIndex: 57,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.demoMore1 = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    time: '2020-08-20',
    consumeTime: 10868,
    completeTime: 649.483
  }, {
    time: '2020-08-21',
    consumeTime: 8786,
    completeTime: 1053.7
  }, {
    time: '2020-08-22',
    consumeTime: 10824,
    completeTime: 679.817
  }, {
    time: '2020-08-23',
    consumeTime: 7860,
    completeTime: 638.117
  }, {
    time: '2020-08-24',
    consumeTime: 13253,
    completeTime: 843.3
  }, {
    time: '2020-08-25',
    consumeTime: 17015,
    completeTime: 1092.983
  }, {
    time: '2020-08-26',
    consumeTime: 19298,
    completeTime: 1036.317
  }, {
    time: '2020-08-27',
    consumeTime: 13937,
    completeTime: 1031.9
  }, {
    time: '2020-08-28',
    consumeTime: 11541,
    completeTime: 803.467
  }, {
    time: '2020-08-29',
    consumeTime: 15244,
    completeTime: 830.733
  }, {
    time: '2020-08-30',
    consumeTime: 14247,
    completeTime: 709.867
  }, {
    time: '2020-08-31',
    consumeTime: 9402,
    completeTime: 665.233
  }, {
    time: '2020-09-01',
    consumeTime: 10440,
    completeTime: 696.367
  }, {
    time: '2020-09-02',
    consumeTime: 9345,
    completeTime: 692.867
  }, {
    time: '2020-09-03',
    consumeTime: 18459,
    completeTime: 936.017
  }, {
    time: '2020-09-04',
    consumeTime: 9763,
    completeTime: 782.867
  }, {
    time: '2020-09-05',
    consumeTime: 11074,
    completeTime: 653.8
  }, {
    time: '2020-09-06',
    consumeTime: 11770,
    completeTime: 856.683
  }, {
    time: '2020-09-07',
    consumeTime: 12206,
    completeTime: 777.15
  }, {
    time: '2020-09-08',
    consumeTime: 11434,
    completeTime: 773.283
  }, {
    time: '2020-09-09',
    consumeTime: 16218,
    completeTime: 833.3
  }, {
    time: '2020-09-10',
    consumeTime: 11914,
    completeTime: 793.517
  }, {
    time: '2020-09-11',
    consumeTime: 16781,
    completeTime: 894.45
  }, {
    time: '2020-09-12',
    consumeTime: 10555,
    completeTime: 725.55
  }, {
    time: '2020-09-13',
    consumeTime: 10899,
    completeTime: 709.967
  }, {
    time: '2020-09-14',
    consumeTime: 10713,
    completeTime: 787.6
  }, {
    time: '2020-09-15',
    consumeTime: 0,
    completeTime: 644.183
  }, {
    time: '2020-09-16',
    consumeTime: 0,
    completeTime: 1066.65
  }, {
    time: '2020-09-17',
    consumeTime: 20357,
    completeTime: 932.45
  }, {
    time: '2020-09-18',
    consumeTime: 10424,
    completeTime: 753.583
  }];
  var dualAxes = new G2Plot.DualAxes('container-57', {
    data: [data, data],
    xField: 'time',
    yField: ['consumeTime', 'completeTime'],
    meta: {
      consumeTime: {
        alias: '产出耗时',
        formatter: function formatter(v) {
          return Number((v / 60).toFixed(2));
        }
      },
      completeTime: {
        alias: '完成时间',
        formatter: function formatter(v) {
          return Number((v / 100).toFixed(1));
        }
      }
    },
    geometryOptions: [{
      geometry: 'column',
      color: '#586bce'
    }, {
      geometry: 'line',
      color: '#29cae4'
    }],
    xAxis: {
      label: {
        autoRotate: true,
        autoHide: false,
        autoEllipsis: false
      },
      tickCount: data.length / 2
    },
    yAxis: {
      consumeTime: {
        label: {
          formatter: function formatter(v) {
            return "".concat(v, "u5206");
          }
        }
      },
      completeTime: {
        label: {
          formatter: function formatter(v) {
            return "".concat(v);
          }
        }
      }
    },
    legend: {
      itemName: {
        formatter: function formatter(text, item) {
          return item.value === 'consumeTime' ? '产出耗时(分)' : '完成时间(分)';
        }
      }
    },
    annotations: {
      consumeTime: [{
        type: 'line',
        top: true,
        start: ['2020-08-26', 'min'],
        end: ['2020-08-26', 'max'],
        text: {
          content: '发布时间点',
          position: 'end',
          autoRotate: false,
          style: {
            textAlign: 'start'
          }
        }
      }],
      completeTime: [{
        type: 'line',
        top: true,
        start: ['min', 1000],
        end: ['max', 1000],
        style: {
          lineWidth: 1,
          lineDash: [3, 3]
        },
        text: {
          content: '完成时间阈值(1000s)',
          position: 'end',
          style: {
            textAlign: 'end'
          }
        }
      }]
    }
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'range-column-line.ts',
    fileIndex: 58,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.rangeColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    time: '2019-03',
    value: [200, 350],
    count: 800
  }, {
    time: '2019-04',
    value: [400, 650],
    count: 600
  }, {
    time: '2019-05',
    value: [150, 350],
    count: 400
  }, {
    time: '2019-06',
    value: [100, 450],
    count: 380
  }, {
    time: '2019-07',
    value: [500, 550],
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-58', {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      color: '#5B8FF9',
      isRange: true
    }, {
      geometry: 'line',
      color: '#5AD8A6',
      lineStyle: {
        lineWidth: 2,
        stroke: '#5AD8A6'
      }
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'slider-column-line.ts',
    fileIndex: 59,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.sliderColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    time: '2020-08-20',
    consumeTime: 10868,
    completeTime: 649.483
  }, {
    time: '2020-08-21',
    consumeTime: 8786,
    completeTime: 1053.7
  }, {
    time: '2020-08-22',
    consumeTime: 10824,
    completeTime: 679.817
  }, {
    time: '2020-08-23',
    consumeTime: 7860,
    completeTime: 638.117
  }, {
    time: '2020-08-24',
    consumeTime: 13253,
    completeTime: 843.3
  }, {
    time: '2020-08-25',
    consumeTime: 17015,
    completeTime: 1092.983
  }, {
    time: '2020-08-26',
    consumeTime: 19298,
    completeTime: 1036.317
  }, {
    time: '2020-08-27',
    consumeTime: 13937,
    completeTime: 1031.9
  }, {
    time: '2020-08-28',
    consumeTime: 11541,
    completeTime: 803.467
  }, {
    time: '2020-08-29',
    consumeTime: 15244,
    completeTime: 830.733
  }, {
    time: '2020-08-30',
    consumeTime: 14247,
    completeTime: 709.867
  }, {
    time: '2020-08-31',
    consumeTime: 9402,
    completeTime: 665.233
  }, {
    time: '2020-09-01',
    consumeTime: 10440,
    completeTime: 696.367
  }, {
    time: '2020-09-02',
    consumeTime: 9345,
    completeTime: 692.867
  }, {
    time: '2020-09-03',
    consumeTime: 18459,
    completeTime: 936.017
  }, {
    time: '2020-09-04',
    consumeTime: 9763,
    completeTime: 782.867
  }, {
    time: '2020-09-05',
    consumeTime: 11074,
    completeTime: 653.8
  }, {
    time: '2020-09-06',
    consumeTime: 11770,
    completeTime: 856.683
  }, {
    time: '2020-09-07',
    consumeTime: 12206,
    completeTime: 777.15
  }, {
    time: '2020-09-08',
    consumeTime: 11434,
    completeTime: 773.283
  }, {
    time: '2020-09-09',
    consumeTime: 16218,
    completeTime: 833.3
  }, {
    time: '2020-09-10',
    consumeTime: 11914,
    completeTime: 793.517
  }, {
    time: '2020-09-11',
    consumeTime: 16781,
    completeTime: 894.45
  }, {
    time: '2020-09-12',
    consumeTime: 10555,
    completeTime: 725.55
  }, {
    time: '2020-09-13',
    consumeTime: 10899,
    completeTime: 709.967
  }, {
    time: '2020-09-14',
    consumeTime: 10713,
    completeTime: 787.6
  }, {
    time: '2020-09-15',
    consumeTime: 0,
    completeTime: 644.183
  }, {
    time: '2020-09-16',
    consumeTime: 0,
    completeTime: 1066.65
  }, {
    time: '2020-09-17',
    consumeTime: 20357,
    completeTime: 932.45
  }, {
    time: '2020-09-18',
    consumeTime: 10424,
    completeTime: 753.583
  }];
  var dualAxes = new G2Plot.DualAxes('container-59', {
    data: [data, data],
    xField: 'time',
    yField: ['consumeTime', 'completeTime'],
    limitInPlot: false,
    padding: [10, 20, 80, 30],
    // 需要设置底部 padding 值，同 css
    slider: {},
    meta: {
      time: {
        sync: false // 开启之后 slider 无法重绘

      }
    },
    geometryOptions: [{
      geometry: 'column'
    }, {
      geometry: 'line'
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'custom-dual-line.ts',
    fileIndex: 60,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customDualLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    year: '1991',
    value: 3,
    count: 10
  }, {
    year: '1992',
    value: 4,
    count: 4
  }, {
    year: '1993',
    value: 3.5,
    count: 5
  }, {
    year: '1994',
    value: 5,
    count: 5
  }, {
    year: '1995',
    value: 4.9,
    count: 4.9
  }, {
    year: '1996',
    value: 6,
    count: 35
  }, {
    year: '1997',
    value: 7,
    count: 7
  }, {
    year: '1998',
    value: 9,
    count: 1
  }, {
    year: '1999',
    value: 13,
    count: 20
  }];
  var dualAxes = new G2Plot.DualAxes('container-60', {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'line',
      smooth: false,
      color: '#5B8FF9',
      label: {
        formatter: function formatter(datum) {
          return "".concat(datum.value, "u4E2A");
        }
      },
      lineStyle: {
        lineWidth: 3,
        lineDash: [5, 5]
      }
    }, {
      geometry: 'line',
      smooth: true,
      color: '#5AD8A6',
      lineStyle: {
        lineWidth: 4,
        opacity: 0.5
      },
      label: {
        formatter: function formatter(datum) {
          return "".concat(datum.count, "u4E2A");
        }
      },
      point: {
        shape: 'circle',
        size: 4,
        style: {
          opacity: 0.5,
          stroke: '#5AD8A6',
          fill: '#fff'
        }
      }
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'dual-line.ts',
    fileIndex: 61,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dualLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    year: '1991',
    value: 3,
    count: 10
  }, {
    year: '1992',
    value: 4,
    count: 4
  }, {
    year: '1993',
    value: 3.5,
    count: 5
  }, {
    year: '1994',
    value: 5,
    count: 5
  }, {
    year: '1995',
    value: 4.9,
    count: 4.9
  }, {
    year: '1996',
    value: 6,
    count: 35
  }, {
    year: '1997',
    value: 7,
    count: 7
  }, {
    year: '1998',
    value: 9,
    count: 1
  }, {
    year: '1999',
    value: 13,
    count: 20
  }];
  var dualAxes = new G2Plot.DualAxes('container-61', {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'line',
      color: '#5B8FF9'
    }, {
      geometry: 'line',
      color: '#5AD8A6'
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'dual-multi-line.ts',
    fileIndex: 62,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dualMultiLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800,
    name: 'a'
  }, {
    time: '2019-04',
    count: 600,
    name: 'a'
  }, {
    time: '2019-05',
    count: 400,
    name: 'a'
  }, {
    time: '2019-06',
    count: 380,
    name: 'a'
  }, {
    time: '2019-07',
    count: 220,
    name: 'a'
  }, {
    time: '2019-03',
    count: 750,
    name: 'b'
  }, {
    time: '2019-04',
    count: 650,
    name: 'b'
  }, {
    time: '2019-05',
    count: 450,
    name: 'b'
  }, {
    time: '2019-06',
    count: 400,
    name: 'b'
  }, {
    time: '2019-07',
    count: 320,
    name: 'b'
  }, {
    time: '2019-03',
    count: 900,
    name: 'c'
  }, {
    time: '2019-04',
    count: 600,
    name: 'c'
  }, {
    time: '2019-05',
    count: 450,
    name: 'c'
  }, {
    time: '2019-06',
    count: 300,
    name: 'c'
  }, {
    time: '2019-07',
    count: 200,
    name: 'c'
  }];
  var dualAxes = new G2Plot.DualAxes('container-62', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'line',
      seriesField: 'type',
      lineStyle: {
        lineWidth: 3,
        lineDash: [5, 5]
      },
      smooth: true
    }, {
      geometry: 'line',
      seriesField: 'name',
      point: {}
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'dual-step-line.ts',
    fileIndex: 63,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dualStepLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    year: '1991',
    value: 3,
    count: 10
  }, {
    year: '1992',
    value: 4,
    count: 4
  }, {
    year: '1993',
    value: 3.5,
    count: 5
  }, {
    year: '1994',
    value: 5,
    count: 5
  }, {
    year: '1995',
    value: 4.9,
    count: 4.9
  }, {
    year: '1996',
    value: 6,
    count: 35
  }, {
    year: '1997',
    value: 7,
    count: 7
  }, {
    year: '1998',
    value: 9,
    count: 1
  }, {
    year: '1999',
    value: 13,
    count: 20
  }];
  var dualAxes = new G2Plot.DualAxes('container-63', {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'line',
      smooth: false,
      color: '#29cae4',
      stepType: 'vh'
    }, {
      geometry: 'line',
      color: '#586bce',
      smooth: true
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'custom-grouped-column-line.ts',
    fileIndex: 64,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customGroupedColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800
  }, {
    time: '2019-04',
    count: 600
  }, {
    time: '2019-05',
    count: 400
  }, {
    time: '2019-06',
    count: 380
  }, {
    time: '2019-07',
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-64', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      isGroup: true,
      seriesField: 'type',
      columnWidthRatio: 0.4,
      label: {},
      color: ['#5B8FF9', '#5D7092']
    }, {
      geometry: 'line',
      color: '#5AD8A6'
    }],
    legend: {
      custom: true,
      position: 'bottom',
      items: [{
        value: 'uv',
        name: 'uv',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5B8FF9',
            r: 5
          }
        }
      }, {
        value: 'bill',
        name: '账单',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5D7092',
            r: 5
          }
        }
      }, {
        value: 'count',
        name: '数值',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5AD8A6',
            r: 5
          }
        }
      }]
    }
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'grouped-column-line.ts',
    fileIndex: 65,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.groupedColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800
  }, {
    time: '2019-04',
    count: 600
  }, {
    time: '2019-05',
    count: 400
  }, {
    time: '2019-06',
    count: 380
  }, {
    time: '2019-07',
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-65', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      isGroup: true,
      seriesField: 'type'
    }, {
      geometry: 'line',
      lineStyle: {
        lineWidth: 2
      }
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'grouped-column-multi-line.ts',
    fileIndex: 66,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.groupedColumnMultiLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800,
    name: 'a'
  }, {
    time: '2019-04',
    count: 600,
    name: 'a'
  }, {
    time: '2019-05',
    count: 400,
    name: 'a'
  }, {
    time: '2019-06',
    count: 380,
    name: 'a'
  }, {
    time: '2019-07',
    count: 220,
    name: 'a'
  }, {
    time: '2019-03',
    count: 750,
    name: 'b'
  }, {
    time: '2019-04',
    count: 650,
    name: 'b'
  }, {
    time: '2019-05',
    count: 450,
    name: 'b'
  }, {
    time: '2019-06',
    count: 400,
    name: 'b'
  }, {
    time: '2019-07',
    count: 320,
    name: 'b'
  }, {
    time: '2019-03',
    count: 900,
    name: 'c'
  }, {
    time: '2019-04',
    count: 600,
    name: 'c'
  }, {
    time: '2019-05',
    count: 450,
    name: 'c'
  }, {
    time: '2019-06',
    count: 300,
    name: 'c'
  }, {
    time: '2019-07',
    count: 200,
    name: 'c'
  }];
  var dualAxes = new G2Plot.DualAxes('container-66', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      isGroup: true,
      seriesField: 'type',
      columnWidthRatio: 0.4
    }, {
      geometry: 'line',
      seriesField: 'name',
      lineStyle: function lineStyle(_ref) {
        var name = _ref.name;

        if (name === 'a') {
          return {
            lineDash: [1, 4],
            opacity: 1
          };
        }

        return {
          opacity: 0.5
        };
      }
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'stacked-grouped-column-line.ts',
    fileIndex: 67,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stackedGroupedColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var columnData = [{
    name: 'London',
    month: 'Jan.',
    value: 12.9,
    type: '语文'
  }, {
    name: 'London',
    month: 'Jan.',
    value: 10.9,
    type: '数学'
  }, {
    name: 'London',
    month: 'Jan.',
    value: 120.9,
    type: '英语'
  }, {
    name: 'Berlin',
    month: 'Jan.',
    value: 12.4,
    type: '美术'
  }, {
    name: 'Berlin',
    month: 'Jan.',
    value: 12.4,
    type: '线性代数'
  }, {
    name: 'beijing',
    month: 'Jan.',
    value: 12.4,
    type: '高数'
  }, {
    name: 'London',
    month: 'Feb.',
    value: 2.9,
    type: '语文'
  }, {
    name: 'London',
    month: 'Feb.',
    value: 5.9,
    type: '数学'
  }, {
    name: 'London',
    month: 'Feb.',
    value: 10.9,
    type: '英语'
  }, {
    name: 'Berlin',
    month: 'Feb.',
    value: 22.4,
    type: '美术'
  }, {
    name: 'Berlin',
    month: 'Feb.',
    value: 32.4,
    type: '线性代数'
  }, {
    name: 'beijing',
    month: 'Feb.',
    value: 42.4,
    type: '高数'
  }, {
    name: 'London',
    month: 'Mar.',
    value: 2.9,
    type: '语文'
  }, {
    name: 'London',
    month: 'Mar.',
    value: 5.9,
    type: '数学'
  }, {
    name: 'Berlin',
    month: 'Mar.',
    value: 22.4,
    type: '美术'
  }, {
    name: 'Berlin',
    month: 'Mar.',
    value: 32.4,
    type: '线性代数'
  }, {
    name: 'beijing',
    month: 'Mar.',
    value: 42.4,
    type: '高数'
  }];
  var lineData = [{
    name: '福老师',
    month: 'Jan.',
    value: 12.9,
    type: '美术'
  }, {
    name: '逍老师',
    month: 'Jan.',
    value: 1.4,
    type: '线性代数'
  }, {
    name: '新老师',
    month: 'Jan.',
    value: 2.4,
    type: '高数'
  }, {
    name: '福老师',
    month: 'Feb.',
    value: 18.9,
    type: '美术'
  }, {
    name: '逍老师',
    month: 'Feb.',
    value: 13.4,
    type: '线性代数'
  }, {
    name: '新老师',
    month: 'Feb.',
    value: 15.4,
    type: '高数'
  }, {
    name: '福老师',
    month: 'Mar.',
    value: 8.9,
    type: '美术'
  }, {
    name: '逍老师',
    month: 'Mar.',
    value: 6.4,
    type: '线性代数'
  }, {
    name: '新老师',
    month: 'Mar.',
    value: 5.4,
    type: '高数'
  }];
  var dualAxes = new G2Plot.DualAxes('container-67', {
    data: [columnData, lineData],
    xField: 'month',
    yField: ['value', 'value'],
    geometryOptions: [{
      geometry: 'column',
      isGroup: true,
      isStack: true,
      seriesField: 'type',
      groupField: 'name'
    }, {
      geometry: 'line',
      seriesField: 'name',
      isStack: true,
      smooth: true
    }],
    tooltip: false
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'custom-stacked-column-line.ts',
    fileIndex: 68,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customStackedColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var registerTheme = G2Plot.G2.registerTheme;
  registerTheme('custom-theme', {
    colors10: ['#FACDAA', '#F4A49E', '#EE7B91', '#E85285', '#BE408C', '#BE408C'],

    /** 20色板 */
    colors20: ['#FACDAA', '#F4A49E', '#EE7B91', '#E85285', '#BE408C', '#BE408C', '#942D93']
  });
  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800
  }, {
    time: '2019-04',
    count: 600
  }, {
    time: '2019-05',
    count: 400
  }, {
    time: '2019-06',
    count: 380
  }, {
    time: '2019-07',
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-68', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      isStack: true,
      seriesField: 'type',
      columnWidthRatio: 0.4,
      label: {}
    }, {
      geometry: 'line'
    }],
    legend: {
      marker: {
        symbol: 'circle',
        style: {
          lineWidth: 2,
          r: 6,
          stroke: '#5AD8A6',
          fill: '#fff'
        }
      },
      layout: 'vertical',
      position: 'right',
      itemName: {
        formatter: function formatter(val) {
          return "@".concat(val);
        },
        style: {
          fill: '#333'
        }
      }
    },
    interactions: [{
      type: 'element-highlight'
    }, {
      type: 'active-region'
    }],
    animation: false,
    theme: 'custom-theme'
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'stacked-column-line.ts',
    fileIndex: 69,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stackedColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800
  }, {
    time: '2019-04',
    count: 600
  }, {
    time: '2019-05',
    count: 400
  }, {
    time: '2019-06',
    count: 380
  }, {
    time: '2019-07',
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-69', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      isStack: true,
      seriesField: 'type'
    }, {
      geometry: 'line'
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'stacked-column-multi-line.ts',
    fileIndex: 70,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stackedColumnMultiLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800,
    name: 'a'
  }, {
    time: '2019-04',
    count: 600,
    name: 'a'
  }, {
    time: '2019-05',
    count: 400,
    name: 'a'
  }, {
    time: '2019-06',
    count: 380,
    name: 'a'
  }, {
    time: '2019-07',
    count: 220,
    name: 'a'
  }, {
    time: '2019-03',
    count: 750,
    name: 'b'
  }, {
    time: '2019-04',
    count: 650,
    name: 'b'
  }, {
    time: '2019-05',
    count: 450,
    name: 'b'
  }, {
    time: '2019-06',
    count: 400,
    name: 'b'
  }, {
    time: '2019-07',
    count: 320,
    name: 'b'
  }, {
    time: '2019-03',
    count: 900,
    name: 'c'
  }, {
    time: '2019-04',
    count: 600,
    name: 'c'
  }, {
    time: '2019-05',
    count: 450,
    name: 'c'
  }, {
    time: '2019-06',
    count: 300,
    name: 'c'
  }, {
    time: '2019-07',
    count: 200,
    name: 'c'
  }];
  var dualAxes = new G2Plot.DualAxes('container-70', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      isStack: true,
      seriesField: 'type',
      columnWidthRatio: 0.4
    }, {
      geometry: 'line',
      seriesField: 'name',
      lineStyle: function lineStyle(_ref) {
        var name = _ref.name;

        if (name === 'a') {
          return {
            lineDash: [1, 4],
            opacity: 1
          };
        }

        return {
          opacity: 0.5
        };
      }
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'stacked-percent-column-line.ts',
    fileIndex: 71,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stackedPercentColumnLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var uvBillData = [{
    time: '2019-03',
    value: 350,
    type: 'uv'
  }, {
    time: '2019-04',
    value: 900,
    type: 'uv'
  }, {
    time: '2019-05',
    value: 300,
    type: 'uv'
  }, {
    time: '2019-06',
    value: 450,
    type: 'uv'
  }, {
    time: '2019-07',
    value: 470,
    type: 'uv'
  }, {
    time: '2019-03',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-04',
    value: 300,
    type: 'bill'
  }, {
    time: '2019-05',
    value: 250,
    type: 'bill'
  }, {
    time: '2019-06',
    value: 220,
    type: 'bill'
  }, {
    time: '2019-07',
    value: 362,
    type: 'bill'
  }];
  var transformData = [{
    time: '2019-03',
    count: 800
  }, {
    time: '2019-04',
    count: 600
  }, {
    time: '2019-05',
    count: 400
  }, {
    time: '2019-06',
    count: 380
  }, {
    time: '2019-07',
    count: 220
  }];
  var dualAxes = new G2Plot.DualAxes('container-71', {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [{
      geometry: 'column',
      isStack: true,
      isPercent: true,
      seriesField: 'type'
    }, {
      geometry: 'line'
    }]
  });
  dualAxes.render();
});`,
  },
  {
    fileName: 'easing-effects.ts',
    fileIndex: 72,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.easingEffects = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  /** Generater a data array of 30 items */
  var data = new Array(30).fill(1).map(function (d, idx) {
    return idx + Math.random() * 10;
  });
  var plots = [];
  var effects = ['easeLinear', 'easeQuadIn', 'easeQuadOut', 'easeQuadInOut', 'easeCubicIn', 'easeCubicOut', 'easeCubicInOut', 'easePolyIn', 'easePolyOut', 'easePolyInOut', 'easeSinIn', 'easeSinOut', 'easeSinInOut', 'easeExpIn', 'easeExpOut', 'easeExpInOut', 'easeCircleIn', 'easeCircleOut', 'easeCircleInOut', 'easeElasticIn', 'easeElasticOut', 'easeElasticInOut', 'easeBounceIn', 'easeBounceOut', 'easeBounceInOut', 'easeBackIn', 'easeBackOut', 'easeBackInOut'];
  var colors = ['#5B8FF9', '#CDDDFD', '#61DDAA', '#CDF3E4', '#65789B', '#CED4DE', '#F6BD16', '#FCEBB9', '#7262fd', '#D3CEFD', '#78D3F8', '#D3EEF9', '#9661BC', '#DECFEA', '#F6903D', '#FFE0C7', '#008685', '#BBDEDE', '#F08BB4', '#FFE0ED'];
  var ROWS = 5;
  var COLS = 4;

  for (var i = 0; i < ROWS; i++) {
    for (var j = 0; j < COLS; j++) {
      if (i * ROWS + j >= effects.length) {
        break;
      }

      var idx = i * ROWS + j;
      var effect = effects[idx];
      plots.push({
        region: {
          start: {
            x: j / COLS + 0.04 * ((i * COLS + j) % COLS > 0 ? 1 : 0),
            y: i / ROWS
          },
          end: {
            x: (j + 1) / COLS,
            y: (i + 1) / ROWS - 0.04
          }
        },
        type: idx % 2 ? 'tiny-column' : 'tiny-line',
        options: {
          data: data,
          tooltip: {
            title: effect
          },
          color: colors[idx],
          annotations: [{
            type: 'text',
            content: effect,
            position: ['20%', '110%']
          }],
          animation: {
            appear: {
              // animation: 'wave-in', 默认：line 为 ‘wave-in’，可更改
              easing: effect,
              duration: 5000,
              delay: 0
            }
          }
        }
      });
    }
  }

  var plot = new G2Plot.Mix('container-72', {
    tooltip: false,
    plots: plots
  });
  plot.render();
});`,
  },
  {
    fileName: 'dynamic-area.ts',
    fileIndex: 73,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dynamicArea = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json').then(function (res) {
    return res.json();
  }).then(function (originalData) {
    var cnt = 2;
    var area = new G2Plot.Area('container-73', {
      data: originalData.slice(0, cnt),
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [0, 1]
      }
    });
    area.render();
    var interval = setInterval(function () {
      if (cnt === originalData.length) {
        clearInterval(interval);
      } else {
        cnt += 1;
        area.changeData(originalData.slice(0, cnt));
      }
    }, 400);
  });
});`,
  },
  {
    fileName: 'dynamic-column.ts',
    fileIndex: 74,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dynamicColumn = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '1-3秒',
    value: 0.16
  }, {
    type: '4-10秒',
    value: 0.125
  }, {
    type: '11-30秒',
    value: 0.24
  }, {
    type: '31-60秒',
    value: 0.19
  }, {
    type: '1-3分',
    value: 0.22
  }, {
    type: '3-10分',
    value: 0.05
  }, {
    type: '10-30分',
    value: 0.01
  }, {
    type: '30+分',
    value: 0.015
  }];
  var paletteSemanticRed = '#F4664A';
  var brandColor = '#5B8FF9';
  var columnPlot = new G2Plot.Column('container-74', {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: 'value',
    color: function color(_ref) {
      var value = _ref.value;

      if (value < 0.05) {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    legend: false
  });
  columnPlot.render();
  setInterval(function () {
    columnPlot.changeData(data.map(function (d) {
      return { ...d,
        value: d.value * Math.random()
      };
    }));
  }, 1200);
});`,
  },
  {
    fileName: 'dynamic-gauge.ts',
    fileIndex: 75,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dynamicGauge = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var color = ['#F4664A', '#FAAD14', '#30BF78'];

  var getColor = function getColor(percent) {
    return percent < 0.4 ? color[0] : percent < 0.6 ? color[1] : color[2];
  };

  var gauge = new G2Plot.Gauge('container-75', {
    percent: 0.2,
    range: {
      color: getColor(0.2)
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        }
      },
      subTickLine: {
        count: 3
      }
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return "Rate: ".concat((percent * 100).toFixed(0), "%");
        }
      },
      style: {
        fontSize: 60
      }
    },
    animation: false
  });
  gauge.render();
  var data = 0.2;
  var interval = setInterval(function () {
    if (data >= 0.85) {
      clearInterval(interval);
    } else {
      data += 0.001;
      gauge.changeData(data);
      gauge.update({
        range: {
          color: getColor(data)
        }
      });
    }
  }, 100);
});`,
  },
  {
    fileName: 'dynamic-pie.ts',
    fileIndex: 76,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dynamicPie = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-76', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return "".concat((percent * 100).toFixed(0), "%");
      },
      style: {
        fontSize: 14,
        textAlign: 'center'
      }
    },
    interactions: [{
      type: 'element-active'
    }]
  });
  piePlot.render();
  setInterval(function () {
    piePlot.changeData(data.map(function (d) {
      return { ...d,
        value: d.value * Math.random()
      };
    }));
  }, 1200);
});`,
  },
  {
    fileName: 'dynamic-spline.ts',
    fileIndex: 77,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dynamicSpline = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  function getData() {
    // generate an array of random data
    var data = [];
    var time = new Date().getTime();

    for (var i = -19; i <= 0; i += 1) {
      data.push({
        x: time + i * 1000,
        y: Math.random() + 0.2
      });
    }

    return data;
  }

  var line = new G2Plot.Line('container-77', {
    data: getData(),
    padding: 'auto',
    xField: 'x',
    yField: 'y',
    xAxis: {
      type: 'time',
      mask: 'HH:MM:ss'
    },
    smooth: true,
    point: {}
  });
  line.render();
  setInterval(function () {
    var x = new Date().getTime(),
        // current time
    y = Math.random() + 0.2;
    var newData = line.options.data.slice(1).concat({
      x: x,
      y: y
    });
    line.changeData(newData);
  }, 1000);
});`,
  },
  {
    fileName: 'circle.ts',
    fileIndex: 78,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.circle = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/VnrXpYSuqW/circle-pie.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Facet('container-78', {
      type: 'circle',
      fields: ['clarity'],
      data: data,
      tooltip: {
        showMarkers: false
      },
      meta: {
        cut: {
          sync: true
        }
      },
      eachView: function eachView(view, f) {
        return {
          type: 'pie',
          options: {
            data: f.data,
            angleField: 'mean',
            colorField: 'cut',
            pieStyle: {
              stroke: null
            }
          }
        };
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'column.ts',
    fileIndex: 79,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.column = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Facet('container-79', {
      padding: [0, 10, 10],
      appendPadding: [0, 0, 30, 20],
      type: 'rect',
      fields: ['cut'],
      cols: 3,
      // 超过3个换行
      data: data,
      axes: {},
      meta: {
        carat: {
          sync: true
        },
        price: {
          sync: true
        },
        clarity: {
          sync: true
        }
      },
      eachView: function eachView(view, f) {
        return {
          type: 'scatter',
          options: {
            data: f.data,
            xField: 'carat',
            yField: 'price',
            colorField: 'clarity',
            shape: 'circle',
            pointStyle: {
              fillOpacity: 0.3,
              stroke: null
            }
          }
        };
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'list.ts',
    fileIndex: 80,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.list = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Facet('container-80', {
      padding: 30,
      type: 'list',
      fields: ['cut'],
      cols: 3,
      // 超过3个换行
      data: data,
      axes: {},
      meta: {
        carat: {
          sync: true
        },
        price: {
          sync: true
        },
        cut: {
          // 设置 sync 同步之后，可以按照 'cut' 进行颜色映射分类
          sync: true
        }
      },
      eachView: function eachView(view, f) {
        return {
          type: 'scatter',
          options: {
            data: f.data,
            xField: 'carat',
            yField: 'price',
            colorField: 'cut',
            shape: 'circle',
            pointStyle: {
              fillOpacity: 0.3,
              stroke: null
            }
          }
        };
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'matrix.ts',
    fileIndex: 81,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.matrix = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/iris.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Facet('container-81', {
      appendPadding: [0, 0, 16, 0],
      padding: 16,
      type: 'matrix',
      fields: ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'],
      data: data,
      meta: {
        Species: {
          sync: true
        },
        SepalLength: {
          sync: true,
          nice: true
        },
        SepalWidth: {
          nice: true
        },
        PetalLength: {
          nice: true
        },
        PetalWidth: {
          nice: true
        }
      },
      axes: {},
      eachView: function eachView(view, facet) {
        if (facet.rowIndex === facet.columnIndex) {
          return {
            type: 'histogram',
            options: {
              data: facet.data,
              binField: facet.columnField,
              binNumber: 30,
              stackField: 'Species',
              isStack: true,
              columnStyle: {
                stroke: null
              }
            }
          };
        }

        return {
          type: 'scatter',
          options: {
            data: facet.data,
            xField: facet.columnField,
            yField: facet.rowField,
            colorField: 'Species',
            shape: 'circle',
            pointStyle: {
              fillOpacity: 0.3,
              stroke: null
            },
            size: 3
          }
        };
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'mirror.ts',
    fileIndex: 82,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.mirror = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/2Qttbqxmtw/symmetry-data.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Facet('container-82', {
      type: 'mirror',
      data: data,
      fields: ['gender'],
      transpose: true,
      padding: [32, 16, 28, 16],
      meta: {
        age: {
          sync: true,
          tickCount: 11
        },
        total_percentage: {
          sync: true,
          formatter: function formatter(v) {
            return v + '%';
          }
        },
        gender: {
          sync: true
        }
      },
      axes: {},
      eachView: function eachView(view, f) {
        return {
          padding: [0, 48, 0, 0],
          type: 'column',
          options: {
            data: f.data,
            xField: 'age',
            yField: 'total_percentage',
            seriesField: 'gender',
            color: ['#1890ff', '#f04864']
          }
        };
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'rect.ts',
    fileIndex: 83,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.rect = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Facet('container-83', {
      type: 'rect',
      fields: ['cut', 'clarity'],
      cols: 3,
      // 超过3个换行
      padding: [0, 10, 10],
      appendPadding: 30,
      data: data,
      axes: {},
      meta: {
        carat: {
          sync: true
        },
        price: {
          sync: true
        },
        cut: {
          // 设置 sync 同步之后，可以按照 'cut' 进行颜色映射分类
          sync: true
        }
      },
      eachView: function eachView(view, f) {
        return {
          type: 'scatter',
          options: {
            data: f.data,
            xField: 'carat',
            yField: 'price',
            colorField: 'cut',
            shape: 'circle',
            pointStyle: {
              fillOpacity: 0.3,
              stroke: null
            }
          }
        };
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'tree-column.ts',
    fileIndex: 84,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "@antv/data-set"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("@antv/data-set"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.dataSet);
    global.treeColumn = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _dataSet) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Facet('container-84', {
      appendPadding: [0, 18, -50, 32],
      data: data,
      type: 'tree',
      fields: ['clarity'],
      meta: {
        cut: {
          sync: true,
          // 手动进行排序，保证颜色映射正确
          values: ['Ideal', 'Good', 'Premium', 'Very-Good', 'Fair']
        },
        mean: {
          sync: true,
          tickCount: 5,
          formatter: function formatter(v) {
            return "".concat(Math.ceil(v));
          }
        }
      },
      // tree-facet 连接线样式和是否平滑
      line: {
        style: {
          stroke: '#dedede'
        },
        smooth: true
      },
      axes: {},
      tooltip: {
        showMarkers: false
      },
      eachView: function eachView(view, facet) {
        var _ref = facet || {},
            rowIndex = _ref.rowIndex;

        var dv = new _dataSet.DataView();
        dv.source(facet.data).transform({
          type: 'aggregate',
          fields: ['price'],
          operations: ['mean'],
          as: ['mean'],
          groupBy: ['cut']
        });

        if (rowIndex === 0) {
          return {
            type: 'pie',
            options: {
              data: dv.rows,
              meta: {
                mean: {
                  // 关闭饼图 'mean'字段的 scale 同步
                  sync: false
                }
              },
              angleField: 'mean',
              colorField: 'cut',
              radius: 1,
              pieStyle: {
                stroke: null
              },
              // 添加动画
              animation: {},
              // 添加交互
              interactions: [{
                type: 'element-active'
              }]
            }
          };
        }

        return {
          type: 'column',
          options: {
            data: dv.rows,
            meta: {
              mean: {
                // 关闭饼图 'mean'字段的 scale 同步
                sync: rowIndex === 0 ? false : true
              }
            },
            xField: 'cut',
            yField: 'mean',
            seriesField: 'cut',
            columnStyle: {
              fillOpacity: 0.85
            },
            // 添加动画
            animation: {},
            // 添加交互
            interactions: [{
              type: 'element-active'
            }, {
              type: 'active-region'
            }]
          }
        };
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'tree.ts',
    fileIndex: 85,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "@antv/data-set"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("@antv/data-set"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.dataSet);
    global.tree = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _dataSet) {
  "use strict";

  var data = [{
    gender: '男',
    count: 40,
    class: '一班',
    grade: '一年级'
  }, {
    gender: '女',
    count: 30,
    class: '一班',
    grade: '一年级'
  }, {
    gender: '男',
    count: 35,
    class: '二班',
    grade: '一年级'
  }, {
    gender: '女',
    count: 45,
    class: '二班',
    grade: '一年级'
  }, {
    gender: '男',
    count: 20,
    class: '三班',
    grade: '一年级'
  }, {
    gender: '女',
    count: 35,
    class: '三班',
    grade: '一年级'
  }, {
    gender: '男',
    count: 30,
    class: '一班',
    grade: '二年级'
  }, {
    gender: '女',
    count: 40,
    class: '一班',
    grade: '二年级'
  }, {
    gender: '男',
    count: 25,
    class: '二班',
    grade: '二年级'
  }, {
    gender: '女',
    count: 32,
    class: '二班',
    grade: '二年级'
  }, {
    gender: '男',
    count: 28,
    class: '三班',
    grade: '二年级'
  }, {
    gender: '女',
    count: 36,
    class: '三班',
    grade: '二年级'
  }];
  var plot = new G2Plot.Facet('container-85', {
    appendPadding: [0, 16, 16, 16],
    data: data,
    type: 'tree',
    fields: ['grade', 'class'],
    // coordinate: { type: 'theta' },
    meta: {
      percent: {
        formatter: function formatter(val) {
          return (val * 100).toFixed(2) + '%';
        }
      }
    },
    // tree-facet 连接线样式和是否平滑
    line: {
      style: {
        stroke: '#dedede'
      },
      smooth: true
    },
    tooltip: {
      showMarkers: false
    },
    eachView: function eachView(view, facet) {
      //   // 对角线的图形，做数据封箱之后绘制图形
      var dv = new _dataSet.DataView();
      dv.source(facet.data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'gender',
        as: 'percent'
      });
      return {
        type: 'pie',
        options: {
          data: dv.rows,
          angleField: 'percent',
          colorField: 'gender',
          pieStyle: {
            opacity: 0.85
          },
          // 添加动画
          animation: {},
          // 添加交互
          interactions: [{
            type: 'element-active'
          }]
        }
      };
    }
  });
  plot.render();
});`,
  },
  {
    fileName: 'conversion-tag-with-link.ts',
    fileIndex: 86,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.conversionTagWithLink = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  G2Plot.G2.registerInteraction('conversion-tag-cursor', {
    start: [{
      trigger: 'conversion-tag-group:mouseenter',
      action: 'cursor:pointer'
    }],
    end: [{
      trigger: 'conversion-tag-group:mouseleave',
      action: 'cursor:default'
    }]
  });

  var data = [{
    action: '浏览网站',
    pv: 50000
  }, {
    action: '放入购物车',
    pv: 35000
  }, {
    action: '生成订单',
    pv: 25000
  }, {
    action: '支付订单',
    pv: 15000
  }, {
    action: '完成交易',
    pv: 8500,
    link: 'https://github.com/antvis/g2plot'
  }];
  var plot = new G2Plot.Column('container-86', {
    data: data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    interactions: [{
      type: 'conversion-tag-cursor',
      cfg: {
        start: [{
          trigger: 'conversion-tag-group:mouseenter',
          action: function action(context) {
            var event = context.event,
                view = context.view;
            var nextElement = event.data.nextElement;
            var link = nextElement.getModel().data.link; // 根据实际情况修改，如果配置了链接跳转 则改变 cursor 样式

            if (link) {
              view.getCanvas().setCursor('pointer');
            }
          }
        }]
      }
    }]
  });
  plot.render();
  plot.on('conversion-tag-group:click', function (evt) {
    var target = evt.target;

    if (target?.get('origin')) {
      var _target$get = target?.get('origin'),
          nextElement = _target$get.nextElement;

      var link = nextElement.getModel().data.link;
      window.open(link);
    }
  });
});`,
  },
  {
    fileName: 'custom-state-style.ts',
    fileIndex: 87,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customStateStyle = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-87', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer'
    },
    // 自定义状态样式
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65
        }
      }
    },
    // 添加 element 选中和激活交互
    interactions: [{
      type: 'element-single-selected'
    }, {
      type: 'element-active'
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'set-state.ts',
    fileIndex: 88,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.setState = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-88', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer'
    },
    // 自定义状态样式
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65
        }
      }
    },
    // 添加 element 选中和激活交互
    interactions: [{
      type: 'element-selected'
    }, {
      type: 'element-active'
    }]
  });
  piePlot.render();
  piePlot.setState('selected', function (data) {
    return data.type === '分类一' || data.type === '分类二';
  });
});`,
  },
  {
    fileName: 'custom-theme.ts',
    fileIndex: 89,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "@antv/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("@antv/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.util);
    global.customTheme = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _util) {
  "use strict";

  var theme = G2Plot.G2.getTheme('dark');

  document.getElementById('container-89').style.background = theme.background;
  fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var column = new G2Plot.Column('container-89', {
      data: data,
      xField: '城市',
      yField: '销售额',
      xAxis: {
        label: {
          autoRotate: false
        }
      },
      appendPadding: 10,
      theme: (0, _util.deepMix)({}, theme, {
        components: {
          scrollbar: {
            // 默认样式
            default: {
              style: {
                trackColor: 'rgba(255,255,255,0.05)',
                thumbColor: 'rgba(255,255,255,0.25)'
              }
            },
            // hover 时，可以设置滑块样式
            hover: {
              style: {
                thumbColor: 'rgba(255,255,255,0.6)'
              }
            }
          }
        }
      }),
      scrollbar: {
        type: 'horizontal'
      }
    });
    column.render();
  });
});`,
  },
  {
    fileName: 'dark.ts',
    fileIndex: 90,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dark = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-90', {
    appendPadding: 10,
    data: data,
    theme: 'dark',
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: function formatter(v) {
          return "xA5 ".concat(v);
        }
      }
    },
    label: {
      type: 'inner',
      offset: '-50%',
      autoRotate: false,
      style: {
        textAlign: 'center',
        fill: '#fff'
      },
      formatter: function formatter(_ref) {
        var percent = _ref.percent;
        return "".concat((percent * 100).toFixed(0), "%");
      }
    },
    statistic: {
      title: {
        offsetY: -8,
        style: {
          color: '#fff'
        }
      },
      content: {
        style: {
          color: '#fff'
        },
        offsetY: -4
      }
    },
    pieStyle: {
      lineWidth: 0
    }
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'register-theme.ts',
    fileIndex: 91,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.registerTheme = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var registerTheme = G2Plot.G2.registerTheme;
  registerTheme('custom-theme', {
    colors10: ['#025DF4', '#DB6BCF', '#2498D1', '#BBBDE6', '#4045B2', '#21A97A', '#FF745A', '#007E99', '#FFA8A8', '#2391FF'],
    colors20: ['#025DF4', '#DB6BCF', '#2498D1', '#BBBDE6', '#4045B2', '#21A97A', '#FF745A', '#007E99', '#FFA8A8', '#2391FF', '#FFC328', '#A0DC2C', '#946DFF', '#626681', '#EB4185', '#CD8150', '#36BCCB', '#327039', '#803488', '#83BC99']
  });
  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-91', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-10%',
      content: '{percentage}'
    },
    interactions: [{
      type: 'element-active'
    }],
    theme: 'custom-theme'
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 92,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var heatmapPlot = new G2Plot.Heatmap(document.getElementById('container-92'), {
      width: 650,
      height: 500,
      autoFit: false,
      data: data,
      xField: 'Month of Year',
      yField: 'District',
      colorField: 'AQHI',
      color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
      meta: {
        'Month of Year': {
          type: 'cat'
        }
      }
    });
    heatmapPlot.render();
  });
});`,
  },
  {
    fileName: 'calendar.ts',
    fileIndex: 93,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.calendar = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  G2Plot.G2.registerShape('polygon', 'boundary-polygon', {
    draw: function draw(cfg, container) {
      var group = container.addGroup();
      var attrs = {
        stroke: '#fff',
        lineWidth: 1,
        fill: cfg.color,
        paht: []
      };
      var points = cfg.points;
      var path = [['M', points[0].x, points[0].y], ['L', points[1].x, points[1].y], ['L', points[2].x, points[2].y], ['L', points[3].x, points[3].y], ['Z']]; // @ts-ignore

      attrs.path = this.parsePath(path);
      group.addShape('path', {
        attrs: attrs
      });

      if (cfg.data.lastWeek) {
        var linePath = [['M', points[2].x, points[2].y], ['L', points[3].x, points[3].y]]; // 最后一周的多边形添加右侧边框

        group.addShape('path', {
          attrs: {
            path: this.parsePath(linePath),
            lineWidth: 4,
            stroke: '#404040'
          }
        });

        if (cfg.data.lastDay) {
          group.addShape('path', {
            attrs: {
              path: this.parsePath([['M', points[1].x, points[1].y], ['L', points[2].x, points[2].y]]),
              lineWidth: 4,
              stroke: '#404040'
            }
          });
        }
      }

      return group;
    }
  });

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/github-commit.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var heatmapPlot = new G2Plot.Heatmap(document.getElementById('container-93'), {
      data: data,
      height: 400,
      autoFit: false,
      xField: 'week',
      yField: 'day',
      colorField: 'commits',
      reflect: 'y',
      shape: 'boundary-polygon',
      meta: {
        day: {
          type: 'cat',
          values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        week: {
          type: 'cat'
        },
        commits: {
          sync: true
        },
        date: {
          type: 'cat'
        }
      },
      yAxis: {
        grid: null
      },
      tooltip: {
        title: 'date',
        showMarkers: false
      },
      interactions: [{
        type: 'element-active'
      }],
      xAxis: {
        position: 'top',
        tickLine: null,
        line: null,
        label: {
          offset: 12,
          style: {
            fontSize: 12,
            fill: '#666',
            textBaseline: 'top'
          },
          formatter: function formatter(val) {
            if (val === '2') {
              return 'MAY';
            } else if (val === '6') {
              return 'JUN';
            } else if (val === '10') {
              return 'JUL';
            } else if (val === '15') {
              return 'AUG';
            } else if (val === '19') {
              return 'SEP';
            } else if (val === '24') {
              return 'OCT';
            }

            return '';
          }
        }
      }
    });
    heatmapPlot.render();
  });
});`,
  },
  {
    fileName: 'polar.ts',
    fileIndex: 94,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.polar = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/polar-heatmap.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var heatmapPlot = new G2Plot.Heatmap(document.getElementById('container-94'), {
      data: data,
      xField: 'time',
      yField: 'week',
      colorField: 'value',
      legend: true,
      color: '#BAE7FF-#1890FF-#1028ff',
      coordinate: {
        // 坐标轴属性配置
        type: 'polar',
        // 极坐标
        cfg: {
          innerRadius: 0.2
        }
      },
      heatmapStyle: {
        stroke: '#f5f5f5',
        opacity: 0.8
      },
      meta: {
        time: {
          type: 'cat'
        },
        value: {
          min: 0,
          max: 1
        }
      },
      xAxis: {
        line: null,
        grid: null,
        tickLine: null,
        label: {
          offset: 12,
          style: {
            fill: '#666',
            fontSize: 12,
            textBaseline: 'top'
          }
        }
      },
      yAxis: {
        top: true,
        line: null,
        grid: null,
        tickLine: null,
        label: {
          offset: 0,
          style: {
            fill: '#fff',
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        }
      },
      tooltip: {
        showMarkers: false
      },
      interactions: [{
        type: 'element-active'
      }]
    });
    heatmapPlot.render();
  });
});`,
  },
  {
    fileName: 'shape.ts',
    fileIndex: 95,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.shape = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var heatmapPlot = new G2Plot.Heatmap(document.getElementById('container-95'), {
      data: data,
      xField: 'name',
      yField: 'country',
      colorField: 'value',
      shape: 'circle',
      sizeRatio: 0.5,
      color: ['#0d5fbb', '#7eadfc', '#fd8b6f', '#aa3523'],
      label: {
        style: {
          fill: '#fff',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      }
    });
    heatmapPlot.render();
  });
});`,
  },
  {
    fileName: 'size.ts',
    fileIndex: 96,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.size = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var heatmapPlot = new G2Plot.Heatmap(document.getElementById('container-96'), {
      data: data,
      xField: 'name',
      yField: 'country',
      colorField: 'value',
      sizeField: 'value',
      shape: 'square',
      color: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'],
      label: {
        style: {
          fill: '#fff',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      }
    });
    heatmapPlot.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 97,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/heatmap.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var heatmapPlot = new G2Plot.Heatmap(document.getElementById('container-97'), {
      data: data,
      type: 'density',
      xField: 'g',
      yField: 'l',
      colorField: 'tmp',
      color: '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2',
      legend: {
        position: 'bottom'
      },
      annotations: [{
        type: 'image',
        start: ['min', 'max'],
        end: ['max', 'min'],
        src: 'https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png'
      }]
    });
    heatmapPlot.render();
  });
});`,
  },
  {
    fileName: 'line-annotation.ts',
    fileIndex: 98,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-98', {
      data: data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      annotations: [// 低于中位数颜色变化
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A'
      }, {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: {
          textBaseline: 'bottom'
        }
      }, {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2]
        }
      }]
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'line-point-style.ts',
    fileIndex: 99,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.linePointStyle = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    year: '1991',
    value: 3
  }, {
    year: '1992',
    value: 4
  }, {
    year: '1993',
    value: 3.5
  }, {
    year: '1994',
    value: 5
  }, {
    year: '1995',
    value: 4.9
  }, {
    year: '1996',
    value: 6
  }, {
    year: '1997',
    value: 7
  }, {
    year: '1998',
    value: 9
  }, {
    year: '1999',
    value: 13
  }];
  var line = new G2Plot.Line('container-99', {
    data: data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2
      }
    },
    tooltip: {
      showMarkers: false
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red'
        }
      }
    },
    interactions: [{
      type: 'marker-active'
    }]
  });
  line.render();
});`,
  },
  {
    fileName: 'line-slider.ts',
    fileIndex: 100,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineSlider = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-100', {
      data: data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        tickCount: 5
      },
      slider: {
        start: 0.1,
        end: 0.5
      }
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'line-with-data-marker.ts',
    fileIndex: 101,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineWithDataMarker = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  G2Plot.G2.registerShape('point', 'breath-point', {
    draw: function draw(cfg, container) {
      var data = cfg.data;
      var point = {
        x: cfg.x,
        y: cfg.y
      };
      var group = container.addGroup();

      if (data.time === '14.20' && data.date === 'today') {
        var decorator1 = group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5
          }
        });
        var decorator2 = group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5
          }
        });
        var decorator3 = group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5
          }
        });
        decorator1.animate({
          r: 20,
          opacity: 0
        }, {
          duration: 1800,
          easing: 'easeLinear',
          repeat: true
        });
        decorator2.animate({
          r: 20,
          opacity: 0
        }, {
          duration: 1800,
          easing: 'easeLinear',
          repeat: true,
          delay: 600
        });
        decorator3.animate({
          r: 20,
          opacity: 0
        }, {
          duration: 1800,
          easing: 'easeLinear',
          repeat: true,
          delay: 1200
        });
        group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 6,
            fill: cfg.color,
            opacity: 0.7
          }
        });
        group.addShape('circle', {
          attrs: {
            x: point.x,
            y: point.y,
            r: 1.5,
            fill: cfg.color
          }
        });
      }

      return group;
    }
  });

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var plot = new G2Plot.Line('container-101', {
      autoFit: true,
      height: 500,
      data: data,
      meta: {
        cpu: {
          time: {
            type: 'cat'
          },
          max: 100,
          min: 0
        }
      },
      xField: 'time',
      yField: 'cpu',
      seriesField: 'date',
      tooltip: {
        showMarkers: false
      },
      point: {
        shape: 'breath-point'
      }
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'line.ts',
    fileIndex: 102,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.line = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-102', {
      data: data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 5
      }
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'spline.ts',
    fileIndex: 103,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.spline = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-103', {
      data: data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 5
      },
      smooth: true
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'line-color.ts',
    fileIndex: 104,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineColor = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-104', {
      data: data,
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: function formatter(v) {
            return "".concat(v).replace(/d{1,3}(?=(d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          }
        }
      },
      color: ['#1979C9', '#D62A0D', '#FAA219']
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'line-grid.ts',
    fileIndex: 105,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineGrid = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-105', {
      data: data.slice(data.length - 90, data.length).filter(function (item) {
        return item.category === 'Gas fuel' || item.category === 'Cement production';
      }),
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      // X 轴相关配置
      xAxis: {
        nice: true,
        // tickCount: 8,
        // 文本标签
        label: {
          // autoRotate: false,
          rotate: Math.PI / 6,
          offset: 10,
          style: {
            fill: '#aaa',
            fontSize: 12
          },
          formatter: function formatter(name) {
            return name;
          }
        },
        title: {
          text: '年份',
          style: {
            fontSize: 16
          }
        },
        // 坐标轴线的配置项 null 表示不展示
        line: {
          style: {
            stroke: '#aaa'
          }
        },
        tickLine: {
          style: {
            lineWidth: 2,
            stroke: '#aaa'
          },
          length: 5
        },
        grid: {
          line: {
            style: {
              stroke: '#ddd',
              lineDash: [4, 2]
            }
          },
          alternateColor: 'rgba(0,0,0,0.05)'
        }
      },
      // Y 轴相关配置
      yAxis: {
        // max: 3000,
        // 文本标签
        label: {
          autoRotate: false,
          style: {
            fill: '#aaa',
            fontSize: 12
          },
          // 数值格式化为千分位
          formatter: function formatter(v) {
            return "".concat(v).replace(/d{1,3}(?=(d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          }
        },
        title: {
          text: '排放量(顿)',
          style: {
            fontSize: 16
          }
        },
        // 坐标轴线的配置项 null 表示不展示
        line: {
          style: {
            stroke: '#aaa'
          }
        },
        tickLine: {
          style: {
            lineWidth: 2,
            stroke: '#aaa'
          },
          length: 5
        },
        grid: {
          line: {
            style: {
              stroke: '#ddd',
              lineDash: [4, 2]
            }
          },
          alternateColor: 'rgba(0,0,0,0.05)'
        }
      },
      // label
      label: {
        layout: [{
          type: 'hide-overlap'
        }],
        // 隐藏重叠label
        style: {
          textAlign: 'right'
        },
        formatter: function formatter(item) {
          return item.value;
        }
      },
      // point
      point: {
        size: 5,
        style: {
          lineWidth: 1,
          fillOpacity: 1
        },
        shape: function shape(item) {
          if (item.category === 'Cement production') {
            return 'circle';
          }

          return 'diamond';
        }
      },
      annotations: [// 辅助线
      {
        type: 'line',
        start: ['0%', '10%'],
        end: ['100%', '10%'],
        top: true,
        style: {
          stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
          lineWidth: 2
        }
      }, // 辅助区域
      {
        type: 'region',
        start: ['0%', '0%'],
        end: ['20%', '10%'],
        top: true,
        style: {
          fill: '#1890ff',
          fillOpacity: 1,
          opacity: 1
        }
      }, // 辅助文本
      {
        type: 'text',
        position: ['10%', '5%'],
        content: '二氧化碳排放量来源',
        style: {
          fill: '#fff',
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'middle',
          shadowColor: '#fff',
          shadowOffsetX: 12,
          shadowOffsetY: 12,
          shadowBlur: 2
        }
      }, // 辅助线
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'Turquoise',
          lineDash: [4, 2]
        }
      }],
      legend: {
        position: 'top-right',
        itemName: {
          style: {
            fill: '#000'
          },
          formatter: function formatter(name) {
            return name;
          }
        }
      },
      // 度量相关配置
      meta: {
        // year 对应 xField || yField
        year: {
          range: [0, 1]
        }
      }
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'line-label.ts',
    fileIndex: 106,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineLabel = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var linePlot = new G2Plot.Line('container-106', {
      data: data,
      xField: 'year',
      yField: 'gdp',
      seriesField: 'name',
      yAxis: {
        label: {
          formatter: function formatter(v) {
            return "".concat((v / 10e8).toFixed(1), " B");
          }
        }
      },
      legend: {
        position: 'top'
      },
      smooth: true,
      // @TODO 后续会换一种动画方式
      animation: {
        appear: {
          animation: 'path-in',
          duration: 5000
        }
      }
    });
    linePlot.render();
  });
});`,
  },
  {
    fileName: 'line-large-data.ts',
    fileIndex: 107,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineLargeData = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-107', {
      data: data,
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      xAxis: {
        type: 'time'
      },
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: function formatter(v) {
            return "".concat(v).replace(/d{1,3}(?=(d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          }
        }
      }
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'marker-active.ts',
    fileIndex: 108,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.markerActive = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var COLOR_PLATE_10 = ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC', '#9270CA', '#FF9D4D', '#269A99', '#FF99C3'];
    var container = document.getElementById('container-108');
    var line = new G2Plot.Line(container, {
      data: data,
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: function formatter(v) {
            return "".concat(v).replace(/d{1,3}(?=(d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          }
        }
      },
      color: COLOR_PLATE_10,
      point: {
        shape: function shape(_ref) {
          var category = _ref.category;
          return category === 'Gas fuel' ? 'square' : 'circle';
        },
        style: function style(_ref2) {
          var year = _ref2.year;
          return {
            r: Number(year) % 4 ? 0 : 3 // 4 个数据示一个点标记

          };
        }
      }
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'style-callback.ts',
    fileIndex: 109,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.styleCallback = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var line = new G2Plot.Line('container-109', {
      data: data,
      xField: 'date',
      yField: 'value',
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: function formatter(v) {
            return "".concat(v).replace(/d{1,3}(?=(d{3})+$)/g, function (s) {
              return "".concat(s, ",");
            });
          }
        }
      },
      seriesField: 'type',
      color: function color(_ref) {
        var type = _ref.type;
        return type === 'register' ? '#F4664A' : type === 'download' ? '#30BF78' : '#FAAD14';
      },
      lineStyle: function lineStyle(_ref2) {
        var type = _ref2.type;

        if (type === 'register') {
          return {
            lineDash: [4, 4],
            opacity: 1
          };
        }

        return {
          opacity: 0.5
        };
      }
    });
    line.render();
  });
});`,
  },
  {
    fileName: 'line-multiple.ts',
    fileIndex: 110,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineMultiple = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    month: 'Jan',
    key: 'series1',
    value: 125
  }, {
    month: 'Jan',
    key: 'series2',
    value: 51
  }, {
    month: 'Feb',
    key: 'series1',
    value: 132
  }, {
    month: 'Feb',
    key: 'series2',
    value: 91
  }, {
    month: 'Mar',
    key: 'series1',
    value: 141
  }, {
    month: 'Mar',
    key: 'series2',
    value: 34
  }, {
    month: 'Apr',
    key: 'series1',
    value: 158
  }, {
    month: 'Apr',
    key: 'series2',
    value: 47
  }, {
    month: 'May',
    key: 'series1',
    value: 133
  }, {
    month: 'May',
    key: 'series2',
    value: 63
  }, {
    month: 'June',
    key: 'series1',
    value: 143
  }, {
    month: 'June',
    key: 'series2',
    value: 58
  }, {
    month: 'July',
    key: 'series1',
    value: 176
  }, {
    month: 'July',
    key: 'series2',
    value: 56
  }, {
    month: 'Aug',
    key: 'series1',
    value: 194
  }, {
    month: 'Aug',
    key: 'series2',
    value: 77
  }, {
    month: 'Sep',
    key: 'series1',
    value: 115
  }, {
    month: 'Sep',
    key: 'series2',
    value: 99
  }, {
    month: 'Oct',
    key: 'series1',
    value: 134
  }, {
    month: 'Oct',
    key: 'series2',
    value: 106
  }, {
    month: 'Nov',
    key: 'series1',
    value: 110
  }, {
    month: 'Nov',
    key: 'series2',
    value: 88
  }, {
    month: 'Dec',
    key: 'series1',
    value: 91
  }, {
    month: 'Dec',
    key: 'series2',
    value: 56
  }];
  var line = new G2Plot.Line('container-110', {
    data: data,
    xField: 'month',
    yField: 'value',
    legend: false,
    seriesField: 'key',
    stepType: 'hvh'
  });
  line.render();
});`,
  },
  {
    fileName: 'line.ts',
    fileIndex: 111,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.line = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    year: '1991',
    value: 3
  }, {
    year: '1992',
    value: 4
  }, {
    year: '1993',
    value: 3.5
  }, {
    year: '1994',
    value: 5
  }, {
    year: '1995',
    value: 4.9
  }, {
    year: '1996',
    value: 6
  }, {
    year: '1997',
    value: 7
  }, {
    year: '1998',
    value: 9
  }, {
    year: '1999',
    value: 13
  }, {
    year: '1999',
    value: 8
  }];
  var linePlot = new G2Plot.Line('container-111', {
    data: data,
    xField: 'year',
    yField: 'value',
    stepType: 'vh'
  });
  linePlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 112,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _g2plot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.data = void 0;
  var data = [{
    country: '乌拉圭',
    '2016年耕地总面积': 13.4,
    '2016年转基因种植面积': 12.3
  }, {
    country: '巴拉圭',
    '2016年耕地总面积': 14.4,
    '2016年转基因种植面积': 6.3
  }, {
    country: '南非',
    '2016年耕地总面积': 18.4,
    '2016年转基因种植面积': 8.3
  }, {
    country: '巴基斯坦',
    '2016年耕地总面积': 34.4,
    '2016年转基因种植面积': 13.8
  }, {
    country: '阿根廷',
    '2016年耕地总面积': 44.4,
    '2016年转基因种植面积': 19.5
  }, {
    country: '巴西',
    '2016年耕地总面积': 24.4,
    '2016年转基因种植面积': 18.8
  }, {
    country: '加拿大',
    '2016年耕地总面积': 54.4,
    '2016年转基因种植面积': 24.7
  }, {
    country: '中国',
    '2016年耕地总面积': 104.4,
    '2016年转基因种植面积': 5.3
  }, {
    country: '美国',
    '2016年耕地总面积': 165.2,
    '2016年转基因种植面积': 72.9
  }];
  _exports.data = data;
  var BidirectionalBarPlot = new G2Plot.BidirectionalBar('container-112', {
    data: data,
    xField: 'country',
    xAxis: {
      position: 'bottom'
    },
    interactions: [{
      type: 'active-region'
    }],
    yField: ['2016年耕地总面积', '2016年转基因种植面积'],
    tooltip: {
      shared: true,
      showMarkers: false
    }
  });
  BidirectionalBarPlot.render();
});`,
  },
  {
    fileName: 'layout.ts',
    fileIndex: 113,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.g2plot);
    global.layout = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _g2plot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.data = void 0;
  var data = [{
    country: '乌拉圭',
    '2016年耕地总面积': 13.4,
    '2016年转基因种植面积': 12.3
  }, {
    country: '巴拉圭',
    '2016年耕地总面积': 14.4,
    '2016年转基因种植面积': 6.3
  }, {
    country: '南非',
    '2016年耕地总面积': 18.4,
    '2016年转基因种植面积': 8.3
  }, {
    country: '巴基斯坦',
    '2016年耕地总面积': 34.4,
    '2016年转基因种植面积': 13.8
  }, {
    country: '阿根廷',
    '2016年耕地总面积': 44.4,
    '2016年转基因种植面积': 19.5
  }, {
    country: '巴西',
    '2016年耕地总面积': 24.4,
    '2016年转基因种植面积': 18.8
  }, {
    country: '加拿大',
    '2016年耕地总面积': 54.4,
    '2016年转基因种植面积': 24.7
  }, {
    country: '中国',
    '2016年耕地总面积': 104.4,
    '2016年转基因种植面积': 5.3
  }, {
    country: '美国',
    '2016年耕地总面积': 165.2,
    '2016年转基因种植面积': 72.9
  }];
  _exports.data = data;
  var BidirectionalBarPlot = new G2Plot.BidirectionalBar('container-113', {
    data: data,
    layout: 'vertical',
    xField: 'country',
    yField: ['2016年耕地总面积', '2016年转基因种植面积'],
    yAxis: {
      '2016年耕地总面积': {
        nice: true
      },
      '2016年转基因种植面积': {
        min: 0,
        max: 100
      }
    },
    tooltip: {
      shared: true,
      showMarkers: false
    }
  });
  BidirectionalBarPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 114,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    x: 'Oceania',
    low: 1,
    q1: 9,
    median: 16,
    q3: 22,
    high: 24
  }, {
    x: 'East Europe',
    low: 1,
    q1: 5,
    median: 8,
    q3: 12,
    high: 16
  }, {
    x: 'Australia',
    low: 1,
    q1: 8,
    median: 12,
    q3: 19,
    high: 26
  }, {
    x: 'South America',
    low: 2,
    q1: 8,
    median: 12,
    q3: 21,
    high: 28
  }, {
    x: 'North Africa',
    low: 1,
    q1: 8,
    median: 14,
    q3: 18,
    high: 24
  }, {
    x: 'North America',
    low: 3,
    q1: 10,
    median: 17,
    q3: 28,
    high: 30
  }, {
    x: 'West Europe',
    low: 1,
    q1: 7,
    median: 10,
    q3: 17,
    high: 22
  }, {
    x: 'West Africa',
    low: 1,
    q1: 6,
    median: 8,
    q3: 13,
    high: 16
  }];
  var boxPlot = new G2Plot.Box('container-114', {
    width: 400,
    height: 500,
    data: data,
    xField: 'x',
    yField: ['low', 'q1', 'median', 'q3', 'high'],
    boxStyle: {
      stroke: '#545454',
      fill: '#1890FF',
      fillOpacity: 0.3
    },
    animation: false
  });
  boxPlot.render();
});`,
  },
  {
    fileName: 'group.ts',
    fileIndex: 115,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.group = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    Species: 'I. setosa',
    type: 'SepalLength',
    value: 5.1,
    _bin: [4.3, 4.8, 5, 5.2, 5.8]
  }, {
    Species: 'I. setosa',
    type: 'SepalWidth',
    value: 3.5,
    _bin: [2.3, 3.2, 3.4, 3.7, 4.4]
  }, {
    Species: 'I. setosa',
    type: 'PetalLength',
    value: 1.4,
    _bin: [1, 1.4, 1.5, 1.6, 1.9]
  }, {
    Species: 'I. setosa',
    type: 'PetalWidth',
    value: 0.2,
    _bin: [0.1, 0.2, 0.2, 0.3, 0.6]
  }, {
    Species: 'I. versicolor',
    type: 'SepalLength',
    value: 7,
    _bin: [4.9, 5.6, 5.9, 6.3, 7]
  }, {
    Species: 'I. versicolor',
    type: 'SepalWidth',
    value: 3.2,
    _bin: [2, 2.5, 2.8, 3, 3.4]
  }, {
    Species: 'I. versicolor',
    type: 'PetalLength',
    value: 4.7,
    _bin: [3, 4, 4.35, 4.6, 5.1]
  }, {
    Species: 'I. versicolor',
    type: 'PetalWidth',
    value: 1.4,
    _bin: [1, 1.2, 1.3, 1.5, 1.8]
  }, {
    Species: 'I. virginica',
    type: 'SepalLength',
    value: 6.3,
    _bin: [4.9, 6.2, 6.5, 6.9, 7.9]
  }, {
    Species: 'I. virginica',
    type: 'SepalWidth',
    value: 3.3,
    _bin: [2.2, 2.8, 3, 3.2, 3.8]
  }, {
    Species: 'I. virginica',
    type: 'PetalLength',
    value: 6,
    _bin: [4.5, 5.1, 5.55, 5.9, 6.9]
  }, {
    Species: 'I. virginica',
    type: 'PetalWidth',
    value: 2.5,
    _bin: [1.4, 1.8, 2, 2.3, 2.5]
  }];
  var groupBoxPlot = new G2Plot.Box('container-115', {
    data: data,
    xField: 'type',
    yField: '_bin',
    groupField: 'Species'
  });
  groupBoxPlot.render();
});`,
  },
  {
    fileName: 'outliers.ts',
    fileIndex: 116,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.outliers = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    x: '职业 A',
    low: 20000,
    q1: 26000,
    median: 27000,
    q3: 32000,
    high: 38000,
    outliers: [50000, 52000]
  }, {
    x: '职业 B',
    low: 40000,
    q1: 49000,
    median: 62000,
    q3: 73000,
    high: 88000,
    outliers: [32000, 29000, 106000]
  }, {
    x: '职业 C',
    low: 52000,
    q1: 59000,
    median: 65000,
    q3: 74000,
    high: 83000,
    outliers: [91000]
  }, {
    x: '职业 D',
    low: 58000,
    q1: 96000,
    median: 130000,
    q3: 170000,
    high: 200000,
    outliers: [42000, 210000, 215000]
  }, {
    x: '职业 E',
    low: 24000,
    q1: 28000,
    median: 32000,
    q3: 38000,
    high: 42000,
    outliers: [48000]
  }, {
    x: '职业 F',
    low: 47000,
    q1: 56000,
    median: 69000,
    q3: 85000,
    high: 100000,
    outliers: [110000, 115000, 32000]
  }, {
    x: '职业 G',
    low: 64000,
    q1: 74000,
    median: 83000,
    q3: 93000,
    high: 100000,
    outliers: [110000]
  }, {
    x: '职业 H',
    low: 67000,
    q1: 72000,
    median: 84000,
    q3: 95000,
    high: 110000,
    outliers: [57000, 54000]
  }];
  var outliersBoxPlot = new G2Plot.Box('container-116', {
    data: data,
    xField: 'x',
    yField: ['low', 'q1', 'median', 'q3', 'high'],
    outliersField: 'outliers',
    outliersStyle: {
      fill: '#f6f'
    }
  });
  outliersBoxPlot.render();
});`,
  },
  {
    fileName: 'basic-transpose.ts',
    fileIndex: 117,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicTranspose = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253
  }, {
    stage: '初试人数',
    number: 151
  }, {
    stage: '复试人数',
    number: 113
  }, {
    stage: '录取人数',
    number: 87
  }, {
    stage: '入职人数',
    number: 59
  }];
  var funnelPlot = new G2Plot.Funnel('container-117', {
    data: data,
    xField: 'stage',
    yField: 'number',
    isTransposed: true,
    minSize: 0.3,
    maxSize: 0.8,
    label: {
      formatter: function formatter(datum) {
        // 提供占比$$percentage$$，转化率$$conversion$$两种格式
        return "".concat(datum.stage, ":").concat(datum.number);
      }
    },
    conversionTag: {
      formatter: function formatter(datum) {
        return (datum[G2Plot.FUNNEL_CONVERSATION_FIELD][1] / datum[G2Plot.FUNNEL_CONVERSATION_FIELD][0]).toFixed(2);
      }
    },
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: datum.stage,
          value: "".concat(datum.number, "u4E2A")
        };
      }
    }
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 118,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253
  }, {
    stage: '初试人数',
    number: 151
  }, {
    stage: '复试人数',
    number: 113
  }, {
    stage: '录取人数',
    number: 87
  }, {
    stage: '入职人数',
    number: 59
  }];
  var funnelPlot = new G2Plot.Funnel('container-118', {
    data: data,
    xField: 'stage',
    yField: 'number',
    legend: false
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'compare-transpose.ts',
    fileIndex: 119,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.compareTranspose = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253,
    company: 'A公司'
  }, {
    stage: '初试人数',
    number: 151,
    company: 'A公司'
  }, {
    stage: '复试人数',
    number: 113,
    company: 'A公司'
  }, {
    stage: '录取人数',
    number: 87,
    company: 'A公司'
  }, {
    stage: '入职人数',
    number: 59,
    company: 'A公司'
  }, {
    stage: '简历筛选',
    number: 303,
    company: 'B公司'
  }, {
    stage: '初试人数',
    number: 251,
    company: 'B公司'
  }, {
    stage: '复试人数',
    number: 153,
    company: 'B公司'
  }, {
    stage: '录取人数',
    number: 117,
    company: 'B公司'
  }, {
    stage: '入职人数',
    number: 79,
    company: 'B公司'
  }];
  var funnelPlot = new G2Plot.Funnel('container-119', {
    data: data,
    xField: 'stage',
    yField: 'number',
    compareField: 'company',
    isTransposed: true,
    conversionTag: {
      offsetX: 10,
      style: {
        fill: '#666',
        fontSize: 12
      }
    },
    legend: false
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'compare.ts',
    fileIndex: 120,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.compare = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253,
    company: 'A公司'
  }, {
    stage: '初试人数',
    number: 151,
    company: 'A公司'
  }, {
    stage: '复试人数',
    number: 113,
    company: 'A公司'
  }, {
    stage: '录取人数',
    number: 87,
    company: 'A公司'
  }, {
    stage: '入职人数',
    number: 59,
    company: 'A公司'
  }, {
    stage: '简历筛选',
    number: 303,
    company: 'B公司'
  }, {
    stage: '初试人数',
    number: 251,
    company: 'B公司'
  }, {
    stage: '复试人数',
    number: 153,
    company: 'B公司'
  }, {
    stage: '录取人数',
    number: 117,
    company: 'B公司'
  }, {
    stage: '入职人数',
    number: 79,
    company: 'B公司'
  }];
  var funnelPlot = new G2Plot.Funnel('container-120', {
    data: data,
    xField: 'stage',
    yField: 'number',
    compareField: 'company',
    meta: {
      stage: {
        alias: '行为'
      },
      pv: {
        alias: '人数',
        formatter: function formatter(v) {
          return "".concat(v, "u6B21");
        }
      }
    },
    tooltip: {
      fields: ['stage', 'number', 'company'],
      formatter: function formatter(v) {
        return {
          name: "".concat(v.company, "u7684").concat(v.stage),
          value: v.number
        };
      }
    },
    legend: false
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'dynamic-height-transpose.ts',
    fileIndex: 121,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dynamicHeightTranspose = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253
  }, {
    stage: '初试人数',
    number: 151
  }, {
    stage: '复试人数',
    number: 113
  }, {
    stage: '录取人数',
    number: 87
  }, {
    stage: '入职人数',
    number: 59
  }];
  var funnelPlot = new G2Plot.Funnel('container-121', {
    data: data,
    xField: 'stage',
    yField: 'number',
    dynamicHeight: true,
    isTransposed: true,
    legend: false
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'dynamic-height.ts',
    fileIndex: 122,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.dynamicHeight = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253
  }, {
    stage: '初试人数',
    number: 151
  }, {
    stage: '复试人数',
    number: 113
  }, {
    stage: '录取人数',
    number: 87
  }, {
    stage: '入职人数',
    number: 59
  }];
  var funnelPlot = new G2Plot.Funnel('container-122', {
    data: data,
    xField: 'stage',
    yField: 'number',
    dynamicHeight: true,
    legend: false
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'facet-transpose.ts',
    fileIndex: 123,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.facetTranspose = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253,
    company: 'A公司'
  }, {
    stage: '初试人数',
    number: 151,
    company: 'A公司'
  }, {
    stage: '复试人数',
    number: 113,
    company: 'A公司'
  }, {
    stage: '录取人数',
    number: 87,
    company: 'A公司'
  }, {
    stage: '入职人数',
    number: 59,
    company: 'A公司'
  }, {
    stage: '简历筛选',
    number: 303,
    company: 'B公司'
  }, {
    stage: '初试人数',
    number: 251,
    company: 'B公司'
  }, {
    stage: '复试人数',
    number: 153,
    company: 'B公司'
  }, {
    stage: '录取人数',
    number: 117,
    company: 'B公司'
  }, {
    stage: '入职人数',
    number: 79,
    company: 'B公司'
  }];
  var funnelPlot = new G2Plot.Funnel('container-123', {
    data: data,
    xField: 'stage',
    yField: 'number',
    seriesField: 'company',
    isTransposed: true,
    meta: {
      stage: {
        alias: '行为'
      },
      pv: {
        alias: '人数',
        formatter: function formatter(v) {
          return "".concat(v, "u6B21");
        }
      }
    },
    legend: false
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'facet.ts',
    fileIndex: 124,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.facet = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    stage: '简历筛选',
    number: 253,
    company: 'A公司'
  }, {
    stage: '初试人数',
    number: 151,
    company: 'A公司'
  }, {
    stage: '复试人数',
    number: 113,
    company: 'A公司'
  }, {
    stage: '录取人数',
    number: 87,
    company: 'A公司'
  }, {
    stage: '入职人数',
    number: 59,
    company: 'A公司'
  }, {
    stage: '简历筛选',
    number: 303,
    company: 'B公司'
  }, {
    stage: '初试人数',
    number: 251,
    company: 'B公司'
  }, {
    stage: '复试人数',
    number: 153,
    company: 'B公司'
  }, {
    stage: '录取人数',
    number: 117,
    company: 'B公司'
  }, {
    stage: '入职人数',
    number: 79,
    company: 'B公司'
  }];
  var funnelPlot = new G2Plot.Funnel('container-124', {
    data: data,
    xField: 'stage',
    yField: 'number',
    seriesField: 'company',
    meta: {
      stage: {
        alias: '行为'
      },
      pv: {
        alias: '人数',
        formatter: function formatter(v) {
          return "".concat(v, "u6B21");
        }
      }
    },
    legend: false
  });
  funnelPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 125,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/RoliHq%2453S/histogram.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var histogramPlot = new G2Plot.Histogram('container-125', {
      data: data,
      binField: 'value',
      binWidth: 2
    });
    histogramPlot.render();
  });
});`,
  },
  {
    fileName: 'binWidth.ts',
    fileIndex: 126,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.binWidth = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    value: 1.2
  }, {
    value: 3.4
  }, {
    value: 3.7
  }, {
    value: 4.3
  }, {
    value: 5.2
  }, {
    value: 5.8
  }, {
    value: 6.1
  }, {
    value: 6.5
  }, {
    value: 6.8
  }, {
    value: 7.1
  }, {
    value: 7.3
  }, {
    value: 7.7
  }, {
    value: 8.3
  }, {
    value: 8.6
  }, {
    value: 8.8
  }, {
    value: 9.1
  }, {
    value: 9.2
  }, {
    value: 9.4
  }, {
    value: 9.5
  }, {
    value: 9.7
  }, {
    value: 10.5
  }, {
    value: 10.7
  }, {
    value: 10.8
  }, {
    value: 11.0
  }, {
    value: 11.0
  }, {
    value: 11.1
  }, {
    value: 11.2
  }, {
    value: 11.3
  }, {
    value: 11.4
  }, {
    value: 11.4
  }, {
    value: 11.7
  }, {
    value: 12.0
  }, {
    value: 12.9
  }, {
    value: 12.9
  }, {
    value: 13.3
  }, {
    value: 13.7
  }, {
    value: 13.8
  }, {
    value: 13.9
  }, {
    value: 14.0
  }, {
    value: 14.2
  }, {
    value: 14.5
  }, {
    value: 15
  }, {
    value: 15.2
  }, {
    value: 15.6
  }, {
    value: 16.0
  }, {
    value: 16.3
  }, {
    value: 17.3
  }, {
    value: 17.5
  }, {
    value: 17.9
  }, {
    value: 18.0
  }, {
    value: 18.0
  }, {
    value: 20.6
  }, {
    value: 21
  }, {
    value: 23.4
  }];
  var histogramPlot = new G2Plot.Histogram('container-126', {
    data: data,
    binField: 'value',
    binWidth: 4,
    tooltip: {
      showMarkers: false,
      position: 'top'
    },
    interactions: [{
      type: 'element-highlight'
    }],

    /** range 为 x 轴代表字段，count 为 y 轴统计个数字段 */
    meta: {
      range: {
        min: 0,
        tickInterval: 2
      },
      count: {
        max: 20,
        nice: true
      }
    }
  });
  histogramPlot.render();
});`,
  },
  {
    fileName: 'stack.ts',
    fileIndex: 127,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stack = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var histogramPlot = new G2Plot.Histogram('container-127', {
      data: data,
      binField: 'depth',
      binWidth: 2,
      stackField: 'cut',
      coloField: 'color',
      tooltip: {
        showMarkers: false,
        position: 'top'
      },
      interactions: [{
        type: 'element-highlight'
      }]
    });
    histogramPlot.render();
  });
});`,
  },
  {
    fileName: 'area-alternate-grid.ts',
    fileIndex: 128,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.areaAlternateGrid = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var radarPlot = new G2Plot.Radar('container-128', {
      data: data,
      xField: 'item',
      yField: 'score',
      seriesField: 'user',
      meta: {
        score: {
          alias: '分数',
          min: 0,
          max: 80
        }
      },
      xAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        }
      },
      yAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: 'line',
            style: {
              lineDash: null
            }
          },
          alternateColor: 'rgba(0, 0, 0, 0.04)'
        }
      },
      // 开启面积
      area: {},
      // 开启辅助点
      point: {
        size: 2
      }
    });
    radarPlot.render();
  });
});`,
  },
  {
    fileName: 'area-grid.ts',
    fileIndex: 129,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.areaGrid = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var radarPlot = new G2Plot.Radar('container-129', {
      data: data,
      xField: 'item',
      yField: 'score',
      seriesField: 'user',
      meta: {
        score: {
          alias: '分数',
          min: 0,
          max: 80
        }
      },
      xAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        }
      },
      yAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: 'line',
            style: {
              lineDash: null
            }
          }
        }
      },
      // 开启面积
      area: {},
      // 开启辅助点
      point: {
        size: 2
      }
    });
    radarPlot.render();
  });
});`,
  },
  {
    fileName: 'area.ts',
    fileIndex: 130,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.area = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var radarPlot = new G2Plot.Radar('container-130', {
      data: data,
      xField: 'item',
      yField: 'score',
      seriesField: 'user',
      meta: {
        score: {
          alias: '分数',
          min: 0,
          max: 80
        }
      },
      xAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        }
      },
      // 开启面积
      area: {},
      // 开启辅助点
      point: {
        size: 2
      }
    });
    radarPlot.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 131,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  // 数据更新于 2021.01.09
  var data = [{
    name: 'G2',
    star: 10371
  }, {
    name: 'G6',
    star: 7380
  }, {
    name: 'F2',
    star: 7414
  }, {
    name: 'L7',
    star: 2140
  }, {
    name: 'X6',
    star: 660
  }, {
    name: 'AVA',
    star: 885
  }, {
    name: 'G2Plot',
    star: 1626
  }];
  var radarPlot = new G2Plot.Radar('container-131', {
    data: data.map(function (d) {
      return { ...d,
        star: Math.sqrt(d.star)
      };
    }),
    xField: 'name',
    yField: 'star',
    appendPadding: [0, 10, 0, 10],
    meta: {
      star: {
        alias: 'star 数量',
        min: 0,
        nice: true,
        formatter: function formatter(v) {
          return Number(v).toFixed(2);
        }
      }
    },
    xAxis: {
      tickLine: null
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)'
      }
    },
    // 开启辅助点
    point: {
      size: 2
    },
    area: {}
  });
  radarPlot.render();
});`,
  },
  {
    fileName: 'line-alternate-grid.ts',
    fileIndex: 132,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineAlternateGrid = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var radarPlot = new G2Plot.Radar('container-132', {
      data: data,
      xField: 'item',
      yField: 'score',
      seriesField: 'user',
      meta: {
        score: {
          alias: '分数',
          min: 0,
          max: 80
        }
      },
      xAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        }
      },
      yAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: 'line',
            style: {
              lineDash: null
            }
          },
          alternateColor: 'rgba(0, 0, 0, 0.04)'
        }
      },
      // 开启辅助点
      point: {
        size: 2
      }
    });
    radarPlot.render();
  });
});`,
  },
  {
    fileName: 'line-grid.ts',
    fileIndex: 133,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineGrid = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var radarPlot = new G2Plot.Radar('container-133', {
      data: data,
      xField: 'item',
      yField: 'score',
      seriesField: 'user',
      meta: {
        score: {
          alias: '分数',
          min: 0,
          max: 80
        }
      },
      xAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        }
      },
      yAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: 'line',
            style: {
              lineDash: null
            }
          }
        }
      },
      // 开启辅助点
      point: {
        size: 2
      }
    });
    radarPlot.render();
  });
});`,
  },
  {
    fileName: 'line.ts',
    fileIndex: 134,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.line = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var radarPlot = new G2Plot.Radar('container-134', {
      data: data,
      xField: 'item',
      yField: 'score',
      seriesField: 'user',
      meta: {
        score: {
          alias: '分数',
          min: 0,
          max: 80
        }
      },
      xAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null
            }
          }
        }
      },
      // 开启辅助点
      point: {
        size: 2
      }
    });
    radarPlot.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 135,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    name: 'X6',
    star: 297
  }, {
    name: 'G',
    star: 506
  }, {
    name: 'AVA',
    star: 805
  }, {
    name: 'G2Plot',
    star: 1478
  }, {
    name: 'L7',
    star: 2029
  }, {
    name: 'G6',
    star: 7100
  }, {
    name: 'F2',
    star: 7346
  }, {
    name: 'G2',
    star: 10178
  }];
  var bar = new G2Plot.RadialBar('container-135', {
    data: data,
    xField: 'name',
    yField: 'star',
    // maxAngle: 90, //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: 'star数',
          value: datum.star
        };
      }
    }
  });
  bar.render();
});`,
  },
  {
    fileName: 'color.ts',
    fileIndex: 136,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.color = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    name: 'X6',
    star: 297
  }, {
    name: 'G',
    star: 506
  }, {
    name: 'AVA',
    star: 805
  }, {
    name: 'G2Plot',
    star: 1478
  }, {
    name: 'L7',
    star: 2029
  }, {
    name: 'G6',
    star: 7100
  }, {
    name: 'F2',
    star: 7346
  }, {
    name: 'G2',
    star: 10178
  }];
  var bar = new G2Plot.RadialBar('container-136', {
    data: data,
    xField: 'name',
    yField: 'star',
    maxAngle: 270,
    //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: 'star数',
          value: datum.star
        };
      }
    },
    colorField: 'star',
    color: function color(_ref) {
      var star = _ref.star;

      if (star > 10000) {
        return '#36c361';
      } else if (star > 1000) {
        return '#2194ff';
      }

      return '#ff4d4f';
    }
  });
  bar.render();
});`,
  },
  {
    fileName: 'line.ts',
    fileIndex: 137,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.line = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    term: 'Zombieland',
    count: 9
  }, {
    term: 'Wieners',
    count: 8
  }, {
    term: 'Toy Story',
    count: 8
  }, {
    term: 'trashkannon',
    count: 7
  }, {
    term: 'the GROWLERS',
    count: 6
  }, {
    term: 'mudweiser',
    count: 6
  }, {
    term: 'ThunderCats',
    count: 4
  }, {
    term: 'The Taqwacores - Motion Picture',
    count: 4
  }, {
    term: 'The Shawshank Redemption',
    count: 2
  }, {
    term: 'The Olivia Experiment',
    count: 1
  }];
  var bar = new G2Plot.RadialBar('container-137', {
    data: data,
    xField: 'term',
    yField: 'count',
    radius: 1,
    innerRadius: 0.4,
    // 设置坐标系的起始角度和终止角度
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 2.5,
    tooltip: {
      showMarkers: true
    },
    type: 'line',
    annotations: [{
      type: 'text',
      position: ['50%', '50%'],
      content: 'Music',
      style: {
        textAlign: 'center',
        fontSize: 24
      }
    }]
  });
  bar.render();
});`,
  },
  {
    fileName: 'round-corner.ts',
    fileIndex: 138,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.roundCorner = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    name: 'X6',
    star: 297
  }, {
    name: 'G',
    star: 506
  }, {
    name: 'AVA',
    star: 805
  }, {
    name: 'G2Plot',
    star: 1478
  }, {
    name: 'L7',
    star: 2029
  }, {
    name: 'G6',
    star: 7100
  }, {
    name: 'F2',
    star: 7346
  }, {
    name: 'G2',
    star: 10178
  }];
  var bar = new G2Plot.RadialBar('container-138', {
    data: data,
    xField: 'name',
    yField: 'star',
    maxAngle: 270,
    //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    barStyle: {
      lineCap: 'round'
    }
  });
  bar.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 139,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    ts_code: '000001.SH',
    trade_date: '2020-03-13',
    close: 2887.4265,
    open: 2804.2322,
    high: 2910.8812,
    low: 2799.9841,
    vol: 366450436,
    amount: 393019665.2
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-12',
    close: 2923.4856,
    open: 2936.0163,
    high: 2944.4651,
    low: 2906.2838,
    vol: 307778457,
    amount: 328209202.4
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-11',
    close: 2968.5174,
    open: 3001.7616,
    high: 3010.0286,
    low: 2968.5174,
    vol: 352470970,
    amount: 378766619
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-10',
    close: 2996.7618,
    open: 2918.9347,
    high: 3000.2963,
    low: 2904.7989,
    vol: 393296648,
    amount: 425017184.8
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-09',
    close: 2943.2907,
    open: 2987.1805,
    high: 2989.2051,
    low: 2940.7138,
    vol: 414560736,
    amount: 438143854.6
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-06',
    close: 3034.5113,
    open: 3039.9395,
    high: 3052.4439,
    low: 3029.4632,
    vol: 362061533,
    amount: 377388542.7
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-05',
    close: 3071.6771,
    open: 3036.1545,
    high: 3074.2571,
    low: 3022.9262,
    vol: 445425806,
    amount: 482770471.4
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-04',
    close: 3011.6657,
    open: 2981.806,
    high: 3012.0035,
    low: 2974.3583,
    vol: 353338278,
    amount: 389893917.5
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-03',
    close: 2992.8968,
    open: 3006.8888,
    high: 3026.842,
    low: 2976.623,
    vol: 410108047,
    amount: 447053681.5
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-03-02',
    close: 2970.9312,
    open: 2899.31,
    high: 2982.5068,
    low: 2899.31,
    vol: 367333369,
    amount: 397244201.2
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-28',
    close: 2880.3038,
    open: 2924.6407,
    high: 2948.1261,
    low: 2878.5443,
    vol: 401216914,
    amount: 432657775
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-27',
    close: 2991.3288,
    open: 2992.4919,
    high: 3009.4575,
    low: 2980.4774,
    vol: 350523658,
    amount: 395955641.5
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-26',
    close: 2987.9287,
    open: 2978.4195,
    high: 3028.7788,
    low: 2974.9423,
    vol: 469049552,
    amount: 495341447.3
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-25',
    close: 3013.0501,
    open: 2982.0696,
    high: 3016.9458,
    low: 2943.7168,
    vol: 441622762,
    amount: 513128644.6
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-24',
    close: 3031.2333,
    open: 3027.8925,
    high: 3042.1821,
    low: 3007.3557,
    vol: 370430044,
    amount: 451601363.1
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-21',
    close: 3039.6692,
    open: 3022.2455,
    high: 3058.898,
    low: 3020.141,
    vol: 364557276,
    amount: 445062076.7
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-20',
    close: 3030.1542,
    open: 2981.8802,
    high: 3031.3706,
    low: 2968.4451,
    vol: 345732881,
    amount: 413761364.1
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-19',
    close: 2975.4019,
    open: 2979.5223,
    high: 2998.2718,
    low: 2971.8219,
    vol: 315141151,
    amount: 381331160.4
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-18',
    close: 2984.9716,
    open: 2981.4097,
    high: 2990.6003,
    low: 2960.7751,
    vol: 311665913,
    amount: 374998562.6
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-17',
    close: 2983.6224,
    open: 2924.9913,
    high: 2983.6371,
    low: 2924.9913,
    vol: 313198007,
    amount: 367014340.1
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-14',
    close: 2917.0077,
    open: 2899.8659,
    high: 2926.9427,
    low: 2899.5739,
    vol: 250650627,
    amount: 308080368.7
  }, {
    ts_code: '000001.SH',
    trade_date: '2020-02-13',
    close: 2906.0735,
    open: 2927.1443,
    high: 2935.406,
    low: 2901.2425,
    vol: 274804844,
    amount: 334526327.4
  }];
  var stockPlot = new G2Plot.Stock('container-139', {
    width: 400,
    height: 500,
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low']
  });
  stockPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 140,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var sunburstPlot = new G2Plot.Sunburst('container-140', {
      data: data,
      seriesField: 'sum',
      colorField: 'label',
      innerRadius: 0.3,
      interactions: [{
        type: 'element-active'
      }]
    });
    sunburstPlot.render();
  });
});`,
  },
  {
    fileName: 'reflect.ts',
    fileIndex: 141,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.reflect = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/mobile.json').then(function (res) {
    return res.json();
  }).then(function (fetchData) {
    var data = {
      name: 'root',
      children: fetchData
    };
    var sunburstPlot = new G2Plot.Sunburst('container-141', {
      data: data,
      type: 'treemap',
      seriesField: 'value',
      reflect: 'y',
      colorField: 'brand',
      hierarchyConfig: {
        size: [1, 0.1]
      },
      sunburstStyle: {
        lineWidth: 1,
        stroke: '#fff'
      },
      tooltip: {
        fields: ['name', 'value']
      },
      interactions: [{
        type: 'element-active'
      }]
    });
    sunburstPlot.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 142,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = {
    name: 'root',
    children: [{
      name: '分类 1',
      value: 560
    }, {
      name: '分类 2',
      value: 500
    }, {
      name: '分类 3',
      value: 150
    }, {
      name: '分类 4',
      value: 140
    }, {
      name: '分类 5',
      value: 115
    }, {
      name: '分类 6',
      value: 95
    }, {
      name: '分类 7',
      value: 90
    }, {
      name: '分类 8',
      value: 75
    }, {
      name: '分类 9',
      value: 98
    }, {
      name: '分类 10',
      value: 60
    }, {
      name: '分类 11',
      value: 45
    }, {
      name: '分类 12',
      value: 40
    }, {
      name: '分类 13',
      value: 40
    }, {
      name: '分类 14',
      value: 35
    }, {
      name: '分类 15',
      value: 40
    }, {
      name: '分类 16',
      value: 40
    }, {
      name: '分类 17',
      value: 40
    }, {
      name: '分类 18',
      value: 30
    }, {
      name: '分类 19',
      value: 28
    }, {
      name: '分类 20',
      value: 16
    }]
  };
  var treemapPlot = new G2Plot.Treemap('container-142', {
    data: data,
    colorField: 'name'
  });
  treemapPlot.render();
});`,
  },
  {
    fileName: 'drill-down.ts',
    fileIndex: 143,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "@antv/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("@antv/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.util);
    global.drillDown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _util) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/basement_prod/c2589761-62d6-411d-9d51-794d6860c4a9.json').then(function (res) {
    return res.json();
  }).then(function (fetchData) {
    var rootData = {
      name: '公司销售数据',
      children: []
    };
    (0, _util.each)(fetchData, function (s) {
      var children = (0, _util.clone)(s.children);
      var childrenArray = [];
      (0, _util.each)(children, function (c) {
        if (c.children && c.children.length > 0) {
          childrenArray.push(c);
        }
      });
      s.children = childrenArray;
      rootData.children.push(s);
    });
    var treemapPlot = new G2Plot.Treemap('container-143', {
      data: rootData,
      colorField: 'name',
      legend: {
        position: 'top-left'
      },
      interactions: [{
        type: 'treemap-drill-down'
      }],
      tooltip: {
        formatter: function formatter(v) {
          var root = v.path[v.path.length - 1];
          return {
            name: v.name,
            value: "".concat(v.value, "(u603Bu5360u6BD4").concat((v.value / root.value * 100).toFixed(2), "%)")
          };
        }
      }
    });
    treemapPlot.render();
  });
});`,
  },
  {
    fileName: 'treemap-nest.ts',
    fileIndex: 144,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "insert-css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("insert-css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.insertCss);
    global.treemapNest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _insertCss) {
  "use strict";

  // 我们用 insert-css 演示引入自定义样式
  // 推荐将样式添加到自己的样式文件中
  // 若拷贝官方代码，别忘了 npm install insert-css
  (0, _insertCss.insertCss)("  .container{    padding: 16px 0px;    width: 160px;    display: flex;    flex-direction: column;  }  .title{    font-weight: bold;  }  .tooltip-item{    margin-top: 12px;    display: flex;    width: 100%;    justify-content: space-between;  }");
  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/mobile.json').then(function (res) {
    return res.json();
  }).then(function (fetchData) {
    var data = {
      name: 'root',
      children: fetchData
    };
    var treemapPlot = new G2Plot.Treemap('container-144', {
      data: data,
      colorField: 'brand',
      // 为矩形树图增加缩放,拖拽交互
      interactions: [{
        type: 'view-zoom'
      }, {
        type: 'drag-move'
      }],
      tooltip: {
        follow: true,
        enterable: true,
        offset: 5,
        customContent: function customContent(value, items) {
          if (!items || items.length <= 0) return;
          var itemData = items[0].data;
          var parent = itemData.path[1];
          var root = itemData.path[itemData.path.length - 1];
          return "<div class='container'>" + "<div class='title'>".concat(itemData.name, "</div>") + "<div class='tooltip-item'><span>u9500u91CF</span><span>".concat(itemData.value, "</span></div>") + "<div class='tooltip-item'><span>u54C1u724C</span><span>".concat(itemData.brand, "</span></div>") + "<div class='tooltip-item'><span>u54C1u724Cu5360u6BD4</span><span>".concat((itemData.value / parent.value * 100).toFixed(2), "%</span></div>") + "<div class='tooltip-item'><span>u5E02u573Au5360u6BD4</span><span>".concat((itemData.value / root.value * 100).toFixed(2), "%</span></div>") + "</div>";
        }
      }
    });
    treemapPlot.render();
  });
});`,
  },
  {
    fileName: 'absolute-label.ts',
    fileIndex: 145,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.absoluteLabel = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    month: '一月',
    value: 6200000
  }, {
    month: '二月',
    value: -600000
  }, {
    month: '三月',
    value: -4100000
  }, {
    month: '四月',
    value: 3700000
  }, {
    month: '五月',
    value: -2100000
  }, {
    month: '六月',
    value: 5300000
  }, {
    month: '七月',
    value: 3100000
  }, {
    month: '八月',
    value: -500000
  }, {
    month: '九月',
    value: 4200000
  }, {
    month: '十月',
    value: 5300000
  }, {
    month: '十一月',
    value: -500000
  }, {
    month: '十二月',
    value: 5100000
  }];
  var waterfallPlot = new G2Plot.Waterfall('container-145', {
    data: data,
    padding: 'auto',
    appendPadding: [20, 0, 0, 0],
    xField: 'month',
    yField: 'value',
    meta: {
      month: {
        alias: '月份'
      },
      value: {
        alias: '销售量',
        formatter: function formatter(v) {
          return "".concat(v / 10000000, " u4EBF");
        }
      }
    },

    /** 展示总计 */
    total: {
      label: '总计',
      style: {
        fill: '#96a6a6'
      }
    },

    /** 数据标签展示模式：绝对值 */
    labelMode: 'absolute',
    label: {
      style: {
        fontSize: 10
      },
      background: {
        style: {
          fill: '#f6f6f6',
          radius: 1
        },
        padding: 1.5
      }
    }
  });
  waterfallPlot.render();
});`,
  },
  {
    fileName: 'annotation.ts',
    fileIndex: 146,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.annotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    quarter: '第一季度',
    value: 6200000
  }, {
    quarter: '第二季度',
    value: -2600000
  }, {
    quarter: '第三季度',
    value: 4100000
  }, {
    quarter: '第四季度',
    value: 3700000
  }];

  var formatter = function formatter(v) {
    return "".concat(v / 10000000, " u4EBF");
  };

  var annotations = [];
  data.reduce(function (v, d) {
    annotations.push({
      type: 'text',
      position: function position() {
        var y = v + d.value / 2;
        return [d.quarter, y];
      },
      content: formatter(d.value),
      style: {
        fontSize: 14,
        stroke: '#666',
        fill: '#fff',
        lineWidth: 1,
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    });
    return v + d.value;
  }, 0);
  var waterfallPlot = new G2Plot.Waterfall('container-146', {
    data: data,
    padding: 'auto',
    appendPadding: [20, 0, 0, 0],
    xField: 'quarter',
    yField: 'value',
    meta: {
      quarter: {
        alias: '月份'
      },
      value: {
        alias: '销售量',
        min: 0,
        formatter: formatter
      }
    },

    /** 展示总计 */
    total: {
      label: '总计',
      style: {
        fill: '#96a6a6'
      }
    },

    /** 数据标签展示模式：绝对值 */
    labelMode: 'absolute',
    label: {
      style: {
        fontSize: 12
      }
    },
    annotations: annotations
  });
  waterfallPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 147,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '日用品',
    money: 120
  }, {
    type: '伙食费',
    money: 900
  }, {
    type: '交通费',
    money: 200
  }, {
    type: '水电费',
    money: 300
  }, {
    type: '房租',
    money: 1200
  }, {
    type: '商场消费',
    money: 1000
  }, {
    type: '红包收入',
    money: -2000
  }];
  var waterfallPlot = new G2Plot.Waterfall('container-147', {
    data: data,
    xField: 'type',
    yField: 'money',
    appendPadding: [15, 0, 0, 0],
    meta: {
      type: {
        alias: '类别'
      },
      money: {
        alias: '收支',
        formatter: function formatter(v) {
          return "".concat(v, " u5143");
        }
      }
    },
    label: {
      style: {
        fontSize: 10,
        fill: 'rgba(0,0,0,0.65)'
      },
      layout: [{
        type: 'interval-adjust-position'
      }]
    },
    total: {
      label: '总支出',
      style: {
        fill: '#96a6a6'
      }
    }
  });
  waterfallPlot.render();
});`,
  },
  {
    fileName: 'custom-color.ts',
    fileIndex: 148,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customColor = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    month: '2019',
    value: 23000000
  }, {
    month: 'Jan',
    value: 2200000
  }, {
    month: 'Feb',
    value: -4600000
  }, {
    month: 'Mar',
    value: -9100000
  }, {
    month: 'Apr',
    value: 3700000
  }, {
    month: 'May',
    value: -2100000
  }, {
    month: 'Jun',
    value: 5300000
  }, {
    month: 'Jul',
    value: 3100000
  }, {
    month: 'Aug',
    value: -1500000
  }, {
    month: 'Sep',
    value: 4200000
  }, {
    month: 'Oct',
    value: 5300000
  }, {
    month: 'Nov',
    value: -1500000
  }, {
    month: 'Dec',
    value: 5100000
  }];
  var waterfallPlot = new G2Plot.Waterfall('container-148', {
    data: data,
    padding: 'auto',
    appendPadding: [20, 0, 0, 0],
    xField: 'month',
    yField: 'value',
    meta: {
      month: {
        alias: '月份'
      },
      value: {
        alias: '销售量',
        formatter: function formatter(v) {
          return "".concat(v / 10000000, " u4EBF");
        }
      }
    },

    /** 展示总计 */
    total: {
      label: '2020'
    },
    color: function color(_ref) {
      var month = _ref.month,
          value = _ref.value;

      if (month === '2019' || month === '2020') {
        return '#96a6a6';
      }

      return value > 0 ? '#f4664a' : '#30bf78';
    },
    legend: {
      custom: true,
      items: [{
        name: 'Increase',
        value: 'increase',
        marker: {
          symbol: 'square',
          style: {
            r: 5,
            fill: '#f4664a'
          }
        }
      }, {
        name: 'Decrease',
        value: 'decrease',
        marker: {
          symbol: 'square',
          style: {
            r: 5,
            fill: '#30bf78'
          }
        }
      }, {
        name: 'Total',
        value: 'total',
        marker: {
          symbol: 'square',
          style: {
            r: 5,
            fill: '#96a6a6'
          }
        }
      }]
    },
    label: {
      style: {
        fontSize: 10
      },
      layout: [{
        type: 'interval-adjust-position'
      }],
      background: {
        style: {
          fill: '#f6f6f6',
          stroke: '#e6e6e6',
          strokeOpacity: 0.65,
          radius: 2
        },
        padding: 1.5
      }
    },
    waterfallStyle: function waterfallStyle() {
      return {
        fillOpacity: 0.85
      };
    }
  });
  waterfallPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 149,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/world-population.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var wordCloud = new G2Plot.WordCloud('container-149', {
      data: data,
      wordField: 'x',
      weightField: 'value',
      color: '#122c6a',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [24, 80]
      },
      // 设置交互类型
      interactions: [{
        type: 'element-active'
      }],
      state: {
        active: {
          // 这里可以设置 active 时的样式
          style: {
            lineWidth: 3
          }
        }
      }
    });
    wordCloud.render();
  });
});`,
  },
  {
    fileName: 'color-field.ts',
    fileIndex: 150,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.colorField = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var wordCloud = new G2Plot.WordCloud('container-150', {
      data: data,
      wordField: 'name',
      weightField: 'value',
      colorField: 'value',
      imageMask: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [8, 32]
      }
    });
    wordCloud.render();
  });
});`,
  },
  {
    fileName: 'douban-2020-movie.ts',
    fileIndex: 151,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.douban2020Movie = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/%24IWXp5slbE/2020-movie-from-douban.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var wordCloud = new G2Plot.WordCloud('container-151', {
      data: data,
      wordField: 'title',
      weightField: 'rate',
      colorField: 'tag',
      legend: {},
      imageMask: 'https://gw.alipayobjects.com/zos/antfincdn/Qw7Xbn76kM/53176454-747c-4f0a-a9e5-936aa66a0082.png',
      wordStyle: {
        fontFamily: 'Avenir',
        fontSize: [8, 16]
      },
      state: {
        active: {
          style: {
            lineWidth: 0,
            shadowBlur: 4,
            shadowColor: 'rgba(0,0,0,0.3)'
          }
        }
      }
    });
    wordCloud.render();
  });
});`,
  },
  {
    fileName: 'image-mask-base64.ts',
    fileIndex: 152,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.imageMaskBase64 = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var wordCloud = new G2Plot.WordCloud('container-152', {
      data: data,
      wordField: 'name',
      weightField: 'value',
      colorField: 'name',
      imageMask: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcoAAADHCAIAAAAWF4ThAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAA5GSURBVHhe7d1teuOoFkXhO5+MJ/PxeDyezKcvyKTixLYEnLMPIK/3Vz9dHxYCluRUrPzvPwCAAHkFAAnyCgAS5BUAJMgrAEiQVwCQIK8AIEFeAUCCvAKABHkFAAnyCgAS5BUAJMgrAEiQVwCQIK8AIEFeAUCCvAKABHkFAAnyCgAS5BUAJMgrAEiQVwCQIK8AIEFeAUCCvAKABHkFAAnyCgAS5BUAJMgrAEiQVwCQIK8AIEFeAUCCvAKABHkFAAnyCgAS5BUAJMgrAEiQVwCQIK8AIEFeAUCCvAKABHkFAAnyCgAS5BUAJMgrAEiQVwCQIK8AIEFeAUCCvAKABHkFAAnyCgAS5BUAJMgrAEiQVwCQIK8AIEFegR7Xz/91+bh8lb8Bp0degR7kFYfIK9CDvOLQafP6daD8tmWVYTwqvw4x8opDJ8hrSsr1erl8fn5+JGUR18t/6CP94c/L5Xq9Ttmn2wjbBngbVRoSwdUgrzi0Zl5TblJPO1pabXybtqK6DfEjXz1iBvOVDztCviZm23UxXxhDJ4u84tBSeU1RlTb1lcA2qceYoqQeyddlwBTd2cKbL43leETIKw4tkdctOWV1DpU2rqqz6YY88NKhjOzovP6imzHyikNz53Wart77vJajczJskKLGTpXXb9tdu+toySsOzZrXKcN645fXCQaZbu68d/uUeS0c72XJKw5NmNf8LrksxSm55HWmy4fzXezMed34NJa84tBceZ29rBt7Xq/zBchx00+f1435mkJeZxb9fSQvzJPX/P08ZQXOzSGvnTtTy2vfr5HXzDRi8jqf9J4wVeS2/Lz/iaTLHHldZ0cmZ81r4vN1j5UmM93ElsNuRV4nkb8J/vPx1oy8bpbajdmJ8+qyKFeb0M7Ckteh7m9UnyKveY0u1tbk1Hl1GN5y18u+5JHXeOXTmuVM7nv3vH5NXZnXTp5X8wAXzGtP9MhrlL6Ph791Xldta3L6vBoLsGRe2wdNXkN0r6Y3zuu6bU1myGt+okn5TwnLGBfNa2v4yGsI8tpo6bYm0Xn9fkLJy+/kS79Q/yWpSoZBLpvXtlGT1xDktYV4730/LWmL0Ysc3X7pKz/ELn9Hx/YU1fLHqwTldftsUeNO3J4LU/68Uf8o+6f4I494123S8vfhaO7eG9pHXkOQ13qiG9fbY5Gsq3bbvRVfQxfndXv4SPmNfXwuYd3DtOS1deD5Wx5dO1t/COQ1BHmt5LPrf3F8QscfO2+3ZXl1HI3Hvxz2jjMyr4Xjh6mrj4G8hiCvVZzjqgvrH4/3R4q8CoZjDmxvBwbkdePU2NqDIK8hyGsFz7iGlfXeXWW985q/4lh+wZc1sJ0DHZXXzKOwlUdBXkOQ10N+cXV+dl6rLbKOeU1XCuVwjOe9MwQj85pYLyq1G5O8hiCvB9ziepqFeduZAcMxnvq+FTo4rw6BrRo3eQ1BXvfZ7yY2Y29bfaW3sEF7zHbyF82r+YJedRzkNQR53WNd6TdTnKoV2U5/XwnG59W86mrWG3kNQV53eNy6num+NZxpApbNq7WvZ8/r7TMatw9p/FJ+ofy2GZDXl6w3ERk3riZvmlfj0qs5kIXyun1epv2jbrePQF7sH9ixIK+v2G9dZ7jSr800B30rdIq86q8r0+c1RfXS/hy/l24fjSx/t5/8M6B2lZfvUP6CCrJv4BHm1VxX4mr3tnk13b4undeUVceqPsrfHDnJPHmRzYkur9a6ElcHtsX7tnmtGfmEeX38hKGO170see1hPmtTfOlkeaZrXOeiI6+7NFvZ8akLLewf8yGvHawnTTbe9yJvzDMnyGvNgUyT10Fl/WEaEXntYPzKALeuLmxLt3fNkdddrlt5eFq/dY+KvLaz1VU22DdjXLm917g58mpagjUHMj6vs6T1W9cXCshrM+o6g0F1PUNea8Y+Nq/ptrX8fVNpHxx5bWU7Y9TVh3H/9U/DFHk1jb7qOAbmdYokvdI4PvLaSr+0ccS6ag3TMENebcOvunEfllfjdTNAyxsf8trINv3d70nxw7xmLbMwQV4jluCYvE5Ro2P1gySvbWzni7ra2VesaRbG59VW18qjGJFX28BiVa4h8trGtARk43wf9i1onITReTWegNqDiM/rSnHNqgJLXtuYFoH15rU8UC1MedlpeCxW8xwMzau1QdXHEJ1Xz7jmJ2H9PH7wn/S/tudqld9lVjNU8trEdLqMw4yfKmuKXLkM377SxuXV4buV6g8hNq8+ca1+UIDXY2EqBvvkqbP3up+i8JEvILVs6+4197ya1oGxVu+cV5+x2+NqORLLq39dPU5Aw3xG5tVhcnueDuBxToe9F5pia5JXk0ny6jVwl+GE59XtQVFNrx+YV/Otq+XBK9a1ZblmJuT1nmkyjDPhVpl6M8yh26idBtN/PG3znx8X7foAvrbxx+XVWFf7tNpWmG1Xd782ef2LvLbye6SH9dz/MOR1+weXV/KPM8ny4+XLH/DUegKi8jqybf/YDsKyS7pfmbz+RV6bOA7XL64jZsFB+wkIyuvQDXXHdByGbdL9uuT1L/JazXWovqOInwWznhMQk1fLyXSMa2b5GkX/Cus+AeT1L/JaJf/0t/L6DszPm/9rtbx2rrqQvFrOpfvaNBxM/87uflHy+hd5PeT8/GTrGX8mfhYsumcwJK/9d4yTzWz34ZDXe7a9ZTwlJ8+r9/AUOzCJn4Vuljv3iLzOVVfT1PbulO6XJK8PyOsr7kNz/5rAP/Gz0MX6U/gC8tp/JkVXzgFH1P2Kp8yr4YKbGFdF/MYOmUP3Yak23038LLRzOAMBee3fS7J1GX5I5PUX8urKf0i629Zi9rw6XVz0ee0/kU5DfCL8mLpf8Jx5tW0u2zmJ39jSOfQfjm7b3YmfhWr2H8v/Q5/XCW9e4w+KvP5i21y2/X+ivDp/h0DimZZdc+Y1D991/BPnVXkV7Z9d8uqh//KW2U7KwcPNXunvgWYO3QMVltZstrxWP4WvjTyv0SGrQ15b+OfVuLtGnJXoNzx73G9bQ9OaTZPXD/c71nvktVHfPTV5/cN2+6p8Y/PKNHn1LlN4WrPReU1VTber8nGT10bk1YVxew3o6xx5dc7Sh+QtcQXncVT4SEX9vFzyTzcpxxBg3rxKd1D/7JJXH7bb1wF9nSCvrk1Kt2/Rp/COYQPuPpDwl/LTocpLjkBeG5FXJ8a+hp+Z4Xm1nrA7Y9OaRW/AQebNq3T/RB8VeX3QPwVF8KkZm1e/f8sa8qXWB+R1F3ltQl4fmfsau9FG5tXrxnWOtGbkddfiee1er52TS16fMPc19OwMy6v9NN1M1SXyuqt+kNElq0JeW4jy6hGOuPMzKK8+cZ2uSeR1V0BehVunf3I7j4m8PuXRjqgzNGQd97/oj3m+InCHvO6qH+SMJ7J71fYeEnl9zqOvQedoQF4dzs6sMSKvuxoGOWBdHog/IvL6gktfQ7Zc+KKxn5qJS0RedzUM0rBMNHEZMLXdL3n2vFqy9Yv8REXn1Xpe5s4Qed3VMsjJ+jpiZsnra4bl8cuH9lzF5tUY1+kbRF53NQ3SsFb8t8yQ2JPXPcaW3BHuvci8Gq84CxSIvO5qG6Rh/3ifzTGp715NUywmdV6tOflF9Q/lgXm1nY4prshHyOuuxkEaoua6XCwL13Ic/a87w2aR59U3sIngSVBxebVsllXqQ153tQ7StGS8EmPaw6aDMLzyBH0NyKtxhTyV72P9tmJYXt+hruR1X/MgbbvH45ya4mo9AMPwx/c1JK/WJfKK/XH0X/mHA4RdmN+iruR1X/sgrZvHdlpNbXWYU8vohy+ooLyaZ2lffkD99jTlmrOZftf1evl0eU5VU17N2yRc1+WfvO7qGKR973T+q4X9JxPZbyBtgx+8pMLy6rFIqpU6/FF+0VPL6gkcvxfy+lpgXu1X5k3Tez2Xn/lmj2tivis5OOFppLJnJAfmNXFZJTNpWD8L1pW87gjNq+fW2X4W2dN3evnnP1wvF6/nDztNp8fG2cZ8P+TyFrbcc8kWXmxe14zMjob+rHhpIa+vBed1uZ3jN5n6nXOavCZnKmx9f5YcNXl9LTqvyUJXaM+p1G+dM+U1OU1hyesj8rrLNMhFAtu1bl6T752T5TU5R2Hr19FCdx4/yOtrQ/K6wr4RzKJ60OfLa+Lyj5NjkddH5HWXfZBTbxvnG9dv2u1zyrxmiyeWvD4ir7tcBjnnrun7Puk60hvY0+Y1Wzix5PURed3lNUj1G+ZW8skT7qBT5zX7yt+EVga7hu076crRVyCvx8hrm2nuSzo/FNZKtodOn9fNIo3dHnVQDrkaeT1GXtsNT2xQWm9Eg32PvN7kBTNpZBvvWO+R12Pktc+o2xLDduinKOw75fVmqjvZ20fqypH1Ia/HyKtB7IYZUtZv7l92fr+8FvlD0MMym9aQ2yIir8fIq5l8u2xfGZtgmr48x/m2ef1n62xAaNPysd+qPkFej5FXL7e7Es/dcnsoSvnrZ+HydUTlwJbJ653ytJt0Zs3nNv8Vn6mn1Q+LBZaSQ7vtlbLiW2y3Gop7DWfbEBtHmDe+fmgr5vVRSmNO7k1aTE+kgBbbbyaleEPb0r9tg4dtku8xsqV3x/fw8iXll+/9Hzu6c+QVAKZDXgFAgrwCgAR5BQAJ8goAEuQVACTIKwBIkFcAkCCvACBBXgFAgrwCgAR5BQAJ8goAEuQVACTIKwBIkFcAkCCvACBBXgFAgrwCgAR5BQAJ8goAEuQVACTIKwBIkFcAkCCvACBBXgFAgrwCgAR5BQAJ8goAEuQVACTIKwBIkFcAkCCvACBBXgFAgrwCgAR5BQAJ8goAEuQVACTIKwBIkFcAkCCvACBBXgFAgrwCgAR5BQAJ8goAEuQVAAT+++//CT3TAOpn61kAAAAASUVORK5CYII=',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [8, 32]
      }
    });
    wordCloud.render();
  });
});`,
  },
  {
    fileName: 'image-mask.ts',
    fileIndex: 153,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.imageMask = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var wordCloud = new G2Plot.WordCloud('container-153', {
      data: data,
      wordField: 'name',
      weightField: 'value',
      colorField: 'name',
      imageMask: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [8, 32]
      }
    });
    wordCloud.render();
  });
});`,
  },
  {
    fileName: 'placement-strategy.ts',
    fileIndex: 154,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.placementStrategy = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function (item) {
    return {
      name: item,
      value: 1
    };
  });
  var wordCloud = new G2Plot.WordCloud('container-154', {
    data: data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: 16,
      rotation: 0
    },
    placementStrategy: function placementStrategy(word, index, words) {
      var width = this.ele.clientWidth;
      var height = this.ele.clientHeight;
      var length = words.length;
      return {
        x: width / (length + 1) * (index + 1),
        y: height / (length + 1) * (index + 1)
      };
    }
  });
  wordCloud.render();
});`,
  },
  {
    fileName: 'same-place.ts',
    fileIndex: 155,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.samePlace = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var wordCloud = new G2Plot.WordCloud('container-155', {
      data: data,
      wordField: 'name',
      weightField: 'value',
      colorField: 'name',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [8, 32],
        rotation: 0
      },
      // 返回值设置成一个 [0, 1) 区间内的值，
      // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
      random: function random() {
        return 0.5;
      }
    });
    wordCloud.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 156,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-156', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return "".concat((percent * 100).toFixed(0), "%");
      },
      style: {
        fontSize: 14,
        textAlign: 'center'
      }
    },
    interactions: [{
      type: 'element-active'
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'legend-interaction.ts',
    fileIndex: 157,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.legendInteraction = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-157', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}'
    },
    interactions: [{
      type: 'pie-legend-active'
    }, {
      type: 'element-active'
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'outer-label.ts',
    fileIndex: 158,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.outerLabel = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-158', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer'
    },
    interactions: [{
      type: 'element-active'
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'pie-texture.ts',
    fileIndex: 159,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.pieTexture = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    sex: '男',
    sold: 0.45
  }, {
    sex: '女',
    sold: 0.55
  }];
  var piePlot = new G2Plot.Pie('container-159', {
    appendPadding: 10,
    data: data,
    angleField: 'sold',
    colorField: 'sex',
    radius: 0.8,
    legend: false,
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        fill: '#fff',
        fontSize: 18,
        textAlign: 'center'
      }
    },
    pieStyle: function pieStyle(_ref) {
      var sex = _ref.sex;

      if (sex === '男') {
        return {
          fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png'
        };
      }

      return {
        fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png'
      };
    },
    tooltip: false,
    interactions: [{
      type: 'element-single-selected'
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'quarter-circle.ts',
    fileIndex: 160,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.quarterCircle = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-160', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    // 设置圆弧起始角度
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: 'inner',
      offset: '-8%',
      content: '{name}',
      style: {
        fontSize: 18
      }
    },
    interactions: [{
      type: 'element-active'
    }],
    pieStyle: {
      lineWidth: 0
    }
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'spider-label.ts',
    fileIndex: 161,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.spiderLabel = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-161', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}{percentage}'
    },
    interactions: [{
      type: 'element-selected'
    }, {
      type: 'element-active'
    }]
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 162,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var piePlot = new G2Plot.Pie('container-162', {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14
      }
    },
    interactions: [{
      type: 'element-selected'
    }, {
      type: 'element-active'
    }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        formatter: function formatter() {
          return 'AntVG2Plot';
        }
      }
    }
  });
  piePlot.render();
});`,
  },
  {
    fileName: 'association-filter.ts',
    fileIndex: 163,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.associationFilter = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  G2Plot.G2.registerInteraction('custom-association-filter', {
    showEnable: [{
      trigger: 'element:mouseenter',
      action: 'cursor:pointer'
    }, {
      trigger: 'element:mouseleave',
      action: 'cursor:default'
    }],
    start: [{
      trigger: 'element:click',
      action: function action(context) {
        var view = context.view,
            event = context.event; // 获取第二个 view

        var view1 = view.parent.views[1];
        view1.filter('area', function (d) {
          return d === event.data?.data.area;
        });
        view1.render(true);
      }
    }],
    end: [{
      trigger: 'element:dblclick',
      action: function action(context) {
        var view = context.view; // 获取第二个 view

        var view1 = view.parent.views[1];
        view1.filter('area', null);
        view1.render(true);
      }
    }]
  });

  fetch('https://gw.alipayobjects.com/os/antfincdn/HkxWvFrZuC/association-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Mix('container-163', {
      // 关闭 chart 上的 tooltip，子 view 开启 tooltip
      tooltip: false,
      plots: [{
        type: 'pie',
        region: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 1,
            y: 0.45
          }
        },
        options: {
          data: data.pie,
          angleField: 'bill',
          colorField: 'area',
          tooltip: {
            showMarkers: false
          },
          radius: 0.85,
          label: {
            type: 'inner',
            formatter: '{name}',
            offset: '-15%'
          },
          interactions: [{
            type: 'element-highlight'
          }, {
            type: 'custom-association-filter'
          }]
        }
      }, {
        type: 'area',
        region: {
          start: {
            x: 0,
            y: 0.5
          },
          end: {
            x: 1,
            y: 0.95
          }
        },
        options: {
          data: data.line,
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          line: {},
          point: {
            style: {
              r: 2.5
            }
          },
          meta: {
            time: {
              range: [0, 1]
            }
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true
          }
        }
      }]
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'association-highlight.ts',
    fileIndex: 164,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.associationHighlight = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/HkxWvFrZuC/association-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Mix('container-164', {
      // 关闭 chart 上的 tooltip，子 view 开启 tooltip
      tooltip: false,
      plots: [{
        type: 'bar',
        region: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0.45,
            y: 0.45
          }
        },
        options: {
          data: data.bar,
          xField: 'count',
          yField: 'area',
          seriesField: 'cat',
          isStack: true,
          tooltip: {
            shared: true,
            showCrosshairs: false,
            showMarkers: false
          },
          label: {},
          interactions: [{
            type: 'active-region'
          }]
        }
      }, {
        type: 'pie',
        region: {
          start: {
            x: 0.5,
            y: 0
          },
          end: {
            x: 1,
            y: 0.45
          }
        },
        options: {
          data: data.pie,
          angleField: 'bill',
          colorField: 'area',
          tooltip: {
            showMarkers: false
          },
          radius: 0.85,
          label: {
            type: 'inner',
            formatter: '{name}',
            offset: '-15%'
          },
          interactions: [{
            type: 'element-active'
          }, {
            type: 'association-tooltip',
            cfg: {
              start: [{
                trigger: 'element:mousemove',
                action: 'association:showTooltip',
                arg: {
                  dim: 'x',
                  linkField: 'area'
                }
              }]
            }
          }, {
            type: 'association-highlight',
            cfg: {
              start: [{
                trigger: 'element:mousemove',
                action: 'association:highlight',
                arg: {
                  linkField: 'area'
                }
              }]
            }
          }]
        }
      }, {
        type: 'area',
        region: {
          start: {
            x: 0,
            y: 0.5
          },
          end: {
            x: 1,
            y: 0.95
          }
        },
        options: {
          data: data.line,
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          line: {},
          point: {
            style: {
              r: 2.5
            }
          },
          meta: {
            time: {
              range: [0, 1]
            }
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true
          }
        }
      }]
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'association-line.ts',
    fileIndex: 165,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "@antv/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("@antv/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.util);
    global.associationLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _util) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/HkxWvFrZuC/association-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    function getDataByArea(area) {
      return (0, _util.get)((0, _util.groupBy)(data.line, 'area'), area, []).map(function (d) {
        return {
          time: d.time,
          value: Math.random() * d.value,
          area: area
        };
      });
    }

    var plot = new G2Plot.Mix('container-165', {
      // 关闭 chart 上的 tooltip，子 view 开启 tooltip
      tooltip: false,
      plots: [{
        type: 'line',
        region: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 1,
            y: 0.3
          }
        },
        options: {
          data: data.line,
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          point: {
            style: {
              r: 2.5
            }
          },
          meta: {
            time: {
              range: [0, 1]
            }
          },
          interactions: [{
            type: 'association-active'
          }, {
            type: 'association-highlight'
          }]
        }
      }, {
        type: 'line',
        region: {
          start: {
            x: 0,
            y: 0.32
          },
          end: {
            x: 0.5,
            y: 0.65
          }
        },
        options: {
          data: getDataByArea('华东'),
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          interactions: [{
            type: 'association-highlight'
          }],
          point: {
            style: {
              r: 2.5
            },
            state: {
              active: {
                style: {
                  lineWidth: 1,
                  r: 3
                }
              }
            }
          },
          meta: {
            time: {
              range: [0, 1]
            }
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true
          },
          state: {
            active: {
              style: {
                lineWidth: 3
              }
            }
          }
        }
      }, {
        type: 'line',
        region: {
          start: {
            x: 0.5,
            y: 0.32
          },
          end: {
            x: 1,
            y: 0.65
          }
        },
        options: {
          data: getDataByArea('华北'),
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          interactions: [{
            type: 'association-highlight'
          }],
          point: {
            style: {
              r: 2.5
            }
          },
          meta: {
            time: {
              range: [0, 1]
            }
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true
          }
        }
      }, {
        type: 'line',
        region: {
          start: {
            x: 0,
            y: 0.67
          },
          end: {
            x: 0.5,
            y: 1
          }
        },
        options: {
          data: getDataByArea('中南'),
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          interactions: [{
            type: 'association-highlight'
          }],
          point: {
            style: {
              r: 2.5
            }
          },
          meta: {
            time: {
              range: [0, 1]
            }
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true
          }
        }
      }, {
        type: 'line',
        region: {
          start: {
            x: 0.5,
            y: 0.67
          },
          end: {
            x: 1,
            y: 1
          }
        },
        options: {
          data: getDataByArea('西南'),
          xField: 'time',
          yField: 'value',
          seriesField: 'area',
          interactions: [{
            type: 'association-highlight'
          }],
          point: {
            style: {
              r: 2.5
            }
          },
          meta: {
            time: {
              range: [0, 1]
            }
          },
          smooth: true,
          tooltip: {
            showCrosshairs: true,
            shared: true
          }
        }
      }]
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'association-pie.ts',
    fileIndex: 166,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.associationPie = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/fKTgtjKdaN/association-pie.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Mix('container-166', {
      // 关闭 chart 上的 tooltip，子 view 开启 tooltip
      tooltip: false,
      legend: true,
      plots: [{
        type: 'pie',
        region: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0.45,
            y: 1
          }
        },
        options: {
          data: data.pie1,
          angleField: 'bill',
          colorField: 'area',
          radius: 0.85,
          tooltip: {
            showMarkers: false
          },
          label: {
            type: 'inner',
            offset: '-15%'
          },
          interactions: [{
            type: 'element-active'
          }, {
            type: 'association-tooltip'
          }, {
            type: 'association-highlight'
          }]
        }
      }, {
        type: 'pie',
        region: {
          start: {
            x: 0.55,
            y: 0
          },
          end: {
            x: 1,
            y: 1
          }
        },
        options: {
          data: data.pie2,
          radius: 0.85,
          angleField: 'value',
          colorField: 'area',
          label: {
            type: 'inner',
            offset: '-15%'
          },
          tooltip: {
            showMarkers: false
          },
          interactions: [{
            type: 'association-tooltip'
          }, {
            type: 'association-selected'
          }]
        }
      }]
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'hill-column.ts',
    fileIndex: 167,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/util", "@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/util"), require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.util, global.g2plot);
    global.hillColumn = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_util, _g2plot) {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  // 自定义图形
  G2Plot.G2.registerShape('interval', 'hill', {
    draw: function draw(info, container) {
      var points = info.points,
          style = info.style,
          _info$defaultStyle = info.defaultStyle,
          defaultStyle = _info$defaultStyle === void 0 ? {} : _info$defaultStyle;
      var path = [['M', points[0].x, points[0].y], ['L', (points[1].x + points[2].x) / 2, points[1].y], ['L', points[3].x, points[3].y], ['Z']];
      path = this.parsePath(path);
      return container.addShape('path', {
        attrs: {
          path: path,
          ...defaultStyle,
          ...style
        }
      });
    }
  }); // 1. 定义配置


  var defaultOptions = {
    columnWidthRatio: 1.2
  }; // 2. adaptor 实现

  function adaptor(params) {
    var chart = params.chart,
        options = params.options;
    var data = options.data,
        xField = options.xField,
        yField = options.yField,
        columnWidthRatio = options.columnWidthRatio,
        columnStyle = options.columnStyle,
        theme = options.theme; // 数据

    chart.data(data); // 几何图形

    var i = chart.interval().position("".concat(xField, "*").concat(yField)).shape('hill').style("".concat(xField, "*").concat(yField), function (x, y) {
      var _columnStyle;

      return typeof columnStyle === 'function' ? columnStyle((_columnStyle = {}, _defineProperty(_columnStyle, xField, x), _defineProperty(_columnStyle, yField, y), _columnStyle)) : columnStyle;
    }); // 设置重叠比率

    chart.theme((0, _util.deepMix)({}, (0, _util.isObject)(theme) ? theme : G2Plot.G2.getTheme(theme), {
      columnWidthRatio: columnWidthRatio
    }));
    var gap = 1 / data.length / 2 * columnWidthRatio; // 左右预留

    chart.scale({
      genre: {
        range: [gap, 1 - gap]
      }
    });
    return params;
  } // 3. G2Plot 上使用


  var data = [{
    genre: 'Sports',
    sold: 275
  }, {
    genre: 'Strategy',
    sold: 115
  }, {
    genre: 'Action',
    sold: 120
  }, {
    genre: 'Shooter',
    sold: 350
  }, {
    genre: 'Other',
    sold: 150
  }];
  var hill = new G2Plot.P('container-167', {
    data: data,
    appendPadding: 16,
    meta: {
      genre: {
        alias: '游戏种类' // 列定义，定义该属性显示的别名

      },
      sold: {
        alias: '销售量'
      }
    },
    xField: 'genre',
    yField: 'sold',
    columnStyle: {
      fillOpacity: 0.3
    }
  }, adaptor, defaultOptions); // 引入上述的封装，或者降上述代码发包

  hill.render();
});`,
  },
  {
    fileName: 'brush-filter-record.ts',
    fileIndex: 168,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.brushFilterRecord = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  // 定义新的交互
  G2Plot.G2.registerInteraction('other-visible', {
    showEnable: [{
      trigger: 'plot:mouseenter',
      action: 'cursor:crosshair'
    }, {
      trigger: 'mask:mouseenter',
      action: 'cursor:move'
    }, {
      trigger: 'plot:mouseleave',
      action: 'cursor:default'
    }, {
      trigger: 'mask:mouseleave',
      action: 'cursor:crosshair'
    }],
    start: [{
      trigger: 'plot:mousedown',
      isEnable: function isEnable(context) {
        return !context.isInShape('mask');
      },
      action: ['rect-mask:start', 'rect-mask:show']
    }, {
      trigger: 'mask:dragstart',
      action: 'rect-mask:moveStart'
    }],
    processing: [{
      trigger: 'plot:mousemove',
      action: 'rect-mask:resize'
    }, {
      trigger: 'mask:drag',
      isEnable: function isEnable(context) {
        return context.isInPlot();
      },
      action: 'rect-mask:move'
    }, {
      trigger: 'mask:change',
      action: 'element-sibling-filter-record:filter'
    }],
    end: [{
      trigger: 'plot:mouseup',
      action: 'rect-mask:end'
    }, {
      trigger: 'mask:dragend',
      action: 'rect-mask:moveEnd'
    }],
    rollback: [{
      trigger: 'dblclick',
      action: ['rect-mask:hide', 'element-sibling-filter-record:reset']
    }]
  });

  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var subData = data.slice(0, 400);
    var plot = new G2Plot.Mix('container-168', {
      tooltip: false,
      views: [{
        region: {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0.5,
            y: 1
          }
        },
        padding: [10, 20, 40, 50],
        data: subData,
        meta: {
          price: {
            nice: true
          }
        },
        axes: {},
        geometries: [{
          type: 'point',
          xField: 'carat',
          yField: 'price',
          mapping: {}
        }],
        interactions: [{
          type: 'other-visible'
        }]
      }, {
        region: {
          start: {
            x: 0.5,
            y: 0
          },
          end: {
            x: 1,
            y: 1
          }
        },
        padding: [10, 20, 40, 50],
        data: subData,
        meta: {
          x: {
            nice: true
          }
        },
        axes: {
          x: {
            min: 0,
            tickCount: 5
          }
        },
        geometries: [{
          type: 'point',
          xField: 'depth',
          yField: 'x',
          mapping: {
            shape: 'circle'
          }
        }]
      }]
    });
    plot.render();
  });
});`,
  },
  {
    fileName: 'combo-plot.ts',
    fileIndex: 169,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.comboPlot = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var averageData = [{
    date: '2015-02',
    value: 21168
  }, {
    date: '2015-08',
    value: 21781
  }, {
    date: '2016-01',
    value: 23818
  }, {
    date: '2017-02',
    value: 25316
  }, {
    date: '2018-01',
    value: 26698
  }, {
    date: '2018-08',
    value: 27890
  }];
  var plot = new G2Plot.Mix('container-169', {
    appendPadding: 8,
    tooltip: {
      shared: true
    },
    syncViewPadding: true,
    plots: [{
      type: 'column',
      options: {
        data: [{
          date: '2015-02',
          value: 160
        }, {
          date: '2015-08',
          value: 245
        }, {
          date: '2016-01',
          value: 487
        }, {
          date: '2017-02',
          value: 500
        }, {
          date: '2018-01',
          value: 503
        }, {
          date: '2018-08',
          value: 514
        }],
        xField: 'date',
        yField: 'value',
        yAxis: {
          type: 'log',
          max: 100000
        },
        meta: {
          date: {
            sync: true
          },
          value: {
            alias: '店数(间)'
          }
        },
        label: {
          position: 'middle'
        }
      }
    }, {
      type: 'line',
      options: {
        data: averageData,
        xField: 'date',
        yField: 'value',
        xAxis: false,
        yAxis: {
          type: 'log',
          max: 100000
        },
        label: {
          offsetY: -8
        },
        meta: {
          value: {
            alias: '平均租金(元)'
          }
        },
        color: '#FF6B3B',
        annotations: averageData.map(function (d) {
          return {
            type: 'dataMarker',
            position: d,
            point: {
              style: {
                stroke: '#FF6B3B',
                lineWidth: 1.5
              }
            }
          };
        })
      }
    }, {
      type: 'line',
      options: {
        data: [{
          date: '2015-02',
          value: null
        }, {
          date: '2015-08',
          value: 0.029
        }, {
          date: '2016-01',
          value: 0.094
        }, {
          date: '2017-02',
          value: 0.148
        }, {
          date: '2018-01',
          value: 0.055
        }, {
          date: '2018-08',
          value: 0.045
        }],
        xField: 'date',
        yField: 'value',
        xAxis: false,
        yAxis: {
          line: null,
          grid: null,
          position: 'right',
          max: 0.16,
          tickCount: 8
        },
        meta: {
          date: {
            sync: 'date'
          },
          value: {
            alias: '递增',
            formatter: function formatter(v) {
              return "".concat((v * 100).toFixed(1), "%");
            }
          }
        },
        smooth: true,
        label: {
          callback: function callback(value) {
            return {
              offsetY: value === 0.148 ? 36 : value === 0.055 ? 0 : 20,
              style: {
                fill: '#1AAF8B',
                fontWeight: 700,
                stroke: '#fff',
                lineWidth: 1
              }
            };
          }
        },
        color: '#1AAF8B'
      }
    }]
  });
  plot.render();
});`,
  },
  {
    fileName: 'drinks.ts',
    fileIndex: 170,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/data-set", "@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/data-set"), require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.dataSet, global.g2plot);
    global.drinks = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_dataSet, _g2plot) {
  "use strict";

  var data = [['Cosmopolitan', 51, 45, 6], ['Martini', 67, 39, 28], ['Mojito', 19, 11, 8], ['Margarita', 47, 33, 14], ['Mai Tai', 32, 20, 12], ['Beer', 70, 20, 50]];
  var yearData = [['2010', 60, 176, 35, 25], ['2011', 51, 136, 25, 26], ['2012', 73, 196, 35, 38], ['2013', 84, 315, 43, 41], ['2014', 79, 203, 36, 33], ['2015', 89, 286, 41, 48]];
  var plot = new G2Plot.Mix('container-170', {
    height: 500,
    padding: 'auto',
    tooltip: {
      showMarkers: false
    },
    views: [{
      data: data.map(function (d) {
        return {
          type: d[0],
          value: d[1]
        };
      }),
      region: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0.5,
          y: 0.4
        }
      },
      coordinate: {
        type: 'theta',
        cfg: {
          radius: 0.85
        }
      },
      axes: {
        value: {
          title: {
            text: 'Drinks'
          },
          grid: null,
          tickLine: null,
          line: false,
          ticks: false
        }
      },
      geometries: [{
        type: 'interval',
        xField: '1',
        yField: 'value',
        colorField: 'type',
        mapping: {},
        adjust: {
          type: 'stack'
        }
      }],
      interactions: [{
        type: 'element-active'
      }, {
        type: 'association-highlight'
      }]
    }, {
      data: new _dataSet.DataView().source(data.map(function (d) {
        return {
          type: d[0],
          male: d[2],
          female: d[3]
        };
      })).transform({
        type: 'fold',
        fields: ['male', 'female'],
        key: 'gender',
        value: 'value'
      }).rows,
      region: {
        start: {
          x: 0.5,
          y: 0
        },
        end: {
          x: 1,
          y: 0.45
        }
      },
      coordinate: {
        cfg: {
          isTransposed: true
        }
      },
      axes: {
        value: false
      },
      geometries: [{
        type: 'interval',
        xField: 'type',
        yField: 'value',
        colorField: 'gender',
        mapping: {},
        adjust: {
          type: 'dodge',
          marginRatio: 0
        }
      }]
    }, {
      data: yearData.map(function (d) {
        return {
          year: d[0],
          ordered: d[1]
        };
      }),
      region: {
        start: {
          x: 0,
          y: 0.52
        },
        end: {
          x: 0.48,
          y: 1
        }
      },
      axes: {
        year: {
          title: {
            text: 'Drinks ordered'
          }
        }
      },
      meta: {
        ordered: {
          min: 40,
          max: 90
        }
      },
      geometries: [{
        type: 'area',
        xField: 'year',
        yField: 'ordered',
        mapping: {}
      }, {
        type: 'line',
        xField: 'year',
        yField: 'ordered',
        mapping: {
          style: {
            lineWidth: 0.5
          }
        }
      }]
    }, {
      data: new _dataSet.DataView().source(yearData.map(function (d) {
        return {
          year: d[0],
          male: d[3],
          female: d[4]
        };
      })).transform({
        type: 'fold',
        fields: ['male', 'female'],
        key: 'gender',
        value: 'turnout'
      }).rows,
      region: {
        start: {
          x: 0.52,
          y: 0.52
        },
        end: {
          x: 1,
          y: 1
        }
      },
      axes: {
        year: {
          title: {
            text: 'Turnout by gender'
          }
        }
      },
      geometries: [{
        type: 'interval',
        xField: 'year',
        yField: 'turnout',
        colorField: 'gender',
        adjust: {
          type: 'dodge',
          marginRatio: 0
        },
        mapping: {}
      }],
      interactions: [{
        type: 'element-active'
      }, {
        type: 'association-sibling-highlight'
      }]
    }]
  });
  plot.render();
});`,
  },
  {
    fileName: 'range-area.ts',
    fileIndex: 171,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.rangeArea = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/qE48lpzwRc/range-area-data.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var data1 = data.area,
        data2 = data.line;
    var rangeAreaPlot = new G2Plot.Mix('container-171', {
      appendPadding: 8,
      syncViewPadding: true,
      tooltip: {
        shared: true,
        showMarkers: false,
        showCrosshairs: true,
        offsetY: -50
      },
      views: [{
        data: data1,
        axes: {},
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1]
          },
          temperature: {
            nice: true,
            sync: true,
            alias: '温度范围'
          }
        },
        // view1: prepare a area plot, mapping position to (**)time*temperature(**)
        geometries: [{
          type: 'area',
          xField: 'time',
          yField: 'temperature',
          mapping: {}
        }]
      }, {
        data: data2,
        axes: false,
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1]
          },
          temperature: {
            sync: 'temperature',
            alias: '温度'
          }
        },
        // view2: prepare a line plot and point plot, mapping position to (**)time*temperature(**) (share data)
        geometries: [{
          type: 'line',
          xField: 'time',
          yField: 'temperature',
          mapping: {}
        }, {
          type: 'point',
          xField: 'time',
          yField: 'temperature',
          mapping: {
            shape: 'circle',
            style: {
              fillOpacity: 1
            }
          }
        }]
      }]
    }); // Step 3: 渲染图表

    rangeAreaPlot.render();
  });
});`,
  },
  {
    fileName: 'sales-analysis.ts',
    fileIndex: 172,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/util", "@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/util"), require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.util, global.g2plot);
    global.salesAnalysis = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_util, _g2plot) {
  "use strict";

  var datas = [[{
    company: 'Apple',
    type: '整体',
    value: 30
  }, {
    company: 'Facebook',
    type: '整体',
    value: 35
  }, {
    company: 'Google',
    type: '整体',
    value: 28
  }], [{
    company: 'Apple',
    type: '非技术岗',
    value: 40
  }, {
    company: 'Facebook',
    type: '非技术岗',
    value: 65
  }, {
    company: 'Google',
    type: '非技术岗',
    value: 47
  }], [{
    company: 'Apple',
    type: '技术岗',
    value: 35
  }, {
    company: 'Facebook',
    type: '技术岗',
    value: 30
  }, {
    company: 'Google',
    type: '技术岗',
    value: 25
  }]];
  var plots = [];
  var total = datas.length;
  (0, _util.each)(datas, function (data, idx) {
    var startX = idx / total;
    plots.push({
      type: 'column',
      region: {
        start: {
          x: startX,
          y: 0
        },
        end: {
          x: (idx + 1) / total,
          y: 1
        }
      },
      options: {
        data: data,
        xField: 'company',
        yField: 'value',
        seriesField: 'company',
        isGroup: true,
        meta: {
          value: {
            sync: true
          }
        },
        xAxis: {
          label: {
            autoRotate: true
          }
        },
        yAxis: idx === 0 ? {
          tickCount: 10
        } : {
          label: {
            formatter: function formatter(v) {
              return '';
            }
          },
          tickCount: 10
        },
        tooltip: {
          showMarkers: false,
          fields: ['SalesTerritoryRegion', 'SalesAmount', 'quarter']
        },
        // fixme 设置 yAxis label false 会导致
        // yAxis: idx === 0 ? {} : { label: false },
        minColumnWidth: 24,
        appendPadding: [20, 0],
        annotations: [{
          type: 'text',
          content: data[0].type,
          position: ['50%', '0%'],
          offsetY: -15,
          style: {
            textAlign: 'center'
          }
        }]
      }
    });
  });
  var plot = new G2Plot.Mix('container-172', {
    plots: plots,
    syncViewPadding: true,
    tooltip: false,
    legend: {}
  });
  plot.render();
});`,
  },
  {
    fileName: 'series-columns.ts',
    fileIndex: 173,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.seriesColumns = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.In order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  // Step 1: 声明数据源
  // G2Plot 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
  var data = [{
    area: 'Central',
    value: 0.218
  }, {
    area: 'East',
    value: 0.295
  }, {
    area: 'South',
    value: 0.171
  }, {
    area: 'West',
    value: 0.316
  }];
  var defaultGrey = '#BFBFBF'; // Step 2: 创建图表

  var plot = new G2Plot.Mix('container-173', {
    appendPadding: 8,
    tooltip: {
      showMarkers: false
    }
  });
  plot.chart.theme({
    defaultColor: '#30BF78'
    /** 语义绿 */

  });
  plot.update({
    plots: [{
      region: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 1 / 2,
          y: 2 / 5
        }
      },
      type: 'bar',
      options: {
        data: data,
        // 图表数据
        yField: 'area',
        xField: 'value',
        yAxis: {
          tickLine: null
        },
        xAxis: false,
        seriesField: 'area',
        label: {
          position: 'left',
          layout: {
            type: 'adjust-color'
          },
          formatter: function formatter(_ref) {
            var value = _ref.value;
            return "".concat((value * 100).toFixed(1), "%");
          },
          style: {
            fill: '#fff'
          }
        },
        color: function color(_ref2) {
          var area = _ref2.area;
          var value = data.find(function (d) {
            return d.area === area;
          })?.value;
          return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
        },
        barStyle: {
          lineWidth: 1
        }
      }
    }, {
      region: {
        start: {
          x: 1 / 2,
          y: 0
        },
        end: {
          x: 1,
          y: 2 / 5
        }
      },
      type: 'bar',
      options: {
        data: data,
        // 图表数据
        yField: 'area',
        xField: 'value',
        yAxis: {
          tickLine: null
        },
        xAxis: false,
        label: {},
        color: function color(_ref3) {
          var area = _ref3.area;
          var value = data.find(function (d) {
            return d.area === area;
          })?.value;
          return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
        },
        barStyle: function barStyle(_ref4) {
          var value = _ref4.value;
          return {
            lineWidth: 1,
            fillOpacity: 0,
            stroke: value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey
          };
        }
      }
    }, {
      region: {
        start: {
          x: 1 / 2,
          y: 1 / 2
        },
        end: {
          x: 1,
          y: 1
        }
      },
      type: 'bar',
      options: {
        data: data,
        // 图表数据
        meta: {
          value: {
            alias: '销售额(万)',
            min: 0,
            max: 1
          }
        },
        yAxis: {
          label: {
            style: {
              fillOpacity: 0
            }
          },
          tickLine: null
        },
        xAxis: false,
        label: {
          offsetX: -4,
          position: 'left',
          layout: {
            type: 'adjust-color'
          },
          style: {
            fill: '#fff',
            fontSize: 12
          },
          formatter: function formatter(_ref5) {
            var area = _ref5.area,
                value = _ref5.value;
            return "".concat(area, "").concat((value * 100).toFixed(1), "%");
          }
        },
        yField: 'area',
        xField: 'value',
        color: function color(_ref6) {
          var area = _ref6.area;
          var value = data.find(function (d) {
            return d.area === area;
          }).value;
          return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
        },
        annotations: data.map(function (d, idx) {
          return {
            type: 'line',
            start: [3 - idx - 0.25, 'min'],
            end: [3 - idx - 0.25, 'max'],
            style: {
              lineWidth: 2,
              stroke: '#595959'
            }
          };
        })
      }
    }],
    views: [{
      region: {
        start: {
          x: 0,
          y: 1 / 2
        },
        end: {
          x: 1 / 2,
          y: 1
        }
      },
      data: [].concat(data).reverse(),
      // 图表数据
      meta: {
        value: {
          alias: '销售额(万)',
          max: 0.5,
          min: 0
        }
      },
      axes: {
        area: {
          tickLine: null
        },
        value: false
      },
      coordinate: {
        cfg: {
          isTransposed: true
        }
      },
      geometries: [{
        type: 'point',
        xField: 'area',
        yField: 'value',
        mapping: {
          color: function color(_ref7) {
            var area = _ref7.area;
            var value = data.find(function (d) {
              return d.area === area;
            }).value;
            return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
          },
          style: function style(_ref8) {
            var value = _ref8.value;
            return {
              r: 4,
              strokeOpacity: 0,
              fill: value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey
            };
          }
        },
        label: {
          offsetY: -12,
          offsetX: 8,
          style: {
            textAlign: 'right'
          },
          position: 'top',
          formatter: function formatter(_ref9) {
            var value = _ref9.value;
            return "".concat((value * 100).toFixed(1), "%");
          }
        }
      }],
      // @ts-ignore
      annotations: _toConsumableArray(data.map(function (d) {
        return {
          type: 'line',
          start: [d.area, 'min'],
          end: [d.area, 'max'],
          top: false,
          style: {
            lineWidth: 2,
            radius: 2,
            lineDash: [2, 4],
            stroke: defaultGrey
          }
        };
      }))
    }]
  }); // Step 3: 渲染图表

  plot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 174,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    title: '满意度',
    ranges: [100],
    measures: [80],
    target: 85
  }];
  var bulletPlot = new G2Plot.Bullet('container-174', {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD'
    },
    xAxis: {
      line: null
    },
    yAxis: {
      tickMethod: function tickMethod(_ref) {
        var max = _ref.max;
        var interval = Math.ceil(max / 5); // 自定义刻度 ticks

        return [0, interval, interval * 2, interval * 3, interval * 4, max];
      }
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [{
        value: '实际值',
        name: '实际值',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5B8FF9',
            r: 5
          }
        }
      }, {
        value: '目标值',
        name: '目标值',
        marker: {
          symbol: 'line',
          style: {
            stroke: '#3D76DD',
            r: 5
          }
        }
      }]
    }
  });
  bulletPlot.render();
});`,
  },
  {
    fileName: 'color.ts',
    fileIndex: 175,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.color = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    title: '满意度',
    ranges: [40, 70, 100],
    measures: [80],
    target: 85
  }];
  var bulletPlot = new G2Plot.Bullet('container-175', {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: '#5B8FF9',
      target: '#39a3f4'
    },
    xAxis: {
      line: null
    },
    yAxis: false,
    label: {
      target: true
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [{
        value: '差',
        name: '差',
        marker: {
          symbol: 'square',
          style: {
            fill: '#FFbcb8',
            r: 5
          }
        }
      }, {
        value: '良',
        name: '良',
        marker: {
          symbol: 'square',
          style: {
            fill: '#FFe0b0',
            r: 5
          }
        }
      }, {
        value: '优',
        name: '优',
        marker: {
          symbol: 'square',
          style: {
            fill: '#bfeec8',
            r: 5
          }
        }
      }, {
        value: '实际值',
        name: '实际值',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5B8FF9',
            r: 5
          }
        }
      }, {
        value: '目标值',
        name: '目标值',
        marker: {
          symbol: 'line',
          style: {
            stroke: '#39a3f4',
            r: 5
          }
        }
      }]
    }
  });
  bulletPlot.render();
});`,
  },
  {
    fileName: 'grouped.ts',
    fileIndex: 176,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.grouped = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    title: '重庆',
    ranges: [30, 90, 120],
    measures: [65],
    target: 80
  }, {
    title: '杭州',
    ranges: [30, 90, 120],
    measures: [50],
    target: 100
  }, {
    title: '广州',
    ranges: [30, 90, 120],
    measures: [40],
    target: 85
  }, {
    title: '深圳',
    ranges: [30, 90, 120],
    measures: [50],
    target: 100
  }];
  var bulletPlot = new G2Plot.Bullet('container-176', {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: '#5B8FF9',
      target: '#39a3f4'
    },
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#fff'
        }
      }
    },
    xAxis: {
      line: null
    },
    yAxis: false,
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [{
        value: '差',
        name: '差',
        marker: {
          symbol: 'square',
          style: {
            fill: '#FFbcb8',
            r: 5
          }
        }
      }, {
        value: '良',
        name: '良',
        marker: {
          symbol: 'square',
          style: {
            fill: '#FFe0b0',
            r: 5
          }
        }
      }, {
        value: '优',
        name: '优',
        marker: {
          symbol: 'square',
          style: {
            fill: '#bfeec8',
            r: 5
          }
        }
      }, {
        value: '实际值',
        name: '实际值',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5B8FF9',
            r: 5
          }
        }
      }, {
        value: '目标值',
        name: '目标值',
        marker: {
          symbol: 'line',
          style: {
            stroke: '#39a3f4',
            r: 5
          }
        }
      }]
    }
  });
  bulletPlot.render();
});`,
  },
  {
    fileName: 'layout.ts',
    fileIndex: 177,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.layout = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    title: '满意度',
    ranges: [100],
    measures: [80],
    target: 85
  }]; // @TODO 差一张垂直方向的缩略图

  var bulletPlot = new G2Plot.Bullet('container-177', {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD'
    },
    xAxis: {
      line: null
    },
    yAxis: false,
    layout: 'vertical',
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#fff'
        }
      }
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [{
        value: '实际值',
        name: '实际值',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5B8FF9',
            r: 5
          }
        }
      }, {
        value: '目标值',
        name: '目标值',
        marker: {
          symbol: 'line',
          style: {
            stroke: '#3D76DD',
            r: 5
          }
        }
      }]
    }
  });
  bulletPlot.render();
});`,
  },
  {
    fileName: 'stacked.ts',
    fileIndex: 178,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.stacked = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    title: '满意度',
    ranges: [40, 70, 100],
    measures: [30, 50],
    target: 85
  }];
  var bulletPlot = new G2Plot.Bullet('container-178', {
    data: data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: ['#5B8FF9', '#61DDAA'],
      target: '#39a3f4'
    },
    label: {
      measure: {
        position: 'middle',
        style: {
          fill: '#fff'
        }
      }
    },
    xAxis: {
      line: null
    },
    yAxis: false,
    tooltip: {
      showMarkers: false,
      shared: true
    },
    // 自定义 legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [{
        value: '差',
        name: '差',
        marker: {
          symbol: 'square',
          style: {
            fill: '#FFbcb8',
            r: 5
          }
        }
      }, {
        value: '良',
        name: '良',
        marker: {
          symbol: 'square',
          style: {
            fill: '#FFe0b0',
            r: 5
          }
        }
      }, {
        value: '优',
        name: '优',
        marker: {
          symbol: 'square',
          style: {
            fill: '#bfeec8',
            r: 5
          }
        }
      }, {
        value: '第一季度',
        name: '第一季度',
        marker: {
          symbol: 'square',
          style: {
            fill: '#5B8FF9',
            r: 5
          }
        }
      }, {
        value: '第二季度',
        name: '第二季度',
        marker: {
          symbol: 'square',
          style: {
            fill: ' #61DDAA',
            r: 5
          }
        }
      }, {
        value: '目标值',
        name: '目标值',
        marker: {
          symbol: 'line',
          style: {
            stroke: '#39a3f4',
            r: 5
          }
        }
      }]
    }
  });
  bulletPlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 179,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var gauge = new G2Plot.Gauge('container-179', {
    percent: 0.75,
    range: {
      color: '#30BF78'
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        }
      },
      subTickLine: {
        count: 3
      }
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return "Rate: ".concat((percent * 100).toFixed(0), "%");
        },
        style: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 48
        }
      }
    }
  });
  gauge.render();
});`,
  },
  {
    fileName: 'complex.ts',
    fileIndex: 180,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.complex = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var ticks = [0, 1 / 3, 2 / 3, 1];
  var color = ['#F4664A', '#FAAD14', '#30BF78'];
  var gauge = new G2Plot.Gauge('container-180', {
    percent: 0,
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78']
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    statistic: {
      title: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;

          if (percent < ticks[1]) {
            return '差';
          }

          if (percent < ticks[2]) {
            return '中';
          }

          return '优';
        },
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: '36px',
            lineHeight: 1,
            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2]
          };
        }
      },
      content: {
        offsetY: 36,
        style: {
          fontSize: '24px',
          color: '#4B535E'
        },
        formatter: function formatter() {
          return '系统表现';
        }
      }
    }
  });
  gauge.render();
  var data = 0.7;
  var interval = setInterval(function () {
    if (data >= 1.5) {
      clearInterval(interval);
    }

    data += 0.005;
    gauge.changeData(data > 1 ? data - 1 : data);
  }, 100);
});`,
  },
  {
    fileName: 'custom-color.ts',
    fileIndex: 181,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customColor = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var gauge = new G2Plot.Gauge('container-181', {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78']
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px'
        }
      }
    }
  });
  gauge.render();
});`,
  },
  {
    fileName: 'custom-meter-step.ts',
    fileIndex: 182,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customMeterStep = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var ticks = [0, 1 / 3, 2 / 3, 1];
  var color = ['#F4664A', '#FAAD14', '#30BF78'];
  var gauge = new G2Plot.Gauge('container-182', {
    percent: 0,
    innerRadius: 0.75,
    type: 'meter',
    // 自定义 meter 总步数 以及 step 占比
    meter: {
      steps: 50,
      stepRatio: 0.6
    },
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78']
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    statistic: {
      title: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;

          if (percent < ticks[1]) {
            return '差';
          }

          if (percent < ticks[2]) {
            return '中';
          }

          return '优';
        },
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: '36px',
            lineHeight: 1,
            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2]
          };
        }
      },
      content: {
        offsetY: 36,
        style: {
          fontSize: '24px',
          color: '#4B535E'
        },
        formatter: function formatter() {
          return '系统表现';
        }
      }
    }
  });
  gauge.render();
  var data = 0.7;
  var interval = setInterval(function () {
    if (data >= 1.5) {
      clearInterval(interval);
    }

    data += 0.005;
    gauge.changeData(data > 1 ? data - 1 : data);
  }, 100);
});`,
  },
  {
    fileName: 'meter-gauge.ts',
    fileIndex: 183,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.meterGauge = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var gauge = new G2Plot.Gauge('container-183', {
    percent: 0.75,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78']
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px'
        }
      }
    }
  });
  gauge.render();
});`,
  },
  {
    fileName: 'range-width.ts',
    fileIndex: 184,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.rangeWidth = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var gauge = new G2Plot.Gauge('container-184', {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: '#30BF78',
      width: 12
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0'
        }
      },
      pin: {
        style: {
          stroke: '#D0D0D0'
        }
      }
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return "Rate: ".concat((percent * 100).toFixed(0), "%");
        }
      },
      style: {
        fontSize: 60
      }
    },
    gaugeStyle: {
      lineCap: 'round'
    }
  });
  gauge.render();
});`,
  },
  {
    fileName: 'single-gradient.ts',
    fileIndex: 185,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.singleGradient = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var gauge = new G2Plot.Gauge('container-185', {
    percent: 0.75,
    range: {
      color: 'l(0) 0:#B8E1FF 1:#3D76DD'
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E'
        },
        formatter: function formatter() {
          return '70%';
        }
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#4B535E'
        },
        formatter: function formatter() {
          return '加载进度';
        }
      }
    }
  });
  gauge.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 186,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var liquidPlot = new G2Plot.Liquid('container-186', {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8
    },
    wave: {
      length: 128
    }
  });
  liquidPlot.render();
});`,
  },
  {
    fileName: 'custom.ts',
    fileIndex: 187,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.custom = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var liquidPlot = new G2Plot.Liquid('container-187', {
    percent: 0.25,
    shape: function shape(x, y, width, height) {
      var r = width / 4;
      var dx = x - width / 2;
      var dy = y - height / 2;
      return [['M', dx, dy + r * 2], ['A', r, r, 0, 0, 1, x, dy + r], ['A', r, r, 0, 0, 1, dx + width, dy + r * 2], ['L', x, dy + height], ['L', dx, dy + r * 2], ['Z']];
    },
    outline: {
      border: 4,
      distance: 8
    },
    wave: {
      length: 128
    }
  });
  liquidPlot.render();
});`,
  },
  {
    fileName: 'diamond.ts',
    fileIndex: 188,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.diamond = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var liquidPlot = new G2Plot.Liquid('container-188', {
    percent: 0.25,
    shape: 'diamond',
    outline: {
      border: 4,
      distance: 8
    },
    wave: {
      length: 128
    }
  });
  liquidPlot.render();
});`,
  },
  {
    fileName: 'outline-style.ts',
    fileIndex: 189,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.outlineStyle = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var liquidPlot = new G2Plot.Liquid('container-189', {
    percent: 0.25,
    shape: function shape(x, y, width, height) {
      var path = [];
      var w = Math.min(width, height);

      for (var i = 0; i < 5; i++) {
        path.push([i === 0 ? 'M' : 'L', Math.cos((18 + i * 72) * Math.PI / 180) * w / 2 + x, -Math.sin((18 + i * 72) * Math.PI / 180) * w / 2 + y]);
        path.push(['L', Math.cos((54 + i * 72) * Math.PI / 180) * w / 4 + x, -Math.sin((54 + i * 72) * Math.PI / 180) * w / 4 + y]);
      }

      path.push(['Z']);
      return path;
    },
    outline: {
      border: 2,
      distance: 4,
      style: {
        stroke: '#FFC100',
        strokeOpacity: 0.65
      }
    },
    wave: {
      length: 128
    },
    theme: {
      styleSheet: {
        brandColor: '#FAAD14'
      }
    }
  });
  liquidPlot.render();
});`,
  },
  {
    fileName: 'rect.ts',
    fileIndex: 190,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.rect = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var liquidPlot = new G2Plot.Liquid('container-190', {
    percent: 0.25,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4
    },
    wave: {
      length: 128
    }
  });
  liquidPlot.render();
});`,
  },
  {
    fileName: 'chord-population.ts',
    fileIndex: 191,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.chordPopulation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var DATA = [{
    source: '北京',
    target: '天津',
    value: 30
  }, {
    source: '北京',
    target: '上海',
    value: 80
  }, {
    source: '北京',
    target: '河北',
    value: 46
  }, {
    source: '北京',
    target: '辽宁',
    value: 49
  }, {
    source: '北京',
    target: '黑龙江',
    value: 69
  }, {
    source: '北京',
    target: '吉林',
    value: 19
  }, {
    source: '天津',
    target: '河北',
    value: 62
  }, {
    source: '天津',
    target: '辽宁',
    value: 82
  }, {
    source: '天津',
    target: '上海',
    value: 16
  }, {
    source: '上海',
    target: '黑龙江',
    value: 16
  }, {
    source: '河北',
    target: '黑龙江',
    value: 76
  }, {
    source: '河北',
    target: '内蒙古',
    value: 24
  }, {
    source: '内蒙古',
    target: '北京',
    value: 32
  }];
  var chord = new G2Plot.Chord('container-191', {
    data: DATA,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value'
  });
  chord.render();
});`,
  },
  {
    fileName: 'alipay.ts',
    fileIndex: 192,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.alipay = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var DATA = [{
    source: '首次打开',
    target: '首页 UV',
    value: 160
  }, {
    source: '结果页',
    target: '首页 UV',
    value: 40
  }, {
    source: '验证页',
    target: '首页 UV',
    value: 10
  }, {
    source: '我的',
    target: '首页 UV',
    value: 10
  }, {
    source: '朋友',
    target: '首页 UV',
    value: 8
  }, {
    source: '其他来源',
    target: '首页 UV',
    value: 27
  }, {
    source: '首页 UV',
    target: '理财',
    value: 30
  }, {
    source: '首页 UV',
    target: '扫一扫',
    value: 40
  }, {
    source: '首页 UV',
    target: '服务',
    value: 35
  }, {
    source: '首页 UV',
    target: '蚂蚁森林',
    value: 25
  }, {
    source: '首页 UV',
    target: '跳失',
    value: 10
  }, {
    source: '首页 UV',
    target: '借呗',
    value: 30
  }, {
    source: '首页 UV',
    target: '花呗',
    value: 40
  }, {
    source: '首页 UV',
    target: '其他流向',
    value: 45
  }];
  var sankey = new G2Plot.Sankey('container-192', {
    data: DATA,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    nodeWidthRatio: 0.008,
    nodePaddingRatio: 0.03
  });
  sankey.render();
});`,
  },
  {
    fileName: 'draggable.ts',
    fileIndex: 193,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.draggable = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  /**
   * @file Parallel sets are like parallel coordinates, but for categorical dimensions.
   *
   * Parallel Sets: Visual Analysis of Categorical Data. See more in https://kosara.net/publications/Bendix-InfoVis-2005.html
   */
  fetch('https://gw.alipayobjects.com/os/antfincdn/nokcOpy6fF/draggable-sankey.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var sankeyData = [];
    var keys = ['Survived', 'Sex', 'Age', 'Class'];
    data.forEach(function (d) {
      keys.reduce(function (a, b) {
        if (a && b) {
          sankeyData.push({
            source: d[a],
            target: d[b],
            value: d.value,
            path: "".concat(d[keys[0]], " -> ").concat(d[keys[1]], " -> ").concat(d[keys[2]], " -> ").concat(d[keys[3]])
          });
        }

        return b;
      });
    });
    var sankey = new G2Plot.Sankey('container-193', {
      data: sankeyData,
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
      nodeWidthRatio: 0.01,
      nodePaddingRatio: 0.03,
      nodeDraggable: true,
      rawFields: ['path'],
      tooltip: {
        fields: ['path', 'value'],
        formatter: function formatter(_ref) {
          var path = _ref.path,
              value = _ref.value;
          return {
            name: path,
            value: value
          };
        }
      }
    });
    sankey.render();
  });
});`,
  },
  {
    fileName: 'energy.ts',
    fileIndex: 194,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.energy = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/fa3414cc-75ed-47b4-8306-f2ffe8c40127.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var sankey = new G2Plot.Sankey('container-194', {
      data: data,
      sourceField: 'source',
      targetField: 'target',
      weightField: 'value',
      color: ['red', 'green', 'yellow'],
      edgeStyle: {
        fill: '#ccc',
        fillOpacity: 0.4
      }
    });
    sankey.render();
  });
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 195,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var rosePlot = new G2Plot.Rose('container-195', {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    legend: {
      position: 'bottom'
    }
  });
  rosePlot.render();
});`,
  },
  {
    fileName: 'inner-label.ts',
    fileIndex: 196,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.innerLabel = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var rosePlot = new G2Plot.Rose('container-196', {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: -15
    }
  });
  rosePlot.render();
});`,
  },
  {
    fileName: 'interaction.ts',
    fileIndex: 197,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.interaction = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var rosePlot = new G2Plot.Rose('container-197', {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    legend: {
      position: 'bottom'
    },
    interactions: [{
      type: 'element-active'
    }]
  });
  rosePlot.render();
});`,
  },
  {
    fileName: 'rose-state.ts',
    fileIndex: 198,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.roseState = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27
  }, {
    type: '分类二',
    value: 25
  }, {
    type: '分类三',
    value: 18
  }, {
    type: '分类四',
    value: 15
  }, {
    type: '分类五',
    value: 10
  }, {
    type: '其他',
    value: 5
  }];
  var rosePlot = new G2Plot.Rose('container-198', {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    // 设置 active 状态样式
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65
        }
      }
    },
    legend: {
      position: 'bottom'
    },
    interactions: [{
      type: 'element-active'
    }]
  });
  rosePlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 199,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27,
    user: '用户一'
  }, {
    type: '分类二',
    value: 25,
    user: '用户一'
  }, {
    type: '分类三',
    value: 18,
    user: '用户一'
  }, {
    type: '分类四',
    value: 15,
    user: '用户一'
  }, {
    type: '分类五',
    value: 10,
    user: '用户一'
  }, {
    type: '其它',
    value: 5,
    user: '用户一'
  }, {
    type: '分类一',
    value: 7,
    user: '用户二'
  }, {
    type: '分类二',
    value: 5,
    user: '用户二'
  }, {
    type: '分类三',
    value: 38,
    user: '用户二'
  }, {
    type: '分类四',
    value: 5,
    user: '用户二'
  }, {
    type: '分类五',
    value: 20,
    user: '用户二'
  }, {
    type: '其它',
    value: 15,
    user: '用户二'
  }]; // 分组玫瑰图

  var rosePlot = new G2Plot.Rose('container-199', {
    data: data,
    xField: 'type',
    yField: 'value',
    isGroup: true,
    // 当 isGroup 为 true 时，该值为必填
    seriesField: 'user',
    radius: 0.9,
    label: {
      offset: -15
    },
    interactions: [{
      type: 'element-active'
    }]
  });
  rosePlot.render();
});`,
  },
  {
    fileName: 'basic.ts',
    fileIndex: 200,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basic = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    type: '分类一',
    value: 27,
    user: '用户一'
  }, {
    type: '分类二',
    value: 25,
    user: '用户一'
  }, {
    type: '分类三',
    value: 18,
    user: '用户一'
  }, {
    type: '分类四',
    value: 15,
    user: '用户一'
  }, {
    type: '分类五',
    value: 10,
    user: '用户一'
  }, {
    type: '其它',
    value: 5,
    user: '用户一'
  }, {
    type: '分类一',
    value: 7,
    user: '用户二'
  }, {
    type: '分类二',
    value: 5,
    user: '用户二'
  }, {
    type: '分类三',
    value: 38,
    user: '用户二'
  }, {
    type: '分类四',
    value: 5,
    user: '用户二'
  }, {
    type: '分类五',
    value: 20,
    user: '用户二'
  }, {
    type: '其它',
    value: 15,
    user: '用户二'
  }]; // 堆叠玫瑰图

  var rosePlot = new G2Plot.Rose('container-200', {
    data: data,
    xField: 'type',
    yField: 'value',
    isStack: true,
    // 当 isStack 为 true 时，该值为必填
    seriesField: 'user',
    radius: 0.9,
    label: {
      offset: -15
    },
    interactions: [{
      type: 'element-active'
    }]
  });
  rosePlot.render();
});`,
  },
  {
    fileName: 'axis-right.ts',
    fileIndex: 201,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.axisRight = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/f950b2f1-038b-47c2-afcc-63001bc8d07c.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var processData = data.map(function (item) {
      item['Average annual wage'] = item['Average annual wage'] * 1;
      item['probability'] = item['probability'] * 1;
      item['numbEmployed'] = item['numbEmployed'] * 1;
      return item;
    });
    var labels = ['Airline Pilots, Copilots and Flight Engineers', 'Benefits Managers'];
    var scatterPlot = new G2Plot.Scatter('container-201', {
      appendPadding: 30,
      data: processData,
      xField: 'probability',
      yField: 'Average annual wage',
      colorField: 'education',
      size: [2, 16],
      sizeField: 'numbEmployed',
      shape: 'circle',
      yAxis: {
        nice: false,
        min: -20000,
        tickCount: 5,
        position: 'right',
        label: {
          formatter: function formatter(value) {
            return Math.floor(value / 1000) + 'K';
          }
        },
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      tooltip: {
        fields: ['probability', 'Average annual wage', 'numbEmployed']
      },
      legend: {
        position: 'top'
      },
      xAxis: {
        min: -0.04,
        max: 1.04,
        nice: false,
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: false,
        label: false
      },
      label: {
        formatter: function formatter(item) {
          return labels.includes(item['short occupation']) ? item['short occupation'] : '';
        },
        offsetY: -10
      },
      annotations: [{
        type: 'line',
        start: [-0.04, 100000],
        end: [1.04, 30000],
        style: {
          stroke: '#aaa'
        }
      }, {
        type: 'text',
        position: ['1.03', 'max'],
        content: 'Average annual wage',
        style: {
          textAlign: 'right',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)'
        }
      }, {
        type: 'text',
        position: ['1.03', 'min'],
        content: 'Most likely to be automated ',
        style: {
          textAlign: 'right',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)'
        }
      }, {
        type: 'text',
        position: ['-0.03', 'min'],
        content: 'Least likely to be automated ',
        style: {
          textAlign: 'left',
          fontWeight: '500',
          fill: 'rgb(92, 92, 92)'
        }
      }]
    });
    scatterPlot.render();
  });
});`,
  },
  {
    fileName: 'bubble-3d.ts',
    fileIndex: 202,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.bubble3d = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/t81X1wXdoj/scatter-data.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var scatterPlot = new G2Plot.Scatter('container-202', {
      appendPadding: 30,
      data: data,
      xField: 'x',
      yField: 'y',
      colorField: 'genre',
      color: ['r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#5B8FF9', 'r(0.4, 0.4, 0.7) 0:rgba(255,255,255,0.5) 1:#61DDAA'],
      sizeField: 'size',
      size: [5, 20],
      shape: 'circle',
      yAxis: {
        nice: true,
        line: {
          style: {
            stroke: '#eee'
          }
        }
      },
      xAxis: {
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: {
          style: {
            stroke: '#eee'
          }
        }
      }
    });
    scatterPlot.render();
  });
});`,
  },
  {
    fileName: 'quadrant.ts',
    fileIndex: 203,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.quadrant = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var scatterPlot = new G2Plot.Scatter('container-203', {
      appendPadding: 30,
      data: data,
      xField: 'change in female rate',
      yField: 'change in male rate',
      sizeField: 'pop',
      colorField: 'continent',
      color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
      size: [4, 30],
      shape: 'circle',
      pointStyle: {
        fillOpacity: 0.8,
        stroke: '#bbb'
      },
      xAxis: {
        min: -25,
        max: 5,
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      yAxis: {
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      quadrant: {
        xBaseline: 0,
        yBaseline: 0,
        labels: [{
          content: 'Male decrease,female increase'
        }, {
          content: 'Female decrease,male increase'
        }, {
          content: 'Female & male decrease'
        }, {
          content: 'Female & male increase'
        }]
      }
    });
    scatterPlot.render();
  });
});`,
  },
  {
    fileName: 'color-mapping.ts',
    fileIndex: 204,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.colorMapping = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var scatterPlot = new G2Plot.Scatter('container-204', {
      appendPadding: 10,
      data: data,
      xField: 'Revenue (Millions)',
      yField: 'Rating',
      shape: 'circle',
      colorField: 'Genre',
      size: 4,
      yAxis: {
        nice: true,
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      xAxis: {
        min: -100,
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      }
    });
    scatterPlot.render();
  });
});`,
  },
  {
    fileName: 'custom-shape.ts',
    fileIndex: 205,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.customShape = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  // 注册主体有 point | interval | polygon | line 等，详细参考 G2: https://g2.antv.vision/
  G2Plot.G2.registerShape('point', 'custom-shape', {
    draw: function draw(cfg, group) {
      var cx = cfg.x;
      var cy = cfg.y;
      var radius = cfg.size || 5;
      var polygon = group.addShape('path', {
        attrs: {
          path: [['M', cx - radius, cy - radius], ['L', cx + radius, cy - radius], ['L', cx, cy + radius], ['Z']],
          ...cfg.defaultStyle,
          ...cfg.style
        }
      });
      return polygon;
    }
  });

  fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var scatterPlot = new G2Plot.Scatter('container-205', {
      appendPadding: 30,
      data: data,
      xField: 'xG conceded',
      yField: 'Shot conceded',
      shape: 'custom-shape',
      pointStyle: {
        lineWidth: 2
      },
      size: 6,
      yAxis: {
        nice: true,
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      tooltip: {
        showMarkers: false
      },
      xAxis: {
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      label: {}
    });
    scatterPlot.render();
  });
});`,
  },
  {
    fileName: 'label.ts',
    fileIndex: 206,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.label = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var scatterPlot = new G2Plot.Scatter('container-206', {
      appendPadding: 30,
      data: data,
      xField: 'xG conceded',
      yField: 'Shot conceded',
      colorField: 'Result',
      size: 5,
      shape: 'circle',
      pointStyle: {
        fillOpacity: 1
      },
      yAxis: {
        nice: true,
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      xAxis: {
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      label: {}
    });
    scatterPlot.render();
  });
});`,
  },
  {
    fileName: 'line.ts',
    fileIndex: 207,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.line = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [{
    x: 1,
    y: 4.181
  }, {
    x: 2,
    y: 4.665
  }, {
    x: 3,
    y: 5.296
  }, {
    x: 4,
    y: 5.365
  }, {
    x: 5,
    y: 5.448
  }, {
    x: 6,
    y: 5.744
  }, {
    x: 7,
    y: 5.653
  }, {
    x: 8,
    y: 5.844
  }, {
    x: 9,
    y: 6.362
  }, {
    x: 10,
    y: 6.38
  }, {
    x: 11,
    y: 6.311
  }, {
    x: 12,
    y: 6.457
  }, {
    x: 13,
    y: 6.479
  }, {
    x: 14,
    y: 6.59
  }, {
    x: 15,
    y: 6.74
  }, {
    x: 16,
    y: 6.58
  }, {
    x: 17,
    y: 6.852
  }, {
    x: 18,
    y: 6.531
  }, {
    x: 19,
    y: 6.682
  }, {
    x: 20,
    y: 7.013
  }, {
    x: 21,
    y: 6.82
  }, {
    x: 22,
    y: 6.647
  }, {
    x: 23,
    y: 6.951
  }, {
    x: 24,
    y: 7.121
  }, {
    x: 25,
    y: 7.143
  }, {
    x: 26,
    y: 6.914
  }, {
    x: 27,
    y: 6.941
  }, {
    x: 28,
    y: 7.226
  }, {
    x: 29,
    y: 6.898
  }, {
    x: 30,
    y: 7.392
  }, {
    x: 31,
    y: 6.938
  }];
  var scatterPlot = new G2Plot.Scatter('container-207', {
    data: data,
    xField: 'x',
    yField: 'y',
    size: 5,
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      fill: '#5B8FF9'
    },
    regressionLine: {
      type: 'quad' // linear, exp, loess, log, poly, pow, quad

    }
  });
  scatterPlot.render();
});`,
  },
  {
    fileName: 'mapping-color-and-shape.ts',
    fileIndex: 208,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot", "@antv/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"), require("@antv/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot, global.util);
    global.mappingColorAndShape = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot, _util) {
  "use strict";

  fetch('https://gw.alipayobjects.com/os/antfincdn/rc7SYiIq8Z/scatter-color-shape.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    var plot = new G2Plot.Scatter('container-208', {
      appendPadding: 10,
      data: []
    });
    plot.update({
      data: data,
      xField: 'x',
      yField: 'y',
      colorField: 'city',
      shapeField: 'area',
      sizeField: 'value',
      size: [4, 8],
      color: function color(_ref) {
        var city = _ref.city;

        // 推荐业务自己传入主题色，不需要从 chart 中获取
        var _plot$chart$getTheme = plot.chart.getTheme(),
            colors10 = _plot$chart$getTheme.colors10; // custom colorMapping function


        var idx = data.map(function (d) {
          return d.city;
        }).indexOf(city);
        return colors10[idx + 1];
      },
      shape: function shape(_ref2) {
        var area = _ref2.area;
        var shapes = ['circle', 'square', 'triangle', 'hexagon', 'diamond', 'bowtie'];
        var idx = (0, _util.uniq)(data.map(function (d) {
          return d.area;
        })).indexOf(area);
        return shapes[idx] || 'circle';
      },
      yAxis: {
        nice: true,
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      }
    });
  });
});`,
  },
  {
    fileName: 'progress-style.ts',
    fileIndex: 209,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.progressStyle = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var progress = new G2Plot.Progress('container-209', {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.536,
    barWidthRatio: 0.3,
    color: ['#F4664A', '#E8EDF3']
  });
  progress.render();
});`,
  },
  {
    fileName: 'progress.ts',
    fileIndex: 210,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.progress = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var progress = new G2Plot.Progress('container-210', {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3']
  });
  progress.render();
});`,
  },
  {
    fileName: 'ring-progress-style.ts',
    fileIndex: 211,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.ringProgressStyle = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var ringProgress = new G2Plot.RingProgress('container-211', {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px'
        },
        formatter: function formatter() {
          return '进度';
        }
      }
    }
  });
  ringProgress.render();
});`,
  },
  {
    fileName: 'ring-progress.ts',
    fileIndex: 212,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.ringProgress = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var ringProgress = new G2Plot.RingProgress('container-212', {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3']
  });
  ringProgress.render();
});`,
  },
  {
    fileName: 'area-annotation.ts',
    fileIndex: 213,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.areaAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192];
  var tinyArea = new G2Plot.TinyArea('container-213', {
    height: 60,
    autoFit: false,
    data: data,
    smooth: true,
    tooltip: false,
    annotations: [// 平均值
    {
      type: 'line',
      start: ['min', 'mean'],
      end: ['max', 'mean'],
      text: {
        content: '平均值',
        offsetY: -2,
        style: {
          textAlign: 'left',
          fontSize: 10,
          fill: 'rgba(44, 53, 66, 0.45)',
          textBaseline: 'bottom'
        }
      },
      style: {
        stroke: 'rgba(0, 0, 0, 0.25)'
      }
    }, // 目标值
    {
      type: 'line',
      start: ['min', 800],
      end: ['max', 800],
      text: {
        content: '目标值',
        offsetY: -2,
        style: {
          textAlign: 'left',
          fontSize: 10,
          fill: 'rgba(44, 53, 66, 0.45)',
          textBaseline: 'bottom'
        }
      },
      style: {
        stroke: 'rgba(0, 0, 0, 0.55)'
      }
    }]
  });
  tinyArea.render();
});`,
  },
  {
    fileName: 'basic-area.ts',
    fileIndex: 214,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicArea = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192];
  var tinyArea = new G2Plot.TinyArea('container-214', {
    height: 60,
    autoFit: false,
    data: data,
    smooth: true
  });
  tinyArea.render();
});`,
  },
  {
    fileName: 'filled-area.ts',
    fileIndex: 215,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.filledArea = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192];
  var tinyArea = new G2Plot.TinyArea('container-215', {
    height: 60,
    autoFit: false,
    data: data,
    smooth: true,
    areaStyle: {
      fill: '#d6e3fd'
    }
  });
  tinyArea.render();
});`,
  },
  {
    fileName: 'basic-column.ts',
    fileIndex: 216,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicColumn = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [274, 337, 81, 497, 666, 219, 269];
  var tinyColumn = new G2Plot.TinyColumn('container-216', {
    height: 64,
    autoFit: false,
    data: data,
    tooltip: {
      customContent: function customContent(x, data) {
        return "NO.".concat(x, ": ").concat(data[0]?.data?.y.toFixed(2));
      }
    }
  });
  tinyColumn.render();
});`,
  },
  {
    fileName: 'column-annotation.ts',
    fileIndex: 217,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.columnAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [274, 337, 81, 497, 666, 219, 269];
  var tinyColumn = new G2Plot.TinyColumn('container-217', {
    height: 64,
    autoFit: false,
    data: data,
    tooltip: false,
    annotations: [// 平均值
    {
      type: 'line',
      start: ['min', 'mean'],
      end: ['max', 'mean'],
      text: {
        content: '平均值',
        offsetY: -2,
        style: {
          textAlign: 'left',
          fontSize: 10,
          fill: 'rgba(44, 53, 66, 0.45)',
          textBaseline: 'bottom'
        }
      },
      style: {
        stroke: 'rgba(0, 0, 0, 0.25)'
      }
    }]
  });
  tinyColumn.render();
});`,
  },
  {
    fileName: 'basic-line.ts',
    fileIndex: 218,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.basicLine = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192];
  var tinyLine = new G2Plot.TinyLine('container-218', {
    height: 60,
    autoFit: false,
    data: data,
    smooth: true
  });
  tinyLine.render();
});`,
  },
  {
    fileName: 'line-annotation.ts',
    fileIndex: 219,
    code: `(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@antv/g2plot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@antv/g2plot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.g2plot);
    global.lineAnnotation = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_g2plot) {
  "use strict";

  var data = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192];
  var tinyLine = new G2Plot.TinyLine('container-219', {
    height: 60,
    autoFit: false,
    data: data,
    smooth: true,
    tooltip: false,
    annotations: [// 平均值
    {
      type: 'line',
      start: ['min', 'mean'],
      end: ['max', 'mean'],
      text: {
        content: '平均值',
        offsetY: -2,
        style: {
          textAlign: 'left',
          fontSize: 10,
          fill: 'rgba(44, 53, 66, 0.45)',
          textBaseline: 'bottom'
        }
      },
      style: {
        stroke: 'rgba(0, 0, 0, 0.25)'
      }
    }, {
      type: 'line',
      start: ['min', 800],
      end: ['max', 800],
      text: {
        content: '目标值',
        offsetY: -2,
        style: {
          textAlign: 'left',
          fontSize: 10,
          fill: 'rgba(44, 53, 66, 0.45)',
          textBaseline: 'bottom'
        }
      },
      style: {
        stroke: 'rgba(0, 0, 0, 0.55)'
      }
    }]
  });
  tinyLine.render();
});`,
  },
];

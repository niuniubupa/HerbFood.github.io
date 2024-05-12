(function () {


    function redirectToSearch(herb) {
        // 构建URL，附加药材名称作为参数
        var searchUrl = '药膳搜索.html?herb=' + encodeURIComponent(herb);
        // 重定向到药膳搜索页面
        window.location.href = searchUrl;
    }



    var myChart = echarts.init(document.querySelector(".ditu"));
    var data = [
        { name: '长治', value: 90 },
        { name: '平遥', value: 90 },
        { name: '河源', value: 90 },
        { name: '莱芜', value: 90 },
        { name: '南阳', value: 90 },
        { name: '上饶', value: 90 },
        { name: '邵阳', value: 90 },
        { name: '阳山', value: 90 },
        { name: '中卫市', value: 90 },
        { name: '莱阳', value: 90 },
        { name: '若羌县', value: 90 },
        { name: '昆明', value: 90 },
        { name: '宁德', value: 90 },
        { name: '阿图什', value: 90 },
        { name: '阳春', value: 90 },
        { name: '迁西', value: 90 },
        { name: '兴仁', value: 90 },
        { name: '藤县', value: 90 },
        { name: '玉林', value: 90 },
        { name: '广昌', value: 90 },
        { name: '江门', value: 90 },
        { name: '十堰市', value: 90 },
        { name: '绥化', value: 90 },
        { name: '陇西', value: 90 },
        { name: '应城', value: 90 },
        { name: '泰安', value: 90 },
        { name: '延安', value: 90 },
        { name: '金川', value: 90 },
        { name: '赤峰', value: 90 },
        { name: '通江', value: 90 },
        { name: '大方', value: 90 },
        { name: '玉树', value: 90 },
        { name: '海林', value: 90 },
        { name: '泰兴', value: 90 },
        { name: '湘潭', value: 90 },
        { name: '钦州', value: 90 },
        { name: '信丰', value: 90 },
        { name: '威海', value: 90 },
        { name: '金湖', value: 90 },
        { name: '茂名', value: 90 },
        { name: '保山', value: 90 },
        { name: '绵阳', value: 90 },
        { name: '梅河口', value: 90 },
        { name: '福州', value: 90 },
        { name: '潮汕', value: 90 },
        { name: '佛山', value: 90 },
        { name: '南雄', value: 90 },
        { name: '轮台', value: 90 },
        { name: '冠县', value: 90 },
        { name: '水口镇', value: 90 },
        { name: '淮滨', value: 90 },
        { name: '张家界', value: 90 },
        { name: '西双版纳', value: 90 },
        { name: '宜昌', value: 90 },
        { name: '休宁', value: 90 },
        { name: '永春', value: 90 },
        { name: '阿坝藏族羌族自治州', value: 90 },
        { name: '确山', value: 90 },
        { name: '松溪', value: 90 },
        { name: '宝应', value: 90 },
        { name: '莆田', value: 90 },
        { name: '库山', value: 90 },
        // {name: '唐山',value: 90},
        { name: '义乌', value: 90 },
        { name: '嵊泗县', value: 90 },
        { name: '古田', value: 90 },
        { name: '开封', value: 90 },
        { name: '涉县', value: 90 },
        { name: '青岛', value: 90 },
        { name: '泉州', value: 90 }
    ];
    var geoCoordMap = {
        '长治': [113.11, 36.19],
        '介休': [111.91, 37.02],
        '河源': [114.70, 23.73],
        '莱芜': [117.65, 36.20],
        '南阳': [112.53, 33.00],
        '上饶': [118.19, 28.43],
        '四川': [104.06, 30.39],
        '邵阳': [111.45, 27.24],
        '广东阳山': [112.38, 24.28],
        '江苏阳山': [112.38, 24.28],
        '中卫市': [105.17, 37.51],
        '莱阳': [120.71, 36.97],
        '若羌县': [88.16, 39.02],
        '昆明': [102.82, 24.88],
        '宁德': [119.52, 26.66],
        '阿图什': [76.16, 39.71],
        '阳春': [111.79, 22.17],
        '迁西': [118.31, 40.14],
        '兴仁': [105.18, 25.43],
        '藤县': [110.91, 23.37],
        '玉林': [110.05, 22.57],
        '陕西': [108.93425, 34.13],
        '广东': [113.27324],
        '广昌': [116.32, 26.83],
        '江门': [113.11, 22.56],
        '十堰市': [110.81, 32.59],
        '绥化': [126.98, 46.63],
        '陇西': [104.63, 35.00],
        '应城': [113.57, 30.92],
        '云南': [101.82, 24.88],
        '泰安': [117.13, 36.19],
        '延安': [109.32, 36.86],
        '金川': [102.19, 38.52],
        '赤峰': [118.95, 42.26],
        '通江': [107.24, 31.91],
        '大方': [105.61, 27.14],
        '玉树': [97.00, 33.00],
        '海林': [129.38, 44.59],
        '泰兴': [120.05, 32.17],
        '湘潭': [112.90, 27.85],
        '钦州': [116.23, 40.22],
        '信丰': [114.92, 25.38],
        '威海': [122.12, 37.50],
        '金湖': [119.02, 33.02],
        '茂名': [111.01, 21.51],
        '保山': [99.16, 25.12],
        '绵阳': [104.56, 31.53],
        '梅河口': [125.71, 42.53],
        '福州': [119.27, 26.04],
        '潮汕': [113.15, 22.97],
        '佛山': [112.89, 22.90],
        '南雄': [114.31, 25.11],
        '轮台': [84.25, 41.77],
        '冠县': [115.44, 36.48],
        '水口镇': [113.81, 26.31],
        '淮滨': [115.41, 32.47],
        '张家界': [110.55, 29.34],
        '西双版纳': [100.79, 22.00],
        '宜昌': [111.43, 30.53],
        '休宁': [118.18, 29.78],
        '永春': [118.29, 25.32],
        '阿坝藏族羌族自治州': [102.22, 31.89],
        '确山': [114.02, 32.80],
        '松溪': [118.78, 27.52],
        '宝应': [119.35, 33.24],
        '莆田': [118.99, 25.41],
        '库山': [118.40, 35.24],
        // '唐山':[118.46,39.27] ,
        '义乌': [120.07, 29.30],
        '嵊泗县': [122.45, 30.72],
        '古田': [118.74, 26.57],
        '开封': [114.34, 34.78],
        '涉县': [113.69, 36.58],
        '青岛': [120.39, 36.30],
        '泉州': [118.61, 24.88]


    };



    var herbUrls = {
        "麻黄": "./药膳搜索.html",
        // ...
        // 为每个药材定义一个 URL
    };



    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    var cityHerbs = {
        "长治": "浮小麦\n党参",
        "介休": "淮山",
        "河源": "五指毛桃",
        "莱芜": "姜",
        "南阳": "山茱萸",
        "上饶": "芡实",
        "四川": "猪肉",
        "邵阳": "百合\n玉竹",
        "广东阳山": "西洋菜",
        "江苏阳山": "蜜桃",
        "中卫市": "杞子",
        "莱阳": "沙参",
        "若羌县": "红枣",
        "昆明": "独脚金",
        "宁德": "太子参",
        "阿图什": "无花果",
        "阳春": "春砂仁",
        "迁西": "板栗",
        "兴仁": "薏苡仁",
        "藤县": "粉葛",
        "全国": "浮小麦\n鲜茅根\n西施骨\n菟丝子",
        "玉林": "桂圆肉",
        "陕西": "绵茵陈",
        "广东": "金婴子\n江珧柱\n龙利叶",
        "江西": "泽泻",
        "江门": "陈皮",
        "十堰市": "木瓜",
        "大方": "黄豆",
        "广昌": "泽泻",
        "绥化": "黑豆",
        "陇西": "北芪",
        "应城": "糯稻根",
        "云南": "云苓",
        "泰安": "黄精",
        "延安": "酸枣",
        "山东": "柏子",
        "金川": "雪梨",
        "赤峰": "麻黄",
        "通江": "雪耳",
        "玉树": "冬虫草",
        "海林": "猴头菇",
        "泰兴": "白果",
        "湘潭": "莲子",
        "钦州": "蚝豉",
        "信丰": "草菇",
        "威海": "西洋参\n花旗参",
        "金湖": "鲜荷花",
        "茂名": "荔枝干",
        "保山": "石斛",
        "绵阳": "麦冬",
        "梅河口": "松子仁",
        "福州": "橄榄\n鲜沙榄",
        "潮汕": "响螺",
        "佛山": "霸王花",
        "南雄": "南杏",
        "轮台": "北杏",
        "冠县": "灵芝",
        "水口镇": "使君子",
        "淮滨": "猫爪草",
        "张家界": "杜仲",
        "西双版纳": "补骨脂",
        "宜昌": "眉豆",
        "休宁": "毛冬青",
        "永春": "熟地",
        "阿坝藏族羌族自治州": "川贝",
        "确山": "夏枯草",
        "松溪": "竹蔗",
        "宝应": "莲藕",
        "莆田": "枇杷叶",
        "库山": "丹参",
        // "唐山": "栗子",
        "义乌": "南枣",
        "嵊泗县": "淡菜",
        "古田": "北菇",
        "开封": "杜仲",
        "涉县": "核桃",
        "青岛": "芜茜",
        "泉州": "枝竹"

    };

    option = {
        backgroundColor: 'rgba(64,74,89,0)',
        title: {
            text: '全国道地药材分布图',
            subtext: '地图来源：https://datav.aliyun.com/portal/school/atlas/area_selector 阿里云地图测绘' +
                '© 2022 高德软件 GS京(2022)1061号',
            subtextStyle: {
                color: 'rgba(0,0,0,0.8)'
            },
            left: 'center',
            textStyle: {
                color: '#000000'
            }
        },
        tooltip: {
            trigger: 'item',
            enterable: true,
            hideDelay: 500,
            formatter: function (params) {
                var herbs = cityHerbs[params.data.name];
                if (herbs) {
                    var herbList = herbs.split('\n');
                    var herbHtml = herbList.map(function (herb) {
                        var imgUrl = "./images/药材/" + herb + ".jpg";
                        var herbLink = '<a href="药膳搜索.html?herb=' + encodeURIComponent(herb) + '" onclick="event.stopPropagation();">' + herb + '</a>';
                        return herbLink + '<br><img src="' + imgUrl + '" width="200px">';
                    }).join('<br>');
                    return params.data.name + '：<br>' + herbHtml;
                } else {
                    return params.data.name;
                }
            }

        },





        // tooltip: {
        //     trigger: 'item',
        //
        //     formatter: function(params) {
        //         var herbs = cityHerbs[params.data.name];
        //         if (herbs) {
        //             var herbList = herbs.split('\n');
        //             var herbHtml = herbList.map(function(herb) {
        //                 var url = herbUrls[herb];
        //                 var imgUrl = "./images/药材/" + herb + ".jpg"; // 使用药名作为文件名，图片在 "images" 目录下
        //                 if (url) {
        //                     return '' + herb + '' + '<br>< img src="' + imgUrl + '" width="200px">'; // 在提示框中添加链接和图片
        //                 } else {
        //                     return herb + '<br>< img src="' + imgUrl + '" width="200px">'; // 对于没有对应 URL 的药材，只显示药材名称和图片
        //                 }
        //             }).join('<br>');
        //             return params.data.name + '：<br>' + herbHtml;
        //         } else {
        //             return params.data.name; // 对于没有对应药材的城市，只显示城市名称
        //         }
        //     }
        // },
        legend: {
            orient: 'vertical',
            y: 'middle',
            x: 'right',
            data: ['城市'],
            textStyle: {
                color: '#0a0000',
                fontSize: 16
            }, itemStyle: {
                width: 30, // 设置宽度
                height: 30, // 设置高度
            },

            inactiveColor: 'rgba(152,6,6,0.53)'
        },

        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            zoom: 1.25,
            center: [110.40, 35.90],
            itemStyle: {
                normal: {
                    areaColor: '#ff8f01',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: 'rgba(201,72,4,0.88)'
                }
            }
        },
        series: [
            {
                name: '城市',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(2,0,0,0.75)'
                    }
                }

            },

            /*  {
                  name: 'Top 5',
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: convertData(data.sort(function (a, b) {
                      return b.value - a.value;
                  }).slice(0, 6)),
                  symbolSize: function (val) {
                      return val[2] / 10;
                  },
                  showEffectOn: 'render',
                  rippleEffect: {
                      brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  label: {
                      normal: {
                          formatter: '{b}',
                          position: 'right',
                          show: true
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#f4e925',
                          shadowBlur: 10,
                          shadowColor: '#333'
                      }
                  },
                  zlevel: 1
              }
              */
        ]
    };




    myChart.setOption(option)
})()
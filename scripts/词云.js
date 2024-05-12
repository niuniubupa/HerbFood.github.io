(function () {
    // 从localStorage中获取dynamicVariables的值
    var dynamicVariables = JSON.parse(localStorage.getItem('dynamicVariables')) || {};


    var mycharts = echarts.init(document.getElementById("myChart"));
    //用来存储数据

    // 人像的base64编码
    image1 = "data:image/png;base64,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"

    var maskResource = new Image()
    maskResource.src = image1;
    var option = {
        //设置标题，居中显示
        title: {
            text: '菜谱点击次数云图',
            left: 'center',
        },
        //数据能够点击
        tooltip: {
            formatter: function (params) {
                return '药膳: ' + params.data.name + '<br>' + '点击次数: ' + params.data.value;
            }
        },

        series: [
            {
                maskImage: maskResource,
                //词的类型
                type: 'wordCloud',
                //设置字符大小范围
                sizeRange: [15, 40],
                rotationRange: [-45, 90],
                textStyle: {
                    normal: {
                        //生成随机的字体颜色
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';

                        }
                    }

                },
                //不要忘记调用数据
                data: dynamicVariables

            }
        ]

    };
    //加载图像，将数据放在图像中
    maskResource.onload = function () {
        mycharts.setOption(option)

    };
    mycharts.on('click', function (data) {

        localStorage.setItem('clickData', JSON.stringify(data.data.name));
        //跳转到新的页面
        window.location.href = './药膳搜索.html?YSname=' + data.data.name;
    });

})()
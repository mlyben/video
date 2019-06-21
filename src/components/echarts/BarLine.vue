<template>
    <div class="echart-Bar" ref="echartBar"></div>
</template>

<script>
    export default {
        name: "BarLine",
        methods: {
            initEchart() {
                let myChart = this.$echarts.init(this.$refs.echartBar)
                let option = {
                    title: {
                        text: "分局案件走势图",
                        x: 'center',
                        y: 15,
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: 24,
                            fontWeight: 'normal'
                        }
                    },
                    //鼠标滑入触发提示数量
                    tooltip: {
                        show: true,
                        formatter: function (param) {
                            console.log(param);
                        },
                        // trigger: "axis",
                        // "axisPointer": {
                        //     "type": "shadow",
                        //     textStyle: {
                        //         color: "#fff"
                        //     }
                        // },
                    },
                    legend: {
                        y: 'bottom',
                        data: ["盗窃案", "民事纠纷案", "公共交通安", "扰乱公务秩序案", '总数']
                    },
                    //x轴显示
                    xAxis: {
                        data: ["2014年", "2015年", "2016年", "2017年", "2018年", "2018年"],
                        splitLine: {
                            show: false
                        },
                    },
                    //y轴显示
                    yAxis: {
                        splitLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: "盗窃案",
                            type: "bar",
                            stack: "案件",//折叠显示
                            data: [10, 2, 3, 4, 3, 11],
                            barWidth: 38,
                            //显示颜色
                            itemStyle: {
                                normal: {color: "#FFFF49"}  // rgba(91, 155, 213)
                            }
                        },
                        {
                            name: "民事纠纷案",
                            type: "bar",
                            stack: "案件",
                            data: [3, 21, 4, 3, 4, 3],
                            barWidth: 38,
                            itemStyle: {
                                normal: {color: "#FF8849"}
                            }
                        },
                        {
                            name: "公共交通安",
                            type: "bar",
                            stack: "案件",
                            data: [6, 11, 2, 3, 4, 3],
                            barWidth: 38,
                            itemStyle: {
                                normal: {color: "#3FBB49"}
                            }
                        },
                        {
                            name: "扰乱公务秩序案",
                            type: "bar",
                            stack: "案件",
                            data: [12, 2, 3, 4, 3, 3],
                            barWidth: 38,
                            itemStyle: {
                                normal: {color: "#56C4A5"}
                            }
                        },
                        {
                            "name": "总数",
                            "type": "line",
                            symbolSize: 8,
                            symbol: 'circle',
                            "itemStyle": {
                                "normal": {
                                    "color": "rgba(252,230,48,1)",
                                    "barBorderRadius": 0,
                                    'zIndex': 10000000,
                                    "label": {
                                        "show": true,
                                        "position": "top",
                                        formatter: function (p) {
                                            return p.value > 0 ? (p.value) : '';
                                        }
                                    }
                                }
                            },
                            "data": [
                                31,
                                36,
                                12,
                                14,
                                14,
                                20
                            ],
                            clickable: false
                        },
                    ]
                };

                if (option && typeof option === "object") {
                    // 处理点击事件
                    myChart.on('click', function (params) {
                        if (params.componentSubType === 'bar') {
                            // console.log(params)
                        }
                    });
                }

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        },
        created() {
        },
        mounted() {
            this.initEchart()
        }
    }
</script>

<style lang="less" scoped>
    .echart-Bar {
        width: 80%;
        height: 80%;
        margin: auto;
        background-color: pink
    }
</style>

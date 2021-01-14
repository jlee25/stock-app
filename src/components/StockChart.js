import React from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import moment from 'moment'

const StockChart = (props) => {
    const { stockInfo, volume } = props;
    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);
    let configPrice = {}
    if (volume) {
      configPrice = {
        yAxis: [{
          labels: {
            align: 'left'
          },
          height: '80%',
          resize: {
            enabled: true
          }
        }, {
          labels: {
            align: 'left'
          },
          top: '80%',
          height: '20%',
          offset: 0
        }],
        tooltip: {
          shape: 'square',
          headerShape: 'callout',
          borderWidth: 0,
          shadow: false,
          positioner: function (width, height, point) {
            var chart = this.chart,
              position;
    
            if (point.isHeader) {
              position = {
                x: Math.max(
                  // Left side limit
                  chart.plotLeft,
                  Math.min(
                    point.plotX + chart.plotLeft - width / 2,
                    // Right side limit
                    chart.chartWidth - width - chart.marginRight
                  )
                ),
                y: point.plotY
              };
            } else {
              position = {
                x: point.series.chart.plotLeft,
                y: point.series.yAxis.top - chart.plotTop
              };
            }
    
            return position;
          }
        },
        scrollbar: {
          enabled: false
        },
        navigator: {
            enabled: false
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        series: [{
          type: 'ohlc',
          id: 'ohlc',
          color: '#1DA57A',
          name: stockInfo.tickerInfo.ticker,
          data: stockInfo.details
        }, {
          type: 'column',
          id: 'volume',
          name: stockInfo.tickerInfo.ticker,
          color: '#1DA57A',
          data: stockInfo.stockInfo,
          yAxis: 1
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 800
            },
            chartOptions: {
              rangeSelector: {
                inputEnabled: false
              }
            }
          }]
        }
      }
    } else {
      configPrice = {
          yAxis: [{
            offset: 20,
    
            labels: {
              formatter: function () {
                return numberFormat.format(this.value) 
              }
              ,
              x: -15,
              style: {
                "color": "#000", "position": "absolute"
    
              },
              align: 'left'
            },
          },
            
          ],
          tooltip: {
            shared: true,
            formatter: function () {
              return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
            }
          },
          plotOptions: {
            series: {
              showInNavigator: true,
              gapSize: 6,
    
            }
          },
          chart: {
              // backgroundColor: '#001529',
              polar: true,
              type: 'line',
              height: 300,
          },
          scrollbar: {
              enabled: false
          },
          navigator: {
              enabled: false
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          xAxis: {
            type: 'date',
          },
          rangeSelector: {
            buttons: [{
              type: 'day',
              count: 7,
              text: '7d'
            }, {
              type: 'month',
              count: 1,
              text: '1m'
            }, {
              type: 'month',
              count: 3,
              text: '3m'
            },
              {
              type: 'all',
              text: 'All'
            }],
            selected: 4
          },
          series: [{
            name: 'Price',
            type: 'spline',
            color: '#1DA57A',
            data: stockInfo.stockInfo,
            tooltip: {
              valueDecimals: 2
            },
          },
          ]
        };
    }
    return (
      <ReactHighcharts config = {configPrice}></ReactHighcharts>
    )
}

export default StockChart

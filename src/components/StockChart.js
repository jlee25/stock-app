import React from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import moment from 'moment'

const StockChart = (props) => {
    const { stockInfo } = props;
    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);
    console.log(stockInfo, 'infoo');
    const configPrice = {
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
    
        }
        ]
      };
    return (
      <ReactHighcharts config = {configPrice}></ReactHighcharts>
    )
}

export default StockChart

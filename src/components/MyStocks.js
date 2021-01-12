import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyStocksCard from "./MyStocksCard";
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space, Breadcrumb, Tabs } from 'antd';
import { selectStock } from '../features/stockSlice';


const MyStocks = () => {
    const stockList = useSelector(selectStock);
    return (
        !stockList.loading ? 
            stockList.favStocks.length > 0  ?
                stockList.favStocks.map(stock => {
                    return (
                        <MyStocksCard 
                            list={stock}
                            details={stock.details ? stock.details : []}
                            title={stock.tickerInfo ? stock.tickerInfo.ticker : ""}
                            description={stock.tickerInfo ? stock.tickerInfo.name : ""}
                            url={stock.tickerInfo ? `/dashboard/stock/${stock.tickerInfo.ticker}` : ""}
                            loading={stockList.loading}
                        />
                    )
                })
            : 
            <div>
                You currently do not have any favourite stocks. Click on "List of Stocks" on the left to add some!
            </div>
        :
        <div>
            <Spin className="spinner" size="large" />
        </div>
        
    )
}

export default MyStocks

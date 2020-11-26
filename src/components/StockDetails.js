import React, { useEffect } from 'react';
import StockChart from './StockChart';
import StockTickerInfo from './StockTickerInfo';
import Breadcrumbs from './Breadcrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { getStock, selectStock } from '../features/stockSlice';
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space, Breadcrumb } from 'antd';

const StockDetails = (props) => {
    const dispatch = useDispatch();
    const stockList = useSelector(selectStock);
    const { params } = props.match
    const { Title } = Typography;

    useEffect(() => {
        dispatch(getStock(params.id));
    }, [params.id])


    return (
        <div>
            <Breadcrumbs stock={params.id} />
            {!stockList.loading && Object.keys(stockList.stock).length !== 0 ? 
                <div>
                    <Title level={1}>{params.id}</Title>
                    <StockChart 
                        stockInfo={stockList.stock}
                    />
                    <StockTickerInfo tickerInfo={stockList.stock.tickerInfo} />
                </div>
            : 
            <div>
                <Spin className="spinner" size="large" />
                <Skeleton className="skeleton-card" active>
                    <Skeleton.Image />
                </Skeleton>
            </div>
            }
        </div>
    )
}

export default StockDetails

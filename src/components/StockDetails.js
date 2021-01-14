import React, { useEffect } from 'react';
import StockChart from './StockChart';
import StockTickerInfo from './StockTickerInfo';
import StockCalculator from './StockCalculator';
import Breadcrumbs from './Breadcrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { getStock, selectStock } from '../features/stockSlice';
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space, Breadcrumb, Tabs } from 'antd';

const StockDetails = (props) => {
    const dispatch = useDispatch();
    const stockList = useSelector(selectStock);
    const { params } = props.match
    const { Title } = Typography;
    const { TabPane } = Tabs;

    useEffect(() => {
        dispatch(getStock(params.id));
    }, [params.id])

    console.log(stockList.stock, 'stockkkk');

    return (
        <div>
            <Breadcrumbs firstCrumb={"Main"} secondCrumb={"Stock"} thirdCrumb={params.id} />
            {!stockList.loading && Object.keys(stockList.stock).length !== 0 ? 
                <div>
                    <Title level={1}>{params.id}</Title>
                    <StockChart 
                        stockInfo={stockList.stock}
                    />
                    <Tabs style={{ marginTop: 16 }} defaultActiveKey="1" type="card" size={"small"}>
                        <TabPane tab="Details" key="1">
                            <StockTickerInfo tickerInfo={stockList.stock.tickerInfo} />
                        </TabPane>
                        <TabPane tab="Calculator" key="2">
                            <StockCalculator 
                                stockInfo={stockList.stock.stockInfo}
                            />
                        </TabPane>
                        <TabPane tab="Contact" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
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

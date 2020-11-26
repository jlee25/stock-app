import React from 'react';
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space } from 'antd';
import './styles/stock-ticker-info.less';

const StockTickerInfo = (props) => {
    const { tickerInfo } = props;  
    const { Title } = Typography;
    console.log(tickerInfo, 'ticker');
    return (
        <div className="ticker-info-container">
            <Space direction="vertical">
                <Title level={4}>{tickerInfo.name} - {tickerInfo.exchangeCode}</Title>
                <p>{tickerInfo.description}</p>
            </Space>
        </div>
    )
}

export default StockTickerInfo

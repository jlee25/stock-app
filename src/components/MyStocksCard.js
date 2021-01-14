import React from 'react';
import StockChart from './StockChart';
import MyStocksDetails from './MyStocksDetails';
import { convertDateTypeToInteger } from "../utils/CommonFunctions";
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space } from 'antd';

const MyStocksCard = (props) => {
    const { list, title, description, url, image, type, id, favourite } = props
    console.log(list, 'listt');
    return (
        <Row style={{ marginBottom: "24px"}}>
            <Col span={12}>
                <StockChart 
                    className="chart-container"
                    selectedDateType={convertDateTypeToInteger(props.selectedDateType)} 
                    stockInfo={list}
                    volume={true}
                />
            </Col>
            <Col span={12}>
                <MyStocksDetails 
                    title={title}
                    tickerInfo={list.tickerInfo}
                    stockInfo={list.details}
                    description={description}
                />
            </Col>
        </Row>
    )
}

export default MyStocksCard

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton, Switch, Card, Avatar, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import StockChart from './StockChart';
import { getStocks, selectStock } from '../features/stockSlice';

const MainContent = () => {
    const dispatch = useDispatch();

    const { Meta } = Card;
    const { Title } = Typography;

    const stock = useSelector(selectStock);

    useEffect(() => {
        dispatch(getStocks());
    }, [])

    console.log(stock);

    return (
        !stock.loading ?
        <div>
          <Title level={2}>Top Stocks</Title>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                hoverable
                cover={<StockChart />}
              >
                <Meta title="AAPLE" description="AAPLE STOCK" />
              </Card>
            </Col>
          </Row>
        </div>
        : <Skeleton loading={stock.loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
      );
}

export default MainContent

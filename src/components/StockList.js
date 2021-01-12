import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StockCard from './StockCard';
import { selectStock, searchStock } from '../features/stockSlice';
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space, Input } from 'antd';

const StockList = (props) => {
    const dispatch = useDispatch();

    const stockList = useSelector(selectStock);

    const { Meta } = Card;
    const { Title } = Typography;

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(searchStock(searchValue));
    }, [searchValue])

    console.log(stockList, 'fewfwe');

    return (
        <div className="stock-list-container">
            <Title level={2}>List of Stocks</Title>
            <Input 
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Stock"
                style={{ marginBottom: "20px", width: "200px" }} 
            />
            <Row>
                {stockList.loading ? 
                    <Spin className="spinner" size="large" />
                :
                stockList.searchStock.length > 0 ?
                    stockList.searchStock.map((stock, index) => {
                        return (
                            <Col key={index} xl={6} md={8} sm={12} xs={24} span={6}>
                                <Space className="stock-card-space" style={{ width: "100%"}} size={4} >
                                    <StockCard 
                                        key={index}
                                        id={stock._id}
                                        type={'search'}
                                        title={stock.ticker ? stock.ticker: ""}
                                        description={stock.exchange ? stock.exchange : ""}
                                        url={stock.ticker ? `/dashboard/stock/${stock.ticker}` : ""}
                                        loading={stockList.loading}
                                        favourite={stock.favourite}
                                        />
                                </Space>
                            </Col>
                        )
                    })
                : 
                <div>There are no search results available. Please try again.</div>
            }
            </Row>
        </div>
    )
}

export default StockList

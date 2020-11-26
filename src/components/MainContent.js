import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { getStocks, selectStock } from '../features/stockSlice';
import StockCard from './StockCard';

const MainContent = () => {
  const dispatch = useDispatch();

  const { Meta } = Card;
  const { Title } = Typography;

  const stockList = useSelector(selectStock);

  const [selectedDate, setSelectedDate] = useState("yearly")
  const [selectedStocks, setSelectedStocks] = useState(["aapl", "msft", "KCE", "VERY"])

  useEffect(() => {
      dispatch(getStocks(selectedDate, selectedStocks));
  }, [selectedDate, selectedStocks])

  const carouselSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="main-stocks">
      <Title level={2}>Top Stocks</Title>
      <div className="stock-card-container">
          <Carousel {...carouselSettings}>
            {stockList.stocks.map((stock, index) => {
              return (
                  <Space className="stock-card-space" size={8} >
                    <StockCard 
                      stockList={stock} 
                      selectedDateType={selectedDate}
                      loading={stockList.loading}
                    />
                  </Space>
              )
            })} 
          </Carousel>
      </div>
    </div>
  );
}

export default MainContent

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Skeleton, Switch, Card, Avatar, Col, Row, Spin, Carousel, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { getStocks, selectStock, getStockNews } from '../features/stockSlice';
import StockCard from './StockCard';
import StockNews from './StockNews';
import './styles/main-content.less';

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

  useEffect(() => {
    dispatch(getStockNews());
  }, [])

  const carouselSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
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

  console.log(stockList, 'stocklisttt');

  return (
    <div className="main-stocks">
      <Title level={2}>Top Stocks</Title>
      <div className="stock-card-container">
        <div>
          <Carousel {...carouselSettings} >
            {stockList.stocks.map((stock, index) => {
              return (
                  <Space className="stock-card-space" size={8} >
                    <StockCard 
                      type={'stock'}
                      list={stock}
                      title={stock.tickerInfo ? stock.tickerInfo.ticker : ""}
                      description={stock.tickerInfo ? stock.tickerInfo.name : ""}
                      url={stock.tickerInfo ? `/dashboard/stock/${stock.tickerInfo.ticker}` : ""}
                      selectedDateType={selectedDate}
                      loading={stockList.loading}
                    />
                  </Space>
              )
            })} 
          </Carousel>
        </div>
      </div>
      <Title style={{marginTop: "20px"}} level={2}>Latest News</Title>
      <div className="stock-card-container">
        <Carousel {...carouselSettings} autoplay={true}>
          {stockList.news.map((article, index) => {
            return (
                <Space className="stock-card-space" size={8} >
                  <StockCard 
                    type={'news'}
                    list={article} 
                    title={article.title ? article.title : ""}
                    description={article.description ? article.description : ""}
                    url={article.url ? article.url : ""}
                    image={article.urlToImage ? article.urlToImage : ""}
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

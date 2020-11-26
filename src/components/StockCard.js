import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Skeleton, Switch, Card, Avatar, Col, Row, Spin } from 'antd';
import StockChart from './StockChart';
import './styles/stock-card.less';
import { convertDateTypeToInteger } from "../utils/CommonFunctions";

const StockCard = (props) => {
  // const { stocks } = props.stockList
  const { Meta } = Card;
  
  return (
      !props.loading ?
      <Card
          cover={
            <StockChart 
              className="chart-container"
              selectedDateType={convertDateTypeToInteger(props.selectedDateType)} 
              stockInfo={props.stockList}
            />
          }
      >
        <Link to={`/dashboard/stock/${props.stockList.tickerInfo.ticker}`}>
          <Meta title={props.stockList.tickerInfo.ticker} description={props.stockList.tickerInfo.name} />
        </Link>
      </Card>
      :
      <Card>
        <Spin className="spinner" size="large" />
        <Skeleton className="skeleton-card" active>
          <Skeleton.Image />
        </Skeleton>
      </Card>
  )
}

export default StockCard

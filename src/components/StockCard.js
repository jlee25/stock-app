import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Skeleton, Switch, Card, Avatar, Col, Row, Spin, Image } from 'antd';
import StockChart from './StockChart';
import './styles/stock-card.less';
import { convertDateTypeToInteger } from "../utils/CommonFunctions";

const StockCard = (props) => {
  const { list, title, description, url, image, type } = props
  const { Meta } = Card;
  
  return (
      !props.loading ?
      <Card
          cover={
            type === "stock" ?
            <StockChart 
              className="chart-container"
              selectedDateType={convertDateTypeToInteger(props.selectedDateType)} 
              stockInfo={list}
            />
            : 
            <Image
              height={250}
              src={image}
              alt={title}
            />
          }
      >
        <a href={url} target={type === "stock" ? "_self" : "_blank"}>
          <Meta title={title} description={description} />
        </a>
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

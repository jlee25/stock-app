import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { updateUserTicker, getStockFavs } from '../features/stockSlice';
import { Skeleton, Switch, Card, Avatar, Col, Row, Spin, Image, Tooltip } from 'antd';
import StockChart from './StockChart';
import './styles/stock-card.less';
import { convertDateTypeToInteger } from "../utils/CommonFunctions";

const StockCard = (props) => {
  const dispatch = useDispatch();
  const { list, title, description, url, image, type, id, favourite } = props
  const { Meta } = Card;

  const cardImage = (type) => {
    if (type === "stock") {
      return (
        <StockChart 
          className="chart-container"
          selectedDateType={convertDateTypeToInteger(props.selectedDateType)} 
          stockInfo={list}
        />
      )
    } else if (type === "news") {
      return (
        <Image
          height={250}
          style={{ objectFit: "cover"}}
          src={image}
          alt={title}
        />
      )
    } else return null
  }

  const updateStockFavs = async (id) => {
    await dispatch(updateUserTicker(id))
    await dispatch(getStockFavs());
  }
  
  return (
      !props.loading ?
      <Card
          cover={cardImage(type)}
      >
        {type === "news" ?
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Meta
              title={title} 
              description={description} 
            />
          </a>
        :
        <div className="card-container">
          {type === "search" ?
            <div className="favourite-icon-container">
                {favourite ?
                <StarFilled onClick={() => updateStockFavs(id, title)} style={{ fontSize: '16px' }} className="favourite-icon" />
                :
                <StarOutlined onClick={() => updateStockFavs(id, title)} style={{ fontSize: '16px' }} className="favourite-icon" />
              }
            </div>
          : null }
          <a href={url} target="_self">
            <div className="ant-card-meta-detail">
                <div className="ant-card-meta-title">{title}</div>
                <div className="ant-card-meta-description">{description}</div>
            </div>
          </a>
        </div>
        }
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

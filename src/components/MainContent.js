import React, { useState, useEffect } from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getStocks } from '../features/stockSlice';

const MainContent = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const { Meta } = Card;

    useEffect(() => {
        dispatch(getStocks());
    }, [])

    return (
        <>
          <Switch checked={!loading} onChange={() => setLoading(!loading) } />
  
          <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
  
          <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </>
      );
}

export default MainContent

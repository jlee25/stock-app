import React from 'react'
import { Row, Col } from 'antd';
import { StockOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Typography } from 'antd';
import './styles/stock-header.less';

const { Title } = Typography;
const { Header } = Layout;

const StockHeader = () => {
    return (
        <Header className="header">
            <Row>
                <Col className="header-column" span={12}>
                    <div className="logo-container">
                        <StockOutlined className="logo" style={{ fontSize: '40px', verticalAlign: "middle", marginRight: "10px" }} />
                        <Title style={{ color: "#1DA57A", marginBottom: "0" }}level={3}>The Stocker</Title>
                    </div>
                </Col>
                <Col span={12} >
                    <Menu className="stock-menu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Light/Dark/Blue Mode</Menu.Item>
                        <Menu.Item key="2">Settings</Menu.Item>
                        <Menu.Item key="3">Logout</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}

export default StockHeader

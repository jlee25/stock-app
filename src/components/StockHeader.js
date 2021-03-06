import React from 'react'
import { withRouter } from 'react-router'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Layout, Menu, Typography } from 'antd';
import { StockOutlined } from '@ant-design/icons';
import { logout } from '../features/authSlice';
import './styles/stock-header.less';

const { Title } = Typography;
const { Header } = Layout;

const StockHeader = (props) => {
    const { history } = props;
    const dispatch = useDispatch();

    return (
        <Header className="header">
            <Row>
                <Col className="header-column" span={12}>
                    <Link to={`/dashboard`}>
                        <div className="logo-container">
                                <StockOutlined className="logo" style={{ fontSize: '40px', verticalAlign: "middle", marginRight: "10px" }} />
                                <Title style={{ color: "#1DA57A", marginBottom: "0" }}level={3}>The Stocker</Title>
                        </div>
                    </Link>
                </Col>
                <Col span={12} >
                    <Menu className="stock-menu" theme="dark" mode="horizontal">
                        <Menu.Item onClick={() => dispatch(logout(history))} key="3">Logout</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}

export default withRouter(StockHeader);

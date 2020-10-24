import React from 'react'
import StockHeader from "./StockHeader";
import SideMenu from './SideMenu';
import Breadcrumbs from './Breadcrumbs';
import MainContent from './MainContent';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Dashboard = (props) => {
    return (
        <Layout>
            <StockHeader />
            <Layout>
                <SideMenu />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumbs />
                    <MainContent />
                    {/* <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    Content
                    </Content> */}
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard

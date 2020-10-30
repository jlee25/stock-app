import React from 'react'
import StockHeader from "./StockHeader";
import SideMenu from './SideMenu';
import Breadcrumbs from './Breadcrumbs';
import MainContent from './MainContent';
import PrivateRoute from '../components/routes/PrivateRoute';
import { Route, Redirect } from "react-router-dom";
import { Layout, Menu } from 'antd';

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
                    {/* ROUTES HERE */}
                        <Route exact path={`/dashboard`} component={MainContent} />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard

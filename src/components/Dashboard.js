import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import StockHeader from "./StockHeader";
import StockDetails from "./StockDetails";
import SideMenu from './SideMenu';
import Breadcrumbs from './Breadcrumbs';
import MainContent from './MainContent';
import PrivateRoute from '../components/routes/PrivateRoute';
import { Route, Redirect } from "react-router-dom";
import { Layout, Menu } from 'antd';

const Dashboard = (props) => {
    return (
        <Layout>
            <StockHeader />
            <Layout>
                <SideMenu />
                <Layout style={{ padding: '24px' }}>
                    {/* ROUTES HERE */}
                    <Route exact path={`/dashboard`} component={MainContent} />
                    <Route exact path={`/dashboard/stock/:id`} component={StockDetails} />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { selectStock } from '../features/stockSlice';
import MyStocks from "./MyStocks";
import StockHeader from "./StockHeader";
import StockDetails from "./StockDetails";
import StockList from "./StockList";
import SideMenu from './SideMenu';
import MainContent from './MainContent';
import { getStockFavs } from '../features/stockSlice';
import PrivateRoute from '../components/routes/PrivateRoute';
import { Route, Redirect } from "react-router-dom";
import { Layout, Menu } from 'antd';

const Dashboard = (props) => {
    const stockList = useSelector(selectStock);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('weee');
        dispatch(getStockFavs());
    }, [stockList.favs])
    return (
        <Layout>
            <StockHeader />
            <Layout>
                <SideMenu />
                <Layout style={{ padding: '24px' }}>
                    {/* ROUTES HERE */}
                    <PrivateRoute exact path={`/dashboard`} component={MainContent} />
                    <PrivateRoute exact path={`/dashboard/my-stocks`} component={MyStocks} />
                    <PrivateRoute exact path={`/dashboard/stock/:id`} component={StockDetails} />
                    <PrivateRoute exact path={`/dashboard/stock-list`} component={StockList} />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard

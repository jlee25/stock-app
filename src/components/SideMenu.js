import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, DashboardOutlined } from '@ant-design/icons';
import "./styles/side-menu.less";


const { SubMenu } = Menu;
const { Sider } = Layout;


const SideMenu = () => {
    return (
        <Sider 
        breakpoint="lg"
        collapsedWidth="0" 
        width={200} 
        className="site-layout-background">
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key={1} icon={<DashboardOutlined />}><Link to="/dashboard">Dashboard</Link></Menu.Item>
                <Menu.Item icon={<UserOutlined />}><Link to="/dashboard/my-stocks">My Stocks</Link></Menu.Item>
                <Menu.Item icon={<LaptopOutlined />}><Link to="/dashboard/stock-list">List of Stocks</Link></Menu.Item>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Settings">
                    <Menu.Item key="9">Personal Info</Menu.Item>
                    <Menu.Item key="10">Theme</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                <Menu.Item icon={<NotificationOutlined />}>Contact</Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideMenu

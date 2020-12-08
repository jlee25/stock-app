import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


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
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Your Stocks">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="List of Stocks">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
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

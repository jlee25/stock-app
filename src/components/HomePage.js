import React from 'react';
import { StockOutlined } from '@ant-design/icons';
import { Row, Col, Input, Form, Button, Typography, Space, Card } from 'antd';
import './styles/homepage.less';

const { Title } = Typography;

const HomePage = () => {

    const onFinish = (values) => {
    console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return (
        <div className="hero-background" type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
            <Row className="container">
                <Col span={24} >
                    <Card className="homepage-card">
                        <Space direction="vertical" size="middle">
                            <Title className="homepage-title" level={1}>Login</Title>
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    className="homepage-label"
                                    label="Username"
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage
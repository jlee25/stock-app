import React from 'react'
import { Breadcrumb } from 'antd';

const Breadcrumbs = (props) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Main</Breadcrumb.Item>
            <Breadcrumb.Item>Stock</Breadcrumb.Item>
            <Breadcrumb.Item>{props.stock ? props.stock : null}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Breadcrumbs

import React from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Breadcrumbs = (props) => {
    return (
        <Breadcrumb style={{ margin: '0 0 16px 0' }}>
            <Breadcrumb.Item><Link to={`/dashboard`}>{props.firstCrumb ? props.firstCrumb : null}</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{props.secondCrumb ? props.secondCrumb : null}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.thirdCrumb ? props.thirdCrumb : null}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Breadcrumbs

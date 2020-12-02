import React from 'react';
import { Form, Input, Button, Select, DatePicker, Space } from 'antd';
const { Option } = Select;

const StockCalculator = () => {
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <DatePicker onChange={onChange} />
            </Form>
        </div>
    )
}

export default StockCalculator

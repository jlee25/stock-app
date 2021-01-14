import React, { useState } from 'react';
import moment from 'moment';
import { Form, Input, Button, Select, DatePicker, Space, InputNumber } from 'antd';
import { calculateProfitLoss } from '../utils/CommonFunctions';

const StockCalculator = (props) => {
    const { stockInfo } = props;
    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;
    
    const [calculatedValue, setCalculatedValue] = useState({
        type: null,
        amount: 0
    });

    const onFinish = values => {
        setCalculatedValue(calculateProfitLoss(values.investmentRange[0].format('x'), values.investmentRange[1].format('x'), values.investmentAmount, stockInfo));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const rangePickerDisabledDate = current => {
        // You cannot choose today or later, you can only choose [Today ~ 90 days forward]. Today is optional.
        let result = false;
        if (current) {
            if (current < moment().subtract(367, "days") || current > moment().subtract(2, "days")) {
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    };

    const investmentResults = (value) => {
        if (calculatedValue.type === "positive") {
            return (
                <div>
                    You would have lost <span>${value}</span>! Maybe you should stop playing with stocks.
                </div>
            )
        } else if (calculatedValue.type === "negative") {
            return (
                <div>
                    You would have gained <span>${value}</span>! Man, you are pretty good with stocks!.
                </div>
            )
        } else {
            return (
                <div>
                    You would have have broke even on this stock! I didn't think this would be possible so I have nothing else to say.
                </div>
            )
        }
    }

    return (
        <div>
            <p>
                Calculate how your investment would have done for this stock!
            </p>
            {!calculatedValue.type ?
            <Form 
                form={form} 
                name="control-hooks" 
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item 
                    label="Investment Range"
                    name="investmentRange"
                    rules={[{ required: true, message: 'Date Required' }]}
                >
                    <RangePicker 
                        disabledDate={rangePickerDisabledDate}
                    />
                </Form.Item>
                <Form.Item 
                    label="Amount to Invest"
                    name="investmentAmount"
                    rules={[{ required: true, message: 'Investment Amount Required' }]}
                >
                    <InputNumber 
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Calculate
                    </Button>
                </Form.Item>
            </Form>
            : 
            <div>
                {investmentResults(calculatedValue.amount)}
            </div>
            }
        </div>
    )
}

export default StockCalculator

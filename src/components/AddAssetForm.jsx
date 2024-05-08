import { Button, DatePicker, Divider, Flex, Form, InputNumber, Select, Space, Typography } from "antd"
import { useState } from "react"
import { useCrypto } from "../context/crypto-context"



export const AddAssetForm = () => {
  const { crypto } = useCrypto()
  const [coin, setCoin] = useState(null)

  if (!coin) {
    return (
      <Select
        style={{
          width: '100%'
        }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder='Select Coin'
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon
        }))}
        optionRender={(option) => (
          <Space>
            <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} /> {option.data.label}
          </Space>
        )}
      />
    )
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <form>
      <Flex align='center'>
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: '40px', marginRight: '10px' }}
        />
        <Typography.Title level={2} style={{ margin: 0 }}>
          {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
              message: 'Please input your username!',
            },
          ]}
        >
          <InputNumber style={{width: '100%'}} />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
        >
          <InputNumber disabled style={{width: '100%'}} />
        </Form.Item>

        <Form.Item
          label="Date & Time"
          name="date"
        >
          <DatePicker showTime />
        </Form.Item>
        <Form.Item
          label="Total"
          name="total"
        >
          <InputNumber disabled style={{width: '100%'}} />
        </Form.Item>
        

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Asset
          </Button>
        </Form.Item>
      </Form>
    </form>
  )
}
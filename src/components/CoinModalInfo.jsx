import { Divider, Flex, Tag, Typography } from 'antd'

export const CoinModalInfo = ({ coin }) => {
  return (
    <>

      <Flex align='center'>
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: '40px', marginRight: '10px' }}
        />
        <Typography.Title level={2} style={{ margin: 0 }}>
          ({coin.symbol}){coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h }%</Tag>
        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d }%</Tag>
        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w }%</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        <Tag color={coin.price > 0 ? 'green' : 'red'}>{coin.price.toFixed(2)}$</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price BTC: </Typography.Text>
        <Tag color={coin.priceBtc > 0 ? 'green' : 'red'}>{coin.priceBtc}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
        <Tag color={coin.marketCap > 0 ? 'green' : 'red'}>{coin.marketCap}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Contract Address: </Typography.Text>
        {coin.contractAddress}
      </Typography.Paragraph>
    </>
  )
}
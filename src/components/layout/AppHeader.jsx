import { Button, Layout, Select, Space, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { useEffect, useState} from 'react';
import { CoinModalInfo } from '../CoinModalInfo';
import { AddAssetForm } from '../AddAssetForm';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export const AppHeader = () => {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false)
    const [coin, setCoin] = useState(null)
    const [drawer, setDrawer] = useState(false)
    useEffect(() => {
        const keypress = event => {
            if (event.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])

    const { crypto } = useCrypto()

    function handleSelect (value) {
        setCoin(crypto.find((c) => c.id === value))
        setModal(true)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: 250
                }}
                onSelect={handleSelect}
                open={select}
                onClick={() => setSelect((prev) => !prev)}
                value='press / to open'
                options={crypto.map((coin) => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon
                }))}
                optionRender={(option) => (
                    <Space>
                        <img style={{width: 20}} src={option.data.icon} alt={option.data.label} /> {option.data.label}
                    </Space>
                )}
            />
            <Button onClick={() => setDrawer(true)} type='primary'>Add Assets</Button>

            <Modal
                open={modal}
                onCancel={() => setModal(false)}
                footer={null}
            >
                <CoinModalInfo coin={coin} />
            </Modal>
            <Drawer
                title="Add Asset"
                onClose={() => setDrawer(false)}
                open={drawer}
                width={600}
                destroyOnClose
            >
                <AddAssetForm />
            </Drawer>
        </Layout.Header>
    )
}
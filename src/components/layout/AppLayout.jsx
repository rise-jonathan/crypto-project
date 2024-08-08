import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

const layoutStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

export default function AppLayout() {
    const { loading } = useContext(CryptoContext)

    if (loading) {
        return <Spin fullscreen />
    }

    return (
        <Layout style={layoutStyle}>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
        </Layout>
    )
}
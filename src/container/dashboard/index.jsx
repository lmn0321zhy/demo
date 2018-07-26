import React from "react"
import { Layout } from 'antd';
import SiderMenu from "components/sider-menu";
import GlobalHeader from "components/global-header";
import styles from './index.less';
const { Header, Footer, Sider, Content } = Layout;

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        console.log(props, "Clock")
        this.state = {
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className={styles.container}>
                <Layout style={{ height: '100%' }}>
                    <SiderMenu collapsed={false} />
                    <Layout>
                        <GlobalHeader>Header</GlobalHeader>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
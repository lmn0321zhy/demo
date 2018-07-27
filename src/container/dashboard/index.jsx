import React from "react"
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import SiderMenu from "components/sider-menu";
import GlobalHeader from "components/global-header";
import NotFound from 'container/404'
import styles from './index.less';

const { Content } = Layout;

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
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
                        <GlobalHeader />
                        <Content>
                            <Switch>
                                <Route exact path="/notFound" component={NotFound} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

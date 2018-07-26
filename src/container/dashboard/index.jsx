import React from "react"
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import SiderMenu from "components/sider-menu";
import GlobalHeader from "components/global-header";
import NotFound from 'container/404'
import styles from './index.less';
import { login } from 'action'
import { connect } from 'react-redux';

const { Content } = Layout;

class Dashboard extends React.Component {
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
                    {/* {JSON.stringify(this.props.user)} */}
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
const mapStateToProps = (state, ownProps) => {
    console.log('state', state)
    return {
        loading: state.login.loading,
        user: state.login.user,
        error: state.login.error
    }
};
const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
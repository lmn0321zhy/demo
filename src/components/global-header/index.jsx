import React, { PureComponent } from 'react';
import { Row, Col, Layout, Icon, Badge, Button } from 'antd';
import styles from './index.less'
import moment from 'moment';

const { Header } = Layout;

export default class GlobalHeader extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({ activeKey: nextProps.activeKey || 0 });
    }

    render() {
        return (
            <Header className={styles.globalheaderContainer}>
                <Row>
                    <Col span={8} className='center'></Col>
                    <Col span={8} className='center' style={{ fontSize: '15px' }}>{moment().format('YYYY年MM月DD日 dddd')}</Col>
                    <Col span={8}>
                        <div className={styles.col}>
                            <Badge count={10}>
                                <Icon style={{ fontSize: '25px' }} type="notification" />
                            </Badge>
                            <Button style={{ padding: '0 0 0 10px' }} type="primary" icon="logout" size='large' />
                        </div>
                    </Col>
                </Row>
            </Header>
        )
    }
}

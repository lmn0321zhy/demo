import React, { Component } from "react"
import { Button } from 'antd';
import styles from './index.less'
import httpServer from 'api/httpServer'

export default class Home extends Component {

    hanleclick = () => {
        httpServer.post('mock/demo.json', {}, (data) => {
            console.log(data)
        })
    }
    render() {
        return <div className={styles.demo}>
            {/* <h1>1111</h1> */}
            <Button type='primary' onClick={() => this.hanleclick()}>1232</Button>
        </div>

    }
}
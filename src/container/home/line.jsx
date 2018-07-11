import createG2 from 'g2-react';
import React, { Component } from 'react';
import data from './data.json';

const Line = createG2(function (chart) {
    chart.line().position('time*price').color('name').shape('spline').size(2);
    chart.render();
});

export default class Line2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.slice(0, data.length / 2 - 1),
            width: 800,
            height: 450,
            plotCfg: {
                margin: [10, 100, 50, 120],
            },
        }
    }

    changeHandler = () => {
        this.setState({
            data: data.slice(data.length / 2, data.length - 1),
        });
    }

    render() {
        return (
            <div>
                <Line
                    data={this.state.data}
                    width={this.state.width}
                    height={this.state.height}
                    plotCfg={this.state.plotCfg}
                />
                <button onClick={this.changeHandler}>Change Data</button>
            </div>
        );
    }
}
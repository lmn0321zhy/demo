
import React, { Component } from 'react';
import Line2 from './line';
import Pie20 from './pie20';
import UserFrame from './higherWrapper';
import HigherChart from './use-frame';
import ViserDemo from './ViserDemo';
import Demo1 from './g2-plugin-slider';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Line2 />
                <Pie20 />
                <UserFrame />
                <HigherChart />
                <ViserDemo />
                {/* <Demo1 /> */}
            </div>);
    }
}
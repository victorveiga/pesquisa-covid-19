import React, {Component} from 'react';
import {QUESTIONS_LIST} from '../../constants';
import './index.css';

export default class RadialProgressBar extends Component {
    render(){
        const INDEX = this.props.question_idx;
        const PERCENTUAL = Math.trunc((INDEX / (QUESTIONS_LIST.length)) * 100);
        const GRAUS = (360 * PERCENTUAL) / 100;
        return <>
            <div className="set-size charts-container">                
                <div className="pie-wrapper style-2">
                    <span className="label">{PERCENTUAL}<span className="smaller">%</span></span>
                    <div className="pie" style={PERCENTUAL > 50 ? {clip: 'rect(auto, auto, auto, auto)'} : {clip: 'clip: rect(0, 1em, 1em, 0.5em)'}}>
                        <div className="half-circle" style={{transform: `rotate(${GRAUS}deg)`}}></div>
                        <div className="half-circle" style={{transform: `rotate(${PERCENTUAL > 50 ? 180 : GRAUS}deg)`}}></div>
                    </div>
                    <div className="shadow" />
                </div>                                
            </div>
        </>
    }
}
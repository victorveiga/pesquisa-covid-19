import React, {Component} from 'react';
import './index.css';

export default class RadialProgressBar extends Component {
    render(){
        return <>
            <div className="set-size charts-container">                
                <div className="pie-wrapper progress-45 style-2">
                    <span className="label">45<span className="smaller">%</span></span>
                    <div className="pie">
                        <div className="left-side half-circle"></div>
                        <div className="right-side half-circle"></div>
                    </div>
                    <div className="shadow" />
                </div>                                
            </div>
        </>
    }
}
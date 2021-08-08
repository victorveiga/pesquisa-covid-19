import {Component} from 'react';

export default class BaseField extends Component {
    getValue(fieldname){
        return this.props.form.state[fieldname];
    }

    handleChange(e, fieldname){
        const value = e.target.value;
        const obj = {};
        obj[fieldname] = value;
        this.props.form.setState(obj);
    }
}
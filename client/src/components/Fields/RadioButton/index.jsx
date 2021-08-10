import BaseField from "../BaseField";
import './index.css';

export default class RadioButton extends BaseField {
    render(){
        return <>
            <div style={{color: '#3c454c'}}>{this.props.label}</div>            
            {this.props.options && this.props.options.map((item,index) => <div className="inputGroup">
                <input 
                    id={`radio${index}`}
                    name={`radio`}
                    type="radio"
                    value={item.value}
                    checked={item.value === this.getValue(this.props.field)}
                    onChange={e => this.handleChange(e, this.props.field)}
                />
                <label htmlFor={`radio${index}`}>{item.description}</label>
            </div>)}
        </>
    }
}
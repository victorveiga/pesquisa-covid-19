import BaseField from "../BaseField";
import './index.css';

export default class Checkbox extends BaseField {

    handleChange(e, fieldname){
        const value     = e.target.value;
        const value_old = this.getValue(fieldname);
        const obj       = {};

        obj[fieldname] = []
        if (value_old && value_old.length > 0){            
            obj[fieldname] = value_old;
            if (obj[fieldname].indexOf(value.toString()) >= 0){
                obj[fieldname].splice(obj[fieldname].indexOf(value.toString()),1);
                this.props.form.setState(obj);
                return ;
            }
        }
                
        obj[fieldname].push(value);
        this.props.form.setState(obj);
    }

    render(){
        return <>
            <div style={{color: '#3c454c'}}>{this.props.label}</div>            
            {this.props.options && this.props.options.map((item,index) => <div className="inputGroup2">
                <input 
                    id={`radio${index}`}
                    name={`radio`}
                    type="checkbox"
                    value={item.value}
                    checked={this.getValue(this.props.field) && this.getValue(this.props.field).indexOf(item.value) >= 0 ? true : false}
                    onChange={e => this.handleChange(e, this.props.field)}
                />
                <label htmlFor={`radio${index}`}>{item.description}</label>
            </div>)}
        </>
    }
}
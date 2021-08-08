import BaseField from "../BaseField";
import { Form } from 'react-bootstrap';

export default class SelectField extends BaseField {
    render(){
        return <>
            <Form.Group controlId={this.props.controlId}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control 
                    as="select" 
                    value={this.getValue(this.props.field)}
                    onChange={e => this.handleChange(e, this.props.field)}
                    custom 
                    required
                >
                    <option value="">Escolher...</option>
                    {this.props.options && this.props.options.map( item => <option value={item.value}>{item.description}</option>)}
                </Form.Control>
                {this.props.feedback_invalid && <Form.Control.Feedback type="invalid">
                    {this.props.feedback_invalid}
                </Form.Control.Feedback>}
                {this.props.feedback_valid && <Form.Control.Feedback type="valid">
                    {this.props.feedback_valid}
                </Form.Control.Feedback>}
            </Form.Group>
        </>
    }
}
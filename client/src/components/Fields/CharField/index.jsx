import BaseField from "../BaseField";
import { Form } from 'react-bootstrap';

export default class CharField extends BaseField {
    render(){
        return <>
            <Form.Group className="mb-3" controlId={this.props.controlId}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder={this.props.placeholder} 
                    value={this.getValue(this.props.field)}
                    onChange={e => this.handleChange(e, this.props.field)}
                    required
                    {...this.props}
                />
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
import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../Fields/Checkbox';

export default class AppsUtilizados2 extends Component {
    render(){
        return <div>                
            <Checkbox
                form={this.props.form}
                label="Quais aplicativos ou software você utiliza? (Pode escolher mais de uma opção)"
                options={[
                    {value: "6" , description: "Twitter"},
                    {value: "7" , description: "Vimeo"},
                    {value: "8" , description: "Whatsapp"},
                    {value: "9" , description: "Netflix"},
                    {value: "10", description: "Amazon Prime Video"},
                ]}
                field="apps_utilizados"
            />
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
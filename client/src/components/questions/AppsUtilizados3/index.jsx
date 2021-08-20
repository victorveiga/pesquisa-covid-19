import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../Fields/Checkbox';

export default class AppsUtilizados3 extends Component {
    render(){
        return <div>                
            <Checkbox
                form={this.props.form}
                label="Quais aplicativos ou software você utiliza? (Pode escolher mais de uma opção)"
                options={[
                    {value: "11", description: "Disney+"},
                    {value: "12", description: "Globoplay"},
                    {value: "13", description: "Paramount+"},
                    {value: "14", description: "Telegram"},
                    {value: "15", description: "Instagram"},
                ]}
                field="apps_utilizados"
            />
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
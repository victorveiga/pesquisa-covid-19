import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class UtilizouVirtualidade extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Durante a pandemia do novo coronavírus você utilizou a virtualidade para substituir alguma de suas atividades cotidianas?"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"}
                ]}
                field="utilizou_virtualidade"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
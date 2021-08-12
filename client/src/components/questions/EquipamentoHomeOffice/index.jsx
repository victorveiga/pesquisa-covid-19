import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class EquipamentoHomeOffice extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Você possui os equipamentos necessários para trabalhar em home office?"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"}
                ]}
                field="equipamento_home_office"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
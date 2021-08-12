import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class SatisfacaoTelefone extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Conte-nos se você ficou satisfeito com os serviços prestados pela companhia de telefone"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"},
                    {value: "O", description: "Não fiz o uso desse serviço"},
                ]}
                field="sat_serv_tel"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
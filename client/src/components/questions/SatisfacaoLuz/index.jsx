import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class SatisfacaoLuz extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Conte-nos se você ficou satisfeito com os serviços prestados por aplicativos da companhia de Luz"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"},
                    {value: "O", description: "Não fiz o uso desse serviço"},
                ]}
                field="sat_serv_luz"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class ContatarSuporteApp extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Você precisou contatar o suporte ao usuário de algum software, aplicativo ou sistema que você fez uso?"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"}
                ]}
                field="contatar_suporte_app"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
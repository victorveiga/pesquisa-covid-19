import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';
import { CharField } from '../../Fields';

export default class DispositivoUsado extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Qual dispositivo que você mais utilizada para navegar na internet? (Tarefas cotidianas, redes sociais e trabalho)"
                options={[
                    {value: "1", description: "Celular ou Smartphone"},
                    {value: "2", description: "Computador ou notebook"},
                    {value: "3", description: "Tablet"},
                    {value: "4", description: "Outro"},
                ]}
                field="dispositivo_usado"
                specific_field_value="4"
            />
            {this.props.form.state.dispositivo_usado && this.props.form.state.dispositivo_usado === "4" && <CharField                 
                form={this.props.form}
                label="Especificar o dispositivo utilizado para se conectar a internet"
                placeholder="Especifique o dispositivo"
                field="dispositivo_usado_espec"
                required={this.props.form.state.dispositivo_usado && this.props.form.state.dispositivo_usado === "4" ? true : false}
                feedback_invalid="Por favor, especifique o dispositivo utilizado para navegar na internet"
            />}
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
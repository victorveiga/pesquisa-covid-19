import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class DificuldadeUsoApp extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Você teve dificuldades em utilizar aplicativos/software/sistemas durante o período de confinamento?"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"}
                ]}
                field="dificuldade_uso_app"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class TrocouPerfilUsuario extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Você precisou trocar o perfil de usuário da internet, durante o confinamento?"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"}
                ]}
                field="trocou_perfil_usuario"
            />
            <Form.Text className="text-muted">
                Informe uma opção acima
            </Form.Text>
        </div>
    }
}
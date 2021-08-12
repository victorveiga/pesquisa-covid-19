import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class TipoUsuario extends Component {
    render(){
        return <div>                
            <RadioButton 
                form={this.props.form}
                label="Qual o seu perfil de usuário da internet?"
                options={[
                    {value: "1", description: "Perfil de usuário iniciante, não possui uma boa familiaridade com o acesso à internet"},
                    {value: "2", description: "Perfil de usuário intermediário (velocidade de conexão (até 200 mega) para fazer downloads e uploads que requerem uma melhor conexão"},
                    {value: "3", description: "Perfil de usuário completo internet rápida ou ultrarrápida para gaming, videoconferências com pessoas de outros países e outros serviços digitais inclusos, como plataformas streaming"}
                ]}
                field="tipo_usuario"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
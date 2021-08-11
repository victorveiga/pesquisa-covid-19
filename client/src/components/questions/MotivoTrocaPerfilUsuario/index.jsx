import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class MotivoTrocaPerfilUsuario extends Component {
    render(){
        return <div> 
            {this.props.form.state.trocou_perfil_usuario && this.props.form.state.trocou_perfil_usuario === "S" &&
            <RadioButton
                form={this.props.form}
                label="Caso tenha respondido “sim” na pergunta anterior, indique o motivo? (você pode responder mais de uma)"
                options={[
                    {value: "1", description: "Devido ao número de pessoas precisando utilizar a internet em casa"},
                    {value: "2", description: "Devido a necessidade de lazer (assistir filmes, games, Tv etc.)"},
                    {value: "3", description: "Devido ao serviço de home office"},
                    {value: "4", description: "Devido ao serviço de home office e utilização do Ambiente Virtual de Aprendizagem (AVA)"},
                    {value: "5", description: "Devido a utilização do Ambiente Virtual de Aprendizagem (AVA)"},
                    {value: "6", description: "Outra"},
                ]}
                field="motivo_troca_usuario"
            />}
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
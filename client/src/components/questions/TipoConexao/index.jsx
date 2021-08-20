import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { CharField } from '../../Fields';
import RadioButton from '../../Fields/RadioButton';

export default class TipoConexao extends Component {
    render(){
        return <div>                
            <RadioButton 
                form={this.props.form}
                label="Qual a sua conexão de internet?"
                options={[
                    {value: "1", description: "Banda larga (residencial ou corporativa)"},
                    {value: "2", description: "Internet móvel 3G/4G"},
                    {value: "3", description: "Internet via satélite"},
                    {value: "4", description: "Não sei indicar"},
                    {value: "5", description: "Outro (Especificar)"}
                ]}
                field="tipo_conexao"
                specific_field_value="5"
            />
            {this.props.form.state.tipo_conexao && this.props.form.state.tipo_conexao === "5" && <CharField 
                controlId="edtTipoConexao"
                form={this.props.form}
                label="Especificar a conexão sua conexão com a internet"
                placeholder="Escreva aqui"
                field="tipo_conexao_espec"
                required={this.props.form.state.tipo_conexao && this.props.form.state.tipo_conexao === "5" ? true : false}
                feedback_invalid="Por favor, especifique a conexão da sua conexão internet"
            />}
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
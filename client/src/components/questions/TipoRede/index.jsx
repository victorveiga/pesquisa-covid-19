import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class TipoRede extends Component {
    render(){
        return <div>                
            <RadioButton 
                form={this.props.form}
                label="Tipo da rede que você costuma se conectar."
                options={[
                    {value: "1", description: "Rede pública (faculdade, hospital, rodoviária, shopping)"},
                    {value: "2", description: "Rede privada (redes empresariais e de segurança governamental)"},
                    {value: "3", description: "Rede doméstica (redes fornecidas diretamente por provedores de internet)"}
                ]}
                field="tipo_rede"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
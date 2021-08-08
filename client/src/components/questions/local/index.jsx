import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import {CharField, SelectField} from '../../Fields/';
import { UNIDADES_FEDERATIVAS } from '../../../constants';

export default class Local extends Component {
    render(){
        return <>
            <div>
                <CharField 
                    controlId="edtBairro"
                    form={this.props.form}
                    label="Bairro"
                    placeholder="Informe o bairro que você mora"
                    field="bairro"
                    feedback_invalid="Por favor, informe seu bairro para continuarmos"
                />
                <CharField 
                    controlId="edtCidade"
                    form={this.props.form}
                    label="Cidade"
                    placeholder="Informe a cidade que você mora"
                    field="cidade"
                    feedback_invalid="Por favor, informe sua cidade para continuarmos"
                    feedback_valid="Que cidade legal!"
                />
                <SelectField 
                    controlId="slcUF"
                    form={this.props.form}
                    label="Selecione o seu estado"
                    field="uf"
                    feedback_invalid="Por favor, informe seu estado para continuarmos"
                    options={UNIDADES_FEDERATIVAS}
                />
                <Form.Text className="text-muted">
                    Preencha as informações de onde você vive e clique no botão Continuar
                </Form.Text>
            </div>
        </>
    }
}
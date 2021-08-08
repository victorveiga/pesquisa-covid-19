import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { SelectField } from '../../Fields';

export default class Pessoal_2 extends Component {
    render(){
        return <div>
                <SelectField 
                    controlId="edtCor"
                    form={this.props.form}
                    label="Com que cor você se identifica?"
                    field="cor"
                    feedback_invalid="Por favor, selecione a cor com que você se identifica"
                    options={[
                        {value: "B", description: "Branca"}, 
                        {value: "P", description: "Parda"}, 
                        {value: "N", description: "Preta"},
                        {value: "A", description: "Amarela"}
                    ]}
                />
                <SelectField 
                    controlId="edtRelacionamento"
                    form={this.props.form}
                    label="Qual é o seu estado civil?"
                    field="relacionamento"
                    feedback_invalid="Por favor, selecione o seu estado civil"
                    options={[
                        {value: "S", description: "Solteiro(a)"}, 
                        {value: "C", description: "Casado(a) ou união estável"}, 
                        {value: "D", description: "Desquitado(a(), separado(a) judicialmente ou divorciado(a)"},
                        {value: "V", description: "Viúvo(a)"}
                    ]}
                />
                <Form.Text className="text-muted">
                    Preencha as informações pessoais acima e clique no botão Continuar
                </Form.Text>
        </div>
    }
}
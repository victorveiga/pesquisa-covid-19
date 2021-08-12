import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { SelectField, CharField } from '../../Fields';

export default class EstudoTrabalho extends Component {
    render(){
        return <div>
                <SelectField 
                    controlId="edtEstudo"
                    form={this.props.form}
                    label="Qual é o seu nível máximo de estudos concluídos?"
                    field="instrucao"
                    feedback_invalid="Por favor, selecione o seu nível máximo de estudos"
                    options={[
                        {value: "1", description: "Ensino fundamental"}, 
                        {value: "2", description: "Ensino médio"}, 
                        {value: "3", description: "Ensino técnico"},
                        {value: "4", description: "Ensino superior"},
                        {value: "5", description: "Pós-graduação (especialização, mestrado ou doutorado)"},
                        {value: "6", description: "Não sabe"},
                        {value: "7", description: "Outro"}
                    ]}
                />
                {this.props.form.state.instrucao && this.props.form.state.instrucao === "7" && <CharField 
                    controlId="edtEstudoEspecificar"
                    form={this.props.form}
                    label="Especificar os estudos"
                    placeholder="Escreva aqui"
                    field="instrucao_outro"
                    required={this.props.form.state.instrucao && this.props.form.state.instrucao === "7" ? true : false}
                    feedback_invalid="Por favor, especifique o nível dos seus estudos"
                />}
                <SelectField
                    controlId="edtTrabalho"
                    form={this.props.form}
                    label="Qual é a sua situação de trabalho/estudo?"
                    field="trabalho_estudo"
                    feedback_invalid="Por favor, selecione a sua situação de trabalho/estudo"
                    options={[
                        {value: "1", description: "Estudante e empregado com carteira assinada"}, 
                        {value: "2", description: "Dona(o) de casa ou cuidador(a) de pessoas dependentes"}, 
                        {value: "3", description: "Empregado com contrato temporário"},
                        {value: "4", description: "Empregado com carteira assinada"},
                        {value: "5", description: "Empregador"},
                        {value: "6", description: "Outro"}
                    ]}
                />
                {this.props.form.state.trabalho_estudo && this.props.form.state.trabalho_estudo === "6" && <CharField 
                    controlId="edtTrabalhoEspecificar"
                    form={this.props.form}
                    label="Especificar a situação de trabalho/estudo"
                    placeholder="Especifique o seu nível de estudos"
                    field="trabalho_estudo_outro"
                    required={this.props.form.state.trabalho_estudo && this.props.form.state.trabalho_estudo === "6" ? true : false}
                    feedback_invalid="Por favor, especifique a situação de trabalho/estudo"
                />}
                <Form.Text className="text-muted">
                    Preencha as informações pessoais acima e clique no botão Continuar
                </Form.Text>
        </div>
    }
}
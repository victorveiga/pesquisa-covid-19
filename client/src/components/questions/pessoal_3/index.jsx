import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { SelectField, CharField } from '../../Fields';

export default class Pessoal_3 extends Component {
    render(){
        return <div>
                <SelectField 
                    controlId="edtFuncao"
                    form={this.props.form}
                    label="Indique sua função principal na comunidade do UNIFESO (considere o maior número de horas na atividade desenvolvida)"
                    field="funcao_unifeso"
                    feedback_invalid="Por favor, selecione a sua função na comunidade UNIFESO"
                    options={[
                        {value: "1", description: "Estudante de curso de graduação"}, 
                        {value: "2", description: "Estudante de curso de pós-graduação/residência"}, 
                        {value: "3", description: "Docente"},
                        {value: "4", description: "Profissional de saúde"},
                        {value: "5", description: "Função administrativa"},
                        {value: "6", description: "Serviços gerais"},
                        {value: "7", description: "Outra"},
                    ]}
                />
                {this.props.form.state.funcao_unifeso && this.props.form.state.funcao_unifeso === "7" && <CharField 
                    controlId="edtFuncaoEspecificar"
                    form={this.props.form}
                    label="Especificar a função"
                    placeholder="Especifique sua função na comunidade UNIFESO"
                    field="funcao_unifeso_espec"
                    required={this.props.form.state.funcao_unifeso && this.props.form.state.funcao_unifeso === "7" ? true : false}
                    feedback_invalid="Por favor, especifique sua função na comunidade"
                />}
                <SelectField 
                    controlId="edtCaracteristicasMoradia"
                    form={this.props.form}
                    label="A casa/apartamento em que você esteve confinado tinha alguma das seguintes características?"
                    field="moradia_caracteristicas"
                    feedback_invalid="Por favor, selecione a característica do imóvel em que você esteve confinado durante o período mais restritivo da pandemia"
                    options={[
                        {value: "1", description: "Varanda ou terraço "}, 
                        {value: "2", description: "Jardim privado"}, 
                        {value: "3", description: "Outras áreas externas"},
                        {value: "4", description: "Nenhum espaço exterior"}
                    ]}
                />
                <SelectField
                    controlId="edtResidenciaAdequada"
                    form={this.props.form}
                    label="Você acha que sua residência foi adequada para enfrentar o confinamento? (quanto a espaço, luz, número de quartos, etc.) "
                    field="residencia_adequada"
                    feedback_invalid="Por favor, selecione a opção acima"
                    options={[
                        {value: "1", description: "Nada"}, 
                        {value: "2", description: "Um pouco"}, 
                        {value: "3", description: "Moderadamente"},
                        {value: "4", description: "Bastante"},
                        {value: "5", description: "Muito"},
                    ]}
                /> 
                <Form.Text className="text-muted">
                    Preencha as informações pessoais acima e clique no botão Continuar
                </Form.Text>
        </div>
    }
}
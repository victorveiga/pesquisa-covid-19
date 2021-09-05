import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../Fields/Checkbox';
import { CharField } from '../../Fields';

export default class VirtualAtividadeMotivo extends Component {

    componentDidMount(){
        if (this.props.form.state.utilizou_virtualidade && this.props.form.state.utilizou_virtualidade === "S"){
            this.props.form.addExceptionIndice(this.props.form.state.question_idx);
            this.props.form.nextQuestion();
        }
    }

    render(){
        return <div>      
            {this.props.form.state.utilizou_virtualidade && this.props.form.state.utilizou_virtualidade === "N" &&
            <Checkbox
                form={this.props.form}
                label="Caso tenha respondido NÃO, assinale o(s) motivo(s) que identificados por você (pode marcar mais de um)"
                options={[                                         
                    {value: "1", description: "Trabalho em unidade de saúde"},
                    {value: "2", description: "Não achei necessário substituir nenhuma atividade cotidiana"},
                    {value: "3", description: "Minha atividade não pode ser exercida de modo online"},
                    {value: "4", description: "Outro"},
                ]}
                field="virtual_atividade_motivo"
                specific_field_value="4"
            />}
            {this.props.form.state.virtual_atividade_motivo && this.props.form.state.virtual_atividade_motivo.indexOf("4") >= 0 && <CharField 
                controlId="edtVirtualAtividadeMotivoEspec"
                form={this.props.form}
                label="Especificar motivos de não ter utilizado da virtualidade para substituir alguma atividade"
                placeholder="Escreva aqui"
                field="virtual_at_motivo_espec"
                feedback_invalid="Por favor, especifique o motivo"
            />}
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
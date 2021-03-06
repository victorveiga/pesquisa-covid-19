import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { CharField, Checkbox } from '../../Fields';

export default class VirtualAtividade extends Component {

    componentDidMount(){
        if (this.props.form.state.utilizou_virtualidade && this.props.form.state.utilizou_virtualidade === "N"){
            this.props.form.addExceptionIndice(this.props.form.state.question_idx);
            this.props.form.nextQuestion();
        }
    }

    render(){
        return <div>      
            {this.props.form.state.utilizou_virtualidade && this.props.form.state.utilizou_virtualidade === "S" &&
            <Checkbox
                form={this.props.form}
                label="Caso tenha respondido SIM, assinale a(s) atividade(s) desenvolvida(s) por você  (pode marcar mais de uma)"
                options={[                    
                    {value: "1", description: "Estudar/realizar atividades referentes apenas ao curso de graduação"},
                    {value: "2", description: "Estudar para qualificação profissional"},
                    {value: "3", description: "Trabalhar na modalidade online (home office)"},
                    {value: "4", description: "Fazer compras (supermercado/farmácia/padaria/vestuário)"},
                    {value: "5", description: "Pagar contas online (água/luz/telefone/condomínio)"},
                    {value: "6", description: "Outra"},
                ]}
                field="virtual_atividade"
                specific_field_value="6"
            />}
            {this.props.form.state.virtual_atividade && this.props.form.state.virtual_atividade.indexOf("6") >= 0 && <CharField 
                controlId="edtVirtualAtividadeEspec"
                form={this.props.form}
                label="Especificar atividades desenvolvidas por você"
                placeholder="Escreva aqui"
                field="virtual_atividade_espec"
                feedback_invalid="Por favor, especifique as atividades"
            />}
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { DateField, CharField, SelectField } from '../../Fields';

export default class Pessoal extends Component {
    render(){
        return <div>
                <DateField 
                    controlId="edtNascimento"
                    form={this.props.form}
                    label="Data de nascimento"
                    placeholder="Informe sua data de nascimento"
                    field="nascimento"
                    feedback_invalid="Por favor, informe sua data de nascimento para continuarmos"
                />
                <SelectField 
                    controlId="edtGenero"
                    form={this.props.form}
                    label="Com que gênero você se identifica?"
                    field="genero"
                    feedback_invalid="Por favor, selecione o gênero que você se identifica"
                    options={[{value: "M", description: "Masculino"}, {value: "F", description: "Feminino"}, {value: "O", description: "Outro"}]}
                />
                
                {this.props.form.state.genero && this.props.form.state.genero === "O" && <CharField 
                    controlId="edtGeneroEspecificar"
                    form={this.props.form}
                    label="Especificar o gênero"
                    placeholder="Especifique o seu gênero"
                    field="genero_outro"
                    required={this.props.form.state.genero && this.props.form.state.genero === "O" ? true : false}
                />}
                <Form.Text className="text-muted">
                    Preencha as informações pessoais acima e clique no botão Continuar
                </Form.Text>
        </div>
    }
}
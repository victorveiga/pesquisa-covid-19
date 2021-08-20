import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';
import { CharField } from '../../Fields';

export default class ObstaculoEquipamento extends Component {
    render(){
        return <div>      
            {this.props.form.state.equipamento_home_office && this.props.form.state.equipamento_home_office === "N" &&
            <RadioButton
                form={this.props.form}
                label="Se não, quais são os obstáculos?"
                options={[
                    {value: "1", description: "Falta de equipamentos (Computadores / notebooks)"},
                    {value: "2", description: "Falta de uma conexão à internet estável"},
                    {value: "3", description: "Falta de recursos financeiros"},
                    {value: "4", description: "Outro"},
                ]}
                field="obstaculo_equipamento"
                specific_field_value="4"
            />}
            {this.props.form.state.obstaculo_equipamento && this.props.form.state.obstaculo_equipamento === "4" && <CharField 
                controlId="edtObstaculoEquipEspec"
                form={this.props.form}
                label="Especificar outros obtáculos do motivo da falta de equipamentos"
                placeholder="Escreva aqui"
                field="obstaculo_equip_espec"
                required={this.props.form.state.obstaculo_equipamento && this.props.form.state.obstaculo_equipamento === "4" ? true : false}
                feedback_invalid="Por favor, especifique os obtáculos"
            />}
            <Form.Text className="text-muted">
                Escolha uma da opções acima
            </Form.Text>
        </div>
    }
}
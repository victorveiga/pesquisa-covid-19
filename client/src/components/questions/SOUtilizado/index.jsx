import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';
import { CharField } from '../../Fields';

export default class SOUtilizado extends Component {
    render(){
        return <div>                  
            <RadioButton
                form={this.props.form}
                label="Quais os sistemas operacionais que você mais utiliza?"
                options={[                    
                    {value: "1", description: "Windows"},
                    {value: "2", description: "Distribuição Linux"},
                    {value: "3", description: "Mac OS"},
                    {value: "4", description: "iOS"},
                    {value: "5", description: "Android"},
                    {value: "6", description: "Não sei especificar"},
                    {value: "7", description: "Outro"},
                ]}
                field="so_utilizado"
            />
            {this.props.form.state.so_utilizado && this.props.form.state.so_utilizado === "7" && <CharField 
                controlId="edtSOUtilizadoEspec"
                form={this.props.form}
                label="Especificar outro sistema operacional"
                placeholder="Especifique aqui o sistema operacional que você utilizou"
                field="so_utilizado_espec"
                required={this.props.form.state.so_utilizado && this.props.form.state.so_utilizado === "7" ? true : false}
                feedback_invalid="Por favor, especifique o sistema operacional"
            />}
            <Form.Text className="text-muted">
                Escolha uma da opções acima
            </Form.Text>
        </div>
    }
}
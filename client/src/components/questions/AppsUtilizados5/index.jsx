import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../Fields/Checkbox';

export default class AppsUtilizados5 extends Component {
    render(){
        return <div>                
            <Checkbox
                form={this.props.form}
                label="Quais aplicativos ou software você utiliza? (Pode escolher mais de uma opção)"
                options={[
                    {value: "21", description: "E-mail"},
                    {value: "22", description: "Kindle"},
                    {value: "23", description: "Waze"},
                    {value: "24", description: "Cifra Club"},
                    {value: "25", description: "Aplicativos para acessar instituições financeiras"},
                    {value: "26", description: "Aplicativos para o aprendizado de idiomas"},
                ]}
                field="apps_utilizados"
            />
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
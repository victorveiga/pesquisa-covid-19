import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../Fields/Checkbox';

export default class AppsUtilizados extends Component {
    render(){
        return <div>                
            <Checkbox
                form={this.props.form}
                label="Quais aplicativos ou software você utiliza? (Pode escolher mais de uma opção)"
                options={[
                    {value: "1" , description: "Facebook"},
                    {value: "2" , description: "Linkedin"},
                    {value: "3" , description: "Youtube"},
                    {value: "4" , description: "Skype"},
                    {value: "5" , description: "Snapchat"},                    
                ]}
                field="apps_utilizados"
            />
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
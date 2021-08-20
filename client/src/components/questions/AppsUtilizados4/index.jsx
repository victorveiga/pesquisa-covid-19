import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../../Fields/Checkbox';

export default class AppsUtilizados4 extends Component {
    render(){
        return <div>                
            <Checkbox
                form={this.props.form}
                label="Quais aplicativos ou software você utiliza? (Pode escolher mais de uma opção)"
                options={[
                    {value: "16", description: "Hangout"},
                    {value: "17", description: "Bible Youversion"},
                    {value: "18", description: "ResearchGate"},
                    {value: "19", description: "Flickr"},
                    {value: "20", description: "Tiktok"},
                ]}
                field="apps_utilizados"
            />
            <Form.Text className="text-muted">
                Selecione uma ou mais opções acima
            </Form.Text>
        </div>
    }
}
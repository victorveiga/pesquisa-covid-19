import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class SatisfacaoStreaming extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Conte-nos se você ficou satisfeito com os serviços prestados por aplicativos de serviços de streaming"
                options={[
                    {value: "S", description: "Sim"},
                    {value: "N", description: "Não"},
                    {value: "O", description: "Não fiz o uso desse serviço"},
                ]}
                field="sat_serv_streaming"
            />
            <Form.Text className="text-muted">
                Escolha uma das opções acima
            </Form.Text>
        </div>
    }
}
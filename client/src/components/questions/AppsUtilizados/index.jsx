import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import RadioButton from '../../Fields/RadioButton';

export default class AppsUtilizados extends Component {
    render(){
        return <div>                
            <RadioButton
                form={this.props.form}
                label="Quais aplicativos ou software você utiliza? (Pode escolher mais de uma opção)"
                options={[
                    {value: "1" , description: "Facebook"},
                    {value: "2" , description: "Linkedin"},
                    {value: "3" , description: "Youtube"},
                    {value: "4" , description: "Skype"},
                    {value: "5" , description: "Snapchat"},
                    {value: "6" , description: "Twitter"},
                    {value: "7" , description: "Vimeo"},
                    {value: "8" , description: "Whatsaap"},
                    {value: "9" , description: "Netflix"},
                    {value: "10", description: "Amazon Prime Video"},
                    {value: "11", description: "Disney+"},
                    {value: "12", description: "Globoplay"},
                    {value: "13", description: "Paramount+"},
                    {value: "14", description: "Telegram"},
                    {value: "15", description: "Instagram"},
                    {value: "16", description: "Hangout"},
                    {value: "17", description: "Bible Youversion"},
                    {value: "18", description: "ResearchGate"},
                    {value: "19", description: "Flickr"},
                    {value: "20", description: "Tiktok"},
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
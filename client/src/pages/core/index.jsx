import React, {Component} from 'react';
import {Form} from 'react-bootstrap';


export default class Core extends Component {
    render(){
        return <>
            <div>
                <Form.Label>Você precisou trocar o perfil de usuário da internet, durante o confinamento?</Form.Label>
                <Form.Check inline name="q1" type="radio" label="Sim" />
                <Form.Check inline name="q1" type="radio" label="Não" />
            </div>
            <div>
                <Form.Label>Caso tenha respondido “Sim” na pergunta anterior, indique o motivo? (você pode responder mais de uma):</Form.Label>
            </div>
            <Form.Check type="checkbox" label="1 - Devido ao número de pessoas precisando utilizar a internet em casa. " />
            <Form.Check type="checkbox" label="2 - Devido a necessidade de lazer (assistir filmes, games, Tv etc.)" />
            <Form.Check type="checkbox" label="3 - Devido ao serviço de home office." />
            <Form.Check type="checkbox" label="4 - Devido ao serviço de home office e utilização do Ambiente Virtual de Aprendizagem (AVA)." />
            <Form.Check type="checkbox" label="5 - Devido a utilização do Ambiente Virtual de Aprendizagem (AVA)." />
            <Form.Check type="checkbox" label="6 - Outra" />            
        </>
    }
}
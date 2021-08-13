import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './index.css';

export default class FinalCard extends Component {
    render(){
        return <>
            <div className="card" style={{width: '300px'}}>
                <div className="card-body text-center"> <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" alt="Imagem obrigado"/>
                    <h4>Obrigado!</h4>
                    <p>Agradecemos o seu empenho em nos ajudar! Fique tranquilo, as informações aqui prestadas são anônimas. Até a próxima!</p> 
                    <div>
                        <Button variant="outline-info" onClick={ e => this.props.form.previousQuestion()}>Revisar</Button>
                    </div>
                    <div>
                        <Button variant="outline-danger" onClick={ e => window.location.href = "https://www.unifeso.edu.br/"}>Continuar</Button>
                    </div>
                </div>
            </div>
        </>
    }
}
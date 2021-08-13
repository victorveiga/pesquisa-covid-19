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
                    <Button variant="outline-info" onClick={ e => {
                        let index = this.props.form.state.question_idx;
                        index++;

                        this.props.form.previousQuestion();
                        this.props.form.setState({readOnly: true, question_idx: index});
                    }}>Revisar</Button>
                    <Button variant="outline-danger" className="ml-2" onClick={ e => window.location.href = "https://www.unifeso.edu.br/"}>Continuar</Button>
                </div>
            </div>
        </>
    }
}
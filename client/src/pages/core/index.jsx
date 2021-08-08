import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import {QUESTIONS_LIST} from '../../constants';
import './index.css';

export default class Core extends Component {

    constructor(props){
        super(props);

        this.state = {
            validated: false,
            content: QUESTIONS_LIST[0],
            question_idx : 0
        }
    }

    nextQuestion(){
        let index = this.state.question_idx;
        index++;

        if (index > (QUESTIONS_LIST.length-1)) return ;

        this.setState({content:null});
        this.setState({content:QUESTIONS_LIST[index], question_idx: index, validated: false});
    }

    previousQuestion(){
        let index = this.state.question_idx;
        index--;

        if (index < 0) return ;
        this.setState({content:null});
        this.setState({content:QUESTIONS_LIST[index], question_idx: index});
    }

    handleSubmit(e){
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            this.nextQuestion();
        }

        this.setState({validated: true});
        
    }

    render(){
        return <>
            <div className="lead" style={{marginLeft: "10px", fontSize: "0.8rem"}}>CENTRO UNIVERSITÁRIO SERRA DOS ÓRGÃOS</div>
            <div style={{padding: 10}}>
                <img id="logo_" src="https://www.unifeso.edu.br/images/logo/UNIFESO.png" width="220px" alt="Logo da UNIFESO" />
            </div>
            <div className="d-flex justify-content-center mt-3 p-4" >
                <Form noValidate validated={this.state.validated} onSubmit={e => this.handleSubmit(e)}> 
                    <div className="d-flex justify-content-end m-4">
                        <Button variant="outline-danger" className="mr-2" onClick={e => this.previousQuestion()}>Voltar</Button>
                        <Button variant="outline-success" type="submit">Continuar</Button>
                    </div>
                    {<this.state.content
                        form={this}
                    />}
                    {/*<div>
                        <Form.Label>Você precisou trocar o perfil de usuário da internet, durante o confinamento?</Form.Label>
                        <div>
                            <Form.Check inline name="q1" type="radio" label="Sim" />
                            <Form.Check inline name="q1" type="radio" label="Não" />
                        </div>
                    </div>
                    <div>
                        <Form.Label>Caso tenha respondido “Sim” na pergunta anterior, indique o motivo? (você pode responder mais de uma):</Form.Label>
                    </div>
                    <Form.Check type="checkbox" label="1 - Devido ao número de pessoas precisando utilizar a internet em casa. " />
                    <Form.Check type="checkbox" label="2 - Devido a necessidade de lazer (assistir filmes, games, Tv etc.)" />
                    <Form.Check type="checkbox" label="3 - Devido ao serviço de home office." />
                    <Form.Check type="checkbox" label="4 - Devido ao serviço de home office e utilização do Ambiente Virtual de Aprendizagem (AVA)." />
                    <Form.Check type="checkbox" label="5 - Devido a utilização do Ambiente Virtual de Aprendizagem (AVA)." />
                    <Form.Check type="checkbox" label="6 - Outra" /> */}
                </Form>
            </div>         
        </>
    }
}
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
        let result = false;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {            
            this.nextQuestion();
            result = true;
        }

        this.setState({validated: true});
        return result;
    }

    render(){
        return <>
            <div className="d-flex justify-content-center p-4" >
                <Form noValidate validated={this.state.validated} onSubmit={e => this.handleSubmit(e)}> 
                    {this.state.question_idx !== 0 &&  <div className="d-flex justify-content-end mb-2">
                        <Button variant="outline-danger" className="mr-2" onClick={e => this.previousQuestion()}>Voltar</Button>
                        <Button variant="outline-success" type="submit">Continuar</Button>
                    </div>}
                    {<this.state.content
                        form={this}
                    />}
                </Form>
            </div>         
        </>
    }
}
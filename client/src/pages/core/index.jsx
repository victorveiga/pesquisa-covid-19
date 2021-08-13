import React, {Component} from 'react';
import {Form, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {QUESTIONS_LIST} from '../../constants';
import Term from '../../components/term';
import FinalCard from '../../components/FinalCard';
import {BiSkipNextCircle, BiSkipPreviousCircle} from 'react-icons/bi';
import './index.css';

export default class Core extends Component {

    constructor(props){
        super(props);

        this.state = {
            validated: false,
            content: QUESTIONS_LIST[0],
            question_idx: -1,
            aceitou_termo: false,
            finished: false,
        }

        this.refForm = React.createRef();
    }

    nextQuestion(){
        let index = this.state.question_idx;
        index++;

        if (index > (QUESTIONS_LIST.length-1)) {
            this.setState({finished: true});
            return ;
        }

        this.setState({content:null});
        this.setState({content:QUESTIONS_LIST[index], question_idx: index});
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
        const form = this.refForm.current; //const form = e.currentTarget;
        let result = false;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {            
            this.nextQuestion();
            result = true;
        }

        this.setState({validated: !result});
        return result;
    }

    render(){
        return <>
            <div className="d-flex justify-content-center p-4" >
                <Form ref={this.refForm} noValidate validated={this.state.validated} onSubmit={e => this.handleSubmit(e)}>                   
                    <div style={{maxWidth: '500px'}}>
                        {this.state.aceitou_termo === false && <Term form={this} />}
                        {this.state.aceitou_termo === true && this.state.finished === false &&
                        <div>
                            <div className="d-flex justify-content-end mb-2">                                                            
                                <OverlayTrigger placement="bottom" overlay={ props => <Tooltip {...props}>Questão Anterior</Tooltip>}>                    
                                    <Button variant="outline-dark" className="mr-2 selection-button" onClick={e => this.previousQuestion()}><BiSkipPreviousCircle size="2em"/></Button>                                
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={ props => <Tooltip {...props}>Próxima Questão</Tooltip>}>                    
                                    <Button variant="outline-dark" className="selection-button" type="submit"><BiSkipNextCircle size="2em"/></Button>
                                </OverlayTrigger>
                            </div>
                            
                            <div style={ this.state.finished === true ? {pointerEvents: 'none'}:{}}>
                                <this.state.content form={this} />
                            </div>
                        </div>}
                        {this.state.aceitou_termo === true && this.state.finished === true && <FinalCard form={this}/>}
                    </div>
                </Form>
            </div>         
        </>
    }
}
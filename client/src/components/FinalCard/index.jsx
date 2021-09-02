import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import api from '../../services/api';
import trophy from '../../assets/trophy.png';
import './index.css';

export default class FinalCard extends Component {

    componentDidMount(){
        this.save()
    }

    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    save(){
        if (this.props.form.state.readOnly === true) return null;
        const csrftoken = this.getCookie('csrftoken');
        api.post('participante/', this.props.form.state, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        })
            .then(response => {
                console.log('Pesquisa submetida com sucesso!', response);
            })
            .catch(error => {
                if (error.message)
                    console.log('Erro: ', error.message);;

                if (error.response && error.response.data)    
                    console.log('Erro Det.:', error.response.data);
            });
    }

    render(){
        return <>
            <div className="card" style={{width: '300px'}}>
                <div className="card-body text-center"> <img src={trophy} alt="Imagem obrigado"/>
                    <h4>Obrigado!</h4>
                    <p>Agradecemos o seu empenho em nos ajudar! Fique tranquilo, as informações aqui prestadas são anônimas. Até a próxima!</p> 
                    <Button variant="outline-info" onClick={ e => this.props.form.setReviewMode()}>Revisar</Button>
                    <Button variant="outline-danger" className="ml-2" onClick={ e => window.location.href = "https://www.unifeso.edu.br/"}>Continuar</Button>
                </div>
            </div>
        </>
    }
}
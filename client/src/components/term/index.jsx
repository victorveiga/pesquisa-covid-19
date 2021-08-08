import React, {Component} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default class Term extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            validated: false
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            
        }

        this.setState({validated: true});
    }

    render(){
        return <>
            <Button variant="outline-info" onClick={e => this.setState({show: true})}>Abrir termo de consentimento</Button>
            <Form noValidate validated={this.state.validated} onSubmit={e => this.handleSubmit(e)}>
                <Modal
                    show={this.state.show}
                    onHide={_ => this.setState({show: false})}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO – TCLE
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{height: '500px', overflowY: 'scroll'}}>
                        <div align="justify">
                            Somos pesquisadores, especialistas nas áreas de conhecimento do Unifeso e integrantes
                            da Diretoria de Educação a Distância (DEaD - Unifeso), juntamente com estudantes bolsistas 
                            de iniciação científica do PICPq 2020-21, estamos desenvolvendo o projeto integrado: 
                            <strong>Pandemia de Covid-19: impactos das medidas de isolamento e distanciamento social nas 
                            relações familiares e profissionais da comunidade acadêmica do Unifeso.</strong>
                        </div>
                        <br/>
                        <div align="justify">
                            Após a assinatura e recebimento do TCLE encaminhado a você, convidamos a participar 
                            desta pesquisa que consiste em responder o questionário online, adaptado de Barbosa (2021),
                            do Núcleo de Epidemiologia e Vigilância em Saúde (Nevs) da Fiocruz Brasília. 
                            São 50 questões a serem respondidas, com uma previsão de tempo gasto de 5 a 8 minutos, 
                            para poder analisarmos os efeitos das medidas de isolamento e de distanciamento social nas 
                            relações no âmbito familiar e profissional da comunidade Unifeso a qual faz parte, 
                            no contexto da pandemia da Covid19.
                        </div>
                        <br/>
                        <div align="justify">
                            <strong>Benefícios da pesquisa</strong>
                            <br/>
                            Você contribuirá com o levantamento de informações que subsidiará o planejamento de ações para 
                            organizar um banco de dados que contenha informações relevantes que venha potencializar 
                            as áreas de conhecimento  do Unifeso, junto à práticas nas áreas sociais, assistenciais e 
                            ambientais, bem como subsidiar estratégias de políticas públicas, auxiliando o poder público 
                            local nas ações práticas e tomadas de decisão em relação a  enfrentamentos endêmicos de diferentes 
                            naturezas, bem como contribuir com ações contingenciais e de novas formas de organização e 
                            gestão dos processos de trabalho existentes no Unifeso.  
                            <br/>
                            Essa pesquisa oferece riscos mínimos, caracterizados quando do momento de depoimento consentido, 
                            tendo em vista que a narrativa das experiências conflitantes, vivenciadas quando do início do isolamento 
                            e do distanciamento social, podem ocasionar desconforto relacionados à dimensão emocional individual, em 
                            função da problemática social contemporânea. 
                        </div>
                        <br/>
                        <div align="justify">
                            <strong>Aspectos éticos</strong>
                            <br/>
                            Suas respostas são anônimas e não podem ser rastreadas: não teremos informações sobre quem você é, 
                            além das perguntas que você responder.
                            <br/>
                            A pesquisa está em conformidade com a Lei Geral de Proteção de dados do Brasil - LGPD 
                            (lei nº 13.709 de 14 de agosto de 2018) e possui aprovação do Conselho de Ética-Unifeso (Documento no XXXX).
                        </div>
                        <br/>
                        <div align="justify">
                            Sua participação é voluntária e você pode deixar de responder a qualquer momento, sem que isso lhe cause qualquer problema.
                        </div>
                        <br/>
                    
                        <div>
                            <div align="justify">
                                Se você tiver alguma dúvida, você pode contatar a coordenadora da pesquisa: 
                            </div>
                            <div class="row border">
                                <div class="col-6">
                                    <strong>Nome do pesquisador(a):</strong><br/>
                                </div>
                                <div class="col-6">
                                    Cátia Araujo Farias <br/>
                                </div>
                            </div>
                            <div class="row border">
                                <div class="col-6">
                                    <strong>Cargo/Função:</strong><br/> 
                                </div>
                                <div class="col-6">
                                    Assessora Pedagógica da DEaD <br/> 
                                </div>
                            </div>
                            <div class="row border">
                                <div class="col-6">
                                    <strong>Instituição:</strong><br/> 
                                </div>
                                <div class="col-6">
                                    Centro Universitário Serra dos Órgãos - Unifeso <br/> 
                                </div>
                            </div>
                            <div class="row border">
                                <div class="col-6"> 
                                    <strong>e-mail:</strong><br/> 
                                </div>
                                <div class="col-6">
                                    catiafarias@unifeso.edu.br <br/> 
                                </div>
                            </div>
                            <div class="row border">
                                <div class="col-6">
                                    <strong>Telefone:</strong><br/> 
                                </div>
                                <div class="col-6">
                                    (21) 97918-5857 <br/> 
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="chk_aceite" name="chk_aceite" required/>
                            <label for="chk_aceite">
                                <div align="justify">
                                    Eu concordo em participar da pesquisa, conforme assinatura exarada no TCLE. 
                                    Li e entendi em que consiste minha participação.
                                </div>
                            </label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={e => this.setState({show: false})}>Fechar</Button>
                        <Button type="submit" variant="success">Continuar</Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    }
}
import React, {Component} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './index.css';

export default class Term extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            isInvalid: false,
            aceitar_termo: false
        }
    }

    render(){
        return <>            
            <button style={{marginTop: '60%'}} type="button" className="custom-button" onClick={e => this.setState({show: true})}>Vamos começar</button>                        
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
                <Modal.Body className="custom-body" style={{height: '400px', overflowY: 'scroll'}}>
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
                        (lei nº 13.709 de 14 de agosto de 2018) e possui aprovação do Conselho de Ética-Unifeso (Documento nº 4.274.898).
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
                        <div className="row border">
                            <div className="col-6">
                                <strong>Nome do pesquisador(a):</strong><br/>
                            </div>
                            <div className="col-6">
                                Luciana Nunes <br/>
                            </div>
                        </div>
                        <div className="row border">
                            <div className="col-6">
                                <strong>Cargo/Função:</strong><br/> 
                            </div>
                            <div className="col-6">
                                XXXXXXX <br/> 
                            </div>
                        </div>
                        <div className="row border">
                            <div className="col-6">
                                <strong>Instituição:</strong><br/> 
                            </div>
                            <div className="col-6">
                                Centro Universitário Serra dos Órgãos - Unifeso <br/> 
                            </div>
                        </div>
                        <div className="row border">
                            <div className="col-6"> 
                                <strong>e-mail:</strong><br/> 
                            </div>
                            <div className="col-6">
                                luciananunes@unifeso.edu.br <br/> 
                            </div>
                        </div>
                        <div className="row border">
                            <div className="col-6">
                                <strong>Telefone:</strong><br/> 
                            </div>
                            <div className="col-6">
                                (21) 98189-3827 <br/> 
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Form.Group className="mb-3" controlId="teste">
                        <Form.Check                            
                            label="Eu concordo em participar da pesquisa, conforme assinatura exarada no TCLE. Li e entendi em que consiste minha participação."
                            feedback="Você deve concordar com os termos antes de continuar"
                            required
                            isInvalid={this.state.isInvalid}
                            feedbackTooltip
                            value={this.state.aceitar_termo}
                            onChange={e => this.setState({aceitar_termo: e.target.checked})}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={e => this.setState({show: false})}>Fechar</Button>
                    <Button variant="success" onClick={ e => {
                        if (this.state.aceitar_termo === false){
                            this.setState({isInvalid: true});  
                            let body = null;
                            if (document.getElementsByClassName('custom-body').length > 0) body = document.getElementsByClassName('custom-body')[0];                            
                            body.scrollTop = body.scrollHeight;
                            return ;
                        }
                        this.props.form.nextQuestion(e);
                        this.setState({show: false});      
                        this.props.form.setState({aceitou_termo: true});            
                    }}>Continuar</Button>                                       
                </Modal.Footer>
            </Modal>            
        </>
    }
}
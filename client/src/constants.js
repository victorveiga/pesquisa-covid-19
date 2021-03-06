import Local from "./components/questions/local";
import Pessoal from "./components/questions/pessoal";
import Pessoal_2 from "./components/questions/pessoal_2";
import EstudoTrabalho from "./components/questions/EstudoTrabalho";
import Pessoal_3 from "./components/questions/pessoal_3";
import TipoConexao from './components/questions/TipoConexao';
import TipoRede from "./components/questions/TipoRede";
import DispositivoUsado from "./components/questions/DispositivoUsado";
import TipoUsuario from "./components/questions/TipoUsuario";
import TrocouPerfilUsuario from "./components/questions/TrocouPerfilUsuario";
import MotivoTrocaPerfilUsuario from "./components/questions/MotivoTrocaPerfilUsuario";
import EquipamentoHomeOffice from "./components/questions/EquipamentoHomeOffice";
import ObstaculoEquipamento from "./components/questions/ObstaculoEquipamento";
import AppsUtilizados from "./components/questions/AppsUtilizados";
import AppsUtilizados2 from "./components/questions/AppsUtilizados2";
import AppsUtilizados3 from "./components/questions/AppsUtilizados3";
import AppsUtilizados4 from "./components/questions/AppsUtilizados4";
import AppsUtilizados5 from "./components/questions/AppsUtilizados5";
import SOUtilizado from "./components/questions/SOUtilizado";
import UtilizouVirtualidade from "./components/questions/UtilizouVirtualidade";
import VirtualAtividade from "./components/questions/VirtualAtividade";
import VirtualAtividadeMotivo from "./components/questions/VirtualAtividadeMotivo";
import DificuldadeUsoApp from "./components/questions/DificuldadeUsoApp";
import ContatarSuporteApp from "./components/questions/ContatarSuporteApp";
import SatisfacaoTelefone from "./components/questions/SatisfacaoTelefone";
import SatisfacaoInternet from "./components/questions/SatisfacaoInternet";
import SatisfacaoTV from "./components/questions/SatisfacaoTV";
import SatisfacaoLuz from "./components/questions/SatisfacaoLuz";
import SatisfacaoStreaming from "./components/questions/SatisfacaoStreaming";
import SatisfacaoFinanceiras from "./components/questions/SatisfacaoFinanceiras";
import SatisfacaoGoverno from "./components/questions/SatisfacaoGoverno";
import SatisfacaoUniversidade from "./components/questions/SatisfacaoUniversidade";

const QUESTIONS_LIST = [
    // Comuns
    Local,
    Pessoal,
    Pessoal_2,
    EstudoTrabalho,
    Pessoal_3,  
    // Tecnol??gicas
    TipoConexao,
    TipoRede,
    DispositivoUsado,
    TipoUsuario,
    TrocouPerfilUsuario,
    MotivoTrocaPerfilUsuario,
    EquipamentoHomeOffice,
    ObstaculoEquipamento,
    AppsUtilizados,
    AppsUtilizados2,
    AppsUtilizados3,
    AppsUtilizados4,
    AppsUtilizados5,
    SOUtilizado,
    UtilizouVirtualidade,
    VirtualAtividade,
    VirtualAtividadeMotivo,
    DificuldadeUsoApp,
    ContatarSuporteApp,
    SatisfacaoTelefone,
    SatisfacaoInternet,
    SatisfacaoTV,
    SatisfacaoLuz,
    SatisfacaoStreaming,
    SatisfacaoFinanceiras,
    SatisfacaoGoverno,
    SatisfacaoUniversidade,  
];

const UNIDADES_FEDERATIVAS = [
    {value: "AC", description: "AC - Acre"},
    {value: "AL", description: "AL - Alagoas"},
    {value: "AP", description: "AP - Amap??"},
    {value: "AM", description: "AM - Amazonas"},
    {value: "BA", description: "BA - Bahia"},
    {value: "CE", description: "CE - Cear??"},
    {value: "DF", description: "DF - Distrito Federal"},
    {value: "ES", description: "ES - Esp??rito Santo"},
    {value: "GO", description: "GO - Goi??s"},
    {value: "MA", description: "MA - Maranh??o"},
    {value: "MT", description: "MT - Mato Grosso"},
    {value: "MS", description: "MS - Mato Grosso do Sul"},
    {value: "MG", description: "MG - Minas Gerais"},
    {value: "PA", description: "PA - Par??"},
    {value: "PB", description: "PB - Para??ba"},
    {value: "PR", description: "PR - Paran??"},
    {value: "PE", description: "PE - Pernambuco"},
    {value: "PI", description: "PI - Piau??"},
    {value: "RJ", description: "RJ - Rio de Janeiro"},
    {value: "RN", description: "RN - Rio Grande do Norte"},
    {value: "RS", description: "RS - Rio Grande do Sul"},
    {value: "RO", description: "RO - Rond??nia"},
    {value: "RR", description: "RR - Roraima"},
    {value: "SC", description: "SC - Santa Catarina"},
    {value: "SP", description: "SP - S??o Paulo"},
    {value: "SE", description: "SE - Sergipe"},
    {value: "TO", description: "TO - Tocantins"}
]

export {
    QUESTIONS_LIST,
    UNIDADES_FEDERATIVAS,
}
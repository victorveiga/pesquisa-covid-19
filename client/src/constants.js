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
import SOUtilizado from "./components/questions/SOUtilizado";
import UtilizouVirtualidade from "./components/questions/UtilizouVirtualidade";
import VirtualAtividade from "./components/questions/VirtualAtividade";
import VirtualAtividadeMotivo from "./components/questions/VirtualAtividadeMotivo";

const QUESTIONS_LIST = [
    TipoConexao,
    TipoRede,
    DispositivoUsado,
    TipoUsuario,
    TrocouPerfilUsuario,
    MotivoTrocaPerfilUsuario,
    EquipamentoHomeOffice,
    ObstaculoEquipamento,
    AppsUtilizados,
    SOUtilizado,
    UtilizouVirtualidade,
    VirtualAtividade,
    VirtualAtividadeMotivo,
    Local,
    Pessoal,
    Pessoal_2,
    EstudoTrabalho,
    Pessoal_3,    
];

const UNIDADES_FEDERATIVAS = [
    {value: "AC", description: "AC - Acre"},
    {value: "AL", description: "AL - Alagoas"},
    {value: "AP", description: "AP - Amapá"},
    {value: "AM", description: "AM - Amazonas"},
    {value: "BA", description: "BA - Bahia"},
    {value: "CE", description: "CE - Ceará"},
    {value: "DF", description: "DF - Distrito Federal"},
    {value: "ES", description: "ES - Espírito Santo"},
    {value: "GO", description: "GO - Goiás"},
    {value: "MA", description: "MA - Maranhão"},
    {value: "MT", description: "MT - Mato Grosso"},
    {value: "MS", description: "MS - Mato Grosso do Sul"},
    {value: "MG", description: "MG - Minas Gerais"},
    {value: "PA", description: "PA - Pará"},
    {value: "PB", description: "PB - Paraíba"},
    {value: "PR", description: "PR - Paraná"},
    {value: "PE", description: "PE - Pernambuco"},
    {value: "PI", description: "PI - Piauí"},
    {value: "RJ", description: "RJ - Rio de Janeiro"},
    {value: "RN", description: "RN - Rio Grande do Norte"},
    {value: "RS", description: "RS - Rio Grande do Sul"},
    {value: "RO", description: "RO - Rondônia"},
    {value: "RR", description: "RR - Roraima"},
    {value: "SC", description: "SC - Santa Catarina"},
    {value: "SP", description: "SP - São Paulo"},
    {value: "SE", description: "SE - Sergipe"},
    {value: "TO", description: "TO - Tocantins"}
]

export {
    QUESTIONS_LIST,
    UNIDADES_FEDERATIVAS,
}
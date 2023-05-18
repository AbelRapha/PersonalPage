import { Title, Text } from "@mantine/core";
import './retrospecto.css'

export function Retrospecto(){
    return (
        <div className="retrospecto">
            <div className="titulo">
            <Title style={{padding:30}}>Retrospecto</Title>
            </div>
            <div className="conteudo">
            <Text style={{paddingLeft:"10%", paddingRight: "10%", paddingTop: "5%" ,
            paddingBottom:"5%",fontSize: 18}}>Dez (2021) - Mar (2022): Estágio <Text color="aqua">Analista de Dados</Text> para consultoria imobiliária, analisava dados públicos e principalmente captava anúncios por meio de scraping de sites de anunciantes, para gerar relatórios sobre o mercado imobiliário.</Text>
            
            <Text style={{paddingLeft:"10%", paddingRight: "10%",paddingTop: "5%" ,
            paddingBottom:"5%" ,fontSize: 18}}>Mar (2022) - Atual <Text color="aqua">Cientista de Dados</Text>Cientista de dados para a analisar impactos na TI, atuando com processos de ITSM para resolução de incidentes de problemas, por meio de relatórios com Tableau e criação de análises e Dashboards analíticos para melhorar a visão e a qualidade na resolução das atividades do time de suporte.</Text>
            </div>
         </div>
    )
}
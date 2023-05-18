import { Text, Title } from '@mantine/core'
import Botao from '../Botoes'
import './conteudo.css'

function Conteudo(){
    return (
        <section id='inicio' className='conteudo'>
            <div className="texto">
                <Title>Eleve seu negócio digital a outro nível com um <Text color='aqua'>Desenvolvedor de Qualidade!</Text>
                </Title>
                <Text>Olá! Me chamo Abel, sou desenvolvedor e um profissional da área de dados. Tenho especialidade em Desenvolvimento Web, Ciência de Dados, Análise de Dados e conhecimento em infraestrutura cloud. Também faço projetos para pequenos negócios alavancarem suas vendas no meio digital. Vamos conversar?</Text>
                <Botao className = "botao"/>
            </div>
            <div className="imagem">
                <img src = {require("../../assets/Foto-principal.png")} alt = "Foto perfil"/>
            </div>
        </section>
        
    )
}

export default Conteudo
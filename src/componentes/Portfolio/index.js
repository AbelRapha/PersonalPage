import { Button, Text, Title} from "@mantine/core";
import './portfolio.css'

export default function Portfolio(){
    return (
        <>
        <div className="titulo">
        <Title id="portfolio">Portfólio</Title>
        </div>
        <div className="card-portfolio-container">
        <div className="card-portfolio">
            <img src={require("../../assets/youtube-svgrepo-com.png")} alt="ícone Card"/>
            <Title style={{fontSize: 20, marginTop:20}}>YouTube - Descomplicando dados</Title>
            <Text style={{marginBottom:20, marginTop:20}}>Acesse o meu canal do YouTube onde falo sobre Ciência de Dados, Estatística e outros conhecimentos relacionados ao mundo de desenvolvimento, ferramentas e infraestrutura.</Text>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://www.youtube.com/@descomplicandodados6849"
            className="botao">Ver o Canal</Button>
        </div>
        <div className="card-portfolio">
            <img src={require("../../assets/github-svgrepo-com.png")} alt="ícone Card"/>
            <Title style={{fontSize: 20, marginTop:20}}>Help Desk Search</Title>
            <Text style={{marginBottom:20, marginTop:20}}>Este projeto é voltado a criação de um mecanismo de busca para conseguir um melhor eficácia ao encontrar determinados tickets para cada período de tempo</Text>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://github.com/AbelRapha/HelpDeskSearch"
            className="botao">Ver o Repositório</Button>
        </div>
        <div className="card-portfolio">
            <img src={require("../../assets/medium-outline-svgrepo-com.png")} alt="ícone Card"/>
            <Title style={{fontSize: 20, marginTop:20}}>Artigo - ZapImóveis</Title>
            <Text style={{marginBottom:20, marginTop:20}}>Este artigo é uma forma de documentar o uso de um crawler que encontrei de um desenvolvedor e ajudá-lo demonstrar o uso da ferramenta a outros desenvolvedores</Text>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://medium.com/@abelrapha/crawler-livre-do-zap-im%C3%B3veis-2ca31a5e9dde"
            className="botao">Ver o Artigo</Button>
        </div>
        </div>
        <div className="card-portfolio-container">
        <div className="card-portfolio">
            <img src={require("../../assets/github-svgrepo-com.png")} alt="ícone Card"/>
            <Title style={{fontSize: 20, marginTop:20}}>Desafio Bloco Inovação</Title>
            <Text style={{marginBottom:20, marginTop:20}}>Este projeto é voltado para a resolução de um desafio de vaga de estágio.o objetivo era conseguir criar uma análise de valor ideal d e aluguéis dependendo de algumas características do imóvel, região e classe social de acordo com o IBGE</Text>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://github.com/AbelRapha/DesafioBlocoInovacoes"
            className="botao">Ver o Repositório</Button>
        </div>
        <div className="card-portfolio">
            <img src={require("../../assets/github-svgrepo-com.png")} alt="ícone Card"/>
            <Title style={{fontSize: 20, marginTop:20}}>Match CV</Title>
            <Text style={{marginBottom:20, marginTop:20}}>Este projeto Basicamente é uma forma de agilizar a leitura de currículos. Por meio do processamento de linguagem natural (NLP) e encontrar as palavras chaves que estão dentro do currículo de cada candidato, e dessa forma facilita o recrutamento.</Text>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://github.com/AbelRapha/MatchCV"
            className="botao">Ver o Repositório</Button>
        </div>
        <div className="card-portfolio">
            <img src={require("../../assets/wordpress-svgrepo-com.png")} alt="ícone Card"/>
            <Title style={{fontSize: 20, marginTop:20}}>Site institucional</Title>
            <Text style={{marginBottom:20, marginTop:20}}>Site desenvolvido com Wordpress e os plugins principais como Elementor. Este site hoje é utilizado por um corretor de seguros que tem conseguido ótimo engajamento com tráfego pago. Além disso, está seguindo as práticas com a nova LGPD.</Text>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://cbtoledo.com/"
            className="botao">Ver o Site</Button>
        </div>
        </div>
        </>
    )
}
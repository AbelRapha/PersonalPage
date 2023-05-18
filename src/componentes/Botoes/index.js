import { Button, Group } from "@mantine/core";
import './botoes.css'

function Botao(){
    return (
        
            <Group mt='lg' className="botoes">
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://github.com/AbelRapha">Github</Button>

            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            component="a"
            href="https://www.linkedin.com/in/abel-rapha-data-science/">Linkedin</Button>
        </Group>      
    )
}

export default Botao
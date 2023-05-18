import { Anchor } from '@mantine/core'
import './cabecalho.css'

function Cabecalho(){
    return (
       <header>
         <ul className='cabecalho'>
                <Anchor href='#inicio'>Início</Anchor>
                <Anchor href='#portfolio'>Portfólio</Anchor>
                <Anchor href='#contato'>Contato</Anchor>
            </ul>
       </header>
           

    )
}

export default Cabecalho
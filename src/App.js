import { useState } from 'react';
import './app.css'
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';
import {MantineProvider, ColorSchemeProvider} from '@mantine/core';
import { Carrossel } from './componentes/Carrossel';
import { Retrospecto } from './componentes/Retrospecto';
import Portfolio from './componentes/Portfolio';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import { Notifications } from '@mantine/notifications';
import FloatButton from './componentes/FloatButton';


function App(){
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Notifications/>
        <Cabecalho/>
        <Conteudo/>
        <Carrossel/>
        <Retrospecto/>
        <Portfolio/>
        <Formulario/>
        <FloatButton/>
        <Rodape/>
        </MantineProvider>
    </ColorSchemeProvider>
  )
}


export default App;

import { Carousel } from '@mantine/carousel';
import { Title } from '@mantine/core';
import './carrossel.css'

export function Carrossel() {
  return (
    <div className='carrossel-container'>
        <div className='titulo'>
        <Title style={{padding:30}}>Tecnologias</Title>
        </div>
        <Carousel
        maw={320}
        mx="auto"
        withIndicators
        height={200}
        dragFree
        slideGap="md"
        align="start">
        <Carousel.Slide align='center'>
            <div className='card'>
            <h2>Linguagens</h2>
            <img src = {require("../../assets/code-svgrepo-com.png")}/>
            <p>Python, R, Javascript</p>
            </div>
        </Carousel.Slide>
        <Carousel.Slide align='center'>
            <div className='card'>
            <h2>Design</h2>
            <img src = {require("../../assets/web-design-svgrepo-com.png")}/>
            <p>HTML, CSS, React, Wordpress</p>
            </div>
        </Carousel.Slide>
        <Carousel.Slide align='center'>
            <div className='card'>
            <h2>Cloud</h2>
            <img src = {require("../../assets/cloud-svgrepo-com.png")}/>
            <p>AWS</p>
            </div>
        </Carousel.Slide>
        <Carousel.Slide align='center'>
            <div className='card'>
            <h2>BI</h2>
            <img src = {require("../../assets/diagram-svgrepo-com.png")}/>
            <p>Power Bi, Tableau, Data Studio</p>
            </div>       
        </Carousel.Slide>
        <Carousel.Slide align='center'>
            <div className='card'>
            <h2>Bancos de Dados</h2>
            <img src = {require("../../assets/database-svgrepo-com.png")}/>
            <p>SQL-Server, Postgress, MongoDB</p>
            </div>
        </Carousel.Slide>
        </Carousel>
    </div>
    
  );
}
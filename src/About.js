import './About.css'
import arquibancada from "./images/arquibancada-image.png";

function About() {
    return(
    <div className='About' id="About">
        <div id='Rectangle'><h1 className='AboutTitle'>SOBRE A SELEÇÃO</h1></div>
        
        <p id='PrimaryText'>
             A Seleção Brasileira de Futebol representa o brasil nas competições de futebol da CONMEBOL e FIFA. <br /> <br />

            Formada em 1915 e considerada um dos maiores símbolos do país, é chamada de "Seleção",
            "Seleção canarinho", "Verde-Amarela", além de outras alcunhas. É a seleção mais bem-sucedida da
            história do futebol mundial, sendo a recordista em conquistas em Copas do Mundo.
        </p>
            
            <div className='RectAux'>
            <div className='Box'>
            <h2 id='BoxTxt'>Tem 5 títulos invictos (1958, 1962, 1970, 1994 e 2002) e quatro títulos da Copa das Confederações
            FIFA (1997, 2005, 2009 e 2013)</h2>
            </div>
            </div>
        <img src={arquibancada} id="AboutImage" alt="arquibancada com bandeira do brasil"/>

        <p id='SubTitle'>
             MAIS QUE 5 ESTRELAS, 200 MILHÕES DE CORAÇÕES <br />
             É taça na raça Brasil
        </p>
    </div>

)
}

export default About
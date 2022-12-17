import './Cover.css'
import IDE from "./images/IDE-logo.png"
import CBF from "./images/CBF-logo.png"


// Div do Cover estilizada no Cover.css
function Cover() {
    return(
    <div className='Cover'  id="Home">
           {/* <div className='CoverLogos'>
                <img src={ IDE } className="LogoIDE" alt="logo da IDE" />
                <p className='VersusSymbol'>X</p>
                <img src= { CBF } className="LogoBrazil" alt="logo da seleção brasileira" />
            </div>  */}
            <h1 className='CoverTitle'>Seleção Brasileira <br/>de Futebol</h1>
    </div>
    
    )
}

export default Cover
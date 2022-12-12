import './Footer.css'
import IDE from './images/IDE-logo.png'
import CBF from './images/CBF-logo.png'

// Rodapé em formato de elementos concatenados
function Footer() {
    return (
        <footer className='Footer'>
            <img className="CBF--logo" src={CBF} alt="Logo da CBF."/>
            <small className='Footer--text'>Confederação Brasileira de Futebol © x IDE © Todos os direitos reservados.<br /><br />Termos de Uso | Politica de Privacidade | Política de Cookies</small>
            <div className='Footer--RightSide'>
                <small className='Footer--text'>Realização:</small>
                <img className="IDE--logo" src={IDE} alt="Logo da IDE."/>
            </div>
        </footer>
    )
}

export default Footer
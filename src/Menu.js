import './Menu.css'

// Função Menu de navegação em formato de "unordered list" 
function Menu() {
    return (
        <nav className="Menu" id="Home">
            <ul className="Menu--options">
                <li><a href="#Home">HOME</a></li>
                <li><a href="#About">SOBRE</a></li>
                <li><a href="#Players">JOGADORES</a></li>
                <li><a href="#Games">JOGOS</a></li>
            </ul>
        </nav>
    )
}

export default Menu


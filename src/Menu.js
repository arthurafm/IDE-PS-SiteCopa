import './Menu.css'

// Função Menu de navegação em formato de "unordered list" 
function Menu() {
    return (
        <nav className="Menu">
            <ul className="Menu--options">
                <li><a href="#id--Home">HOME</a></li>
                <li><a href="#id--About">SOBRE</a></li>
                <li><a href="#id--Players">JOGADORES</a></li>
                <li><a href="#id--Games">JOGOS</a></li>
            </ul>
        </nav>
    )
}

export default Menu


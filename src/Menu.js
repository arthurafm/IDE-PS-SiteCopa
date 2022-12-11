import './Menu.css'

// Função Menu de navegação em formato de "unordered list" 
function Menu() {
    return (
        <nav className="Menu">
            <ul className="Menu--options">
                <li>HOME</li>
                <li>SOBRE</li>
                <li>JOGADORES</li>
                <li>JOGOS</li>
            </ul>
        </nav>
    )
}

export default Menu


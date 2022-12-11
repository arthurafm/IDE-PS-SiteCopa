import './Menu.css'

// Função Menu de navegação em formato de "unordered list" 
function Menu() {
    return (
        <nav className="Menu">
            <ul className="Menu--options">
                <li><a href="https://www.instagram.com/ide_jr/">HOME</a></li>
                <li><a href="https://www.instagram.com/ide_jr/">SOBRE</a></li>
                <li><a href="https://www.instagram.com/ide_jr/">JOGADORES</a></li>
                <li><a href="https://www.instagram.com/ide_jr/">JOGOS</a></li>
            </ul>
        </nav>
    )
}

export default Menu


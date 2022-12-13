import './NextGames.css'
import CBF from './images/CBF-logo-colorida.png'
import JFA from './images/JFA-logo.png'
import KFA from './images/KFA-logo.png'
import GFA from './images/GFA-logo.png'

function NextGames() {
    return (
        <article className="NextGames">
            <h2 className="NextGames--title">PRÓXIMOS JOGOS</h2>
            <section className="NextGames--CBF-x-JFA">
                <div className="NextGames--Card--upper">
                    <img className="NextGames--CBF-logo" src={CBF} alt="Logo da CBF" />
                    <p className="NextGames--X">x</p>
                    <img className="NextGames--JFA-logo" src={JFA} alt="Logo da JFA"/>
                </div>
                <div className="NextGames--Card--lower">
                    <p className="NextGames--Data"><strong>Quinta-feira</strong><br />03/11<br />07:20</p>
                </div>
            </section>
            <section className="NextGames--CBF-x-KFA">
                <div className="NextGames--Card--upper">
                    <img className="NextGames--CBF-logo" src={CBF} alt="Logo da CBF" />
                    <p>x</p>
                    <img className="NextGames--KFA-logo" src={KFA} alt="Logo da KFA"/>
                </div>
                <div className="NextGames--Card--lower">
                    <p className="NextGames--Data"><strong>Sexta-feira</strong><br />11/11<br />08:00</p>
                </div>
            </section>
            <section className="NextGames--CBF-x-GFA">
                <div className="NextGames--Card--upper">
                    <img className="NextGames--CBF-logo" src={CBF} alt="Logo da CBF" />
                    <p>x</p>
                    <img className="NextGames--GFA-logo" src={GFA} alt="Logo da GFA"/>
                </div>
                <div className="NextGames--Card--lower">
                    <p className="NextGames--Data"><strong>Sábado</strong><br />19/11<br />20:30</p>
                </div>
            </section>
        </article>
    )
}

export default NextGames
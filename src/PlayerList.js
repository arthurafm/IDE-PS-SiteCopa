import { useState } from "react";
import "./PlayerList.css";

const atacantes = [
	{ name: "Jogador 1", age: 27 },
	{ name: "Jogador 2", age: 31 },
	{ name: "Jogador 3", age: 25 },
	{ name: "Jogador 4", age: 34 },
	{ name: "Jogador 5", age: 19 },
	{ name: "Jogador 6", age: 34 },
	{ name: "Jogador 7", age: 25 },
	{ name: "Jogador 8", age: 34 },
	{ name: "Jogador 9", age: 25 },
];

const meioCampo = [
	{ name: "Jogador 10", age: 27 },
	{ name: "Jogador 11", age: 31 },
	{ name: "Jogador 12", age: 25 },
	{ name: "Jogador 13", age: 39 },
	{ name: "Jogador 14", age: 19 },
	{ name: "Jogador 15", age: 84 },
];

const defensores = [
	{ name: "Jogador 16", age: 27 },
	{ name: "Jogador 17", age: 31 },
	{ name: "Jogador 18", age: 25 },
	{ name: "Jogador 19", age: 34 },
	{ name: "Jogador 20", age: 19 },
	{ name: "Jogador 21", age: 34 },
	{ name: "Jogador 22", age: 25 },
	{ name: "Jogador 23", age: 34 },
];

const goleiros = [
	{ name: "Jogador 24", age: 27 },
	{ name: "Jogador 25", age: 31 },
	{ name: "Jogador 26", age: 25 },
];

const PlayerComponent = (props) => {
	return (
		<div className="PlayersList--container">
			<div className="PlayersList--player-info">
				<div className="PlayersList--photo"></div>
				<div className="PlayersList--player-info-text">
					<p><strong className="PlayersList--player-info-name">{props.name}</strong><br />Idade: {props.age}</p>
				</div>
			</div>
			<h1 className="PlayersList--Symbol">J</h1>
		</div>
	);
};

const PlayerList = (props) => {
	const [numPlayer, setnumPlayer] = useState(atacantes);

	return (
		<div id="Players" className="PlayerList">
			<div id="PlayersList--Rectangle">
				<h1 className="PlayersList--AboutTitle">{props.title}</h1>
			</div>
			<nav className="PlayersList--Menu1">
				<ul className="PlayersList--MenuItens">
					<li
						onClick={(e) => {
							setnumPlayer(atacantes);
						}}
						value="Atacantes"
						className="itens active"
					>
						Atacantes
					</li>
					<li
						onClick={(e) => {
							setnumPlayer(meioCampo);
						}}
						value="Meias"
						className="itens"
					>
						Meio Campo
					</li>
					<li
						onClick={(e) => {
							setnumPlayer(defensores);
						}}
						value="Defesa"
						className="itens"
					>
						Defensores
					</li>
					<li
						onClick={(e) => {
							setnumPlayer(goleiros);
						}}
						value="Gol"
						className="itens"
					>
						Goleiros
					</li>
				</ul>
			</nav>
			<div className="players">
				{numPlayer.map((player) => {
					return <PlayerComponent name={player.name} age={player.age} />;
				})}
			</div>
		</div>
	);
};

export default PlayerList;
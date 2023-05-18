import {King} from './king.ts';
import {Fighter} from './fighter.ts';
import {Counselor} from './counselor.ts';
import {Squire} from './squire.ts';


export const createCharacters = () => {
	const charactersContainer = [];

	const characterJoffrey = new King('Joffrey', 'Baratheon', 20, 3);
	const characterJaime = new Fighter('Jamie', 'Lannister', 40, 'sword', 10);
	const characterDaenerys = new Fighter('Daenerys', 'Targaryan', 25, 'drakes', 9);
	const characterTyrion = new Counselor('Tyrion', 'Lannister', 37, characterDaenerys);
	const characterBronn = new Squire('Brom', 'Lannister', 47, characterJaime, 8);

	charactersContainer.push(characterJoffrey, characterJaime, characterDaenerys, characterTyrion, characterBronn);
	return charactersContainer;
  
};

console.log(createCharacters());


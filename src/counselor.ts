import {Character} from './character.ts';

export class Counselor extends Character {
	characterAdvised;

	constructor(name: string, family: string, age: number, characterAdvised: object) {
		super(name, family, age);
		this.characterAdvised = characterAdvised;
		this.message = 'I think I will be dying soon';
	}
}

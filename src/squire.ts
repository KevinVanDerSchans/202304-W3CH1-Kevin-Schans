import {Character} from './character.ts';

export class Squire extends Character {
	knight;
	pelotismo;

	constructor(name: string, family: string, age: number, knight: object, pelotismo: number) {
		super(name, family, age);

		this.knight = knight;
		this.pelotismo = pelotismo;
		this.message = 'I am a loser';
	}
}

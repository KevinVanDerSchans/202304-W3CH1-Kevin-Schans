
import {Character} from './character.ts';

export class King extends Character {
	reignYears;

	constructor(name: string, family: string, age: number, reignYears: number) {
		super(name, family, age);
		this.reignYears = reignYears;
		this.message = 'You are all gonna die';
	}
}

import {Character} from './character.ts';

export class Fighter extends Character {
	weapon;
	skills;

	constructor(name: string, family: string, age: number, weapon: string, skills: number) {
		super(name, family, age);

		this.weapon = weapon;
		this.skills = skills;
		this.message = 'First hit, then ask';
	}
}

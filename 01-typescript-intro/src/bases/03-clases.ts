import axios from "axios";
import { Move, PokeapiReponse } from "../interfaces/pokeapi-response.interface";


export class Pokemon {

	get imageUrl(): string {
		return `https://pokemon/${this.id}.jpg`;
	}

  constructor(
    public readonly id: number,
    public name: string,

  ) {}

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
		this.speak();
	}

	private speak() {
		console.log(`Hello there! my name is: ${this.name}`);
	}

	async getMoves(): Promise<Move[]> {
		const { data } = await axios.get<PokeapiReponse>(`https://pokeapi.co/api/v2/pokemon/4`);
		console.log(data.moves);
		return data.moves;
	}
}

export const charmander = new Pokemon(4, 'Charmander');

console.log(charmander);
charmander.scream();

charmander.getMoves();
import { Move, PokeapiReponse } from "../interfaces/pokeapi-response.interface";
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";


export class Pokemon {

	get imageUrl(): string {
		return `https://pokemon/${this.id}.jpg`;
	}

  /**
   * The constructor function takes an id, name, and HttpAdapter as parameters and assigns them to the corresponding properties of the class.
   * @param {number} id - The `id` parameter is a number that is marked as `readonly`, meaning its value cannot be changed once it is set in the constructor.
   * @param {string} name - The `name` parameter is a string type that represents the name of an object or entity.
   * @param {HttpAdapter} http - The `http` parameter in the constructor is of type `HttpAdapter` and is marked as private, meaning it can only be accessed within the class where it is defined.
   */
  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) {}

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
		this.speak();
	}

	private speak() {
		console.log(`Hello there! my name is: ${this.name}`);
	}

	async getMoves(id: number): Promise<Move[]> {
		const data = await this.http.get<PokeapiReponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
		console.log(data.name, data.moves);
		return data.moves;
	}
}

export const pokeApiAxios = new PokeApiAdapter();
export const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);
export const bulbasaur = new Pokemon(1, 'Bulbasaur', pokeApiAxios);

console.log(charmander);
console.log(bulbasaur);
charmander.scream();

charmander.getMoves(4);
bulbasaur.getMoves(1);
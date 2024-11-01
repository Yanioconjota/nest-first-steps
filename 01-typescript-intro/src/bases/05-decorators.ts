/**
 * The above TypeScript code defines a class `AnotherPokemon` with properties and methods, and a decorator `MyDecorator` that returns the class itself.
 * @returns The `MyDecorator` function is a decorator that returns the `AnotherPokemon` class when applied to a target function.
 * 
 * must add "experimentalDecorators": true to tsconfig.json
 */

export class AnotherPokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
		console.log(`DONT' WANNA SCREAM!!!`);
	}

	speak() {
		console.log(`DONT' WANNA TALK!!!`);
	}
}

const MyDecorator = () => {
  return (target: Function) => {
    return AnotherPokemon;
  }
}

@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	speak() {
		console.log(`Hello there! my name is: ${this.name}`);
	}
}

export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();
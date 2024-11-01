/**
 * The `Deprecated` decorator function in TypeScript is used to mark methods as deprecated with a specified reason.
 * @param {string} deprecationReason - The `deprecationReason` parameter is a string that represents the reason why a particular method or function is being marked as deprecated. It is used to provide information to developers about why a certain feature should no longer be used.
 * @returns The `Deprecated` function is returning a decorator function that logs a deprecation warning message when the decorated method is accessed. The decorator function wraps the original method and calls it with its arguments while also logging the deprecation reason.
 */
const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Call the function itself with its arguments
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	@Deprecated('Most use speak2 method instead')
 speak() {
  console.log(`Hello there! my name is: ${this.name}`);
 }
}

export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import { bulbasaur, pokemons } from './bases/02-objects';
// import { name, age } from './bases/01-types';
import { charmander } from './bases/03-clases';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
//import { charmander } from './bases/06-decorators2';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `

  <h1>Hello ${ charmander.name } ${ charmander.id }!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

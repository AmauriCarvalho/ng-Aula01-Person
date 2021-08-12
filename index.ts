import {Person} from './person';

// Write TypeScript code!

let person = new Person("Fulano", "Silva", "Santos", 20);

const appDivN: HTMLElement = document.getElementById('app.nome');
appDivN.innerHTML = person.getFullName();
const appDivAge: HTMLElement = document.getElementById('app.age');
appDivAge.innerHTML = person.getBirthdayYear()+'';
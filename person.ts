export class Person{
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;

  constructor(firstN: string, middleN: string, lastN: string, age: number){
    this.firstName = firstN;
    this.middleName = middleN;
    this.lastName = lastN;
    this.age = age;
  }

  getFullName(){
    return `Nome Completo: ${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  getBirthdayYear(){
    return `Idade: ${this.age} anos`;
  }
}
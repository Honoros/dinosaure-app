export class Dinosaure {

  constructor(_id = '', login = '', mdp = '', age = 0, famille = '',
              race = '', nourriture = '', proprio_key = '') {
    this._id = _id;
    this.login = login;
    this.mdp = mdp;
    this.age = age;
    this.famille = famille;
    this.race = race;
    this.nourriture = nourriture;
    this.proprio_key = proprio_key
  }

  _id: string;
  login: string;
  mdp: string;
  age: number;
  famille: string;
  race: string;
  nourriture: string;
  proprio_key: string;
}

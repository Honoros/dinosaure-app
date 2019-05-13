export class Account {

  constructor(login = '', mdp = '') {
    this.login = login;
    this.mdp = mdp;
  }

  login: string;
  mdp: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Dinosaure} from '../models/dinosaure';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})

export class DinosaureService {

  account: Account;
  dinosaure: Dinosaure;
  friends: Dinosaure[];
  readonly URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    this.account = new Account();
    this.dinosaure = new Dinosaure();
  }

  getIfAccountExists(account: Account) {
    return this.http.post(this.URL + '/', account);
  }

  getFriends(_id: String) {
    return this.http.get(this.URL +'/friends' + `/${_id}`);
  }

  postDinosaureAccount(dinosaure: Dinosaure) {
    return this.http.post(this.URL + '/', dinosaure);
  }

  postDinosaureFriend(_id: String, dinosaure: Dinosaure) {
    return this.http.post(this.URL + '/friends' + `/${_id}`, dinosaure);
  }

  putDinosaureFriend(dinosaure: Dinosaure) {
    return this.http.put(this.URL + '/friends' + `/${dinosaure._id}`, dinosaure);
  }

  putDinosaureAccount(dinosaure: Dinosaure) {
    return this.http.put(this.URL + '/account' + `/${dinosaure._id}`, dinosaure);
  }

  deleteDinosaure(_id: String) {
    return this.http.delete(this.URL + '/friends' + `/${_id}`);
  }
}

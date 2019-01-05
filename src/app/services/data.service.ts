import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private friends: User[];

  constructor() {
    const friend1: User = {
      nick: 'Jesús',
      subnick: 'Ragnar',
      age: 21,
      email: 'jvillamarin@outlook.com',
      status: 'On',
      uid: 1
    };
    const friend2: User = {
      nick: 'Lali',
      subnick: 'Rapis',
      age: 16,
      email: 'Lali@outlook.com',
      status: 'Off',
      uid: 2
    };
    const friend3: User = {
      nick: 'Sara',
      subnick: 'Sara',
      age: 57,
      email: 'Sara@outlook.com',
      status: 'Busy',
      uid: 3
    };
    const friend4: User = {
      nick: 'Humberto',
      subnick: 'Mechas',
      age: 32,
      email: 'humberto@outlook.com',
      status: 'Away',
      uid: 4
    };
    this.friends = [friend1, friend2, friend3, friend4];
  }

  set dataFriends(friends: User[]) {
    this.friends = friends;
  }

  get dataFriends() {
    return this.friends;
  }

  public friendUid(uid: any): User {
    return this.friends.find(friend => friend.uid == uid);
  }
}

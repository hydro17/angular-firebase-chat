import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNickname: string;

  constructor(private db: AngularFireDatabase) { }

  saveUserNickname(userNickname: string) {
    this.db.list('/users').push(userNickname);

    // localStorage.setItem('activeNickname', nickname);
  }

  setUserNickname(userNickname: string) {
    this.userNickname = userNickname;
  }

  getUserNickname() {
    return this.userNickname;
  }
}

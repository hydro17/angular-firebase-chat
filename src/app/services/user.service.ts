import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeNickname: string;
  activeNicknameSet = new Subject<string>();

  constructor(private db: AngularFireDatabase) { }

  save(nickname: string) {
    this.db.list('/users').push(nickname);

    this.activeNickname = nickname;
    this.activeNicknameSet.next(nickname);

    localStorage.setItem('activeNickname', nickname);
  }

}

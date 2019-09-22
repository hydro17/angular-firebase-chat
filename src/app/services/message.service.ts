import { IMessage } from './../models/messages';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor(private db: AngularFireDatabase) { }

  sendMessage(message: IMessage) {
    this.db.list('/messages').push(message);
  }
}

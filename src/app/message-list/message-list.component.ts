import { IMessage } from '../models/messages';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messagesList$: Observable<IMessage[]>;

  constructor(private db: AngularFireDatabase) {
    this.messagesList$ = db.list('/messages').valueChanges() as Observable<IMessage[]>;
  }
}
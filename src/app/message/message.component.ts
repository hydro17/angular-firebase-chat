import { IMessage } from './../models/messages';
import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  // @Input('nickname') nickname: string;
  // @Input('nickname') nickname: string;
  @Input('messageItem') messageItem: IMessage;

  constructor() { }

}

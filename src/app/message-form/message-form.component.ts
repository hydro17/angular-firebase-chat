import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  private currentUserNickname: string;

  constructor(
    private messageService: MessageService,
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUserNickname = this.userService.getUserNickname();
    // const currentUserNickname = localStorage.getItem('activeNickname');

    if (!this.currentUserNickname) {
      this.router.navigate(['home']);
    }
  }

  sendMessage(messageContent: HTMLTextAreaElement) {
    // tslint:disable-next-line:curly
    if (!messageContent.value) return;

    const message = {
      nickname: this.currentUserNickname,
      content: messageContent.value
    };
    this.messageService.sendMessage(message);

    messageContent.value = '';
  }
}

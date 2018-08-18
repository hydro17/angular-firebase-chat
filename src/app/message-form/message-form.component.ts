import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {

  constructor(
    private messageService: MessageService,
    public userService: UserService,
    private router: Router
  ) { }

  sendMessage(messageContent: HTMLTextAreaElement) {
    // tslint:disable-next-line:curly
    if (!messageContent.value) return;

    const activeNickname = localStorage.getItem('activeNickname');
    if (!activeNickname) {
      this.router.navigate(['/nickname-form']);
    } else {
      const message = {
        nickname: activeNickname,
        content: messageContent.value
      };

      this.messageService.sendMessage(message);

      messageContent.value = '';
    }
  }
}

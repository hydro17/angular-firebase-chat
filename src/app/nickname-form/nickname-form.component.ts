import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nickname-form',
  templateUrl: './nickname-form.component.html',
  styleUrls: ['./nickname-form.component.css']
})
export class NicknameFormComponent {

  constructor(private userService: UserService, router: Router) {
    userService.activeNicknameSet
      .subscribe((nickname) => router.navigate(['/chat-window']));
  }

  saveNickname(nickname: string) {
    this.userService.save(nickname);
  }
}

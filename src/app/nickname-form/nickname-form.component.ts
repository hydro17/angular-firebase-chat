import { UserService } from '../services/user.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nickname-form',
  templateUrl: './nickname-form.component.html',
  styleUrls: ['./nickname-form.component.css']
})
export class NicknameFormComponent {
  @Output() private userNicknameIsSet: EventEmitter<null> = new EventEmitter();

  constructor(private userService: UserService) { }

  handleUserNickname(userNickname: string) {
    this.saveUserNickname(userNickname);
    this.setUserNickname(userNickname);
    this.userNicknameIsSet.emit(null);
  }

  saveUserNickname(userNickname: string) {
    this.userService.saveUserNickname(userNickname);
  }

  setUserNickname(userNickname: string) {
    this.userService.setUserNickname(userNickname);
  }
}

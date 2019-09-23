import { Component, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements AfterViewChecked, AfterViewInit {
  @ViewChild('messageListWrapper', { static: false }) messageListWrapper: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.scrollToBottomOfMessageList();
  }

  ngAfterViewChecked() {
    this.scrollToBottomOfMessageList();
  }

  scrollToBottomOfMessageList() {
    this.messageListWrapper.nativeElement.scrollTop = this.messageListWrapper.nativeElement.scrollHeight;
  }
}

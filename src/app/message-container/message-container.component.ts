import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent implements OnInit, AfterViewChecked, AfterViewInit {
  @ViewChild('messageListWrapper', { static: false }) messageListWrapper: ElementRef;

  constructor() { }

  ngOnInit() {
  }

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

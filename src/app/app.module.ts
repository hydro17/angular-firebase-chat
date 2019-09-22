import { MessageService } from './services/message.service';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ArrayReversePipe } from './array-reverse.pipe';
import { InitalInfoComponent } from './inital-info/inital-info.component';
import { NicknameFormComponent } from './nickname-form/nickname-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    MessageFormComponent,
    MessageListComponent,
    ChatWindowComponent,
    ArrayReversePipe,
    InitalInfoComponent,
    NicknameFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'chat-window', component: ChatWindowComponent },
      { path: 'nickname-form', component: NicknameFormComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

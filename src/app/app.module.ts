import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { FormsModule } from '@angular/forms';
import { LanguageDetailComponent } from './language-detail/language-detail.component'; // <-- NgModel lives here

import { LanguageService } from './language.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    LanguageService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

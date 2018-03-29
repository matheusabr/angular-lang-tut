import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { FormsModule } from '@angular/forms';
import { LanguageDetailComponent } from './language-detail/language-detail.component'; // <-- NgModel lives here

import { LanguageService } from './language.service';


@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LanguagesComponent } from './languages/languages.component';


const routes: Routes = [
  { path: 'languages', component: LanguagesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

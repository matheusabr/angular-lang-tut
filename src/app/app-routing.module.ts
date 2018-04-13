import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LanguagesComponent } from './languages/languages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageDetailComponent } from './language-detail/language-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'languages', component: LanguagesComponent },    
  { path: 'detail/:id', component: LanguageDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

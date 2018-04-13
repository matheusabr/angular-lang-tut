import { Component, OnInit } from '@angular/core';

import { Language } from '../models/language.model';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Language[];

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.getLanguages();
  }

  getLanguages(): void {
    this.languageService.getLanguages()
      .subscribe(lang => this.languages = lang);
  }

}

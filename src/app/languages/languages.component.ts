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

  add(name: string): void {
    name = name.trim();

    if (!name) { 
      return; 
    }

    this.languageService.addLanguage({ name } as Language)
      .subscribe(language => {
        this.languages.push(language);
      });

  }

  delete(language: Language): void {
    this.languages = this.languages.filter(h => h !== language);

    this.languageService.deleteLanguage(language).subscribe();
  }

}

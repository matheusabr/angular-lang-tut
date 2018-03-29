import { Component, OnInit } from '@angular/core';

import { Language } from '../models/language.model';
import { LANGUAGES } from '../mocks/language.mock';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Language[] = LANGUAGES;
  selectedLanguage: Language;

  constructor() { }

  ngOnInit() {
  }

  onSelect(language: Language): void {
    this.selectedLanguage = language;
  }

}

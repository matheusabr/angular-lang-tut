import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Language } from './models/language.model';
import { LANGUAGES } from './mocks/language.mock';

import { MessageService } from './message.service';


@Injectable()
export class LanguageService {

  constructor(
    private messageService: MessageService
  ) { }

  getLanguages(): Observable<Language[]> {
    // Todo: send the message _after_ fetching the languages
    this.messageService.add(`LanguageService: fetched languages`);
    return of(LANGUAGES);
  }

  getLanguage(id: number): Observable<Language> {
    // Todo: send the message _after_ fetching the languages
    this.messageService.add(`LanguageService: fetched language id=${id}`);
    return of(LANGUAGES.find(language => language.id === id));
  }

}

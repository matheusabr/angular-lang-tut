import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Language } from './models/language.model';
import { LANGUAGES } from './mocks/language.mock';

@Injectable()
export class LanguageService {

  constructor() { }

  getLanguages(): Observable<Language[]> {
    return of(LANGUAGES);
  }

}

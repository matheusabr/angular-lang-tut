import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'

import { Language } from './models/language.model';

import { MessageService } from './message.service';
import { LANGUAGES } from './mocks/language.mock';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LanguageService {
  private languagesUrl = 'api/languages';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getLanguages(): Observable<Language[]> {
    this.messageService.add(`LanguageService: fetched languages`);

    return this.http.get<Language[]>(this.languagesUrl)
      .pipe(
        tap(languages => this.log(`fetched languages`)),
        catchError(this.handleError('getLanguages', []))
      );
  }

  getLanguage(id: number): Observable<Language> {
    const url = `${this.languagesUrl}/${id}`;

    return this.http.get<Language>(url)
      .pipe(
        tap(_ => this.log(`fetched language id=${id}`)),
        catchError(this.handleError<Language>(`getLanguage id=${id}`))
      );
  }

  /** PUT: update the language on the server */
  updateLanguage (language: Language): Observable<any> {
    return this.http.put(this.languagesUrl, language, httpOptions)
      .pipe(
        tap(_ => this.log(`updated language id=${language.id}`)),
        catchError(this.handleError<any>('updateLanguage'))
      );
  }

  /** POST: add a new language to the server */
  addLanguage (language: Language): Observable<Language> {
    return this.http.post<Language>(this.languagesUrl, language, httpOptions)
      .pipe(
        tap((language: Language) => this.log(`added language w/ id=${language.id}`)),
        catchError(this.handleError<Language>('addLanguage'))
      );
  }

  /** DELETE: delete the language from the server */
  deleteLanguage (language: Language | number): Observable<Language> {
    const id = typeof language === 'number' ? language : language.id;
    const url = `${this.languagesUrl}/${id}`;

    return this.http.delete<Language>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted language id=${id}`)),
      catchError(this.handleError<Language>('deleteLanguage'))
    );
  }

  /* GET languages whose name contains search term */
  searchLanguages(term: string): Observable<Language[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    
    return this.http.get<Language[]>(`api/languages/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found languages matching "${term}"`)),
        catchError(this.handleError<Language[]>('searchLanguages', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a LanguageService message with the MessageService */
  private log(message: string) {
    this.messageService.add('LanguageService: ' + message);
  }

}

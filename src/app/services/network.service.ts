import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get('./../../assets/data.json')
      .pipe(
      tap(response => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}

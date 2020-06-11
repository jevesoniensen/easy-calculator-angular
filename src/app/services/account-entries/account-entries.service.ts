import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export interface AccountEntry {
  id: number;
  date: Date;
  value: Number;
  sourceInput: SourceInput;
  description: String;
}

export interface SourceInput {
  id: number;
  name: string;
  entityType: EntryType;
  groupEntity: String;
}

export enum EntryType {
  In, Out,
}

@Injectable({
  providedIn: 'root'
})

export class AccountEntriesService {

  private serverUrl = 'http://localhost:9080/getAllAccountEntries'

  constructor(private http: HttpClient) { }

  public getColumns(): string[] {
    return ["id", "date", "value", "sourceInput"];
  }

  public getAccountEntries(): Observable<AccountEntry[]> {
    this.http.get<AccountEntry[]>(this.serverUrl).subscribe
    return this.http
               .get<AccountEntry[]>( this.serverUrl )
               .delay( 100 )
               .pipe( catchError(this.handleError<AccountEntry[]>('getAllAccountEntries', [])) )
               .pipe( 
                 map(response => response.map( item => this.formatDates(item)) ) 
                )
               ;
  }

  formatDates(results) {
    // Map through each date and replace with Date objects
    results.date = new Date(results.date);
    return results;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

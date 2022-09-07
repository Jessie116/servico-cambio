import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ExchangeRate } from '../models/exchange.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  private exchangeRateApiUrl =
    'https://v6.exchangerate-api.com/v6/3c5286edcc0e8b439a4c12e8/latest';

  constructor(private http: HttpClient) {}

  public getRates(convertFrom: string): Observable<ExchangeRate> {
    return this.http
      .get<ExchangeRate>(`${this.exchangeRateApiUrl}/${convertFrom}`)
      .pipe(
        catchError(this.handleError<ExchangeRate>('fetching exchange rate'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`error ${operation}: ${error.error.detail}`);
      return of(result as T);
    };
  }
}

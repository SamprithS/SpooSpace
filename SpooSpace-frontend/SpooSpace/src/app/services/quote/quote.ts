import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../../models/quote/quote';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuoteService {
  private readonly endpoint = `${environment.apiUrl}/quotes/random`;

  constructor(private http: HttpClient) {}

  getRandomQuoteByMood(mood: string): Observable<Quote> {
    const params = new HttpParams().set('mood', mood);
    return this.http.get<Quote>(this.endpoint, { params });
  }
}
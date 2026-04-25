import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface QuoteDTO {
  id: number;
  quoteText: string;
  memberName: string;
  groupName: string;
  mood: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://spoospace-production-e89c.up.railway.app/api/v1/quotes';

  constructor(private http: HttpClient) {}

  // Old method — kept in case needed elsewhere
  getRandomQuote(mood: string): Observable<QuoteDTO> {
    const params = new HttpParams().set('mood', mood);
    return this.http.get<QuoteDTO>(`${this.apiUrl}/random`, { params });
  }

  // New method — fetches ALL quotes for a mood at once
  getAllQuotesByMood(mood: string): Observable<QuoteDTO[]> {
    const params = new HttpParams().set('mood', mood);
    return this.http.get<QuoteDTO[]>(`${this.apiUrl}/all`, { params });
  }
}
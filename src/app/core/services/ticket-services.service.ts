import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketServicesService {
  private apiUrl = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  getAllTickets(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/get_tickets`);
  }

  createTicket(ticket: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/add_ticket`, ticket);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:8000'; 
  constructor(private http: HttpClient) {}

  getNotifications(token: string): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/get_notifications`, { token });
  }

  deleteNotification(notificationId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/delete_notification`, { notificationId });
  }
}

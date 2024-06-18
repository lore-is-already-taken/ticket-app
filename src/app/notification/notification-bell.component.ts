import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.css']
})
export class NotificationBellComponent implements OnInit {
  notifications: any[] = [];
  showNotifications = false;

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
    setInterval(() => {
      this.loadNotifications();
    }, 10000); // Polling every 10 seconds
  }

  loadNotifications(): void {
    const token = this.authService.getToken();
    if (token) {
      this.notificationService.getNotifications(token).subscribe(data => {
        this.notifications = data;
      });
    } else {
      console.error('Token is null');
    }
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  deleteNotification(notificationId: number): void {
    this.notificationService.deleteNotification(notificationId).subscribe(() => {
      this.notifications = this.notifications.filter(n => n.notificationID !== notificationId);
    });
  }
}

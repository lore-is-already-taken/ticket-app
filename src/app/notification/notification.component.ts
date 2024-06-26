import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../core/services/notification.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-notification",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./notification.component.html",
	styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
	notifications: any[] = [];
	dropdownVisible = false;

	constructor(private notificationService: NotificationService) {}

	ngOnInit(): void {
		this.notificationService.getNotifications().subscribe({
			next: (notifications) => {
				this.notifications = notifications;
				console.log(this.notifications);
			},
		});
	}

	markAsRead(): void {
		console.log("limpiando notificaciones");
		const newArray = this.notifications.map((item) => ({
			eventoID: item.eventoID,
		}));
		this.notificationService.markAsRead(newArray).subscribe({
			next: () => {
				console.log("notificaciones limpiadas");
			},
		});
	}

	toggleDropdown(): void {
		this.dropdownVisible = !this.dropdownVisible;
	}
}

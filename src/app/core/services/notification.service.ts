import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "./common";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root",
})
export class NotificationService {
	NOTIFICATIONS_URL = API_URL + "get_events";
	CLOSE_NOTIFICATIONS = API_URL + "notifica";
	constructor(
		private httpClient: HttpClient,
		private user: AuthService,
	) {}

	getNotifications(): Observable<any> {
		const request = {
			access_token: this.user.getToken(),
		};
		return this.httpClient.post<any>(this.NOTIFICATIONS_URL, request);
	}

	markAsRead(notificationID: any[]): Observable<any> {
		console.log(notificationID);

		return this.httpClient.post(this.CLOSE_NOTIFICATIONS, notificationID);
	}
}

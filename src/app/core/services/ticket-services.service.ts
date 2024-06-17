import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root",
})
export class TicketServicesService {
	private apiUrl = "http://localhost:8000";

	constructor(
		private httpClient: HttpClient,
		private aithService: AuthService,
	) {}

	getAllTickets(): Observable<any[]> {
		return this.httpClient.get<any[]>(`${this.apiUrl}/get_tickets`);
	}

	createTicket(ticket: any): Observable<any> {
		const request = { ...ticket, access_token: this.aithService.getToken() };
		return this.httpClient.post(`${this.apiUrl}/add_ticket`, request);
	}
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { API_URL } from "./common";

@Injectable({
	providedIn: "root",
})
export class TicketServicesService {
	GET_ALL_TICKETS_URL = API_URL + "get_tickets";
	CREATE_TICKET_URL = API_URL + "add_ticket";

	constructor(
		private httpClient: HttpClient,
		private aithService: AuthService,
	) {}

	getAllTickets(): Observable<any[]> {
		return this.httpClient.get<any[]>(`${this.GET_ALL_TICKETS_URL}`);
	}

	createTicket(ticket: any): Observable<any> {
		const request = { ...ticket, access_token: this.aithService.getToken() };
		console.log(request);
		return this.httpClient.post(this.CREATE_TICKET_URL, request);
	}
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { API_URL } from "./common";
import { TicketInterface } from "../../interfaces/ticket.interface";
import { hasLift } from "rxjs/internal/util/lift";

@Injectable({
	providedIn: "root",
})
export class TicketServicesService {
	GET_ALL_TICKETS_URL = API_URL + "get_tickets";
	CREATE_TICKET_URL = API_URL + "add_ticket";
	ASSIGN_TICKER_URL = API_URL + "assign_ticket";
	FILTERED_TICKETS_URL = API_URL + "get_filtered_tickets";

	GET_TICKETS_BY_AUTOR_URL = API_URL + "get_tickets_by_autor";
	GET_TICKETS_BY_USER_URL = API_URL + "get_tickets_by_responsable";
	CLOSE_TICKET_URL = API_URL + "close_ticket";

	constructor(
		private httpClient: HttpClient,
		private authService: AuthService,
	) {}

	getAllTickets(): Observable<TicketInterface[]> {
		return this.httpClient.get<TicketInterface[]>(this.GET_ALL_TICKETS_URL);
	}
	getFilteredTickets(filter: string): Observable<any> {
		const request = {
			input: filter,
		};
		return this.httpClient.post(this.FILTERED_TICKETS_URL, request);
	}

	createTicket(ticket: any): Observable<any> {
		const request = { ...ticket, access_token: this.authService.getToken() };
		return this.httpClient.post(this.CREATE_TICKET_URL, request);
	}

	getTicketsByAuthor(): Observable<any> {
		const request = {
			access_token: this.authService.getToken(),
		};
		return this.httpClient.post(this.GET_TICKETS_BY_AUTOR_URL, request);
	}

	getTicketsByResponsable(): Observable<any> {
		const request = {
			access_token: this.authService.getToken(),
		};
		return this.httpClient.post(this.GET_TICKETS_BY_USER_URL, request);
	}

	closeSelectedTicket(ticketID: number): Observable<any> {
		const request = {
			id: ticketID,
		};
		return this.httpClient.post(this.CLOSE_TICKET_URL, request);
	}

	assignTicket(ticketID: number): Observable<any> {
		const request = {
			access_token: this.authService.getToken(),
			ticket_id: ticketID,
		};
		console.log(request);
		return this.httpClient.post<any>(this.ASSIGN_TICKER_URL, request);
	}
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class TicketServicesService {
	constructor(private httpClient: HttpClient) {}

	getAllTickets() {
		return ["getting", "Tickets"];
	}
}

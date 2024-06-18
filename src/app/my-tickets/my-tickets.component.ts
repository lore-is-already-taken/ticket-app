import { Component } from "@angular/core";
import { TicketServicesService } from "../core/services/ticket-services.service";
import { TicketInterface } from "../interfaces/ticket.interface";

@Component({
	selector: "app-my-tickets",
	standalone: true,
	imports: [],
	templateUrl: "./my-tickets.component.html",
	styleUrl: "./my-tickets.component.css",
})
export class MyTicketsComponent {
	constructor(private ticketServices: TicketServicesService) {}

	tickets: TicketInterface[] = [];
	ticketLength = 0;

	ngOnInit(): void {
		this.get_tickets();
	}

	get_tickets() {
		this.ticketServices.getTicketsByAuthor().subscribe({
			next: (data) => {
				this.tickets = data;
			},
		});
		this.ticketServices.getTicketsByResponsable().subscribe({
			next: (data) => {
				this.tickets = [...data];
			},
		});
	}
}

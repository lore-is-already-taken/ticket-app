import { Component } from "@angular/core";
import { CreateTicketComponent } from "../create-ticket/create-ticket.component";
import { TicketComponent } from "../ticket/ticket.component";
import { TicketServicesService } from "../core/services/ticket-services.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CreateTicketComponent, TicketComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	constructor(private ticketServices: TicketServicesService) {}
	tickets = [{}];
	ngOnInit(): void {
		this.tickets = this.ticketServices.getAllTickets();
		console.log(this.tickets);
	}
}

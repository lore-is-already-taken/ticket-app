import { Component, OnInit } from "@angular/core";
import { CreateTicketComponent } from "../create-ticket/create-ticket.component";
import { TicketComponent } from "../ticket/ticket.component";
import { TicketServicesService } from "../core/services/ticket-services.service";
import { CommonModule } from "@angular/common";
import { TicketInterface } from "../interfaces/ticket.interface";
import { UserInterface } from "../interfaces/user.interface";
import { ChangeSettingsService } from "../core/services/change-settings.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, CreateTicketComponent, TicketComponent],
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
	tickets: TicketInterface[] = [];
	user: UserInterface = { email: "", access_token: "", username: "", rol: "" };

	constructor(
		private ticketServices: TicketServicesService,
		private userSettings: ChangeSettingsService,
	) {}

	ngOnInit(): void {
		this.getTickets();
		this.userSettings.getUser().subscribe({
			next: (x) => {
				this.user = x;
				console.log(this.user);
			},
		});
	}
	getTickets() {
		this.ticketServices.getAllTickets().subscribe({
			next: (data) => {
				this.tickets = data;
				console.log(this.tickets);
			},
			error: (err) => console.error("Error fetching tickets", err),
		});
	}

	takeTicket(ticketId: number) {
		this.ticketServices.assignTicket(ticketId).subscribe({
			next: () => {
				this.getTickets();
				alert("Ticket asignado Correctamente");
			},
			error: (err) => {
				console.log("no se pudo asignar ticket", err);
				alert("no se pudoa ssignar ticket");
			},
		});
	}
}

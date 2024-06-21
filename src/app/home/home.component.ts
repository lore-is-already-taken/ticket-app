import { Component, OnInit } from "@angular/core";
import { CreateTicketComponent } from "../create-ticket/create-ticket.component";
import { TicketComponent } from "../ticket/ticket.component";
import { TicketServicesService } from "../core/services/ticket-services.service";
import { CommonModule } from "@angular/common";
import { AutorByRol, UserInterface } from "../interfaces/user.interface";
import { ChangeSettingsService } from "../core/services/change-settings.service";
import { TicketInterface } from "../interfaces/ticket.interface";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [
		ReactiveFormsModule,
		CommonModule,
		CreateTicketComponent,
		TicketComponent,
	],
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
	tickets: any[] = [];
	user: UserInterface = { email: "", access_token: "", username: "", rol: "" };
	autores: AutorByRol[] = [];

	filterForm = this.fb.group({
		filter: ["", Validators.required],
	});

	constructor(
		private ticketServices: TicketServicesService,
		private userSettings: ChangeSettingsService,
		private fb: FormBuilder,
	) {}

	ngOnInit(): void {
		this.getTickets();
		this.userSettings.getUser().subscribe({
			next: (x) => {
				this.user = x;
			},
		});
	}

	getTickets() {
		this.ticketServices.getAllTickets().subscribe({
			next: (data) => {
				this.tickets = data;
				console.log("gettin tickets", data);
			},
			error: (err) => console.error("Error fetching tickets", err),
		});
	}

	takeTicket(ticket: TicketInterface) {
		if (ticket.responsable === "No asignado") {
			this.ticketServices.assignTicket(ticket.ticketID).subscribe({
				next: () => {
					this.getTickets();
					alert("Ticket asignado Correctamente");
				},
				error: (err) => {
					console.log("no se pudo asignar ticket", err);
					alert("no se pudoa ssignar ticket");
				},
			});
		} else {
			alert("Ticket is already taken");
		}
	}

	filterTickets() {
		if (this.filterForm.valid) {
			this.ticketServices
				.getFilteredTickets(this.filterForm.value.filter!)
				.subscribe({
					next: (data) => {
						this.tickets = data;
					},
					error: (err) => console.error("Error fetching tickets", err),
				});
		} else {
			console.log("invalid");
		}
	}
}

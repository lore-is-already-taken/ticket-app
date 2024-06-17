import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TicketServicesService } from "../core/services/ticket-services.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-create-ticket",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./create-ticket.component.html",
	styleUrls: ["./create-ticket.component.css"],
})
export class CreateTicketComponent implements OnInit {
	ticketForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private ticketService: TicketServicesService,
	) {
		this.ticketForm = this.fb.group({
			contenido: ["", Validators.required],
			categoria: ["", Validators.required],
			prioridad: [1, Validators.required],
		});
	}

	ngOnInit(): void {}

	createTicket() {
		if (this.ticketForm.valid) {
			this.ticketService.createTicket(this.ticketForm.value).subscribe({
				next: () => alert("Ticket creado con éxito"),
				error: (err) => console.error("Error al crear ticket", err),
			});
		} else {
			alert("Todos los campos son obligatorios");
		}
	}
}

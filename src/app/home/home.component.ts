import { Component } from "@angular/core";
import { CreateTicketComponent } from "../create-ticket/create-ticket.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CreateTicketComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {}

import { RouterLink, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { Component } from "@angular/core";
import { initFlowbite } from "flowbite";
@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, RouterLink, NavbarComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "Ticket App";

	ngOnInit(): void {
		initFlowbite();
	}
}

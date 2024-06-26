import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from "../core/services/auth.service";
import { NotificationComponent } from "../notification/notification.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [RouterLink, RouterOutlet, NotificationComponent, CommonModule],
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
	constructor(private authService: AuthService) {}

	logout() {
		this.authService.logout();
	}

	isAuthenticated = this.authService.isAuthenticated();
}

import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NotificationBellComponent } from "../notification/notification-bell.component";
import { AuthService } from "../core/services/auth.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink, RouterOutlet, NotificationBellComponent],
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

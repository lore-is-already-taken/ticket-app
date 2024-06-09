import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SigninComponent } from "./signin/signin.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		RouterLink,
		UserComponent,
		LoginComponent,
		NavbarComponent,
		SigninComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "tutorial";
	city = "Punta Arenas";
}

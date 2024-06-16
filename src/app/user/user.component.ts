import { Component } from "@angular/core";

@Component({
	selector: "app-user",
	standalone: true,
	imports: [],
	templateUrl: "./user.component.html",
	styleUrl: "./user.component.css",
})
export class UserComponent {
	username = "Lore";
	favGame = "";
	isLoggedIn = false;
	getFavorite(gameName: string) {
		this.favGame = gameName;
	}
	greet() {
		alert("hola");
	}
}

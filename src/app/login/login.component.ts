import { Component } from "@angular/core";
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { AuthService } from "../core/services/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [ReactiveFormsModule, FormsModule, CommonModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	loginForm = this.formBuilder.group({
		email: ["", Validators.required],
		password: ["", Validators.required],
	});

	constructor(
		private authService: AuthService,
		private router: Router,
		private formBuilder: FormBuilder,
	) {}

	login(): void {
		this.authService
			.login(this.loginForm.value.email!, this.loginForm.value.password!)
			.subscribe({
				next: () => this.router.navigate(["/home"]),
				error: (err) => console.error("lofin failded", err),
			});
	}
}

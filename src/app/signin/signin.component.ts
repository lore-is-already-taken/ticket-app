import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { checkPasswords } from "./validations.component";
import { Router } from "@angular/router";
import { RegisterService } from "../core/services/register.service";
import { RegistrationInterface } from "../interfaces/user.interface";

@Component({
	selector: "app-signin",
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: "./signin.component.html",
	styleUrl: "./signin.component.css",
})
export class SigninComponent {
	registerForm = this.formBuilder.group({
		email: ["", Validators.required],
		username: ["", Validators.required],
		rol: [false, Validators.required],
		password: ["", Validators.required],
		checkPassword: ["", Validators.required],
	});

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private registerService: RegisterService,
	) {}

	checkPasswords(password: string, checkpassword: string) {
		if (password === checkpassword) {
			return true;
		}
		alert("passwords don't match");
		return false;
	}
	validateForm() {
		const passwordIsValid = checkPasswords(
			this.registerForm.value.password!,
			this.registerForm.value.checkPassword!,
		);

		let isvalid = false;

		if (!this.registerForm.valid) {
			alert("all fileds are required");
		} else if (!passwordIsValid) {
			alert("passwords do not match");
		} else {
			isvalid = true;
		}
		return isvalid;
	}

	onSubmit() {
		if (this.validateForm()) {
			const user_registration: RegistrationInterface = {
				name: this.registerForm.value.username!,
				email: this.registerForm.value.email!,
				password: this.registerForm.value.password!,
				rol: this.registerForm.value.rol ? "admin" : "normal",
			};

			this.registerService.register(user_registration).subscribe({
				next: () => this.router.navigate(["/home"]),
				error: () => alert("el correo ingresado ya existe"),
			});
		}
	}
}

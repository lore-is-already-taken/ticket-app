import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

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
		password: ["", Validators.required],
		checkPassword: ["", Validators.required],
	});

	constructor(private formBuilder: FormBuilder) {}

	onSubmit() {
		if (this.registerForm.valid) {
			alert(this.registerForm);
		} else {
			alert("all fields must be filled");
		}
		// TODO: Use EventEmitter with form value
	}
}

import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ChangeSettingsService } from "../core/services/change-settings.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-user-settings",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./user-settings.component.html",
	styleUrl: "./user-settings.component.css",
})
export class UserSettingsComponent {
	settingForm = this.formBuilder.group({
		name: ["", Validators.required],
	});
	changePasswordForm = this.formBuilder.group({
		newPass: ["", Validators.required],
		confirmNewPass: ["", Validators.required],
		oldPassword: ["", Validators.required],
	});

	user = { name: "", email: "" };

	ngOnInit(): void {
		this.getUser();
	}

	changeUsername() {
		if (this.settingForm.valid) {
			this.userSettings
				.changeUsername({ name: this.settingForm.value.name! })
				.subscribe({
					next: () => alert("username has been changed"),
					error: (err) => console.log("no se pudo cambiar nombre usuario", err),
					complete: () => console.log("ya estoy listo"),
				});
			this.userSettings.getUser().subscribe({
				next: (x) => {
					console.log("este es el k edite", x);
					this.user.name = x.name;
					this.user.email = x.email;
				},
			});
		} else {
			alert("No puede un nombre vacio");
		}
	}
	getUser() {
		console.log(
			this.userSettings.getUser().subscribe({
				next: (user_info) => {
					this.user.name = user_info.name;
					this.user.email = user_info.email;
				},
			}),
		);
	}
	deleteUser() {
		this.userSettings.deleteUser().subscribe({
			next: () => alert("your account has been deleted"),
		});
	}
	changePassword() {
		if (
			this.changePasswordForm.value.newPass! ===
			this.changePasswordForm.value.confirmNewPass!
		) {
			this.userSettings
				.changePassword(
					this.changePasswordForm.value.oldPassword!,
					this.changePasswordForm.value.newPass!,
				)
				.subscribe({ next: () => alert("password changed") });
		} else {
			alert("passwords paswords do not match");
		}
	}

	constructor(
		private formBuilder: FormBuilder,
		private userSettings: ChangeSettingsService,
		private router: Router,
	) {}
}

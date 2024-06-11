import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationInterface } from "../../interfaces/user.interface";
import { Observable, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class RegisterService {
	private REGISTER_URL = "http://127.0.01:8081/user/signup";
	constructor(
		private httpClient: HttpClient,
		private router: Router,
	) {}

	register(registerUser: RegistrationInterface): Observable<any> {
		const register_req = {
			user: registerUser.user,
			email: registerUser.email,
			admin: registerUser.admin,
			password: registerUser.password,
		};

		return this.httpClient.post<any>(this.REGISTER_URL, register_req).pipe(
			tap((response) => {
				console.log(response);
			}),
		);
	}
}

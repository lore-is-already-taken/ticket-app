import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistrationInterface } from "../../interfaces/user.interface";
import { Observable, tap } from "rxjs";
import { API_URL } from "./common";

@Injectable({
	providedIn: "root",
})
export class RegisterService {
	private tokenKey = "access_token";
	private REGISTER_URL = API_URL + "add_user";
	constructor(private httpClient: HttpClient) {}

	register(registerUser: RegistrationInterface): Observable<any> {
		const register_req = {
			name: registerUser.name,
			email: registerUser.email,
			rol: registerUser.rol,
			password: registerUser.password,
		};

		return this.httpClient.post<any>(this.REGISTER_URL, register_req).pipe(
			tap((response) => {
				if (response.access_token) {
					this.setToken(response.access_token);
				}
			}),
		);
	}

	private setToken(token: string): void {
		localStorage.setItem(this.tokenKey, token);
	}
}

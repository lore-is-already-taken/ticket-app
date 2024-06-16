import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { API_URL } from "./common";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private LOGIN_URL = API_URL + "login";
	private tokenKey = "access_token";
	constructor(
		private httpClient: HttpClient,
		private router: Router,
	) {}

	login(email: string, password: string): Observable<any> {
		const login_req = {
			email: email,
			password: password,
		};

		return this.httpClient.post<any>(this.LOGIN_URL, login_req).pipe(
			tap((response) => {
				if (response.access_token) {
					const token = response.access_token;
					this.setToken(token);
				} else {
					console.log(response);
				}
			}),
		);
	}

	private setToken(token: string): void {
		localStorage.setItem(this.tokenKey, token);
	}

	getToken(): string | null {
		if (typeof window !== "undefined") {
			return localStorage.getItem(this.tokenKey);
		} else {
			return null;
		}
	}

	isAuthenticated(): boolean {
		const token = this.getToken();
		if (!token) {
			return false;
		}
		return true;
	}
	logout(): void {
		localStorage.removeItem(this.tokenKey);
		this.router.navigate(["/login"]);
	}
}

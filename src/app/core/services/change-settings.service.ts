import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AutorByRol, changeName } from "../../interfaces/user.interface";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { API_URL } from "./common";

@Injectable({
	providedIn: "root",
})
export class ChangeSettingsService {
	CHANGE_URL = API_URL + "update_name";
	GET_USER_URL = API_URL + "get_user";
	UPDATE_PASS_URL = API_URL + "update_pass";
	DROP_USER_URL = API_URL + "drop_user";
	GET_USER_BY_ID_URL = API_URL + "get_user_by_rol";
	GET_NORMAL_USERS_URL = API_URL + "get_normal_user";
	constructor(
		private httpClient: HttpClient,
		private auth: AuthService,
	) {}

	changeUsername(username: changeName): Observable<any> {
		const request = {
			access_token: this.auth.getToken(),
			name: username.name,
		};
		this.getUser();
		return this.httpClient.post<any>(this.CHANGE_URL, request);
	}

	changePassword(oldpass: string, newpass: string): Observable<any> {
		const request = {
			access_token: this.auth.getToken(),
			oldPass: oldpass,
			newPass: newpass,
		};
		return this.httpClient.post<any>(this.UPDATE_PASS_URL, request);
	}

	getUserByRol(userID: number) {
		const request = {
			id: userID,
		};
		return this.httpClient.post<AutorByRol>(this.GET_USER_BY_ID_URL, request);
	}

	deleteUser(): Observable<any> {
		const request = {
			access_token: this.auth.getToken(),
		};
		const response = this.httpClient.post(this.DROP_USER_URL, request);
		this.auth.logout;
		return response;
	}

	getUser(): Observable<any> {
		const solicitud = this.httpClient.post<any>(this.GET_USER_URL, {
			access_token: this.auth.getToken(),
		});

		return solicitud;
	}
	getNormalUsers(): Observable<any> {
		return this.httpClient.get(this.GET_NORMAL_USERS_URL);
	}
}

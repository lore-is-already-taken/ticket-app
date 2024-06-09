import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "signin", component: SigninComponent },
	{ path: "home", component: HomeComponent },
];

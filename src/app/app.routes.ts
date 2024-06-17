import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { authGuard } from "./core/guard/auth.guard";
import { authenticatedGuard } from "./core/guard/authenticated.guard";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { CreateTicketComponent } from "./create-ticket/create-ticket.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [authenticatedGuard],
  },
  {
    path: "signin",
    component: SigninComponent,
    canActivate: [authenticatedGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: "userSettings",
    component: UserSettingsComponent,
    canActivate: [authGuard],
  },
  {
    path: "create-ticket",
    component: CreateTicketComponent,
    canActivate: [authGuard],
  }
];

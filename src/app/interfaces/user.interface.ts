export interface UserInterface {
	email: string;
	access_token: string;
	username: string;
	rol: string;
}
export interface UserInterfaceWithId extends UserInterface {
	id: number;
}
export interface RegistrationInterface {
	name: string;
	email: string;
	password: string;
	rol: string;
}
export interface changeName {
	name: string;
}

export interface EmailUsername {
	name: string;
	email: string;
}
export interface AutorByRol {
	name: string;
	email: string;
	rol: number;
}

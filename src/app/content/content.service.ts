import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ContentService {
	constructor() {}
	load(url: string): Promise<boolean> {
		console.log(url);
		return Promise.resolve(false);
	}
}

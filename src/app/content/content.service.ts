import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ContentService {
	static cache = new Map<Content["id"], Content>();
	constructor(private http: HttpClient) {}

	get(id: string): Promise<Content> {
		if (ContentService.cache.has(id)) {
			const result = ContentService.cache.get(id);
			if (result) {
				return Promise.resolve(result);
			}
		}
		return this.fetch(id);
	}

	fetch(id: string): Promise<Content> {
		return new Promise((resolve, reject) =>
			// TODO: Move to real CMS
			this.http.get(`/assets/content/${id}.html`, { responseType: "text" }).subscribe({
				next: it =>
					resolve({
						id,
						content: it,
					}),
				error: reject,
			})
		);
	}
}

export interface Content {
	id: string;
	content: string;
}

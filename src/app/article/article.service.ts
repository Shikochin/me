import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncSubject, catchError, Observable, of, retry } from "rxjs";

import { Article } from "./article.type";

@Injectable({
	providedIn: "root",
})
export class ArticleService {
	constructor(private http: HttpClient) {}
	private cache = new Map<string, Observable<Article>>();
	getArticle(id: string): Observable<Article> {
		if (this.cache.has(id)) {
			const article = this.cache.get(id);
			if (article) {
				queueMicrotask(() => this.updateArticle(id));
				return article;
			}
		}
		return this.updateArticle(id);
	}
	private updateArticle(id: string): Observable<Article> {
		const article = this.fetchArticle(id);
		this.cache.set(id, article);
		return article;
	}
	private fetchArticle(id: string): Observable<Article> {
		const url = `/assets/data/article/${id}.json`;
		const subject = new AsyncSubject<Article>();

		this.http
			.get<Article>(url, { responseType: "json" })
			.pipe(
				retry({ count: 1, delay: 500 }),
				catchError((err: HttpErrorResponse) => (err.status === 404 ? of(NOT_FOUND) : of(UNKNOWN)))
			)
			.subscribe(subject);

		return subject.asObservable();
	}
}

const NOT_FOUND: Article = {
	id: "NOT_FOUND",
	title: "",
	content: "",
};

const UNKNOWN: Article = {
	id: "UNKNOWN",
	title: "",
	content: "",
};

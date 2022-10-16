import { Injectable } from "@angular/core";

import { Article } from "./article.type";

@Injectable({
	providedIn: "root",
})
export class ArticleService {
	private cache = new Map<string, Article>();
	async getArticle(id: string): Promise<Article> {
		if (this.cache.has(id)) {
			const article = this.cache.get(id);
			if (article) {
				return article;
			}
		}
		const article = await this.fetchArticle(id).catch(it => it);
		this.cache.set(id, article);
		return article;
	}
	private fetchArticle(id: string): Promise<Article> {
		return fetch(`/assets/data/article/${id}.json`).then(it => (it.ok ? it.json() : null));
	}
}

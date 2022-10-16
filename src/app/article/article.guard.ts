import { Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment } from "@angular/router";

import { ArticleService } from "./article.service";

@Injectable({
	providedIn: "root",
})
export class ArticleGuard implements CanMatch {
	constructor(private article: ArticleService) {}
	async canMatch(route: Route, segments: UrlSegment[]): Promise<boolean> {
		return !!(await this.article.getArticle(segments.map(it => it.path).join()));
	}
}

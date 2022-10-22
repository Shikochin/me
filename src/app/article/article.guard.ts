import { Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment } from "@angular/router";

import { ArticleService } from "./article.service";

@Injectable({
	providedIn: "root",
})
export class ArticleGuard implements CanMatch {
	constructor(private article: ArticleService) {}
	canMatch(route: Route, segments: UrlSegment[]): Promise<boolean> {
		return new Promise(resolve =>
			this.article
				.getArticle(segments.map(it => it.path).join())
				.subscribe(article => resolve(!["NOT_FOUND", "UNKNOWN"].includes(article.id)))
		);
	}
}

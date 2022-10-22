import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { map, takeUntil } from "rxjs";

import { ArticleService } from "../article.service";
import { Article } from "../article.type";

@Component({
	selector: "krt-article",
	templateUrl: "./article.component.html",
	styleUrls: ["./article.component.scss"],
	standalone: true,
	imports: [CommonModule, RouterModule],
})
export class ArticleComponent implements OnInit, OnDestroy {
	constructor(private route: ActivatedRoute, private articleService: ArticleService) {}
	private destory$ = new EventEmitter();

	protected id$ = this.route.params.pipe(
		takeUntil(this.destory$),
		map(params => params["id"] || "")
	);
	protected article?: Article;

	ngOnInit(): void {
		this.id$.subscribe(id => {
			this.article = undefined;
			this.articleService.getArticle(id).subscribe(article => (this.article = article));
		});
	}
	ngOnDestroy(): void {
		this.destory$.emit();
	}
}

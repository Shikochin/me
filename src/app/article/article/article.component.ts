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
		map(it => it["id"] || "")
	);
	protected article?: Article;

	ngOnInit(): void {
		this.id$.subscribe(it => {
			this.article = undefined;
			this.articleService.getArticle(it).then(v => (this.article = v));
		});
	}
	ngOnDestroy(): void {
		this.destory$.emit();
	}
}

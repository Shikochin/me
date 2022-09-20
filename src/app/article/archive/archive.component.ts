import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ArticleService } from "../article.service";
import { Article } from "../article.type";

@Component({
	selector: "krtl-archive",
	templateUrl: "./archive.component.html",
	styleUrls: ["./archive.component.scss"],
	imports: [CommonModule, RouterModule],
	standalone: true,
})
export class ArchiveComponent implements OnInit {
	constructor(private articleService: ArticleService) {}
	protected articles: Article[] = [];

	ngOnInit(): void {
		this.articleService.getArticlesList(0).then(it => (this.articles = it));
	}
}

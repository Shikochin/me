import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ArchiveComponent } from "./archive/archive.component";
import { ArticleGuard } from "./article.guard";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
	{
		path: "",
		component: ArchiveComponent,
		title: "Articles",
	},
	{
		path: ":id",
		component: ArticleComponent,
		canMatch: [ArticleGuard],
		runGuardsAndResolvers: "always",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleRoutingModule {}

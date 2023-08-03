import { NgModule } from "@angular/core";
import { RouterModule, Routes, TitleStrategy } from "@angular/router";
import { concatMap, of, timer } from "rxjs";

// import { concatMap, of, timer } from "rxjs";
import { CustomTitleStrategy } from "./common/title-strategy.service";

const routes: Routes = [
	// {
	// 	path: "article",
	// 	loadChildren: () => import("./article/article.module").then(it => it.ArticleModule),
	// },
	{
		path: "app",
		children: [
			{
				path: "uuid",
				loadComponent: () => import("./app/uuid/uuid.component").then(it => it.UuidComponent),
			},
			{
				path: "base64",
				loadComponent: () => import("./app/base64/base64.component").then(it => it.Base64Component),
			},
			{
				path: "bilivid",
				loadComponent: () => import("./app/bilivid/bilivid.component").then(it => it.BilividComponent),
			},
		],
	},
	{
		path: "",
		loadComponent: () => import("./content/legacy/index/index.component").then(it => it.IndexComponent),
	},
	{
		path: "friend",
		loadComponent: () => import("./content/legacy/friend/friend.component").then(it => it.FriendComponent),
		title: "Friends",
	},
	{
		path: "about",
		loadComponent: () => import("./content/legacy/about/about.component").then(it => it.AboutComponent),
		title: "About",
	},
	// {
	// 	matcher: (segments, group) => {
	// 		console.log(segments);
	// 		return { consumed: segments, posParams: {} };
	// 	},
	// 	// path: "**",
	// 	loadComponent: () => import("./content/holder.component").then(it => it.HolderComponent),
	// 	canMatch: [hookGuard],
	// 	// pathMatch: "full",
	// },
	{
		path: "",
		canMatch: [() => timer(1000).pipe(concatMap(() => of(false)))],
		children: [],
	},
	{
		path: "**",
		loadComponent: () => import("./error/notfound/notfound.component").then(it => it.NotfoundComponent),
		title: "Not Found",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
})
export class AppRoutingModule {}

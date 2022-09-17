import { Component, OnInit } from "@angular/core";

@Component({
	selector: "krtl-navlist",
	templateUrl: "./navlist.component.html",
	styleUrls: ["./navlist.component.scss"],
})
export class NavlistComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	links: Link[] = [
		{
			name: "Home",
			icon: "home",
			href: "/",
		},
		{
			name: "Articles",
			icon: "article",
			href: "/article",
		},
		{
			name: "Friends",
			icon: "people",
			href: "/friend",
		},

		{
			name: "About",
			icon: "info",
			href: "/about",
		},
	];
	protected g(): void {
		this.links.push(
			...Array.from({ length: 32 }, (it, i) => ({
				name: `Item #${this.links.length + i}`,
			}))
		);
	}
}

export interface Link {
	icon?: string;
	color?: string;
	href?: string;
	name?: string;
	isLink?: boolean;
}

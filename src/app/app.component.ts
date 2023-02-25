import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, OnInit, ViewChild } from "@angular/core";
import { AnimationCurves } from "@angular/material/core";
import { MatDrawer } from "@angular/material/sidenav";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { filter, fromEvent, merge, take, takeUntil } from "rxjs";

import { ThemeService } from "./common/layout.service";

@Component({
	selector: "krtl-app",
	templateUrl: "./app.component.html",
	styles: [
		`
			:host {
				height: 100%;
				display: flex;
				flex-direction: column;
			}

			.spacer {
				flex-grow: 1;
			}
		`,
	],
	animations: [
		trigger("indicator", [
			state(
				"done",
				style({
					translate: "0 -100%",
				})
			),
			state(
				"loading",
				style({
					translate: "0 0",
				})
			),
			transition("*=>*", [animate(`0.2s ${AnimationCurves.ACCELERATION_CURVE}`)]),
		]),
	],
})
export class AppComponent implements OnInit {
	private destory$ = new EventEmitter();
	protected navigate$ = new EventEmitter<string>();

	@ViewChild("drawer")
	private drawer?: MatDrawer;

	protected indicator: string = "loading";

	protected links: Link[] = [
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

	constructor(protected layout: ThemeService, private router: Router) {}

	ngOnDestroy(): void {
		this.destory$.emit();
	}

	ngOnInit(): void {
		const navigationEnd$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

		const refresh$ = this.navigate$.pipe(filter(url => url === this.router.url));

		merge(navigationEnd$, refresh$)
			.pipe(
				filter(() => !this.layout.isLarge),
				takeUntil(this.destory$)
			)
			.subscribe(() => this.drawer?.close());

		const pageLoad$ = fromEvent(globalThis, "load").pipe(take(1));

		merge(navigationEnd$, pageLoad$)
			.pipe(takeUntil(this.destory$))
			.subscribe(() => (this.indicator = "done"));

		this.router.events
			.pipe(
				filter(event => event instanceof NavigationStart),
				takeUntil(this.destory$)
			)
			.subscribe(() => (this.indicator = "loading"));
	}
}

interface Link {
	icon?: string;
	color?: string;
	href?: string;
	name?: string;
	isLink?: boolean;
}

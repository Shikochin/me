import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
import { AsyncPipe } from "@angular/common";
import { Component, EventEmitter, OnInit, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { AnimationCurves } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from "@angular/router";
import { filter, fromEvent, merge, take, takeUntil } from "rxjs";

import { ThemeService } from "./common/layout.service";

@Component({
	selector: "krtl-app",
	templateUrl: "./app.component.html",
	styles: [
		`
			:host {
				display: flex;
				flex-direction: column;
				contain: paint;
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
			transition("* => *", [animate(`0.2s ${AnimationCurves.ACCELERATION_CURVE}`)]),
		]),
		trigger("overlay", [
			state(
				"done",
				style({
					opacity: "0",
				})
			),
			state(
				"loading",
				style({
					opacity: "0.3",
				})
			),
			transition("* => *", [animate(`0.2s ${AnimationCurves.ACCELERATION_CURVE}`)]),
		]),
	],
	standalone: true,
	imports: [
		MatProgressBarModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		RouterOutlet,
		MatListModule,
		RouterLink,
		AsyncPipe,
	],
})
export class AppComponent implements OnInit {
	private destory$ = new EventEmitter();

	@ViewChild("drawer")
	private drawer?: MatDrawer;

	protected status: "loading" | "done" = "loading";

	constructor(protected layout: ThemeService, private router: Router) {}

	ngOnDestroy(): void {
		this.destory$.emit();
	}

	ngOnInit(): void {
		const navigationEnd$ = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			takeUntil(this.destory$)
		);

		const navigationStart$ = this.router.events.pipe(
			filter(event => event instanceof NavigationStart),
			takeUntil(this.destory$)
		);

		const pageLoad$ = fromEvent(globalThis, "load").pipe(take(1));

		navigationEnd$.pipe(filter(() => !this.layout.isLarge)).subscribe(() => this.drawer?.close());

		merge(navigationEnd$, pageLoad$)
			.pipe(takeUntil(this.destory$))
			.subscribe(() => (this.status = "done"));

		navigationStart$.subscribe(() => {
			this.status = "loading";
			// if ((document as any).startViewTransition) {
			// 	(document as any).startViewTransition(console.log);
			// }
		});
	}
}

import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, share, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	constructor(private breakpointObserver: BreakpointObserver) {}
	isLarge$ = this.breakpointObserver.observe("(width >= 720px), (orientation: landscape)").pipe(
		map(it => it.matches),
		tap(it => {
			this.isLarge = it;
			// TODO: better method to get the body element or apply class to it
			const classList = document.body.classList;
			if (it) {
				classList.add("large");
			} else {
				classList.remove("large");
			}
		}),
		share({
			connector: () => new BehaviorSubject(this.isLarge),
		})
	);
	isLarge = false;
	isDark$ = this.breakpointObserver.observe("(prefers-color-scheme: dark)").pipe(
		map(it => it.matches),
		tap(it => {
			this.isDark = it;
			// TODO: better method to get the body element or apply class to it
			const classList = document.body.classList;
			if (it) {
				classList.add("dark");
			} else {
				classList.remove("dark");
			}
		}),
		share({
			connector: () => new BehaviorSubject(this.isDark),
		})
	);
	isDark = false;
}

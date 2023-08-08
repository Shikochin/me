import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnDestroy, OnInit, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { takeUntil } from "rxjs";

@Component({
	standalone: true,
	imports: [CommonModule, RouterModule, MatButtonModule],
	template: `<h1>Not Found</h1>

		<p>We're sorry but the page you requested "{{ path() }}" doesn't seem to be exist.</p>
		<p>That's all we know. :(</p>`,
})
export class NotfoundComponent implements OnInit, OnDestroy {
	private destory$ = new EventEmitter();
	constructor(private router: Router) {}
	ngOnInit(): void {
		this.router.events.pipe(takeUntil(this.destory$)).subscribe(it => {
			if (it instanceof NavigationEnd) {
				this.path.set(it.url);
			}
		});
	}
	ngOnDestroy(): void {
		this.destory$.emit();
	}
	protected path = signal(this.router.url);
}

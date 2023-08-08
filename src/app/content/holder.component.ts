import { CommonModule } from "@angular/common";
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, merge, takeUntil } from "rxjs";

import { ContentService } from "./content.service";

@Component({
	selector: "krtl-holder",
	standalone: true,
	imports: [CommonModule],
	template: "",
})
export class HolderComponent implements OnInit, OnDestroy {
	private destory$ = new EventEmitter();
	private elementRef: HTMLElement;

	constructor(elementRef: ElementRef, private content: ContentService, private route: ActivatedRoute) {
		this.elementRef = elementRef.nativeElement as HTMLElement;
	}
	ngOnInit(): void {
		merge(this.route.paramMap.pipe(map(it => it.get("id"))), this.route.data.pipe(map(it => it["id"] as string)))
			.pipe(takeUntil(this.destory$))
			.subscribe(it => {
				if (!it) {
					return;
				}
				this.intialize(it);
			});
		// this.router.events.pipe(takeUntil(this.destory$)).subscribe(it => {
		// 	if (it instanceof NavigationEnd) {
		// 		this.intialize();
		// 	}
		// });
	}
	ngOnDestroy(): void {
		this.destory$.emit();
	}

	private intialize(id: string) {
		this.content.get(id).then(it => (this.elementRef.innerHTML = it.content));
	}
}

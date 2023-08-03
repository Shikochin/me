import { CommonModule } from "@angular/common";
import { Component, ElementRef, OnInit } from "@angular/core";

import { ContentService } from "./content.service";

@Component({
	selector: "krtl-holder",
	standalone: true,
	imports: [CommonModule],
	template: "",
})
export class HolderComponent implements OnInit {
	private elementRef: HTMLElement;

	constructor(elementRef: ElementRef, private content: ContentService) {
		this.elementRef = elementRef.nativeElement as HTMLElement;
	}
	ngOnInit(): void {
	}
}

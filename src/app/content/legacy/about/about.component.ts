import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./about.component.html",
})
export class AboutComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

/**
 *
 * Temporary component for placeholder purposes only.
 * This will be removed later.
 *
 */
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-index",
	standalone: true,
	imports: [CommonModule, RouterModule, MatButtonModule],
	templateUrl: "./index.component.html",
	styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule } from "@angular/router";

@Component({
	standalone: true,
	imports: [CommonModule, RouterModule, MatButtonModule],
	templateUrl: "./notfound.component.html",
	styleUrls: ["./notfound.component.scss"],
})
export class NotfoundComponent implements OnInit {
	constructor(private router: Router) {}

	protected path = this.router.url;

	protected reload(): void {
		this.router.navigateByUrl(this.router.url);
	}

	ngOnInit(): void {}
}

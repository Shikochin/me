import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule } from "@angular/router";

@Component({
	standalone: true,
	imports: [CommonModule, RouterModule, MatButtonModule],
	templateUrl: "./notfound.component.html",
})
export class NotfoundComponent {
	protected path = signal(inject(Router).url);
}

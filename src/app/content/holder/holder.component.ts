import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "krtl-holder",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./holder.component.html",
	styleUrls: ["./holder.component.scss"],
})
export class HolderComponent {}

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./friend.component.html",
	styleUrls: ["./friend.component.scss"],
})
export class FriendComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

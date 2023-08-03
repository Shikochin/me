import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./friend.component.html",
})
export class FriendComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

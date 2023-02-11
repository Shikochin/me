import { ClipboardModule } from "@angular/cdk/clipboard";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { v4 as uuidv4 } from "uuid";

@Component({
	selector: "krtl-uuid",
	standalone: true,
	imports: [CommonModule, MatInputModule, MatButtonModule, ClipboardModule, MatIconModule],
	templateUrl: "./uuid.component.html",
	styleUrls: ["./uuid.component.scss"],
})
export class UuidComponent implements OnInit {
	protected uuidv4!: string;
	constructor() {}

	protected refreshuuidv4(): void {
		this.uuidv4 = uuidv4();
	}

	ngOnInit(): void {
		this.refreshuuidv4();
	}
}

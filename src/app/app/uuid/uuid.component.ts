import { ClipboardModule } from "@angular/cdk/clipboard";
import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { v4 as uuidv4 } from "uuid";

@Component({
	standalone: true,
	imports: [CommonModule, MatInputModule, MatButtonModule, ClipboardModule, MatIconModule],
	templateUrl: "./uuid.component.html",
})
export class UuidComponent implements OnInit {
	protected uuidv4 = signal("");

	protected refreshuuidv4(): void {
		this.uuidv4.set(uuidv4());
	}

	ngOnInit(): void {
		this.refreshuuidv4();
	}
}

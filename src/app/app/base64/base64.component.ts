import { ClipboardModule } from "@angular/cdk/clipboard";
import { TextFieldModule } from "@angular/cdk/text-field";
import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@Component({
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		ClipboardModule,
		TextFieldModule,
	],
	templateUrl: "./base64.component.html",
	styleUrls: ["./base64.component.scss"],
	// TODO:
	encapsulation: ViewEncapsulation.None,
})
export class Base64Component {
	// @HostBinding("class.reverse")
	protected reverse = false;

	protected original = "";
	protected encoded = "";

	protected convert(): void {
		if (this.reverse) {
			this.original = Base64ToUTF8(this.encoded);
		} else {
			this.encoded = UTF8ToBase64(this.original);
		}
	}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function UTF8ToBase64(it: string): string {
	return window.btoa(unescape(encodeURIComponent(it)));
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function Base64ToUTF8(it: string): string {
	return decodeURIComponent(escape(window.atob(it)));
}

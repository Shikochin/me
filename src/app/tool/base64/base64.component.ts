import { ClipboardModule } from "@angular/cdk/clipboard";
import { TextFieldModule } from "@angular/cdk/text-field";
import { Component, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "src/app/common/shared.module";

@Component({
	selector: "krtl-base64",
	standalone: true,
	imports: [SharedModule, MatInputModule, MatButtonModule, MatIconModule, ClipboardModule, TextFieldModule],
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

	protected convert() {
		if (this.reverse) {
			this.original = Base64ToUTF8(this.encoded);
		} else {
			this.encoded = UTF8ToBase64(this.original);
		}
	}
}

function UTF8ToBase64(it: string) {
	return window.btoa(unescape(encodeURIComponent(it)));
}

function Base64ToUTF8(it: string) {
	return decodeURIComponent(escape(window.atob(it)));
}

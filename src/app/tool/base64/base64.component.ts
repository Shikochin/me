import { ClipboardModule } from "@angular/cdk/clipboard";
import { Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "src/app/common/shared.module";
import { TextFieldModule } from "@angular/cdk/text-field";

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
	@HostBinding("class.reverse")
	protected reverse = false;

	protected original = "";
	protected encoded = "";

	protected convert() {
		if (this.reverse) {
			this.original = b64_to_utf8(this.encoded);
		} else {
			this.encoded = utf8_to_b64(this.original);
		}
	}
}

function utf8_to_b64(it: string) {
	return window.btoa(unescape(encodeURIComponent(it)));
}

function b64_to_utf8(it: string) {
	return decodeURIComponent(escape(window.atob(it)));
}

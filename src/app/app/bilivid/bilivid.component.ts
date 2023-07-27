import { ClipboardModule } from "@angular/cdk/clipboard";
import { TextFieldModule } from "@angular/cdk/text-field";
import { CommonModule } from "@angular/common";
import { Component, inject, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { BilividService } from "./bilivid.service";

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
	templateUrl: "./bilivid.component.html",
	styles: [
		`
			:root {
				height: 100%;
			}

			.textarea {
				mat-form-field {
					width: 100%;
					textarea {
						resize: none;
					}
				}
			}

			.large {
				.textarea {
					flex-direction: row;

					mat-form-field {
						textarea {
							height: 10vh;
						}
					}
				}
			}
		`,
	],
	// TODO:
	encapsulation: ViewEncapsulation.None,
})
export class BilividComponent {
	// @HostBinding("class.reverse")
	protected convertor = inject(BilividService);
	protected reverse = false;

	protected original = "";
	protected encoded = "";

	protected convert(): void {
		if (this.reverse) {
			if (this.encoded) {
				this.original = String(this.convertor.decode(this.encoded));
			} else {
				this.original = "";
			}
		} else {
			if (this.original) {
				this.encoded = this.convertor.encode(+this.original);
			} else {
				this.encoded = "";
			}
		}
	}
}

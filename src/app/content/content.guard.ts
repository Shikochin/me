import { inject } from "@angular/core";
import { CanMatchFn } from "@angular/router";

import { ContentService } from "./content.service";

// TODO: all rejects including network errors are displayed as
// not found,
export const contentGuard: CanMatchFn = (_, segments) =>
	inject(ContentService)
		.get(segments[0].path)
		.then(() => true)
		.catch(() => false);

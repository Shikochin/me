import { inject } from "@angular/core";
import { CanMatchFn } from "@angular/router";

import { ContentService } from "./content.service";

export const hookGuard: CanMatchFn = (_, segments) =>
	inject(ContentService).load(segments.map(segment => segment.path).join("/"));

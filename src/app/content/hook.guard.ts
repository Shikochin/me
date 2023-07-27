import { CanMatchFn } from "@angular/router";

export const hookGuard: CanMatchFn = (_, segments) => {
	console.log(segments);
	return false;
};

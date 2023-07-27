import { TestBed } from "@angular/core/testing";
import { CanMatchFn } from "@angular/router";

import { hookGuard } from "./hook.guard";

describe("hookGuard", () => {
	const executeGuard: CanMatchFn = (...guardParameters) =>
		TestBed.runInInjectionContext(() => hookGuard(...guardParameters));

	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it("should be created", () => {
		expect(executeGuard).toBeTruthy();
	});
});

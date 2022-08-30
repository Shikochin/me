import { TestBed } from "@angular/core/testing";

import { TitleManager } from "./title.service";

describe("TitleManager", () => {
	let service: TitleManager;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TitleManager);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});

import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class BilividService {
	private table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
	private tableReserve = Object.fromEntries(this.table.split("").map((value, index) => [value, index]));
	private salt = [11, 10, 3, 8, 4, 6];
	private xor = 177451812;
	private add = 8728348608;

	decode(bv: string): number {
		let result = 0;
		for (let i = 0; i < 6; i++) {
			result += this.tableReserve[bv[this.salt[i]]] * 58 ** i;
		}
		// eslint-disable-next-line no-bitwise
		return (result - this.add) ^ this.xor;
	}

	encode(av: number): string {
		// eslint-disable-next-line no-bitwise
		av = (av ^ this.xor) + this.add;
		const result = Array.from("BV1  4 1 7  ");
		for (let i = 0; i < 6; i++) {
			result[this.salt[i]] = this.table[Math.floor(av / 58 ** i) % 58];
		}
		return result.join("");
	}
}

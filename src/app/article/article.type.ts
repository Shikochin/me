export interface Article {
	id: string;
	alias?: this["id"][];
	date?: Date;
	lastModified?: Date;
	title: string;
	content: string;
}

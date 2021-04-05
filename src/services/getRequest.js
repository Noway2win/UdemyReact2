export default class ThronesApi {
	constructor() {
		this._apiUrl = `https://anapioficeandfire.com/api`;
	}
	async getResource(url) {
		const responce = await fetch(`${this._apiUrl}${url}`);
		if (!responce.ok) {
			throw new Error(`Error at ${url} with status ${responce.status}`)
		}
		return await responce.json();
	}
	getAllChar = async () => {
		const chars = await this.getResource('/characters?page=5&pageSize=10');
		return chars.map(ThronesApi._transformChar);
	}
	getCharacter = async (id) => {
		const char = await this.getResource(`/characters/${id}`);
		return ThronesApi._transformChar(char);
	}
	getAllBooks = async () => {
		const res = await this.getResource(`/books/`);
		return res.map(ThronesApi._transformBook);
	}

	getBook = async (id) => {
		const book = await this.getResource(`/books/${id}/`);
		return ThronesApi._transformBook(book);
	}
	getAllHouses = async () => {
		const res = await this.getResource(`/houses/`);
		return res.map(ThronesApi._transformHouse);
	}

	getHouse = async (id) => {
		const house = this.getResource(`/houses/${id}/`);
		return ThronesApi._transformHouse(house);
	}

	static _unSet(prop) {
		if (prop === '') {
			return 'Unknown';
		}
		return prop;
	}
	static _transformUrl = (url) => {
		const id = url.match(/[^/]+$/)[0];
		return id;
	}
	static _transformChar = (char) => {
		const { name, gender, born, died, culture, url } = char;
		return {
			name: ThronesApi._unSet(name),
			gender: ThronesApi._unSet(gender),
			born: ThronesApi._unSet(born),
			died: ThronesApi._unSet(died),
			culture: ThronesApi._unSet(culture),
			id: ThronesApi._transformUrl(url)
		}
	}
	static _transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons
		};
	}

	static _transformBook(book) {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.released
		};
	}
}
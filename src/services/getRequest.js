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
	async getAllChar() {
		const chars = await this.getResource('/characters?page=5&pageSize=10');
		return chars.map(this._transformChar);
	}
	async getCharacter(id) {
		const char = await this.getResource(`/characters/${id}`);
		return this._transformChar(char);
	}
	async getAllBooks() {
		const res = await this.getResource(`/books/`);
		return res.map(this._transformBook);
	}

	async getBook(id) {
		const book = await this.getResource(`/books/${id}/`);
		return this._transformBook(book);
	}
	async getAllHouses() {
		const res = await this.getResource(`/houses/`);
		return res.map(this._transformHouse);
	}

	async getHouse(id) {
		const house = this.getResource(`/houses/${id}/`);
		return this._transformHouse(house);
	}

	_unSet(prop) {
		if (prop === '') {
			return 'Unknown';
		}
		return prop;
	}
	_transformChar = (char) => {
		const { name, gender, born, died, culture } = char;
		return {
			name: this._unSet(name),
			gender: this._unSet(gender),
			born: this._unSet(born),
			died: this._unSet(died),
			culture: this._unSet(culture)
		}
	}
	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons
		};
	}

	_transformBook(book) {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.released
		};
	}
}
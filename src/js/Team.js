export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    if (this.characters.has(character)) {
      throw new Error("Персонаж уже добавлен!");
    }
    this.characters.add(character);
  }

  [Symbol.iterator]() {
    let index = 0;
    const charactersList = [...this.characters];
    return {
      next() {
        if (index < charactersList.length) {
          return {
            value: charactersList[index++],
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  }

  *[Symbol.iterator]() {
    for (const character of [...this.characters]) {
      yield character;
    }
  }
}

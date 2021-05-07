export default class Cards {
  static async fetchAllCards(limit) {
    const res = await (
      await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    ).json();

    const cardsArray = res.data.slice(limit * 20 - 20, limit * 20);
    return { cardsArray, totalCardLength: res.data.length };
  }

  static async fetchCardsByName(cardName) {
    const res = await (
      await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${cardName}`
      )
    ).json();

    const cardsArray = res.data;
    return { cardsArray, totalCardLength: cardsArray?.length };
  }
}

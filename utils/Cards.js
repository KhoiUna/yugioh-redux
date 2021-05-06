export default class Cards {
  static async fetchCards(index = 0) {
    const res = await (
      await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    ).json();

    const cardsArray = res.data.slice(index * 20, index * 20 + 20);
    return cardsArray;
  }
}

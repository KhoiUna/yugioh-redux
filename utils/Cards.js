export default class Cards {
  static async fetchAllCards() {
    const res = await (
      await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    ).json();
    const cardsArray = res.data;
    return cardsArray;
  }
}

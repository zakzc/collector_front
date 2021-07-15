const getOrderedMediaList = (mediaToOrder, orderingCriteria) => {
  switch (orderingCriteria.option) {
    case "author":
      return mediaToOrder.sort((a, b) => (b.author < a.author ? 1 : -1));
    case "price":
      return mediaToOrder.sort((a, b) => (b.price < a.price ? 1 : -1));
    case "title":
      return mediaToOrder.sort((a, b) => (b.title < a.title ? 1 : -1));
    case "date":
      return mediaToOrder.sort((a, b) =>
        b.dateOfPurchase < a.dateOfPurchase ? 1 : -1
      );
    case "quantity":
      return mediaToOrder.sort((a, b) => (b.quantity < a.quantity ? 1 : -1));
    default:
      return mediaToOrder;
  }
};

export default getOrderedMediaList;

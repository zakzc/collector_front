const adjustFormValues = (data) => {
  let adjustedAuthor = data.author.trim();
  let adjustedTitle = data.title.trim();
  let adjustedDate = String(
    data.yearOfPurchase + "-" + data.monthOfPurchase + "-" + data.dayOfPurchase
  );
  let adjustedPrice = Math.abs(parseFloat(data.price));
  let adjustedQuantity = Math.abs(parseInt(data.quantity));
  let adjustedSubType = data.subType.trim();
  ///
  let adjustedValues = {
    collector: data.collector,
    author: adjustedAuthor,
    dateOfPurchase: adjustedDate,
    details: data.details,
    mediaID: data.mediaID,
    notes: data.notes,
    price: Math.round(adjustedPrice * 100) / 100,
    quantity: adjustedQuantity,
    sellable: data.sellable,
    subType: adjustedSubType,
    title: adjustedTitle,
    typeOfMedia: data.typeOfMedia,
  };
  return adjustedValues;
};
export default adjustFormValues;

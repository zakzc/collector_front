const adjustFormValues = (data) => {
  console.log("=== receive values ==>  ", data);
  let adjustedDate = String(
    data.yearOfPurchase + "-" + data.monthOfPurchase + "-" + data.dayOfPurchase
  );
  let adjustedPrice = Math.abs(parseFloat(data.price));
  let adjustedQuantity = Math.abs(parseInt(data.quantity));
  ///
  let adjustedValues = {
    author: data.author,
    collector: data.collector,
    dateOfPurchase: adjustedDate,
    details: data.details,
    mediaID: data.mediaID,
    notes: data.notes,
    price: adjustedPrice,
    quantity: adjustedQuantity,
    sellable: data.sellable,
    subType: data.subType,
    title: data.title,
    typeOfMedia: data.typeOfMedia,
  };
  console.log("=== return values ==>  ", adjustedDate, data);
  return adjustedValues;
};
export default adjustFormValues;

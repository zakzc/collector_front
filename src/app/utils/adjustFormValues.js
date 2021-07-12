const adjustFormValues = (data) => {
  console.log("=== receive values ==>  ", data);
  let adjustedDate = String(
    data.yearOfPurchase + "-" + data.monthOfPurchase + "-" + data.dayOfPurchase
  );
  let adjustedPrice = Math.abs(parseInt(data.price)).toFixed(2);
  let adjustedValues = {
    _id: data._id,
    author: data.author,
    collector: data.collector,
    dateOfPurchase: adjustedDate,
    details: data.details,
    mediaID: data.mediaID,
    notes: data.notes,
    price: adjustedPrice,
    quantity: data.quantity,
    sellable: data.sellable,
    subType: data.subType,
    title: data.title,
    typeOfMedia: data.typeOfMedia,
  };
  console.log("=== return values ==>  ", adjustedDate, data);
  return adjustedValues;
};
export default adjustFormValues;

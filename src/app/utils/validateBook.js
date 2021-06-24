const validateBook = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required field";
  } else if (values.title.length < 3) {
    errors.title = "Title must be at least 3 characters long";
  }
  if (!values.author) {
    errors.author = "Required field";
  } else if (values.author.length < 1) {
    errors.author = "There must be an author";
  }
  if (!values.subTitle) {
    errors.subTitle = "Required field";
  } else if (values.subTitle.length < 3) {
    errors.subTitle = "subTitle must be at least 3 characters long";
  }
  if (!values.mediaID) {
    errors.mediaID = "Required field";
  } else if (values.mediaID.length < 3) {
    errors.mediaID = "mediaID must be at least 3 characters long";
  }
  if (!values.typeOfMedia) {
    errors.typeOfMedia = "Required field";
  } else if (values.typeOfMedia.length < 1) {
    errors.typeOfMedia = "Choose a type of media";
  }
  if (!values.price) {
    errors.price = "Required field";
  } else if (values.price.length < 3) {
    errors.price = "Price must be at least 3 numbers long";
  }
  if (!values.sellable) {
    errors.sellable = "Required field";
  } else if (values.sellable.length < 1) {
    errors.sellable = "You must inform it this item can be sold";
  }
  if (!values.dateOfPurchase) {
    errors.dateOfPurchase = "Required field";
  } else if (values.dateOfPurchase.length < 3) {
    errors.dateOfPurchase = "Date of purchase must be informed as: YYYY-MM-DD";
  }
  if (!values.quantity) {
    errors.quantity = "Required field";
  } else if (values.quantity.length < 1) {
    errors.quantity = "Quantity must be informed";
  }
  return errors;
};

export default validateBook;

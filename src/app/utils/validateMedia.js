// import { number } from "yup";

// const validateMedia = (values) => {
//   const errors = {};
//   if (!values.title) {
//     errors.title = "Required field";
//   } else if (values.title.length < 3) {
//     errors.title = "Title must be at least 3 characters long";
//   }
//   if (!values.author) {
//     errors.author = "Required field";
//   } else if (values.author.length < 1) {
//     errors.author = "There must be an author";
//   }
//   if (!values.subType) {
//     errors.subType = "Required field";
//   } else if (values.subType.length < 3) {
//     errors.subType = "subTitle must be at least 3 characters long";
//   }
//   if (!values.mediaID) {
//     errors.mediaID = "Required field";
//   } else if (values.mediaID.length < 3) {
//     errors.mediaID = "mediaID must be at least 3 characters long";
//   }

//   if (!values.price) {
//     errors.price = "Required field";
//   } else if (typeof values.price !== number) {
//     errors.price = "Price must be a number";
//   }
//   if (!values.sellable) {
//     errors.sellable = "Required field";
//   } else if (values.sellable.length < 1) {
//     errors.sellable = "You must inform it this item can be sold";
//   }
//   if (!values.dateOfPurchase) {
//     errors.dateOfPurchase = "Required field";
//   } else if (values.dateOfPurchase.length < 3) {
//     errors.dateOfPurchase = "Date of purchase must be informed as: YYYY-MM-DD";
//   }
//   if (!values.quantity) {
//     errors.quantity = "Required field";
//   } else if (typeof values.quantity !== number) {
//     errors.quantity = "Quantity must be a number";
//   }
//   errors ? console.log("error on val") : console.log("no errors on val");
//   return errors;
// };

// export default validateMedia;

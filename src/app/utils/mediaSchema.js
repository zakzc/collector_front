import * as Yup from "yup";

const MediaSchema = Yup.object().shape({
  subType: Yup.string()
    .min(2, "subType name is too short")
    .max(12, "subType name is too long")
    .required("subType is required"),
  title: Yup.string()
    .min(2, "Title is too short")
    .max(70, "Title is too long")
    .required("Title is required"),
  author: Yup.string()
    .min(2, "Author name is too short")
    .max(70, "Author name is too long")
    .required("Author is required"),
  mediaID: Yup.string()
    .min(2, "Media id is too short")
    .max(30, "Media id is too long")
    .required("Media id is required"),
  price: Yup.number().required().positive(),
  sellable: Yup.boolean().required(),
  dayOfPurchase: Yup.number()
    .positive()
    .min(1)
    .max(31)
    .required("Day range from 1 to 31"),
  monthOfPurchase: Yup.number()
    .positive()
    .min(1)
    .max(12)
    .required("Choose a month from the dropdown list"),
  yearOfPurchase: Yup.number()
    .positive()
    .min(1900)
    .max(2050)
    .required("Years range from 1900 to 2050"),
  // dateOfPurchase: Yup.date().required(
  //   "Date is required and on the format YYYY-MM-DD"
  // ),
  quantity: Yup.number().min(1, "Inform quantity").required(),
  details: Yup.string().max(120, "Reached maximum text space"),
  notes: Yup.string().max(120, "Reached maximum text space"),
});

export default MediaSchema;

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
    .max(12, "Media id is too long")
    .required("Media id is required"),
  price: Yup.number().required(),
  sellable: Yup.boolean().required(),
  dateOfPurchase: Yup.date("Date format YYYY-MM-DD").required(
    "Date is required"
  ),
  quantity: Yup.number().min(1, "Inform quantity").required(),
  details: Yup.string().max(120, "Reached maximum text space"),
  notes: Yup.string().max(120, "Reached maximum text space"),
});

export default MediaSchema;

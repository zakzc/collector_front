import * as Yup from "yup";

const Mediaschema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title is too short")
    .max(70, "Title is too long")
    .required("Title is required"),
  author: Yup.string()
    .min(2, "Author name is too short")
    .max(70, "Author name is too long")
    .required("Author is required"),
  subTitle: Yup.string()
    .min(2, "subTitle name is too short")
    .max(12, "subTitle name is too long")
    .required("subTitle is required"),
  mediaID: Yup.string()
    .min(2, "Media id is too short")
    .max(12, "Media id is too long")
    .required("Media id is required"),
  typeOfMedia: Yup.string()
    .min(1, "Type of media is mandatory")
    .max(1, "Type of media is mandatory")
    .required("Type of media must be informed"),
  price: Yup.number()
    .min(3, "Inform price in the format value.cents.")
    .max(12, "Up to 12 digits max")
    .required(),
  sellable: Yup.string()
    .min(2, "Inform yes or no")
    .max(3, "Inform yes or no")
    .required(),
  dateOfPurchase: Yup.date().required(),
  quantity: Yup.number()
    .min(1, "Inform quantity")
    .max(4, "Up to 4 digits max")
    .required(),
  details: Yup.string().max(120, "Reached maximum text space"),
  notes: Yup.string().max(120, "Reached maximum text space"),
});

export default Mediaschema;

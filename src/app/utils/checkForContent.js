const checkForContent = (formData) => {
  console.log("Rec", formData);
  if (formData.title === undefined) {
    return { message: "Title is empty" };
  } else if (!formData.author) {
    return { message: "Author is empty" };
  } else if (!formData.genre) {
    return { message: "You must inform the genre" };
  } else if (!formData.mediaId) {
    return { message: "You must inform the media Id" };
  } else if (!formData.type) {
    return { message: "Type of book is mandatory" };
  } else if (!formData.price) {
    return { message: "Price is mandatory" };
  } else if (!formData.date) {
    return { message: "Date is empty" };
  } else if (formData.sell === undefined) {
    return { message: "To sell or not to sell?" };
  } else if (!formData.quantity) {
    return { message: "Please inform the quantity" };
  } else {
    return { message: "OK" };
  }
};

export default checkForContent;

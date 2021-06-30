// import { useDispatch } from "react-redux";
// store
// import { AddMedia } from "../../store/medias";

// const UseFormData = (formMode, values) => {

//   const process = useDispatch(addMedia, values);
//   let result = { success: null };
//   process.success === "false"
//     ? (result = { success: false })
//     : (result = { success: true });
//   return result;
// } else if (formMode === "UPDATE_media") {
//   console.log("Update this media", values);
// }
// return true;
// };

// export default UseFormData;

// export const addMedia = (mediaToAdd) =>
//   apiCallBegan({
//     url: url + "/addNewItem",
//     method: "post",
//     data: mediaToAdd,
//     onSuccess: addNewMedia.type,
//   });

// //  url, method, headers, data, onStart, onSuccess, onError;

// export const updateMedia = (id, dataToUpdate) =>
//   apiCallBegan({
//     url: url + "/updateItem/" + id,
//     method: "patch",
//     data: dataToUpdate,
//     onSuccess: mediaUpdated.type,
//   });

// export const removeMedia = (id) =>
//   apiCallBegan({
//     url: url + "/deleteItem/" + id,
//     method: "delete",
//     data: null,
//     onSuccess: mediaRemoved.type,
//   });

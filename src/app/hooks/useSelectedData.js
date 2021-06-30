//import React from "react";
import { useSelector } from "react-redux";
// store
import { selectAudioAnalog } from "../../store/medias";
import { selectAudioDigital } from "../../store/medias";
import { selectBooks } from "../../store/medias";
import { selectGame } from "../../store/medias";
import { selectGraphic } from "../../store/medias";
import { selectVideo } from "../../store/medias";

export default function UseSelectedData() {
  let currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );
  let audioAnalog = useSelector(selectAudioAnalog);
  let audioDigital = useSelector(selectAudioDigital);
  let books = useSelector(selectBooks);
  let games = useSelector(selectGame);
  let graphic = useSelector(selectGraphic);
  let video = useSelector(selectVideo);
  let dataToReturn;

  switch (currentMediaView) {
    case "Analog Audio":
      dataToReturn = audioAnalog;
      break;
    case "Digital Audio":
      dataToReturn = audioDigital;
      break;
    case "Game":
      dataToReturn = games;
      break;
    case "Graphic":
      dataToReturn = graphic;
      break;
    case "Video":
      dataToReturn = video;
      break;
    default:
      dataToReturn = books;
  }

  return dataToReturn;
}

import React from "react";
import { DogDiv } from "./DogStyle"

export default function Dog({name, image, weight, temperament}) {
  return(
    <DogDiv>
      <p>{name}</p>
      <img id="dogImg" src={image}/>
      <p>{weight} kg</p>
      <p>{temperament}</p>
    </DogDiv>
  )
}
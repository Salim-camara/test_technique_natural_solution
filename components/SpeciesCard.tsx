import * as React from "react";
import { Species } from "../interfaces";
import SpeciesCardItem from "./SpeciesCardList";

const SpeciesCard = (props) => {
    return(
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <SpeciesCardItem data={item} />
          </li>
        ))}
      </ul>
)};

export default SpeciesCard;
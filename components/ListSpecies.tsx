import * as React from "react";
import { Species } from "../interfaces";
import SpeciesItem from "./SpeciesItem";

const ListSpecies = (props) => (
  <ul>
    {props.items.map((item) => (
      <li key={item.id}>
        <SpeciesItem data={item} />
      </li>
    ))}
  </ul>
);

export default ListSpecies;

import React from "react";
import { Species } from "../interfaces";

const SpeciesItem = ({ data }) => (
  <span>
    {data.id}: {data.taxon}
  </span>
);

export default SpeciesItem;

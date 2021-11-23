import {useState} from "react";
import Layout from "../components/Layout";
import { sampleSpeciesData } from "../utils/sample-data";
import {Species as SpeciesProps} from "../interfaces"
import SpeciesCard from "../components/SpeciesCard";
import SpeciesCardItem from "../components/SpeciesCardList";
import Metric from "../components/Metric";
import {List, ListItem} from "@mui/material"

const AboutPage = () => {
  const [observationsCount, setObservationsCount] = useState<number>(0)
  const [data, setData] = useState<SpeciesProps[]>(sampleSpeciesData)

  function addObservation(id: number) {
    setData(sampleSpeciesData.map((species) => species.id === id ? {...species, observationsCount: species.observationsCount + 1} : species ))
  }



  return (
  <Layout title="Natural Solutions | Next.js + TypeScript test">
    <h1>👋 About</h1>
    <SpeciesCard items={sampleSpeciesData}></SpeciesCard>
    <List>
      {data.map((d) => {
              <ListItem>
                <SpeciesCardItem key={d.id} data={d} onIncrease={addObservation}/>
              </ListItem>
      })}
    </List>
    <Metric items={data}></Metric>
  </Layout>
)};

export default AboutPage;

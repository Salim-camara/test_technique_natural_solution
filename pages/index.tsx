import Link from "next/link";
import Layout from "../components/Layout";
import { sampleSpeciesData } from "../utils/sample-data";
import ListSpecies from "../components/ListSpecies";
import Button from "@mui/material/Button";

const IndexPage = () => (
  <Layout title="Natural Solutions | Next.js + TypeScript test">
    <h1>👋 Natural Solutions | Test technique Next.js + TypeScript</h1>
    <ListSpecies items={sampleSpeciesData}></ListSpecies>
    <Button color="primary" variant="contained" >Test</Button>
  </Layout>
);

export default IndexPage;

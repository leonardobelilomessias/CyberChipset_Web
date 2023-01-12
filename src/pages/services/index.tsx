import { Card, Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { Globe } from "phosphor-react";
import { Learn } from "./Learn";
import { BannerServices } from "./BannerService";
import { FeatureServices } from "./FeatureServices";
import { HeaderServices } from "./HeaderServices";
import { InfoGrid } from "./InfoGrid";
import { Consult}  from './Consult'
import { GridtypeSites } from "./GridTypeSites";


export default function Service(){
  return(
    <Container gap={0} css={{}} fluid>
      <HeaderServices/>
      <FeatureServices/>
      <BannerServices/>
      <GridtypeSites/>
      <Learn/>
      <Consult/>
    </Container>

  )
}